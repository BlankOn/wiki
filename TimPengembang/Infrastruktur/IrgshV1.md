<img src="https://badgen.net/badge/wiki/kadaluarsa/red?icon=github">


# Menjalankan irgsh di `rani` :

Masuk sebagai user `irgsh`

    $ sudo -u irgsh -i

pindah direktori kerja ke direktori web irgsh

    irgsh$ cd v2/web-interfaces

Jalankan script fastcgi

    irgsh$ ./run-fastcgi-2.sh

Gunakan `tmux` atau `screen` untuk manjalankan skrip taskinit

    irgsh$ tmux ### atau screen

jalankan skrip taskinit

    irgsh$ ./run-taskinit-2.sh

detach dari *tmux* atau *screen*


# Menjalankan irgsh di `alynne` :

## irgsh-web

### web

Masuk sebagai user irgsh, pindah ke `/home/irgsh/irgsh-web/`, lalu :

```bash
$ python manage.py runfcgi method=prefork host=0.0.0.0 port=8001
```

### taskinit

Masuk sebagai user irgsh, pindah ke `/home/irgsh/irgsh-web/`, bikin screen baru, lalu :

```bash
$ python manage.py celeryd -n taskinit -l DEBUG
```

## irgsh-node

Masuk sebagai user builder, pindah ke `/home/builder/irgsh-node`, bikin screen baru, lalu :

```bash
$ ./bin/irgsh-node -l DEBUG
```

Untuk uploader, bikin screen baru, lalu :

```bash
$ ./bin/irgsh-uploader -l DEBUG
```

## irgsh-repo
Masuk sebagai user irgsh-repo, pindah ke `/home/irgsh-repo/irgsh-repo`, bikin screen baru, lalu :

```bash
$ sudo ./bin/irgsh-repo -l DEBUG
```


# Sidik gangguan

### error:140B0002:SSL routines:SSL_CTX_use_PrivateKey_file:system

```
[2017-08-26 23:39:48,111: ERROR/MainProcess] Consumer: Connection Error: [Errno 336265218] _ssl.c:347: error:140B0002:SSL routines:SSL_CTX_use_PrivateKey_file:system lib. Trying again in 4 seconds...
```

Cek sertifikat dan kunci private milik builder terkait. Berkas sertifikat dan kunci tersebut mesti bisa dibaca oleh user yang menjalankan builder / irgsh-node.

### Unduhan via source type Git macet

Cek ke log taskinit, jawab yes, 

```
[2017-08-26 23:21:20,448: DEBUG/MainProcess] Mediator: Running callback for task: irgsh_web.build.tasks.UploadSource[c55c0fbf-6822-4f1f-8505-dd22aa8ac8a3]
[2017-08-26 23:21:20,449: DEBUG/MainProcess] TaskPool: Apply <function execute_and_trace at 0x562655c397d0> (args:('irgsh_web.build.tasks.UploadSource', 'c55c0fbf-6822-4f1f-8505-dd22aa8ac8a3', (9721, [u'aglfn_1.7-3blankon1.dsc', u'aglfn_1.7.orig.tar.gz', u'aglfn_1.7-3blankon1.debian.tar.xz']), {}) kwargs:{'hostname': 'taskinit', 'request': {'retries': 0, 'loglevel': 10, 'delivery_info': {'consumer_tag': u'2', 'routing_key': u'celery', 'exchange': u'celery'}, 'is_eager': False, 'taskset': None, 'logfile': None, 'id': 'c55c0fbf-6822-4f1f-8505-dd22aa8ac8a3'}})
[2017-08-26 23:21:20,450: DEBUG/MainProcess] Task accepted: irgsh_web.build.tasks.UploadSource[c55c0fbf-6822-4f1f-8505-dd22aa8ac8a3] pid:14269
The authenticity of host '[irgsh.blankonlinux.or.id]:2222 ([119.82.243.189]:2222)' can't be established.
ECDSA key fingerprint is SHA256:/Pw5PuRr/9yLdJ3rsh+PQocooznhj9XfxL30gARbmqU.
Are you sure you want to continue connecting (yes/no)? yes
```

### Build macet di Waiting for Initialization

Cek ke log taskinit, lengkapi yang kurang. Contoh galat yang mungkin terjadi, 

```
[2017-08-26 22:38:43,807: DEBUG/PoolWorker-8] Channel open
[2017-08-26 22:38:43,814: DEBUG/PoolWorker-8] Closed channel #1
[2017-08-26 22:38:43,852: ERROR/MainProcess] Task irgsh_web.build.tasks.InitSpecification[43f0e563-48e3-4759-8bd0-c9978360b2b4] raised exception: ImportError('No module named lzma',)
Traceback (most recent call last):
  File "/home/irgsh-web/.pyenv/versions/irgsh-web/lib/python2.6/site-packages/celery/execute/trace.py", line 34, in trace
    return cls(states.SUCCESS, retval=fun(*args, **kwargs))
  File "/home/irgsh-web/.pyenv/versions/irgsh-web/lib/python2.6/site-packages/celery/task/base.py", line 241, in __call__
    return self.run(*args, **kwargs)
  File "/home/irgsh-web/irgsh-web/irgsh_web/build/tasks.py", line 33, in run
    init.start()
  File "/home/irgsh-web/irgsh-web/irgsh_web/build/utils.py", line 179, in start
    def start(self):
  File "/home/irgsh-web/irgsh-web/irgsh/source/__init__.py", line 1, in <module>
    from .packager import SourcePackageBuilder
  File "/home/irgsh-web/irgsh-web/irgsh/source/packager.py", line 10, in <module>
    import lzma
ImportError: No module named lzma

None
```

