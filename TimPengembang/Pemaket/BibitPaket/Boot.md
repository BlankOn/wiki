### Bibit Paket - Boot
# Kernels and Bootloaders

The default kernels and bootloaders are not to be installed by debootstrap,
and *-minimal metapackages should not depend on them; however, they do need
to end up on CD images and in live filesystems. We therefore put them in a
separate seed.

We seed both linux-* and linux-image-* so that it's easier to build CD
images without the restricted component. The linux-* kernels include
restricted modules.

 * Kernel-Stem: linux linux-image
== i386 ==
 * grub [amd64 i386]                      # lilo will be in supported
 * ${Kernel-Stem}-generic [i386]          # our chosen default install kernel

Last modified on 06/16/2008 10:54:22 AM

---
 
