   BlankOn
 About_Trac
    * About_Trac
    * Preferences
    * Login
    * Help/Guide
    * Wiki
    * Roadmap
    * Browse_Repository
    * View_Reports
[q                 ]
    * BlankOn  /
    * Wiki  /
    * Infrastruktur  /
    * Yeyen
## Yeyen
### Server
# screen -dmS master386
# screen -d -r master386
# su - irgsh
$ cd pabrik-paket/scripts/server
$ ./run-master.sh i386
^A^D
# screen -dmS amd64
# screen -d -r masteramd64
# su - irgsh
$ cd pabrik-paket/scripts/server
$ ./run-master.sh amd64
^A^D
### Slave
# screen -dmS slave386
# screen -d -r slave386
# su - irgsh
$ cd pabrik-paket/scripts/slave
$ ./run-slave.sh
^A^D
### IRC
# screen -dmS irc
# screen -d -r irc
# su - irgsh
$ cd irc/
$ supybot -d irgsh.conf
^A^D
### Patch
#### dpkg-scanpackages (Hardy)
 dpkg-scanpackages	2008-11-29 18:53:19.000000000 +0700
+++ blankon-dpkg-scanpackages	2008-11-29 16:58:57.000000000 +0700
@@ -117,6 +117,15 @@
     exit 1;
 }
+my $dbdir = $ENV{PKGDBDIR};
+my $repodir = $ENV{REPODIR};
+my $distroname = $ENV{DISTRONAME};
+
+die "PKGDBDIR undefined" if not defined $dbdir;
+die "REPODIR undefined" if not defined $repodir;
+die "DISTRONAME undefined" if not defined $distroname;
+
+
 my $type = defined($options{type}) ? $options{type} :
 				     $options{udeb} ? 'udeb' : 'deb';
 my $arch = $options{arch};
@@ -182,6 +191,11 @@
 	defined($tv{'Package'})
 	    or error(_g("No Package field in control file of %s"), $fn);
 	my $p= $tv{'Package'}; delete $tv{'Package'};
+
+        my $source = $tv{'Source'};
+        $source = $p if not defined $source;
+        my $db_file = "$dbdir/$distroname/$repodir/$source/" . $tv{'Version'};
+        if (-e "$db_file") {
 	
 	if (defined($packages{$p}) and not $options{multiversion}) {
 	    foreach (@{$packages{$p}}) {
@@ -223,6 +237,7 @@
 	}
 	
 	push @{$packages{$p}}, {%tv};
+        }
     }
 close($find_h);
#### dpkg-scanpackages (Gutsy)
 /usr/bin/dpkg-scanpackages  2007-09-22 03:21:47.000000000 +0700
+++ /usr/bin/blankon-dpkg-scanpackages  2007-12-06 16:33:18.000000000 +0700
@@ -116,6 +116,14 @@
     exit 1;
 }
+my $dbdir = $ENV{PKGDBDIR};
+my $repodir = $ENV{REPODIR};
+my $distroname = $ENV{DISTRONAME};
+
+die "PKGDBDIR undefined" if not defined $dbdir;
+die "REPODIR undefined" if not defined $repodir;
+die "DISTRONAME undefined" if not defined $distroname;
+
 my $udeb = $options{udeb};
 my $arch = $options{arch};
@@ -183,6 +191,11 @@
            or die sprintf(_g("No Package field in control file of %s"),
$fn)."\n";
        my $p= $tv{'Package'}; delete $tv{'Package'};
+
+        my $source = $tv{'Source'};
+        $source = $p if not defined $source;
+        my $db_file = "$dbdir/$distroname/$repodir/$source/" . $tv{'Version'};
+        if (-e "$db_file") {
        if (defined($packages{$p}) and not $options{multiversion}) {
            foreach (@{$packages{$p}}) {
                if (&vercmp($tv{'Version'}, $_->{'Version'})) {
@@ -220,6 +233,7 @@
        }
        push @{$packages{$p}}, {%tv};
+        }
     }
 close($find_h);
#### dpkg-scansources (HH)
 /usr/bin/dpkg-scansources	2008-05-30 23:52:10.000000000 +0700
+++ /usr/bin/blankon-dpkg-scansources	2009-03-01 03:14:22.000000000 +0700
@@ -69,10 +69,20 @@
     'version'		=> \&version,
 );
+
+my $dbdir = $ENV{PKGDBDIR};
+my $repodir = $ENV{REPODIR};
+my $distroname = $ENV{DISTRONAME};
+
+die "PKGDBDIR undefined" if not defined $dbdir;
+die "REPODIR undefined" if not defined $repodir;
+die "DISTRONAME undefined" if not defined $distroname;
+
 sub debug {
     print @_, "\n" if $Debug;
 }
+
 sub xwarndie_mess {
     my @mess = ("$progname: ", @_);
     $mess[$#mess] =~ s/:$/: $!\n/;	# XXX loses if it's really /:\n/
@@ -383,6 +393,15 @@
 	    next;
 	}
+        if ($key eq 'version') {
+            if (defined $source) {
+                my $db_file = "$dbdir/$distroname/$repodir/$source/" . $val;
+                if (!-e "$db_file") {
+                    return;
+                }
+            }
+        }
+
 	# @binary
 	if ($key eq 'binary') {
 	    if (@binary) {
### Mesin
    * Merk : Extron
    * Prosesor : Intel Core2 Duo
    * RAM : 6GB DDR2 [2x2GB + 2x1GB]
    * HD : 2x320GB
    * Posisi : IDC-D3
    * ISP : PadiNet?
KategoriInfra
Last modified on 10/23/2012 08:52:57 AM
#### 
    
 
 
 
 
 
---
[**Daftar Isi Wiki BlankOn**](/DaftarIsi/README.md)
 
[**Indeks Wiki BlankOn**](/Indeks.md)
