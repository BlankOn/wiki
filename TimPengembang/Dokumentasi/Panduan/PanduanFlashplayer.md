### Panduan Aksesoris
## Panduan Flashplayer

# Install Flashplayer pada Chromium
Sebelum memasang Plugin Flashplayer pada Browser silakan unduh terlebih dulu
“Adobe flash_player_11_linux.i386.tar.gz” di situs resmi Adobe di: ​http://
get.adobe.com/flashplayer/?no_redirect pilih yang “tar.gz for other linux” klik
tombol panah yang mengarah ke bawah pada “Select Version to download” untuk
bisa memilih jenis dan versinya
![](/raw-attachment/wiki/Dokumentasi/Panduan/Aksesoris/Flashplayer/1.install_Flashplayer.png)

Setelah proses pengunduhan selesai klik kanan pada berkas tersebut pilih
“Ekstrak Di Sini” masuk kedalam folder "install_flash_player_11_linux.i386"
yang telah Anda ekstrak tadi (nama folder “usr” dan berkas “libflashplayer.so)
kemudian Salin-Tempel Berkas dan folder yang ada di dalamnya ke “System Berkas/usr/lib/chromium-browser/plugins"

Jika mengalami kesulitan pada saat melakukan Salin-Tempel ke folder “Plugin”
kemungkinan besar Hak Akses pada folder tersebut hanya “Baca” untuk
mengatasinya lakukan langkah berikut, klik kanan folder plugin kemudian klik
Properti, klik Hak Akses dan dibagian Akses Berkas semua dipilih "Baca dan
Tulis".

Apabila hak akses folder tidak bisa diubah dengan cara seperti itu, Anda bisa
mengubahnya dengan menggunakan “Terminal” caranya; klik Menu Utama BlankOn -
>Aksesoris ->Terminal, kemudian ketik $ sudo chmod 777 /usr/lib/chromium-
browser/plugins masukkan kata sandi seperti yang Anda masukkan pada saat
melakukan Install BlankOn, baru Anda Salin-Tempel folder “usr” dan berkas
“libflashplayer.so” ke /usr/lib/chromium-browser/plugins
Setelah proses salin tempel selesai, kembalikan hak akses folder tersebut ke
posisi semula.

Cara lain agar kita bisa melakukan salin-tempel ke folder /usr/lib/chromium-
browser/plugins adalah dengan masuk sebagai root, lakukan langkah berikut, buka
terminal ketik $ gksu nautilus masukkan sandi root Anda, kemudian lakukan salin
tempel berkas “usr” dan berkas “libflashplayer.so” ke /usr/lib/chromium-
browser/plugins

Last modified on 12/25/2012 09:17:27 AM

#### Attachments (1)
   * 1.install_Flashplayer.png​ (52.5 KB) - added by imgos 4 years ago.

---
 
