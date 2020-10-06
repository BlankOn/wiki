# Kelas Penyegaran Pemaket II (10-05-2017)

## ============================kelas penyegaran pemaketan II===================================




20:10 antosamalona: ============================kelas penyegaran pemaketan II===================================

20:11 antosamalona: Assalamu'alaikum warahmatullahi wabarakatuh dan salah sejahtera bagi kita semua

20:11 antosamalona: malam ini kita melanjutkan kelas pemaketan

20:11 darianrizal: ok pak

20:11 antosamalona: semalam kita sudah belajar memaketkan aplikasi ke paket debian di mesin lokal kita.

20:12 antosamalona: nah, kali ini kita akan belajar bagaimana sampai paket yang dibuat masuk ke dalam repo blankon

20:12 antosamalona: di blankon ada irgsh

20:12 antosamalona: !ping

20:12 irgsh: pong

20:13 antosamalona: irgsh adalah akronim dari insinyur robot gedek sarjana hukum

20:14 antosamalona: irgsh inilah yang membantu pemaket untuk memaketkan aplikasi masuk ke dalam repo blankon

20:15 antosamalona: baik.

20:15 antosamalona: jadi, setelah pemaket menguji paketnya di mesin lokal dan sukses.

20:15 antosamalona: Maka, pemaket baru mengirim berkas-berkas yang dibutuhkan ke repo (dev.boi)

20:16 antosamalona: direktori debian sudah barang tentu yang mutlak harus dikirim

20:16 antosamalona: atau seluruh berkas source aplikasi tersebut bersama direktori debian di dalamnya

20:16 *** yusrideb has joined #blankon

20:17 antosamalona: pemaket mengirimkan berkas2 aplikasi tersebut ke repo (dev.boi) -: dev.blankonlinux.or.id

20:17 antosamalona: menggunakan bazaar

20:18 antosamalona: bazaar adalah version control semacam git, svn dan kawan2.

20:18 *** samsul has joined #blankon

20:19 *** antosamalona has quit IRC

20:19 *** antosamalona has joined #blankon

20:19 antosamalona: maaf, pak bapak

20:19 antosamalona: putus

20:19 antosamalona: tadi, sampai mana?

20:19 * samsul akhirnya bisa masuk pake ssh tunnel

20:20 antosamalona: sempat putus

20:20 * samsul isp sekolah dibanned freenode

20:20 yusrideb: bazaar adalah version control semacam git, svn dan kawan2. sudah sampe disini pak

20:20 misskecupbung: Sampe bazaar pak

20:20 antosamalona: yusrideb: terima kasih, pak

20:20 antosamalona: misskecupbung: siap, bu

20:20 antosamalona: lanjut

20:20 *** Stasi has joined #blankon

20:21 antosamalona: bazaar sendiri dalam penggunaannya disingkat menjadi bzr

20:22 antosamalona: tapi, kita hanya akan menggunakan operasi dasarnya

20:22 antosamalona: intinya kita bisa menyalin, mengubah, mendorong(push)

20:23 antosamalona: silahkan lihat di sini http://dev.blankonlinux.or.id/wiki/Pemaket/Tutorial/PengenalanBazaar

20:24 antosamalona: apakah sudah dibuka?

20:24 antosamalona: pak bapak ibu?

20:24 darianrizal: ssaya sudah

20:25 antosamalona: baik pak

20:26 antosamalona: yang lain? kita lanjut?

20:27 antosamalona: sekarang yang belum pasang bazaar di mesinnya silahkan dipasang

20:27 yusrideb: saya juga sudah baca2 tadi pak

20:27 antosamalona: sudo apt install bzr

20:27 antosamalona: baik pak yusrideb

20:28 misskecupbung: proses pak ini, lanjut aja sambil nunggu.

20:28 antosamalona: baik

20:28 antosamalona: kita bisa langsung menyalin berkas source dari dev.boi

