# Menyalakan Pabrik Paket V2
## Masuk ke mesin alynne atau mesin yang dipasang di pabrik paket.
## Persiapan Sesi Screen
`$ screen -S pabrik32`

## Persiapan Chroot
```
$ cd /home/pabrik-paket/i386
$ sudo mount -t proc proc chroot/proc
$ sudo mount -t sysfs sysfs chroot/sys
$ sudo mount -o bind /dev chroot/dev
```

## irgsh-node
```
$ cd /home/pabrik-paket/i386
$ sudo chroot chroot
(chroot)root# chmod 777 /dev/shm
(chroot)root# su - pabrik
(chroot)pabrik$ cd pabrik/irgsh-node
(chroot)pabrik$ ./bin/irgsh-node -l DEBUG
```

## irgsh-uploader
```
$ cd /home/pabrik-paket/i386
$ sudo chroot chroot
(chroot)root# su - pabrik
(chroot)pabrik$ cd pabrik/irgsh-node
(chroot)pabrik$ ./bin/irgsh-uploader
```

##cScreen : A : ganti windows
AC : bikin windows screen baru
```
$ sudo screen -x iang/pabrik32
```


