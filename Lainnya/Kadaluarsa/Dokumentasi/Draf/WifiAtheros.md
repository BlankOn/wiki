# Atheros AR5007 EG
Device Atheros AR5007 oleh Blankon/Ubuntu terjadi kekeliruan dalam mengenali hardware dan terdeteksi sebagai : AR242x 802.11abg Wireless PCI Express 
Adapter. Langkah-langkahnya sebagai berikut :
   1. Klik menu System – Administrasi – Hardware Drivers, hilangkan tanda
      centang pada “Atheros Hardware Access Layer (HAL)”, lalu reboot.
   2. Buka terminal melalui Aplikasi – Aksesoris – Terminal. Ketik :`wget ​http://snapshots.madwifi.org/madwifi-hal-0.10.5.6/madwifi-hal-0.10.5.6- r3861-20080903.tar.gz`
   3. Install paket berikut dengan perintah :
      `$ sudo apt-get install build-essential`
   4. Jalankan langkah-langkah dibawah ini :
	```
      $ tar -zxvf madwifi-hal-0.10.5.6-r3861-20080903.tar.gz
      $ cd madwifi-hal-0.10.5.6-r3861-20080903/
      $ make
      $ sudo make install
      $ sudo modprobe ath_pci
	```
Setelah itu, edit file /etc/rc.local :
`$ sudo gedit /etc/rc.local`
Tambahkan di baris terakhir (sebelum baris "exit 0"), biar modul atheros bisa
dijalankan tiap system dimulai : modprobe ath_pci
`$ sudo reboot`

Silahkan mencobanya ....
Kalau lednya belum bisa nyala (seperti di Aspire 4520 dan saudaranya) bisa
melakukan langkah seperti ini :
`$ sudo gedit /etc/sysctl.conf`

Tambahkan baris di bawah ini :

>
dev.wifi0.ledpin=3
dev.wifi0.softled=1
Restart dan lihat lednya

Dokumen aseli ada di ​http://dev.blankonlinux.or.id/wiki/Instalasi/WifiAtheros
Last modified on 09/25/2008 06:55:02 AM

---
 



