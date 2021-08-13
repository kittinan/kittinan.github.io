---
title: 'How to Download or Dump rtmp Linux / Ubuntu'
date: '2013-05-11 15:52:00'
---

install rtmpdump package  

> sudo apt-get install rtmpdump

  

> sudo iptables -t nat -A OUTPUT -p tcp --dport 1935 -m owner \! --uid-owner root -j REDIRECT ;

  

> rtmpsrv ;

  
and then go to website that streaming rtmp the rtmpsrv will generate rtmpdump parameter like this  
  
[![](http://4.bp.blogspot.com/-dPvIFmBVNo4/UY4GXXH4ikI/AAAAAAAAFvA/m2LshmGYhLQ/s400/Screenshot-null@null:+-tmp.png)](http://4.bp.blogspot.com/-dPvIFmBVNo4/UY4GXXH4ikI/AAAAAAAAFvA/m2LshmGYhLQ/s1600/Screenshot-null@null:+-tmp.png)  
  
after done restore iptable  
  

> sudo iptables -t nat -D OUTPUT -p tcp --dport 1935 -m owner \! --uid-owner root -j REDIRECT ;

