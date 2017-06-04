# Panduan Mengunduh

**Mengunduh file ISO**
    * seluruh kategori : ​http://cdimage.blankonlinux.or.id/blankon
Update untuk ISO ini akan diumumkan melalui ​milis_BlankOn secara berkala. Cek md5sum Untuk melakukan cek md5sum dari ISO anda, buka terminal dan lakukan:
md5sum namaISO.iso

Dimana namaISO.iso adalah nama ISO installer yang telah anda unduh dan akan di
verifikasi. Nilai referensi dapat ditemukan di dalam berkas bernama MD5SUMS di
dalam direktori unduh dari ISO tersebut.

**Rsync BlankOn**
    * Seluruh cetakan cd / ISO BlankOn dan racikan BlankOn => untuk cermin
rsync -avzlH --delete-after cdimage.blankonlinux.or.id::blankon/ .
    * ISO jahitan harian blankon cdlive terbaru
rsync -avz --progress --partial cdimage.blankonlinux.or.id::cdimage/livecd-
harian/current/<NAMA-CD.iso> .
    * Seluruh ISO rilis proyek BlankOn
rsync -avzlH --delete-after cdimage.blankonlinux.or.id::rilis/ .
    * ISO rilis BlankOn
rsync -avz --progress --partial cdimage.blankonlinux.or.id::rilis/<VERSI>/
<NAMA-CD.iso> .

**Rsync Racikan BlankOn**
    * ISO jahitan harian racikan BlankOn cdlive terbaru
rsync -avz --progress --partial cdimage.blankonlinux.or.id::blankon/<NAMA-
RACIKAN>/current/<NAMA-CD.iso> .
    * ISO rilis BlankOn
rsync -avz --progress --partial cdimage.blankonlinux.or.id::rilis/<NAMA-
RACIKAN>/<VERSI>/<NAMA-CD.iso> .


