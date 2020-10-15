# Name Server Daemon

Name Server Daemon (NSD) merupakan sebuah DNS server authoritative, berperforma tinggi, sederhana, dan berlisensi sumber terbuka. Infrastruktur BlankOn menggunakan NSD sebagai master dan BIND sebagai slave.

## Membuat sub domain untuk blankon.in

Berikut langkah untuk menambahkan sub domain untuk blankon.in. 

Pertama login ke mesin alynne melalui protokol SSH, lalu sunting berkas berikut :

```bash
sudo vim /etc/nsd/blankon.in.zone
```

Konfigurasi pada berkas tersebut menggunakan sistem stanza, misal untuk membuat sub domain malang.di.blankon.in, sunting/tambahkan seperti berikut :


```
.....
$ORIGIN di.blankon.in.
banyumas                NS      ns1.airputih.id.
                        NS      ns2.airputih.id.
malang                  A       1.2.3.4
			AAAA	2000:2000::1
.....
```

Simpan berkas konfigurasi tersebut, lalu restart NSD dengan perintah.

```bash
sudo nsd-control reload blankon.in
```

Setelah menjalankan perintah tersebut, propagansi domain akan dimulai. Tunggu beberapa waktu hingga 2x24 jam, sampai propagansi berjalan sempurna.


