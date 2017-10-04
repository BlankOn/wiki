# Log Kelas Pemaket 2009 10 22-23

## Kelas BZR
[22:27:59] <somat1> aftian: mau nyobain bzr gak pak bos ?
[22:28:07] <aftian> somat1 : iya
[22:28:22] <somat1> cobain buka terminal
[22:28:34] <aftian> somat1 : sudah pak
[22:28:38] <somat1> terus buat direktori
[22:28:43] <somat1> untuk kerja
[22:29:20] <somat1> buat direktorinya namanya apa pak bos ?
[22:29:35] <aftian> aan
[22:30:11] <aftian> /home/aftian/Dokumen/aan
[22:30:26] <somat1> aftian: cd aan
[22:31:47] <somat1> bzr branch ​http://dev.blankonlinux.or.id/browser/nanggar/
lxde-l10n-id/[[BR]]
[22:32:26] <aftian> somat1: aftian@ledoan:~/Dokumen/aan$ bzr branch ​http://
dev.blankonlinux.or.id/browser/nanggar/lxde-l10n-id/[[BR]]
[22:32:27] <aftian> ​http://dev.blankonlinux.or.id/browser/nanggar/lxde-l10n-
id/ is redirected to ​http://dev.blankonlinux.or.id/bzr/nanggar/lxde-l10n-id/[
[BR]]
[22:32:27] <aftian> Format <RepositoryFormatKnit1> for ​http://
dev.blankonlinux.or.id/bzr/nanggar/lxde-l10n-id/.bzr/ is deprecated - please
use 'bzr upgrade' to get better performance
[22:32:27] <aftian> Branched 4 revision(s).
[22:32:55] <somat1> aftian: kok cepet bangat ?
[22:33:06] <somat1> aftian: pake blankon bajakan berarti
[22:33:33] <aftian> somat1 : pake nanggar bajakan sama colo kuda lumping
[22:34:03] <somat1> cd lxde-l10n-id
[22:34:35] <somat1> terus
[22:34:47] <aftian> dch -i
[22:35:04] <somat1> bzr push bzr+ssh://bzr@dev.blankonlinux.or.id/bzr/ujicoba/
lxde-l10n-id/[[BR]]
[22:35:45] <aftian> pasword ???
[22:36:00] <somat1> aftian: pernah bikin kunci ssh ?
[22:36:05] <aftian> pernah
[22:36:05] <somat1> itu password ssh sampeyan
[22:36:09] <aftian> aftian@ledoan
[22:36:23] <somat1> aftian: yo, masukin password ssh sampeyan

[22:36:56] <aftian> lah kok salah
[22:37:04] <aftian> ndak bisa masuk
[22:37:30] <somat1> aftian: sip
[22:37:45] <aftian> somat1 : lah kok sip
[22:38:00] <somat1> aftian: langkah selanjutnya
[22:38:06] <aftian> ok
[22:38:09] <somat1> aftian: berarti sampeyan belum memasukkan ssh sampeyan
[22:38:15] <somat1> maksudnya kunci ssh sampeyan
[22:38:16] <aftian> memasukkan ke mana
[22:38:22] <somat1> ke yeyen
[22:38:25] <aftian> wah
[22:38:27] <somat1> nanti di kasih tau caranya
[22:38:28] <aftian> caranya?
[22:38:36] <somat1> sekarang tips dan trik
[22:38:41] <aftian> ok
[22:38:47] <somat1> kunci ssh sampeyan itu ada di ~/,ssh
[22:39:04] <somat1> jadi kalo install ulang dan direktori home nya di format
berarti kunci ssh tadi itu hilang
[22:39:29] <somat1> berarti sampeyan harus bikin kunci ssh lagi
[22:39:54] <somat1> sudah itu sampeyan harus mendaftarkan ke yeyen lagi
[22:40:18] <aftian> cara ngedaftarinya
[22:40:33] <somat1> aftian: belum.....
[22:40:33] <somat1> bentar lagi
[22:40:42] <somat1> jadi, biar gak repot, peliharalah dengan baik kunci ssh
sampeyan itu
[22:40:52] <somat1> itu tips nya
[22:40:57] <somat1> sekarang daftarkan kunci ssh sampeyan
[22:40:57] <somat1> dengan cara
[22:41:04] <somat1> login dulu ke wiki nya pengembang blankon
[22:41:11] <somat1> yang berada di dev.boi
[22:41:55] <somat1> sekarang di menu trac ada tautan ke MyAccount?
[22:41:58] <somat1> klik itu
[22:42:30] <somat1> sekarang muncul menu baru di menu kotak
[22:42:33] <somat1> SSH Keys
[22:42:43] <aftian> ok
[22:42:44] <somat1> klik itu
[22:43:21] <somat1> aftian: klik browse
[22:43:25] <aftian> ok [22:43:39] <somat1> aftian: kemudian cari kunci ssh
sampeyan yang id_dsa.pub
[22:43:54] <somat1> aftian: klik open, kemudian pencet tombol upload
[22:43:57] <somat1> aftian: selesai
[22:44:03] <somat1> sekarang di coba lagi push yang tadi
[22:44:15] <somat1> jangan lupa ke cabang ujicoba
[22:44:58] <somat1> kalau belum bisa juga, berarti masih ada prosedur di yeyen,
dan saya belum tau itu, dan harus belajar lagi dari suhu mdamt
[22:47:00] <somat1> aftian: pegimane ?
[22:47:10] <aftian> somat1 : kagak bise
[22:47:24] <somat1> aftian: kagak bisane pegimane ?
[22:47:40] <somat1> bzr push bzr+ssh://bzr@dev.blankonlinux.or.id/bzr/ujicoba/
lxde-l10n-id/[[BR]]
[22:47:54] <aftian> Permission denied (publickey,password).
[22:47:54] <aftian> bzr: ERROR: Connection closed: Unexpected end of message.
Please check connectivity and permissions, and report a bug if problems
persist.
BelumSelesei?
Last modified on 10/24/2009 07:12:36 PM



