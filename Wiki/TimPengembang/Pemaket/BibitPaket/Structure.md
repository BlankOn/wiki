## Bibit Paket - Structure

```
required:
minimal: required
boot:
standard: required minimal
desktop: required minimal standard
dns-server: required minimal standard
lamp-server: required minimal standard
server-ship: boot required minimal standard dns-server lamp-server
ship: boot required minimal standard desktop
live: required minimal standard desktop
ship-live: boot required minimal standard desktop live
installer:
build-essential: required
development: required minimal standard desktop
mobile: required minimal
mobile-dev: required minimal mobile
supported: boot required minimal standard desktop dns-server lamp-server
server-ship ship live ship-live build-essential development mobile mobile-dev
```

Last modified on 06/18/2008 09:51:28 AM

---
 
