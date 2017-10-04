# Membuat Cermin BlankOn

berikut ini adalah langkah untuk membuat cermin BlankOn,
pertama siapkan reprepro
sudo apt-get install reprepro
kemudian buat distribusi BlankOn, pasang konfigurasi untuk melakukan pembaruan
dari arsip.boi
mkdir ~/repo/bulangkon
cd ~/repo/bulangkon
trus bikin berkas2 berikut:
conf/updates
-----------------awal----------
Name: mergeblankon
Suite: ombilin
Method: http://arsip.blankonlinux.or.id/blankon
Architectures: i386 amd64 source
Components: main restricted
-----------------akhir----------
conf/distributions
-----------------awal----------
Origin: BlankOn
Label: BlankOn
Version: 6.0
Suite: ombilin
Codename: ombilin
Architectures: i386 amd64 source
Components: main restricted
Description: Ombilin
Update: - mergeblankon
-----------------akhir----------
kemudian jalankan reprepro
reprepro -v update --lakukan setiap hari/atau jika ingin ada perubahan
kemudian pasang skrip pabrik-cd rujukan
​http://dev.blankonlinux.or.id/browser/infrastruktur/pabrik-cd
Untuk membuat cabang:
bzr branch http://dev.blankonlinux.or.id/bzr/infrastruktur/pabrik-cd/
Untuk memperbaharui:
bzr push bzr+ssh://bzr@dev.blankonlinux.or.id/bzr/infrastruktur/pabrik-cd/
kemudian di profil pasang repo lokal
kemudian Jahit
Last modified on 05/05/2010 06:05:36 PM
#### 
    
 
 
 
 
 
---
 
