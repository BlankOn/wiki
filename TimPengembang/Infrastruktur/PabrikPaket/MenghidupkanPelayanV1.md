# Menghidupkan Pelayan V1

Menghidupkan Pabrik Paket Pelayan ini jika mesin setelah dilakukan restart atau
mati. Pabrik Paket Pelayan ini berada di marya. Tanda-tanda jika pabrik paket
pelayan tidak bekerja adalah halaman ​http://irgsh.blankonlinux.or.id/ akan
selalu berstatus new, untuk itu perlu dibangkitkan pabrik paket pekerja ini.

Caranya :

```
sudo su - irgsh`
cd web-interfaces/task-init/
nohup ./task-init.sh &
```

Demikian

Last modified on 03/11/2011 04:41:57 PM

---
 
