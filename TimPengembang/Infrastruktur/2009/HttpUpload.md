# Upload Melalui HTTP Secara Efisien
## HTTP Upload

#### Rancangan Diskusi Infrastruktur 2009


### Pendahuluan
Dokumen ini berisi usulan protokol upload melalui HTTP secara efisien. Yang
dimaksud dengan efisien di sini adalah jika proses upload terputus, maka proses
tersebut dapat dilanjutkan kapan saja. Proses pengecekan validitas data dengan
checksum tidak perlu dilakukan setelah seluruh data terkirim, karena setiap
data yang dikirim dilampiri dengan checksum sehingga dapat dipantau
validitasnya.

### Gambaran Umum
Pengiriman data dilakukan dengan cara memecah data menjadi sejumlah potongan
kecil lalu setiap potongan dikirimkan terpisah secara berurutan. Setiap
pengiriman potongan, checksum dari potongan tersebut juga dilampirkan sehingga
server dapat mengecek validitas potongan tersebut.

Proses upload dilakukan dalam dua tahap:
   1. Client memberitahu server bahwa client ingin melakukan upload. Client
      memberi informasi nama, ukuran, dan checksum data. Server akan membuatkan
      sebuah ID upload untuk sesi upload tersebut.
   2. Dengan menggunakan ID yang diberikan sebelumnya, client akan mengupload
      data dalam bentuk potongan-potongan kecil. Informasi panjang, lokasi
      (offset) pada data utuh, dan checksum dari potongan akan dilampirkan pada
      saat sebuah potongan di-upload.

### Protokol Pengirman

#### Permintaan Upload
Client mengirim sebuah HTTP POST Request ke sebuah URL pada path tertentu,
misalnya /upload/. Informasi berikut dikirimkan ke server pada request
tersebut.
   1. filename, nama berkas
   2. size, ukuran berkas
   3. checksum, checksum berkas
Server mencatat permintaan upload pada database, lalu membuat sebuah ID khusus
untuk sesi upload ini.
Server memberi respon 201 Created ke client dan memberi tahu lokasi (URL)
tujuan yang dapat digunakan untuk mengupload potongan. Lokasi upload ini berisi
informasi ID yang telah dibuat sebelumnya. Server memberitahu client akan
lokasi ini dengan cara menuliskannya pada HTTP Response Header Content-
Location.
HTTP/1.1 201 Created
Content-Location: /upload/ID/
...
#### Pengiriman Potongan
Setelah lokasi pengiriman potongan didapat, client memulai proses pengiriman
potongan data. Ukuran potongan dapat disesuaikan sesuai kebutuhan, misalnya
100KB.

Potongan dikirimkan dengan melakukan Multipart HTTP POST Request ke URL yang
diberikan oleh server pada tahap permintaan upload. Pada setiap request,
informasi berikut dikirimkan oleh client ke server.
   1. offset, lokasi potongan pada data utuh
   2. size, ukuran potongan
   3. checksum, checksum potongan
   4. data, data potongan

Server akan mengidentifikasi sesi upload melalui URL yang digunakan oleh
client. Untuk setiap sesi upload, selain informasi data yang dikirim pada tahap
permintaan upload, server juga mengetahui sudah seberapa besar data yang
diterima. Jika sesi upload gagal diidentifikasi oleh server, server mengirim
respon dengan kode 404 Not Found.

Informasi lokasi potongan (offset) yang dikirimkan harus sesuai dengan ukuran
data yang sudah diterima. Hal ini dilakukan agar urutan potongan tetap terjaga
dengan baik.

Data yang diterima oleh server akan dicek validitasnya dengan cara
membandingkan ukuran dan checksum data tersebut dengan informasi ukuran (size)
dan checksum yang dikirimkan.

Jika potongan dinyatakan valid, maka potongan tersebut akan ditambahkan pada
data yang akan menjadi data akhir yang utuh. Server akan memberikan respon 202
Accepted kepada client pada kondisi ini.

Jika seluruh data sudah diterima, server akan mengecek validitas data berdasar
checksumnya. Jika semua sesuai, server akan memproses data tersebut (seperti
memindahkannya ke tempat yang tepat) lalu memberikan respon 200 OK ke client.
Kondisi lain yang tidak sesuai harapan akan direspon oleh server dengan kode 409 Conflict.

### Catatan
Metode request atau kode respon belum tentu sesuai dengan tata cara penggunaan
yang benar yang didefinisikan oleh RFC 2616 (HTTP).

### Pengembangan Selanjutnya
   1. Otentikasi client.
   2. Informasi status upload (sudah seberapa besar data yang terkirim).
   3. Informasi ukuran, lokasi, dan checksum potongan dituliskan pada HTTP
      Request Header (Content-Length, Content-Range, Content-MD5)

### Contoh Implementasi
Dapat dilihat di ​http://github.com/fajran/test-django-chuck-upload/tree/
master.
Implementasi tersebut dibuat dengan Django.

### Referensi
   1. RFC 2616 (HTTP) ​http://www.w3.org/Protocols/rfc2616/rfc2616.html
Last modified on 12/03/2008 02:26:15 PM


 
---
 
