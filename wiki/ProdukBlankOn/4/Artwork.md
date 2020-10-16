# Kesenian BlankOn 4 Meuligoe

Sesuai dengan hasil rapat tim Artis maka unsur warna yang digunakan pada _artwork_ Meuligoe adalah Hijau, dengan variasi hitam. Daftar hal-hal yang berbau tim kesenian dan siap dipasang (_fixed_) di distro dapat ditemukan di http://dev.blankonlinux.or.id/wiki/Artwork/Meuligoe .

##Logo Baru
![](http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/logo-flat.png)
![](http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/logo-glassy.png)
[​logo-blankon-flat.svg](http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/logo-blankon-flat.svg)
[logo-blankon-glassy.svg](http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/logo-blankon-glassy.svg)

## Boot Menu Logo

Ditangani Oleh : Ahmad Haris

_Background_ Hijau oleh Ali Kusnadi denga lisensi CC

Boot Menu Logo adalah logo yang muncul ketika kita disuruh menekan tombol enter waktu menggunakan liveCD.

Ukuran 640 x 320. Format .png dan .pcx.
![](http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/boot-menu-logo-640x480.png)
[.pcx donwload](http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/boot-menu-logo.pcx)
​[.svg donwload](http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/boot-menu-logo.svg)

## Ubiquity Logo

Ditangani Oleh : Ahmad Haris

![](http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/ubiquity.png)[ubiquity.png]

[​.svg download](http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/logo-ubiquity.svg)

## Usplash
Ditangani Oleh : Ahmad Haris

Background Hijau oleh Ali Kusnadi dengan lisensi CC

Usplash atau user splash atau boot screen adalah tampilan grafis yang ditampilkan saat sistem operasi diload setelah grub.

**Langkah-langkah _ngetengin_ usplash :**
  1. Buatlah folder usplash di home Anda, terus unduh file ini disana, kemudian unzip :
       [Download](http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/usplash.zip)

  2. Buatlah berbagai gambar dengan menggunakan Gimp. Buatlah dengan berbagai resolusi (640x480, 1024x768, 1200x900, dan lain-lain), kemudian jadikan maksimal 256 warna indexed. 16-64 adalah batas yang normal dengan kemungkinan berhasil yang tinggi. Bagaimana untuk membuatnya _indexed_? Buka dengan Gimp, klik **Image** > **Mode** >**Indexed**, kemudaian atur warna.

  3. Simpan gambar kedalam folder usplash, beri nama usplash.png.

  4. Buka Terminal, ketik:
>cd usplash/
pngtousplash usplash.png > usplash.c
pngtousplash throbber_back.png > throbber_back.c
pngtousplash throbber_fore.png > throbber_fore.c

  5. Kompail dari .c jadi .o
> gcc -g -Wall -fPIC -o usplash.o -c usplash.c
gcc -g -Wall -fPIC -o throbber_back.o -c throbber_back.c
gcc -g -Wall -fPIC -o throbber_fore.o -c throbber_fore.c
gcc -g -Wall -fPIC -o usplash-theme.o -c usplash-theme.c

  6. Kompail dia jadi sered librari
> gcc -g -Wall -fPIC -shared -o usplash.so *.o

  7. Kalau sudah selesai, saatnya dites. Anda bisa memilih, menggunakan cara laki-laki sejati atau cara enak. Cara enak, pasang startup
       manager di box anda. Cara laki-laki sejati, timpa saja file root-live/usr/lib/usplash/usplash-artwork.so dan initrd/usr/lib/usplash/usplash-artwork.so

   (http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/usplash.png][usplash.png]

   (http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/usplash.svg)[.svg donwload]

## GDM

   Diambil Alih oleh Blek

   GDM juga dikenal dengan _login window_. Untuk hasil yang maksimal pada _login window_, ada beberapa hal yang perlu diperhatikan :
   1. Usahakan menggunakan gambar yang abstrak sebagai background.
       Misalnya motif batik. Jangan menggunakan gambar rangka (misalnya: orang, binatang). Hal ini dapat membuat fokus user akan pecah antara gambar tersebut dan _loginbox_.

   2. Hindari menaruh logo pada _background image_ karena jika resolusi monitor beda dengan gambar, maka gambar akan _ketarik_. ALternatif, masukkanlah logo pada _loginbox_.

### GDM Biasa

**Kinca**

![kincaprev.png](http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/kincaprev.png)
[Unduh](http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/kinca.tar.gz)

