# Pengaturan Desktop Virtualisasi

## Aplikasi Virtualisasi

### Bagaimana memasang vmware-server
VMware merupakan aplikasi virtual mesin yang dapat digunakan untuk membuat mesin vitual dalam mesin utama, sehingga Anda mempunyai banyak mesin dalam 
satu sistem anda. Untuk instalasinya anda harus menambahkan repository Canonical `gksudo gedit /etc/apt/sources.list` Tambah baris berikut di akhir 
berkas

	\# Repository Canonical
	deb http://archive.canonical.com gutsy partner

Simpan berkas sources.list anda, dan masukkan perintah
```
sudo apt-get update
apt-get install vmware-server
```

ingat, VMware merupakan aplikasi berbayar. Anda membutuhkan Serial Number untuk pemasangan di mesin anda

### Bagaimana memasang VirtualBox
VirtualBox adalah aplikasi open source dan tidak berbayar yang dapat digunakan sebagai aplikasi virtualisasi. VirtualBox mendukung virtualisasi 
Windows, Linux, FreeBSD, OpenBSD, DOS dan lainya. Untuk pemasanganya adalah sebagai berikut: `apt-get install virtualbox-ose`

### Bagaimana memasang qemu
Qemu adalah aplikasi virtual yang ringan, open-source dan gratis. Kegunaanya mirip dengan VirtualBox. Untuk pemasanganya adalah sebagai berikut: 
`apt-get install qemu`

#### Bagaimana memasang tampilan grafis pada qemu
Secara default qemu tersedia dalam mode teks, namun bisa juga ditampilkan
dalam tampilan grafis

```
apt-get install qemulator
apt-get install qemu-launcher
```

Last modified on 09/23/2008 08:19:13 PM

---
 



