# Rapat BlankOn Dev Uluwatu (03-05-2017)
Sumber: http://irclog.blankon.in/blankon/20170503/

## ========= Rapat dibuka ===========

20:15 *** irgsh has joined #blankon

20:15 *** ChanServ sets mode: +o irgsh

20:16 tuanpembual: siap pak.

20:16 arisisme1: terima kasih pak rafi_

20:16 tuanpembual: dari saya cukup komentarnya.

20:16 arisisme1: ada lagi pak okip dan pak tuanpembual

20:16 okip: arisisme1: gak ada pak

20:16 tuanpembual: lanjut ya..

20:16 tuanpembual: lanjut tim riset

20:16 arisisme1: mohon koreksi dan masukannya jangan sungkan2 ya pak bapak

20:16 tuanpembual: okip,

20:17 *** yht has joined #blankon

20:17 okip: done : irgsh minus dokumentasi sip lengkap depan belakang

20:17 okip: doing : rekontruksi lumbung tambora

20:18 okip: plan : -

20:18 okip: problems : target bulanan bergeser karena insiden lumbung

20:18 okip: Saya usul tim lumbung dirampingkan. Saya dan 1 orang infra yang kapabel di investigasi.

20:19 okip: SDM-nya bisa dialihkan untuk uluwatu di ananda. irgsh sudah siap dan tinggal dipelajari lebih lanjut oleh tim pemaket. storage juga sudah siap.

20:19 darianrizaludin: saya usul pak yusrideb sebagai tim investigasi di alynne

20:20 okip: Soalnya, melihat oper-operan bola beberapa terakhir ini, kurang gercep.

20:20 tuanpembual: iya kurang pak.

20:20 okip: tapi tetep membutuhkan bantuan penuh tim jk

20:20 okip: itu saja usulan dari saya, mohon dipertimbangkan.

20:20 tuanpembual: pak okip, bisa tambahkan oret2 saya tadi pagi/kemaren malam, soal plan infra dan riset

20:21 okip: *glek

20:21 okip: yang mana ya pak

20:21 tuanpembual: yg ada nomornya itu

20:21 tuanpembual: 1-8 po ya..

20:21 yusrideb: saya siap tunggu perintah

20:22 tuanpembual: riset lanjut nulis aja pak.

20:22 okip: Ok, ketemu, lagi tak susun di sebelah.

20:22 tuanpembual: sementara itu dulu pak

20:22 *** antosamalona_ has quit IRC

20:22 tuanpembual: tim riset brapa orang pak skrang..

20:22 okip: tuanpembual: 3 orang aman (termasuk saya)

20:22 arisisme1: Soal lambung apakah bisa diskusi disini pak? mau tanya2 yang berhubungan dengan Humas

20:23 tuanpembual: lumbung pak

20:23 okip: wait, tak ketik di sini poin2 tadi.

20:23 tuanpembual: boleh, silahkn

20:23 * tuanpembual mungkin efek laper

20:23 okip: catatan dari tuanpembual tentang garis besar rencana ke depan :

20:23 okip: 1. tambora-base aman

20:23 *** antosamalona_ has joined #blankon

20:23 okip: 2. impor paket khas

20:23 okip: 3. pengumuman lumbung tambora beres

20:23 *** reaamina has joined #blankon

20:23 okip: 4. pengumuman repo legacy (tambora ke bawah)

20:24 okip: 5. stop tangani tambora

20:24 okip: 6. repo uluwatu masuk arsip-dev

20:24 okip: 7. irgsh bekerja penuh (sampai siklus pabrik cd)

20:24 okip: 8. cetak cd

20:24 okip: kalau dilihat dari usulan saya tadi, no 6 udah bisa digarap sekarang.

20:24 tuanpembual: pak arisisme1 ada pertanyaan?

20:25 *** atiampela has joined #blankon

20:25 arisisme1: nunggu pak okip selesai

20:25 *** rania has quit IRC

20:25 okip: sudah selesai

20:25 arisisme1: oke

20:25 tuanpembual: no. 6 dan 8 dieksekusi oleh infra

20:25 *** atiampela has quit IRC

20:25 tuanpembual: 7. ole pemaket dan jk

20:26 arisisme1: nah sudah ada rencana

20:26 arisisme1: mau tanya nomor 1 dan 2 pak

20:27 antosamalona_: siap

20:27 arisisme1: saat ini update2 yang dilakukan tim insiden kan di trello dan tele

