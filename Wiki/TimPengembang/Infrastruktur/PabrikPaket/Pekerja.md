# Pekerja Pabrik Paket
Kategori: Infrastruktur/PabrikPaket/Pekerja

## Pengantar
Pekerja pabrik paket adalah sistem pembangun paket Debian.

## Instalasi
  * Buat permohonan pembuatan sertifikat pabrik paket kepada tim Infrastruktur
  * Buat permohonan pendaftaran pabrik paket kepada tim Rilis di sistem irgsh
  * Buat akun "irgsh"
        + Buat kunci ssh untuk akun tersebut
               `$ ssh-keygen -t rsa`
        + Pasang kunci publik ssh di /home/incoming/.ssh/authorized_keys di
            server arsip-dev (yeyen)
        + Tes koneksi dengan:
               `ssh incoming@arsip-dev.blankonlinux.or.id`
            Jika bisa masuk dan disambut maka proses bisa dilanjutkan, namun
            bila ditanya sandi maka perbaiki dulu

  * Pasang python-irgsh di /home/irgsh/python-irgsh
         `$ bzr branch http://dev.blankonlinux.or.id/bzr/riset/python-irgsh`

  * Pasang irgsh-node di /home/irgsh/irgsh-node
         `$ bzr branch http://dev.blankonlinux.or.id/bzr/riset/irgsh-node`

  * buat tautan "irgsh" di dalamnya:
      cd $HOME/irgsh-node
      ln -s $HOME/python-irgsh/irgsh .
        + Konfigurasikan pabrik paket:

```
            $ cat irgsh-node.conf
            [irgsh]
            node-name = NAMA-PABRIK-SESUAI-NAMA-DI-SERTIFIKAT
            build-path = /lokasi/ke/tempat/meletakkan/log/dan/tempat/kerja/
            pabrik
            server = https://irgsh.blankonlinux.or.id/xmlrpc/
            cert = /lokasi/tempat/meletakkan/sertifikat.cert
            cert-key = /lokasi/tempat/meletakkan/sertifikat.key
```

  * Pasang blankon-debootstrap-script Paket blankon-debootstrap-script ada di
      repository BlankOn
   `$ sudo apt-get install blankon-debootstrap-script`

  * Ambil pattimura-builder-configuration dengan bzr, modifikasi berkas
```      
	pbuilder.conf,
      MIRRORSITE=http://arsip-dev.blankonlinux.or.id/blankon
```

     kemudian, tambahkan bila perlu:

```
     export http_proxy=http://server.proxy.anda:port
     export DEB_BUILD_OPTS="parallel=X"
```
      # X = jumlah inti prosesor Anda

  * Bangun paket tersebut dan instal, ini akan memakan waktu lama karena akan
      mengunduh berkas-berkas dari lumbung
  * Beri kepemilikan grup direktori hasil pbuilder menjadi milik grup irgsh:

```
      chgrp irgsh /var/lib/irgsh/pbuilder/pattimura/result
      chmod 775 /var/lib/irgsh/pbuilder/pattimura/result
```

  * Jalankan pabrik paket

```
      cd $HOME/irgsh-node
      nohup ./irgsh-node.py > log 2>&1 &
```

  * Pastikan pabrik terdaftar dan tercantum dalam status aktif di situs
      ​http://irgsh.blankonlinux.or.id

Last modified on 12/19/2010 03:47:33 AM
 
---
 
