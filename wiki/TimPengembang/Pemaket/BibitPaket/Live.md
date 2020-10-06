## Bibit Paket - Live

Task-Per-Derivative: 1
Task-Section: user
Task-Description: Ubuntu live CD
Task-Extended-Description: This task provides the extra packages installed on
the Ubuntu live CD. It is neither useful nor recommended to install this task
in other environments.
Task-Relevance: 2
Task-Key: ubiquity-frontend-gtk
Task-Test-new-install: skip show
 * Languages: en
 * language-pack-${Languages}
 * language-pack-gnome-${Languages}
 * language-support-${Languages}
 * Languages: id
 * language-pack-${Languages} [i386]
 * language-pack-gnome-${Languages} [i386]
 * ntfsprogs
 * gparted

## Ubiquity components
These packages make up the Ubiquity live installer.
 * ubiquity-frontend-gtk
 * ubiquity-ubuntu-artwork
Ubiquity needs full filesystem support for the partitioner.
 * xfsprogs
 * jfsutils

Last modified on 06/16/2008 11:02:32 AM
 
---
 
