# Konf.boi

Untuk memperaharui situs konf.boi dilakukan di

```
bzr ​http://dev.blankonlinux.or.id/browser/infrastruktur/konfboi
```

login ke marya

```
$ sudo su - situs
$ cd konf
$ bzr pull
$ exit
$ sudo /etc/init.d/fastcgi restart
$ cd /home/situs/run
$ sudo ./restart.sh
```
