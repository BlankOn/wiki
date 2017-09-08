# Pengaturan Internet Dial Up

## Pengaturan Koneksi Internet dengan Modem Dial Up
### Menggunakan Modem Telepon Seluler
   1. Ketikkan pada terminal :
`sudo wvdialconf`
     Ini digunakan untuk mendeteksi modem yang ada pada telepon seluler.
     Biasanya adalah ttyACMO
   1. Ketikkan pada terminal :
`sudo gedit /etc/wvdial.conf`
     Ini digunakan untuk mengisikan password dan username yang dibutuhkan
     untuk melakukan dial-up.
   1. Ganti isinya dengan :
> 
[Dialer Defaults]
Modem = /dev/ttyACM0
Baud = 57600
Init1 = ATZ
Init2 = ATQ0 V1 E1 S0=0 &C1 &D2
Init3 =
Area Code =
Phone = *99***1#
Username = [username]
Password = [password]
Ask Password = 0
Dial Command = ATDT
Stupid Mode = 1
Compuserve = 0
Force Address =
Idle Seconds = 300
!DialMessage1 =
!DialMessage2 =
ISDN = 0
Auto DNS = 1

     Jangan lupa untuk mengganti tulisan[username]dan [password]
     denganusernamedanpasswordyang diberikan oleh provider anda.
     Jika saat anda melakukan dial dan gagal, kemudian tertulis di layar
     telepon seluler anda Subscribe To Packet Data First, anda bisa
     mencoba untuk menambahkan +CGDCONT=,, pada Init2. Contoh :
Init2 = ATQ0 V1 E1 S0=0 &C1 &D2 +CGDCONT=,,

   1. Cobalah lakukan perintah sudo wvdial dan lakukanlah ping ke sebuah alamat
      http ataupun membuka sebuah halaman web untuk mengecek apakah anda sudah
      terkoneksi atau belum.

#### Menggunakan banyak ISP dalam koneksi wvdial
Silakan lihat ​bagaimana_membuat_konfigurasi_wvdial_dari_banyak_ISP
Last modified on 09/23/2008 08:19:32 PM

---
 



