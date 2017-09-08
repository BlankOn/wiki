# Panduan Mengunduh
Tempat mengunduh cetakan CD akan diumumkan lewat milis pengembang. Biasanya ada di ​halaman_cdimage

#### Cek md5sum
Untuk memastikan bahwa cetakan cd yang anda unduh adalah
utuh dan 100% sama dengan yang dibuat oleh pengembang, lakukan cek md5sum dari
ISO anda, buka terminal dan lakukan:
md5sum namaISO.iso

Dimana namaISO.iso adalah nama ISO installer yang telah anda unduh dan akan di
verifikasi. Nilai referensi dapat ditemukan di dalam berkas bernama MD5SUMS di
dalam direktori unduh dari ISO tersebut.

#### Rsync BlankOn
    * Apa itu rsync? baca di ​sini dan di ​sini
    * Intinya Rsync adalah metode mengunduh yang memanfaatkan berkas-berkas
      yang sudah diunduh sebelumnya, sehingga tidak perlu mengunduh seluruh
      bagian dari berkas yang ingin kita unduh, cukup sebagian saja yang
      berbeda dari berkas yang telah ada.
    * ISO jahitan harian blankon cdlive terbaru`rsync -avz --progress --partial cdimage.blankonlinux.or.id::cdimage/livecd-harian/current/<NAMA-CD.iso> .`
    * ISO rilis BlankOn `rsync -avz --progress --partial cdimage.blankonlinux.or.id::rilis/<VERSI>/<NAMA-CD.iso>`

#### Rsync Racikan BlankOn
    * ISO jahitan harian racikan BlankOn cdlive terbaru `rsync -avz --progress --partial cdimage.blankonlinux.or.id::cdimage/<NAMA-RACIKAN>/current/<NAMA-CD.iso>`
    * ISO rilis BlankOn `rsync -avz --progress --partial cdimage.blankonlinux.or.id::rilis/<NAMA-RACIKAN>/<VERSI>/<NAMA-CD.iso>`

Last modified on 10/16/2011 08:30:24 AM

 
---
 
