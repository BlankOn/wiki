# Panduan Pindah dari Hardy ke Lontara
    * Ambil dan masukkan keyring repositori BlankOn ke dalam apt-key:
      wget http://cdimage.blankonlinux.or.id/blankon-archive-keyring.gpg -O - |
      sudo apt-key add -
          o Aktifkan komponen main restricted universe dan multiverse milik
            Ubuntu yang ada di /etc/apt/sources.list
          o Masukkan repositori BlankOn ke /etc/apt/sources.list
            deb http://arsip.blankonlinux.or.id/blankon lontara main restricted
            deb http://arsip.blankonlinux.or.id/blankon lontara-updates main
            restricted
            deb http://security.blankonlinux.or.id/blankon lontara-security
            main restricted
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
Last modified on 06/09/2008 01:32:26 PM



