
### Struktur direktori

- `config/`
  - `hooks/` - Skrip-skrip untuk konfigurasi sistem dihimpun di sini
    - `live/` - Konfigurasi sistem untuk live
    - `normal/` - Konfigurasi sistem untuk yang normal
- `package-lists/`
  - `live.list.chroot` - Daftar paket yang disiapkan untuk lingkungan live
- `binary` - Konfigurasi untuk berkas ISO (filesystem, bootloader, zsync support, etc)
- `bootstarp` - Konfigurasi arsitektur dan lumbung
- `chroot` - Konfigurasi terkait chroot
- `common` - Konfigurasi terkait distribusi (init system, package manager, image name, etc)

### User profile
- Username: `blankon`, disetel di berkas `binary` baris `LB_BOOTAPPEND_LIVE`
- Sandi: `live`

### `live.list.chroot`
- `live-boot`
- `live-config`
- `live-config-systemd`
- `task-gnome-desktop` - paket komplit desktop sampai aplikasi perkantoran, email dll, https://packages.debian.org/bullseye/task-gnome-desktop
- `live-task-gnome`