20:29 antosamalona: bzr branch url://menuju/repositori

20:30 antosamalona: contoh: bzr branch http://dev.blankonlinux.or.id/browser/tambora/blankon-keyring

20:30 *** pokoknyaberes has joined #blankon

20:31 *** antosamalona_ has joined #blankon

20:31 antosamalona_: modar

20:31 antosamalona_: hihihi

20:31 antosamalona_: kita sudah sampai mana?

20:31 yusrideb: contoh: bzr branch http://dev.blankonlinux.or.id/browser/tambora/blankon-keyring

20:31 *** antosamalona has quit IRC

20:32 *** artemtech has joined #blankon

20:32 *** antosamalona has joined #blankon

20:32 darianrizal: koeneksi nya pak antosamalona_ modar modar ini

20:32 antosamalona: maaf, pak bapak

20:32 antosamalona: modar hahaha

20:32 antosamalona: lanjut pak

20:32 darianrizal: lanjutpak

20:32 antosamalona: baik setelah selesai menyalin berkas tadi

20:33 antosamalona: kita langsung ubah berkas tersebut

20:33 antosamalona: masuk ke dalam direktorinya kemudian ketikkan

20:33 antosamalona: dch -i

20:33 darianrizal: perintah tadi dijalan kan pak ?

20:33 antosamalona: yg mana?

20:34 darianrizal: contoh bzr branch ?

20:34 antosamalona: bzr branch http://dev.blankonlinux.or.id/browser/tambora/blankon-keyring

20:34 antosamalona: iya, pak yg itu ^

20:34 darianrizal: sudah pak

20:34 antosamalona: baik, silahkan diubah pak, masuk ke direktorinya terus ketik

20:34 antosamalona: dch -i

20:35 antosamalona: ingat tentang debian change semalam

20:35 *** antosamalona_ has quit IRC

20:35 antosamalona: karena blankon-keyring ini mau digunakan untuk uluwatu maka nama distronya diubah

20:35 antosamalona: ke uluwatu

20:36 darianrizal: bagian mana yg diubah pak antosamalona ?

20:36 antosamalona: changelog pak, ketikkan saja dch -i

20:37 antosamalona: http://tempel.blankon.in/4229633

20:37 antosamalona: contoh ^

20:37 antosamalona: setelah itu, simpan kemudian

20:38 antosamalona: ketik bzr add * - masukkan semua berkas

20:38 antosamalona: setelah itu, bzr commit -m "pesan perubahan yang dilakukan"

20:38 antosamalona: setelah itu, baru push (dorong) ke repo

20:39 antosamalona: bzr push bzr+ssh://bzr@dev.blankonlinux.or.id:2222/browser/uluwatu/blankon-keyring

20:39 antosamalona: sebelumnya tambora, setelah diubah ganti menjadi uluwatu

20:40 antosamalona: nanti akan tersimpan di sini

20:40 antosamalona: http://dev.blankonlinux.or.id/browser/uluwatu

20:41 antosamalona: untuk dapat mengirim berkas tadi, kita harus mendaftarkan ssh-key ke tim infra untuk didaftarkan

20:41 darianrizal: pelan pelan pak

20:41 antosamalona: tapi, hanya untuk pemaket yang dibolehkan. :D

20:41 antosamalona: maaf pak :D

20:41 darianrizal: ini betul ya versi nya http://tempel.blankon.in/4229635 ?

20:42 darianrizal: pak antosamalona

20:43 antosamalona: darinarizal: salah pak. hapus .1blankon1

20:44 darianrizal: oo kirain kayak kemarin

20:44 antosamalona: beda pak.

20:44 darianrizal: kenapa beda pak ?

20:44 antosamalona: belum tau juga, pak. :D

20:45 darianrizal: wah harus dicari tau pak

20:45 darianrizal: wkwkw

20:45 darianrizal: jadikan pr

20:45 antosamalona: iya, pak

