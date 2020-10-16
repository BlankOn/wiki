# Pengaturan Desktop Multimedia

## Pengaturan Multimedia
Untuk dapat membuka berkas multimedia anda dapat memasang paket blankon-multimedia
`sudo apt-get install blankon-multimedia`

### Bagaimana memasang Mplayer dengan codec multimedia
silakan lihat ​bagaimana_memasang_codec_multimedia_untuk_mplayer

### Bagaimana memasang VLC
Bagaimana memasang vlc
`sudo apt-get install vlc`

untuk membuang vlc
`sudo apt-get remove --purge vlc`

### Bagaimana memasang Banshee Music Manager dan Player
`sudo apt-get install banshee`

Untuk membuangnya:
`sudo apt-get --purge autoremove banshee`

### Bagaimana cara meng-encode/decode berkas audio
ogg adalah lisensi untuk format berkas audio, lebih baik anda menggunakanya
daripada berkas mp3 :D
`sudo apt-get install dir2ogg`

Penggunaanya:
   1. Siapkan direktori yang berisi berkas audio
   2. dalam kasus ini anda ingin mengubah semua berkas mp3 di direktori musik
      dan sub direktorinya. Dan anda ingin membuang berkas mp3nya
dir2ogg -dr musik/  --delete-mp3
     Anda juga dapat mengubah berkas wav ke dalam berkas rm dengan cara:
`mplayer -ao pcm:file=output.wav input.rm`

### Bagaimana meng-encode/decode berkas video
Beberapa aplikasi decorder/encoder adalah mencoder, avidemux, transcode, ffmpeg2theora, dll.
`sudo apt-get install mencoder avidemux transcode ffmpeg2theora`

### Mengubah berkas flv ke mpg
contoh file yang mau diubah adalah install-blankon.flv, maka caranya adalah:
`ffmpeg -i install-blankon.flv -y -sameq install-blankon.mpg`

### Bagaimana mengubah audio
```
sudo apt-get install lmms
sudo apt-get install audacity
```

### Bagaimana mengubah video
`sudo apt-get install ubuntustudio-video`

### Menambah Codec ekstra
Terkadang codec yang telah di pasang di komputer anda masih belum bisa untuk
memainkan berkas-berkas audio, alternatifnya anda harus memasang beberapa codec
multiverse
`sudo apt-get install gstreamer0.10-plugins-ugly gstreamer0.10-plugins-badgstreamer0.10-plugins-ugly-multiverse gstreamer0.10-plugins-bad-multiverse`

Last modified on 06/12/2008 03:04:41 AM

---
 



