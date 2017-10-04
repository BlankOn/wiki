# Pengaturan Desktop Internet

## Internet
### Bagaimana memasang penjelajah Opera
Opera adalah alternatif browser selain firefox, selain itu opera juga dikenal cepat dan stabil. Untuk instalasinya Anda harus menambahkan repository 
Canonical
`gksudo gedit /etc/apt/sources.list`

Tambah baris berikut di akhir berkas

	# Repository Canonical
	deb http://archive.canonical.com gutsy partner

Simpan berkas sources.list anda, dan masukkan perintah

```
sudo apt-get update
sudo apt-get install opera
```
### Bagaimana memasang penjelajah Epiphany
Ephiphany adalah penjelajah web yang diintergrasikan dalam dektop Gnome yang menawarkan kemudahan dan kompabilitas. Epipany merupakan penjelajah web 
yang dikembangkan dari mesin penjelajah firefox. Berikut adalah cara instalasinya: `sudo apt-get install epiphany-browser`

### Plugin Browser
BlankOn secara otomatis memasang plugin yang diperlukan oleh browser saat browser mengunjung situs (dengan Firefox), namun jika anda menginginkan 
untuk memasang plugin secara manual, ikuti perintah berikut dalam terminal

#### Plugin Java
`sudo apt-get install sun-java6-plugin`

#### Plugin Flash
`sudo apt-get install flashplugin-nonfree`

Atau jika anda mengingindan dukungan plugin flash yang open source:
`sudo apt-get install mozilla-plugin-gnash`

#### Plugin VLC
`sudo apt-get install mozilla-plugin-vlc`

#### Plugin MPlayer
`sudo apt-get install mozilla-mplayer`

#### Plugin Real Player
`sudo apt-get install mozilla-helix-player`

#### Plugin Kaffeine
`sudo apt-get install kaffeine-mozilla`

#### Plugin pembesaran citra
Berguna untuk membesarkan gambar dalam halaman
`sudo apt-get install mozilla-imagezoom`

#### Plugin adblock
Berguna untuk mencegah ads dalam halaman web
`sudo apt-get install mozilla-firefox-adblock`

### Manajemen Pengunduhan (Downloader untuk X)
Untuk memasang Downloader for x ketikkan dalam terminal:
`sudo apt-get install d4x`

### Klien FTP (FileZilla)
FileZilla adalah aplikasi klien ftp yang dengan tampilan grafis. FileZilla adalah aplikasi yang dapat berjalan dalam multi platform dan juga terdapat 
dalam repositori Ubuntu.

Untuk memasang klien ftp FileZilla ketikkan dalam terminal
`sudo apt-get install filezilla`

Last modified on 06/07/2008 01:26:07 AM

---
 



