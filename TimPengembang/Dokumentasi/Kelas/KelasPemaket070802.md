## Kelas kedua bulan Agustus 2007
Ini adalah informasi mengenai kelas kedua untuk bulan Agustus 2007.
## Waktu dan tempat
#blankon @ irc.freenode.net Kamis, 23 Agustus 2007, 15:00 WIB.
## Pemateri
mdamt
## Peserta
Seluruh anggota yang hadir.
### Peserta wajib
Segenap anggota Tim Pemaket BlankOn.
### Peserta tambahan
Siapa saja boleh memantau dan ikut belajar.
## Materi
    * Perkenalan jenis-jenis paket yang ditangani di proyek BlankOn
    * Perkenalan prosedur pemaketan paket impor di pabrik paket dan gudang kode
      BlankOn.
## Yang perlu disiapkan sebelumnya
### Alat dan bahan
   * bzr versi >= 0.15 (tersedia di Feisty ke atas)
   * penyunting teks
   * akses Internet
   * kode sumber paket dalam bentuk patch Ubuntu (caranya lihat dokumentasi di
      bawah). Silakan unduh paket yang sebelumnya sudah ditugaskan untuk Anda.
      Bila Anda bukan peserta wajib, silakan pilih paket (sederhana) yang Anda
      suka dari daftar ​BlankOn_Desktop.
   * akun Launchpad yang lengkap dengan kunci SSH
   * sudah menandatangani Ubuntu Code of Conduct.
### Dokumentasi
    * menyusul
