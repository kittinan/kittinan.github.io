---
title: 'วิธี Compile PHP จาก Source ด้วย  Ubuntu 14.04'
date: '2015-10-30 15:06:00'
---

วิธี Compile PHP จาก Source code (<https://github.com/php/php-src>) ด้วย  Ubuntu 14.04  
  
### Download code PHP

  

> git clone https://github.com/php/php-src.git

[![](http://3.bp.blogspot.com/-UHnok7b4mX8/VjMcC1J-ZVI/AAAAAAAAZ2Y/6GIsI6W8Np8/s640/Screenshot-root%2540fc19f4111bd5%253A%2B%257E.png)](http://3.bp.blogspot.com/-UHnok7b4mX8/VjMcC1J-ZVI/AAAAAAAAZ2Y/6GIsI6W8Np8/s1600/Screenshot-root%2540fc19f4111bd5%253A%2B%257E.png)  
### **Install dependency package ที่ใช้ในการ Compile**

ติดตั้ง header file ที่ใช้ในการ Compile ด้วยคำสั่ง  
  

> apt-get build-dep php5 php5-cgi php5-cli php5-fpm php5-curl php5-gd php5-gmp php5-json php5-mysql php5-pspell php5-recode php5-mcrypt php5-memcached php5-imagick 


> ln -s /usr/include/x86\_64-linux-gnu/gmp.h /usr/include/gmp.h 

  
### Compile PHP

  
ไปที่ folder sourcecode  ที่เราโหลดมาแล้วสั่งดังนี้  
  
   
รอสักครู่เพื่อทำการ compile sourcecode  เมื่อเรา  compile และติดตั้งไปยัง  path ที่เรากำหนด (--prefix=$HOME/php/usr) เรียบร้อยแล้ว ก็มาลองรันตัว php command line กันดู  
  
ให้ไปที่  
  

> cd ~/php/usr/bin/  
> ./php -v

  
ก็จะได้ PHP ตัวล่าสุดมาแล้วครับ  
  
[![](http://3.bp.blogspot.com/-cbIIbJ0HFSo/VjMjW_nj2lI/AAAAAAAAZ2o/zaNHS8QnkcI/s640/Screenshot-root%2540f2bb698e1b50%253A%2B%257E-php-usr-bin.png)](http://3.bp.blogspot.com/-cbIIbJ0HFSo/VjMjW_nj2lI/AAAAAAAAZ2o/zaNHS8QnkcI/s1600/Screenshot-root%2540f2bb698e1b50%253A%2B%257E-php-usr-bin.png)  
  
เป็นอันเสร็จสิ้นการ Compile PHP เบื้องต้นครับผม  
  
Ref:  
<https://wiki.php.net/phpng>