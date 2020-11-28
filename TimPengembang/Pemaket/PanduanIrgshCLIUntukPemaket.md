# Panduan irgsh-cli untuk Pemaket

## GPG

### Kebutuhan

- `apt install gnupg build-essential devscripts debhelper`

### Generate

```
gnupg --full-generate-key
```

Dalam proses akan ditanyakan informasi entitas dan kunci, contoh:

```
gpg (GnuPG) 2.2.20; Copyright (C) 2020 Free Software Foundation, Inc.
This is free software: you are free to change and redistribute it.
There is NO WARRANTY, to the extent permitted by law.arsip-dev.blankonlinux.or.id/

Please select what kind of key you want:
   (1) RSA and RSA (default)
   (2) DSA and Elgamal
   (3) DSA (sign only)
   (4) RSA (sign only)
  (14) Existing key from card
Your selection? 1
RSA keys may be between 1024 and 4096 bits long.
What keysize do you want? (3072) 4096
Requested keysize is 4096 bits
Please specify how long the key should be valid.
         0 = key does not expire
      <n>  = key expires in n days
      <n>w = key expires in n weeks
      <n>m = key expires in n months
      <n>y = key expires in n years
Key is valid for? (0) 5y
Key expires at Thu 20 Nov 2025 07:49:07 PM WIB
Is this correct? (y/N) y

GnuPG needs to construct a user ID to identify your key.

Real name: Herpiko Dwi Aguno
Email address: herpiko@gmail.com
Comment: 
You selected this USER-ID:
    "Herpiko Dwi Aguno <herpiko@gmail.com>"

Change (N)ame, (C)omment, (E)mail or (O)kay/(Q)uit? O
We need to generate a lot of random bytes. It is a good idea to perform
some other action (type on the keyboard, move the mouse, utilize the
disks) during the prime generation; this gives the random number
generator a better chance to gain enough entropy.
oienienoienoienoienoienoienoienoienoienoienoienoiengpg: key F73403755814255E marked as ultimately trusted
gpg: directory '/home/herpiko/.gnupg/openpgp-revocs.d' created
oienoiegpg: revocation certificate stored as '/home/herpiko/.gnupg/openpgp-revocs.d/4E1C6A31FB1DF66463806857F73403755814255E.rev'
public and secret key created and signed.

pub   rsa4096 2020-11-21 [SC] [expires: 2025-11-20]
      4E1C6A31FB1DF66463806857F73403755814255E
uid                      Herpiko Dwi Aguno <herpiko@gmail.com>
sub   rsa4096 2020-11-21 [E] [expires: 2025-11-20]
```

Lihat kunci yang sudah dibikin dengan,
```
gnupg -K
```

### Ekspor

Salin terlebih dahulu identitas kuncinya. Lihat identitas kunci yang ada dengan perintah `gpg -K`. Outputnya:

```
/home/herpiko/.gnupg/pubring.kbx
--------------------------------
sec   rsa4096 2020-11-21 [SC] [expires: 2025-11-20]
      4E1C6A31FB1DF66463806857F73403755814255E
uid           [ultimate] Herpiko Dwi Aguno <herpiko@gmail.com>
ssb   rsa4096 2020-11-21 [E] [expires: 2025-11-20]
```

Di kasus output di atas, identitas kuncinya adalah `4E1C6A31FB1DF66463806857F73403755814255E`.

Kemudian coba ekspor kunci publiknya dengan perintah,

```
gpg --armor --export 4E1C6A31FB1DF66463806857F73403755814255E > namapemaket-gpg-pubkey
```

Sampai di sini, kuncinya dapat diserahkan ke tim infra untuk disuntikkan ke GPG keystore irgsh.

### Hapus

Menghapus kunci cukup dengan perintah,
```
gpg --delete-key 4E1C6A31FB1DF66463806857F73403755814255E
```

## Pendaftaran kunci pemaket ke irgsh

Bagian ini dilakukan oleh Tim Infra.

- Bawa kunci-kunci yang mau diimpor ke mesin irgsh, misal dengan `scp`
- Masuk ke user `irgsh`
- Impor dengan perintah `gpg --import < /path/to/pub.key`
- setelah diimpor, pastikan kuncinya terdaftar dengan perintah `gpg --list-key`

## irgsh-cli

### Kebutuhan
- Turunan Debian
- `apt install gnupg curl jq tar build-essential devscripts debhelper`

### Pemasangan

Pasang `irgsh-cli` dengan perintah satu baris berikut,

