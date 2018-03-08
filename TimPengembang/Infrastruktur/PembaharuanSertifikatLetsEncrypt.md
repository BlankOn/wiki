# Pembaharuan Sertifikat LetsEncrypt
## (khusus untuk aku.boi)

1. arahkan document root aku.boi ke /var/www/html
```
$ cd /etc/nginx/sites-enabled
$ sudo ln -sf ../sites-available/aku.certbot aku
```

2. _reload_ layanan nginx
```
$ sudo -i
# service nginx reload
```

3. jalankan certbot-auto dengan parameter-parameter sebagai berikut
```
# ./certbot-auto certonly --webroot -d aku.blankonlinux.or.id
...
...
 - Congratulations! Your certificate and chain have been saved at:
   /etc/letsencrypt/live/aku.blankonlinux.or.id-0001/fullchain.pem
   Your key file has been saved at:
   /etc/letsencrypt/live/aku.blankonlinux.or.id-0001/privkey.pem
   Your cert will expire on 2018-06-06. To obtain a new or tweaked
   version of this certificate in the future, simply run certbot-auto
   again. To non-interactively renew *all* of your certificates, run
   "certbot-auto renew"
 - If you like Certbot, please consider supporting our work by:

   Donating to ISRG / Let's Encrypt:   https://letsencrypt.org/donate
   Donating to EFF:                    https://eff.org/donate-le

```

4. cek kembali path sertifikat yang ditunjukkan oleh script certbot-auto, agar web server nginx dapat menemukan sertifikatnya. jika path nya tidak sama dengan yang ada di konfigurasi nginx, gantilah.

5. kembalikan konfigurasi yang telah diganti di langkah 1
```
# cd /etc/nginx/sites-enabled
# ln -sf ../sites-available/aku
```

## catatan:
- cek terlebih dahulu apakah konfigurasi web yang dimaksud adalah file biasa atau symbolic link. jika file biasa, copy dulu file tersebut ke /etc/nginx/sites-available. jika nama yg sama sudah ada di /etc/nginx/sites-available, cobalah berpikir kreatif apa sebaiknya yang harus dilakukan
- jika pada langkah 3 ada kesalahan, diskusikan dengan anggota tim yang lain
