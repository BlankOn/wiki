### Memperbarui daftar paket di dalam chroot

```sh
# sudo pbuilder update
```

### Login ke dalam base.tgz

```sh
# sudo pbuilder login
```

### Login ke dalam base.tgz, kemudian simpan saat logout

```sh
# sudo pbuilder login --save-after-login
```

### Login ke dalam base.tgz spesifik, kemudian simpan saat logout

```sh
# sudo pbuilder login --save-after-login --basetgz /path/to/base.tgz
```
