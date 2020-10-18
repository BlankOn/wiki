# Kelas Penyegaran Pemaketan (09-05-2017)
Sumber: http://irclog.blankon.in/blankon/20170509/

## ============ Kelas dimulai ==================


20:02 antosamalona: ==========================================kelas penyegaran pemaketan===================================

20:02 febrianrendak: mari mari

20:02 antosamalona: Assalamu'alaikum warahmatullahi wabarakatuh dan salam sejahtera bagi kita semua

20:03 samsul: wa'alaikumsalam warohmatullohi wabarokaatuun...

20:03 antosamalona: terima kasih untuk bapak2 dan ibu yg sudah menyempatkan ikut di kelas ini

20:03 darianrizal: wa'alaikumsalam warohmatullohi wabarokaatuu

20:03 *** benben159 has joined #blankon

20:04 benben159: halo

20:04 *** Kiflie has joined #blankon

20:04 benben159: selamat malam kawan2

20:04 Kiflie: malam Pak Bapak

20:04 misskecupbung: Waalaikumsallam pak,

20:04 antosamalona: malam pak benben159 pak Kiflie

20:05 antosamalona: sekedar info, baru mulai pak benben159 pak Kiflie

20:05 benben159: okay

20:05 Kiflie: ok lanjut pak

20:05 darianrizal: pak benben159 irclog pak tulung idupin

20:05 darianrizal: lanjut pak antosamalona

20:05 antosamalona: oke, pak

20:06 antosamalona: saya mohon maaf sebelumnya jika ada yg salah, kita sama2 belajar.

20:06 *** irgsh has joined #blankon

20:06 *** ChanServ sets mode: +o irgsh

20:06 antosamalona: untuk memaketkan paket blankon silahkan pasang peralatan berikut:

20:07 antosamalona: http://tempel.blankon.in/4229495

20:07 antosamalona: oh iya, bisa pakai debian atau turunannya

20:08 antosamalona: mengingat repo belum sembuh atau pakai repo ridon.id

20:08 antosamalona: kelasnya pas repo bermaslah,, hihihi

20:09 antosamalona: atau cukup penjelasan saja, yah?

20:09 antosamalona: bagaimana, pak bapak?

20:09 darianrizal: hlo ananda masih error ?

20:10 Kiflie: repo.ridon.id sangat sehat pak

20:11 antosamalona: maksud saya, kalau terkendala dengan pemasangan paket2 saya jelaskan saja.

20:11 benben159: bentar

20:11 darianrizal: pak antosamalona irgsh yg di ananda aman ya?

20:11 antosamalona: iya pak

20:11 antosamalona: aman pak darianrizal

20:11 * benben159 bikin chroot

20:12 antosamalona: lanjut pak bapak?

20:12 darianrizal: lanjut pak antosamalona , ini saya lagi pasang dependensi utk pemaketan di server mainan

20:12 benben159: lanjut dulu aja

20:12 benben159: masih nunggu chroot

20:12 antosamalona: okay

20:13 antosamalona: nah, setelah paket2 yang dibutuhkan selesai dipasang,

20:13 benben159: pak antosamalona ini sedang males bikin vm blankon dan booting ke blankon

20:13 benben159: ini saya pake opensuse lalu bikin chroot blankon gpp kan?

20:13 benben159: hehehehee

20:14 antosamalona: pak beben159 hahaha..

20:14 darianrizal: mungkin pak antosamalona jangan disela dulu , biarkan dongen dulu

20:14 darianrizal: silakan pak antosamalona

20:15 antosamalona: kita tambahkan nama dan email di berkas bashrc di baris paling bawah seperti ini:

20:15 * samsul masih install paket

20:16 antosamalona: http://tempel.blankon.in/4229497

20:16 *** hakim has joined #blankon

20:16 antosamalona: nah, untuk mengisi di terminal ketik nano ~/.bashrc

20:17 antosamalona: jadi, email dan nama ini nantinya digunakan untuk menandatangi paket yg kita paketkan

20:17 antosamalona: gunakan email aktif agar pengguna dapat menghubungi pemaket

20:18 antosamalona: lanjut?

