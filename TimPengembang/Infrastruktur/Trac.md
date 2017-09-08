# Trac =
Penanggung Jawab: yht
Versi: 0.12.4
Server: rani.boi
### Daftar plugin ==
    * ​OpenID
    * ​GraphViz
    * TracBzr?
### Konfigurasi Nginx ==
#### Akses Berkas Statis ===
Catatan:
    * Direktori berkas statis milik trac ada di /home/wiki/env/htdocs-common/.
      Isi direktori ini disalin dari Trac-0.12.2/trac/htdocs/.
    * Direktori berkas statis milik BlankOn ada di /home/wiki/env/htdocs/.
    * Berkas robots.txt dan favicon.ico juga ada di /home/wiki/env/htdocs/.
    * Attachment tetap ditangani oleh Trac.
# Akses ke berkas statis milik trac akan ditangani langsung oleh nginx
location ~ ^/chrome/common/(.*)$ {
    alias /home/wiki/env/htdocs-common/$1;
}
location ~ ^/chrome/site/(.*)$ {
    alias /home/wiki/env/htdocs/$1;
}
# Akses ke berkas statis spesial
location ~ ^/(robots.txt|favicon.ico)$ {
    alias /home/wiki/env/htdocs/$1;
}
#### Akses Repositori Bazaar
Direktori /browser/ dapat dipakai untuk mengakses repositori jika diakses oleh
klien Bazaar. Jika peramban web biasa membuka direktori ini, maka Trac akan
menampilkan isi repositori.
# Akses ke http://dev.boi/browser/ oleh bzr client akan diarahkan
# ke repository bzr, bukan ke trac.
# Akses dengan browser biasa akan tetap diarahkan ke trac.
location ~ ^/browser/([^/]+)/([^/]+)/.bzr/(.*)$ {
    alias /home/bzr/arsip/bzr/$1/$2/.bzr/$3;
}
Pranala Penting
   1. ​Instalasi_Trac
   2. ​Konfigurasi_Trac
   3. ​Konfigurasi_Trac_+_FastCGI
Last modified on 01/01/2013 11:31:28 PM
#### 
    
 
 
 
 
 
---
 