20:28 arisisme1: nah satu-satunya yang belum bisa saya temui itu adalah estimasi dan progress yang dapat saya baca dengan mudah

20:28 tuanpembual: cuma ada yg didrive itu pak

20:28 arisisme1: beberapa kali saya mencoba memahami status progress dan mau di infokan ke milist sering gagal paham

20:29 arisisme1: yang di drive tidak ada due date atau estimasi nya pak

20:29 arisisme1: atau memang tidak ada estimasi CMIIW pak, hehehe

20:29 tuanpembual: blm ada eta pak

20:29 okip: saya belum bisa memberi estimasi lagi, begadang terus berhari2 ini sudah bikin mumet. masalah lumbung ini lebih rumit dari yang saya bayangkan, tapi saya yakin kita bisa rampungkan.

20:29 tuanpembual: masih raba2 semua

20:30 okip: saya sudah jawab di milis, seminggu.

20:30 tuanpembual: smpe jumat ya pak,

20:30 tuanpembual: 1 minggu

20:30 okip: Sekarang sudah lewat beberapa hari.

20:30 okip: Izinkan saya dan tim tetap bekerja terus tanpa wacana estimasi lagi.

20:31 okip: Tidak memberikan estimasi bukan berarti saya menganggap masalah ini enteng.

20:31 okip: Saya sendiri malu dan takut soal insiden ini.

20:31 okip: Itu saja

20:31 arisisme1: ini saya ndak ada maksud untuk kontrol teman2 yang mengerjakan insiden ya pak, tapi maksud saya ini mungkin seperti ini

20:31 arisisme1: misal seperti delay pesawat, humas lah yang bakal dikejar customer, dan harus bisa menenangkan customer.

20:32 arisisme1: estimasi menurut saya penting sebagai bagian cara "menenangkan" customer pak

20:32 arisisme1: tujuannya juga dengan kerja keras itu dan estimasi yang lewat agar ada langkah2 antisipasi lagi,

20:33 arisisme1: IMHO, dan sekali lagi saya bukan bermaksud kontrol teman2 pak.

20:33 *** atiampela has joined #blankon

20:34 arisisme1: bagaimana pak tuanpembual

20:34 arisisme1: ada wejangan?

20:34 okip: saya tidak bisa memberikan estimasi. Silakan pak tuanpembual tentukan tenggat agar saya kejar sesuai tenggat

20:34 okip: ada 50ribuan paket di lumbung.

20:35 tuanpembual: sama pak,

20:35 tuanpembual: kemaren ngobrol2 panjang sama pak piko, dan kita sama blm pnya solusi lain

20:35 tuanpembual: ini msih tmbal sulam pak,

20:35 arisisme1: boleh diskusi lagi kan pak?

20:36 tuanpembual: boleh

20:36 arisisme1: estimasi ini dibayangan saya seperti ini ya pak, mohon koreksi

20:37 *** samsul has quit IRC

20:37 arisisme1: insiden terjadi, saya ada solusi A, dan solusi A ini saya estimasikan 1 minggu harus ada hasil (baik gagal atau sukses) misal udah 1 minggu keluar hasil gagal, maka solusi B, sama diberi estimasi juga. kalau memang masih gagal, nyerah dan minta bantuan, misalkan lho ini pak.

20:37 arisisme1: CMIIW

20:38 arisisme1: bisa jadi apa yang saya bayangkan gak semudah itu, maapin. :D

20:39 tuanpembual: emm, nek dari saya, kita sudah selesai pak dengn rilis di milis kemaren

20:39 darianrizaludin: pak ini infra laporan dulu gimana , ada trouble mendadak di kantor

20:39 darianrizaludin: tuanpembual:

20:39 tuanpembual: karena saat ini kita tidak sdg ngerjain solusi apa2.

20:39 darianrizaludin: saya kudu cabut

20:39 tuanpembual: 2 min darianrizaludin

20:40 tuanpembual: ---suspend sebentar yak

20:40 tuanpembual: lanjut pak darian

20:40 arisisme1: lanjut pak darianrizaludin

20:40 darianrizaludin: oke

20:40 tuanpembual: *wah pdahal ini main actor malam ini

20:40 tuanpembual: malam kabur duluan

20:41 darianrizaludin: maaf pak , mendadak soalnya

20:41 darianrizaludin: done : upgrade processor alynne