### Kode sumber tidak dapat diunduh

Galatnya seperti berikut

```
[2017-08-07 06:59:41,400: WARNING/PoolWorker-7] [Errno 13] Permission denied: '/run/irgsh-logs'
```
dan 
```
Specification initialization failed: 'NoneType' object has no attribute 'write'
```

Dikarenakan direktori `/run/irgsh-logs` tidak ada. Setelah dibuat lalu mesin dimulai-ulang, direktori ini akan hilang dan perlu dibuat lagi. Jalan lupa permission baca tulisnya disetel juga.

### Galat memori'Memory exeption'

Jika terjadi galat memori akan tampil pesan `<type> memory exeption ` solusinya adalah dengan menambah kapasitas memori di mesin.

```bash
$ sudo mkdir -p /run/irgsh-logs && sudo chmod a+rw /run/irgsh-logs
```


### X not installed

```
 -> Attempting to satisfy build-dependencies
 -> Creating pbuilder-satisfydepends-dummy package
Package: pbuilder-satisfydepends-dummy
Version: 0.invalid.0
Architecture: amd64
Maintainer: Debian Pbuilder Team <pbuilder-maint@lists.alioth.debian.org>
Description: Dummy package to satisfy dependencies with aptitude - created by pbuilder
 This package was created automatically by pbuilder and should
Depends: cdbs, debhelper (>= 10), dpkg-dev (>= 1.16.1~), libaccountsservice-dev (>= 0.6.39), desktop-file-utils, gnome-common, gnome-pkg-tools (>= 0.10), gnome-settings-daemon-dev (>= 3.19.1), gsettings-desktop-schemas-dev (>= 3.21.4), gtk-doc-tools, intltool (>= 0.37.1), libcanberra-gtk3-dev, libcheese-gtk-dev (>= 3.5.91), libcolord-dev (>= 0.1.29), libcolord-gtk-dev (>= 0.1.24), libcups2-dev, libgdk-pixbuf2.0-dev (>= 2.23.0), libgirepository1.0-dev, libglib2.0-dev (>= 2.44.0), libgnome-desktop-3-dev (>= 3.21.2), libgnomekbd-dev (>= 2.91.91), libgnome-bluetooth-dev (>= 3.18.0), libibus-1.0-dev (>= 1.5.2), libgoa-1.0-dev (>= 3.21.5), libgrilo-0.3-dev (>= 0.3.0), libgtk-3-dev (>= 3.22.0), libgtop2-dev, libgudev-1.0-dev, libkrb5-dev, libnm-dev (>= 1.2.0), libnma-dev (>= 1.2.0), libmm-glib-dev, libpolkit-gobject-1-dev (>= 0.103), libpulse-dev, libpwquality-dev, libsmbclient-dev (>= 2:3.6.12-1~), libupower-glib-dev (>= 0.99.0), libwacom-dev (>= 0.7), libxi-dev (>= 2:1.2), libx11-dev, libxft-dev (>= 2.1.2), libxklavier-dev (>= 5.1), libxml2-dev, locales, shared-mime-info, tzdata
dpkg-deb: building package 'pbuilder-satisfydepends-dummy' in '/tmp/satisfydepends-aptitude/pbuilder-satisfydepends-dummy.deb'.
Reading package lists...
Building dependency tree...
Reading state information...
aptitude is already the newest version (0.8.7-1).
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
Selecting previously unselected package pbuilder-satisfydepends-dummy.
(Reading database ... 17307 files and directories currently installed.)
Preparing to unpack .../pbuilder-satisfydepends-dummy.deb ...
Unpacking pbuilder-satisfydepends-dummy (0.invalid.0) ...
dpkg: dependency problems prevent configuration of pbuilder-satisfydepends-dummy:
 pbuilder-satisfydepends-dummy depends on cdbs; however:
  Package cdbs is not installed.
 pbuilder-satisfydepends-dummy depends on libaccountsservice-dev (>= 0.6.39); however:
  Package libaccountsservice-dev is not installed.
```

Masuk ke base.tgz ( dengan opsi --save-after-login dan --save-after-exec), lalu pasang paket terkait. Saat logout, perubahan akan tersimpan. Ulangi buildnya.

### No suitable builder found

Hal ini disebabkan karena irgsh belum dapat menerima '''linux-any'''. Oleh karena itu, '''linux-any''' diganti menjadi '''any''' ketika terdapat pada '''architecture''' dan dihapus jika terdapat di dependensi paket.

### Build gagal, banyak paket yang 404 di build.log.gz

Kondisi paling dekat adalah reprepro sudah menarik index paket namun belum selesai mengunduh keseluruhan paket-paket aslinya.

### Build gagal setelah langkah `Uploading package` dan tidak ada laporan dari repo.log

Cek ke user builder, lihat log `irgsh-uploader`. Jika ada indikasi kegagalan unggah, ujicoba kembali akses ssh antar user terkait IRGSH satu sama lain melalui konfigurasi SSH bawaan (port 22). Misal dari `irgsh-builder-ajeng` ke `irgsh-repo`. Pastikan mereka bisa saling mengakses.


# Sertifikat

Sertifikat-sertifikat untuk keperluan irgsh terletak di `/cert/`.
