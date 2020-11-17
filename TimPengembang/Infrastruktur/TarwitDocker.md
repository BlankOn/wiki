# Deploy tarwit dengan Docker

Berikut langkah-langkah untuk melakukan deploy tarwit dengan docker dan docker-compose

- Clone repository tarwit

```
$ git clone https://github.com/samsulmaarif/tarwit.git
$ cd tarwit
```

- Install Docker terlebih dahulu, cara termudahnya dengan menjalankan perintah berikut :

```
$ curl -fsSL https://get.docker.com | sudo bash -
```

- tambahkan user ke grup docker

```
$ sudo usermod -aG docker namauser
```

- install docker-compose

```
$ sudo curl -L "https://github.com/docker/compose/releases/download/1.22.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
$ sudo chmod +x /usr/local/bin/docker-compose
```

- logout, lalu login lagi untuk menjalankan perintah berikutnya, atau gunakan tab terminal baru
- Sunting berkas *docker-compose.yml*
- pada service **php**, bagian **environment** lengkapi dengan credensial API twitter

```
- TW_CONSUMER_KEY=
- TW_SECRET_KEY=
- TW_ACCESS_TOKEN=
- TW_ACCESS_TOKEN_SECRET=
- DB_HOST=tarwitdb
- DB_USER=root
- DB_NAME=tarwit
- DB_PASSWD=strongpassword
```

- buat beberapa direktori

```
$ mkdir -p tmp/img
$ mkdir logs
$ mkdir dbdata
```

- lakukan proses build dengan perintah:

```
$ docker-compose --verbose build
```

- eksekusi perintah berikut untuk menjalankan tarwit:

```
$ docker-compose --verbose up
```

- install dependency untuk twitteroauth dengan masuk ke container melalui perintah docker-compose

```
$ docker-compose exec php bash
www-data@a41a38a96ac6:~/html$ cd databaseFiles/twitteroauth
www-data@a41a38a96ac6:~/html/databaseFiles/twitteroauth$ composer install
```

- Jika semua berjalan lancar, coba akses melalui peramban URL http://ip-server:8000 atau jika di lokal dapat diakses langsung dengan http://localhost:8000