20:41 darianrizaludin: doing : recovery tambora bersama tim riset , tim pemaket , tim jk.

20:41 darianrizaludin: plan : belum kepikiran

20:42 darianrizaludin: ralat : ini tadi pak yusrideb saya kira pak aftian

20:42 darianrizaludin: yang saya maksud pak aftian juga membantu di tim investigasi

20:42 darianrizaludin: begitu pak tuanpembual

20:42 darianrizaludin: bisa diskusi 10menit lagi

20:42 darianrizaludin: abis itu saya cabut

20:42 darianrizaludin: pak tuanpembual

20:43 tuanpembual: dari saya pak ben dan pak darian bagi tugas

20:43 tuanpembual: nyetak cd sama bikin arsip-deb

20:43 tuanpembual: nyetak cd sama bikin arsip-dev

20:43 tuanpembual: besok saya mau nyoba nyetak cd

20:44 tuanpembual: sesuain point 1-8 tadi pak.

20:44 tuanpembual: mana yg bisa dikerjain siapa

20:44 tuanpembual: itu aja.

20:44 tuanpembual: tetep kordinasi

20:45 tuanpembual: saya kemungkinan akan ke sby lagi, tilik alynne

20:45 tuanpembual: bln2 ini

20:45 darianrizaludin: iya pak saya usahakam koordinasi terus , ini pak juga sedang sibuk di kampus , coba nanti saya kontak lagi

20:45 tuanpembual: ada yg mau ikut?

20:45 tuanpembual: :D

20:45 tuanpembual: pak arisisme1 mintak duit,

20:45 tuanpembual: itu pak antosamalona_ kayane butuh diimpor

20:45 tuanpembual: :D

20:45 arisisme1: hahahaha

20:46 tuanpembual: cukup pak dari saya,

20:46 arisisme1: butuh berapa pak tuanpembual?

20:46 tuanpembual: pak okip ada tambahan

20:46 darianrizaludin: pak antosamalona_ ajakin ke sby juga pak tuanpembual

20:46 tuanpembual: butuh buat terbangnya pak antosamalona_ aja

20:46 tuanpembual: nah itu suruh ke sby

20:46 *** samsul has joined #blankon

20:46 okip: tidak ada.

20:46 arisisme1: oke dicarikan, kapan rencananya?

20:46 okip: Terima kasih.

20:46 antosamalona_: hahaha

20:47 tuanpembual: japri aja pak ntr

20:47 tuanpembual: saya ngeliat target dulu

20:47 arisisme1: oke pak

20:47 tuanpembual: kocar kacir ini 3 proyek

20:47 arisisme1: saya juga butuh bidikan

20:47 arisisme1: hahaha

20:47 arisisme1: lanjut pak

20:47 tuanpembual: infra sudah

20:47 tuanpembual: pak antosamalona_

20:47 darianrizaludin: sudah pak

20:47 tuanpembual: biar cepet

20:47 tuanpembual: soale udah wita nih

20:47 darianrizaludin: dari tim infra cukup pak tuanpembual

20:48 tuanpembual: oce2

20:48 antosamalona_: done: mencoba bangun paket dengan irgsh di ananda.

20:48 antosamalona_: doing: masih bantu2 tim infra, tim riset testing untuk tambora

20:49 *** faiq has quit IRC

20:49 antosamalona_: kadang2

20:49 antosamalona_: :D

20:49 tuanpembual: pak antosamalona_ punya tim brapa?

20:49 tuanpembual: sudah sampe manakah progres mereka?

20:50 tuanpembual: saya pgnnya 1-2 minggu ini mereka udh bisa belajar make irgsh ananda

20:50 tuanpembual: ini peer pemaket akan bnyak bgt

20:50 antosamalona_: tim pemaket baru 4 orang ber-5 dengan saya pak

20:50 antosamalona_: progress sudah bisa pemaketan pak.

20:51 tuanpembual: pemaket udah bisa mulai rebranding.

20:51 antosamalona_: siap

20:51 antosamalona_: tinggal penyegaran pak.

20:51 darianrizaludin: saya mohon izin cabut pak tuanpembual , mari pak bapak

20:51 tuanpembual: soal ini saya berharap banyak sama pak anto untuk aktif konsultasi ke pak MHY dan pak aftian

20:51 tuanpembual: oce pak darianrizaludin

20:51 antosamalona_: belum bisa mengukur, pak.

