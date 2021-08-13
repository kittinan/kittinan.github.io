---
title: 'ssh stdin: is not a tty'
date: '2013-06-16 13:40:00'
---

i found problem on my vps ubuntu 11.10 when i login over ssh. The message after login is  
  
"ssh stdin: is not a tty"  
  
and i founded solution to fix it. thank you for [Harry Jackson](http://www.hjackson.org/blog/archives/2008/10/18/ssh-stdin-is-not-a-tty) post  
  
  
Edit : /etc/fstab and add this line.  
  
devpts /dev/pts devpts mode=0620,gid=5 0 0  
  
reboot  
  
Good Luck~  
  
  
