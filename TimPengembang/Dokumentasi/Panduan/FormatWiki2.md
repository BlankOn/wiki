# Panduan Menulis Wiki
## WikiFormatting
   1. WikiFormatting
         1. Panduan_Dasar
         2. Gaya_Huruf
         3. Judul
         4. Paragraf
         5. Daftar
         6. Daftar_Definisi
         7. Teks_Terformat
         8. Blok_Kutipan
         9. Kutipan_Diskusi_/_Obrolan
        10. Tabel
               1. Tabel_Sederhana
               2. Tabel_Rumit
        11. Pranala
        12. Trac_Links
        13. Setting_Anchors
        14. Escaping_Links_and_WikiPageNames
        15. Gambar
        16. Macros
        17. Pemroses
        18. Komentar
        19. Lainnya

Markup Wiki merupakan fitur utama pada Trac, metode ini sangat tepat untuk memadukan semua bagian dari Trac menjadi suatu kesatuan sehingga lebih baik dan
fleksibel.

Trac has a built in small and powerful wiki rendering engine. Mesin wiki ini
yang mengimplementasikan perkembangan perintah dari wiki populer lainnya,
terutama ​MoinMoin and ​WikiCreole.
Halaman ini mencoba memberikan penjelasan secara mendalam tentang markup maupun
format wiki yang diperbolehkan pada berbagai halaman wiki secara umum.
Panduan Dasar di bawah ini memberi Anda gambaran singkat pada sintaks yang
paling umum, setiap tautan pada kolom Kategori akan membawa Anda ke penjelasan
yang lebih detail pada halaman ini.
Beberapa halaman wiki lainnya menyajikan fitur yang canggih dan lebih mendalam
dari markup wiki Trac:
    * TracLinks mencakup semua cara yang mungkin untuk merujuk ke sumber daya
      Trac atau bagiannya,
    * WikiPageNames berisi berbagai nama halaman wiki dapat dipergunakan,
      CamelCase atau tidak
    * WikiMacros adalah daftar macro yang tersedia untuk menghasilkan konten
      dinamis,
    * WikiProcessors dan WikiHtml rincian bagaimana bagian-bagian dari teks
      wiki dapat diproses dengan cara khusus

***** Panduan Dasar *****
Kategori        Markup Wiki                     Tampilan
                '''tebal''', ''miring'',        tebal, miring, gaya Wikipedia
                '''''gaya Wikipedia'''''
Gaya_Huruf      `monospaced dan ''nowiki''`     monospaced dan ''nowiki''
                **tebal**, //miring//, **//Gaya tebal, miring, Gaya WikiCreole/
                !WikiCreole//**                 /
                == Level 2 ==                   ***** Level 2 *****
Judul           === Level 3 ^([#hn catatan      **** Level 3 (catatan_kaki)
                kaki])^                         ****
                Paragraf pertama                Paragraf pertama didalam
Paragraf        didalam beberapa baris.         beberapa baris.
                                                Paragraf kedua.
                Paragraf kedua.
                * Daftar Berbulir                   * Daftar Berbulir
                  di dalam banyak paragraf           di dalam banyak
Daftar            1. Daftar Bertingkat               paragraf
                    a. Gaya penomoran yang         1. Daftar Bertingkat
                berbeda                                  1. Gaya penomoran yang
                                                            berbeda
Daftar_Definisi  istilah:: Definisi didalam       istilah
                paragraf                              Definisi didalam paragraf
                {{{
                teks dengan beberapa baris,     teks dengan beberapa baris,
Teks_Terformat  ''no wiki''                     ''no wiki''
                      spasi                           spasi
                }}}
Blockquotes       Contoh teks quote                  Contoh teks quote
                  Contoh teks quote                  Contoh teks quote
                >> ... (Pertanyaan)                       ...
Kutipan_Diskusi > (Jawaban)                               (Pertanyaan)
                                                     (Jawaban)
Tabel           ||= Judul Tabel =|| Cell ||     Judul Tabel Cell
                ||||  (isi detail teks)  ||     (isi detail teks)
Pranala         http://trac.edgewall.org        ​http://trac.edgewall.org
                WikiFormatting (CamelCase)      WikiFormatting (CamelCase)
                wiki:WikiFormatting, wiki:      wiki:WikiFormatting, wiki:
                "WikiFormatting"                "WikiFormatting"
                #1 (ticket), [1] (changeset),   #1 (ticket), [1] (changeset),
                {1} (report)                    {1} (report)