### Log
(03:35:06 PM) mdamt: Yg penting sekarang agenda 1.
(03:35:20 PM) mdamt: Agenda 2 bisa dilanjutkan dgn baca2 halaman wiki.
(03:35:28 PM) mdamt: Kalau yg 1 kan harus bersepakat.
(03:35:36 PM) AinulHakim: mdamt: ok bos
(03:35:41 PM) mht: OK
(03:36:08 PM) mht: imtheface: paket khas blankon kan yg paket asli blankon kan?
(03:36:18 PM) imtheface: yup
(03:36:23 PM) imtheface: yg gak ada paketnya di ubuntu
(03:36:25 PM) alie left the room ("Konversation terminated!").
(03:36:26 PM) mdamt: AinulHakim: Kita bisik2 di ubuntu-id
(03:36:42 PM) mht: kalo gitu ini daftarnya: blankon-artwork, blankon-sounds
(03:36:49 PM) mht: usplash-theme-blankon
(03:36:54 PM) mht: example-content
(03:36:59 PM) mht: blankon-docs
(03:37:07 PM) mht: dan ubiquity-blankon-artwork
(03:37:07 PM) imtheface: sounds
(03:37:21 PM) imtheface: sama ini bos
(03:37:31 PM) imtheface: paket2 request yg ada di http://wiki.ubuntu-id.org/
BlankOn/Komponen ???
(03:37:34 PM) abuyusuf left the room ("Leaving").
(03:37:46 PM) mht: yup..
(03:37:49 PM) imtheface: tapi itu gw juga binun mana aja yg perlu masukin
(03:37:51 PM) mht: saya ambil dari sana
(03:38:07 PM) mht: sepertinya emang diambil semua
(03:38:24 PM) imtheface: klo masalah support multimedia dsb
(03:38:25 PM) mht: paling example yg nunggu ada isinya atau kagak
(03:38:49 PM) imtheface: mht: skr bikin paket dummy aja dulu kali yah
(03:39:09 PM) mht: waktunya mungkin gak cukup buat mdamt
(03:39:23 PM) \*\*\*zahris sudah menunggu di terminal chroot
(03:39:34 PM) mht: multimedia codec yg perlu ditambahin apa saja?
(03:39:45 PM) mht: mp3 saja?
(03:40:02 PM) AinulHakim: usul  : jangan 3gp
(03:40:11 PM) imtheface: dvd, flash
(03:40:23 PM) AinulHakim: blacklist 3gp
(03:40:37 PM) mht: totem di feisty punya gua dah bisa muter dvd ;)
(03:40:52 PM) zahris: saya lebih suka VLC
(03:40:52 PM) imtheface: pake gstreamer atau xine?
(03:41:06 PM) mht: tapi kali yg multi region yah..
(03:41:15 PM) mht: belom nyoba dengan dvd bajakan :P
(03:41:26 PM) imtheface: zahris: vlc perlu nambah dependency lagi
(03:41:27 PM) mht: totem gstreamer
(03:41:45 PM) \*\*\*Belutz back
(03:41:55 PM) imtheface: libdvdcss pasang?
(03:42:02 PM) mht: gak
(03:42:18 PM) mht: muter dvd bikinan teman yg isinya rekaman sendiri
(03:42:29 PM) mht: emang yg dvd film gak bisa ya?
(03:43:03 PM) mdamt: Iya sekarang bikin paket2 kosong dulu.
(03:43:03 PM) Belutz: ngga bisa tanpa libdvdcss
(03:43:10 PM) mdamt: Tujuannya supaya bisa dimasukkan ke seed.
(03:43:12 PM) takdir: dari paket khas blankon di atas, yang mana yang akan saya
'coba' buat paket debiannya ? :)
(03:43:31 PM) mht: takdir: bisa ambil salah satu
(03:43:41 PM) mht: tapi nanti jadi pengelola paket tsb ;)
(03:43:52 PM) mht: sekalian
(03:43:55 PM) takdir: gak dibagi-bagi ?, nanti dobel
(03:44:05 PM) takdir: :D
(03:44:06 PM) mht: yg mau ambil dulu
(03:44:17 PM) mht: kalo gak ada yg mau baru saya paksa :P
(03:44:45 PM) mdamt: Didaftar di wiki aja dulu kali paket2nya ya?
(03:44:46 PM) Belutz: AinulHakim, kenapa 3gp di blacklist ?
(03:44:46 PM) AinulHakim: paket gyache perlu ngga?
(03:44:50 PM) \*\*\*zahris menyerahkan keboss saja
(03:45:02 PM) \*\*\*imtheface ambil example content deh
(03:45:04 PM) AinulHakim: 3gp banyak dipake maksiat -nya
(03:45:29 PM) \*\*\*AinulHakim klo bersih-2 file di warnet, semua 3gp pasti porn
deh...
(03:45:40 PM) Belutz: AinulHakim, kalau gitu .mpg, .avi juga di blacklist donk?
(03:45:48 PM) imtheface: itu mah orang yg makenya aja gak bener
(03:45:51 PM) zahris: kalau gitu FLV juga..
(03:45:52 PM) zahris: :
(03:45:54 PM) zahris: :P
(03:45:57 PM) mht: mdamt: utk sementara ambil dari paket asli blankon
(03:46:00 PM) AinulHakim: hehehe
(03:46:03 PM) AinulHakim: ya monggo
(03:46:07 PM) AinulHakim: ane kan cuman usul
(03:46:21 PM) AinulHakim: cuman klo mpg dan avi emang kadang ada yg berisi
iptek
(03:46:23 PM) Belutz: AinulHakim, jangan salahkan codec/format nya
(03:46:25 PM) mdamt: Daftarnya ada dimana?
(03:46:42 PM) mht: tadi dah saya copy-paste disini pak
(03:46:45 PM) mdamt: Betul: Salahkan Nokia :-P
(03:47:12 PM) mht: jadi siapa ambil apa nih?
(03:47:13 PM) AinulHakim: hehehe
(03:47:15 PM) \*\*\*imtheface injek2 nokia
(03:47:19 PM) mdamt: 6 paket ya?
(03:47:26 PM) \*\*\*imtheface example content
(03:47:32 PM) mht: yup
(03:47:41 PM) zahris: mdamt kick imtheface :P
(03:48:02 PM) \*\*\*Belutz ambil blankon-docs deh, mohon bimbingannya
(03:48:11 PM) \*\*\*takdir usplash-theme-blankon
(03:48:34 PM) Linux_User_: aku kebagian yg mana om. aku ngalah aja deh anggota
baru :D
(03:48:48 PM) mht: Linux_user: inisiatif ;)
(03:48:50 PM) mdamt: Ok, brarti paket khas blankon dulu ya?
(03:48:55 PM) imtheface: Linux_User_: self service aja
(03:48:58 PM) mht: ambil salah satu atau dua
(03:49:02 PM) imtheface: klo gak ntar kebagian yg susah
(03:49:02 PM) mdamt: Paket tambahan belom dibahas kan?
(03:49:04 PM) imtheface: hehehehehe
(03:49:19 PM) mht: belom
(03:49:32 PM) mdamt: Ok.
(03:49:33 PM) mdamt: Sip.
(03:49:37 PM) \*\*\*imtheface siap handle bagian multimedia deh
(03:49:40 PM) imtheface: :D
(03:49:41 PM) mht: lagian belom ada ide paket tambahan yg khas blankon
(03:49:45 PM) mdamt: Kalau sudah dibagi2 kita pergi ke agenda 2.
(03:50:03 PM) mht: masih ada 3 lagi
(03:50:06 PM) mht: siapa lagi?
(03:50:10 PM) mht: AinulHakim?
(03:50:15 PM) mht: Linux_User?
(03:50:15 PM) Linux_User_: saya blum om :D
(03:50:19 PM) Linux_User_: yup
(03:50:22 PM) imtheface: mht: paket tambahan kan paket yg defaultnya gak ada di
cd ubuntu
(03:50:27 PM) AinulHakim: monggo
(03:50:28 PM) imtheface: tapi ada di repo ubuntu
(03:50:51 PM) mht: Linux_user ambil blankon-artwork ya..
(03:50:54 PM) AinulHakim: klo ngga ada di repo ubuntu gimana ?
(03:50:57 PM) imtheface: salah satunya yah itu multimedia support by default
(03:51:06 PM) mdamt: mht: Ada di bayangan saya, misale paket yg isinya
konfigurasi ppp untuk dial ke beragam ISP di Indon.
(03:51:10 PM) mht: AinulHakim ambil blankon-sounds..
(03:51:11 PM) imtheface: AinulHakim: paketin sendiri
(03:51:24 PM) Linux_User_: ok om,dicoba.. mohon bimbingannya ya om :D
(03:51:28 PM) imtheface: mdamt: si JaheWangi tuh siap
(03:51:29 PM) mht: mdamt: itu di gnome-ppp ya?
(03:51:36 PM) AinulHakim: weks
(03:51:40 PM) imtheface: JaheWangi: idup kaga?
(03:51:41 PM) AinulHakim: jangan sound
(03:51:53 PM) mdamt: Isinya konfigurasi di /etc/ppp/peers
(03:52:08 PM) zahris: ini paket "kosong" dulu kan?
(03:52:14 PM) mdamt: Ya kosong.
(03:52:20 PM) mht: mdamt: bagian dari paket apa?
(03:52:28 PM) imtheface: mdamt: klo default repo itu di ambil inputnya dari
mana yah?
(03:52:30 PM) \*\*\*JaheWangi hadir imtheface
(03:52:35 PM) mdamt: mht: Misale blankon-isp-indonesia.deb
(03:52:46 PM) mht: saya ambil ubiquity-blankon-artwork
(03:52:46 PM) mdamt: imtheface: Maksute?
(03:52:50 PM) imtheface: mht: si JaheWangi tuh mau masuk tim pemaket juga
(03:53:16 PM) mdamt: "diambil input"?
(03:53:23 PM) imtheface: mdamt: jadi pas install nanti isi sources.list nya
isinya udah mirror blankon
(03:53:31 PM) mht: ya udah dia ambil blankon-isp-indonesia ;)
(03:53:32 PM) mdamt: O itu.
(03:53:32 PM) imtheface: itu ngubah darimana?
(03:54:05 PM) mdamt: Bikin aja paket baru: blankon-repositori
(03:54:07 PM) imtheface: JaheWangi: katanya mau bantu2 tim pemaket
(03:54:11 PM) \*\*\*zahris ambil sisa saja
(03:54:20 PM) imtheface: jangan diem mulu donk :-D
(03:54:23 PM) AinulHakim: sisanya apa aja siih yg belum
(03:54:24 PM) mdamt: Saya blankon-repositori deh :-)
(03:54:32 PM) mdamt: Ayo dimasukkin ke wiki :-)
(03:54:40 PM) mht: Ainul jadi ambil yg sound?
(03:54:43 PM) JaheWangi: imtheface : ketinggalan banyak soalnya masih adaptasi
:D
(03:54:53 PM) AinulHakim: mundur dr sound
(03:55:05 PM) mht: tinggal itu..
(03:55:06 PM) imtheface: AinulHakim: mau tukeran sama saya?
(03:55:10 PM) mht: zahris aja yg ambil?
(03:55:17 PM) zahris: oke
(03:55:23 PM) AinulHakim: imtheface: apa ?
(03:55:25 PM) zahris: tariik maang
(03:55:29 PM) zahris: :D
(03:55:34 PM) mht: yup..
(03:55:39 PM) imtheface: example-content
(03:55:43 PM) mht: mdamt langsung aja mulai..
(03:55:49 PM) AinulHakim: ttg apa itu ?
(03:55:51 PM) mht: Ainul ambil 3gp saja :P
(03:55:56 PM) AinulHakim: moooh
(03:56:07 PM) AinulHakim: 3gp  :  moooh
(03:56:12 PM) AinulHakim: :)
(03:56:12 PM) imtheface: Inul mah penyanyi dangdut bukan?
(03:56:15 PM) imtheface: :P
(03:56:34 PM) imtheface: example-content itu ntar isinya sample2 3gp
(03:56:36 PM) imtheface: hehhehehe
(03:56:40 PM) AinulHakim: wedew
(03:56:51 PM) mht: mdamt: bisa dimulai?
(03:57:05 PM) AinulHakim: :(
(03:58:18 PM) imtheface: *dor*
(03:58:19 PM) mdamt: http://wiki.ubuntu-id.org/BlankOn/Pemaket/Komponen/
BlankOnKhas
(03:58:19 PM) mdamt: Silakan diisi.
(03:58:22 PM) mdamt: Sambil ngisi silakan ke http://wiki.ubuntu-id.org/mdamt/
MembuatPaketDebian
(03:58:54 PM) mdamt: Sudah dibuka?
(03:59:02 PM) AinulHakim: sudah
(03:59:27 PM) mdamt: Sekarang siapkan direktori kosong sesuai nama paket Anda.
(03:59:40 PM) mdamt: Kalo saya paket blankon-repositori, sesuaikan dgn paket
masing2.
(03:59:52 PM) mdamt: cd /tempat/Anda/bekerja
(03:59:56 PM) mdamt: mkdir blankon-repositori
(04:00:02 PM) mdamt: cd blankon-repositori
(04:00:06 PM) mdamt: mkdir debian
(04:00:25 PM) mht: lanjut..
(04:00:47 PM) zahris: sudah saya isi
(04:00:56 PM) mdamt: touch debian/{control,rules}
(04:01:05 PM) mdamt: echo 4 > debian/compat
(04:01:12 PM) mdamt: chmod +x debian/rules
(04:01:47 PM) mht: (sedanf copy paste)
(04:01:55 PM) mdamt: echo "#!/usr/bin/make -f" > debian/rules
(04:02:02 PM) mdamt: echo "" >> debian/rules
(04:02:10 PM) mdamt: echo "include /usr/share/cdbs/1/rules/debhelper.mk" >>
debian/rules
(04:02:22 PM) mdamt: Sunting debian/control.
(04:02:23 PM) AinulHakim: ok me jadi ambil blankon-sounds
(04:02:38 PM) mht: /usr/bin/make: event not found, blm install apa ya?
(04:02:53 PM) mht: Ainul: dah diambil zahris
(04:03:05 PM) AinulHakim: ooo
(04:03:09 PM) AinulHakim: smartikon@smartikon:~/BlankOn/blankon-sounds$ echo
"#!/usr/bin/make -f" > debian/rules
(04:03:09 PM) AinulHakim: bash: !/usr/bin/make: event not found
(04:03:20 PM) AinulHakim: yaa udah nanti....
(04:03:38 PM) AinulHakim: lanjut...
(04:03:52 PM) imtheface: pake vi debian/rules aja
(04:04:00 PM) Linux_User_: problem saya sama dengan mht nih :D
(04:04:05 PM) imtheface: paste perintahnya disana
(04:04:32 PM) mht: wah vi gak familiar ;)
(04:04:32 PM) mdamt: debian/rules diisi dgn http://pastebin.ca/667735
(04:04:51 PM) mht: vi di ubuntu beda dg yg di fedora
(04:05:03 PM) imtheface: mht: itu vi tiny
(04:05:11 PM) Linux_User_: ganti pake vim
(04:05:14 PM) imtheface: pasang dulu vim yg benerannya
(04:05:42 PM) mht: o.. pantes..
(04:05:52 PM) mdamt: Ya disunting aja deh debian/rules
(04:06:09 PM) imtheface: mdamt: http://pastebin.ca/667735 --> control bukan?
(04:06:18 PM) mdamt: Isinya http://pastebin.ca/667738
(04:06:19 PM) \*\*\*takdir juga event not found
(04:06:24 PM) mdamt: imtheface: O iya maap,
(04:06:32 PM) mdamt: http://pastebin.ca/667738 itu debian/rules
(04:06:40 PM) mdamt: http://pastebin.ca/667735 itu debian/control
(04:06:43 PM) imtheface: takdir: pake teks editor aja editnya
(04:07:14 PM) mdamt: Lanjut.
(04:07:28 PM) mdamt: touch debian/blankon-repositori.install '<'- sesuaikan dgn nama paket
(04:07:37 PM) mdamt: dch --create
(04:07:49 PM) mdamt: Isi dgn paketnya masing.
(04:07:51 PM) mht: bentar mdamt..
(04:07:59 PM) mdamt: Gunakan versi 0.0.1-0blankon1.
(04:08:04 PM) mdamt: mht: Ya,
(04:08:07 PM) mht: yg control di edit dan diisi dengan yg 667738 kan?
(04:08:28 PM) mdamt: 738 itu rules
(04:08:31 PM) mdamt: 735 itu control
(04:08:33 PM) AinulHakim: mht: trus ane dapet paket apa neeh jadinya
(04:09:01 PM) mht: o iya..
(04:09:12 PM) mht: Ainul: nanti lagi..
(04:09:19 PM) AinulHakim: mht:  ok deh
(04:09:25 PM) mdamt: 5 menit :-P
(04:09:26 PM) AinulHakim: lanjut
(04:09:33 PM) mdamt: Kelasnya lari2 mulu ya :-)
(04:09:35 PM) \*\*\*zahris ikutin dulu
(04:09:45 PM) AinulHakim: maaf :)
(04:09:52 PM) \*\*\*zahris rada ndak isa ngikutin
(04:09:58 PM) mdamt: Kayaknya saya harus ke Jakarta...
(04:10:04 PM) mdamt: Atau kalian ke Helsinki semua :-)
(04:10:33 PM) imtheface: asik diongkosing ama mdamt ke helsinki
(04:10:34 PM) mdamt: zahris: Yg penting di ketik aja di konsol :-)
(04:10:39 PM) imtheface: :)
(04:10:41 PM) zahris: yup
(04:10:45 PM) mdamt: Bagaimana sudah sampai dch?
(04:10:52 PM) mdamt: Kalau sudah sampai situ...
(04:11:04 PM) mdamt: bzr init --format=dirstate-tags
(04:11:07 PM) mdamt: bzr add *
(04:11:23 PM) mdamt: bzr commit -m "Paket <nama paket> mulai dibuat"
(04:11:49 PM) mdamt: bzr push sftp://<akun>@blabla/~blankon-pemaket/blankon/
nama-paket
(04:11:54 PM) mdamt: Beres.
(04:11:55 PM) mdamt: :-)
(04:11:56 PM) Linux_User_: nama paket pake versi atau nama paket aja?
(04:11:58 PM) mdamt: \ö/
(04:12:04 PM) mdamt: Nama saja.
(04:12:05 PM) zahris: saya agak ketinggalan maaf..
(04:12:31 PM) mdamt: Tapi sebaiknya setelah commit jgn dipush dulu sebelum
dijajalin.
(04:12:36 PM) mdamt: Cara jajalnya:
(04:12:43 PM) mdamt: dpkg-buildpackage -rfakeroot
(04:13:02 PM) mdamt: Kalau berhasil di direktori atasnya ada berkas nama-
paket_nomor-versi.blabla.deb.
(04:13:12 PM) mdamt: Sepertinya saya harus pergi.
(04:13:23 PM) mdamt: Maaf kalau kelasnya buru2 lagi. Sepertinya jamnya harus
diganti :-)
(04:13:35 PM) Linux_User_: mdamt: saya ada pesan dpkg-checkbuilddeps: error:
control file must have at least one binary package part itu kenapa
(04:13:37 PM) mdamt: Wassalam. Terima kasih atas kehadiran dan sumbangan Anda
thd proyek BlankOn.
(04:14:16 PM) imtheface: okok
(04:14:19 PM) imtheface: thx u
(04:14:29 PM) imtheface: jadi kapan lagi pertemuan berikutnya?
(04:14:33 PM) mht: yah.. keburu di push ;)
(04:14:45 PM) mht: ok mdamt, thanks a lots..
(04:15:24 PM) zahris: wew yg compatt isinya yg mana?
(04:15:43 PM) zahris: :P
(04:16:54 PM) \*\*\*zahris bingung compat ndak usah diisi ????
(04:18:01 PM) takdir: untuk mengedit dengan dch bagaimana ya ?
(04:18:11 PM) imtheface: echo 4 > debian/compat
(04:18:18 PM) Belutz: secret key not found :p
(04:18:18 PM) Belutz: padahal ada >_<
(04:18:44 PM) zahris: takdir: "dch -i" CMIIW
(04:19:35 PM) imtheface: Belutz: elo gpg key nya ada komentarnya yah?
(04:20:04 PM) Belutz: imtheface, iyah
(04:20:23 PM) imtheface: yg di changelog gak ada kan?
(04:20:26 PM) imtheface: dah itu harus sama
(04:20:40 PM) Belutz: imtheface, tapi pakte nya kebuat sih
(04:20:52 PM) imtheface: iyah kebuat tapi gak ke sign
(04:20:53 PM) Belutz: imtheface, di changelog ngga ada apa?
(04:20:57 PM) imtheface: gak apa2 sih
(04:21:03 PM) Belutz: s/pakte/palet
(04:21:12 PM) Belutz: s/palet/paket
(04:21:18 PM) imtheface: yg dsc nya?
(04:21:37 PM) imtheface: itu biasanya di sign
(04:22:33 PM) Belutz: imtheface, ic ic, nanti akan timbul masalah ngga?
(04:23:14 PM) Belutz: jadi kalo bikin gpg key ngga boleh pake comment?
(04:23:57 PM) Belutz: atau di changelog nya di tambahin commentnya? :p
(04:25:20 PM) takdir: dpkg-source: error: architecture all only allowed on its
own (list for package usplash-theme-blankon is `all')
(04:25:45 PM) Linux_User_: dpkg-checkbuilddeps: error: control file must have
at least one binary package part
(04:25:53 PM) Belutz: takdir, iya kalau usplash pake all aja
(04:26:13 PM) imtheface: Linux_User_: coba paste isi debian/control nya?
(04:26:50 PM) Linux_User_: http://pastebin.ca/667735 cuma itu doang ada yang
kurang ya :D
(04:26:54 PM) imtheface: http://today.skyisgrey.org/src/blankon-contoh/ --
> hore dah jadi
(04:27:50 PM) imtheface: Linux_User_: isinya sama dengan yg ada di pastebin?
(04:27:58 PM) imtheface: bisa liat punya situ?
(04:28:14 PM) Linux_User_: imtheface: maksundya??
(04:28:33 PM) imtheface: itu debian/control loe coba paste ke sini
(04:28:58 PM) Linux_User_: iya cuma itu aja om
(04:29:09 PM) Linux_User_: harusnya isinya apa aja
(04:29:11 PM) AinulHakim: ok gimana neh masalah paket
(04:29:24 PM) Belutz: ntar coba pake comment ah di changelog nya
(04:29:42 PM) imtheface: belum mending bikin id gpg baru
(04:29:55 PM) imtheface: gak standar changelog ada komentarna
(04:29:59 PM) imtheface: :P
(04:30:14 PM) Belutz: imtheface, bikin baru?
(04:30:14 PM) Belutz: hmm
(04:30:16 PM) zahris: masih mengisi rules.. takut salah isi kayak dulu
(04:30:19 PM) imtheface: gw juga dulu ngalamin gitu
(04:30:20 PM) zahris: :P
(04:30:23 PM) Linux_User_: imtheface: isi debian/control om kyk gmn?
(04:30:24 PM) Belutz: hahaha
(04:30:33 PM) Belutz: iya deh ntar gw bikin baru buat yang @ ubuntu.com
(04:30:42 PM) Belutz: atau gw pake yang @belutz.net yah
(04:31:15 PM) mht: Linux_user coba brose ke http://pastebin.ca/667735
(04:32:17 PM) zahris: build-depens saya ndak usah diisi yah?
(04:33:12 PM) Linux_User_: mht: udah mas trus ap yg hrs dilakukan :D
(04:33:36 PM) mht: copy paste yg ada di situ...
(04:33:52 PM) mht: gua juga baru sadar :P
(04:33:56 PM) Linux_User_: mht: ke debian/control?
(04:34:12 PM) mht: ama ke debian/rules
(04:34:17 PM) mht: yg rules yg http://pastebin.ca/667738
(04:34:42 PM) imtheface: http://today.skyisgrey.org/src/blankon-contoh/debian/
(04:35:41 PM) zahris: saya bingung isinya samain aja dulu??
(04:36:00 PM) imtheface: yah betuls
(04:36:27 PM) RameTux left the room (quit: No route to host).
(04:36:54 PM) zahris: oke deh... tapi nanti juga isa diedit lagi kan?
(04:37:13 PM) imtheface: iyah
(04:37:18 PM) imtheface: santai aja
(04:37:23 PM) imtheface: jangan takut salah
(04:37:26 PM) imtheface: :)
(04:38:53 PM) mht: imtheface: gua debhelper.mk blm ada, apa yg blm diinstall
ya?
(04:39:04 PM) mht: perasaan dah install semua yg diperlukan ;)
(04:39:08 PM) takdir: ok .. jadi juga file deb nya :)
(04:39:09 PM) imtheface: sudo apt-get install cdbs
(04:39:27 PM) imtheface: sudo apt-get install debhelper ?
(04:40:26 PM) imtheface: takdir: makan2! :D
(04:40:27 PM) mht: yak, ternyata blm pada diinstall
(04:40:38 PM) mht: gua nginstall dimana waktu itu ya? ;)
(04:41:02 PM) mht: O.. gua nginstall di chroot
(04:41:12 PM) mht: skr main di feisty ;)
(04:41:20 PM) mht: pantes..
(04:41:22 PM) imtheface: sudo apt-get install dh-make build-essential
devscripts debhelper dh-make fakeroot lintian linda
(04:41:47 PM) imtheface: nah kurang lebih itu paket2 yg dibutuhkan tuk devel
(04:42:17 PM) takdir: intheface: traktir ya, ikan bakar saja :D
(04:42:43 PM) imtheface: sudo apt-get install cdbs --> satu lagi kelupaan
(04:42:55 PM) AinulHakim: apa paket khas itu harus ada di repo ubuntu ?
(04:43:14 PM) imtheface: paket khas itu paket yg tidak ada di repo ubuntu
(04:43:41 PM) Belutz: udah selesai nih meetingnya ?
(04:44:06 PM) mht: meeting dah selesai...
(04:44:20 PM) AinulHakim: untuk blankon IM nya tetap pidgin yaa ? ngga pengen
ada tambahan lain ? misal gyach-e (pengganti YM yg bisa webcam)
(04:44:22 PM) mht: skr yg mau coba2 sambil ngopi ;)
(04:44:29 PM) \*\*\*mdamt telah kembali :-)
(04:44:34 PM) imtheface: kapan lagi meeting?
(04:44:45 PM) AinulHakim: hehehe
(04:44:48 PM) zahris: isi change log-nya gini bisa?
(04:44:49 PM) mdamt: imtheface: 5 menit lagi?
(04:44:49 PM) zahris: blankon-sound (0ubuntu1) blankon; urgency=low
(04:44:49 PM) zahris:   * Dummy repository.
(04:44:49 PM) zahris:  -- zahris <noorzein@google.com>  Thu, 23 Aug 2007 09:42:
57 +0000
(04:44:50 PM) totalnewbie left the room (quit: Read error: 104 (Connection
reset by peer)).
(04:44:51 PM) Belutz: mdamt, wb pak
(04:44:54 PM) imtheface: mht: tuh gimana gyach-e mau dimasukin gak?
(04:45:08 PM) mdamt: Belutz: Kiitos
(04:45:21 PM) mdamt: zahris: 0.0.1-0ubuntu1.
(04:45:35 PM) imtheface: zahris: klo paket khas versinya pake TblankonY
(04:45:36 PM) Belutz: zahris, blankon-sound (0.0.1-0blankon1) konde
(04:45:51 PM) mht: gyach-e baru denger, dah mateng gak? ;)
(04:45:52 PM) zahris: o iya konde sori lupa
(04:46:04 PM) AinulHakim: me dah pake lama di warnet :)
(04:46:13 PM) AinulHakim: dan dah buat versi deb nya
(04:46:14 PM) milisdad: kalo saya masukin kedalam repo saja
(04:46:31 PM) mht: Free software? versi brp terakhir?
(04:46:32 PM) Belutz: bukannya bagusan gyachoo ?
(04:46:34 PM) milisdad: namun jika sudah stabil gak masalah di sertakan
(04:46:39 PM) imtheface: dependency nya ada yg butuh gtk1.2
(04:46:57 PM) AinulHakim: imtheface: cara ceknya gimana bos
(04:47:08 PM) milisdad: gyachoo apakah msh menggunakan gtk1.2?
(04:47:16 PM) mht: hm.. kita mau ngilangin gtk1.2 tuh..
(04:47:28 PM) AinulHakim: gyachoo modif dari gyach-e
(04:47:42 PM) mht: pidgin sebetulnya kegedean juga ;)
(04:47:43 PM) imtheface: sudo apt-cache show nama_paket?
(04:47:49 PM) Belutz: lebih baik kalau default tetap pidgin saja
(04:47:55 PM) mht: tapi itu yg paling stabil yg ada saat ini menurut saya
(04:48:05 PM) imtheface: AinulHakim: coba diliat dependencynya apa aja?
(04:48:32 PM) mht: untuk sementara yg duplicat functionality tdk disertakan
dulu
(04:48:50 PM) \*\*\*imtheface takut salah
(04:49:01 PM) AinulHakim: boleh diusulin kalo masuk repo ngga
(04:49:04 PM) imtheface: paling klo gak taro di repo aja kali yah nanti
(04:49:09 PM) AinulHakim: soalnya itu banyak dibutuhkan warnet :D
(04:49:19 PM) takdir: mht, setelah dibuat langsung di push ya ?
(04:49:21 PM) imtheface: klo ada yg mau mengelolanya
(04:49:26 PM) imtheface: heheheh
(04:49:50 PM) mht: btw, yg gak perlu dirubah perlu masuk repo juga?
(04:49:50 PM) imtheface: kapan kumpul lagi tim pemaket?
(04:49:54 PM) \*\*\*takdir usul CCL untuk billing, nanti dicoba buat .deb nya juga
(04:50:22 PM) mht: takdir: iya
(04:50:36 PM) mht: mdamt: setelah di-push didaftarin ya? ;)
(04:51:00 PM) \*\*\*imtheface nge-push nya nanti aja ah
(04:51:06 PM) imtheface: mau dibenerin dulu
(04:51:11 PM) imtheface: :)
(04:52:23 PM) takdir: kalo gitu tunggu mdamt dulu ... review hasilnya semua

KategoriPemaket KategoriLog
Last modified on 06/16/2008 11:17:13 AM

