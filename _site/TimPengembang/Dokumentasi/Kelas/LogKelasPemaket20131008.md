# Log Kelas Pemaket 20131008

(08:01:52 PM) mijortsa: sudah waktunya lokakarya daring pemaket debian
(08:01:55 PM) mijortsa: blankon
(08:02:03 PM) palsu is now known as kiansantang
(08:02:21 PM) mijortsa: assalamu'alaikum warokmatullahi wabarokatuh
(08:02:39 PM) kiansantang: Waalaikum salan wr. Wb
(08:02:45 PM) fontamara: waalaikum salam
(08:02:45 PM) dotovr: walaikumsalam
(08:02:51 PM) prabusiliwangi: wlkmsalam...
(08:02:52 PM) mijortsa: daring lokakarya pemaket debian hari ini kita mulai
(08:02:57 PM) mijortsa: -
=======================================================
(08:03:23 PM) mijortsa: sebelumnya ada yg pernah mengikuti pelatihan pemaket ?
(08:03:30 PM) mijortsa: dari peserta yg hadir disin?
(08:03:48 PM) invaleed: dulu pernah, skrg sudah lupa pak
(08:04:11 PM) mijortsa: invaleed: lupa dikit2 apa lupa banget pak?
(08:04:31 PM) invaleed: mijortsa: banget pak :) maklum gak pernah dipake
(08:04:38 PM) mijortsa: baik, kalau dimungkinkan ini kita buat 2 sessi
(08:04:58 PM) mijortsa: 1. persiapan pembuatan paket (gpg-key dll)
(08:05:18 PM) mijortsa: 2. pembuatan paket nanti di isi pak dotovr
(08:05:25 PM) fontamara: blom prnah ane pak
(08:05:41 PM) mijortsa: pertama yg perlu saya sampaikan disini, sebagian besar
cara kerja pemaketan yg dilakukan disini dengan CLI (Command Line Interface)
(08:06:06 PM) mijortsa: untuk itu rekan2 membiasakan penggunaan terminal, nano/
vim. dll
(08:06:32 PM) mijortsa: untuk pdf panduan bisa di unduh di http://
dev.blankonlinux.or.id/attachment/wiki/Pemaket/Panduan-Pemaketan-BlankOn.2.pdf
(08:06:49 PM) mijortsa: seperti yg saya posting di FB acara
(08:07:05 PM) fontamara: sip pak ane dh download
(08:07:12 PM) mijortsa: sampai disini ada yg perlu dtanyakan?
(08:07:35 PM) S0X|8| [~user@103.3.222.143] entered the room.
(08:07:48 PM) mijortsa: selamat datang bapak S0X|8| :D
(08:07:56 PM) mijortsa: lanjut
(08:07:57 PM) invaleed: lanjut pak
(08:08:08 PM) boy [de7cbaf6@gateway/web/freenode/ip.222.124.186.246] entered
the room.
(08:08:25 PM) syaimif left the room (quit: Read error: Connection reset by
peer).
(08:08:26 PM) mijortsa: langkah awal untuk memulai persiapan (sebagai senjata
pemaket. kalau perang kita harus butuh senjata.) :D
(08:08:32 PM) boy is now known as Guest8892
(08:08:45 PM) syaimif [~cak@125.164.221.77] entered the room.
(08:09:02 PM) mijortsa: perlu beberapa paket untuk di install :
(08:09:45 PM) mijortsa: mungkin bisa sekalian di lakukan disini, tapi kita
membutuhkan koneksi yg agak lumayan
(08:09:53 PM) mijortsa: paket2 berikut adalah : sudo apt-get install devscripts
build-essential fakeroot debhelper gnupg pbuilder dh-make dpkg-dev ubuntu-dev-
tools
(08:09:59 PM) vmlokal left the room (quit: Ping timeout: 264 seconds).
(08:09:59 PM) fontamara: build-essential devscripts debhelper dan dh-make yang
itu yah pak
(08:10:11 PM) mijortsa: fontamara: yak sip
(08:10:23 PM) Se7enTime [~se7entime@118.97.95.24] entered the room.
(08:10:36 PM) invaleed: 44,6 MB
(08:10:45 PM) S0X|8|: sungkem karo dosen disik aka pak mijortsa
(08:10:47 PM) mijortsa: invaleed:  :D
(08:10:50 PM) mijortsa: iya pak
(08:11:19 PM) mijortsa: apakah ada yg sudah mempersiapkan dengan installasi
saat ini?
(08:11:24 PM) c0desHell [de7cbaf6@gateway/web/freenode/ip.222.124.186.246]
entered the room.
(08:11:37 PM) invaleed: done pak, lanjut :D
(08:11:47 PM) mijortsa: lainya?
(08:11:52 PM) mijortsa: mana ini
(08:12:03 PM) syaimif: dome untuk instalasi
(08:12:10 PM) syaimif: *eh done
(08:12:13 PM) mijortsa: coba yg belum siap install paket2 berikut saat ini
mana?
(08:12:19 PM) fontamara: done pak , , ,
(08:12:29 PM) \*\*\*noerr_ nyatet dulu
(08:12:40 PM) kiansantang: Saya menyimak dulu, maklum sedang jadi fakir
bandwith :(
(08:13:04 PM) invaleed: eh ada galat Err http://repo.ugm.ac.id/ubuntu/ quantal-
updates/main debootstrap all 1.0.42ubuntu0.1
(08:13:05 PM) invaleed:   404  Not Found
(08:13:17 PM) mijortsa: ok, nanti bisa kita baca log daring pada malam hari ini
(08:13:20 PM) mijortsa: invaleed: :D
(08:13:34 PM) mijortsa: kit lanjut ?
(08:13:41 PM) nama|palsu: lanjut
(08:13:43 PM) invaleed: lanjut pak
(08:14:03 PM) mijortsa: setelah installasi paket2 tadi tahap selanjutnya adalah
membuat informasi pribadi
(08:14:22 PM) mijortsa: membuat informasi pribadi :
(08:14:30 PM) mijortsa: nano ~/.bashrc
(08:14:57 PM) mijortsa: isi pada dibaris terakhir
(08:15:11 PM) mijortsa: export DEBFULLNAME=â€Joe Hackerâ€ (sesuaikan dengan
nama Anda)
(08:15:11 PM) mijortsa: export DEBMAIL=â€joe.hacker@bungker.comâ€ (sesuaikain
dengan e-mail anda)
(08:15:43 PM) mijortsa: untuk menyimpannya ctrl+o
(08:15:52 PM) mijortsa: exit ctrlx
(08:15:59 PM) mijortsa: maaf ctrl+x
(08:16:36 PM) mijortsa: selanjutnay kita memeriksa informasi pribadi yang telah
kiat buat:
(08:16:42 PM) fontamara: sip pak
(08:16:50 PM) bangjali [~romancok@103.3.222.142] entered the room.
(08:16:58 PM) mijortsa: source ~/.bashrc
(08:17:06 PM) bangjali: mohon gabung :d
(08:17:11 PM) mijortsa: export | grep DEB
(08:17:23 PM) mijortsa: bangjali: silahken pak duduk depan :D
(08:17:53 PM) mijortsa: export | grep DEB akan kelua informasi yg kita buat
(08:18:19 PM) mijortsa: lanjut
(08:18:30 PM) mijortsa: lanjukan dg Membuat kunci pribadi :
(08:18:31 PM) invaleed: lanjut
(08:18:36 PM) timut: *ijin menyimak
(08:19:04 PM) nama|palsu: lanjut
(08:19:04 PM) mijortsa: ketik "gpg --gen-key: pada terminal tanpa tanda kutip
(08:19:13 PM) \*\*\*bangjali belakang aja ...
(08:19:50 PM) nama|palsu: sudah
(08:20:10 PM) mijortsa: gpg --gen-key ini adalah kuncu dari bapak2 untuk dapat
mendapatkan akses ke irgsh (robot keren) kita
(08:20:27 PM) mijortsa: nantinya diharap kunci yg kita buat hanya sekali saaja
(08:20:38 PM) mijortsa: jadi agar disimpan baik2
(08:21:02 PM) nama|palsu: ada 4 pilihan pak
(08:21:11 PM) mijortsa: gpg --gen-key
(08:21:11 PM) mijortsa: pilih (1) RSA and DSA (default)
(08:21:23 PM) pdft [~pdft@112.215.44.100] entered the room.
(08:21:31 PM) mijortsa: nama|palsu: yup bener kita pilih (0) pak
(08:22:06 PM) invaleed: Not enough random bytes available.  Please do some
other work to give
(08:22:07 PM) invaleed: the OS a chance to collect more entropy! (Need 279 more
bytes)
(08:22:11 PM) invaleed: :D
(08:22:26 PM) mijortsa: abaikan keluaran
(08:22:30 PM) mijortsa: keluaran --> RSA keys may be between 1024 and 4096 bits
long. What keysize do you want? (2048) --- > tekan enter
(08:22:38 PM) mijortsa: lanjut ke enter
(08:23:01 PM) mijortsa: key is valid for? (0) --> enter juga
(08:23:07 PM) piko [~piko@112.215.44.100] entered the room.
(08:23:23 PM) mijortsa: Key does not expire at all, Is this correct? (y/N) ---
> y
(08:23:45 PM) mijortsa: artinya kunci yg bapak2 buat tidak ada batas waktunya
(08:23:48 PM) njung [~Njung@subs09a-223-255-225-61.three.co.id] entered the
room.
(08:24:18 PM) nama|palsu: Real name: <<
(08:24:26 PM) mijortsa: Real name: isi nama anda
(08:24:26 PM) mijortsa: Email address: isi email anda
(08:24:26 PM) mijortsa: comment: isi terserah anda (bisa juga di kosongin)
(08:25:09 PM) mijortsa: kalau comment saya, biasa saya isi icik-icik :D
(08:25:13 PM) ical_ [~bob@subs15-223-255-231-5.three.co.id] entered the room.
(08:25:14 PM) invaleed: lanjut
(08:25:14 PM) kiansantang: Apakah real name di sesuaikan dengan yg kita buat
diawal
(08:25:24 PM) kiansantang: Bagaimana jika beda?
(08:25:44 PM) mijortsa: kiansantang: beda gmana pak mksdnya?
(08:26:11 PM) nama|palsu: Change (N)ame, (C)omment, (E)mail or (O)kay/(Q)uit?
<<- ?
(08:26:11 PM) ical_ left the room (quit: Read error: Connection reset by peer).
(08:26:12 PM) kiansantang: Kan ada nama dan alamat email tuh
(08:26:17 PM) mijortsa: itu terserah pak, bisa di kosongin
(08:26:35 PM) mijortsa: kiansantang: gmana pak? bisa lanjut?
(08:26:38 PM) kiansantang: Diawal ada pengisian di bagaian. ~./bashrc
(08:26:57 PM) kiansantang: Apakah hra di samakan atau boleh beda
(08:27:08 PM) mijortsa: terserah pak
(08:27:22 PM) ical_ [~bob@subs15-223-255-231-5.three.co.id] entered the room.
(08:27:23 PM) kiansantang: ok monggo di lanjut
(08:27:33 PM) mijortsa: yg penting nama anda dan email anda
(08:27:33 PM) ical_ left the room (quit: Read error: Connection reset by peer).
(08:27:40 PM) mijortsa: ok
(08:27:51 PM) mijortsa: Change (N)ame, (C)omment, (E)mail or (O)kay/(Q)uit?  --
-> kalau sudah yakin tekan (O)okey
(08:27:56 PM) fird0s [~fird0s@36.76.122.145] entered the room.
(08:27:57 PM) ical_ [~bob@subs15-223-255-231-5.three.co.id] entered the room.
(08:28:14 PM) mijortsa: Enter passphrase: isikan passphrase anda
(08:28:15 PM) ical_ left the room (quit: Read error: Connection reset by peer).
(08:28:15 PM) mijortsa: Repeat passphrase: isikan passphrase yg sama dg pertama
(08:28:25 PM) dotovr left the room (quit: Excess Flood).
(08:28:25 PM) The account has disconnected and you are no longer in this chat.
You will automatically rejoin the chat when the account reconnects.
(08:29:00 PM) The topic for #blankon is: Selamat datang di #BlankOn - http://
www.blankonlinux.or.id | Unduh BlankOn 8.0 - http://www.blankonlinux.or.id/
unduh/ | http://w.blankon.in/an | Distrowatch http://www.distrowatch.com/
blankon | Jejaring Sosial : http://w.blankon.in/bn | Riwayat IRC http://
irclog.blankon.in/ | Terjemahkan bahasa anda di http://w.blankon.in/WA | Tempel
http://tempel.blankon.in
(08:29:00 PM) Topic for #blankon set by timut!~Thunderbi@118.96.73.222 at 04:
46:12 PM on 12/03/2012
328: http://www.blankonlinux.or.id
(08:29:09 PM) nama|palsu: Enter passphrase:
(08:29:09 PM) ical_ left the room (quit: Read error: Connection reset by peer).
(08:29:09 PM) dotovr left the room (quit: Excess Flood).
(08:29:09 PM) The account has disconnected and you are no longer in this chat.
You will automatically rejoin the chat when the account reconnects.
(08:29:27 PM) The topic for #blankon is: Selamat datang di #BlankOn - http://
www.blankonlinux.or.id | Unduh BlankOn 8.0 - http://www.blankonlinux.or.id/
unduh/ | http://w.blankon.in/an | Distrowatch http://www.distrowatch.com/
blankon | Jejaring Sosial : http://w.blankon.in/bn | Riwayat IRC http://
irclog.blankon.in/ | Terjemahkan bahasa anda di http://w.blankon.in/WA | Tempel
http://tempel.blankon.in
(08:29:27 PM) Topic for #blankon set by timut!~Thunderbi@118.96.73.222 at 04:
46:12 PM on 12/03/2012
328: http://www.blankonlinux.or.id
(08:29:32 PM) ical_ [~bob@subs15-223-255-231-5.three.co.id] entered the room.
(08:29:54 PM) mijortsa: itu adalah kunci password bila di minta nanti
(08:30:20 PM) mijortsa: mungkin pada terminal saat pengisian passphrase tidak
keluar, abaikan saja
(08:30:29 PM) nama|palsu: yup sudah
(08:30:30 PM) ical_ left the room (quit: Read error: Connection reset by peer).
(08:30:33 PM) mijortsa: tapi yg anda ketik semua tersimpan
(08:30:53 PM) ical_ [~bob@subs15-223-255-231-5.three.co.id] entered the room.
(08:31:03 PM) mijortsa: tunggu sampai proses berjalan dan selesai, sambil
menunggu anda bisa memlakukan aktifitas dg menggerak2kan mouse/pencet2 keyboard
:D. hal ini untuk mencapai random bit yg dibutuhkan (2048)
(08:31:04 PM) ical_ left the room (quit: Read error: Connection reset by peer).
(08:31:16 PM) y3d0wn [~root@222.124.186.246] entered the room.
(08:31:23 PM) mijortsa: mungkin membutuhkan beberapa menit
(08:31:24 PM) fird0s is now known as orangganteng
(08:31:35 PM) \*\*\*invaleed bacain cerita pengantar tidur dulu buat anak
(08:32:06 PM) warsinem left the room (quit: Quit: "udah ngantuk, tidur dulu :
3").
(08:32:10 PM) mijortsa: invaleed: silahken pak
(08:32:10 PM) ical_ [~bob@subs15-223-255-231-5.three.co.id] entered the room.
(08:32:33 PM) mijortsa: ok ini adalah kunci gpg-key yg saya buat bisa dilihat
di http://tempel.blankon.in/198996
(08:32:33 PM) ical_ left the room (quit: Read error: Connection reset by peer).
(08:32:39 PM) mijortsa: prosesnya
(08:33:17 PM) ical_ [~bob@subs15-223-255-231-5.three.co.id] entered the room.
(08:33:35 PM) mijortsa: pembuatan gpg-key selesai (done0
(08:33:35 PM) ical_ left the room (quit: Read error: Connection reset by peer).
(08:33:41 PM) mijortsa: ada yg perlu ditanyakan?
(08:33:53 PM) mijortsa: dotovr: pak
(08:33:59 PM) invaleed: keynya ini disimpen dmn pak?
(08:34:05 PM) dotovr: mijortsa: iya pak
(08:34:14 PM) invaleed: siapa tau mau dibackup
(08:34:16 PM) mijortsa: keynya coba dilihat di direktory home .ssh
(08:34:17 PM) \*\*\*dotovr seruput kopi
(08:34:18 PM) ical_ [~bob@subs15-223-255-231-5.three.co.id] entered the room.
(08:34:32 PM) orangganteng: mijortsa:  apa perbedaan antara 4 jenis gpg key pak
?
(08:34:32 PM) ical_ left the room (quit: Read error: Connection reset by peer).
(08:34:41 PM) orangganteng: mijortsa:  (1) RSA and RSA (default)
(08:34:42 PM) orangganteng:    (2) DSA and Elgamal
(08:34:42 PM) orangganteng:    (3) DSA (sign only)
(08:34:42 PM) orangganteng:    (4) RSA (sign only)
(08:34:56 PM) y3d0wn is now known as Qalit
(08:35:28 PM) mijortsa: waduh anak saya nangis :D
(08:35:50 PM) bangjali: hadeuhhh :d :d
(08:35:51 PM) mijortsa: dotovr: pak silahken dilanjutkan sesi 2
(08:36:03 PM) ical_ [~bob@subs15-223-255-231-5.three.co.id] entered the room.
(08:36:07 PM) dotovr: mijortsa: kamsiah pak
(08:36:17 PM) dotovr: ok, mari kita lanjut
(08:36:18 PM) ical_ left the room (quit: Read error: Connection reset by peer).
(08:36:25 PM) mijortsa: dotovr: mungkinsekalian dijawab pertanyaannya pak
(08:36:47 PM) syaimif left the room (quit: Quit: Leaving.).
(08:36:50 PM) invaleed: di saya kok ndak ada .ssh di home?
(08:36:54 PM) dotovr: sebelumnya sudah dijelaskan sama pak mijortsa tentang
persiapan alat tempur :D
(08:37:07 PM) syaimif [~cak@125.164.221.77] entered the room.
(08:37:23 PM) ical_ [~bob@subs15-223-255-231-5.three.co.id] entered the room.
(08:37:45 PM) nama|palsu: nama keynya >> known_hosts
(08:37:52 PM) nama|palsu: betul pak?
(08:38:32 PM) dotovr: known_hosts << tempat penyimpanan alamat server saat
diakses menggunakan ssh
(08:38:33 PM) ical_ left the room (quit: Read error: Connection reset by peer).
(08:38:57 PM) ical_ [~bob@subs15-223-255-231-5.three.co.id] entered the room.
(08:39:04 PM) dotovr: itu akan ada pertanyaan waktu mengakses via ssh apakah
mau disimpan permanen atau tidak
(08:40:27 PM) dotovr: fungsi gpg key sendiri banyak sebenarnya, mulai untuk
pengenal dipaket samapai pengenal akses ke server (kalau sudah didaftarkan pada
server terkait)
(08:41:09 PM) mijortsa: invaleed: maaf pak ralat di direktory .gnupg :D
(08:41:10 PM) ical_ left the room (quit: Read error: Connection reset by peer).
(08:41:21 PM) dotovr: ok, selanjutnya mengenai gpg lebih lanjut bisa dibaca
lebih lanjut mengenai gpg bisa dibaca
(08:41:27 PM) invaleed: yup pak dah ketemu :)
(08:41:32 PM) ical_ [~bob@subs15-223-255-231-5.three.co.id] entered the room.
(08:41:37 PM) c0desHell: ane fakir bandwidth ni
(08:42:10 PM) tuanpembual left the room (quit: Remote host closed the
connection).
(08:42:10 PM) ical_ left the room (quit: Read error: Connection reset by peer).
(08:42:23 PM) dotovr: yang kebetulan bandwithnya terbatas bisa disimpan lognya,
dan di praktekin kalau sudah ada koneksi yang pas
(08:42:33 PM) Qalit: ketinggalan ni, ada lognya gk?
(08:42:57 PM) ical_ [~bob@subs15-223-255-231-5.three.co.id] entered the room.
(08:42:58 PM) dotovr: untuk yang telat/ketinggalan bisa membaca log di
irclog.blankon.in
(08:43:26 PM) Guest8892 left the room (quit: Quit: Page closed).
(08:43:40 PM) dotovr: ok, kita lanjut ke tahap selanjutnya membuat paket atau
masih ada yang ingin ditanyakan bapak-bapak sekalian ?
(08:43:50 PM) invaleed: lanjut pak :D
(08:43:50 PM) ical_ left the room (quit: Read error: Connection reset by peer).
(08:43:59 PM) nama|palsu: lanjut
(08:44:09 PM) kiansantang: Lanjut pak
(08:44:14 PM) ical_ [~bob@subs15-223-255-231-5.three.co.id] entered the room.
(08:45:22 PM) dotovr: pertama dalam sebuah package mempunyai 2 struktur
(08:45:36 PM) dotovr: 0. source code
(08:45:36 PM) ical_ left the room (quit: Read error: Connection reset by peer).
(08:46:02 PM) syaimif left the room (quit: Ping timeout: 240 seconds).
(08:46:21 PM) dotovr: source code adalah aplikasi yang dibuat oleh para
pemrogram
(08:47:07 PM) dotovr: dan dikelola oleh pembuatnya sendiri baik perseorangan
maupun kelompok
(08:47:55 PM) dotovr: pembuat paket bisa merubah/menambah/mengurangi fitur
tertentu dengan cara melakukan patch
(08:47:59 PM) ical_ [~bob@subs15-223-255-231-5.three.co.id] entered the room.
(08:48:19 PM) dotovr: tidak langsung memrubahnya pada paket sumber
(08:48:20 PM) ical_ left the room (quit: Read error: Connection reset by peer).
(08:48:27 PM) dotovr: 1. debian
(08:48:43 PM) ical_ [~bob@subs15-223-255-231-5.three.co.id] entered the room.
(08:48:50 PM) dotovr: direktori ini dikelola sama pemaket
(08:48:54 PM) syaimif [~cak@125.164.221.77] entered the room.
(08:49:42 PM) dotovr: yang harus diingat bahwa paket yang akan dibuat disini
harus betul-betul di bawah licensi FOSS
(08:49:54 PM) pohong-keju is now known as aftian
(08:50:21 PM) dotovr: dalam dirketori debian sendiri, wajib mempunyai 4 berkas
(08:50:22 PM) ical_ left the room (quit: Read error: Connection reset by peer).
(08:50:30 PM) dotovr: 0. copyright
(08:50:36 PM) dotovr: 1. control
(08:50:45 PM) dotovr: 2. changelog
(08:50:47 PM) ical_ [~bob@subs15-223-255-231-5.three.co.id] entered the room.
(08:50:53 PM) dotovr: 3. rules
(08:51:21 PM) dotovr: ok, sampai disini ada yang ingin di tanyakan ?
(08:51:22 PM) ical_ left the room (quit: Read error: Connection reset by peer).
(08:51:30 PM) invaleed: clear pak
(08:51:46 PM) orangganteng: dotovr: isi dari ke empat file tersebut apa ya ?
(08:52:09 PM) fontamara left the room (quit: Ping timeout: 268 seconds).
(08:52:24 PM) ical_ [~bob@subs15-223-255-231-5.three.co.id] entered the room.
(08:52:43 PM) dotovr: isinya sesuai dengan debian policy
(08:52:51 PM) kiansantang: Bagaimana kita bisa mengetahui bahwa paket yg ingin
kita buat berada pada lisensi foss
(08:52:51 PM) ical_ left the room (quit: Read error: Connection reset by peer).
(08:52:54 PM) dotovr: untuk debian policy sendiri bisa dibaca http://
www.debian.org/doc/debian-policy/
(08:52:55 PM) piko: apakah memaketkan paket deb, yang dipaketkan harus
perangkat lunak foss?
(08:53:16 PM) ical_ [~bob@subs15-223-255-231-5.three.co.id] entered the room.
(08:53:18 PM) kiansantang: Sedangkan skrg ada banyak macam lisensi opensource
(08:53:19 PM) piko: bagaimana dengan (misal) paket fglrx yang notabene
tertutup?
(08:53:20 PM) dotovr: untuk licensi setiap paket silahkan lihat pada copyright
masing-masing kode sumber
(08:53:33 PM) kiansantang: Ok
(08:53:34 PM) ical_ left the room (quit: Read error: Connection reset by peer).
(08:53:57 PM) ical_ [~bob@subs15-223-255-231-5.three.co.id] entered the room.
(08:55:02 PM) dotovr: mengenia licensi bisa juga dibaca http://opensource.org/
licenses
(08:55:03 PM) ical_ left the room (quit: Read error: Connection reset by peer).
(08:55:30 PM) bangjali left the room (quit: Quit: Wew).
(08:55:43 PM) dotovr: tadi mungkin ada yang kelewat satu lagi tool yang juga
penting untuk membuat paket
(08:55:47 PM) ical_ [~bob@subs15-223-255-231-5.three.co.id] entered the room.
(08:55:52 PM) dotovr: lintian
(08:56:06 PM) dotovr: ^ digunakan untuk menandatangi paket
(08:56:07 PM) ical_ left the room (quit: Read error: Connection reset by peer).
(08:56:32 PM) ical_ [~bob@subs15-223-255-231-5.three.co.id] entered the room.
(08:56:42 PM) dotovr: dalam hal ini paket akan ditanda tangani oleh lintian
sesuai dengan informasi pembuat
(08:57:17 PM) dotovr: informasi yang harus disesuaikan gpg key dan changelog
(08:57:18 PM) ical_ left the room (quit: Read error: Connection reset by peer).
(08:57:42 PM) ical_ [~bob@subs15-223-255-231-5.three.co.id] entered the room.
(08:57:45 PM) nama|palsu: dotovr:  kalau changelog nggak ada gemana pak ?
(08:58:19 PM) dotovr: changelog wajib ada pak
(08:58:19 PM) ical_ left the room (quit: Read error: Connection reset by peer).
(08:58:45 PM) ical_ [~bob@subs15-223-255-231-5.three.co.id] entered the room.
(08:58:47 PM) dotovr: semua informasi perubahan paket, versi paket, pembuat
paket ditampung oleh changelog
(08:58:57 PM) syaimif1 [~cak@125.164.221.77] entered the room.
(08:59:21 PM) dotovr: untuk membuat changelog nanti ditahap selanjutnya saat
kita masuk dalam pembuatan paket
(08:59:22 PM) ical_ left the room (quit: Read error: Connection reset by peer).
(08:59:34 PM) dotovr: ok, ada yang ingin ditanyakan lagi ?
(09:00:23 PM) syaimif left the room (quit: Ping timeout: 240 seconds).
(09:00:30 PM) Bagus_Ramadhan [724f353e@gateway/web/freenode/ip.114.79.53.62]
entered the room.
(09:00:40 PM) dotovr: baik kalau tidak ada langsung kita masuk dalam membuat
paket
(09:01:18 PM) nama|palsu: lanjut
(09:01:33 PM) dotovr: di awal sudah menginstall paket git semuanya ?
(09:01:49 PM) invaleed: sudah pak
(09:01:53 PM) dotovr: git belakangan
(09:02:51 PM) faiq [~faiq@39.217.7.85] entered the room.
(09:02:52 PM) dotovr: silahkan unduh contoh paket yang akan di paketin
(09:02:55 PM) dotovr: wget ftp://ftp.gnu.org/pub/gnu/ed/ed-1.6.tar.gz
(09:03:03 PM) abdiman1 [~abdimanda@36.74.112.251] entered the room.
(09:03:05 PM) Qalit: sudah
(09:03:23 PM) abdiman [~abdiman@36.74.112.251] entered the room.
(09:03:25 PM) dotovr: sudah semua?
(09:03:35 PM) abdiman1 left the room.
(09:03:36 PM) invaleed: done
(09:03:41 PM) piko left the room (quit: Read error: Connection reset by peer).
(09:03:56 PM) nama|palsu: dikit lagi done
(09:04:23 PM) dotovr: kalau sudah di towel biar sekali jalan
(09:04:33 PM) nama|palsu: yup lanjut
(09:04:34 PM) piko [~piko@112.215.44.100] entered the room.
(09:04:42 PM) syaimif [~cak@125.164.221.77] entered the room.
(09:04:53 PM) orangganteng: beres
(09:04:57 PM) piko: sudah pak
(09:06:03 PM) dotovr: sekarang di ekstrak paketnya
(09:06:06 PM) dotovr: tar zxvf ed-1.6.tar.gz
(09:06:29 PM) timut has changed the topic to: Selamat datang di #BlankOn -
http://www.blankonlinux.or.id |  Kelas Pemaket BlankOn Seri Oktober Ceria
(09:06:31 PM) faiq: nyimak
(09:06:44 PM) syaimif left the room (quit: Client Quit).
(09:06:56 PM) syaimif [~cak@125.164.221.77] entered the room.
(09:07:10 PM) dotovr: bagi yang telat bisa membaca lognya di http://
irclog.blankon.in
(09:07:30 PM) dotovr: masuk dalam direktori kerja
(09:07:31 PM) wahyu: siap pak,,
(09:07:48 PM) dotovr: cd ed-1.6
(09:07:54 PM) aftian: http://irclog.blankon.in/blankon/+/
KelasPemaketOktoberCeria/
(09:08:16 PM) dotovr: kamsiah pak aftian :)
(09:08:27 PM) aftian: dotovr: lanjut pak
(09:08:42 PM) syaimif1 left the room (quit: Ping timeout: 256 seconds).
(09:08:47 PM) nama|palsu: yup sudah
(09:08:58 PM) dotovr: selanjutnya membuat kebutuhan paket
(09:09:10 PM) dotovr: dh_make -e isiemail -f ../ed-1.6.tar.gz
(09:09:53 PM) dotovr: muncul pertanyaan, pilih single binary
(09:10:06 PM) dotovr: dengan cara tekan s dikeyboard :D
(09:10:25 PM) dotovr: selanjtnya di enter saja
(09:10:25 PM) piko: parameter isiemail perlu diganti atau memang isiemail?
(09:11:12 PM) dotovr: isiemail diganti dengan email bapak-bapak yang tadi bapak
buat di awal .bashrc dan gpg key
(09:11:40 PM) dotovr: jika tadi kebetulan dibuat beda emailnya, pilih yang di
isi dalam .bashrc
(09:12:07 PM) dotovr: baik, kalau sudah siap
(09:12:13 PM) piko: oh, ternyata memang diganti email. maaf. lanjut pak
(09:12:13 PM) orangganteng: sudo aptitude install dh-make
(09:12:13 PM) nama|palsu is now known as nama|palsu|off
(09:12:20 PM) piko: siap
(09:12:33 PM) dotovr: sekarang di dalam direktory kerja ada direktori baru
(09:12:44 PM) dotovr: namanya debian
(09:12:49 PM) dotovr: ada semua ?
(09:12:54 PM) piko: ada pak
(09:13:19 PM) dotovr: selanjtnya buang berkas-berkas yang tidak diperlukan
(09:13:39 PM) dotovr: berkas info
(09:13:47 PM) dotovr: berkas dengan extensi .ex
(09:13:52 PM) dotovr: dibuang semua
(09:14:22 PM) dotovr: berkas extensi .EX juga dibuang
(09:14:29 PM) invaleed: rm *.ex *.EX docs info README.*
(09:14:39 PM) dotovr: sip
(09:14:59 PM) orangganteng: compat dibuat ga ?
(09:15:12 PM) dotovr: compat bisa diabaikan
(09:16:00 PM) dotovr: selanjutnya membuat versi paket, perubahan paket serta
menambahkan pembuat paket
(09:16:14 PM) dotovr: semua itu ada dalam berkas changelog
(09:16:27 PM) syaimif left the room (quit: Quit: Leaving.).
(09:16:36 PM) dotovr: ada yang tau menyunting changelog ?
(09:16:54 PM) piko: belum pernah pak
(09:16:58 PM) invaleed: dch -e
(09:16:59 PM) syaimif [~cak@125.164.221.77] entered the room.
(09:17:08 PM) dotovr: sip pak
(09:17:44 PM) dotovr: oke sekarang kita buat versi paket baru
(09:17:51 PM) dotovr: caranya dch -i
(09:18:12 PM) syaimif: d ..
(09:18:44 PM) dotovr: ada tiga baris
(09:19:03 PM) dotovr: pertama nama paket - versi paket - nama distro
(09:19:20 PM) dotovr: kedua * tempat menulis perubahan paket
(09:19:39 PM) dotovr: dan ketiga nama pembuat paket beserta emailnya
(09:19:44 PM) dotovr: silahkan dicoba
(09:19:59 PM) yht [~yht@180.244.21.247] entered the room.
(09:20:02 PM) dotovr: kalau ada yang kurang paham silahkan ditanyakan bapak-
bapak
(09:20:12 PM) yht: wah telat
(09:20:37 PM) dotovr: pak yht : (09:07:54 PM) aftian: http://irclog.blankon.in/
blankon/+/KelasPemaketOktoberCeria/
(09:20:47 PM) mijortsa: dotovr: pak apa beda dch -e dng dch -i
(09:20:56 PM) piko: saat menjalankan dch -e, email yang ada di bashrc muncul,
saat menjalankan dch -i, yang ditambahkan adalah user@host
(09:21:07 PM) dotovr: dch -e untuk mengedit
(09:21:14 PM) dotovr: dch -i untuk membuat baru
(09:21:19 PM) piko: yang salah kira-kira dimana pak?
(09:21:23 PM) tarjo left the room (quit: Ping timeout: 245 seconds).
(09:22:21 PM) piko: apakah 3 baris baru yang dibuat oleh dch -i itu tidak ada
hubungannya dengan email yang disetup di .bashrc?
(09:22:22 PM) dotovr: piko: saat menjalankan dch -e itu sudah terisi ketika
(09:09:10 PM) dotovr: dh_make -e isiemail -f ../ed-1.6.tar.gz
(09:23:37 PM) lucky___ [24561c80@gateway/web/freenode/ip.36.86.28.128] entered
the room.
(09:23:59 PM) orangganteng left the room (quit: Quit: Leaving.).
(09:24:00 PM) dotovr: sebenarnya ada pak,
(09:24:17 PM) dotovr: jika tidak terisi otomatis ssilahkan diisi manual pak
(09:24:27 PM) piko: oh, baik. paham, pak.
(09:24:30 PM) piko: lanjut.
(09:25:26 PM) dotovr: mengenai changelog sendiri itu sudah ada ketentuan dari
debian policy
(09:25:52 PM) lucky___: wuiss rame ...
(09:25:57 PM) dotovr: ada yang ingin ditanyakan lagi bapak-bapak ?
(09:26:24 PM) dotovr: eh ada ibu tidak malam ini :D
(09:26:33 PM) a9un9hari [724f1d5a@gateway/web/freenode/ip.114.79.29.90] entered
the room.
(09:26:58 PM) azen [7c9e9154@gateway/web/freenode/ip.124.158.145.84] entered
the room.
(09:27:27 PM) dotovr: jika ada kendala silahkan ditanyakan langsung
(09:27:33 PM) dotovr: sebelum kita lanjut
(09:27:43 PM) azen left the room (quit: Client Quit).
(09:27:48 PM) lucky___: <dotovr>keunggulan blank on apa aja.. pak ??
(09:27:58 PM) dotovr: oh iya, habis ini ada pr
(09:28:24 PM) syaimif_ [7da4dd4d@gateway/web/freenode/ip.125.164.221.77]
entered the room.
(09:28:29 PM) dotovr: lucky___: banyak pak
(09:28:53 PM) dotovr: mulai dari para pengembangnya yang ramah-ramah
(09:29:43 PM) syaimif left the room (quit: Ping timeout: 240 seconds).
(09:30:30 PM) dotovr: disini kita saling belajar dalam konteks open source
(09:30:45 PM) dotovr: mulai pengembangan sampai hal-hal non teknis
(09:31:47 PM) lucky___: <dotorv> wuiss bisa jadi saingan ubuntu desktop nihh
(09:32:19 PM) dotovr: sebenarnya distro blankon itu bonus dari belajar bersama
pak
(09:32:36 PM) dotovr: jadi kita tidak bersaing :D
(09:32:59 PM) dotovr: oke kita lanjut ke tahap pemkaten selanjutnya
(09:33:20 PM) dotovr: sebelumnya sudah membuat informasi masing-masing di
changelog
(09:33:33 PM) dotovr: sekarang kita masuk ke tahap membangun paket
(09:34:09 PM) dotovr: hampir terlewatkan
(09:34:19 PM) dotovr: berkas control juga di isi
(09:34:40 PM) dotovr: pada bagian Maintainer diisi dengan nama dan email
pembuat paket
(09:35:19 PM) dotovr: bagaimana bapakbapak, sudah menyunting berkas control ?
(09:36:10 PM) dotovr: jika sudah langung eksekusi mebangun paket
(09:36:11 PM) dotovr: dpkg-buildpackage -rfakeroot
(09:36:31 PM) dotovr: ^ dijalankan diluar direktori debian
(09:37:25 PM) mijortsa: lucky___: maaf pak lagi ada kelas pemaket daring,
mungkin pertanyaanya dilura konteks disimpan dulu
(09:37:26 PM) lucky___: oh iya maaf pak ...
(09:37:26 PM) ndatu [27e039eb@gateway/web/freenode/ip.39.224.57.235] entered
the room.
(09:37:26 PM) nama|palsu|off left the room (quit: ).
(09:37:26 PM) lucky___ left the room (quit: Quit: Page closed).
(09:37:26 PM) Qalit left the room (quit: Quit: Lost terminal).
(09:37:26 PM) nama|palsu [~not@39.224.57.235] entered the room.
(09:37:26 PM) noerr_ left the room (quit: Ping timeout: 250 seconds).
(09:37:32 PM) prakasa [~prakasa@118.137.132.182] entered the room.
(09:37:50 PM) dotovr: jika perintah diatas berhasil
(09:38:03 PM) rizasyam [ca432807@gateway/web/freenode/ip.202.67.40.7] entered
the room.
(09:38:04 PM) dotovr: berarti bapak sudah selesai membuat paket
(09:38:13 PM) partoyem left the room (quit: Quit: http://www.kiwiirc.com/ - A
hand crafted IRC client).
(09:38:14 PM) dotovr: lihat diluar direktori kerja
(09:38:20 PM) dotovr: sudah ada paket ed_1.6-1_i386.deb
(09:39:06 PM) dotovr: invaleed piko bagaimana pak ?
(09:39:34 PM) invaleed: dpkg-deb: building package `ed' in `../ed_1.6-
1ubuntu1_i386.deb'.
(09:39:36 PM) invaleed:  signfile ed_1.6-1ubuntu1.dsc
(09:39:36 PM) invaleed: gpg: skipped "Ramadoni <invaleed@gmail.com>": secret
key not available
(09:39:36 PM) invaleed: gpg: [stdin]: clearsign failed: secret key not
available
(09:39:40 PM) piko: dpkg-buildpackage: warning: (Use -d flag to override.)
(09:39:57 PM) invaleed: dibilang secret key not available pak
(09:40:04 PM) piko: ada unmeet dependencies juga
(09:40:09 PM) piko: duh, saya lengkapi dulu
(09:40:31 PM) piko: autotools-dev
(09:40:42 PM) dotovr: piko: sip pak
(09:41:14 PM) dotovr: invaleed: ok pak, paket selesai dibangun
(09:41:22 PM) piko: saya ditanyakan passphrase.
(09:41:35 PM) invaleed: tapi kok ndak ditanyain passphrase?
(09:41:53 PM) dotovr: piko isi passphrase saat gpg key tadi pak
(09:42:04 PM) dotovr: invaleed: mungkin ada yang salah pak
(09:42:12 PM) piko: wooosaaah, paketnya jadi. :D
(09:42:21 PM) invaleed: step2nya udah ngikutin persis pak
(09:42:21 PM) dotovr: passphrase ditanyakan oleh lintian untuk penandatangan
paket
(09:42:23 PM) invaleed: :)
(09:42:25 PM) dotovr: :D
(09:43:06 PM) invaleed: tapi paketnya kebentuk :)
(09:43:14 PM) piko: saya lihat paket yang dihasilkan ada 3 pak
(09:43:40 PM) joo0nas left the room (quit: Read error: Connection reset by
peer).
(09:43:40 PM) piko: -debian.tar.gz, .deb, -orig.tar.gz
(09:43:48 PM) dotovr: piko: betul pak
(09:43:53 PM) piko: boleh minta penjelasan pak
(09:43:58 PM) winlux [~winlux.hu@118.97.95.182] entered the room.
(09:43:59 PM) sitidy [~didiet-ub@125.164.1.120] entered the room.
(09:44:04 PM) dotovr: orig.tar.gz <'<' source code
(09:44:32 PM) dotovr: -debian.tar.gz <'<' hanya mengandung direktori debian yang
dikelola oleh pembuat paket
(09:44:44 PM) Irfan_P [724f387b@gateway/web/freenode/ip.114.79.56.123] entered
the room.
(09:44:49 PM) pusing85 [~gunawan@114.79.2.110] entered the room.
(09:44:52 PM) dotovr: dan .deb <'<' paket yang sukses dibangun
(09:45:06 PM) piko: perubahan dan patch hanya masuk ke *.deb saja?
(09:45:40 PM) dotovr: invaleed: coba pakei perintah ini pak dpkg-buildpackage -
uc -us
(09:46:21 PM) dotovr: piko: betul pak itu versi akhir dan siap untuk di install
(09:46:50 PM) faiq left the room (quit: ).
(09:47:21 PM) piko: paham, pak
(09:47:45 PM) timut has changed the topic to: Selamat datang di #BlankOn -
http://www.blankonlinux.or.id | Unduh BlankOn 9.0 Jahian 1 - http://
w.blankon.in/y_ | Distrowatch http://www.distrowatch.com/blankon | Jejaring
Sosial : http://w.blankon.in/bn | Riwayat IRC http://irclog.blankon.in/ |
Terjemahkan bahasa anda di http://w.blankon.in/WA | Tempel http://
tempel.blankon.in | Toko http://toko.blankonlinux.or.id/
(09:47:50 PM) timut has changed the topic to: Selamat datang di #BlankOn -
http://www.blankonlinux.or.id | Unduh BlankOn 9.0 Jahian 1 - http://
w.blankon.in/y_ | Distrowatch http://www.distrowatch.com/blankon | Jejaring
Sosial : http://w.blankon.in/bn | Riwayat IRC http://irclog.blankon.in/ |
Terjemahkan bahasa anda di http://w.blankon.in/WA | Tempel http://
tempel.blankon.in | Toko http://toko.blankonlinux.or.id/
(09:48:10 PM) ndatu left the room (quit: Quit: Page closed).
(09:48:36 PM) dotovr: piko: mantap pak
(09:48:39 PM) nama|palsu left the room (quit: ).
(09:48:46 PM) dotovr: tinggal tunggu pr :D
(09:48:50 PM) invaleed: dotovr: klo pake dpkg-buildpackage -uc -us ini mau pak
(09:48:53 PM) invaleed: gak ada galat
(09:49:00 PM) dotovr: oke sip pak
(09:49:09 PM) dotovr: sekalian periksa keynya
(09:49:11 PM) dotovr: gpg --list-secret-keys
(09:49:12 PM) dotovr: :D
(09:49:14 PM) invaleed: knp tuh pak dotovr ?
(09:49:21 PM) sanoj [~sanoj@188-183-5-254-static.dk.customer.tdc.net] entered
the room.
(09:49:38 PM) sanoj is now known as jo0nas
(09:49:46 PM) dotovr: mungkin ada masalah dengan sistem paket :D
(09:50:01 PM) dotovr: tapi bisa diabaikan pak :D
(09:50:05 PM) invaleed: delete key gmn caranya pak?
(09:51:39 PM) dotovr: gpg --delete-secret-key nama
(09:52:43 PM) dotovr: ok, berarti sekarang sudah bisa membuat paket
(09:53:13 PM) kiansantang: Insya Allah
(09:53:32 PM) dotovr: sebagai pr untuk minggu depan
(09:53:42 PM) dotovr: unduh paket http://pendekar.blankon.in/~dotovr/PR/
google_pacman.tar.gz
(09:53:42 PM) kiansantang: Kalau ada masalah trus mau tanya2 dimana ya
(09:54:02 PM) dotovr: kalau ada maslah bisa ditanyakan disini pak
(09:54:15 PM) kiansantang: Baik pak
(09:54:22 PM) kotakkuning [31d51146@gateway/web/freenode/ip.49.213.17.70]
entered the room.
(09:54:23 PM) mijortsa: * wah mantap ada PR nya
(09:54:44 PM) dotovr: atau ke milis pengembang blankon-dev@googlegroups.com
(09:54:52 PM) piko: wah
(09:55:02 PM) piko: PR
(09:55:13 PM) piko: minggu depan ada kelas lagi pak?
(09:55:24 PM) dotovr: piko: anggap aja untuk belajar lagi pak
(09:55:28 PM) mijortsa: piko:  ada pak, kelas ngumpulin PR :D
(09:55:46 PM) dotovr: minggu depan kita bahas masalah kendala PR-nya
(09:55:47 PM) dotovr: :D
(09:55:56 PM) kiansantang: Minggu depan di hari dan jam yg sama ya
(09:56:36 PM) dotovr: betul pak, di hari jam tempat yang sama
(09:56:42 PM) dotovr: beda tanggal saja pak :D
(09:57:04 PM) kiansantang: Kalau tempatnya beda pasti bakal ngak nyambung pak
(09:57:06 PM) kiansantang: Hehehe
(09:57:10 PM) dotovr: hahahha
(09:57:18 PM) dotovr: eh minggu depan pada mudik tidak ?
(09:57:34 PM) nama|palsu [~user@39.225.251.160] entered the room.
(09:57:35 PM) \*\*\*dotovr rencana mudik
(09:57:40 PM) piko: mohon dibikinkan event juga pak
(09:57:41 PM) dotovr: :D
(09:57:45 PM) piko: supaya diingatkan socmed :P
(09:57:52 PM) kiansantang: Titip oleh2 deh pak
(09:58:00 PM) kiansantang: Salamin ama anak pak lurah
(09:58:18 PM) dotovr: kalau anak pak lurah, tuh ada bapaknya disampaing :p
(09:58:23 PM) kotakkuning left the room (quit: Client Quit).
(09:58:30 PM) irgsh left the room (quit: Ping timeout: 245 seconds).
(09:58:35 PM) invaleed: http://serverfault.com/questions/191785/how-can-i-
properly-sign-a-package-i-modified-and-recompiled
(09:58:43 PM) kiansantang: Kalau mudik toh bisa onlen pak
(09:59:03 PM) dotovr: sinyal g bagus di kampung pak
(09:59:28 PM) dotovr: panjat kelapa pasti mantap sinyalnya pak :v
(09:59:30 PM) kiansantang: Ohh kalau begitu jgn lupa bawa bts sekalian pak
(10:00:32 PM) mijortsa: bisa juga prnya paket ini pak http://
dev.blankonlinux.or.id/browser/suroboyo/zacalc
(10:00:33 PM) dotovr: :D
(10:00:45 PM) nama|palsu: saya juga sinyal kampung, bentar2 cuma 2g dc :)
(10:00:46 PM) mijortsa: ##eee
(10:01:11 PM) yudha: mijortsa: sudah selese rupanya
(10:01:16 PM) mijortsa: wah,.. iya sudah ada berkas debiannya,, gak jadi pak
(10:01:37 PM) nama|palsu: kalau mau gabung jadi tim pemaket harus gemana pak ?
(10:01:52 PM) mijortsa: nama|palsu: nah pertanyaan bagus ini pak
(10:02:01 PM) mijortsa: aftian: pak
(10:02:04 PM) mijortsa: bisa jawab?
(10:02:06 PM) invaleed: dotovr: pake gini baru mau :D dpkg-buildpackage -
rfakeroot -kC2F20ADE
(10:02:07 PM) aftian: mijortsa: ya pak
(10:02:10 PM) invaleed: wkwkwkwk
(10:02:29 PM) dotovr: invaleed: wah di paksain pak :D
(10:02:40 PM) dotovr: hahha
(10:03:01 PM) aftian: Acara Selanjutnya https://www.facebook.com/events/
531728426904744/
(10:03:03 PM) invaleed: saya off dulu musti macul ini... tengkyu untuk
sharingnya, mudah2an saya bisa jadi pemaket nantinya :D
(10:03:10 PM) dotovr: oke sekarang kanalnya dialihkan ke pak aftian untuk
ditambahkan lebih lanjut
(10:03:15 PM) dotovr: silahkan pak aftian
(10:03:16 PM) aftian: nama|palsu: kalau mau gabung konsultasi sama pak dotovr
(10:03:17 PM) dotovr: :D
(10:03:24 PM) invaleed: tengkyu pak astrojim dan pak dotovr
(10:03:31 PM) \*\*\*invaleed sungkem buat mbah aftian
(10:03:43 PM) \*\*\*aftian salim sama eyang
(10:04:04 PM) dotovr: invaleed: sama-sama pak tararatengkyu
(10:04:07 PM) invaleed: https://help.ubuntu.com/community/GnuPrivacyGuardHowto
(10:04:42 PM) aftian: oke bapak2 kalau mau gabung tinggal towel ke pak azis
atau pak dotovr kirim id_rsa.pub ssh dan akun twitter
(10:04:52 PM) mijortsa: dotovr: kalau sudah selesai ditutp sekalian pak, biar
mic-nya bisa saya simpan lagi :D
(10:04:53 PM) aftian: nanti minggu depan akan dibahas cara mengirim
(10:05:00 PM) Irfan_P left the room (quit: Quit: Page closed).
(10:05:05 PM) nama|palsu: dotovr: yang mau gabung tim pemaket sama bapak ya?
(10:05:08 PM) y3d0wn [~root@36.68.145.83] entered the room.
(10:06:00 PM) invaleed: exit
(10:06:02 PM) invaleed left the room (quit: Quit: Leaving).
(10:06:09 PM) dotovr: nama|palsu: iya pak, penting konsisten
(10:06:21 PM) dotovr: http://dev.blankonlinux.or.id/wiki/9/
TimPengembang#TimPemaket
(10:07:00 PM) nama|palsu: aftian: harus punya twitter pak ?
(10:07:24 PM) dotovr: \====================Kelas Pemaketan Debian Di Tutup

============================
Last modified on 10/08/2013 09:41:42 AM
#### Attachments (2)
    * kelas_pemaket_7_Oktober_2013.pdf​ (54.6 KB) - added by mijortsa 4 years
      ago.
    * kelas_pemaket_7_Oktober_2013.pdf​ (54.6 KB) - added by mijortsa 4 years
      ago.





