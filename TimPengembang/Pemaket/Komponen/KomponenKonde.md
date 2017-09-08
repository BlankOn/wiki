# Komponen BlankOn Linux Konde

Silakan kunjungi halaman Launchpad di bawah ini untuk melihat status dokumen
ini. Silakan bergabung dalam tim. Jika tidak ingin bergabung di konde-steering,
Anda bisa letakkan komentar di bagian Wacana dan Diskusi di akhir dokumen ini.

## Ringkasan
Dokumen ini menjabarkan komponen yang dipilih dalam distro Konde. Daftar
komponen di bawah ini disusun dengan menggunakan asumsi sementara bahwa
lingkungan desktop yang dipilih adalah GNOME.

## Latar Belakang
### Pengantar
Komponen Konde harus disusun sedemikian rupa agar menggunakan komponen yang
ringan namun terintegrasi erat dengan lingkungan desktop. Terintegrasi artinya
ia tidak memerlukan komponen tambahan yang berbeda dengan lingkungan desktop,
baik itu pustaka program maupun komponen tema yang berbeda.
## Perbandingan Aplikasi & Komponen
### Aksesibilitas
#### Ubuntu
Nama Aplikasi                    Nama Paket  Catatan
onBoard                          ​onboard
Orca Screen Reader and Magnifier ​gnome-orca
#### Konde
Nama Aplikasi                    Nama Paket  Catatan
onBoard                          ​onboard
Orca Screen Reader and Magnifier ​gnome-orca
### Asesoris
#### Ubuntu
Nama Aplikasi       Nama Paket       Catatan
Archive Manager     file-roller
Calculator          gcalctool
Character Map       gucharmap
Dictionary          gnome-dictionary
Disk Usage Analyzer baobab
File Browser        nautilus
Take screenshot     gnome-screenshot
Terminal            gnome-terminal
Text Editor         gedit
Tomboy Notes        tomboy
#### Konde
Nama Aplikasi   Nama Paket       Catatan
Archive Manager file-roller
Calculator      gcalctool
Character Map   gucharmap
Dictionary      gnome-dictionary
File Browser    nautilus
Take screenshot gnome-screenshot
Terminal        gnome-terminal
Text Editor     gedit
Tomboy Notes    tomboy
### Permainan
#### Ubuntu
Nama Aplikasi Nama Paket   Catatan
Gnome Games   gnome-games  Permainan selain Chess dan Sudoku
Chess         glchess
Sudoku        gnome-sudoku
#### Konde
Nama Aplikasi Nama Paket Catatan
### Grafis
#### Ubuntu
Nama Aplikasi        Nama Paket Catatan
Document Viewer      evince
F-Spot Photo Manager f-spot
Gimp                 gimp
gThumb Image Viewer  gthumb
Image Viewer         eog
XSane Image Scanner  xsane
#### Konde
Nama Aplikasi       Nama Paket                   Catatan
Document Viewer     evince
Gimp                gimp
gThumb Image Viewer gthumb
Image Viewer        eog
InkScape            ​inkscape                  total terinstall: 45256kBytes,
                                                 tentatif
XaraXtreme          ​xaralxpackage + ​SVGplugtotal terinstall 12396kBytes,
                                                 tentatif
XSane Image Scanner xsane
### Internet
#### Ubuntu
Nama Aplikasi           Nama Paket       Catatan
BitTorrent              gnome-btdownload
Ekiga Softphone         ekiga
Evolution Mail          evolution
Firefox Web Browser     firefox
Gaim Internet Messenger gaim
Terminal Server Client  tsclient
#### Konde
Nama Aplikasi           Nama Paket Catatan
Evolution Mail          evolution  tentatif
Firefox Web Browser     firefox    beserta plugin, tentatif
Epiphany Web Browser    epiphany   beserta plugin, tentatif
Gaim Internet Messenger gaim       Untuk Gutsy mungkin sudah menggunakan pidgin
### Program Kantor
#### Ubuntu
Nama Aplikasi     Nama Paket      Catatan
Evolution         evolution       sama seperti Evolution Mail pada bagian
                                  Internet
Fax address book  hp-fab
HPLIP Fax Utility hp-sendfax
Invest Chart      invest-chart
Paket OpenOffice  ​openoffice.org
#### Konde
Nama Aplikasi    Nama Paket      Catatan
Paket OpenOffice ​openoffice.org
### Suara dan Video
#### Ubuntu
Nama Aplikasi       Nama Paket   Catatan
CD Player           ​gnome-media
Totem Movie Player  totem        ​http://ubuntuguide.org/wiki/Ubuntu:
                                 Feisty#How_to_install_DVD_playback_capability
