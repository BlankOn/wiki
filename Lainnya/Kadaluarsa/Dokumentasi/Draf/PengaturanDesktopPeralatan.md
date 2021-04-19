# Pengaturan Desktop Peralatan

## Aplikasi Peralatan Lain
### Aplikasi peralatan pemampatan

Selain zip, gzip dan bzip2 terdapat peralatan pemampatan yang sering di gunakan yaitu ​p7zip dan ​rar. 7zip adalah aplikasi open source sedangkan rar 
tidak.

```
sudo apt-get install rar unrar
sudo apt-get install p7zip-full
sudo apt-get install unace
```

ada lagi aplikasi yang digunakan oleh desktop kde yang mendukung beberapa
format, yaitu ark termasuk rar. Pemasanganya adalah sebagi berikut:
`sudo apt-get install ark`

### Clipboard Manager (Glipper)
`sudo apt-get install glipper`

### Password Manager (KeePassX)
Berguna untuk manajemen kata-sandi
`sudo apt-get install keepassx`

### Bagaimana memasang Google Earth
Google Earth adalah aplikasi yang digunakan untuk mapping dunia. Silakan lihat
​halaman_resminya untuk info lebih lanjut.

Google Earth terdapat dalam arsip paket Medibuntu. Untuk memasang Google Earth
dari Medibuntu caranya adalah sebagi berikut:

```
echo "deb http://packages.medibuntu.org/ gutsy free non-free" | sudo tee -a /etc/apt/sources.list
wget -q http://packages.medibuntu.org/medibuntu-key.gpg -O- | sudo apt-key add-
sudo apt-get update
sudo aptitude install googleearth
```

Cara lainya adalah anda dapat memasang Google Earth dari Google Installer,
dengan cara mengunduh Google Earth installer dan lakukan perintah berikut:

```
chmod +x Desktop/GoogleEarthLinux.bin
sudo Desktop/GoogleEarthLinux.bin
Untuk membuang Google Earth caranya adalah sebagai berikut:
sudo su
/opt/google-earth/uninstall
```

### Bagaimana menginstal Picasa image organizer
Picassa adalah aplikasi untuk memudahkan anda mengelola foto, baik itu dicetak, diubah, diposting dalam blog anda atau diupload ke dalam google 
photo. Cara pemasangan Picasa adalah sebagai berikut: `gksudo gedit /etc/apt/sources.list`
Tambah baris berikut di akhir berkas

	\# Repository untuk Google Picasa

	deb http://dl.google.com/linux/deb/ stable non-free

Simpan berkas yang telah disunting
```
sudo apt-get update
sudo apt-get install picasa
```
Lihat juga ​panduan_pemasangan_picassa_dengan_tangkapan_layar

### Bagaimana Memasang Google Desktop
Google Desktop adalah aplikasi pencarian yang memberikan kemudian untuk mengakses informasi dalam komputer anda dan dari internet. Google Desktop 
membantu anda dalam melakukan pencarian surat elektronik, berkas, musik, foto, dan lainya semudah anda melakukan pencarian dengan Google. Untuk 
Pemasanganya adalah sebagai berikut: `gksudo gedit /etc/apt/sources.list`

Tambah baris berikut di akhir berkas  Repository untuk Google Picasa
	deb http://dl.google.com/linux/deb/ stable non-free

Simpan berkas yang telah disunting

```
sudo apt-get update
sudo apt-get install google-desktop
```

### Bagaimana cara memasang Zekr
Zekr adalah aplikasi open source yang di gunakan untuk pembelajaran Al-Quran dan Pembacaan Al-Quran. Untuk pemasangan zekr caranya adalah sebagai 
berikut:

   * tambahkan repository zekr di /etc/apt/sources.list
     deb http://ppa.launchpad.net/zekr/ubuntu hardy main
   * perbaharui database paket
     `sudo apt-get update`
   * install paket-paket yang dibutuhkan
	```
 	sudo apt-get install zekr ttf-me-quran ttf-sil-scheherazade
     	sudo apt-get install ttf-farsiweb flashplugin-nonfree
	```

Zekr juga terdapat terjemahan dalam beberapa bahasa, untuk instalasi dukungan bahasa zekr ketikkan

```
apt-get install zekr-quran-translations
apt-get install zekr-quran-translations-id
```
Last modified on 09/13/2008 08:12:01 AM


---
 



