# BlankBerry

BlankBerry adalah BlankOn untuk Raspberry Pi ​http://www.raspberrypi.org/ meski
ditujukan untuk board Raspberry Pi tetapi bisa juga dipasang di qemu jika Anda
belum punya board Raspberry Pi atau sedang menunggunya datang dikirim oleh
penjual.

## Tautan Unduh :
​http://cdimage.blankonlinux.or.id/blankon/blankberry/rote/

atau di cermin cd BlankOn.
Unduh kernel dari: ​http://xecdesign.com/downloads/linux-qemu/kernel-qemu

## Cara Pemasangan Di Qemu

```
sudo apt-get install qemu lzma
xz -d blankberry-rote-armhf-20120826-01.img.xz
sudo qemu-system-arm -M versatilepb -cpu arm1136 -kernel kernel-qemu -m 256 -
drive file=blankberry-rote-armhf-20120827-01.img -serial stdio -append
"dwc_otg.lpm_enable=0 console=ttyAMA0,115200 kgdboc=tty1,115200 console=tty2
root=/dev/sda2 elevator=noop quiet"
```

Selamat menikmati

Last modified on 08/31/2012 04:23:26 PM
    