TracLinks       ticket:1, ticket:1#comment:1    ticket:1, ticket:1#comment:1
                Ticket [ticket:1], [ticket:     Ticket 1, ticket_one
                1 ticket one]
                Ticket [[ticket:1]], [[ticket:  Ticket 1, ticket_one
                1|ticket one]]
Setting_Anchors [=#point1 (1)] First...         (1) First...
                see [#point1 (1)]               see (1)
                !'' doubled quotes              '' doubled quotes
Escaping_Markup !wiki:WikiFormatting,           wiki:WikiFormatting,
                !WikiFormatting                 WikiFormatting
Gambar          [[Image(link)]]                 [trac_logo_mini.png]
                [[MacroList(*)]]                (short list of all available
Macros                                          macros)
                [[Image?]]                      (help for the Image macro)
                {{{
                #!div style="font-size: 80%"
                Code highlighting:              Code highlighting:
Pemroses          {{{#!python                   hello = lambda: "world"
                  hello = lambda: "world"
                  }}}
                }}}
                {{{#!comment
Komentar        Catatan untuk Editor: ...
                }}}
                Garis [[br]] pisah              Garis
Lainnya         Garis \\ pisah                  pisah Garis
                ----                            pisah
                                                ===============================
***** Gaya Huruf *****
The Trac wiki mendukung beberapa format gaya teks:
Wiki Markup                             Tampilan
 * '''tebal''',
   ''' kutipan !'''                         * tebal, kutipan ''' bisa juga
   bisa juga dikombinasikan dengan gaya       dikombinasikan dengan gaya
penulisan tebal jika diperlukan ''',          penulisan tebal jika diperlukan,
 * ''miring''                               * miring
 * '''''tebal miring''''' or ''miring       * tebal miring or miring and miring
and                                           tebal
   ''' miring tebal ''' ''                  * garis bawah
 * __garis bawah__                          * monospace or monospace (hence {{
 * {{{monospace}}} or `monospace`             { or ` quoting)
   (hence `{{{` or {{{`}}} quoting)         * strike-through
 * ~~strike-through~~                       * superscript
 * ^superscript^                            * subscript
 * ,,subscript,,                            * tebal, miring, and tebal miring
 * **tebal**, //miring//,                     (since 0.12)
   dan **'' tebal miring **'' //(sejak
versi 0.12)//
Catatan:
    * {{{...}}} and `...` perintah tersebut tidak hanya berlaku untuk jenis
      font monospace, tetapi juga berlaku untuk teks demi teks lainnya.
    * ! menandai wiki untuk tidak mengambil karakter tersebut ("!") sebagai
      format wiki, jangan lupa untuk menempatkan spasi setelah tanda seru
      ("!"), misalnya saat mengakhiri huruf tebal.
    * Semua gaya format teks yang digunakan harus mempunyai tanda yang sama
      sebagai pembuka dan penutup (misalnya, tanda '' huruf miring tidak dapat
      dipasangkan dengan tanda //, dan tanda ''' tidak dapat dipasangkan dengan
      tanda **). contoh yang salah : miringsedangkan contoh yang benar adalah :
      miringatau
      miring
***** Judul *****
Kita dapat membuat sebuah judul dengan menggunakan satu hingga 6 simbol sama
dengan ("=") dengan diikuti oleh sebuah spasi tunggal sebelum dan sesudah teks
judul.
 Teks judul harus diikuti oleh jumlah simbol sama dengan ("=") didapan dan
diakhir teks judul
Teks judul juga bisa diikuti dengan ID explicit.
Wiki Markup                                       Tampilan
= Judul =                                         ***** Subjudul *****
== subjudul                                       **** Tentang pembuat ****
=== Tentang ''pembuat'' ===                       **** ID Explicit ****
=== ID Explicit === #using-explicit-id-in-heading ***** Subjudul *****
== Subjudul #sub2
***** Paragraf *****
Kita dapat membuat sebuah teks paragraf baru dari dua buah blok teks yang
dipisahkan oleh sebuah spasi berupa baris kosong.
Sebuah spasi baris kosong dapat dimasukkan dengan cara :
Wiki Markup          Tampilan
Baris 1[[BR]]Baris 2      Baris 1
Paragraf                  Baris 2
satu                      Paragraf
                          satu
Paragraf                  Paragraf
dua                       dua
***** Daftar *****
Wiki mendukung gaya daftar penomoran dan daftar berbulir.
Contoh:
Wiki Markup                             Tampilan
 * Daftar 1                                 * Daftar 1
   * Daftar 1.1                                   o Daftar 1.1
      * Daftar 1.1.1                                    # Daftar 1.1.1
      * Daftar 1.1.2                                    # Daftar 1.1.2
      * Daftar 1.1.3                                    # Daftar 1.1.3
   * Daftar 1.2                                   o Daftar 1.2
 * Daftar 2                                 * Daftar 2
- sebuah daftar dapat dimulai dengan              o sebuah daftar dapat dimulai
sebuah baris baru                                   dengan sebuah baris baru
  atau bisa juga dengan beberapa baris              atau bisa juga dengan
  - tetap hati-hati dalam melanjutkan               beberapa baris
daftar,                                                 # tetap hati-hati dalam
  walaupun kelihatan memiliki                             melanjutkan daftar,
indentansi yang sama                                      walaupun kelihatan
tetapi itu bisa membuat sebuah paragraf                   memiliki indentansi
baru...                                                   yang sama
                                                    tetapi itu bisa membuat
 1. Daftar 1                                        sebuah paragraf baru...
   a. Daftar 1.a                           1. Daftar 1
   a. Daftar 1.b                                 1. Daftar 1.a
      i. Daftar 1.b.i                            2. Daftar 1.b
      i. Daftar 1.b.ii                                 1. Daftar 1.b.i
 1. Daftar 2                                           2. Daftar 1.b.ii
Daftar bernomor akan dimulai lagi dari     2. Daftar 2
penomoran awal dengan membuat nomor     Daftar bernomor akan dimulai lagi dari
eksplisit:                              penomoran awal dengan membuat nomor
 3. Daftar 3                            eksplisit:
                                           1. Daftar 3
***** Daftar Definisi *****
Wiki mendukung daftar definisi.
Wiki Markup                             Tampilan
 llama::                                  llama
   salah satu jenis hewan mamalia             some kind of mammal, with hair
berambut                                  ppython
 ppython::                                    some kind of reptile, without
   salah satu jenis hewan reptil, tidak       hair (can you spot the typo?)
memiliki rambut
Catatan bahwa dibutuhkan sebuah spasi kosong didepan teks yang akan
didefinisikan.
***** Teks Terformat *****
Blok yang berisi teks terformat cocok untuk penulisan source code snippets,
catatan dan contoh. Menggunakan tiga tanda kurung kurawal ("...") yang mengapit
teks untuk menentukan sebuah teks kutipan. Kurung kurawal harus pada baris
terpisah.
Wiki Markup                 Tampilan
{{{
def HelloWorld():           def HelloWorld():
    print '''Hello World'''     print '''Hello World'''
}}}
Catatan : Blok jenis ini juga digunakan untuk menyeleksi beberapa baris yang
juga akan di proses WikiProcessors.
***** Blok Kutipan *****
Untuk menandai sebuah paragraf menjadi sebuah blok kutipan digunakan 2 buah
spasi diawal teks kutipan tersebut.
Wiki Markup                       Tampilan
Paragraf                          Paragraf
  Ini adalah contoh teks kutipan.      Ini adalah contoh teks
                                       kutipan.
***** Kutipan Diskusi / Obrolan *****
Wiki mendukung kutipan diskusi atau kutipan dalam sebuah obrolan, seperti dalam
sebuah tiket yang dikirim kepada para pengembang, area komentar dalam sebuah
post atau artikel dan seperti obrolan dalam email (">", ">>", dll.)
Wiki Markup                              Tampilan
                                                   Ini adalah contoh
                                                   teks asli atau
>> Ini adalah contoh teks asli atau bisa           bisa berupa
berupa sebuah pertanyaan                           sebuah pertanyaan
> Ini adalah contoh jawaban yang dikirim      Ini adalah contoh jawaban
>  - Dapat menggunakan beberapa jenis         yang dikirim
gaya penulisan dalam wiki.                        * Dapat menggunakan
                                                    beberapa jenis gaya
                                                    penulisan dalam wiki.
***** Tabel *****
**** Tabel Sederhana ****
tabel sederhana dapat dibuat dengan cara :
Wiki Markup                Tampilan
||Cell 1||Cell 2||Cell 3|| Cell 1 Cell 2 Cell 3
||Cell 4||Cell 5||Cell 6|| Cell 4 Cell 5 Cell 6
Judul Cell dapat menggunakan simbol '=' Catatan : simbol '=' harus menempel
pada simbol pemisah sisi kanan dan kiri table, perhatikan contoh :
Wiki Markup                            Tampilan
||        ||= judul 1 =||= judul 2 =||      judul 1 judul 2
||= 0.10 =||  0.10.5   || 0.10.6dev || 0.10 0.10.5  0.10.6dev
||= 0.11 =||  0.11.6   || 0.11.7dev || 0.11 0.11.6  0.11.7dev
Ketika membuat sebuah cell kosong makan cell kosong tersebut akan digabungkan
kedalam cell yang berada di sebelah kanan cell kosong tersebut, perhatikan
contoh :
Wiki Markup       Tampilan
|| 1 || 2 || 3 || 1 2 3
|||| 1-2 || 3 ||  1-2 3
|| 1 |||| 2-3 ||  1 2-3
|||||| 1-2-3 ||   1-2-3
                               ") memotong pemisah tabel lainnya makan simbol
...                            tabel terjauh atau terpanjang yang akan
                               digunakan, perhatikan contoh :
Wiki Markup                    Tampilan
||=Teks =||= Nomor =||         Teks         Nomor
||rata kiri    ||        1.0|| rata kiri    1.0
||  rata tengah ||       4.5|| rata tengah  4.5
||      rata kanan||     4.5|| rata kanan   4.5
|| standar teks ||  2.5||      standar teks 2.5
||teks biasa||         2.5||   teks biasa   2.5
||  teks biasa ||      2.5||   teks biasa   2.5
|| teks biasa ||       2.5||   teks biasa   2.5
Jika bertentangan dengan contoh di atas, sel-sel dalam tabel Anda mengandung
lebih banyak teks, mungkin mudah untuk menyebarkan baris tabel lebih dari
beberapa baris dari markup. Simbol '\' ditempatkan pada akhir baris setelah
pemisah sel memberitahu Trac untuk tidak memulai baris baru untuk sel pada
baris berikutnya.
Wiki Markup
|| ini adalah kolom 1 [http://dev.blankonlinux.or.id/newticket tiket baru] || \
|| ini adalah kolom 2 [http://dev.blankonlinux.or.id/roadmap Roadmap Linux
BlankOn] || \
|| ini adalah kolom 3 dan seterusnya ||
Tampilan
                                                                     ini adalah
     ini adalah kolom 1 ​tiket ini adalah kolom 2 ​Roadmap_Linux kolom 3
     baru                        BlankOn                             dan
                                                                     seterusnya
**** Tabel Rumit ****
Jika kemungkinan yang ditawarkan oleh pembuatan tabel sederhana yang dijelaskan
di atas tidak cukup untuk kebutuhan Anda, Anda dapat membuat tabel yang lebih
rumit lagi seperti yang dijelaskan dengan menggunakanWikiProcessor_based
tables.
***** Pranala *****
Hyperlink secara otomatis dibuat untuk WikiPageNames dan URL. ! WikiPageLinks?
dapat dinonaktifkan dengan mengawali tanda seru "!", seperti !WikiPageLink.
Wiki Markup                            Tampilan
TitleIndex, http://                    TitleIndex, http://
www.blankonlinux.or.id/, !BukanPranala www.blankonlinux.or.id/, BukanPranala
Link dapat diberi judul yang lebih deskriptif dengan menulis link diikuti
dengan spasi dan judul dan semua ini dalam tanda kurung siku. Jika judul
deskriptif dihilangkan, maka awalan eksplisit dibuang, kecuali link tersebut
adalah link eksternal. Hal ini dapat berguna untuk halaman wiki tidak mengikuti
WikiPageNames konvensi.
Wiki Markup                                      Tampilan
 * [http://www.blankonlinux.or.id BlankOn Linux]     * ​BlankOn_Linux
 * [wiki:TitleIndex Title Index]                     * Title_Index
 * [wiki:TitleIndex]                                 * TitleIndex
 * [wiki:ISO9000]                                    * ISO9000?
Mengikuti aturan WikiCreole?, judul deskriptif juga dapat ditentukan dengan
menulis link diikuti oleh simbol ('|') dan judul dan semua di dalam tanda
kurung siku ganda ini ("...?").
 * [[http://www.blankonlinux.or.id|BlankOn
Linux]]                                        * ​BlankOn_Linux
 * [[wiki:TitleIndex|Title Index]]             * Title_Index atau Title_Index
   atau [[TitleIndex|Title Index]]             * TitleIndex tetapi bukan [
 * [[wiki:TitleIndex]]                           [TitleIndex]]!
   ''' tetapi bukan ![[TitleIndex]]! '''       * ISO9000?
 * [[ISO9000]]
Note: tombol ​WikiCreole gaya untuk link cepat untuk mengetik dan jelas
terlihat akrab seperti itu yang digunakan di Wikipedia dan banyak wiki lain.
Sayangnya hal itu bertentangan dengan sintaks untuk Macro_macro. Jadi dalam
kasus yang jarang terjadi ketika Anda perlu untuk merujuk ke halaman yang
dinamai makro (contoh tipikal TitleIndex, InterTrac dan interwiki), dengan
menulis [[TitleIndex]] Anda benar-benar akan memanggil makro bukan
menghubungkan ke halaman....
***** Trac Links *****
Halaman Wiki dapat merujuk kepada bagian lain dari Trac system. Halaman -
halaman tersebut dapat merujuk kepada halaman tickets, reports, changesets,
milestones, source files dan halaman wiki lainnya dengan format sebagai berikut
:
Wiki Markup                           Tampilan
 * Tickets: #1 or ticket:1                * Tickets: #1 or ticket:1
 * Reports: {1} or report:1               * Reports: {1} or report:1
 * Changesets: r1, [1] or changeset:1     * Changesets: r1, [1] or changeset:1
 * ...                                    * ...
 * targeting other Trac instances,        * targeting other Trac instances, so
   so called InterTrac links:               called InterTrac links:
   - Tickets: #Trac1 or Trac:ticket:1           o Tickets: #Trac1 or Trac:
   - Changesets: [Trac1] or Trac:                 ticket:1
changeset:1                                     o Changesets: [Trac1] or Trac:
                                                  changeset:1
Ada banyak cara Trac link, lihat TracLinks untuk informasi yang lebih mendalam
dan referensi bagi semua resolvers standar link.
***** Setting Anchors *****
Anchors, atau lebih tepatnya berbicara, nama anchor dapat ditambahkan secara
eksplisit di setiap tempat di halaman Wiki, dalam rangka untuk secara unik
mengidentifikasi posisi dalam dokumen.
[=#point1]
Sintaks ini dipilih sesuai format untuk secara eksplisit penamaan id header
documented_above yang didokumentasikan di atas. Sebagai contoh:
== Long title == #title
Hal ini juga sangat dekat dengan sintaks untuk yang sesuai link ke anchor
bahwa:
[#point1]
Optionally, a label can be given to the anchor:
[[=#point1 '''Point 1''']]
Wiki Markup                        Tampilan
[#point2 jump to the second point]      jump_to_the_second
                                        point
...                                     ...
                                        Point2:  Jump here
Point2:  [=#point2] Jump here
For more complex anchors (e.g. when a custom title is wanted), one can use the
Span macro, e.g. [[span(id=point2, class=wikianchor, title=Point 2, ^(2)^)]].
***** Escaping Links and WikiPageNames *****
You may avoid making hyperlinks out of TracLinks by preceding an expression
with a single "!" (exclamation mark).
Wiki Markup         Tampilan
 !NoHyperLink            NoHyperLink #42 is not a
 !#42 is not a link      link
***** Gambar *****
Tautan dengan akhiran .png, .gif or .jpg tidak lagi otomatis diterjemahkan
sebagai link gambar dan dikonversi ke marka <img>.
Anda diharuskan menggunakan makro [[Image]]. Ini adalah cara sederhana
memasukkan gambar yang diuggah sebagai lampiran pada halaman yang anda buka
sekarang dan menambahkan namafile kedalam makro dan memanggilnya seperti [
[Image(picture.gif)]].
Untuk tambahan pada halaman sekarang, dimunginkan untuk merujuk pada sumber
tertentu:
    * [[Image(wiki:WikiFormatting:picture.gif)]] (Merujuk ke lampiran di
      halaman lain)
    * [[Image(ticket:1:picture.gif)]] (File yang dilampirkan pada tiket)
    * [[Image(htdocs:picture.gif)]] (Merujuk pada file didalam direktori
      environment htdocs)
    * [[Image(source:/trunk/trac/htdocs/trac_logo_mini.png)]] (sebuah file di
      lumbung)
Wiki Markup                                    Tampilan
[[Image(htdocs:../common/trac_logo_mini.png)]] [trac_logo_mini.png]
Baca WikiMacros untuk dokumentasi lebih detail mengenai makro [[Image()]], yang
mememiliki beberapa opsi berguna lain seperti (title=, link=, etc.)
***** Macros *****
Macros adalah custom functions untuk memasukkan konten dinamis kedalam sebuah
halaman.
Wiki Markup               Tampilan
                          **** 10/16/2014 ****
[[RecentChanges(Trac,3)]]     * TracWorkflow(diff)
                              * TracPermissions(diff)
                              * TracStandalone(diff)
Baca WikiMacros untuk informasi lebih lanjut, dan daftar pemasangan macros.
Detail bantuan untuk spesifik macro bisa langsung diketahui dengan apendik "?"
pada nama macro.
Wiki Markup    Tampilan
               **** [[MacroList]] ****
               Display a list of all installed Wiki macros, including
               documentation if available.
               Optionally, the name of a specific macro can be provided as an
[[MacroList?]] argument. In that case, only the documentation for that macro
               will be rendered.
               Note that this macro will not be able to display the
               documentation of macros if the PythonOptimize option is enabled
               for mod_python!
***** Pemroses *****
Trac mendukung alternatif format markup menggunakan WikiProsessors?. Sebagai
contoh, pemroses yang digunakan untuk menulis halaman pada reStructuredText
atau HTML.
Wiki Markup                            Tampilan
                                                Contoh 1: HTML
{{{                                    ****** HTML Test ******
#!html
<h1 style="text-align: right; color:
blue">
 HTML Test
</h1>
}}}
                                      Contoh 2: Code Highlighting
{{{                                    class Test:
#!python                                   def __init__(self):
class Test:                                    print "Halo Pendekar"
                                       if __name__ == '__main__':
    def __init__(self):                   Test()
        print "Halo Pendekar"
if __name__ == '__main__':
   Test()
}}}
                                        Contoh 3: Complex Tables
{{{#!th rowspan=4 align=justify                              * daftar
Tambahan pemroses `#td` and `#th`,                           * tabel embedded
cell tabel bisa berisi konten apapun:                        * konten
}}}                                                            sederhana
|----------------                                              multiline
{{{#!td                                                  Sebagaimana pemroses
  - daftar                                               bisa dengan mudah
  - tabel embedded                                       dibuat hirarki
  - konten sederhana multiline         Tambahan pemroses kebawah (Koreksi)
}}}                                    #td and #th, cell Jadi bisa dibentuk
|----------------                      tabel bisa berisi sebagai tabel:
{{{#!td                                konten apapun:            Harus berada
Sebagaimana pemroses bisa dengan mudah                   Contoh: di level
dibuat hirarki kebawah (Koreksi)                                 ketiga...
Jadi bisa dibentuk sebagai tabel:                        Jika kamu tidak
  {{{#!th                                                memiliki marup yang
  Contoh:                                                rumit, form tabel ini
  }}}                                                    bisa jadi bentuk
  {{{#!td style="background: #eef"                       biasa untuk menulis
  || harus berada pada level ketiga...                   konten dalam beberapa
||                                                       baris.
  }}}
}}}
|----------------
{{{#!td
Jika kamu tidak memiliki marup yang
rumit,
form tabel ini bisa jadi bentuk biasa
untuk menulis konten dalam beberapa
baris.
}}}
Baca WikiProcessors untuk info lebih detail.
***** Komentar *****
Komentar dapat ditambahkan ke dalam teks biasa. Komentar tidak akan diproses
dan ditampilkan jika format selain teks biasa.
Wiki Markup           Tampilan
Tidak ada apapun
{{{                        Tidak ada
#!comment                  apapun
Tulis komentar disini      senyum ;-)
}}}
senyum ;-)
***** Lainnya *****
Sebuah garis mendatar bisa digunakan untuk membatasi bagian yang berbeda pada
halaman anda:
Wiki Markup                             Tampilan
Empat atau lebih strip (-) akan diganti Empat atau lebih strip (-) akan diganti
dengan                                  dengan menjadi garis datar (<HR>)
menjadi garis datar (<HR>)              =======================================
----                                    Seperti ini?
Seperti ini?
"macro" style [[br]] line break         "macro" style
                                        line break
                                        WikiCreole style
!WikiCreole style \\ line\\break        line
                                        break