#### GDM Minimalis

**Sangadi**
![gdm minimalis screen shoot](http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/sangadi-gdm-minimalis.png)

[Unduh](http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/sangadi.tar.gz)

## Session Splash
Ditangani Oleh : Ahmad Haris

Session Splach adalah splash screen kecil yang ditampilkan setelah user login untuk menunjukkan kegiatan loading aplikasi yang ikut diload saat sesi. Ukurannya adalah diatas 580 x 172 dengan maksimal batas 640x480. Sampel dapat Anda lihat di /usr/share/pixmaps/splash

 (http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/gnome-splash-h
   aris.png][gnome-splash-haris.png]

   (http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/g
   nome-splash.svg]​Donlot tema ini

## Tema (gtk)

   Ditangani Oleh : Blek

  + **Tema Biasa**
    **Jao**
![jao-preview.png](http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/jao-preview.png)

[Unduh](http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/jao-theme.tar.gz)

  + **Tema Minimalis**
    **Menggunakan Tema Gulali**
  [http://dev.blankonlinux.or.id/ticket/28](http://dev.blankonlinux.or.id/ticket/28) yang disempurnakan.

![gulali-skrinsut.png](http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/gulali-skrinsut.png)

 Tester bisa ngunduh langsung lewat :
 http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/Gulali-Hitam1.0.tar.gz

## Ikon
Diambil alih oleh Blek
**Rae**
[](http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/raeprev.jpg)[Rae Prev]

[Unduh](http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/rae.tar.gz)

## Wallpaper
Ditangani Oleh : Setan_666

Untuk wallpaper, harap memperhatikan hal-hal berikut :
  1. Hindari menggunakan gradiasi yang berlebihan atau berat. Untuk minimalis, tanpa_gradiasi adalah wajib.

  2. Hindari garis-garis yang jelas. Samakan warna garis dengan tone atau gambar latar atau gambar di sebelahnya.

  3. Hindari perbedaan 2 warna bersisian yang signifikan

  4. Jika anda terpaksa atau harus melanggar poin 1 sampai 3, lakukan pada sisi kanan dari gambar menurut sudut pandang anda agar tidak mengganggu ikon di sebelah kiri.

  5. Usahakan wallpaper dalam bentuk vektor, minimal ada bentuk vektornya.

  6. Tiap-tiap wallpaper dibuat dalam 2 ukuran, yaitu normal dan widescreen. Jangan ada stretch.

### **Wallpaper Biasa**

  Source:http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/BlankOn-grafis-setan_666.svg

  * **Rumah (beta)**
    ![download wallpaper rumah-normal size](http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligo     e/WallPaper_rumah_setan666_normal.png)
     ![Download wallpaper rumah-widescreen](http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/WallPaper_rumah_setan666_wide.png)

     ![](http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/wall_rumah_prev.png)[Wallpaper rumah-upgrade]

  * **Rumah (usulan - Blek)**

     Source: http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligo
     e/rumah.svg

     ![](http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/rumah_1280x1024.png)[Normal]

     (http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/rumah_1600x1000.png]​Widescreen

### Wallpaper Minimalis
Source wallpaper TariSaman: http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/WallpaperSaman-setan_666.svg 

  * Tari Saman (normal)
     ![](http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/WallSaman_setan666-normal.png)[download wallpaper-normal size]
![](http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/WallSaman_setan666-wide.png)[download wallpaper-wide screen]
    ![](http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/WallSaman_setan666_.png)[WallSaman_setan666_.png]

## OO Splash

   Ditangani Oleh : Ahmad Haris

   Open Office splash screen

   (http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/openintro_meuligoe.png][openintro_meuligoe.png]

   (http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/openabout_meuligoe.png][openabout_meuligoe.png]

## Gimp Splash
Ditangani Oleh : Setan_666

Gimp Splash Screen Ukuran optimal untuk BlankOn adalah 300x350 pixel. Sampel bisa dilihat pada /usr/share/gimp/2.0/images

(http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/gimpSplash.svg]​source Gimp-splash

![](http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/gimp-splash.png)[GIMP-Splash Meuligoe]

## Sound

Suara untuk login dan logout, dan lain-lain. Format suara adalah wav. Usahakan stereo dan stereonya _maen_, bukan sekedar nyala dua spiker, tapi berlari antara spiker kanan dan kiri. Ngefek, gitu...

## Konten Sampel

Berupa konten yang disertakan pada folder sampel. Terdiri dari :
  * Template Presentasi, yaitu template yang berisi presentasi default tentang BlankOn. Isi bisa diambil dari situs resmi; http://dev.blankonlinux.or.id/wiki/BlankOn]BlankOn .

## Sampul CD
Diambil alih blek dari hasil kerja hampir sempurna Setan_666

Sampul CD adalah desain dari sampul yang digunakan untuk membungkus CD/DVD BlankOn.

Source: http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/sampul-stiker-cd-dvd-meulioge.tar.gz

![](http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/sampulCD_tb.png)[sampul CD Meuligoe]

[Unduh](http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/oo-sampul-dan-stiker-cd-dvd.odg)

## Stiker CD
Diambil alih blek dari hasil kerja hampir sempurna Setan_666

Stiker CD adalah stiker yang ditempel di media CD. Harap diperhatikan, sampul CD tidak sama dengan stiker CD.

![](http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/sticker_CD_tb.png)[sticker CD meuligoe]

[Unduh](http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/sampul_cd_meuligoe.svg.tar.gz)

## Musik atau sampel suara
Saat ini kita masi berkutat di Laluna, kecuali ada diantara tim kesenian yang mau sumbang suara.

## File-file OO lainnya
Ditangani oleh blek

Misalnya persamaan matematik, dll.

Ambil, lihat, upload, dlsb di sini:

[Konten sample](http://dev.blankonlinux.or.id/wiki/Artwork/SampelKontent)


## Attachments (81)

* http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/rumah.jpg
* rumah.jpg: http://dev.blankonlinux.or.id/raw-attachment/wiki/Artwork/MenujuMeulig oe/rumah.jpg (51.7 KB) - added by blaxnux 9 years ago.
* (http://dev.blankonlinux.or.id/raw-attachment/wiki/Artwork/MenujuMeuligoe/jao-preview.png (345.0 KB) - added by blaxnux 9 years ago.
* (http://dev.blankonlinux.or.id/raw-attachment/wiki/Artwork/MenujuMeuligoe/rajah-preview.png] (326.2 KB) - added by ahmadharis 9 years ago.
     * (http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/rajah-prev
       iew.jpg]rajah-preview.jpg(http://dev.blankonlinux.or.id/raw-attachment/wiki/Artw
       ork/MenujuMeuligoe/rajah-preview.jpg]​ (60.9 KB) - added by
       ahmadharis 9 years ago.
     * (http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/rajah-gdm-
       meuligoe.tar.gz]rajah-gdm-meuligoe.tar.gz(http://dev.blankonlinux.or.id/raw-atta
       chment/wiki/Artwork/MenujuMeuligoe/rajah-gdm-meuligoe.tar.gz]​
       (489.3 KB) - added by ahmadharis 9 years ago.
     * (http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/gdm-meulig
       oe.svg]gdm-meuligoe.svg(http://dev.blankonlinux.or.id/raw-attachment/wiki/Artwor
       k/MenujuMeuligoe/gdm-meuligoe.svg]​ (252.7 KB) - added by
       ahmadharis 9 years ago. "sors gdm meuligoe"
     * (http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/gdm-minima
       lis-meuligoe.jpg]gdm-minimalis-meuligoe.jpg(http://dev.blankonlinux.or.id/raw-at
       tachment/wiki/Artwork/MenujuMeuligoe/gdm-minimalis-meuligoe.jpg]​
       (55.7 KB) - added by ahmadharis 9 years ago.
     * (http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/pinto.svg]
       pinto.svg(http://dev.blankonlinux.or.id/raw-attachment/wiki/Artwork/MenujuMeulig
       oe/pinto.svg]​ (221.9 KB) - added by ahmadharis 9 years ago.
     * (http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/gdm-minima
       lis-meuligoe.tar.gz]gdm-minimalis-meuligoe.tar.gz(http://dev.blankonlinux.or.id/
       raw-attachment/wiki/Artwork/MenujuMeuligoe/gdm-minimalis-meuligoe.t
       ar.gz]​ (231.2 KB) - added by ahmadharis 9 years ago.
     * (http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/roof-scree
       nshot.jpg]roof-screenshot.jpg(http://dev.blankonlinux.or.id/raw-attachment/wiki/
       Artwork/MenujuMeuligoe/roof-screenshot.jpg]​ (50.7 KB) - added by
       ahmadharis 9 years ago.
     * (http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/HardGreen.
       tar.gz]HardGreen.tar.gz(http://dev.blankonlinux.or.id/raw-attachment/wiki/Artwor
       k/MenujuMeuligoe/HardGreen.tar.gz]​ (596.6 KB) - added by
       ahmadharis 9 years ago.
     * (http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/gimp-splas
       h.png]gimp-splash.png(http://dev.blankonlinux.or.id/raw-attachment/wiki/Artwork/
       MenujuMeuligoe/gimp-splash.png]​ (64.9 KB) - added by setan_666 9
       years ago. "GIMP-Splash Meuligoe"
     * (http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/gimpSplash
       .svg]gimpSplash.svg(http://dev.blankonlinux.or.id/raw-attachment/wiki/Artwork/Me
       nujuMeuligoe/gimpSplash.svg]​ (218.4 KB) - added by setan_666 9
       years ago.
     * (http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/Gulali-Hit
       am0.9.tar.gz]Gulali-Hitam0.9.tar.gz(http://dev.blankonlinux.or.id/raw-attachment
       /wiki/Artwork/MenujuMeuligoe/Gulali-Hitam0.9.tar.gz]​ (76.3 KB) -
       added by blaxnux 9 years ago. "versi lebih hijau yang dibikin dari
       peninggalan bos alie. :))"
     * (http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/gulali-skr
       insut.png]gulali-skrinsut.png(http://dev.blankonlinux.or.id/raw-attachment/wiki/
       Artwork/MenujuMeuligoe/gulali-skrinsut.png]​ (98.7 KB) - added by
       blaxnux 9 years ago.
     * (http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/openintro_
       meuligoe.png]openintro_meuligoe.png(http://dev.blankonlinux.or.id/raw-attachment
       /wiki/Artwork/MenujuMeuligoe/openintro_meuligoe.png]​ (128.1 KB) -
       added by ahmadharis 9 years ago.
     * (http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/openabout_
       meuligoe.png]openabout_meuligoe.png(http://dev.blankonlinux.or.id/raw-attachment
       /wiki/Artwork/MenujuMeuligoe/openabout_meuligoe.png]​ (39.1 KB) -
       added by ahmadharis 9 years ago.
     * (http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/usplash.ta
       r.gz]usplash.tar.gz(http://dev.blankonlinux.or.id/raw-attachment/wiki/Artwork/Me
       nujuMeuligoe/usplash.tar.gz]​ (76.0 KB) - added by ahmadharis 9
       years ago.
     * (http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/gimp-ooo-s
       plash.tar.gz]gimp-ooo-splash.tar.gz(http://dev.blankonlinux.or.id/raw-attachment
       /wiki/Artwork/MenujuMeuligoe/gimp-ooo-splash.tar.gz]​ (238.9 KB) -
       added by ahmadharis 9 years ago. "gimp and ooo splash. read the
       readme file"
     * (http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/Gulali-Hit
       am1.0.tar.gz]Gulali-Hitam1.0.tar.gz(http://dev.blankonlinux.or.id/raw-attachment
       /wiki/Artwork/MenujuMeuligoe/Gulali-Hitam1.0.tar.gz]​ (67.4 KB) -
       added by blaxnux 9 years ago.
     * (http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/WallpaperS
       aman-setan_666.svg]WallpaperSaman-setan_666.svg(http://dev.blankonlinux.or.id/ra
       w-attachment/wiki/Artwork/MenujuMeuligoe/WallpaperSaman-setan_666.s
       vg]​ (179.1 KB) - added by blaxnux 9 years ago.
     * (http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/WallpaperS
       aman-setan_666-normal.svg]WallpaperSaman-setan_666-normal.svg[file:
       //localhost/raw-attachment/wiki/Artwork/MenujuMeuligoe/WallpaperSam
       an-setan_666-normal.svg]​ (180.3 KB) - added by blaxnux 9 years
       ago.
     * (http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/WallSaman_
       setan666-normal.png]WallSaman_setan666-normal.png(http://dev.blankonlinux.or.id/
       raw-attachment/wiki/Artwork/MenujuMeuligoe/WallSaman_setan666-norma
       l.png]​ (121.7 KB) - added by blaxnux 9 years ago.
     * (http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/WallSaman_
       setan666-wide.png]WallSaman_setan666-wide.png(http://dev.blankonlinux.or.id/raw-
       attachment/wiki/Artwork/MenujuMeuligoe/WallSaman_setan666-wide.png]
       ​ (106.6 KB) - added by blaxnux 9 years ago.
     * (http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/sampulCD_k
       otak.png]sampulCD_kotak.png(http://dev.blankonlinux.or.id/raw-attachment/wiki/Ar
       twork/MenujuMeuligoe/sampulCD_kotak.png]​ (22.5 KB) - added by
       setan_666 9 years ago.
     * (http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/sampulCD_C
       D.png]sampulCD_CD.png(http://dev.blankonlinux.or.id/raw-attachment/wiki/Artwork/
       MenujuMeuligoe/sampulCD_CD.png]​ (27.0 KB) - added by setan_666 9
       years ago.
     * (http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/BlankOn-gr
       afis-setan_666.svg]BlankOn-grafis-setan_666.svg(http://dev.blankonlinux.or.id/ra
       w-attachment/wiki/Artwork/MenujuMeuligoe/BlankOn-grafis-setan_666.s
       vg]​ (548.5 KB) - added by setan_666 9 years ago. "source wall
       rumah"
     * (http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/WallSaman_
       setan666_.png]WallSaman_setan666_.png(http://dev.blankonlinux.or.id/raw-attachme
       nt/wiki/Artwork/MenujuMeuligoe/WallSaman_setan666_.png]​ (48.2 KB)
       - added by setan_666 9 years ago.
     * (http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/raeprev.jp
       g]raeprev.jpg(http://dev.blankonlinux.or.id/raw-attachment/wiki/Artwork/MenujuMe
       uligoe/raeprev.jpg]​ (23.8 KB) - added by blaxnux 9 years ago.
     * (http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/kincaprev.
       png]kincaprev.png(http://dev.blankonlinux.or.id/raw-attachment/wiki/Artwork/Menu
       juMeuligoe/kincaprev.png]​ (115.5 KB) - added by blaxnux 9 years
       ago.
     * (http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/sampulCD.p
       ng]sampulCD.png(http://dev.blankonlinux.or.id/raw-attachment/wiki/Artwork/Menuju
       Meuligoe/sampulCD.png]​ (74.0 KB) - added by setan_666 9 years ago.
       "sampul CD Meuligoe"
     * (http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/sampulCD_t
       b.png]sampulCD_tb.png(http://dev.blankonlinux.or.id/raw-attachment/wiki/Artwork/
       MenujuMeuligoe/sampulCD_tb.png]​ (44.4 KB) - added by setan_666 9
       years ago. "sampul CD Meuligoe"
     * (http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/coverCD_se
       tan666.svg]coverCD_setan666.svg(http://dev.blankonlinux.or.id/raw-attachment/wik
       i/Artwork/MenujuMeuligoe/coverCD_setan666.svg]​ (621.1 KB) - added
       by setan_666 9 years ago.
     * (http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/sticker_CD
       .png]sticker_CD.png(http://dev.blankonlinux.or.id/raw-attachment/wiki/Artwork/Me
       nujuMeuligoe/sticker_CD.png]​ (66.6 KB) - added by setan_666 9
       years ago. "Sticker CD Meuligoe"
     * (http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/sticker_CD
       _tb.png]sticker_CD_tb.png(http://dev.blankonlinux.or.id/raw-attachment/wiki/Artw
       ork/MenujuMeuligoe/sticker_CD_tb.png]​ (58.2 KB) - added by
       setan_666 9 years ago. "sticker CD meuligoe"
     * (http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/kinca.tar.
       gz]kinca.tar.gz(http://dev.blankonlinux.or.id/raw-attachment/wiki/Artwork/Menuju
       Meuligoe/kinca.tar.gz]​ (1.3 MB) - added by blaxnux 9 years ago.
       "enchanced kinca is on!"
     * (http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/sangadi.ta
       r.gz]sangadi.tar.gz(http://dev.blankonlinux.or.id/raw-attachment/wiki/Artwork/Me
       nujuMeuligoe/sangadi.tar.gz]​ (384.4 KB) - added by blaxnux 9 years
       ago. "minimalis gdm"
     * (http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/rumah.svg]
       rumah.svg(http://dev.blankonlinux.or.id/raw-attachment/wiki/Artwork/MenujuMeulig
       oe/rumah.svg]​ (61.0 KB) - added by blaxnux 9 years ago. "sors
       wolpeper rumah"
     * (http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/rumah_1280
       x1024.png]rumah_1280x1024.png(http://dev.blankonlinux.or.id/raw-attachment/wiki/
       Artwork/MenujuMeuligoe/rumah_1280x1024.png]​ (185.0 KB) - added by
       blaxnux 9 years ago. "wallpaper rumah"
     * (http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/rumah_1600
       x1000.png]rumah_1600x1000.png(http://dev.blankonlinux.or.id/raw-attachment/wiki/
       Artwork/MenujuMeuligoe/rumah_1600x1000.png]​ (229.9 KB) - added by
       blaxnux 9 years ago. "wallpaper rumah widescreen"
     * (http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/gnome-spla
       sh.png]gnome-splash.png(http://dev.blankonlinux.or.id/raw-attachment/wiki/Artwor
       k/MenujuMeuligoe/gnome-splash.png]​ (23.0 KB) - added by blaxnux 9
       years ago. "versi blek"
     * (http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/WallPaper_
       rumah_setan666_normal_test.png]WallPaper_rumah_setan666_normal_test
       .png(http://dev.blankonlinux.or.id/raw-attachment/wiki/Artwork/MenujuMeuligoe/Wa
       llPaper_rumah_setan666_normal_test.png]​ (134.8 KB) - added by
       setan_666 9 years ago. "test untuk wallpaper rumah lagi"
     * (http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/gnome-spla
       sh.jpg]gnome-splash.jpg(http://dev.blankonlinux.or.id/raw-attachment/wiki/Artwor
       k/MenujuMeuligoe/gnome-splash.jpg]​ (19.8 KB) - added by ahmadharis
       9 years ago.
     * (http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/WallPaper_
       rumah_setan666_normal.png]WallPaper_rumah_setan666_normal.png[file:
       //localhost/raw-attachment/wiki/Artwork/MenujuMeuligoe/WallPaper_ru
       mah_setan666_normal.png]​ (171.3 KB) - added by setan_666 9 years
       ago. "wallpaper rumah-upgrade"
     * (http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/wall_rumah
       _prev.png]wall_rumah_prev.png(http://dev.blankonlinux.or.id/raw-attachment/wiki/
       Artwork/MenujuMeuligoe/wall_rumah_prev.png]​ (61.1 KB) - added by
       setan_666 9 years ago. "wallpaper rumah-upgrade"
     * (http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/WallPaper_
       rumah_setan666_wide.png]WallPaper_rumah_setan666_wide.png[file://lo
       calhost/raw-attachment/wiki/Artwork/MenujuMeuligoe/WallPaper_rumah_
       setan666_wide.png]​ (263.3 KB) - added by setan_666 9 years ago.
       "wallpaper rumah-wide screen"
     * (http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/gnome-spla
       sh-haris.png]gnome-splash-haris.png(http://dev.blankonlinux.or.id/raw-attachment
       /wiki/Artwork/MenujuMeuligoe/gnome-splash-haris.png]​ (26.1 KB) -
       added by ahmadharis 9 years ago.
     * (http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/gnome-spla
       sh.svg]gnome-splash.svg(http://dev.blankonlinux.or.id/raw-attachment/wiki/Artwor
       k/MenujuMeuligoe/gnome-splash.svg]​ (241.8 KB) - added by
       ahmadharis 9 years ago.
     * (http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/sangadi-gd
       m-minimalis.png]sangadi-gdm-minimalis.png(http://dev.blankonlinux.or.id/raw-atta
       chment/wiki/Artwork/MenujuMeuligoe/sangadi-gdm-minimalis.png]​
       (101.5 KB) - added by muhidin 9 years ago. "gdm minimalis screen
       shoot"
     * (http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/oo-sampul-
       dan-stiker-cd-dvd.odg]oo-sampul-dan-stiker-cd-dvd.odg[file://localh
       ost/raw-attachment/wiki/Artwork/MenujuMeuligoe/oo-sampul-dan-stiker
       -cd-dvd.odg]​ (416.9 KB) - added by ahmadharis 9 years ago.
     * (http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/sampul_cd_
       meuligoe.svg.tar.gz]sampul_cd_meuligoe.svg.tar.gz(http://dev.blankonlinux.or.id/
       raw-attachment/wiki/Artwork/MenujuMeuligoe/sampul_cd_meuligoe.svg.t
       ar.gz]​ (465.7 KB) - added by ahmadharis 9 years ago.
     * (http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/stiker_cd_
       meuligoe.svg.tar.gz]stiker_cd_meuligoe.svg.tar.gz(http://dev.blankonlinux.or.id/
       raw-attachment/wiki/Artwork/MenujuMeuligoe/stiker_cd_meuligoe.svg.t
       ar.gz]​ (225.1 KB) - added by ahmadharis 9 years ago.
     * (http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/blankon.sv
       g]blankon.svg(http://dev.blankonlinux.or.id/raw-attachment/wiki/Artwork/MenujuMe
       uligoe/blankon.svg]​ (69.5 KB) - added by ahmadharis 9 years ago.
     * (http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/usplash.zi
       p]usplash.zip(http://dev.blankonlinux.or.id/raw-attachment/wiki/Artwork/MenujuMe
       uligoe/usplash.zip]​ (3.8 KB) - added by ahmadharis 9 years ago.
     * (http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/usplash_or
       iginal.png]usplash_original.png(http://dev.blankonlinux.or.id/raw-attachment/wik
       i/Artwork/MenujuMeuligoe/usplash_original.png]​ (5.9 KB) - added by
       ahmadharis 9 years ago.
     * (http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/rae.tar.gz
       ]rae.tar.gz(http://dev.blankonlinux.or.id/raw-attachment/wiki/Artwork/MenujuMeul
       igoe/rae.tar.gz]​ (922.9 KB) - added by ahmadharis 9 years ago.
       "udah dimodif sama om naufal"
     * (http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/new-usplas
       h.so]new-usplash.so(http://dev.blankonlinux.or.id/raw-attachment/wiki/Artwork/Me
       nujuMeuligoe/new-usplash.so]​ (486.8 KB) - added by ahmadharis 8
       years ago.
     * (http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/rae-OK.tar
       .gz]rae-OK.tar.gz(http://dev.blankonlinux.or.id/raw-attachment/wiki/Artwork/Menu
       juMeuligoe/rae-OK.tar.gz]​ (918.4 KB) - added by muhidin 8 years
       ago. "Akhirnya selesai juga ....(logo flat)"
     * (http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/boot-menu-
       logo.png]boot-menu-logo.png(http://dev.blankonlinux.or.id/raw-attachment/wiki/Ar
       twork/MenujuMeuligoe/boot-menu-logo.png]​ (150.9 KB) - added by
       ahmadharis 8 years ago.
     * (http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/boot-menu-
       logo.pcx]boot-menu-logo.pcx(http://dev.blankonlinux.or.id/raw-attachment/wiki/Ar
       twork/MenujuMeuligoe/boot-menu-logo.pcx]​ (255.3 KB) - added by
       ahmadharis 8 years ago.
     * (http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/boot-menu-
       logo.svg]boot-menu-logo.svg(http://dev.blankonlinux.or.id/raw-attachment/wiki/Ar
       twork/MenujuMeuligoe/boot-menu-logo.svg]​ (398.7 KB) - added by
       ahmadharis 8 years ago.
     * (http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/ubiquity.p
       ng]ubiquity.png(http://dev.blankonlinux.or.id/raw-attachment/wiki/Artwork/Menuju
       Meuligoe/ubiquity.png]​ (15.7 KB) - added by ahmadharis 8 years
       ago.
     * (http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/logo-ubiqu
       ity.svg]logo-ubiquity.svg(http://dev.blankonlinux.or.id/raw-attachment/wiki/Artw
       ork/MenujuMeuligoe/logo-ubiquity.svg]​ (465.9 KB) - added by
       ahmadharis 8 years ago.
     * (http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/usplash.so
       ]usplash.so(http://dev.blankonlinux.or.id/raw-attachment/wiki/Artwork/MenujuMeul
       igoe/usplash.so]​ (786.0 KB) - added by ahmadharis 8 years ago.
     * (http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/usplash.pn
       g]usplash.png(http://dev.blankonlinux.or.id/raw-attachment/wiki/Artwork/MenujuMe
       uligoe/usplash.png]​ (548.4 KB) - added by ahmadharis 8 years ago.
     * (http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/jao-theme.
       tar.gz]jao-theme.tar.gz(http://dev.blankonlinux.or.id/raw-attachment/wiki/Artwor
       k/MenujuMeuligoe/jao-theme.tar.gz]​ (84.3 KB) - added by blaxnux 8
       years ago. "v 1.8 missing theme engine bug fixed"
     * (http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/Rae.tar.gz
       ]Rae.tar.gz(http://dev.blankonlinux.or.id/raw-attachment/wiki/Artwork/MenujuMeul
       igoe/Rae.tar.gz]​ (917.3 KB) - added by blaxnux 8 years ago. "bug
       fixed, tengkyu bos muhidin yang mau susah-susah bantu saat saya
       nggak ngonek, logo yang bener dah ditambahin."
     * (http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/usplash-th
       eme-blankon-4-0.5.tar.gz]usplash-theme-blankon-4-0.5.tar.gz[file://
       localhost/raw-attachment/wiki/Artwork/MenujuMeuligoe/usplash-theme-
       blankon-4-0.5.tar.gz]​ (2.8 MB) - added by ahmadharis 8 years ago.
     * (http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/banner.png
       ]banner.png(http://dev.blankonlinux.or.id/raw-attachment/wiki/Artwork/MenujuMeul
       igoe/banner.png]​ (108.1 KB) - added by ahmadharis 8 years ago.
     * (http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/logo.png]l
       ogo.png(http://dev.blankonlinux.or.id/raw-attachment/wiki/Artwork/MenujuMeuligoe
       /logo.png]​ (56.3 KB) - added by gerydcutegal 8 years ago.
     * (http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/blankonlog
       o.svg]blankonlogo.svg(http://dev.blankonlinux.or.id/raw-attachment/wiki/Artwork/
       MenujuMeuligoe/blankonlogo.svg]​ (16.2 KB) - added by gerydcutegal
       8 years ago.
     * (http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/blankonlog
       o.2.svg]blankonlogo.2.svg(http://dev.blankonlinux.or.id/raw-attachment/wiki/Artw
       ork/MenujuMeuligoe/blankonlogo.2.svg]​ (16.2 KB) - added by
       gerydcutegal 8 years ago.
     * (http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/logo-blank
       on-glassy.svg]logo-blankon-glassy.svg(http://dev.blankonlinux.or.id/raw-attachme
       nt/wiki/Artwork/MenujuMeuligoe/logo-blankon-glassy.svg]​ (133.1 KB)
       - added by ahmadharis 8 years ago.
     * (http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/logo-flat.
       png]logo-flat.png(http://dev.blankonlinux.or.id/raw-attachment/wiki/Artwork/Menu
       juMeuligoe/logo-flat.png]​ (27.3 KB) - added by ahmadharis 8 years
       ago.
     * (http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/logo-glass
       y.png]logo-glassy.png(http://dev.blankonlinux.or.id/raw-attachment/wiki/Artwork/
       MenujuMeuligoe/logo-glassy.png]​ (34.7 KB) - added by ahmadharis 8
       years ago.
     * (http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/logo-blank
       on-meuligoe.svg]logo-blankon-meuligoe.svg(http://dev.blankonlinux.or.id/raw-atta
       chment/wiki/Artwork/MenujuMeuligoe/logo-blankon-meuligoe.svg]​
       (50.7 KB) - added by ahmadharis 8 years ago.
     * (http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/meuligoe.s
       vg]meuligoe.svg(http://dev.blankonlinux.or.id/raw-attachment/wiki/Artwork/Menuju
       Meuligoe/meuligoe.svg]​ (11.1 KB) - added by ahmadharis 8 years
       ago.
     * (http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/usplash.sv
       g]usplash.svg(http://dev.blankonlinux.or.id/raw-attachment/wiki/Artwork/MenujuMe
       uligoe/usplash.svg]​ (2.7 MB) - added by ahmadharis 8 years ago.
     * (http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/Rae.tar.2.
       gz]Rae.tar.2.gz(http://dev.blankonlinux.or.id/raw-attachment/wiki/Artwork/Menuju
       Meuligoe/Rae.tar.2.gz]​ (917.1 KB) - added by muhidin 8 years ago.
       "Sudah diperbaiki yang error karena filesystems"
     * (http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/boot-menu-
       logo-640x480.png]boot-menu-logo-640x480.png(http://dev.blankonlinux.or.id/raw-at
       tachment/wiki/Artwork/MenujuMeuligoe/boot-menu-logo-640x480.png]​
       (43.4 KB) - added by ahmadharis 8 years ago.
     * (http://dev.blankonlinux.or.id/attachment/wiki/Artwork/MenujuMeuligoe/logo-blank
       on-flat.svg]logo-blankon-flat.svg(http://dev.blankonlinux.or.id/raw-attachment/w
       iki/Artwork/MenujuMeuligoe/logo-blankon-flat.svg]​ (63.9 KB) -
       added by ahmadharis 8 years ago.




---
 



