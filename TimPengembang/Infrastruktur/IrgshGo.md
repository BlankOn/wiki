# Irgsh-go

## Mendaftarkan kunci pemaket ke irgsh

- Bawa kunci publik pemaket terkait ke `rani.boi`
- Masuk ke `rani.boi`
- Ganti pakaian ke pengguna `irgsh`
- Impor kunci publi pemaket terkait dengan perintah `gpg --import < /path/to/pubkey`
- Setelah diimpor, pastikan identitas pemaket terkait terdaftar, cek dengan perintah `gpg --list-key`

## Sidik Gangguan

### Saat membangun paket, paket-paket tertentu tidak ditemukan di lumbung hulu

Galatnya semacam ini,
```
Err:1 http://kartolo.sby.datautama.net.id/debian sid/main amd64 libfakeroot amd64 1.25.3-1
  404  Not Found [IP: 123.255.202.74 80]
Err:2 http://kartolo.sby.datautama.net.id/debian sid/main amd64 fakeroot amd64 1.25.3-1
  404  Not Found [IP: 123.255.202.74 80]
E: Failed to fetch http://kartolo.sby.datautama.net.id/debian/pool/main/f/fakeroot/libfakeroot_1.25.3-1_amd64.deb  404  Not Found [IP: 123.255.202.74 80]
E: Failed to fetch http://kartolo.sby.datautama.net.id/debian/pool/main/f/fakeroot/fakeroot_1.25.3-1_amd64.deb  404  Not Found [IP: 123.255.202.74 80]
E: Unable to fetch some archives, maybe run apt-get update or try with --fix-missing?
I: Copying back the cached apt archive contents
I: unmounting dev/ptmx filesystem
I: unmounting dev/pts filesystem
I: unmounting dev/shm filesystem
I: unmounting proc filesystem
I: unmounting sys filesystem
I: cleaning the build env 
I: removing directory /var/cache/pbuilder/build/7 and its subdirectories

404 page not found
```

Hal ini disebabkan base.tgz yang digunakan oleh pbuilder (dalam kasus irgsh-go, oleh pbocker) tertinggal oleh pembaruan yang terjadi di lumbung hulu. Perbarui dengan langkah berikut:
- Masuk ke `rani.boi`
- Ganti pakaian ke pengguna `irgsh`
- Perbarui base.tgz-nya dengan perintah (dengan sudo), `sudo irgsh-builder update-base`
- Perbarui pbockernya dengan perintah (tanpa sudo), `irgsh-builder init-builder`
