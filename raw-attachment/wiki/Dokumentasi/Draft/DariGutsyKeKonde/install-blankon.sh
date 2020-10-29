#!/bin/bash
# author = Mahyuddin Susanto (udienz AT gmail.com)
# BlankOn Linux = http://www.blankonlinux.or.id
# Milis http://group.google.com/group/blankon
# Halaman Wiki http://wiki.ubuntu-id.org
# Informasi Proyek https://edge.launchpad.net/blankon

ROOT_UID=0
SOURCES="/etc/apt/sources.list"
SOURCES_TMP="/tmp/sources.txt"
SOURCES_BACKUP="/etc/apt/sources.list.backup.blankon"
EXISTS="no"
RECOMMENT="no"


if grep -q "7.10" /etc/issue ; then VERSION="gutsy"
elif grep -q "7.04" /etc/issue ; then VERSION="feisty"
elif grep -q "6.10" /etc/issue ; then VERSION="edgy"
elif grep -q "6.06" /etc/issue ; then VERSION="dapper"
else 
	echo "BlankOn linux tersedia dalam Ubuntu Gutsy jika anda menggunakan versi lama mungkin akan lain jadinya :p"
	exit 1
fi

# Need sudo privileges
if [ "$UID" -ne "$ROOT_UID" ]
then
  echo "Anda harus memiliki hak root untuk menjalakan skript ini atau silakan coba sudo ./install-blankon."
  exit $E_NOTROOT
fi  

#Make sure no processes which will conflict are running
function conflict_check {
sleep 1
if ps -U root -u root u | grep "synaptic" | grep -v grep > /dev/null;
then echo "Instalasi Gagal!. Tutup Synaptic dahulu kemudian coba lagi ya....";
exit 1;
elif ps -U root -u root u | grep "update-manager" | grep -v grep > /dev/null;
then echo "Instalasi Gagal!. Tutup update-manager dahulu kemudian coba lagi ya....";
exit 1;
elif ps -U root -u root u | grep "apt-get" | grep -v grep > /dev/null;
then echo "Instalasi Gagal!. Menunggu proses apt-get hingga selesai, atau tutup proses yang sedang berjalan, kemudian coba lagi ya....";
exit 1;
elif ps -U root -u root u | grep "dpkg" | grep -v grep > /dev/null;
then
   killall -9 dpkg
   sleep 1
   if ps -U root -u root u | grep "dpkg" | grep -v grep > /dev/null;
   then echo "Instalasi Gagal!. Tutup segala yang berkaitan dengan dpkg.";
       exit 1;
   fi
fi
}

conflict_check

echo "Mempersiapkan sistem untuk instalasi BlankOn"

#Sort out sources.list
cat $SOURCES > $SOURCES_TMP
echo "" >> $SOURCES_TMP

if grep -q "http://arsip.blankonlinux.or.id/blankon" $SOURCES_TMP ; then EXISTS="yes"
else
 	echo "Menambahkan repository BlankOn dalam sources.list" 
	echo "#BlankOn Linux" >> $SOURCES_TMP
 	echo "deb http://arsip.blankonlinux.or.id/blankon main restricted universe multiverse #BlankOn Linux" >> $SOURCES_TMP
# jika anda ingin mengupdate dari server foss-id
# 	echo "deb http://dl2.foss-id.web.id/ubuntu/ $VERSION main universe restricted multiverse #temp" >> $SOURCES_TMP
# memasukkan update Blankon Konde
	echo deb http://arsip.blankonlinux.or.id/blankon konde-updates main restricted
# memasukkan update keamanan BlankOn Konde
	echo deb http://security.blankonlinux.or.id/blankon konde-security main restricted
fi

echo "Membuat bakingup sources.list" 
cp $SOURCES $SOURCES_BACKUP
mv $SOURCES_TMP $SOURCES
chown root:root $SOURCES

# menambahkan GPG
echo "Mengunduh Kunci GPG"
wget -q http://cdimage.blankonlinux.or.id/blankon-archive-keyring.gpg -O- | apt-key add -

# menginstall paket Blankon
echo "Menginstall Paket BlankOn"
apt-get update
apt-get upgrade
apt-get install blankon-desktop blankon-minimal blankon-standard germinate-blankon gfxboot-theme-blankon multimedia-blankon

# membersihkan cache
apt-get clean
apt-get autoclean

# greet
echo "instalasi telah selesai, Alhamdulillah"
echo "Silakan kunjugi http://groups.google.com/group/Blankon untuk mendapatkan bantuan teknis dan dukungan"

exit 0
