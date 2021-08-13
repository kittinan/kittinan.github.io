---
title: 'Raspberry Pi Set wpa2 auto connect'
date: '2013-11-29 00:10:00'
---

  
  
edit /etc/network/interfaces  
  

> auto wlan0iface wlan0 inet staticaddress 192.168.0.21netmask 255.255.255.0gateway 192.168.0.1wpa-essid not-telling-youwpa-psk not-telling-you-this-either

