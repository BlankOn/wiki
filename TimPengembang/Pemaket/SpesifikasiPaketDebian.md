# Spesifikasi Paket Debian

Halaman ini menjelaskan tentang spesifikasi paket Debian yang didefinisikan dalam source tree bernama `debian` (lihat https://github.com/blankon-packages). Setiap perangkat lunak yang akan dipaketkan perlu setidaknya memiliki direktori `debian` ini. Jika belum ada di https://github.com/blankon-packages, silakan dibuatkan lumbung kodenya.

### changelog

Berkas `changelog` mengandung riwayat pemeliharaan paket. Setiap paket diperbarui atau ditambal, berkas ini perlu diperbarui. Setiap item pembaruannya mengandung minimal baris-baris berikut.

```
hai (0.0.1-1) unstable; urgency=medium
  * Initial release!
 -- Herpiko Dwi Aguno <herpiko@aguno.xyz>  Fri, 06 Nov 2020 12:08:30 +0000
```

Penjelasan:
- `hai` - nama paket
- `(0.0.1-1)` - versi paket. Bila item riwayat ditambah, versi ini perlu dinaikkan. Mengenai versi paket, silakan mengacu ke https://github.com/BlankOn/wiki/blob/master/TimPengembang/Pemaket/PenomoranVersi.md.
- `urgency=medium` - urgensi paket, apakah sifatnya segera untuk dimasukkan ke dalam lumbung paket. Jenis pembaruan yang urgensinya tinggi contohnya tambalan lubang keamanan.
- `Initial release!` - Deskripsi yang menjelaskan tentang pembaruan yang dilakukan
- `Herpiko Dwi Aguno <herpiko@aguno.xyz>` - Identitas pemelihara paket
- `Fri, 06 Nov 2020 12:08:30 +0000` - Waktu pembaruan paket

### compat

Kompatibilitas dengan debhelper (saat halaman ini disunting, versi terbarunya adalah 12). Di protokol yang lebih baru, berkas ini dipindah ke `control`, `bagian Build-Depends`.

### control

Informasi metadata dari paket yang nantinya akan dikonsumsi oleh dpkg, apt-get, aptitude, apt dan sebagainya.
```
Source: hai
Section: unknown
Priority: optional
Maintainer: Herpiko Dwi Aguno <herpiko@aguno.xyz>
Build-Depends: debhelper-compat (= 12)
Standards-Version: 0.0.1
Homepage: https://dev.blankonlinux.or.id

Package: hai
Architecture: any
Depends: ${shlibs:Depends}, ${misc:Depends}
Description: Example program for debian packaging fundamental class.
```

Penjelasan:
- `Source` - nama paket
- `Section` - Seksi/bagian paket. Misal jika paket ini adalah satu dari kumpulan besar paket-paket yang saling bergantung, misalnya Gnome, dapat diberi nilai `gnome`.
- `Priority` - ?https://www.debian.org/doc/debian-policy/
- `Maintainer` - Identitas pemelihara paket.
- `Build-Depends` - Dependensi pembangunan paket (bukan dependensi paket saat sudah jadi dan digunakan oleh pengguna akhir)
- `Standars-Version` - Protokol pemaketan Debian yang diikuti oleh berkas spesifikasi ini (lihahttps://www.debian.org/doc/debian-policy/t https://www.debian.org/doc/debian-policy/)
- `Homepage` - alamat proyek hulu
- `Package` - nama paket
- `Architecture` - arsitektur mesin yang didukung
- `Depends` - Dependensi paket saat sudah jadi dan digunakan oleh pengguna akhir.
- `Description` - Deskripsi yang menjelaskan tentang paket


Dalam perawatan berkas ini, nama pemelihara asli (original maintainer) tetap dilampirkan, tapi nama kolomnya diganti. Contoh,

Asli:
```
Maintainer: Santiago Vila <sanvila@debian.org>
```

Pembaruan:
```
Maintainer: Nama Pendekar <namapendekar@blankon.in>
XSBC-Original-Maintainer: Si Fulan <fulan@proyekhulu.org>
```

Contoh nyata: https://github.com/blankon-packages/base-files/blob/master/debian/control#L5

Referensi:
- https://wiki.ubuntu.com/UbuntuDevelopment/FAQ

### copyright

Lisensi dari perangkat lunak yang dipaketkan. Jika perangkat lunak berlisensi A, maka lisensi A perlu dimasukkan ke sini. Tidak boleh hulu lisensinya A, namun di sini ditulis B.

### install

Untuk berkas/direktori yang tidak dipasang oleh ‘make install’ dapat didaftarkan ke sini supaya dapat terpasang ke sistem
Pola berikut akan membawa berkas binari `src/bar` ke direktori `/usr/bin/`.

```
src/bar /usr/bin
```

### rules

?

TODO: perlu penjelasan lebih lanjut

###
