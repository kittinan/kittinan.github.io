---
title: 'Linux 11 log file should know'
date: '2017-06-20 09:21:00'
---

/var/log/messages : General message and system related stuff  
/var/log/boot.log : Services success/failures at boot  
/var/log/secure or /var/log/auth.log : Authentication log  
/var/log/utmp or /var/log/wtmp : Login records  
/var/log/btmp  : Failed login records  
/var/log/cron : Scheduler log file  
/var/log/maillog : Mail logs  
/var/log/xferlog : File transfer logs  
/var/log/lastlog : Last login details  
dmesg : Device driver messages  
/var/crash logs : System crash dump  
  
  
Ref: <https://kerneltalks.com/errors/11-log-files-you-should-see-on-your-linux-system/>