# Patching

Patching adalah proses menambal suatu berkas atau kumpulan berkas dalam direktori dengan tambalan. Tambalan berupa `diff` yang memuat perbedaan dari berkas/kumpulan berkas yang lama dengan berkas/kumpulan berkas yang baru.

## Berkas pertama, puisi.txt

Buat berkas teks dengan nama `puisi.txt` dan isi sebagi berikut:
```
satu
dua
```

## Berkas terbaru, puisiv2.txt

Kemudian buat berkas teks lagi dengan nama `puisiv2.txt` dengan isi sebagai berikut:
```
satu
dua
tiga
```

## Lihat perbedaannya
```
diff puisi.txt puisiv2.txt
```

Perintah tersebut akan menunjukkan perbedaan antara kedua berkas. Baris yang memuat kata `tiga` ditunjukkan dalam diff tersebut.

## Membuat patch

```
diff -u puisi.txt puisiv2.txt > tambalan.patch
```

Dengan opsi `-u`, perbedaan yang dihasilkan juga memuat metadata lain, seperti kapan dibuat, perbedaan terjadi di sekitar baris berapa, dan seterusnya.

## Menerapkan tambalan

```
patch puisi.txt tambalan.patch
```