Rhythmbox           rhythmbox
Serpentine Audio CD serpentine
Creator
Sound Juicer CD     sound-juicer
Extractor
Sound Recorder      gnome-sound-
                    recorder
#### Konde
Nama Aplikasi      Nama Paket   Catatan
Brasero            ​brasero   Perekam CD/DVD, tentatif
CD Player          ​gnome-media
Totem Movie Player totem        ​http://ubuntuguide.org/wiki/Ubuntu:
                                Feisty#How_to_install_DVD_playback_capability
Rhythmbox          rhythmbox
Sound Recorder     gnome-sound-
                   recorder
### Peralatan Sistem
#### Ubuntu
Nama Aplikasi           Nama Paket   Catatan
Configuration Editor    gconf-editor
Gdebi Package Installer gdebi-gtk
Ubuntu Device Database  hwdb-gui
#### Konde
Nama Aplikasi           Nama Paket   Catatan
Configuration Editor    gconf-editor
Gdebi Package Installer gdebi-gtk
### Kodek multimedia
#### Ubuntu
    * Tidak memasukkan komponen kodek multimedia tidak bebas secara default
#### Konde
    * Akan memasukkan komponen kodek multimedia tidak bebas secara default
    * ​http://ubuntuguide.org/wiki/Ubuntu:
      Feisty#How_to_install_Multimedia_Codecs
    * Sebaiknya kodek win32 tidak disertakan sebab isinya merupakan salinan
      mentah dari program lain == bajakan.
### Pendidikan
#### Ubuntu
    * Tidak menyertakan aplikasi pendidikan.
#### Konde
    * Program pendidikan merupakan pra-syarat(?) dari sponsor Unesco.
Nama Aplikasi Nama Paket Catatan
GCompris      ​gcompristentatif
KDEedu        ​kdeedu  tentatif
### Tema dan ikon
#### Ubuntu
    * Tema Human
#### Konde
    * Tema dan ikon khas Konde.
    * Koleksi lagu bebas dari band (indie) Indonesia?
## Studi Kasus
    * Migrasi dari Windows ke Konde
    * Migrasi dari Distro lain ke Konde
    * Pengguna komputer baru
    * Konde = sistem operasi standar komputer anak sekolah Indonesia?
### Daftar paket
## Masalah
## Wacana dan Diskusi
    * ​F-spot photo manager sering digunakan tidak? Saya rasa default viewer +
      file manager saja cukup, si f-spot ini mungkin bisa kita remove dari grup
      graphics bawaan Ubuntu (total terinstall 7212kBytes)
          o Saya setuju jika f-spot dihilangkan dari default instal -
            - AndiDarmawan
    * Untuk program email, menurut saya evolution terlalu berat dan terlalu
      banyak makan memory. Kecuali memang ada fitur khusus dari evolution yang
      dibutuhkan. Seperti deskbar-applet bisa mencari alamat email yang
      tersimpan di buku alamat evolution. Jika ingin memakai yang ringan bisa
      memilih claws-mail tapi mungkin antarmukanya agak susah untuk pengguna
      awam. - AndiDarmawan - 26 Mei 2007
    * usul, pemutar lagunya Pake XMMS saja, biar temen-teman di Windows lebih
      tertarik. Pemutar Filmnya MPlayer saja. dan yang penting Codecs yang bisa
      di Windows mohon di ikut sertakan biar saat muter berbagai macam file
      Video lancar - udienz
    * Saya setuju dengan usulan mas udienz untuk pemutar lagu menggunakan XMMS.
      Tapi kalau pemutar film saya rasa Totem sudah cukup (bawaan gnome,
      CMIIW). Mau usul juga nih untuk permainan. Bagaimana kalau game-nya
      jangan hanya bawaan gnome saja, misalkan Supertux, X-Moto, dll yang sudah
      lebih ok dari sekedar game-game kecil :p. Saya rasa kita kan juga perlu
      sedikit refreshing dgn game-gamenya yang sedikit menantang alias tidak
      membosankan. Sekian usul dari saya terima kasih. -- RameTux
    * Satu hal yang perlu dipertimbangkan dengan XMMS yaitu aplikasi ini masih
      tergantung dengan pustaka versi jadul (libglib1.2 dan libgtk1.2). No good
      kan? :) ... Btw Totem dengan framework gstreamer kapan yah mendukung DVD
      playback? Atau sudah bisa skr? -- AndyApdhani 2007-05-29T01:49:21

Last modified on 06/16/2008 04:49:38 PM

---
 
