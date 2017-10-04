# Apa Itu Git ?

git adalah sebuah system versioning control (sistem kontrol versi) terdistribusi, ada istilah lain dari git ini adalah source code management software (aplikasi manajemen kode sumber), atau menurut wikipedia git adalah perangkat lunak pengontrol versi atau proyek manajemen kode perangkat lunak yang diciptakan oleh Linus Torvalds, yang pada awalnya ditujukan untuk pengembangan kernel Linux.

#Bagaimana Menggunakan Git ?

1.Instalasi Git 

**sudo apt-get install git-core**

* Optional: 

**sudo apt-get install gitk**

2.Konfigurasi Git 

**git config user.name ¨Dwi Sasongko S¨**

**git config user.email ¨ruckuus@…¨**

* Cek Output: 

**git config user.name**

**git config user.email**

**\~/.gitconfig**

3. Clone Git Repository 

**​git://github.com/ruckuus/NgeGitting.git**

4.Membuat Git Repository 

**git init**

**git add**

5.Status 
untuk melihat status branch:

**git status**

6.Log 

untuk melihat status perubahan kode sumber:

**git log**

7.Branch 
 
 pencabangan versi kode dengan tujuan tertentu, misalnya ada 10 pengembang, masing-masing mengerjakan fitur berbeda maka masing-masing bisa buat branch sendiri.

**git branch**

**git show-branch**

**git checkout -b nama_cabang cabang_asal**

**git checkout -b tambah_kecepatan master**

tambah kecepatan mengikuti master, cabang_asal dapat berupa cabang atau tag
untuk menghapus branch, lakukan perintah berikut:

**git branch -D nama_branch**

8.Commit 

commit perubahan di branch tertentu: 

**git commit -m ¨pesan dan kesan**¨
**git commit -a -s**

* mengulangi commit terakhir setelah menambah fitur baru: 

**git commit –amend**

* mereset commit tapi mempertahankan perubahan: 

**git reset –soft HEAD**

mereset commit tanpa mempertahankan perubahan: 

**git reset –hard HEAD**

9.Patch 

* menghasilkan patch dari tiap commit: 

**git format-patch HEAD <- satu patch perbedaan terakhir**

**git format-patch HEAD~n <- n perubahan dari HEAD**

10.Melakukan Patch 

**git apply file-anuh-menganu-si-anuh.patch**

11.Tag 

* menandai commit: 

**git tag versi commit_id**

Contoh:

git tag rc01 3bba5efb654b885a6be2735a9e635aeaf2714381

berarti commit 3bba5efb654b885a6be2735a9e635aeaf2714381 ditandai dengan rc01

**git tag versi commit_id**

12.Merge 
* menggabungkan dari satu branch dengan branch sekarang:

**git checkout master**

**git merge tambah_kecepatan <- gabungkan perubahan di tambah_kecepatan ke master**

13.Rilis 

**git archive –format=tar –prefix=NgeGitting/? HEAD | gzip > ../rilis/anuh.tar.gz**

14.Pull 

* mengambil lalu menggabungkan perubahan yang terjadi di remote origin [.git/gitconfig]

 **git pull**

15.Push 

* mengirimkan perubahan ke master

**git push origin master**

16.Clone Bare 

Anda butuh .git?

git clone –bare REPO OUTPUT.git git clone –bare NgeGitting? NgeGitting?.git

Sumber:

1.​http://ruckuus.wordpress.com/2010/11/12/cara-murah-memakai-git/ 

2.​http://110.139.14.100/aftian/irc/BlankOn/%23blankon.20101115.log 

3.​http://ha.hn.web.id/2010/11/16/belajar-git/ 

4.​http://id.wikipedia.org/wiki/Git 