20:18 samsul: lanjut pak...

20:18 antosamalona: ok

20:18 hakim: wait pak baru on

20:18 hakim: oke pak

20:18 antosamalona: hakim: selamat datang, pak :D

20:18 hakim: ini sperti yang turtorial ya pak

20:19 hakim: untuk inisialisasi

20:19 darianrizal: pak hakim liat di irclog.blankon.in kalo baru dateng pak

20:19 hakim: oke pak

20:19 antosamalona: iya, pak hakim hanya ditambah penjelasan supaya jelas.

20:19 antosamalona: lanjut, yak

20:19 hakim: oke

20:19 antosamalona: setelah menambahkan email dan nama di bashrc simpan kemudian di terminal ketikkan

20:20 antosamalona: source ~/.bashrc

20:20 antosamalona: export | grep DEB

20:20 antosamalona: dua perintah di atas dieksekusi satu persatu

20:20 *** h has joined #blankon

20:20 antosamalona: itu untuk mendaftarkan di sistem kita.

20:21 *** h is now known as Guest20475

20:21 antosamalona: selanjutnya adalah membuat gpg key

20:22 *** Guest20475 has quit IRC

20:22 *** Guest20475 has joined #blankon

20:23 antosamalona: gpg key ini untuk kunci publik paket kita.

20:23 antosamalona: jadi, sebelum paket dibuat nantinya kita diminta untuk menandatangi paket tersebut

20:23 *** Guest20475 has quit IRC

20:24 *** Guest20475 has joined #blankon

20:24 antosamalona: biar lebih nda bingung (yg belum pernh) bisa liat di sini https://antosamalona.wordpress.com/category/tutorial/

20:25 antosamalona: pada bagian gpg key isi kan nama dan email yang sesuai dan password jangan sampai lupa.

20:25 antosamalona: kalau lupa password, meskipun buat baru, yang diingat sistem yang pertama kali dibuat

20:25 antosamalona: jadi, mesti hapus dulu baru buat lagi gpg keynya

20:27 hakim: btw dulu saya pernah bikin pak kalo ga salah, tp lupa lupa inget untuk ngeceknya bisa ngelakuin apa pak?

20:27 *** sitidy has joined #blankon

20:27 * benben159 bookmark blog pak antosamalona

20:27 *** Guest20475 has quit IRC

20:27 *** hahn has joined #blankon

20:27 antosamalona: hakim: list gpg yang dibuat bisa ketik gpg --list-keys

20:28 antosamalona: lanjut lagi

20:28 hakim: sep pak

20:28 antosamalona: di langkah ke 5 pada tutorial, kita menambahkan source di pbuilderrc

20:29 hahn: sampurasun. maaf baru gabung *baca-baca lognya semoga ada

20:29 antosamalona: hahn: selamat datang pak. ada di sini irclog.blankon.in

20:30 febrianrendak: interupsi sedikit: saya punya GPG key, yang saya pakai dari dulu banget, itu dibuat tanpa password. Boleh pakai ini tidak dalam praktik nyata?

20:30 antosamalona: setelah itu pbuilder dibuat dengan perintah, sudo pbuilder create

20:30 antosamalona: febrianrendak: tidak direkomendasikan pak, tidak menggunakan password

20:31 febrianrendak: baik, terima kasih.

20:31 antosamalona: dilarang keras, pak.

20:31 antosamalona: sama2 pak febrianrendak

20:31 antosamalona: lanjut

20:32 antosamalona: jika pada langkah membuat pbuilder ada error, lakukan langkah ini

20:32 antosamalona: http://dev.blankonlinux.or.id/wiki/Pemaket/PanduanPbuilderMultiARCH

20:32 antosamalona: sesuaikan nama pengguna bapak2 ibu sekalian

20:34 *** artemtech has joined #blankon

20:34 antosamalona: baik, langkah ke 7 kita mulai membangun paket

20:35 hakim: ok pak

20:35 darianrizal: pelan pelan pak antosamalona

20:35 antosamalona: darianrizal: maaf pak. nda ada yang tegur soalnya

20:35 antosamalona: hihihi

