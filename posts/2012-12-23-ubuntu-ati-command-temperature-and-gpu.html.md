---
title: 'Ubuntu ati command temperature and gpu usage'
date: '2012-12-23 14:48:00'
---

  
  
if u want to check GPU load in the terminal just type   
  
aticonfig --adapter=0 --od-getclocks  
  
if you want to check gpu temp in the terminal type   
  
aticonfig --odgt  
  
  
if you want to add gpu load to conky add this to conky conf.  
  
${font verdana:size=8}${color green}${execi 1 aticonfig --adapter=0 --od-getclocks | grep -i GPU}  
