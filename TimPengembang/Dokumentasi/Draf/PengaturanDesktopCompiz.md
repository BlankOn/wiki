# Pengaturan Desktop Compiz

## Desktop Compiz Fusion
BlankOn datang dengan Compiz Fusion yang sudah terinstall. Dalam beberapa kasus, Compiz membutuhkan driver untuk kartu grafis anda agar compiz 
berjalan dengan baik. Pastikan Anda telah memasang driver kartu grafis pada sistem.

Untuk mengaktifkan efek Desktop, silakan buka Menu-GNOME ke System > Preference > Apparance. Dalam tab desktop effect anda akan menemukan tiga 
pengaturan yaitu: None, Normal dan Ekstra. Untuk mengaktifkan compiz, pilih salah satu dari ke tiga pilihan tersebut.

Jika anda menginginkan pengaturan lebih pada pengaturan opsi compiz dan plugin, seperti desktop cube dan animations, pertama install paket konfigurasi 
compiz: `sudo apt-get install compizconfig-settings-manager`

Setelah itu anda dapat mengatur plugin dan opsi lanjut compiz yang terletak di System > Preferences > Advanced Desktop Effects Settings. Anda juga 
dapat menjalankan aplikasi ini dari terminal atau run dialog (ALT+F2) dengan perintah ccsm.

### Bagi Pengguna Kartu Grafis ATi
Beberapa katu grafis ATI terkadang membutuhkan driver propietary untuk menjalankan compiz, hal ini dikarenakan driver terbuka (open Source) radeon 
terkadang tidak secepat driver proprietary fglrx, sehingga jika menginginkan compiz berjalan dengan baik, Anda harus memasang driver proprietary. 
Berikut adalah petunjuknya:

   1. Setelah anda menasang drivernya, baik itu dari manajeman driver
      proprietary atau dari situs ATI, anda harus mengatur konfigurasi berkas
      xorg agar xorg dapat bekerja dengan diver terbaru anda. Buka termimal
      anda dan masukkan:
	```
	 sudo cp /etc/X11/xorg.conf /etc/X11/xorg.conf.bak
	sudo aticonfig --initial --input=/etc/X11/xorg.conf
	```   
   Tindakan tersebut akan menonaktifkan driver radeon default dan
      menggantinya dengan Driver ATI.

   2. Sekarang atur compiz agar melewatkan pngecekan tentang driver yang mereka
      blacklist:
      echo SKIP_CHECKS="yes" >> $HOME/.config/compiz/compiz-manager
      Cara alternatif anda dapat mengedit driver yang di percaya karena ini
      adalah cara yang lebih baik. Jalankan paerintah ini untuk mengubah
      skript-startup compiz:
      gksu gedit /usr/bin/compiz

      Cari Driver yang dipercaya dan masukkan fglrx kedalam barisnya, seperti
      ini:

      # Driver whitelist
      WHITELIST="nvidia intel ati radeon i810 fglrx"

   3. Matikan ulang komputer anda, kemudian login dan aktifkan compiz anda.

### Bagi Pengguna Kartu Grafis nVidia
Instalasi driver Kartu Grafis nVidia sangat mudah sekali hal ini di karenakan driver nvidia telah ada dalam repository. Buka terminal dan masukkan 
perintah: sudo apt-get install nvidia-glx-new nvidia-kernel-common Matikan ulang komputer anda, kemudian login dan aktifkan compiz.

Last modified on 09/23/2008 08:18:00 PM

---
 



