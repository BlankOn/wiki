# Rilis CD
### Skrip publish-release
Gunakan skrip publish-release untuk merilis CD:
$ sudo su - cdimage
$ export PATH=/srv/cdimage.blankonlinux.or.id/bin:$PATH
$ for-project <PROJECT>
$ publish-release <SUMBER-JAHITAN> <TANGGAL> <JENIS-CD> fullonly <TARGET-RILIS>
Keterangan:
    * <PROJECT>: blankon, blankon-minimalist, dst.
    * <SUMBER-JAHITAN>: harian untuk alternate harian - livecd-harian untuk
      live-cd harian
    * <TANGGAL>: 20090515, 20090516, dst.
    * <JENIS-CD>: cdlive, alternate
    * <TARGET-RILIS>: rc, beta, jahitan-3, dst.
### Contoh pengunaan
Proyek BlankOn
$ for-project blankon
$ publish-release livecd-harian 20090515 cdlive fullonly beta
$ publish-release harian 20090516 alternate fullonly beta
Proyek BlankOn-Minimalist
$ for-project blankon-minimalist
$ publish-release livecd-harian 20090515 cdlive fullonly beta
$ publish-release harian 20090516 alternate fullonly beta
Sekian!
Last modified on 05/17/2009 10:30:01 AM
#### 
    
 
 
 
 
 
---
 
