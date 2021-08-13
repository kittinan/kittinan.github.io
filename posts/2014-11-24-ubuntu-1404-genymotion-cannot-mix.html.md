---
title: 'Ubuntu 14.04 Genymotion Cannot mix incompatible Qt library [Fixed]'
date: '2014-11-24 15:25:00'
---

  
Error :  
  
[Genymotion] [Fatal] Cannot mix incompatible Qt library (version 0x40801) with this library (version 0x40804)  
  
Solve :  
  
1. install package  
  
sudo apt-get install libxi-dev libxmu-dev  
  
  
2. use the system qt  
  
mkdir QtLibs && mv *Qt*.so* QtLibs