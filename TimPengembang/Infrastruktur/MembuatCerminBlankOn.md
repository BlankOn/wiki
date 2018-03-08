# Membuat Cermin BlankOn

berikut ini adalah langkah untuk membuat cermin BlankOn,

pertama siapkan reprepro

```sh
$ sudo apt-get install reprepro
```

kemudian buat distribusi BlankOn, pasang konfigurasi untuk melakukan pembaruan dari arsip.boi

```sh
$ mkdir ~/repo/bulangkon
$ cd ~/repo/bulangkon
```

trus bikin berkas2 berikut:

```
$ vim conf/updates
```
isinya

```
-----------------awal----------
Name: mergeblankon
Suite: ombilin
Method: http://arsip.blankonlinux.or.id/blankon
Architectures: i386 amd64 source
Components: main restricted
-----------------akhir----------
```

```
$ vim conf/distributions
```
isinya

```
-----------------awal----------
Origin: BlankOn
Label: BlankOn
Version: 6.0
Suite: ombilin
Codename: ombilin
Architectures: i386 amd64 source
Components: main restricted
Description: Ombilin
Update: - mergeblankon
-----------------akhir----------
```

kemudian jalankan reprepro

```sh
$ reprepro -v -v -v update
```

lakukan setiap hari/atau jika ingin ada perubahan, kemudian pasang skrip pabrik-cd rujukan http://dev.blankonlinux.or.id/browser/infrastruktur/pabrik-cd

Untuk membuat cabang:

```sh
$ bzr branch http://dev.blankonlinux.or.id/bzr/infrastruktur/pabrik-cd/
```

Untuk memperbaharui:

```sh
$ bzr push bzr+ssh://bzr@dev.blankonlinux.or.id/bzr/infrastruktur/pabrik-cd/
```

kemudian di profil pasang repo lokal

kemudian Jahit

---
 
