# Sidik Gangguan

### IRGSH: Kunci privat tidak dikenali

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


### GPG: Permission denied di tty

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
