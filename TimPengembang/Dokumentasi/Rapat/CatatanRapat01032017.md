# Rapat BlankOn Dev Uluwatu (01-03-2017)

Sumber: http://irclog.blankon.in/blankon/20170301/
## ========= rapat 20170301 dimulai ===========


20:11 tuanpembual: ========= rapat 20170301 dimulai ===========

20:11 tuanpembual: selamat malam bapak2 semua

20:11 tuanpembual: gimna belajar trello nya?

20:11 tuanpembual: mumet?

20:11 antosamalona: Malam pak

20:11 benben159: selamat malam

20:11 tuanpembual: lancar gitnya?

20:11 benben159: trello so far so good lah

20:11 rafi_: malam pak

20:12 benben159: blm nyentuh git

20:12 tuanpembual: agenda malam ini cuma 2:

20:12 benben159: blm nyentuh github

20:12 tuanpembual: 1. laporan, done, doing (plan kita skip dulu)

20:12 tuanpembual: 2. Milestone

20:13 tuanpembual: sebelumnya terimakasih untuk semua yang hadir malam ini

20:13 tuanpembual: ada yg menawarkan diri jadi notulen?

20:13 * tuanpembual kita rapatnya cepet aja ya...

20:14 * tuanpembual ndak ada komentar saya lanjut.

20:14 antosamalona: Lanjut pak

20:14 * benben159 sebagai notulen

20:14 hahn: lanjut

20:15 trisfaizal: lanjutkan

20:15 tuanpembual: benben159, ntr cukup catet yg penting2 aja, g hrus semua log, kek minggu kemare keren

20:15 tuanpembual: kita mulai laporan aja ya tiap tim.

20:15 tuanpembual: 1. infra, done, doing

20:15 *** rafi__ has joined #blankon

20:15 tuanpembual: benben159,

20:15 * tuanpembual sodorin mic

20:16 *** asgardian has joined #blankon

20:16 benben159: yang sudah dilakukan adalah mengembalikan layanan yang sempat dimatikan

20:16 benben159: tempel dan w

20:16 *** rafi_ has quit IRC

20:16 benben159: lalu aku.boi dan layanan2 yang menggunakan aku.boi juga sudah dinyalakan kembali

20:16 benben159: thx to tuanpembual yg mau belikan hard disk baru utk waljinah hehe

20:17 benben159: kemudian update wordpress utk panduan.boi

20:17 benben159: update core, update plugins, update themes lancar semua kecuali 1 plugin openid

20:17 * tuanpembual toss kopi

20:17 benben159: yang sudah dibikin oleh yg senior tuan sokam

20:18 benben159: ternyata setelah upgrade error gak bisa login pake aku.boi

20:18 *** irfanpule1 has joined #blankon

20:18 benben159: dikembalikan menggunakan backup tarball yang ada langsung bisa lagi

20:18 *** irfanpule has left #blankon

20:18 benben159: mohon saran dari tuanpembual mengenai operasional perawatan layanan yang baik

20:18 benben159: maklum selama ini saya suka hidup dalam bahaya

20:18 tuanpembual: mantap pak.

20:18 benben159: ngoprek di production dan selalu dimarahin herpiko

20:18 *** soewarsono has quit IRC

20:19 tuanpembual: lanjung doing pak.

20:19 tuanpembual: ntr saya nambahin

20:19 benben159: untuk yg doing ini adalah irgsh-node

20:19 benben159: worker utk builder pemaketan

20:19 *** soewarsono has joined #blankon

20:20 benben159: masih nunggu dari tim riset

20:20 benben159: klo saya dimintai tolong sih gpp wong saya juga anak Python hehehehe

20:20 tuanpembual: hehehehe

20:20 tuanpembual: tambahan dari saya

20:21 tuanpembual: 1. domain blankon.id udh diamankan, sementara subdomainnya cuma data.bid

20:21 tuanpembual: 2. beli hardisk waljinah. laporan akan dikelola humas

20:21 tuanpembual: 3. masang. dan akhirnya tau bentuknya waljinah itu kek apa.

20:22 tuanpembual: 4. riset dan infra lagi nyari server cadangan buat mainan

20:22 tuanpembual: dah itu saja dari saya.

20:22 tuanpembual: lanjut yak?

20:22 * benben159 sudah dicatat

20:22 benben159: lanjut

20:23 tuanpembual: 2. riset

20:23 benben159: sisanya nanti tak japri tuanpembual saja

20:23 * tuanpembual timnya ada g nih? piko okip

20:23 * benben159 mengusahakan tebengan

