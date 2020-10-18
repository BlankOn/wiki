
# Pembuatan ISO

1.Install genisoimage 
```
~/livecd$ sudo apt-get install genisoimage
```

2.Generate menjadi iso image 
```
~/livecd$ genisoimage -v -A BlankOnCDFactory -p BlankOn -publisher BlankOn -V "BlankOnSaya" -no-emul-boot -boot-load-size 4 -boot-info-table -r -b isolinux/isolinux.bin -c isolinux/boot.cat -o binary.iso -J -l -cache-inodes -allow-multidot binary
```

#####Keluaran:
```
Warning: creating filesystem that does not conform to ISO-9660.
I: -input-charset not specified, using utf-8 (detected in locale settings)
genisoimage 1.1.6 (Linux)
Scanning binary
Scanning binary/isolinux
Excluded by match: binary/isolinux/boot.cat
Scanning binary/casper
genisoimage: Permission denied. File binary/casper/filesystem.squashfs is not readable - ignoring
Writing:   Initial Padblock                        Start Block 0
Done with: Initial Padblock                        Block(s)    16
Writing:   Primary Volume Descriptor               Start Block 16
Done with: Primary Volume Descriptor               Block(s)    1
Writing:   Eltorito Volume Descriptor              Start Block 17
Size of boot image is 4 sectors -> No emulation
Done with: Eltorito Volume Descriptor              Block(s)    1
Writing:   Joliet Volume Descriptor                Start Block 18
Done with: Joliet Volume Descriptor                Block(s)    1
Writing:   End Volume Descriptor                   Start Block 19
Done with: End Volume Descriptor                   Block(s)    1
Writing:   Version block                           Start Block 20
Done with: Version block                           Block(s)    1
Writing:   Path table                              Start Block 21
Done with: Path table                              Block(s)    4
Writing:   Joliet path table                       Start Block 25
Done with: Joliet path table                       Block(s)    4
Writing:   Directory tree                          Start Block 29
Done with: Directory tree                          Block(s)    3
Writing:   Joliet directory tree                   Start Block 32
genisoimage: Unexpected joliet directory length 164 expected: 168 ''
Done with: Joliet directory tree                   Block(s)    3
Writing:   Directory tree cleanup                  Start Block 35
Done with: Directory tree cleanup                  Block(s)    0
Writing:   Extension record                        Start Block 35
Done with: Extension record                        Block(s)    1
Writing:   The File(s)                             Start Block 36
 87.96% done, estimate finish Fri Oct 31 19:51:40 2008
Total translation table size: 2048
Total rockridge attributes bytes: 1813
Total directory bytes: 4574
Path table size(bytes): 40
Done with: The File(s)                             Block(s)    5502
Writing:   Ending Padblock                         Start Block 5538
Done with: Ending Padblock                         Block(s)    150
Max brk space used 0
5688 extents written (11 MB)
```
   
3.Akan tercipta file binary.iso 
```
~/livecd$ ls
binary  binary.iso  chroot  pabrik-cd
```

4.Siap dicoba. Screenshot di attachment 
```
Last modified 9 years ago Last modified on 10/31/2008 08:37:38 PM
Attachments (1)
```
Screenshot-ubuntu (LiveCD-snapshot1) [Running] - VirtualBox OSE.png (22.1 KB) - added by kholis 9 years ago.

Download all attachments as:.[zip](dev.blankonlinux.or.id/zip-attachment/wiki/Dokumentasi/Lokakarya/MembuatLiveCD/PembuatanISO/)