20:45 darianrizal: penomoran versi ini dari dulu saya gak pernah ngeh hehe

20:46 darianrizal: masih perlu belajar lagi ke pak antosamalona

20:46 *** irgsh-github has joined #blankon

20:46 irgsh-github: [irgsh-web] herpiko pushed 2 new commits to master: https://github.com/BlankOn/irgsh-web/compare/1fdab2a6911e...022aa179b48c

20:46 irgsh-github: irgsh-web/master e5ca525 Herpiko Dwi Aguno: Update year in footer

20:46 irgsh-github: irgsh-web/master 022aa17 Herpiko Dwi Aguno: Merge pull request #20 from herpiko/updatefooter...

20:46 *** irgsh-github has left #blankon

20:46 darianrizal: lanjutpak antosamalona

20:47 antosamalona: heheheh

20:47 antosamalona: baik, pak

20:47 * samsul insinyur nongol langsung kabur...

20:47 antosamalona: setelah selesai push tadi, barulah kita buka irgsh

20:48 antosamalona: http://irgsh.blankonlinux.or.id/

20:48 antosamalona: cukup diliat2 :D

20:48 antosamalona: lagi diperbaiki

20:48 darianrizal: kasih tunjuk yang anada pak

20:49 antosamalona: sama saja kok, pak.

20:49 darianrizal: wkwk iya sih

20:49 antosamalona: ebook ambil di grup dev telegram

20:50 darianrizal: pak antosamalona ini udah yg sukses build http://ananda.blankon.id:8080/build/9229/

20:51 darianrizal: ?

20:51 antosamalona: iya pak darianrizal

20:51 antosamalona: finished

20:51 antosamalona: sudah ebooknya pak bapak?

20:52 *** pokoknyaberes has quit IRC

20:52 darianrizal: ebook yang mana pak antosamalona ?

20:52 antosamalona: di grup dev telegram pak

20:52 yusrideb: saya sudah download pak

20:53 antosamalona: baik, pak.

20:53 antosamalona: silahkan dibaca2 dulu kemudian ditanyakan

20:54 darianrizal: ini tim pemaket yg hadir siapa saja pak antosamalona ?

20:54 antosamalona: darianrizal: pak yusrideb doang pak

20:54 antosamalona: parah euy!

20:54 antosamalona: hihihi

20:56 yusrideb: hehehe., sya saja hampir tidak ikut, untung saja saya bangun pas jam 20 lewat dikit

20:58 antosamalona: sudah tidak ada pertanyaan?

20:58 antosamalona: kalau tidak ada kita tutup kelasnya.

20:58 antosamalona: pak yusrideb silahkan bikin kunci publik untuk bazaarnya dan wajib pakai blankon, pak

20:59 antosamalona: nanti minta didaftarin sama pak darianrizal

20:59 samsul: ada pak

20:59 antosamalona: silahkan pak samsul

21:00 samsul: apakah irgsh bisa narik via bazaar di launchpad.net ?

21:00 samsul: launchpad kan pake bazaar juga.....

21:00 antosamalona: iya, pak.

21:00 antosamalona: bisa

21:02 antosamalona: ada lagi, pak bapak?

21:02 antosamalona: sudah jam 21:00 wib ini

21:02 antosamalona: kelasnya kita tutup yah, pak bapak ibu

21:02 antosamalona: okay?

21:03 samsul: baik pak, terima kasih....

21:03 antosamalona: Terima kasih banyak bapak ibu semua sudah menyempatkan hadir malam ini.

21:03 misskecupbung: Manut pak. Ini masih dibaca-baca.

21:04 antosamalona: silahkan

21:04 antosamalona: Assalamu'alaikum warahmatullahi wabarakatuh dan salam sejahtera bagi kita semua

21:04 antosamalona: ========================================kelas pemaketan ditutup=================================== 

##  ========================================kelas pemaketan ditutup=================================== 


