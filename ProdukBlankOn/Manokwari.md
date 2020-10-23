# Manokwari

Manokwari adalah destop yang dikembangkan oleh pengembang BlankOn dengan teknologi HTML5 dan CSS3. Hal ini membuat destop manokwari menjadi destop cantik, modern, ringan dan mudah untuk dimodifikasi. Manokwari menjadi lingkungan desktop bawaan BlankOn sejak rilis [Rote](/wiki/ProdukBlankOn/8/).

Manokwari sendiri merupakan [pengembangan dari blankon-panel (2011)](https://www.slideshare.net/mdamt/lokakarya-manokwari-icross-2013) yang ditulis dengan bahasa pemrograman Vala dan GTK+ 3. Lalu pada 2012 blankon-panel menjadi panel desktop dengan nama baru "Manokwari", dengan Vala, GTK+3 (legacy, akan digantikan HTML5 secara penuh di masa mendatang), JavaScript, HTML5, dan CSS3. Pada akhirnya Manokwari berkembang menjadi lingkungan desktop (secara teknik merupakan shell untuk GNOME) khas BlankOn.

## Instalasi

### Coba dengan BlankOn

Manokwari digunakan sebagai lingkungan desktop utama BlankOn, Anda dapat mencoba BlankOn secara langsung. [Unduh BlankOn](http://cdimage.blankonlinux.or.id/blankon/rilis/10.0/).

### Dari Kode Sumber

Unduh menggunakan git :

`$ git clone https://github.com/BlankOn/manokwari.git`

atau unduh berkas [tarball](https://github.com/BlankOn/manokwari/zipball/master).

Pasang beberapa paket ketergantungan pada distribusi BlankOn/Debian untuk melakukan kompilasi:

```sh
$ sudo apt-get install gnome-common libcairo2-dev libgee-dev libglib2.0-dev \
   libgnome-menu-dev libgtk-3-dev libtool libunique-3.0-dev libvala-0.12-dev valac
```

Lakukan kompilasi lalu pasang:

```sh
$ cd manokwari
$ sh autogen.sh
$ make
$ sudo make install
```

### Pemasangan di Ubuntu

Terima kasih kepada salah satu mantan pengembang BlankOn yang telah menyediakan PPA Manokwari. Kini pengguna Ubuntu 16.04 LTS dan 17.04 berkesempatan menikmati desktop dari distro BlankOn tersebut.

Untuk memasang Manokwari di Ubuntu 16.04 LTS Xenial Xerus dan 17.04 Zesty Zapus, silakan jalankan perintah di bawah ini:

```sh
$ sudo add-apt-repository ppa:dotovr/manokwari
$ sudo apt update
$ sudo apt install manokwari
```

### Pemasangan pada Fedora

Setelah kehadiran repositori PPA Manokwari untuk Ubuntu 16.04 LTS Xenial Xerus, kali ini muncul repositori COPR Manokwari yang mengizinkan pengguna untuk ikut memasangnya di distro Fedora. Berbeda dari PPA yang memang disediakan oleh mantan pengembang BlankOn, Mhy, repositori COPR Manokwari ini dibangun oleh [Fadlun Akbar (alunux)](https://github.com/alunux), pengguna Fedora yang berkontribusi mengirimkan dukungan sistem build Meson pada Manokwari.

Jika Anda pernah ikut berdiskusi di IRC #ubuntu-indonesia atau BGLI (Belajar GNU/Linux Indonesia), pasti Anda pernah melihat kakak satu ini 🙂

Untuk memasang desktop Manokwari di Fedora, pastikan Anda memakai Fedora 25 atau 26 di arsitektur i386 (32-bit) atau x86_64 (64-bit), lalu jalankan perintah di bawah ini:

```sh
$ su -c 'dnf copr enable alunux/manokwari'
$ su -c 'dnf install manokwari'
```

Anda juga dapat mengintip repositori COPR Manokwari di laman copr.fedorainfracloud.org.

### Pemasangan di Arch Linux

Untuk mencoba manokwari di ArchLinux, sekarang Anda cukup menggunakan yaourt untuk memasangnya, dengan perintah:

```sh
$ yaourt -S base-devel
$ yaourt -S manokwari
```

catatan:
– **bromo-gtk-theme** adalah tema Gtk default yang digunakan oleh BlankOn
– **tebu-icon-theme** adalah tema ikon default yang digunakan oleh BlankOn
– **tebu-flat-icon-theme** adalah tema flat dari tebu-icon-theme
– ketiga paket diatas adalah paket opsional. Anda dapat memasangnya secara terpisah dari manokwari melalui yaourt

### Pemasangan di SparkyLinux

Untuk memasang Manokwari di SparkyLinux, silakan perbarui dulu daftar paket aplikasi.

`$ sudo apt update`

Lalu jalankan,

`$ sudo apt install sparky-desktop-manokwari`

Selain dengan baris perintah, Anda juga bisa memasangnya via APTus.

Desktop Manokwari di SparkyLinux akan berjalan dengan tema Bromo, ikon Ultra-flat-icons, dan wallpaper bawaan distro.

### Pemasangan di openSUSE

Jika Anda sudah menggunakan openSUSE Leap 42.3 dan ingin mencoba Manokwari, silakan kunjungi [tautan ini](https://software.opensuse.org/package/manokwari?search_term=manokwari). Anda dapat langsung memasangnya melalui tombol 1 Click Install. Sebagai catatan, openSUSE yang Anda pakai haruslah berarsitektur 64-bit.

Di sisi lain, jika Anda menyukai gaya lama (memasang dari source code), pengguna openSUSE lainnya juga memberikan tata cara instalasi Manokwari berikut dependensi-dependensi yang dibutuhkan melalui [tautan ini](https://muhammadrefa.wordpress.com/2017/10/05/membangun-manokwari-di-opensuse/).

## Referensi
- [Situs resmi Manokwari](https://manokwari.blankonlinux.or.id)
- [Lokakarya Manokwari ICROSS 2013](https://www.slideshare.net/mdamt/lokakarya-manokwari-icross-2013), oleh pak MDAMT
- [https://kabarlinux.web.id/2017/pengguna-ubuntu-16-04-lts-bisa-cicipi-desktop-manokwari-lewat-repositori-ppa/](https://kabarlinux.web.id/2017/pengguna-ubuntu-16-04-lts-bisa-cicipi-desktop-manokwari-lewat-repositori-ppa/)
- [https://kabarlinux.web.id/2017/setelah-ubuntu-pengguna-fedora-bisa-pasang-manokwari-via-repositori-copr/](https://kabarlinux.web.id/2017/setelah-ubuntu-pengguna-fedora-bisa-pasang-manokwari-via-repositori-copr/)
- [Sekarang Manokwari ada di Arch Linux](https://artemtechblog.wordpress.com/2017/08/10/sekarang-manokwari-ada-di-archlinux/)
- [https://kabarlinux.web.id/2017/desktop-manokwari-hadir-di-sparkylinux/](https://kabarlinux.web.id/2017/desktop-manokwari-hadir-di-sparkylinux/)
- [Membangun Manokwari di openSUSE](https://muhammadrefa.wordpress.com/2017/10/05/membangun-manokwari-di-opensuse/)
