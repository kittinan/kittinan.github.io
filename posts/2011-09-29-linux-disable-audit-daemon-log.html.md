---
title: 'linux : disable audit daemon log'
date: '2011-09-29 22:26:00'
---

auditd -s disable  
  
rm -rf /var/log/audit/  
  
cat /dev/null > /var/log/lastlog