# Reprepro untuk Membuat Repositori BlankOn

Berikut adalah tutorial untuk membuat repo mengunakan reprepro. Ini dibutuhkan oleh pabrik cd untuk menjahit iso.  Di tutorial ini menggunakan distro ubuntu 16.04

### Buat user arsipdev

```sh
# adduser arsipdev
```

### Pindah user dari root ke arsipdev

```sh
$ su - arsipdev
```

### Install BZR

```sh
$ sudo apt install bzr
```

### Tarik config reprepro dari bzr 

```sh
$ bzr branch http://dev.blankonlinux.or.id/browser/infrastruktur/reprepro-config-rani-debian
$ cd reprepro-config-rani-debian/
```

### Edit distributions

```sh
$ vim distributions
```

### Isi dengan berikut 

```sh
Origin: BlankOn
Label: BlankOn
Codename: uluwatu
Suite: tambora
Components: main restricted extras extras-restricted
UDebComponents: main
Architectures: i386 amd64 source
Version: 11.0
Description: BlankOn 11.0 Uluwatu
# XXXXXXXXXX
# Jangan kasih "-" di kolom Update, nanti paket2 khas2 blankon akan dihapus
Update: merge.sid
SignWith: 9120A048
DebIndices: Packages Release . .gz .bz2 tiffany.py
UDebIndices: Packages . .gz .bz2
DscIndices: Sources Release . .gz .bz2 tiffany.py
#Pull: pull.suroboyo pull.suroboyo-updates
Contents: udebs nodebs . .gz
ContentsArchitectures: i386 amd64
ContentsComponents: main restricted extras extras-restricted
ContentsUComponents: main
Log: uluwatu.log
 --type=dsc changelogs
Origin: BlankOn
Label: BlankOn
Codename: uluwatu-updates
Suite: uluwatu-updates
Components: main restricted extras extras-restricted
UDebComponents: main
Architectures: i386 amd64 source
Version: 11.0
Description: BlankOn 11.0 Tambora Updates
Update:
SignWith: 9120A048
DebIndices: Packages Release . .gz .bz2 tiffany.py
UDebIndices: Packages . .gz .bz2
DscIndices: Sources Release . .gz .bz2 tiffany.py
Contents: udebs nodebs . .gz
ContentsArchitectures: i386 amd64
ContentsComponents: main restricted extras extras-restricted
ContentsUComponents: main
Log: uluwatu-updates.log
 --type=dsc changelogs

Origin: BlankOn
Label: BlankOn
Codename: uluwatu-security
Suite: uluwatu-security
Components: main restricted extras extras-restricted
UDebComponents: main
Architectures: i386 amd64 source
Version: 11.0
Description: BlankOn 11.0 Uluwatu Security
Update:
SignWith: 9120A048
DebIndices: Packages Release . .gz .bz2 tiffany.py
UDebIndices: Packages . .gz .bz2
DscIndices: Sources Release . .gz .bz2 tiffany.py
Contents: udebs nodebs . .gz
ContentsArchitectures: i386 amd64
ContentsComponents: main restricted extras extras-restricted
ContentsUComponents: main
Log: uluwatu-security.log
 --type=dsc changelogs
```

### lalu save , kemudian edit pulls

```sh
$ vim pulls
```

### isi dengan berikut : 

```sh
Name: pull.uluwatu
From: tambora

Name: pull.uluwatu
From: tambora-updates

Name: pull.uluwatu-security
From: tambora-security
```

### lalu commit & push

```sh
$ bzr commit -m "keterangan commit"
$ bzr push bzr+ssh://bzr@dev.blankonlinux.or.id:2222/bzr/infrastruktur//reprepro-config-rani-debian
```

### update repo 

```sh
$ reprepro -v -v -v -v update uluwatu
```


## Sidik gangguan

### Kunci untuk tanda tangan tidak ditemukan

```
Could not find any key matching '9120A048'!
ERROR: Could not finish exporting 'uluwatu'!
There have been errors!
```

Pastikan kunci GPG-nya ada dan sudah ditentukan path-nya di conf/options. Pastikan juga user yang menjalankan reprepro punya hak baca ke direktori GPG tersebut.