20:36 antosamalona: baik, ada yg perlu ditanyakan dulu sebelum kita lanjut?

20:36 darianrizal: saya masih aman pak antosamalona

20:36 *** hahn has quit IRC

20:36 antosamalona: baik kita lanjut.

20:36 hakim: saya masih ngawang untuk bikin perumpaan antara gpg dan pbuilde rpak

20:36 darianrizal: pbuilder create ini lama wkwkw

20:37 hakim: gpg itu kaya ssh key kan ya

20:37 antosamalona: hakim: mirip2 begitu, pak.

20:37 hakim: terus bedanya sama pbuilder apa pak

20:38 samsul: wah, gpg key sayamalah jadiada 2 http://tempel.blankon.in/4229499.80ef4017.txt

20:39 antosamalona: pbuilder itu lingkungan pemaketan untuk paket debian, pak.

20:39 antosamalona: pbuilder sendiri akronim dari personal builder

20:39 hakim: oke jadi kalo saya tangkep untuk membangun sebuah aplikasi .deb dibutuhkan 2 autentifikasi ya pak.

20:39 hakim: pertama gpg dan kedua pbuilder

20:40 antosamalona: samsul: yang penting ingat passwordnya, pak :D

20:40 antosamalona: pbuilder bukan autentikasi pak.

20:41 antosamalona: hakim: kalau lebih jelasnya tentang pbuilder bisa baca2 di sini setelah selesai kelas ini http://pbuilder.alioth.debian.org/#introduction

20:41 samsul: yang pertama gak pake password, tadi katanya dilarang keras, jadi saya buat yang ada passwordnya... :-O :-O :-D

20:41 hakim: oke pak makasih informasinya, menuju tkp

20:41 antosamalona: kita lanjut dulu ya pak bapak

20:41 antosamalona: samsul: memang gak boleh gak pakai password pak :D

20:42 antosamalona: di langkah ke 7 tadi, yang pertama harus dibuat adalah direktori debian terstruktur

20:42 antosamalona: dengan perintah:

20:43 antosamalona: dh_make

20:43 antosamalona: dan harus dengan berkas source yang sudah diunduh tadi

20:44 antosamalona: -c gpl adalah lisensi untuk aplikasi tersebut.

20:46 antosamalona: langkah ke 8 ini harus hati2 karena berkaitan dengan versi

20:46 antosamalona: dan jika versi yang didaftarkan di repo lebih besar dari perubahan yang dibuat akan ada error

20:47 antosamalona: saat pemaketan di irgsh

20:47 antosamalona: pernah ditegur soalnya gegara itu :D

20:47 antosamalona: di tutorial di situ diketikkan, dch -e

20:48 darianrizal: tunggu pak antosamalona , utk langkah 7 saya ada muncul http://tempel.blankon.in/4229500 , betul ?

20:48 *** artemtech has quit IRC

20:48 antosamalona: betul pak darianrizal

20:48 antosamalona: karena perintahnya tidak lengkap

20:49 antosamalona: coba dilihat di tutorial

20:49 antosamalona: pak bapak saya diingatkan kalau terlalu cepat

20:50 antosamalona: halo??

20:50 hakim: oke pak

20:50 antosamalona: lanjut lagi?

20:50 samsul: aman pak...

20:50 hakim: lanjut pak

20:51 antosamalona: kita tadi, sudah sampai mana?

20:51 antosamalona: darianrizal: perintahnya seperti ini pak dh_make -c gpl -f ../ed-1.4.tar.gz

20:52 antosamalona: lanjut yak

20:52 antosamalona: dch ini akronim dari debian changelog

20:52 antosamalona: semua catatan perubahan ditulis di berkas ini

20:53 *** hahn has joined #blankon

20:53 hakim: oke pak lanjut mengenai jenis paket single,multiple binary pak

20:53 darianrizal: ya , saya baru ngeh

20:53 darianrizal: lanjut pak

20:53 antosamalona: pemaket harus tau perubahan apa yang ada di paket terbaru

20:54 antosamalona: pak bapak sudah sampai langkah 8, atau belum?

20:54 hakim: belum pak

20:55 hakim: lg test lagi