20:23 benben159: herpiko dan sdmoko tdk hadir

20:23 benben159: mungkin sedang ngoprek ahahaha

20:23 tuanpembual: 3. pemaket

20:23 antosamalona: Siap pak

20:23 tuanpembual: antosamalona, silahkan curhat

20:24 antosamalona: Done: sudah menambahkan anggota baru. Tp, yg sy perhatikan aktif hanya 2 orang saja.

20:24 antosamalona: Doing: belum ada.

20:25 tuanpembual: pak antosamalona udh pernah baca panduan pemaketan?

20:25 antosamalona: Oh iya pak, bagaimana apakah bikin kelas pemaket lagi?

20:25 antosamalona: Sudah pak.

20:25 tuanpembual: sudah punya blog?

20:25 antosamalona: Sudah pak

20:25 tuanpembual: gmna kalo panduan pemaketan itu kamu tulis di blog,

20:25 tuanpembual: biar pake bahasa manusia

20:25 *** trisfaizal2 has joined #blankon

20:25 tuanpembual: buat 3-4 postingan (bersambung)

20:25 antosamalona: Bisa pak

20:26 tuanpembual: kalo sudah, ajuin kelas pemaketan setelah blognya tayang

20:26 antosamalona: Tapi, mesti pakai terminal :D

20:26 *** trisfaizal2 has joined #blankon

20:26 tuanpembual: umumin dimilis

20:26 tuanpembual: antosamalona, kan diblog pribadi

20:26 tuanpembual: jadi hajar saja

20:26 antosamalona: Oh iya pak :D sip

20:26 tuanpembual: itu aja yak,

20:26 tuanpembual: dtunggu tautan blognya

20:26 antosamalona: Jadi, nda perlu bikin kelas yah pak?

20:27 antosamalona: Sip, pak.

20:27 tuanpembual: kalo sudah, ajuin kelas pemaketan setelah blognya tayang ---- iki lo dibaca

20:27 hahn: kelas privat boleh pak :D

20:27 tuanpembual: :D

20:27 antosamalona: Hahaha... siap2

20:27 tuanpembual: bebas

20:27 *** trisfaizal has quit IRC

20:27 tuanpembual: lanjut ya.

20:27 antosamalona: Sip pak hahn

20:27 *** trisfaizal2 has quit IRC

20:28 * tuanpembual lagi bnyak riweh2 di kntor nyata

20:28 tuanpembual: 4. humas

20:28 benben159: eaa

20:28 *** trisfaizal has joined #blankon

20:28 tuanpembual: ada yg hadir dari humas?

20:28 rafi__: saya hadir pak

20:28 * tuanpembual pak ben, ntr tambahin yg hadir siapa aja ya..

20:28 tuanpembual: silahkan.

20:28 benben159: ok

20:30 tuanpembual: rafi__ udh ?

20:30 tuanpembual: *krik2..

20:30 rafi__: doing: 1. sedang bahas wbs, 2. sedang bahas halaman sponsor

20:30 rafi__: maaf pak lagi di ojek soalnya

20:30 benben159: wow

20:30 benben159: ini rafi__ sedang bonceng bapak ojek?

20:30 benben159: luar biasa

20:31 *** kasuari has joined #blankon

20:31 rafi__: iya pak lagi masuk komplek hehe

20:31 faiq: semoga selamat

20:31 faiq: sampai tujuan

20:31 tuanpembual: rafi__, halaman sponsor harusnya udh kelar(diketik oleh piko dan saya), yg belum halaman mitra.

20:32 tuanpembual: wbs, sya harusnya bantuin, tapi ini lg super riwil, coba ngobrol sama pak haris (japri) gmna caranya bisa paham, dapat contoh, bisa bikin

20:32 rafi__: oh iya maaf saya kira itu sama soalnya sama" di web static

20:33 tuanpembual: ada lagi pak?

20:33 * tuanpembual gogogogogo

20:33 rafi__: sudah pak

20:33 tuanpembual: 5. dokumentasi

20:33 tuanpembual: silahkan pak

20:34 faiq: ok

20:34 faiq: yang sudah dilakukan

20:34 faiq: Pembekalan Dasar bersama Pak Sokibi tentang gambaran umum tugas dan tanggung jawab Tim Dokumentasi

20:34 faiq: * Menindaklanjuti pendaftaran Pendekar. Jumlah pendaftar Baru: 12, Pengembang lama : 3 orang. Jadi, total 15 orang. Akan tetapi yang sudah gabung di Trello baru 9 orang. Yang sudah gabung di grub Telegram Tim Dokumentasi baru 11 orang.

