# Panduan Penulisan Wiki

## Nama berkas

Gunakan `CamelCase` dengan kapital pada huruf pertama lalu ditambahkan ekstensi `.md`. Bila merupakan halaman untuk Panduan Wiki, maka nama berkasnya adalah `PanduanWiki.md`

## Format

Format penulisan menggunakan Markdown, silakan merujuk pada dokumentasi berikut mengenai tata cara penulisan dengan Markdown: https://guides.github.com/features/mastering-markdown/.

## Mereferensikan halaman wiki lain

Bila mereferensikan halaman lain yang ada di wiki, gunakan format berikut:

```
(teks yang mau direferensikan)[path/halaman/referensi]
```

Contoh:

```

[Halaman dokumentasi](../Dokumentasi)

[Filosofi blankon](./FilosofiBlankOn.md)

```

Akan menghasilkan:

[Halaman dokumentasi](../Dokumentasi)

[Filosofi blankon](./FilosofiBlankOn.md)


## Dokumentasi kadaluarsa

Tambahkan baris kode berikut ke baris pertama pada halaman untuk menandai halaman tersebut sebagai kadaluarsa (*deprecated*, sudah tidak relevan).

```
<img src="https://badgen.net/badge/wiki/kadaluarsa/red?icon=github">
```

Akan menghasilkan cap kadaluarsa seperti ini:
<img src="https://badgen.net/badge/wiki/kadaluarsa/red?icon=github">
