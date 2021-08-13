---
title: 'Raspberry Pi fix screen blank when idle a few minute'
date: '2016-02-15 21:20:00'
---

  
run this command as root  

> echo -ne "\033[9;0]" >/dev/tty1

