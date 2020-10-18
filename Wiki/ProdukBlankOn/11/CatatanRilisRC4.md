# Catatan Rilis RC4

Semangat Pagi,

Selasa, 3 April 2018 Pengembang BlankOn merilis BlankOn Uluwatu Jahitan-RC4.
Jahitan dapat diunduh melalui tautan http://cdimage-dev.blankonlinux.or.id/blankon/rilis/uluwatu/Jahitan-RC4/

###### Fitur dan Perbaikan Kutu
  * BlankOn Installer | Release 1.42
- Perbaikan kondisi pemasangan baru pada pre-installed partisi efi
- Perbaikan resolusi 16:9 pada saat pemasangan

  * Manokwari | Release 1.0.20
- bevel.js: update the info panel name (GNOME >= 3.26)
- Perbaikan UI
- Perbaikan drag & drop pada destop background.

  * GNOME Software Center
- Perbaikan info Appstream data, sehingga GNOME software sudah bisa digunakan
- Dukungan Flatpak pada gnome software (*on going*)

  * Tampilan
- Finalisasi tema Manokwari
- Perbaikan Latar Belakang GRUB dengan tema Manokwari
- Penambahan aplikasi standar, Jahitan RC sebelumnya, aplikasi ini belum masuk jahitan
- Informasi detail yang sudah mengacu pada kode rilis BlankOn


###### Kutu yang diketahui:
- Notifikasi error saat pertama kali membuka GNOME Software Center (appsteam-data)
- Pemasangan pada mode EFI saat luring, sistem gagal memasang EFI dari lumbung CD lokal.

Pengembang sedang memperbaiki kutu appstream data karena dirasa masih menjadi hambatan utama rilis.
Beberapa pengembang sedang melakukan kemungkinan adaptasi [DAK](https://github.com/Debian/dak) pada Uluwatu.

Cara melaporkan kutu dan Daftar kutu yang sudah diketahui dapat diakses pada tautan https://github.com/BlankOn/Uluwatu/issues

Demikian.
Salam

Estu Fardani
Manager Rilis

