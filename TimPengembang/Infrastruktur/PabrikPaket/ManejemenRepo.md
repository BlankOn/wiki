# ManajemenRepo

Untuk Mengaktifkan aplikasi reprepro irgsh di pabrik paket.
   1. Masuk Ke yeyen
   2. silahkan ubah ke user irgsh
   `sudo su - irgsh`
   1. Masuk ke Directory irgsh-repo
   `cd irgsh-repo`
   1. Lakukan Perintah
   `nohup ../bin/python2.6 ./irgsh-repo.py >> log 2>&1`

**Catatan :**

fg = foreground
bg = background
Ctrl-z akan mengirim sinyal SIGSTOP ke aplikasi yang jalan di konsol saat itu
Kernel kemudian bilang ke aplikasi, HEY Kau berhenti dulu!

Trus kendali dikembalikan ke prompt shell
Trus Bapak ada 3 pilihan:
0- Mau meneruskan aplikasi yang tadi distop
1- Mau meneruskan aplikasi yang tadi distop, tapi tetap bisa pakai terminal
2- Mau melakukan sesuatu di terminal, misalnya cat /berkas/lain atau njalanin
program lain, dst

Kalau pilih 0, berarti kita ingin aplikasi tsb jalan lagi, caranya tullis fg
bash akan meminta kernel untuk jalankan program tadi

Kalau pilih 1, berarti kita ingin aplikasi tsb jalan lagi, caranya tullis bg
artinya si aplikasi jalan di belakang layar, sementara kita bisa pakai terminal

Kalau pilih 2, ya wis Bapak terserah mau ngapain lagi, tapi nanti sesudahnya
kembali ke pilihan 0 atau 1

Kalau tidak si aplikasi statusnya jadi zombie, ada di RAM tapi tidak jalan dan
tidak mati

Refrensi : ​http://tempel.blankon.in/417

Last modified on 01/31/2011 06:02:20 PM


---
 
