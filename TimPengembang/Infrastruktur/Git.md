# Git

Lumbung Git disediakan di mesin Rani. Akun git menggunakan UID dan GID yang
identik dengan akun bzr. Semua orang yang memiliki hak tulis di bzr juga
otomatis punya akses ke git. Berkas ~git/.ssh/authorized_keys merupakan tautan
simbolis ke ~bzr/.ssh/authorized_keys.
Lumbung diletakkan di direktori /home/git/git/<nama-modul>. Tautan simbolis di
/git yang mengarah ke /home/git/git diperlukan agar bisa mengakses git dengan
url git@rani:/git/<nama-modul>

### Cara membuat lumbung kode

```
\# su - git
$ cd git
$ mkdir <nama-modul>
$ cd <nama-modul>
$ git init --bare
```

Diharapkan ini nanti bisa otomatis via web

### Cara menggunakan lumbung kode
Karena gerbang ssh dipakai pada nomor 2222 maka perlu ada konfigurasi ssh di
`~/.ssh/config` minimal seperti ini`

```
host rani
   HostName rani.blankonlinux.or.id
   port 2222
```

URL yang digunakan adalah git@rani:/git/<nama-modul>
Untuk mendorong kode yang ada di komputer lokal tinggal lakukan penambahan
server dengan cara:
`git remote add rani git@rani:/git/<nama-modul>`

Kemudian lakukan pendorongan seperti:
`git push rani master`

Last modified on 06/03/2011 12:26:44 PM

---
 
