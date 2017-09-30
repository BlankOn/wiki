## django/FastCGI/nginx administration on `waljinah`

Administrasi web blankon yang berbasis django dilayani oleh nginx lewat protokol FastCGI.

    +==========+
    |  client  |         +=======+               +========+
    | requests | <-----> | nginx | <--FastCGI--> | django |
    |          |         +=======+               +========+
    +==========+

gambar di atas adalah skema komunikasi antara web django, nginx, dan request dari user.

file-file penting untuk administrasi web ada di:

1. `/home/situs/run`:
    * file `restart.sh` sebagai wrapper *initscript* daemon FastCGI, untuk mengganti *ownership* 
dari socket file yang ada di dalam folder ini
    * file dengan ekstensi .pid adalah PID dari daemon FastCGI untuk setiap web django
    * file dengan ekstensi .socket adalah UNIX socket untuk melayani request dari nginx
2. file `/etc/init.d/fastcgi` adalah *initscript* untuk *start*/*stop*/*restart* daemon FastCGI.
daftar web yang dinyalakan ada di variable `DJANGO_SITES`. value dari variable ini adalah web django yang ada
subfolder-subfolder dalam /home/situs

untuk me-*restart* daemon FastCGI seluruh web django, jalankan `restart.sh` di dalam `/home/situs/run` sebagai user `root`:

    $ sudo /home/situs/run/restart.sh

untuk me-*restart* daemon FastCGI untuk web django tertentu saja:

    $ sudo -u situs -i
    situs$ cd /home/situs/namafolder
    situs$ kill -9 `cat /home/situs/run/namafolder.pid`
    situs$ ./manage.py fastcgi method=threaded socket=/home/situs/run/namafolder.socket pidfile=/home/situs/run/namafolder.pid 
    situs$ exit
    $ sudo -i
    # cd /home/situs/run
    # chmod www-data:www-data namafolder.socket

ganti `namafolder` dengan folder web django yang bersangkutan.