20:51 tuanpembual: soalnya pemaketan juga rumit, misalnya, mana duluan, rebranding atau paket khas. paket mana yang duluan. dst

20:52 *** darianrizaludin has quit IRC

20:52 antosamalona_: soalnya beberapa waktu belakangan minta waktunya mereka belum bisa fix.

20:52 tuanpembual: tulung dicari tau jawaban pertanyaan itu bareng2 tim

20:52 tuanpembual: trs buat catatan di blog

20:52 tuanpembual: ini bulannya pemaket dan jk mulai sprint

20:52 antosamalona_: saya usahakan minggu2 ini penyegaran pemaketan, pak

20:52 tuanpembual: oce

20:52 tuanpembual: tetep update di trello

20:52 tuanpembual: bikinin tiketnya mau ngapain minggu2 ini

20:53 antosamalona_: siap!

20:53 tuanpembual: ada komentar yg lain?

20:53 antosamalona_: 86

20:53 antosamalona_: dari saya cukup

20:53 antosamalona_: kalau ada dari teman2 tim pemaket yg mau nambahin silahkan

20:53 tuanpembual: nek cukup, lanjut ke jk dulu yak.

20:53 tuanpembual: silahkan pak Kiflie

20:53 antosamalona_: siap, lanjut

20:53 arisisme1: lanjut

20:54 tuanpembual: colek pak Kiflie

20:55 Kiflie: Tim JK

20:55 Kiflie: done: -

20:55 Kiflie: doing: uji coba repo tambora, koordinasi dengan tim riset

20:55 Kiflie: plan: -

20:57 tuanpembual: tim JK brapa orang pak yg nyaut?

20:58 tuanpembual: dibanyakin ujinya pak,

20:58 tuanpembual: siap2 benwit :D

20:58 Kiflie: saya juga baru belajar2 pak, mohon bimbingan pak bapak

20:58 Kiflie: tim JK ada 4 orang

20:58 tuanpembual: nganu aja sih pak, kadang kita luput, jadi tiap anggotanya diminta proaktif aja di grup

20:58 tuanpembual: tanya2

20:59 okip: eits

20:59 Kiflie: siap

20:59 okip: googling dulu baru tanya2

20:59 arisisme1: hahahaha pak okip

21:00 tuanpembual: ada tambahan lain?

21:00 arisisme1: mungkin kendala pak?

21:00 Kiflie: sementara cukup pak

21:01 Kiflie: saya bisa uji cobanya malam

21:02 tuanpembual: okeh2

21:02 tuanpembual: saling silang aja pak.

21:02 tuanpembual: gantian siapa yg bsa,

21:02 tuanpembual: kayak kerja shift

21:02 tuanpembual: semetara lanjut yak..

21:03 tuanpembual: ke tim kesenian.

21:03 tuanpembual: silahakan winardiaris

21:03 tuanpembual: reaamina,

21:03 tuanpembual: aku nitip tiket,

21:03 asgardian: kesenian belum banyak perkembangan dari rapat terakhir. maseh pada sibuk. mohon maaf.

21:04 tuanpembual: bikin komik tentang irgsh

21:04 asgardian: ini sedang diskusi internal. masalah pembagian pekerjaan

21:04 asgardian: bikin komik tentang irgsh

21:04 *** rafi_ has quit IRC

21:04 asgardian: otw buat oleh bliem

21:04 reaamina: On going pak, oleh pak liem

21:04 tuanpembual: bikinin tiketnya.

21:04 reaamina: Oh, ok

21:04 tuanpembual: status on going oleh

21:04 asgardian: saya sendiri saat ini lagi poles pabrikon + tebu

21:05 asgardian: @rania. bikin yang banyak.

21:05 reaamina: *-*

21:06 reaamina: Ada beberapa ikon yg mau saya update juga

21:06 asgardian: soal ikon kita bikin panduannya.

21:06 asgardian: ^ masukin trello

21:08 tuanpembual: ^ masukin trello

21:08 tuanpembual: ada lagi?

21:08 arisisme1: tanya pak kalau tidak ada lagi

21:08 tuanpembual: tanya yg mana pak?

21:08 tuanpembual: ini masih ada dokumentasi

21:09 *** okip_ has joined #blankon

21:09 *** WhizzWr has quit IRC

21:09 arisisme1: belakangan saja gak apa2 sekalian dokumentasi

21:09 tuanpembual: oce

