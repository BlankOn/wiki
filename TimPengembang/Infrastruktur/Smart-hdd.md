# SMART HDD
    * Infrastruktur  /
    * Monitor  /
    * Smart-hdd

Sebagai tindakan pencegahan, kita juga harus mengawasi kesehatan harddisk. Hal
ini dapat dilakukan dengan menggunakan bantuan S.M.A.R.T.
Di Linux debian-based, kita bisa menggunakan paket smartmontools.
Install paket smartmontools
$sudo apt-get install smartmontools
Edit /etc/default/smartmontools Hapus pagar di start_smartd=yes sehingga
menjadi
...
start_smartd=yes
...
Masukkan semua harddisk yang ada ke /etc/smartd.conf Jangan lupa beri pagar
pada baris "DEVICESCAN -m root -M exec /usr/share/smartmontools/smartd-runner"
Sehingga menjadi
...
#DEVICESCAN -m root -M exec /usr/share/smartmontools/smartd-runner
/dev/sda -m namaadmin@domain.tld
/dev/sdb -m namaadmin@domain.tld
/dev/sdc -m namaadmin@domain.tld
...
Setelah itu dijalankan layanan peladen smartmontools
$sudo /etc/init.d/smartmontools start
Last modified on 01/01/2012 10:56:14 PM
#### 
    
 
 
 
 
 
---
 
