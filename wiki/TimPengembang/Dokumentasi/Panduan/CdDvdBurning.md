# CdDvdBurning
## Perekaman CD/DVD
### Bagaimana mengosongkan CD-RW/DVD-RW
  * Baca Notes
  Diasumsikan bahwa lokasi dari CD/DVD-ROM adalah /dev/cdrom

```
 sudo umount /dev/cdrom
 cdrecord dev=/dev/cdrom blank=fast
```

### Bagaimana merekam berkas/map ke CD/DVD
   * Baca Notes
          Tempat -> Pembuat CD/DVD
   * Tarik berkas/map ke jendela
          Menu Berkas -> Rekam ke CD... -> Tulis

### Bagaimana merekam berkas-berkas Image (ISO) ke CD/DVD
   * Baca Notes
    Klik kanan pada berkas Image (ISO) file -> Rekam ke CD... -> Tulis

### Bagaimana menggandakan CD/DVD
   * Baca Notes
   * Baca membuat berkas-berkas Image (ISO) dari CD/DVD
   * Baca merekam berkas-berkas Image (ISO) ke CD/DVD

### Bagaimana membuat berkas-berkas Image (ISO) dari CD/DVD
   * Baca Notes
     Diasumsikan bahwa lokasi dari CD/DVD-ROM adalah /dev/cdrom

```
sudo umount /dev/cdrom
readcd dev=/dev/cdrom f=file.iso
```

   Anda juga dapat menggunakan perintah Linux embedded
`dd if=/dev/cdrom of=file.iso`

### Bagaimana membuat berkas-berkas Image (ISO) dari map-map
   * Baca Notes
`mkisofs -r -o file.iso /location_of_folder/`

### Bagaimana membangkitkan berkas-berkas checksum MD5
   * Baca Notes
`md5sum file.iso > file.iso.md5`

### Bagaimana memeriksa checksum MD5 dari berkas-berkas
   * Baca Notes
     Diasumsikan bahwa file.iso dan file.iso.md5 berada di folder yang sama

`md5sum -c file.iso.md5`

### Bagaimana mount/unmount berkas-berkas Image (ISO) tanpa perekaman
   * Baca Notes
   * Untuk mount berkas Image (ISO)

```
sudo mkdir /media/iso
sudo modprobe loop
sudo mount file.iso /media/iso/ -t iso9660 -o loop
```

   * Untuk unmount berkas Image (ISO)
`sudo umount /media/iso/`

   * Jika Anda ingin mount/unmount image ISO anda dengan klik kanan pada icon, lakukan dari folder rumah:

```
cd .gnome2/nautilus-scripts/
gedit Mount
``` 

Salin skrip berikut ke dalam berkas Mount


```
#!/bin/bash
#
for I in "$ * "
do
foo=`gksudo -u root -k -m "Enter your password for root terminal access" /bin/echo "got r00t?"`
sudo mkdir /media/"$I"
sudo mount -o loop -t iso9660 "$I" /media/"$I" && nautilus /media/"$I" --no-
desktop
done
done
exit0
```

Simpan dan tutup, lalu lakukan hal yang sama pada berkas Unmount:

`gedit Unmount`

Salin berkas berikut ke berkas Unmount
```
#!/bin/bash 
# 
for I in "$ * " 
do 
foo=`gksudo -u root -k -m "Enter your password for root terminal access" /bin/echo "got r00t?"` 
sudo umount "$I" && zenity --info --text "Successfully unmounted /media/$I/" && \{\{\{
sudo rmdir "/media/$I/" 
done 
done 
exit0
```


Ubah berkas-berkas di atas menjadi dapat-dieksekusi (executable) dengan:

```
chmod +x Mount
chmod +x Unmount
```

Atau dengan sebuah alat bantu grafis, di terminal:
`sudo apt-get install gisomount`

di terminal (juga), untuk menjalankan alat bantu di atas:
`sudo gisomount`

### Bagaiman set/ganti kecepatan rekam dari Alat Perekam CD/DVD
   * Baca Notes
   * Aplikasi -> Peralatan Sistem -> Editor Konfigurasi
   * Editor Konfigurasi
          / -> apps -> nautilus-cd-burner -> default_speed (set/ganti
          kecepatan rekam)

### Bagiamana membolehkan opsi burnproof untuk Alat Rekam CD/DVD
   * Baca Notes
   * Aplikasi -> Peralatan Sistem -> Editor Konfigurasi
   * Editor Konfigurasi
          / -> apps -> nautilus-cd-burner -> burnproof (centang)

### Bagiamana membolehkan opsi overburn untuk Alat Rekam CD/DVD
   * Baca Notes
   * Aplikasi -> Peralatan Sistem -> Editor Konfigurasi
   * Editor Konfigurasi
          / -> apps -> nautilus-cd-burner -> overburn (centang)

### Bagaimana menginstal K3b
   * Baca Notes
   * Baca to add extra repositories
`sudo aptitude install k3b`

### Bagiaman menginstal dukungan MP3 untuk K3b
`sudo aptitude install libk3b2-mp3`

### Bagiamana merekam .img Image DVD
Pertama, instal paket udftools:
`sudo aptitude install udftools`

Berikut adalah cara baris perintah untuk perekaman image .img ke sebuah DVD:
`growisofs -Z /dev/dvd=full_path_to_mydvd.img`

terakhir disunting 2007-08-13 16:20:57 oleh SihabulMilah

Last modified on 06/12/2008 11:43:26 AM
 
---
 