21:09 tuanpembual: lanjut dokumentasi.

21:09 *** rafi_ has joined #blankon

21:09 okip_: putus koneksi T_T yang punya log lengkap rapat ini minta tolong tempelin dong. suwun.

21:09 tuanpembual: ada yg mewakili

21:09 tuanpembual: ?

21:10 tuanpembual: krik2

21:10 asgardian: okip http://tempel.blankon.in/4150891

21:10 *** WhizzWr has joined #blankon

21:11 arisisme1: okip http://tempel.blankon.in/4150905

21:12 tuanpembual: dokumentasi saya skip

21:12 tuanpembual: 20an orang tapi g ada yg nongol

21:12 tuanpembual: lanjut pak arisisme1 mau nanya apa?

21:13 arisisme1: baik pak

21:13 arisisme1: saya mau tanya, tadi tim kesenian mau bikin komik, ini bakal diterbitkan ke masyarakat ya pak?

21:13 tuanpembual: bukan pak

21:14 tuanpembual: bukan komik biasa

21:14 arisisme1: rencananya kemana pak kalau boleh tahu?

21:14 arisisme1: ouh boleh cerita

21:14 asgardian: kayanya hanya pengenala si irgsh itu pak

21:14 tuanpembual: tapi kayak menjelaskan sesuaitu misal irgsh dalam bahasa gambar boni

21:14 tuanpembual: diterbitkan = dishare via medsos

21:14 tuanpembual: blog dkk

21:14 arisisme1: nah apakah itu Humas juga ada peran pak?

21:15 tuanpembual: ada pak,

21:15 tuanpembual: humas yg nyebarin

21:15 tuanpembual: materi dari dokumentasi, dikerjain oleh kesenian, disebarkan oleh humas

21:15 arisisme1: humas nyebarin saja ya pak?

21:16 tuanpembual: ada tambahan pak?

21:16 tuanpembual: atau ide?

21:16 arisisme1: heem saat ini manut sih, cuman aku kepikiran sih pak

21:16 arisisme1: ada kepikiran

21:16 arisisme1: cuman apa mau dilanjut diskusi?

21:17 asgardian: lanjut pak aris

21:17 okip_: semacam infografis gitu yak? akur!

21:17 asgardian: saya membaca

21:18 *** reaamina has quit IRC

21:18 tuanpembual: iyes infografis

21:19 arisisme1: saya coba tata bahasanya dulu saja pak, skip

21:20 arisisme1: mending lanjut repo mengingat itu genting dan penting

21:20 tuanpembual: lanjut point 2 dulu pak

21:20 atiampela: noted

21:20 tuanpembual: komitmen tiap individu

21:21 tuanpembual: saya merasa 47 anggota yg nongol di grup cuma itu2 saja

21:21 tuanpembual: mungkin koordinator bisa japri, kenapa kq g keliatan

21:23 arisisme1: hemm

21:23 *** atiampela_ has joined #blankon

21:23 arisisme1: diskusi kah?

21:24 tuanpembual: boleh

21:25 arisisme1: boleh membuat aturan saja pak, misal rapat pengembang wajib hadir. Jika dalam waktu beberapa kali tidak hadir tanpa keterangan dan juga tugas2 tidak selesai tanpa konfirmasi, maka di berhentikan saja pak

21:25 arisisme1: atau mau ada peringatan?

21:26 okip_: kalau aturan lama, gak nongol / komunikasi / kontribusi 2 minggu, dilepas.

21:26 okip_: jadi tergantung koordinatornya juga, kalau koordinatornya diem ya wasalam

21:27 okip_: dulu saya pernah gak ngapa-ngapain 2 bulan, sampai disundul pak asgardian

21:27 arisisme1: boleh, harus disepakati saja mulai sekarang, koordinator misal saya juga boleh dipecat pak

21:28 tuanpembual: kalo dari saya g kerja gpp tapi lapor

21:28 okip_: aturan yang ada di wiki tim uluwatu sudah mencukupi buat saya.

21:28 arisisme1: lapor saya gak kerja gitu pak?

21:28 tuanpembual: karena ada bnyk alasan kenapa g kerja, misal lagi rame kerjaan

21:28 tuanpembual: tapi tidak meninggalkan peer

21:28 tuanpembual: *rame kerjaan = kerjaan resmi

21:29 arisisme1: ouh maksude tertunda itu pak, bukan mangkir kerja hahahaha,