20:55 antosamalona: hakim: sudah sampai mana, pak?

20:55 hakim: step 7 pak

20:55 antosamalona: ok, pak selesaikan dulu

20:55 antosamalona: kalau sudah bilang

20:56 antosamalona: kita lanjut ke langkah 8

20:56 darianrizal: yang tim infra aman ya ? misskecupbung samsul benben159

20:56 darianrizal: harus nya aman

20:56 darianrizal: wkwkw

20:57 antosamalona: hahahah

20:57 samsul: darianrizal: pbuilder lama juga ya pak...

20:57 antosamalona: hihihi

20:57 hakim: saya lg coba mahamin pak

20:57 samsul: pake kuota forji, semoga saja gak sampe habis...

20:58 hakim: abis saya melakukan dh_make langsung ada folder debian

20:58 hahn: wah ketinggalan jauh :((

20:58 antosamalona: hakim: memahaminya bisa sambil dilakukan, pak :D

20:58 antosamalona: samsul: aamiiiiin pak :D

20:58 hakim: iya pak

20:58 antosamalona: hahn: ada lognya kok pak

20:59 antosamalona: bagaimana, kita lanjut?

21:00 darianrizal: samsul: hehe nanti kalo kuota abis saya beliin pak , hadiah karena sudah hadir kelas pemaket

21:00 antosamalona: kita ke langkah ke 8 pak bapak ibu

21:00 darianrizal: kalo abis wkwk kalo sisa ya enggak

21:00 darianrizal: oke pak antosamalona

21:00 antosamalona: darianrizal: wiiih.. asik nih

21:00 antosamalona: wkwkwkwk

21:00 samsul: weka weka weka

21:00 antosamalona: oke, pak bapak kita lanjut ke langkah 8

21:01 darianrizal: lanjut

21:01 antosamalona: langkah 8 itu adalah catatan perubahan pada paket

21:01 hahn: lognya macet di jam 20.05 :D. silakan lanjut aja pak bapak. sementara jadi penonton dulu

21:01 antosamalona: semua ditulis di situ

21:01 hakim: langkah 8 kaya commit di git ya pak?

21:01 antosamalona: dch sendiri adalah debian changelog

21:01 antosamalona: hakim

21:02 antosamalona: hakim: gak pak

21:02 antosamalona: biar saya jelaskan dulu, pak

21:03 antosamalona: perintah dch -e maksudnya debian changelog edit

21:03 antosamalona: untuk menyunting berkas changelog

21:03 antosamalona: apa saja yang disunting?

21:03 antosamalona: pertama adalah versi

21:04 antosamalona: silahkan liat blog tutorialnya

21:04 antosamalona: ed (1.4-0blankon1) tambora; urgency=low

21:05 antosamalona: ed -: nama aplikasi *jelas

21:05 antosamalona: 1.4 -: versi aplikasi

21:06 antosamalona: setelah tanda (-) ada nol (0) -: adalah versi debiannya

21:06 antosamalona: kenapa (0)? karena aplikasi ed belum terdaftar di repositori upstream dalam hal ini debian

21:07 antosamalona: jadi, semua aplikasi yg belum ada di repo debian harus diberi angka 0 meskipun saat membuat changelog,

21:07 antosamalona: angka (1) yang tampil

21:08 antosamalona: setelah angka (0) ada blankon1 -: adalah versi dari blankon

21:08 antosamalona: tambora -: nama distribusi (distro)

21:09 misskecupbung: Maaf menyela pak, maksudnya repositroy upstream gimana pak?

21:09 darianrizal: jangan disela dulu misskecupbung

21:10 darianrizal: lanjut pak antosamalona

21:10 misskecupbung: Oh, maaf pak. Silakan..

21:10 antosamalona: urgency -: level dari aplikasi itu sendiri (biarkan saja)

21:11 antosamalona: misskecupbung: maksudnya itu sumbernya, Bu.

21:11 antosamalona: karena blankon adalah turunan dari debian.

21:12 antosamalona: mengenai versi ini apakah masih ada yg belum jelas?

21:12 antosamalona: soalnya versi ini kalau salah bisa galau

21:12 antosamalona: aplikasinya malah nda bisa dipasang

21:13 samsul: tanya boleh pak?

21:13 antosamalona: samsul: silahkan pak

21:13 darianrizal: penomoran versi ini ada dokumentasi yg rinci kah pak antosamalona ?

21:13 samsul: apa kiriteria paket harus naik versi...?

21:13 antosamalona: darianrizal: debian ada, untuk blankon ada di blognya pak Aftian

21:14 antosamalona: samsul: paket harus naik kalau rilis dari upstream, setelah dipatch (jahit)

21:15 antosamalona: ada lagi pak bapak?

21:15 samsul: lanjut pak...

21:15 antosamalona: oke pak

21:15 misskecupbung: Lanjut pak, terimakasih

21:16 hakim: lanjut dulu pak sambil bca okumentasi untuk penamaan

21:16 antosamalona: misskecupbung: pertanyaannya sudah terjawab, yah?

21:16 *** hahn has quit IRC

21:16 misskecupbung: Sudah, baru ngeh. Hehe,

21:16 darianrizal: pak antosamalona link blog pak aftian apa pak

21:16 darianrizal: ?

21:17 misskecupbung: http://aftian.wordpress.com kalo gak salah pak

21:17 *** hakim has quit IRC

21:17 antosamalona: *Initial relase -: hapus sampai I di kata Initial release. kemudian isi dengan catatan perubahan dari pengembang aplikasi

21:17 antosamalona: darianrizal: itu pak dijawab sama Bu misskecupbung

21:18 antosamalona: setelah itu, simpan kemudian beralih ke berkas control

21:18 antosamalona: wwih.. sudah jam 9 lewat, lanjut gak ini?

21:18 darianrizal: lanjutin aja

21:19 darianrizal: dulu pernah sampek jam 11

21:19 darianrizal: wkwwkw

21:19 antosamalona: wkwkwkwk

21:19 antosamalona: baik, pak

21:19 antosamalona: kita lanjut ke berkas control

21:19 darianrizal: eh tp kalo pak antosamalona mau stop ndakpapa , barangkali warkop mau tutup

21:20 antosamalona: darianrizal: ini di rumah, :P

21:20 antosamalona: wkwkwk

21:20 darianrizal: lanjut ajaaa

21:20 antosamalona: di berkas control, yang harus diperhatikan adalah

21:21 antosamalona: pada bagian section, Maintener, Build-depends, Homepage, Architecture, Depends, Description

21:22 antosamalona: section disi sesuai kategori aplikasi

21:24 antosamalona: Maintener -: di blankon diisi dengan, BlankOn Developer BlankOn-dev@googlegroups.com:

21:24 antosamalona: kecuali mau pakai sendiri gunakan nama anda

21:25 antosamalona: Build-depens -: diisi dengan paket2 yang digunakan untuk membangun (kompilasi) aplikasi tersebut.

21:26 antosamalona: Homepage -: diisi situs aplikasi tersebut

21:26 antosamalona: ini wajib

21:26 antosamalona: kalau ada githubnya juga disi yg di bawah homepage

21:26 antosamalona: kemudian Architecture: sesuai mesin anda

21:27 antosamalona: Depend -: diisi dengan paket pendukung yang dibutuhkan ketika aplikasi yang ingin dipaketkan dipasang

21:28 antosamalona: Description ini sedikit sensitif

21:28 antosamalona: Description: di bagian pertama tidak boleh lebih dari 8 karakter.

21:29 antosamalona: di bawahnya harus ada spasi 1x dari tepi editor

21:29 antosamalona: baik ada pertanyaan

21:29 antosamalona: ?

21:30 antosamalona: baik, kita lanjut lagi di berkas copyright

21:31 antosamalona: copyright bagian atas harus di isi siapa saja pengembang aplikasinya

21:31 antosamalona: setelah itu simpan kemudian mulai memaketkan aplikasi

21:31 antosamalona: dengan perintah, debuil -S

21:32 antosamalona: maaf, debuild -S

21:32 *** hakim has joined #blankon

21:32 antosamalona: kalau tidak ada aral melintang, akan menghasilkan berkas *.dsc dkk

21:32 hakim: aduh abis dc

21:32 antosamalona: yang dieksekusi adalah berkas sourcenya

21:33 antosamalona: dalam hal ini ed

21:33 antosamalona: sudo pbuilder build ed_1.4-0blankon1.dsc

21:33 antosamalona: perintah di atas jika tidak ada yang salah, maka akan menghasilkan paket debian siap pasang

21:33 antosamalona: selesai, sudah

21:34 antosamalona: baik, ada pertanyaan?

21:34 antosamalona: setelah ini kita mulai bicara irgsh

21:34 antosamalona: halo.. halo..

21:34 hakim: ok kemarin saya sudah cobain dan oke

21:34 hakim: ngikutin tutorial bapak

21:34 hakim: di blog

21:34 antosamalona: baik, pak

21:35 antosamalona: hakim: dalam tugas selaku pemaket nanti, mutlak harus menguji di mesin lokal(pc bapak)

21:35 samsul: yang berkas control pak, bagian description

21:35 antosamalona: samsul: belum, jelas?

21:36 hakim: ok pak

21:36 samsul: itu maksimal 8 karakter?

21:38 antosamalona: samsul: maaf, pak saya salah maksud saya 64 karakter untuk deskripsi singkat

21:39 antosamalona: halah, 60 pak

21:39 darianrizal: pak antosamalona ini kenapa ya http://tempel.blankon.in/4229505 , saya cek bagian control sudah saya sesuai blog

21:40 antosamalona: darianrizal: cek di baris 15 pak di berkas controlnya

21:40 antosamalona: pak samsul untuk lebih jelasnya bisa baca di sini https://www.debian.org/doc/manuals/maint-guide/dreq.en.html#control

21:40 antosamalona: ketemu, pak darianrizal?

21:41 samsul: siap pak antosamalona

21:41 antosamalona: kita lanjut untuk irgsh yah

21:41 darianrizal: wait pak

21:41 antosamalona: ok, pak darianrizal

21:42 darianrizal: http://tempel.blankon.in/4229506 ini bagian control pak antosamalona . apa ya yg salah?

21:42 *** yusrideb has joined #blankon

21:43 antosamalona: darianrizal: nah, baris 15 harus dikasi spasi 1x dari tepi editor, pak.

21:43 darianrizal: cuman gitu ?

21:43 darianrizal: elaah

21:43 darianrizal: wkwkw

21:43 antosamalona: iya, pak di bawahnya juga

21:43 antosamalona: wkkwkw

21:44 darianrizal: wah iya , jalan ini pak antosamalona

21:44 antosamalona: darianrizal: mantap, pak.

21:44 antosamalona: gimana, kita lanjut?

21:44 misskecupbung: lanjut pak,,

21:45 antosamalona: jadi, bapak2 ibu sekalian sebelum aplikasi masuk ke repo blankon pemaket wajib menguji sendiri dulu di lokal

21:45 antosamalona: lokal maksud saya di sini adalah komputer pribadi masing2

21:46 antosamalona: nanti setelah itu yang dikirim ke repo itu hanya direktori debian atau source aplikasi itu sendiri

21:46 antosamalona: lengkap dengan direktori debiannya

21:47 antosamalona: seperti ini: http://dev.blankonlinux.or.id/wiki/Pemaket/Tutorial/PengenalanBazaar

21:47 antosamalona: bazaar adalah version control seperti git, svn, dan lain2

21:48 *** febrianrendak has quit IRC

21:49 antosamalona: untuk dapat mengirim ke repo blankon, minta akses sama Tim Infra

21:50 antosamalona: saya dulu didaftarkan sama pak Aftian untuk bisa push ke repo

21:50 antosamalona: sepertinya untuk malam ini kita sudahi dulu, pak bapak sudah hampir jam 10 wib

21:51 antosamalona: silahkan baca2 mengenai pengenalan bazaar di atas

21:51 antosamalona: mohon maaf atas segala kekurangan yah, pak bapak ibu

21:52 antosamalona: =======================kelas penyegaran pemaketan ditutup================================ 

## ================= Kelas ditutup =======================================


