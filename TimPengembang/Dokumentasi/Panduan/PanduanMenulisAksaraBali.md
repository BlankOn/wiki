# Panduan Menulis Aksara Bali

## Menggunakan fitur metoda input Aksara Bali
BlankOn Linux 6.0 (Ombilin) mendukung pengetikan aksara Bali melalui fitur
metoda input SCIM dan Fonta Bali yang sudah sesuai dengan standar Unicode dan
mendukung fitur-fitur pemrosesan fonta pintar (smartfont) berbasis OpenType?
untuk memproses berbagai aturan rumit dalam penulisan aksara Bali. Untuk
menggunakan fitur ini, anda harus mengaktifkan metoda input SCIM terlebih
dahulu.
### Mengaktifkan metoda input SCIM
Untuk mengaktifkan SCIM, klik menu Sistem > Administrasi > Dukungan Bahasa.
Pada opsi "System metoda masukan papan ketik", pilih "scim-immodule". Setelah
itu restart desktop Anda.
### Menggunakan fitur metoda input aksara Bali
Untuk menggunakan fitur metoda input, bukalah aplikasi pengetikan yang
mendukung fitur metoda input dan pemrosesan fonta pintar. Saat ini, hanya
aplikasi berbasis GTK+ saja yang bisa digunakan agar mendukung pemrosesan fonta
pintar berbasis OpenType?. Anda bisa gunakan Abiword (Aplikasi > Perkantoran >
Abiword) atau Penyunting teks Gedit (Aplikasi > Aksesoris > Penyunting Text
gedit). Khusus untuk Abiword, set terlebih dahulu Fonta menjadi "Bali". Jika
ingin menggunakan Browser, anda harus menggunakan aplikasi Mozilla Firefox
(Chromium belum mendukung pemrosesan OpenType?).
Untuk memulai pengetikan, tekan tombol trigger Ctrl+Spasi. Kemudian Anda bisa
memulai pengetikan kata dan kalimat yang anda inginkan dalam aksara Bali.
### Teknik pengetikan
PERHATIAN : Beberapa kalimat dalam aksara Bali yang dimuat dalam halaman ini
mungkin tidak tampil sempurna sesuai dengan aturan jika menggunakan browser
Chromium
Pengetikan bisa dilakukan seperti mengetik biasa. Metoda input SCIM akan secara
otomatis menerjemahkan apa yang anda ketik dalam aksara Bali. Agar aksara dapat
ditampilkan sesuai dengan keinginan, ada beberapa trik-trik khusus dalam proses
pengetikan :
    * Tekanlah tombol spasi setiap satu kata, agar proses pemenggalan baris dan
      pemilihan aksara lebih baik.
    * Untuk menuliskan sebuah suku kata dalam vokal taling (ᬾ), tekan tombol
      Shift+E setelah mengetik konsonan yang diinginkan. Misalnya dalam
      mengetik kata "Nenten" (ᬦᬾᬦ᭄ᬢᭂᬦ᭄), tekan tombol (secara berurutan) N,
      Shift+E, N, T, E, N
    * Untuk menuliskan vokal taling repa (ᬿ) pada suatu suku kata, tekan tombol
      A + I setelah tombol konsonan yang diinginkan.
    * Untuk menuliskan vokal taling repa tedung (ᭁ) pada suatu suku kata, tekan
      tombol A + U setelah menekan tombol konsonan yang diinginkan.
    * Untuk menuliskan vokal pepet tedung ( ᭃ) pada suatu suku kata, tekan
      tombol A + U setelah konsonan yang diinginkan.
    * Untuk menuliskan vokal suku ilut ( ᬹ), tekan tombol U selama 2 kali
      setelah menekan tombol konsonan yang diinginkan.
    * Untuk menuliskan vokal panjang (kosonan + tedung) dalam suatu suku kata,
      tekan tombol A dua kali setelah konsonan yang diinginkan. Misalnya, dalam