21:29 tuanpembual: misal lagi g bisa konsen di blankon (beberapa hari), ya silakan delegasi ke siapa gitu

21:29 tuanpembual: kalo koordonator, kasih list kerjaan misal :)

21:30 tuanpembual: karena lapor tidak ada progres adalah progress

21:30 okip_: ini quote punya pak darian :))

21:30 tuanpembual: g pake ngilang

21:30 tuanpembual: :D

21:31 okip_: aturan 2 minggu itu perlu ditambahkan ke wiki tim ? arisisme1

21:31 arisisme1: perlu pak

21:31 tuanpembual: 21.40 rapat ditutup ya, lnjut bahas bebas

21:31 okip_: https://github.com/BlankOn/Uluwatu/blob/master/TEAM.md

21:31 arisisme1: dan kapan ngunci pengembang?

21:31 tuanpembual: ^ akhir bln mei pak

21:31 tuanpembual: ada di timeline

21:32 arisisme1: misal nih, deket2 rilis banyak gabung lantaran ada info pengembang dapat jatah liburan di uluwatu

21:32 tuanpembual: *eh bener piko?

21:32 arisisme1: *misalkan

21:32 okip_: irgsh di april boleh saya centang sebagai done?

21:32 tuanpembual: arisisme1, prinsip meritokrasi pak

21:32 atiampela_: eh, berarti masih bisa ya pak, kalo ada yg mau gabung jadi pengembang?

21:32 tuanpembual: ntr koordinator dan menejer yg mutusin, layak g dapat tiket piknik

21:33 asgardian: FYI. di kesenian saya memberlakukan kontirbutor lepas (misal ada orang yang mau masukin kertas dinding ini saya terima dengan syarat)

21:33 tuanpembual: ^ no problemo

21:33 tuanpembual: bisa pak atiampela

21:33 atiampela_: siap. saya barusan unpin infonya di twitter. :)) ta pasang lagi deh

21:34 tuanpembual: asgardian, karena konsen kita ini, ketika dikasih tugas, eh malah ngilang, menyebabkan tugas terbengkalai dan menghambat yg lain

21:34 arisisme1: gimana itu pak aris asgardian

21:34 *** Koplak has joined #blankon

21:34 tuanpembual: nek dari pak asgardian kan, ada yg setor tugas, trs pamit

21:34 tuanpembual: artinya kerjaannya udh kelar. tidak bikin pusing yg lain

21:35 arisisme1: yang setor tugas, apakah dalam rilis nanti namanya tetap tercatat?

21:35 Koplak: Malam

21:35 okip_: saya malah kepengen ada reward kalau yang kontrib bebas begitu.

21:35 okip_: Misal kemarin ada pak siapa lupa, kirim PR ke aku.boi

21:35 okip_: Cakep

21:36 okip_: kalau ada dana, pengen reward stiker boni atau github. Distok gitu.

21:37 arisisme1: noted pak okip

21:37 rafi_: sticker boni pak biar viral

21:38 *** showcheap has quit IRC

21:39 tuanpembual: akur dengan reward

21:39 tuanpembual: dan statsusnya kontributor di rilis

21:39 arisisme1: okip_:

21:39 arisisme1: itu kepikiran sekarang ya pak okip_ ? perlu dimasukan ke RAB?

21:39 *** arisisme1 has quit IRC

21:40 atiampela_: reward keren mungkin kaos bergambar boni. biar makin kesengsem :))

21:40 asgardian: soal sticker pak humas ada dana enggak . saya mau cetak lagi

21:40 tuanpembual: duit humas masih ada disaya, lebihan sayembara

21:41 tuanpembual: kalo yg patungan server, nombok okeh bgt

21:41 tuanpembual: :D

21:42 *** arisisme has joined #blankon

21:43 okip_: arisisme: kepikiran udah lama, cuma takut dipandang kurang penting atau gimana :D

21:43 okip_: arisisme: jika pada akur, saya masukin ke rab

21:43 arisisme: hahahaha, masukan RAB saja pak, reward gitu

21:43 arisisme: cuman pak tuanpembual dan para koordinator nanti yang menentukan KPI pengembang yang mendapat reward

21:44 tuanpembual: oce

21:44 asgardian: soal reward saya sih oke2 aja

21:44 tuanpembual: ============= rapat ditutup =============== 

## ============= rapat ditutup =============== 


