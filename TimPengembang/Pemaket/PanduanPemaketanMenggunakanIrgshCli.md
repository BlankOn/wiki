# Langkah Pemaketan menggunakan irgsh-cli

## Persiapan

Sebelum memaketkan sesuatu, pastikan dulu komputernya sudah siap untuk melakukan pemaketan. Langkah-langkah persiapan bisa dilihat di [sini](http://antosamalona.onmi.my.id/membuat-paket-di-blankon/) dan di [sini](https://github.com/BlankOn/wiki/blob/master/TimPengembang/Pemaket/PanduanIrgshCLIUntukPemaket.md).

Pastikan di berkas `~/.bashrc` atau `~/.zshrc` sudah diatur mengenai `DEBFULLNAME` dan `DEBEMAIL`. Hal ini agar saat melakukan changelog, yang tertulis sesuai yang diatur di `DEBFULLNAME` dan `DEBEMAIL` alih-alih nama user lokal kita.

## Edit paket debian


1. Clone repositori paket yang akan diubah dari repo blankon-packages. Misalnya kita akan memaketkan repo `blankon-repository-setup`.
	```
	$ git clone git@github.com:blankon-packages/blankon-repository-setup.git
	``` 


1. Sebelum melakukan perubahan apapun, buat dulu branch `uluwatu`. Setelah itu push ke remote. Nantinya repo master menjadi repo default untuk Verbeek.
	```
	$ git branch uluwatu
	$ git branch
	$ git push origin uluwatu
	```

1. Lakukan perubahan sesuai paket yang akan dipaketkan. Silakan ubah berkas control, rules, dll sesuai kebutuhan. Jika sudah dirasa cukup, lakukan perintah `dch -i`. Nantinya akan terbuka editor (misalnya nano) dengan versi yang sudah naik (increment). Jika kita hanya ingin mengedit berkas tanpa mengubah versi, lakukan perintah `dch -e`. Untuk panduan penomoran versi dapat dibaca di [sini](https://github.com/BlankOn/wiki/blob/master/TimPengembang/Pemaket/PenomoranVersi.md).
	```
	$ dch -i
	(nantinya berkas changelog akan dibuka. Silakan isi perubahan apa yang sudah dilakukan)
	blankon-repository-setup (0.12) verbeek; urgency=medium

	  * Repository for Verbeek

	 -- Hanhan Husna <matcherapy@gmail.com>  Sat, 28 Nov 2020 08:19:40 +0700

	blankon-repository-setup (0.11) uluwatu; urgency=medium

	  * Move to arsip.boi

	 -- antosamalona <ansamsoftdev@gmail.com>  Wed, 02 May 2018 11:49:03 +0800
	```

1. pindah direktori ke atas `debian`. Jika ingin mencoba apakah perubahan kita berhasil dan paket bisa dibangun, lakukan perintah `debuild -S`.
	```
	$ cd ..
	$ debuild -S
	```

1. Jika dirasa sudah oke, commit perubahan dan dorong ke github.
	```
	$ git add debian/changelog debian/control (sesuai berkas yang sudah diedit apa saja)
	$ git commit -m "pesan commit"
	$ git push origin master
	```

1. Langkah terakhir, build paket di awan menggunakan `irgsh-cli`. Untuk percobaan, gunakan `--experimental`. 
	```
	$ irgsh-cli submit --experimental --package https://github.com/blankon-packages/blankon-repository-setup
	```

1. Jika tidak ada masalah, cek hasilnya di [sini](http://arsip-dev.blankonlinux.or.id/experimental/pool/main/) dan lognya di [sini](https://irgsh.blankonlinux.or.id/logs/). Namun jika ternyata berkas dan lognya belum juga muncul, silakan cek log irgsh:
	```
	$ irgsh-cli log
	```
