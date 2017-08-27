# Tata Cara Penerjemahan Aplikasi (Berkas PO)

(**Pembicara:** Romi Hardiyanto)

Pertama-tama, perkenalan dulu, saya Romi, dulu dan sampai sekarang penerjemah aplikasi Firefox (dan segala tetek bengeknya), masih mrogram sampai sekarang :). Malam ini bagian kedua dari lokakarya yang kemarin ​Lokakarya 1. Kalau yang pertama mengurusi bagaimana cara menerjemahkan lewat Transifex, yang sekarang menerjemahkan string-nya yang jadi topik. Pertama-tama apa sih tujuan penerjemahan aplikasi itu? Ada yang mau jawab? Baik, ya setuju banget sama mijortsa, untuk memudahkan pengguna. Perlu diingat bahwa nggak semua orang pinter bahasa Inggris. Sebenarnya, mungkin semuanya sudah pada pintar-pintar pakai sistem operasi berbahasa Inggris, baik Linux, Windows, MacOSX, dll, tapi apa iya, kalau misalnya ada pesan kesalahan ("error message"), terus orang pada ngerti programnya sedang ngapain? Dan juga apa iya orang mau baca help/man/dokumentasi kalau ada kesalahan pada program? Nah, untuk itu program-program yang ada perlu diterjemahkan ke "bahasa yang dimengerti pengguna". Sebenarnya sih, kalau sekarang anak SD di kota besar dikasih komputer, entah pakai Windows, Linux, atau Mac, kayaknya udah langsung ngerti, tapi kan tidak semua tingkat pendidikan bahasa Inggris itu sama rata di seluruh Indonesia. Nah, jadi ya itu, penerjemahan aplikasi (dan segala tetek bengeknya) diperlukan agar pemakai mudah menjalankan aplikasi.

Sekarang kembali ke leptop... BlankOn, sebagai salah satu distribusi Linux, menggunakan aplikasi-aplikasi yang pada umumnya menggunakan berkas PO untuk infrastruktur penerjemahan. Berkas PO sendiri sebenarnya merupakan berkas Gettext, yang formatnya bisa dibaca di ​http://www.gnu.org/s/hello/manual/gettext/PO-Files.html. Intinya, pada berkas PO dicantumkan string-string yang akan digunakan pada aplikasi (misalnya pada Menu, Kotak Dialog, berkas Bantuan, dsb). Saya ambil contoh potongan berkas PO yang ada di URL di atas:
```
#: lib/error.c:116
msgid "Unknown system error"
msgstr "Error desconegut del sistema"
```

Pada string tersebut dicantumkan:

* alamat baris pada kode sumber program,
* msgid: identifier string yang akan diterjemahkan, biasanya dalam bahasa Inggris,
* msgstr: terjemahan msgid dalam bahasa target. 

Nah, jika teman-teman melihat Transifex di (misalnya): ​http://i15n.blankonlinux.or.id/projects/p/transifex/resource/djangopo/l/id/view/, yang msgid itu yang di kolom "String Sumber", sedangkan msgstr itu dicantumkan di kolom "Terjemahan". Yah begitu pendahulan tentang format PO.

