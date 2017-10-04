# Pekerja V2
Kategori: Infrastruktur/PabrikPaket/PekerjaV2

## irgsh-node
irgsh-node adalah pabrik pekerja dalam infrastruktur ​pabrik_paket BlankOn.

### Kebutuhan Administrasi
   1. Sertifikat SSL untuk pabrik paket, ditandatangani oleh CA Irgsh BlankOn.
   2. Kunci SSH.
   3. Akun di ​Irgsh yg dapat diperoleh dengan melampirkan:
         1. Judul sertifikat SSL
         2. Kunci publik SSH
         3. Nama pabrik
         4. Arsitektur pabrik

### Kebutuhan Aplikasi
`$ sudo apt-get install python dput pbuilder git-core`

### Instalasi
#### Mendapatkan kode sumber
Kode sumber akan diambil langsung dari repositori di GitHub?.

```
$ git clone git://github.com/BlankOn/python-irgsh.git
$ git clone git://github.com/BlankOn/irgsh-node.git
$ cd irgsh-node
$ ln -s ../python-irgsh/irgsh
```

#### Menyiapkan irgsh-node
Instalasi irgsh-node akan disiapkan oleh skrip ​Buildout yang disertakan.
Pustaka Python lain yang dibutuhkan akan otomatis diunduh oleh Buildout.

```
$ cd irgsh-node
$ python bootstrap.py
$ ./bin/buildout
```

### Konfigurasi
#### irgsh-node
Sunting berkas irgsh-node.conf dan atur nilai-nilai berikut.
  * irgsh
          o node-name berisi nama pabrik, sesuai yang didaftarkan ke ​Irgsh.
          o arch berisi arsitektur pabrik, misalnya i386 atau amd64.
          o ssl-cert berisi path menuju berkas sertifikat SSL.
          o ssl-key berisi path menuju berkas kunci privat SSL.

#### SSH
Sunting berkas ~/.ssh/config dan tambahkan isian berikut.
Host rani.blankonlinux.or.id
HostName rani.blankonlinux.or.id
Port 2222
IdentityFile /path/menuju/kunci/privat/ssh.key

#### sudo
Pastikan pengguna yang menjalankan irgsh-node dapat memanggil /usr/sbin/
pbuilder dengan sudo tanpa dimintai kata kunci. Contoh isi /etc/sudoers
(sunting dengan visudo).
pabrik ALL=NOPASSWD: /usr/sbin/pbuilder

### Eksekusi
Ada dua buah aplikasi yang perlu dijalankan: pabrik irgsh-node dan pengunggah
irgsh-uploader.

#### Pabrik
`$ cd irgsh-node`
`$ ./bin/irgsh-node`

#### Pengunggah
`$ cd irgsh-node`
`$ ./bin/irgsh-uploader`

Last modified on 10/05/2011 07:37:34 PM

---
 
