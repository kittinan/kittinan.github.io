---
title: 'Ubuntu 14.04 Yubikey 4 U2F not work'
date: '2017-02-02 21:29:00'
---

I got Yubikey 4 today but U2F Feature not work on my Chrome.  
  
Fix by  
  

> cd /etc/udev/rules.d  
> sudo wget https://raw.githubusercontent.com/Yubico/yubikey-personalization/master/69-yubikey.rules  
> sudo wget https://raw.githubusercontent.com/Yubico/yubikey-personalization/master/70-yubikey.rules

  
Unplug and insert Yubikey again  
  
U2F will work  
  
[![](https://2.bp.blogspot.com/-qa7vm2ZuWok/WJNCRgbPw1I/AAAAAAAAuEs/FOtXdkP6zWEYaDgZtulvJUnv3b6yC7NNQCLcB/s640/_IMG_20170202_200400.jpg)](https://2.bp.blogspot.com/-qa7vm2ZuWok/WJNCRgbPw1I/AAAAAAAAuEs/FOtXdkP6zWEYaDgZtulvJUnv3b6yC7NNQCLcB/s1600/_IMG_20170202_200400.jpg)  