Nah, sekarang, berkas PO yang disertakan untuk [BlankOn](http://dev.blankonlinux.or.id/wiki/BlankOn) apa aja? Bisa dilihat di: ​http://dev.blankonlinux.or.id/browser/pattimura/pattimura-language-pack-id/data/id/LC_MESSAGES. Ok, setelah tahu tujuan menerjemahkan apa, dan format berkas yang biasa digunakan di Linux apa, sekarang apa aja sih syarat menerjemahkan dengan baik? Kalau menurut pengalaman saya sih sebenarnya nggak ada yang istimewa:

* Biasakan menggunakan Bahasa (sisipkan bahasa yang digunakan di sini) dengan baik dan "benar"
* Punya referensi untuk rujukan
* Mengerti string sumber 

Kita bahas yang pertama ya. Kalau yang ini, mestinya kita semua bisa, tinggal baik dan "benar" itu yang kadang-kadang agak susah, guru kita misalnya, pernah mengajari X, ternyata sekarang yang dipakai Y. Asal kita nggak menerjemahkan ke bahasa 4l4y, kayaknya pasti hasilnya bisa dikatakan bisa dimengerti deh. Saya sendiri pernah menerjemahkan secara profesional (artinya dapat duit gitu :D), ternyata kesalahan umum pemula biasanya sepele: misalnya begini:"dikota ada banyak hal yang harus di kerjakan". Ada yang tahu salahnya apa? Ya benar, di+tempat itu harus dipisah, "di" yang menunjukkan kata kerja pasif disambung. Sederhana, tetapi tetap aja banyak yang salah.

Jadi untuk itulah kita perlu rujukan. Rujukannya apa aja sih? Ternyata di Internet sudah banyak: ​http://id.wikisource.org/wiki/Pedoman_Umum_Ejaan_Bahasa_Indonesia_yang_Disempurnakan. Ini penting, sesekali dibaca lengkap dan dimengerti. Banyak juga lho yang nggak tahu kalau penulisan "dan" dan "atau" itu harus didahului koma untuk penyebutan unsur ketiga, misalnya: bukan "padat, gas dan cair", tetapi: harusnya "padat, gas, dan cair". Penulisan garis miring, titik dua, tidak perlu didahului spasi, dsb, dsb. Aturan-aturan sepele yang kadang lupa. Nah selain pedoman penulisan, kita juga butuh kamus untuk menerjemahkan, bukan hanya kamus bahasa Inggris -> bahasa Indonesia, tetapi juga bahasa Indonesia -> bahasa Indonesia. Kalau kamus bahasa Inggris -> bahasa Indonesia banyak tersedia di internet: mulai dari translate.google.com, kamus.net, dll. Kadang-kadang butuh juga kamus Inggris-> Indonesia: ​http://books.google.com/books?id=hVo2ZDYbL6gC&lpg=PP1&dq=alan%20stevens&hl=id&pg=PR15#v=onepage&q&f=false. Eh kebalik, Indonesia -> Inggris maksudnya. Untuk kamus Indonesia-> Indonesia: bisa dipakai ​http://kateglo.bahtera.org/?mod=dictionary.

Di dunia persilatan wilayah penerjemahan, biasanya referensi yang dipakai adalah KBBI. Dengan menggunakan kateglo.bahtera.org, kita bisa memastikan apakah ejaan kata yang kita pakai dalam penerjemahan sudah sesuai dengan KBBI apa belum, misalnya saja: ada yang tahu ejaan yang benar untuk terjemahan "authentication"? Menurut KBBI yang benar adalah "autentikasi", padahal kayaknya mirip-mirip antara "automatic" -> "otomatis" ya? Jadi harusnya "authentication" -> "otentikasi". Bisa dilihat di sini: ​http://kateglo.bahtera.org/?mod=dictionary&action=view&phrase=autentikasi. Oh iya, sebenarnya laman resmi KBBI bisa juga diakses di sini: ​http://pusatbahasa.kemdiknas.go.id/kbbi/. Cuma ya itu, kadang-kadang down :D. Nah sekarang, berbekal kamus (daring) dan pedoman bahasa yang baik, kita bisa menerjemahkan dengan tenang, lebih teliti, dan berkualitas tinggi :)

Ngomong-ngomong kalau penerjemahan bahasa Jawa, pakainya referensi apa ya? Dulu perasaan ada di google docs. Sebentar, oh ini: ​https://docs.google.com/spreadsheet/ccc?key=0Al2WiJoQjLAvcEw5QjFZY3dVMmtZQ2llZVFyMzVuWVE&hl=in. Itu saya kumpulin jadi satu, nggak terlalu resmi, dan nggak juga terlalu ketat berpegang pada padanan kata yang ada di situ. Cara gampangan saya: bikin daftar seperti google docs tadi, terus buat padanan bahasa Inggris/Indonesia (sebagai sumber) dan bahasa X-nya. Kan banyak tuh string sumber yang sama, misal: About, File, Help, Save As, Edit, OK, Cancel, dst, dst. Ya saran saya, kalau mau bikin Glosarium, bisa diawali dengan string yang sering muncul pada aplikasi (menu, dialog box, error message). oke, rasanya tinggal satu topik lagi yang belum disampaikan: memahami konteks string sumber.

Oke, sekarang kita ke topik memahami konteks. Kalau kita menjumpai string seperti ini: "Are you sure you want to delete these files?" Ada yang bisa mengajukan saran terjemahan? <kokabiel> Apakah anda yakin ingin menghapus berkas ini? Oke, menurut saya terjemahan kokabiel sudah bagus, tapi ada faktor-faktor lain dalam penerjemahan aplikasi:

1.apakah ada batasan jumlah karakter?

2.kalau bisa pendek, mengapa harus panjang? 

Jika "komputer" bertanya "Are you sure you want to delete these files", tentunya si komputer sedang bertanya kepada "si pemegang keyboard/mouse", bukan orang lain. Jadi mestinya "anda" pada kalimat "Apakah anda yakin ingin menghapus berkas ini?" bisa dihilangkan, jadi tinggal: "Apakah yakin ingin menghapus berkas ini?" Nah sekarang, apakah kata "Apakah" masih dibutuhkan? Apa bedanya "Apakah yakin ingin menghapus berkas ini?" dengan "Yakin ingin menghapus berkas ini?" Kalau menurut teman-teman nggak ada, pakailah yang lebih pendek :) Satu lagi yang benar dari terjemahan kokabiel: Bentuk plural bahasa Indonesia tidak perlu disebutkan secara eksplisit. Jadi nggak perlu diterjemahkan sebagai: "Yakin ingin menghapus berkas-berkas ini?" cukup "...berkas ini?" Jadi sebenarnya yang ada di ​http://i15n.blankonlinux.or.id/ itu, nggak perlu "Bahasa-bahasa" cukup "Bahasa" aja :) Satu lagi contohnya: misalnya ada string dalam berkas PO bunyinya "to" kira-kira terjemahannya apa coba? Di atas baris string dengan msgid "to", ada msgid "from". Betul sekali, dilihat gandengannya. Kalau ada from, "dari" "to" bisa jadi "ke", tapi coba bayangkan di sekitar baris-baris itu ada tulisan gini: #: lib/ui_date_selection_dialog.cpp:116. Jadi kira-kira itu ada di dialog box, harusnya jadi apa coba? Yoza: betul, selain itu juga bisa "sejak"+"hingga", "dari"+"hingga", tapi yang jelas bukan "sejak"+"ke", "dari"+ke". Jadi sebenarnya, mengetahui konteks terjemahan itu sangat penting. Kalau nggak, tujuan penerjemahan yang tadi di awal nggak sampai. Para heker dan progremer :D juga penting menuliskan komentar pada kode sumber yang sekiranya dianggap diperlukan bagi para penerjemah untuk memahami. Saya lupa, bagaimana cara memberikan komentar untuk string yang akan di-gettext-kan. Tapi saya kasih contoh aja pada kasus penerjemahan firefox: ​http://hg.mozilla.org/l10n-central/id/file/f75fff5654da/browser/chrome/browser/syncGenericChange.properties. Di situ ada: # LOCALIZATION NOTE (change.password.title): This (and associated change.password/passphrase) are used when the user elects to change their password. Tulisan LOCALIZATION NOTE itu yang nulis si programer, agar penerjemah mudah mencari padanannya dengan tepat. Bagaimana, ada pertanyaan?

