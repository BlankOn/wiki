# Jedough
Mesin jedough.id-anime.info dimanfaatkan sebagai pabrik paket amd64. Karena
keterbatasan space di jedough, maka space di yeyen di-share ke jedough melalui
AoE.
### Serve AoE di yeyen
initscript /etc/init.d/aoe; /etc/rc2.d/S90aoe di-symlink ke /etc/init.d/aoe
#! /bin/sh
### BEGIN INIT INFO
# Provides:		vbladed
# Required-Start:	$network $local_fs $remote_fs
# Required-Stop:
# Default-Start:	2 3 4 5
# Default-Stop:		0 1 6
# Short-Description:	AoE share
### END INIT INFO
set -e
# /etc/init.d/aoe: start and stop the vblade daemon
test -x /usr/sbin/vbladed || exit 0
if test -f /etc/default/aoe; then
    . /etc/default/aoe
fi
. /lib/lsb/init-functions
export PATH="${PATH:+$PATH:}/usr/sbin:/sbin"
case "$1" in
  start)
	vblade $MAC_ACL 1 1 eth0 /home/andika/vblade0 < /dev/null 2>&1 | logger -
t vbladed &
	vblade $MAC_ACL 2 0 eth0 /home/andika/vblade1 < /dev/null 2>&1 | logger -
t vbladed &
	vblade $MAC_ACL 1 2 eth0 /home/andika/vblade2 < /dev/null 2>&1 | logger -
t vbladed &
	;;
  stop)
	;;
  *)
	log_action_msg "Usage: /etc/init.d/aoe {start|stop}"
	exit 1
esac
exit 0
Untuk membatasi akses server AoE di Yeyen, berkas /etc/default/aoe diisi dengan
MAC address mesin Jedough
MAC_ACL="-m uu:vv:ww:xx:yy:zz"
### Pemanfaatan AoE di Jedough
berkas /etc/fstab
/dev/etherd/e1.1	/mnt/aoe1	ext3	defaults,noatime	0	0
/dev/etherd/e2.0	/mnt/blankon	ext3	defaults,noatime	0	0
/dev/etherd/e1.2	/mnt/aoe2	ext3	defaults,noatime	0	0
### Slave amd64
... belum selesai ...
KategoriInfra
Last modified on 06/17/2008 12:08:01 AM
#### 
    
 
 
 
 
 
---
 