20:34 faiq: * Pembuatan Chanel Web panduan.blankon.linux.or.id di Telegram

20:34 faiq: * Pembuatan bot Telegram untu Web panduan.blankon.linux.or.id =: kami limpahkan pada tim yang lebih ahli (riset dan infra)

20:35 faiq: Doing : * Pembuatan panduan/dokumentasi beberapa hal yang dilakukan setelah pasang BlankOn Tambora (tidak ada perkembangan)

20:35 faiq: doing : * Belajar Git, Github, Markdown, Trello

20:36 faiq: RENCANA : Ahad malam Senin Belajar bersama pak Sokibi dan pak Estu dan atau Pak Piko. Materi: pembuatan template buku panduan & Git + github untuk tim dokumentasi

20:36 faiq: RENCANA 2: * Membuat pembagian tugas dan gambaran tugas

20:36 faiq: pak trisfaizal mungkin ada tambahan

20:37 faiq: pak kuriyanto mungkin ada tambahan?

20:37 trisfaizal: cukup pak

20:37 faiq: dari saya cukup

20:38 tuanpembual: terimakasih pak.

20:38 tuanpembual: untuk kelas bisa dijadwalkan

20:38 kuriyanto: Pembuatan panduan/dokumentasi beberapa hal yang dilakukan setelah pasang BlankOn Tambora (masih dalam proses pak soal nya saya masih ada tangguang jawab lain pak, mungkin 2 hari lagi selesai pak)

20:38 *** buruhnih has joined #blankon

20:38 buruhnih: hallo saya andrel

20:38 tuanpembual: kuriyanto, jgn lupa kartu trellonya dikomentari

20:38 tuanpembual: (y)

20:39 tuanpembual: lanjut?

20:39 kuriyanto: Oke siap pak

20:39 tuanpembual: 6. kesenian

20:39 Kiflie: selamat datang Pak Andrel

20:40 asgardian: Done: desain halaman perawatan. untuk web2 blankon yang sedang diperbaiki

20:40 asgardian: doing: *membuat character boni berbaju tim-tim blankon

20:41 *** showcheap has joined #blankon

20:41 asgardian: *berbagi pengalaman di tim blankon

20:41 *** rania__ has joined #blankon

20:41 tuanpembual: okeh, ada lagi pak?

20:42 asgardian: * membuat aset-aset kesenian spt kertas dindign spalsh. dan lain2. bisa di lihat disini https://github.com/winardiaris/blankon-uluwatu-kesenian

20:42 asgardian: * ini yang penting biar merasa memiliki. saling berhubungan dengan tim *biar timnya enggak bubar

20:43 asgardian: @rania @irfanpule mau nambain?

20:43 tuanpembual: keren pak!!

20:44 *** rania_ has quit IRC

20:44 tuanpembual: lanjut?

20:44 asgardian: sekian dari saya untuk saat ini.

20:44 tuanpembual: 7. jk

20:44 rania__: Sepertinya cukup pak, --yg atas ndak terbaca, gara2 putus

20:44 *** artemtech has joined #blankon

20:44 tuanpembual: pak Kiflie

20:44 artemtech: selamat malam, mohon maaf telat, baru sampai rumah

20:45 Kiflie: JK: doing; sedang bikin Dokumen UAT

20:45 *** Faiz has joined #blankon

20:46 irfanpule1: @asgardian tidak pak

20:46 Kiflie: ada tambahan anggota tim JK Pak Andrel @buruhnih

20:46 *** irfanpule1 has left #blankon

20:46 buruhnih: iya pak

20:47 *** AzFaiz has joined #blankon

20:47 tuanpembual: oke,

20:47 tuanpembual: cukup?

20:47 Kiflie: sementara itu pak

20:47 tuanpembual: lanjut ya.

20:47 tuanpembual: 2. milestone

20:48 tuanpembual: silahkan dibuka tautan ini https://raw.githubusercontent.com/BlankOn/Uluwatu/master/img/Milestone.png

20:48 tuanpembual: kita fokus ke rc1

20:48 tuanpembual: lihat bagian bulan maret saja.

20:48 tuanpembual: ada pertanyaan?

20:49 benben159: kenapa arsip-dev perlu direkonstruksi?

20:50 benben159: apakah agar in-sync dengan builder pemaketan?

20:50 tuanpembual: benben159, arsip-dev di rani

20:50 tuanpembual: yg hardisknya wasalam

20:50 *** buruhnih_ has joined #blankon

