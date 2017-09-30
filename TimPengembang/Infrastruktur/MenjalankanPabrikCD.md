# Menjalankan pabrik CD di alynne

Berikut adalah tutorial untuk menjalankan Pabrik CD di alynne :

## Pertama, login ke alynne menggunakan SSH

```sh
$ ssh namauser@alynne.blankonlinux.or.id -p2222
```

## Ganti user ke pabric CD :

```sh
$ sudo su - cdimage
```

## Selanjutnya, Pindah direktori ke pabrik-cc : 

```sh
$ cd pabric-cc
```

## Edit File konfigurasi ISO yang akan di buat, berkas file ada di uluwatu.config , di alynne untuk uluwatu sudah dikonfig ketika blankoding di Surabaya.
## Terakhir, Jalankan

```sh
$ ./enter.cd.blankon.sh
```
