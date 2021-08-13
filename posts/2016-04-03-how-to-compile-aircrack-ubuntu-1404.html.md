---
title: 'How to compile aircrack Ubuntu 14.04'
date: '2016-04-03 13:33:00'
---

### Install Dependencies


>   
> sudo apt-get install build-essential libssl-dev libnl-3-dev libnl-genl-3-dev dpkg-dev g++ g++-4.8 libc-dev-bin libc6-dev libstdc++-4.8-dev zlib1g-dev debian-keyring g++-multilib g++-4.8-multilib gcc-4.8-doc libstdc++6-4.8-dbg glibc-doc libstdc++-4.8-doc libalgorithm-merge-perl libssl-doc libalgorithm-diff-xs-perl

### Download and compile


> cd /tmp  
> wget http://download.aircrack-ng.org/aircrack-ng-1.2-rc4.tar.gz  
> tar xfz aircrack-ng-1.2-rc4.tar.gz  
> cd aircrack-ng-1.2-rc4/  
> make  
> sudo make install  
> sudo airodump-ng-oui-update

  
[![](https://4.bp.blogspot.com/-g8Q1Pnn5AK0/VwC5JOddz_I/AAAAAAAAe2w/5vGWXVmFgv4BlqrZT1g6VhEhwG5HxxsbQ/s1600/Screenshot-tun%2540tun-laptop%253A%2B%257E.png)](https://4.bp.blogspot.com/-g8Q1Pnn5AK0/VwC5JOddz_I/AAAAAAAAe2w/5vGWXVmFgv4BlqrZT1g6VhEhwG5HxxsbQ/s1600/Screenshot-tun%2540tun-laptop%253A%2B%257E.png)  
