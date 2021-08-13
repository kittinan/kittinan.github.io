---
title: 'Fix Genymotion 2.8 Ubuntu 14.04'
date: '2016-11-08 10:19:00'
---

Genymotion 2.8.0 thrown error on Ubuntu 14.04  
  
Error:  
  

> CXXABI\_1.3.8 not found

  
Solution to solve this problem  
  

> LD\_LIBRARY\_PATH=/usr/local/lib64/:$LD\_LIBRARY\_PATH  
> export LD\_LIBRARY\_PATH  
> sudo add-apt-repository ppa:ubuntu-toolchain-r/test  
> sudo apt-get update  
> sudo apt-get install gcc-4.9 g++-4.9

  
  
Reference  
<http://stackoverflow.com/questions/37817792/how-to-fix-genymotion-in-linux-elementaryos-with-error-cxxabi-1-3-8-not-found>