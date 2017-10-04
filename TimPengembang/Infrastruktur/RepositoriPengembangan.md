# Repositori Pengembangan
Repositori pengembangan menggunakan repositori berversi.
Lokasi cermin ada di /mnt/sdb1/repo-dev.
## Persiapan
### Membuat direktori
Dilakukan saat hendak membuat kode rilis baru (Meuligoe, Nanggar, Nanggar + 1,
dsb)
export NAMARILIS=<isi di sini nama rilisnya>
mkdir -p /mnt/sdb1/repo-dev/ftp-$NAMARILIS/{dists,pool}
cd /home/irgsh/repo/dev/
mkdir -p $NAMARILIS/dists/$NAMARILIS
pushd $NAMARILIS
ln -s /mnt/sdb1/repo-dev/ftp-$NAMARILIS/pool .
popd
### Membuat berkas konfigurasi
Dibuat di /home/irgsh/.mirror-$NAMARILIS.
Isinya (contoh dari isi .mirror-jaunty)
DIST=jaunty
DEST=ftp-jaunty
HOST=kambing.vlsm.org
REPOPATH=ubuntu
REPOS="main/debian-installer main restricted universe multiverse"
ARCHS="i386 amd64"
WORKDIR="/mnt/sdb1/repo-dev/ubuntu"
METHOD=rsync
## Kegiatan sehari-hari
### Membuat cermin dari upstream
export NAMARILISUPSTREAM=<isi di sini nama rilis upstreamnya>
/home/irgsh/utils/mirror-repository.sh $NAMARILISUPSTREAM
/home/irgsh/utils/release-repository.sh $NAMARILISUPSTREAM
Pembaruan cermin upstream dapat dilakukan berkala sebelum melakukan Jahitan
resmi.
### Membuat cermin dari BlankOn
export NAMARILIS=<isi di sini nama rilis blankon>
/home/irgsh/utils/mirror-repository.sh $NAMARILIS
/home/irgsh/utils/release-repository.sh $NAMARILIS
Pembaruan cermin BlankOn dapat dilakukan berkala sebelum melakukan Jahitan
harian.
## Penggunaan
Repositori digunakan dengan menuliskan baris berikut di sources.list pabrik CD:
deb http://arsip.blankonlinux.or.id/dev/jaunty jaunty/current main restricted
universe multiverse
deb http://arsip.blankonlinux.or.id/dev/nanggar nanggar/current main restricted
Kata current dapat digantikan dengan nomor versi yang digunakan pada suatu
jahitan tertentu agar memperoleh hasil jahitan yang identik dengan jahitan yang
dilakukan di dev.boi.
Nomor versi terakhir dapat dilihat di (misalnya) URL berikut: ​http://
arsip.blankonlinux.or.id/dev/nanggar/dists/nanggar/version
Last modified on 01/12/2009 03:58:18 AM
#### 
    
 
 
 
 
 
---
 
