# Panduan Menulis Wiki dengan Markdown di Github

**Daftar Isi**
  + [Pendahuluan](#pendahuluan)
  + [Sintaks Markdown](#sintaks-markdown)
    + [Format Tajuk](#format-tajuk)
    + [Format Karakter](#format-karakter)
    + [Format Tautan](#format-tautan)
       + [Tautan Dalam Baris](#tautan-dalam-baris)
       + [Tautan Dalam Bentuk Referensi](#tautan-dalam-bentuk-referensi)

    + [Format Daftar](#format-daftar)
       + [Bernomor](#daftar-bernomor)
       + [Tanpa Nomor](#daftar-tanpa-nomor)

    + [Format Tabel](#format-tabel)
    + [Format Daftar Isi](#format-daftar-isi)
    + [Format Menyisipkan Gambar](#format-menyisipkan-gambar)
      + [Sisip Gambar Dalam Baris](#gambar-dalam-baris)
      + [Sisip Gambar Dengan Referensi](#sisip-gambar-dengan-referensi)
    + [Format Menyisipkan Kode](#format-menyisipkan-kode)
    + [Format Menyisipkan Kutipan](#format-menyisipkan-kutipan)



## Pendahuluan
Pada tahun 2017, para pengembang BlankOn Uluwatu menggembangkan wiki pada Github. Format penulisan pada Github salah satunya menggunakan Markdown.

Markdown is a lightweight and easy-to-use syntax for styling all forms of writing on the GitHub platform.

Untuk informasi lebih lengkap tentang Markdown pada Github, silakan baca [laman panduan Github](https://guides.github.com/features/mastering-markdown/)

## Sintaks Markdown
### Format Tajuk

Tajuk atau Heading pada Markdown ditulis dengan awalan tanda pagar (#) dan satu spasi. Jumlah tanda pagar menunjukkan tingkatan tajuk.

Untuk Tajuk 1 kita juga dapat menggunakan tanda ==== yang diletakkan pada baris berikutnya.

Untuk Tajuk 2 kita juga dapat menggunakan tanda ___ yang diletakkan pada baris berikutnya.

Berikut adalah tangkapan layar aplikasi Haroopad

![Tajuk](/wiki/Assets/Images/Markdown/Tajuk.png)

----

### Format Karakter
 + Untuk membuat karakter tebal, tambahkan dua tanda bintang pada awal dan akhir karakter.
  Contoh: **\*** **\***Tebal**\*** **\*** 

  Tampilan **Tebal**
 + Untuk membuat karakter miring, tambahkan dua tanda bintang pada awal dan akhir karakter.
   Contoh: *miring*
 + Untuk membuat karakter tercoret, tambahkan dua tanda ~ pada awal dan akhir karakter.
   Contoh: ~~coret~~
 + Untuk membuat karakter bergaris bawah, tambahkan dua tambah pada awal dan akhir karakter.
   Contoh: ++Bergaris Bawah++


---
**Tabel Format Karater**

| Markdown | Tampilan |
|--------|--------|
| **\*** **\***Tebal**\*** **\***   |     **Tebal** |
| \*Miring*   |     *Miring* |
| \~~Coret \~~  |     ~~Coret~~ |
| \++Bergaris bawah++   |     ++Bergaris Bawah++ |

---
Berikut adalah tangkapan layar aplikasi Haroopad
![](/wiki/Assets/Images/Markdown/Karakter.png)

### Format Tautan
---
#### Tautan Dalam Baris
| Format | Tampilan | Keterangan |
|--------|----------|------------|
| http://github.com       |http://github.com          | Otomatis           |
|\[GitHub](http://github.com)|[GitHub](http://github.com)|\[teks tautan ](URL)|

#### Tautan Dalam Bentuk Referensi
**Format:**
\[teks tautan]\[kode]
\[kode]:(URL)

**Contoh:**
Wiki \[BlankOn]\[1] kini dipindah ke \[github]\[2]
\[1]:(http://dev.blankonlinux.or.id/wiki)
\[2]:(https://blankon.github.io/wiki/)

**Tampilan dari contoh di atas:**
Wiki [BlankOn][1] kini dipindah ke [github][2]
[1]:(http://dev.blankonlinux.or.id/wiki)
[2]:(https://blankon.github.io/wiki/)



### Format Daftar
---
#### Daftar Bernomor
**Format:**
nomor.daftar 1
nomor.daftar 2
nomor.daftar 3

**Contoh:**
Tim Pengembang BlankOn
1. Dokumentasi
2. Infra
3. dll



#### Daftar Tanpa Nomor
Daftar Tanpa Nomor dapat dibuat dengan awalan tanda *, +, -

**Format:**
tanda daftar 1
tanda daftar 2
tanda daftar 3

**Contoh:**
Produk BlankOn
+ Distro BlankOn
  - BlankOn 1 Bianglala
  - BlankOn 2 Konde
  - BlankOn XI Uluwatu
+ BlanKoding
+ BlanKonf
  * BanKonf 1
  * BanKonf 2

![Tangkapan Layar Pada Haroopad](/wiki/Assets/Images/Markdown/Daftar.png)

### Format Tabel
---
Tabel dimulai dan diakhiri dengan baris kosong
Garis vertikal (batas kolom) dibentuk dengan  tanda |
Adapun garis horisontal (batas baris) akan terbentuk secara otomatis

**format:**

\| Nama Kolom A | Nama Kolom B |
|- - - - - - - -|- -  - - - - -|
|Isi sel 1A |Isi sel 1B|
|Isi sel 2A |Isi sel 2B|

**Tampilan:**

| Nama Kolom A | Nama Kolom B |
|-|-|
|Isi sel 1A |Isi sel 1B|
|Isi sel 2A |Isi sel 2B|

### Format Daftar Isi
---
Pada pada bagian awal tulisan yang cukup panjang perlu dilengkapi dengan daftar isi yang dapat diklik sebagai tautan.

**Format:**
\[Judul atau Sub Judul](#judul-atau-sub-judul)

Keterangan:
+ Penulisan judul sesuai aturan bahasa (kapital pada setiap awal kata) dan dipisahkan dengan spasi
+ Penulisan judul setelah tanda # menggunakan huruf keci semua dan dipisahkan dengan tanda-

**Contoh:**
Daftar Isi
\+ \[Judul Satu](#judul-satu)
\+ \[Judul Dua](#judul-dua)

**Tampilan:**
Daftar Isi
+ [Judul Satu](#judul-satu)
+ [Judul Dua](#judul-dua)

#### Cara Mudah Membuat Daftar Isi
Untuk menyusun daftar isi secara mudah dapat mengunakan [gh-md-toc](https://github.com/ekalinin/github-markdown-toc#installation)

### Format Menyisipkan Gambar
### Sisip Gambar Dalam Baris
**Format:**
\!\[teks alternatif](alamat gambar)"Kapsi"

**Contoh:**
\!\[Boni](/wiki/Assets/Images/Boni.png)"Maskot BlankOn"
\!\[logo](http://wiki.ubuntu-id.org/BlankOn/Artwork?action=AttachFile&do=get&target=blankon2007logo.png)

**Tampilan:**
![Boni](/wiki/Assets/Images/Boni.png)"Maskot BlankOn"
![logo](http://wiki.ubuntu-id.org/BlankOn/Artwork?action=AttachFile&do=get&target=blankon2007logo.png)

### Sisip Gambar Dengan Referensi
**Format:**
\!\[teks alternatif]\[kode]
\[kode]:(alamat gambar)"Kapsi"

**Contoh:**
\!\[Boni][3]
\[3]:(/wiki/Assets/Images/Boni.png)"Maskot BlankOn"

**Tampilan:**
![Boni][3]
[3]:(/wiki/Assets/Images/Boni.png)"Maskot BlankOn"

### Format Menyisipkan Kode
Untuk menyisipkan kode, kita dapat menggunakan sepasang tanda petik untuk mengapit kode yang disisipkan.

**Contoh:**
Untuk melihat isi dari suatu direktori kita dapat mengetik \`ls` pada terminal.

**Tampilan:**
Untuk melihat isi dari suatu direktori kita dapat mengetik `ls` pada terminal.

### Format Menyisipkan Kutipan
Suatu kutipan diawali dengan tanda > dan diakhiri dengan baris kosong.

**Contoh:**
Ini bukan kutipan
\>ini kutipan

Ini bukan kutipan

**Tampilan:**
Ini bukan kutipan
>ini kutipan

Ini bukan kutipan