20:50 tuanpembual: jadi ntr abis beli hardisk ya dirsync

20:50 tuanpembual: :D

20:50 benben159: hampir wasalam lebihtepatnya

20:50 benben159: ok..

20:50 benben159: kutunggu dirimu di sby pak tuanpembual

20:50 benben159: hehehehe

20:51 tuanpembual: hardisknya aja yg kesana

20:51 benben159: atau fulusnya aja cukup ntar kita yg beli

20:51 benben159: saya dan darianrizal

20:51 tuanpembual: point pertama.

20:51 tuanpembual: kita buka usulan fitur

20:51 *** buruhnih has quit IRC

20:52 benben159: saya rasa manokwari perlu improvement di sisi keyboard binding

20:52 benben159: klo yg lain, ada alt+F1 utk buka bilah menu dan alt+F2 utk kotak dialog run

20:52 *** barepset has joined #blankon

20:52 tuanpembual: pak benben159

20:52 barepset: hadir pak

20:52 tuanpembual: dan bapak2 semua, ibuk kw

20:52 faiq: selamat datang pak barepset

20:52 benben159: mohon koreksi bila saya ada salah

20:53 tuanpembual: untuk usulan fitur, silahkan diajukan disini

20:53 tuanpembual: https://github.com/BlankOn/Uluwatu/issues/4

20:53 benben159: o gitu

20:53 benben159: okay

20:53 *** rania__ has quit IRC

20:53 *** rania__ has joined #blankon

20:53 tuanpembual: besok saya umumin bagian penerimaan usulan

20:53 tuanpembual: tim yg lain ada pertanyaan?

20:53 tuanpembual: humas peernya pengumuman ya.

20:54 asgardian: lanjut usul pitur

20:54 tuanpembual: sebelum halaman mitra jadi, g kemana2 loh humas

20:54 tuanpembual: it is call blocker

20:54 tuanpembual: untuk april ada pertanyaan?

20:55 tuanpembual: april khususnya pemaket dan qa

20:55 *** barepset has quit IRC

20:55 tuanpembual: + infra

20:55 *** barepset has joined #blankon

20:55 *** anchu has joined #blankon

20:56 tuanpembual: yg lain ada komentar?

20:56 tuanpembual: pak faiq ?

20:56 tuanpembual: winardiaris,

20:56 artemtech: saya mau tanya pa

20:56 barepset: mas estu bisa kirim link github yang untuk pengajuan fitur tadi ? saya habis refres peramban jadi ilang semua

20:56 tuanpembual: https://raw.githubusercontent.com/BlankOn/Uluwatu/master/img/Milestone.png

20:57 benben159: barepset, maksudnya ini barangkali https://github.com/BlankOn/Uluwatu/issues/4

20:58 asgardian: lanjut pak menejer

20:58 faiq: untuk pembekalan tim dokumentasi, kami nunggu jadwal dari pak manejer atau kami yang mengagendakan?

20:58 artemtech: untuk QA, nanti sistem kerjanya bagaimana? apa tetap di UAT?

20:59 tuanpembual: uat itu lingkungan qa

20:59 tuanpembual: faiq, diagendakan aja.

20:59 barepset: refres lagi

20:59 tuanpembual: kita nanti menyesuaikan siapa yg bs angisi

20:59 tuanpembual: https://raw.githubusercontent.com/BlankOn/Uluwatu/master/img/Milestone.png

21:01 benben159: https://github.com/BlankOn/Uluwatu/issues/4

21:01 artemtech: mengenai uat pak, apakah dokumen yang ditulis di trello sudah memenuhi kriteria penulisan uat?

21:01 faiq: untuk pembekalan hari hari Ahad malam Senin besok, yang bisa ngisi pak Estu atau pak Piko?

21:02 tuanpembual: artemtech, saya baru baca, ntr tak lapor di telegram.

21:03 tuanpembual: faiq, saya tentatif dulu pak, pak piko sepertinya bisa

21:03 artemtech: siyap pak tuanpembual

21:04 *** buruhnih_ has quit IRC

21:04 tuanpembual: ada lagi?

21:04 * tuanpembual 21.04

21:05 antosamalona: Nda ada pak

21:05 tuanpembual: oh iya, tiket bug jg diajukan ke alamat uluwatu/issue tadi

21:06 tuanpembual: kalau tidak ada, rapat saya tutup

21:06 benben159: https://github.com/BlankOn/Uluwatu/issues/4

21:06 tuanpembual: ======== rapat selesai ============ 

## ======== rapat selesai ============ 