**<Yoza>** ketika sebuah string punya 2 terjemahan, "harafiah" yang baku sekali dan "kontekstual" yang lebih dekat dengan isinya, dipilih yang mana, pak?

Cara gampang: jalankan aplikasinya, sampai kira-kira nemu string yang dimaksud. Cara gampang-gampang susah sih :). Cara susah-susah gampang, trace ke kode sumber programnya, kali-kali ada informasi lain.

**<Yoza>** romih: berarti yang diutamakan: konteksnya ya, pak?

Sebenarnya menurut pendapat pribadi saya, kalau bisa penerjemahan itu konsisten, misalnya: apakah Error itu mau diterjemakan jadi "kesalahan", "galat", atau yang lain, OK itu jadi "Oke", atau tetap "OK", atau "Baik".

Yoza: betul, kalau menurut saya konteksnya yang utama. Misalnya nanti di Glosarium Bahasa Jawa, mungkin perlu dicantumkan kata sumber: "Error", padanan kata bahasa Jawanya "Salah" (ini cuma contoh). O iya, untuk menjaga kekonsistenan ini, biasanya di dunia penerjemahan ada yang namanya reviewer. Kerjaannya ya cuma me-review kerjaan penerjemah dan memastikan apakah sesuai dengan standar yang diinginkan (gaya bahasa, padanan kata, dst).

Inti ocehan saya malam ini adalah: ya saya ulangi lagi ya, intinya ocehan tukang obat saya malam ini adalah:

    Tujuan menerjemahkan: supaya pengguna mudah mengerti dalam menjalankan aplikasi
    Syarat menerjemahkan yang baik: 

    mengerti konteks string sumber
    referensi untuk rujukan: ​http://id.wikisource.org/wiki/Pedoman_Umum_Ejaan_Bahasa_Indonesia_yang_Disempurnakan, kateglo.bahtera.org (KBBI), ​http://pusatbahasa.kemdiknas.go.id/kbbi/
    coba baca sekali lagi hasil terjemahan, mungkin ada salah ketik, salah eja, tanda baca yang menghilang secara misterius :D
    coba pakai aplikasi-aplikasi lain yang sudah (hampir) selesai diterjemahkan ke bahasa Indonesia, biar "familier" gitu
    konsisten dalam menerjemahkan, taati glosarium, tapi jangan lupa konteks string sumber (eh, kalau glosarium belum ada, ya bisa dibuat perlahan-lahan) 

Yah kira-kira gitu lah :) Buat yang ingin berhalo-halo, cuap-cuap ngobrol-ngobrol lebih lanjut bisa kontak saya lewat GoogleMail: romihardiyanto@…, atau YM!: romihardiyanto, FB juga sama: romihardiyanto. Kalau tidak ada pertanyaan, bisa saya tutup? Ngomong-ngomong, jadi penerjemah juga bisa hidup loo. Sekian ya.