```
curl -L -o- https://raw.githubusercontent.com/BlankOn/irgsh-go/master/install-cli.sh | bash
```
Bila sudah selesai, akan tampil output seperti di bawah ini yang menandakan irgsh-cli siap dipakai,
```
/tmp /tmp
Extracting ... 
Extracting [OK]

Installing files ... 
'/tmp/irgsh-go/usr/bin/irgsh-cli' -> '/usr/bin/irgsh-cli'
Happy hacking!
```

### Konfigurasi awal

Sebelum mengkonfigurasi `irgsh-cli`, pemaket perlu mengkonfirmasi ke Tim Infra di mana `irgsh-chief` (induk dari komponen-komponen irgsh) dinyalakan. Dalam lokakarya ini, induk irgsh hidup di `https://irgsh.blankonlinux.or.id`.

Kemudian konfigurasikan `irgsh-cli` dengan perintah berikut,
```
irgsh-cli config --chief https://irgsh.blankonlinux.or.id --key 4E1C6A31FB1DF66463806857F73403755814255E
```

Sampai di sini, `irgsh-cli` akan bekerja dengan induk irgsh https://irgsh.blankonlinux.or.id menggunakan kunci pemaket `4E1C6A31FB1DF66463806857F73403755814255E`.

### Pemaketan dengan irgsh-cli

Pemaket membutuhkan setidaknya 2 hal untuk memaketkan paket ke irgsh, yaitu:

- Spesifikasi Debian (https://github.com/blankon-packages)
- Kode sumber (fitur opsional menunggu tiket https://github.com/BlankOn/irgsh-go/issues/78)

Keduanya didefinisikan dengan URL lumbung kode (bisa dari mana pun yang penting dapat diakses oleh internet dan sifatnya publik).

Misal kita akan mencoba untuk memaketkan `bromo-theme` dengan bahan di bawah ini:
- Spesifikasi Debian: https://github.com/blankon-packages/bromo-theme
- Kode sumber: https://github.com/blankon/bromo-theme

Setelah keduanya disiapkan, pemaket dapat menyuntikkan paket ke irgsh dengan perintah berikut,

```
irgsh-cli submit --source https://github.com/blankon/bromo-theme --package https://github.com/blankon-packages/bromo-theme --experimental
```

Flag `--experimental` menandakan paket ini akan disuntikkan ke lumbung experimental alih-alih ke lumbung pengembangan resmi. Tujuannya untuk uji coba sebelum benar-benar dipaketkan ke lumbung.

Lumbung pengembangan resmi terletak di arsip-dev.blankonlinux.or.id. Untuk paket experimental akan disuntik ke arsip-dev.blankonlinux.or.id/experimental, sementara paket resmi masuk ke arsip-dev.blankonlinux.or.id/dev.

Untuk memantau proses pembangunan paket, gunakan perintah berikut:

```
irgsh-cli log
```

Atau dengan membubuhkan id pipeline,
```
irgsh-cli log 2020-11-21-205136_b8dbbd86-0ee1-409a-b3e3-4ec4d97c5302
```

Panduan lebih detail mengenai pemaketan dengan irgsh-cli dapat disiman di https://github.com/BlankOn/wiki/blob/master/TimPengembang/Pemaket/PanduanPemaketanMenggunakanIrgshCli.md

## Sidik Gangguan

### Kunci privat tidak dikenali

Pesan galat menyerupai,
```
gpg: skipped "41B4FC0A57E7F7F8DD94E0AA2D21BB5FAA32AF3F": No secret key
gpg: /tmp/debsign.QNCSozgK/blankon-keyring_2016.09.04-4.2.dsc: clear-sign failed: No secret key
debsign: gpg error occurred!  Aborting....
debuild: fatal error at line 1112:
running debsign failed
```

Antara lain mungkin disebabkan oleh:
- Identitas kunci untuk menandatangani paket belum ditetapkan atau tidak cocok dengan yang ada di kantong kunci GPG Anda. Silakan ditetap dengan perintah, `rgsh-cli config --chief https://irgsh.blankonlinux.or.id --key YOURKEYIDENTITY`
- Nama dan alamat surat elektronik perawat paket yang ada di berkas `debian/changelog` tidak cocok dengan identitas kunci yang ada di kantong kunci GPG Anda. Silakan sesuaikan lagi berkas tersebut.


### Permission denied di tty

Galatnya,
```
gpg: agent_genkey failed: Permission denied
Key generation failed: Permission denied
```

Biasanya terjadi bila mencoba generate gpg namun dalam sesi SSH. Solusinya coba generate ulang namun dalam tmux atau cek kepemilikan sesi tty dengan,

```
ls -l $(tty)
```

Lalu geser kepemilikannya dengan,
```
chown namapengguna /dev/pts/0
```
