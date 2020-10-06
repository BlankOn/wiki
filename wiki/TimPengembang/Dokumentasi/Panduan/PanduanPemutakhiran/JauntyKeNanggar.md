# Panduan Pindah dari Jaunty ke Nanggar
    * Ambil dan masukkan keyring repositori BlankOn ke dalam apt-key:
      wget http://arsip.blankonlinux.or.id/blankon/project/blankon-archive-
      keyring.gpg -O - | sudo apt-key add -
          o Aktifkan komponen main restricted universe dan multiverse milik
            Ubuntu yang ada di /etc/apt/sources.list
          o Masukkan repositori BlankOn ke /etc/apt/sources.list
            deb http://arsip.blankonlinux.or.id/blankon nanggar main restricted
            deb http://arsip.blankonlinux.or.id/blankon nanggar-updates main
            restricted
            deb http://arsip.blankonlinux.or.id/blankon nanggar-security main
            restricted
          o Perbarui basis data paket
            sudo apt-get update
          o Naikkan versi
            sudo apt-get upgrade
          o Install blankon-desktop untuk varian Standar dan jawab Ya untuk
            semua pertanyaan.
            sudo apt-get install blankon-desktop
          o Install blankon-desktop-minimalist untuk varian Minimalis dan jawab
            Ya untuk semua pertanyaan.
            sudo apt-get install blankon-desktop-minimalist
Last modified on 06/14/2010 07:14:39 PM
#### 
    
 
 
 
 
 
---
 
