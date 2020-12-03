# Setting Modem Haier

HP Modem Haier secara default belum bisa digunakan langsungpakai di Ombilin, namun dengan langkah-langkah tambahan ini maka HP modem ini bisa 
digunakan lewat nm-applet seperti modem yang telah didukung,

    * buka terminal : Aplikasi > Aksesoris > Terminal
    * ketik pada jendela terminal : lsusb
    * muncul daftar alamat perangkat yang terpasang pada usb, diantaranya : Bus 002 Device 002: ID 05c6:9004 Qualcomm, Inc.
    * nah itu artinya jika kita akan melakukan modprobe maka : vendor=0x05c6 dan product=0x9004
    * ketik di terminal : modprobe usbserial vendor=0x05c6 product=0x9004
maka modem anda sudah bisa digunakan di nm-applet (kanan atas ada ikon 2 komputer)
Last modified on 05/30/2010 02:08:37 PM

---
 



