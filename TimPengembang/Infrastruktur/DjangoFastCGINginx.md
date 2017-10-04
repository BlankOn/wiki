# django/FastCGI/nginx administration on `waljinah`

Administrasi web blankon yang berbasis django dilayani oleh nginx lewat protokol FastCGI.

    +==========+
    |  client  |         +=======+               +========+
    | requests | <-----> | nginx | <--FastCGI--> | django |
    |          |         +=======+               +========+
    +==========+

gambar di atas adalah skema komunikasi antara web django, nginx, dan request dari user.

file-file penting untuk administrasi web ada di:

1. `/home/situs/run`:
    * file dengan ekstensi .pid adalah PID dari daemon FastCGI untuk setiap web django
    * file dengan ekstensi .socket adalah UNIX socket untuk melayani request dari nginx
2. file `/etc/init.d/fastcgi` adalah *initscript* untuk *start*/*stop*/*restart* daemon FastCGI untuk web 
`aku.blankonlinux.or.id`
3. file `restart-django.sh` dalam folder `/home/situs/bin` digunakan untuk me-*restart* daemon FastCGI untuk web:
    * `ayo.semua.di.blankon.in`
    * `w.blankon.in`
    * `tempel.blankon.in`
    * `irclog.blankon.in`
    * `security.blankonlinux.or.id`
    * versi lama `blankonlinux.or.id`

untuk me-*restart* daemon FastCGI seluruh web django, jalankan perintah berikut ini:

    $ sudo su - situs
    situs$ restart-django.sh
    situs$ exit
    $ sudo chown www-data:www-data /home/situs/run/*.socket

untuk me-*restart* daemon FastCGI untuk web django tertentu saja:

    $ sudo su - situs
    situs$ cd /home/situs/namafolder
    situs$ kill `cat /home/situs/run/namafolder.pid`
    situs$ rm -f /home/situs/run/namafolder.pid
    situs$ ./manage.py fastcgi method=threaded socket=/home/situs/run/namafolder.socket pidfile=/home/situs/run/namafolder.pid 
    situs$ exit
    $ sudo chown www-data:www-data /home/situs/run/namafolder.socket

ganti `namafolder` dengan folder web django yang bersangkutan.
