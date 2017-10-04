# Tata Laksana Daya

* Pemateri : Mohammad Dhani Anwari (mdamt)
* Didokumentasikan oleh : Akhmat Safrudin (somat) 

Hal yang ingin dicapai adalah pemanfaatan daya seminimal mungkin. Kalau ada suatu komponen tidak perlu makan listrik ya tidak usah disuruh makan listrik, itu adalah konsep yang harus dipegang. Suatu kode akan makan listrik kalau kodenya dijalanin prosesor, kode tersebut ada di dalam program.

Linux adalah sistem operasi yang multitasking pak, kalau Bapak2 belum baca koran tadi pagi, Jadi bisa ada lebih dari 1 program yang jalan, termasuk kernel itu sendiri.

Di bidang sistem operasi ada topik namanya "++penjadwalan++" (scheduling). Di bidang tsb dibahas gimana caranya supaya program - program yang jalan itu bisa maksimal dijalaninnya, artinya tidak boleh ada 1 program yang dizolimi haknya oleh program lain.

Dalam kondisi biasa - biasa saja, itu semua program yang ada dijalankan satu persatu oleh si kernel, dan semuanya diberi waktu sesuai jadwal. Itu si kernel jalanin kode dalam program A selama x ns trus pindah ke program B selama x ns trus pindah ke program C selama x ns dst. Pindah2 nya itu cepat sekali sehingga seakan2 dalam mata manusia semua program itu jalan barengan. Pindah2 itu namanya context switching.
```
Pertanyaan :

  <aftian> mdamt : apakah ini hanya berlaku di kernel linux atau di kernel yang lain pak?
  <mdamt> aftian: Di kernel lain metodenya lain2 pak tapi konsepnya sama itu si context switching
```
Saat pindah2nya itu kode yang dijalankan belum tentu sudah selesai. Kalau bapak ketik "w" atau "top" di situ ada beban sistem. Terdapat 3 angka yang merupakan beban prosesor dalam jangka 1, 5, dan 15 menit, angka itu menunjukkan berapa proses dalam 1 menit si cpu mesti pindah2. Kalau bebannya kecil, misale di bawah 1.0 berarti cpunya santai, kalau angkanya 1 berarti dalam 1 menit si cpu sibuk sama 1 proses itu saja, kalau angkanya 1.0 berarti ibaratnya si CPU tidak pindah2 karena sibuuk saja ngurusin 1 orang. (padahal pada kenyataannya pindah2 pak, tapi saking sibuknya sehingga secara statistik dianggap 1).
```
Pertanyaan :

  <aftian> ada hubungannya sama RAm ndak pak?
  <mdamt> aftian: Tidak ada pak
  <mdamt> Ini murni CPU
```
Proses yang ditangani oleh CPU itu hanya proses2 yang tidak tidur pak, kalau Bapak ketik "ps auxw" itu banyak sekali proses2 yang "katanya" jalan, padahal tidak, banyak yang sedang tidur.

Lihat di kolom stat, ada apa saja pak?
```
Jawaban dari Haris :

  <princeofgiri> S
  <princeofgiri> sl
  <princeofgiri> Ss
  <princeofgiri> SNl
  <princeofgiri> R+
  ```

Nah itu kode2 yang menandakan status proses2, S itu sleeping, R itu running, kode huruf kecil berikutnya menandakan kode lain. Kalau ada kode pakai < berarti itu dia prioritas tinggi, kalau ada kode pakai N berarti itu dia prioritas rendah. Kalau prioritas tinggi, saat context switching mereka akan didahulukan untuk diolah CPU. Kalau prioritas tinggi, saat context switching mereka diolah CPU kalau sempat. l kecil itu artine thread, s kecil artine session leader, artine kalau dia dibunuh maka program2 yang dijalankan oleh dia akan juga dibunuh, dst.

Nah jadi pada hakikatnya si kernel cuma melihat yang R saja pak, Nah kembali ke topik, yang makan listrik itu yang R itu pak.