mengetik "Kaatur" (ᬓᬵᬢᬸᬃ), tekan tombol (secara berurutan) K, A, A, T, U,
Shift+R.
    * Untuk menuliskan vokal ulu sari dalam suatu suku kata (dalam kondisi
      tertentu sesuai aturan penulisan aksara Bali), tekan tombol I dua kali
      setelah konsonan yang diinginkan. Misalnya, dalam mengetik kata "Sari"
      (ᬲᬭᬷ), tekan tombol (secara berurutan) S, A, R, I, I.
    * Untuk menuliskan tanda cecek untuk membunyikan konsonan "NG" pada saat
      tertentu (sesuai dengan aturan penulisan aksara Bali), tekanlah tombol
      Shift + N + G (secara berurutan sambil menahan tombol yang sebelumnya
      ditekan) atau (secara berurutan) Shift + N dan Shift + G. Misalnya jika
      ingin mengetik kata "Kangkung", tekan tombol (secara berurutan) K, A,
      (Shift + N + G), K, U (Shift + N + G) (ᬓᬂᬓᬸᬂ)
    * Untuk menuliskan tanda bisah untuk membunyikan konsonan "H" pada saat
      tertentu (sesuai dengan aturan penulisan aksara Bali), tekanlah tombol
      Shift + H. Misal jika mengetik kata "PISAH" (ᬧᬶᬲᬄ), tekan tombol (secara
      berurutan) P, I, S, A, Shift + H.
    * Untuk menuliskan tanda surang untuk membunyikan konsonan "R", tekanlah
      tombol Shift + R. Misal jika mengetik kata "KASAR" (ᬓᬲᬃ), tekan tombol
      (secara berurutan) K, A, S, A, Shift + R.
    * Untuk menuliskan konsonan-konsonan dengan aksara khusus (selain 18
      konsonan standar aksara Bali), gunakan kombinasi tombol seperti tabel
      berikut :
Da Madu            �D + H + vokal
Ta Latik           �T + T + vokal
Ta Tawa            �T + H + vokal
Sa Sapa            �S + S + vokal
Sa Saga            �S + H + vokal
Ba Kembang         �B + H + vokal
Pa Kapal           �P + H + vokal
Na Rambat          �N + N + vokal
Ka Mahaprana       �K + H + vokal
Ga Gora            �G + H + vokal
Ca Laca            �C + H + vokal
Ja Jera            �J + H + vokal
Ta Murda           �T + T + H + vokal
Da Murda Alpaprana �D + D + vokal
Da Murda Mahaprana �D + D + H + vokal
    * Untuk mengetik karakter vokal tunggal (a kara, i kara, u kara). Gunakan
      kombinasi tombol seperti tabel berikut :
A kara        �Shift + A
A kara tedung �Shift + A (2 kali)
I kara        �Shift + I
I kara tedung �Shift + I (2 kali)
U kara        �Shift + U
U kara tedung �Shift + U (2 kali)
E kara        �Shift + E
O kara        �Shift + O
O kara tedung �Shift + O (2 kali)
AI kara       �Shift + A, Shift + I
### Contoh Pengetikan
Om Swastyastu                   ᬒᬁ ᬲ᭄ᬯ�O, M, <spasi>, S, W, A, T, Y,
                                                  A, S, T, U
Sane Mangkin                    ᬲᬦᬾ ᬫᬗ�S, A, N, Shift+E, <spasi>, M,
                                                  A, N, G, K, I, N
                                                  S, A, Shift+N, Shift+G,
Sang Arjuna                     ᬲᬂᬅᬃᬚᬸ<spasi>, Shift+A, Shift+R, J,
                                                  U, N, N, A
                                                  R, A, J, A, <spasi>, Shift+A,
Raja Airlangga                  ᬭᬚᬐᬃᬮᬗShift+I, Shift+R, L, A, N, G,
                                                  G, A
BlankOn Linux (Ditulis Blangkon ᬩ᭄ᬮᬗ᭄ᬓB, L, A, N, G, K, O, N,�᭄᭟
Linuk)                                            <spasi>, L, I, N, U, K
Penjor (ditulis Penyjor sesuai  ᬧᬾᬜ᭄ᬚᭀP, E, N, Y, J, O, Shift+R
dengan aturan aksara Bali)
                                                  D, E, S, S, A, <spasi>,
Desa Adat Krobokan              ᬤᬾᬱᬅᬤᬢShift+A, D, A, T, <spasi>, K,�᭟
                                                  R, O, B, O, K, A, N
Sesapi Putih                    ᬲᭂᬲᬧᬶᬧS, E, S, A, P, I, <spasi>, P,
                                                  U, T, I, Shift+H
Somat Ganteng                   ᬲᭀᬫᬢ᭄ᬕS, O, M, A, T, <spasi>, G, A,
                                                  N, T, E, Shift+N, Shift+G
### Kekurangan
    * Fonta Bali yang disertakan belum mendukung beberapa aplikasi terkenal,
      seperti OpenOffice?.org, Chromium, dan aplikasi non-GTK lainnya
      (rencananya Fonta akan di-porting ke teknologi SIL Graphite).
    * Belum menerapkan teknik ligatura untuk penggabungan antara suatu glyph
      dengan tanda tedung (ᬵ), seperti yang lumbrah digunakan dalam teks aksara
      Bali.
    * Masih terdapat beberapa kesalahan rendering jika tanda suara atas
      disandingkan dengan konsonan tertentu (Ka Mahaprana, Ja Jera, Nya, dsb)

Last modified on 06/19/2010 06:34:44 PM
---
[**Daftar Isi Wiki BlankOn**](/DaftarIsi/README.md)
 
[**Indeks Wiki BlankOn**](/Indeks.md)
