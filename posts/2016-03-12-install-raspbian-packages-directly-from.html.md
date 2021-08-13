---
title: 'Install Raspbian packages directly from Ubuntu with chroot to Raspbian file system (on SD card)'
date: '2016-03-12 19:57:00'
---

update or install package directly from ubuntu on raspbian sd card  
  

> sudo apt-get install qemu proot  
> sudo proot -q qemu-arm -B -r /mnt/path/to/raspbian/

  
source : <http://raspberrypi.stackexchange.com/questions/23675/install-raspbian-packages-directly-from-ubuntu-with-chroot-to-raspbian-file-syst>