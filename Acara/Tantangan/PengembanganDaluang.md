# Tantangan BlankOn 2009 
## Pengembangan Daluang


**Pendahuluan**

Daluang adalah sebuah program untuk membaca Wikipedia tanpa memerlukan koneksi Internet. Hal ini dilakukan dengan cara membaca database Wikipedia lokal yang
telah diunduh sebelumnya.

Data dari Wikipedia yang dibaca oleh Daluang merupakan dokumen dengan format Wiki seperti yang digunakan oleh Wikipedia. Data tersebut akan ditampilkan
dalam sebuah peramban web (web browser) kecil yang menjadi bagian dari aplikasi Daluang. Karena peramban web membutuhkan dokumen dengan format HTML sedangkan
dokumen yang ada menggunakan format Wiki, maka perlu ada proses penerjemahan (parsing) dari format Wiki menjadi HTML.

Pada saat ini, parser yang tersedia dalam Daluang sudah cukup jika sekedar ingin menampilkan dokumen dalam bentuk Wiki, namun tetap belum lengkap. Sebagai
contoh, sintaks Wiki yang menyatakan sebuah template belum dapat diproses oleh Daluang. Selain itu, Daluang belum dapat menampilkan gambar walau berkas gambar
sudah tersedia. Fasilitas kategorisasi otomatis yang ada di Wikipedia juga belum bisa diproses oleh Daluang.

Lisensi ditetapkan berupa GPL versi 2.0.

Situs proyek: ​http://code.google.com/p/daluang/


**Tantangan**

Lengkapi parser yang ada sekarang sehingga Daluang dapat memproses template, menampilkan gambar, dan kategori.


**Persyaratan**

Peserta akan melakukan pemrograman dengan bahasa Python. Yang ingin menerima tantangan ini sudah harus memiliki kemampuan pemrograman dan berminat untuk
mempelajari bahasa Python jika belum pernah menggunakannya. Mentor bersedia membantu peserta dalam mempelajari bahasa Python jika peserta membutuhkannya.


**Kriteria Keberhasilan**

Berikut ini adalah tiga fitur yang ingin dibuat beserta bobot pengerjaannya.
   1. Daluang dapat menampilkan gambar (15%)
   2. Template sudah dapat diproses (50%), yang dibagi menjadi:
         1. Template sederhana beserta parameter (25%)
         2. Template bertingkat/template dalam template (25%)
   3. Kategorisasi dapat digunakan (35%)


**Peserta**
Peserta yang lolos seleksi adalah
  - Wisnu Priyambodo
  - Fathoni Arief Nugraha


