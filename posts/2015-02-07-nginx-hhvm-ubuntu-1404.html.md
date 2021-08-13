---
title: 'วิธีการติดตั้ง Nginx + HHVM บน Ubuntu 14.04'
date: '2015-02-07 15:34:00'
---

1. ติดตั้ง Nginx  
  

> sudo apt-get install nginx

  
  
2. ติดตั้ง HHVM สำหรับ Linux distro อื่นๆ ดูได้ที่ <https://github.com/facebook/hhvm/wiki/Prebuilt%20Packages%20for%20HHVM>  
  
ในบทความนี้ใช้ Ubuntu 14.04 ครับ  
  

> sudo apt-get install software-properties-common  
> sudo apt-key adv --recv-keys --keyserver hkp://keyserver.ubuntu.com:80 0x5a16e7281be7a449  
> sudo add-apt-repository 'deb http://dl.hhvm.com/ubuntu trusty main'  
> sudo apt-get update  
> sudo apt-get install hhvm

  
3. เมื่อติดตั้งเสร็จเรียบร้อย HHVM จะขึ้นข้อความแนะนำวิธีการติดตั้ง fastcgi เพื่อให้ Apache  หรือ Nginx เรียกใช้งานได้ ดังภาพ  
  
[![](http://3.bp.blogspot.com/-Uh5g-bARYnU/VNWyfDpQmNI/AAAAAAAAUb4/cseY3ktN-48/s1600/Screenshot-Terminal-5.png)](http://3.bp.blogspot.com/-Uh5g-bARYnU/VNWyfDpQmNI/AAAAAAAAUb4/cseY3ktN-48/s1600/Screenshot-Terminal-5.png)  
  
4. Config ให้ HHVM เปิดใช้งานผ่านช่องทาง fastcgi โดยรัน Shell Script  
  

> /usr/share/hhvm/install\_fastcgi.sh

  
[![](http://3.bp.blogspot.com/-yBt-Wk_NDkw/VNWzlYFaRHI/AAAAAAAAUcA/CBSLguVZUdk/s1600/Screenshot-Terminal-6.png)](http://3.bp.blogspot.com/-yBt-Wk_NDkw/VNWzlYFaRHI/AAAAAAAAUcA/CBSLguVZUdk/s1600/Screenshot-Terminal-6.png)  
  
5. restart HHVM daemon  
  

> sudo /etc/init.d/hhvm restart

  
6. Config Nginx  ให้เรียกใช้งาน HHVM ผ่านทาง fastcgi  
โดยเริ่มจากการสร้าง Virtual host ใน Nginx ให้ point ไปยัง path ที่ต้องการ โดยในตัวอย่างจะสร้าง Virtual host ที่ชื่อว่า hhvm.localdomain ให้ไปชี้ไปยัง /home/null/code/hhvm มาเริ่มกันเลย  
  
6.1 โดยเริ่มจากการแก้ไข้ไฟล์ /etc/hosts ให้ domain hhvm.localdomain ชี้มาที่เครื่องเราเองดังภาพ  
  

> sudo nano /etc/hosts

  
เพิ่ม 127.0.0.1  hhvm.localdomain เข้าไป  
  
[![](http://1.bp.blogspot.com/-wfwVqELI-iY/VNXFWNqpg-I/AAAAAAAAUdY/vs1mW9E-Sx8/s1600/Screenshot-Terminal-7.png)](http://1.bp.blogspot.com/-wfwVqELI-iY/VNXFWNqpg-I/AAAAAAAAUdY/vs1mW9E-Sx8/s1600/Screenshot-Terminal-7.png)  
  
6.2 สร้าง Config file virtual host ให้กับ Nginx โดย save file ไว้ที่ /etc/nginx/sites-available/hhvm.localdomain  
  
config สำหรับ virutal host ตาม link นี้ครับ <https://gist.github.com/kittinan/87f410004df45b6d0573>  
  
ตรง root path ก็แก้ให้ถูกต้องตามเครื่องใครเครื่องมันนะครับ  
  
เสร็จแล้วสร้าง Sym link เพื่อเปิดการใช้งาน virtual host ที่ชื่อ hhvm.localdomain  
  

> sudo ln -s /etc/nginx/sites-available/hhvm.localdomain /etc/nginx/sites-enabled/hhvm.localdomain

  
7. Restart Nginx  
  

> sudo /etc/init.d/nginx restart

  
8. สร้างไฟล์ index.php ไว้ที่ root path ในที่นี่จะสร้างไฟล์ไว้ที่ /home/null/code/hhvm/index.php เพื่อทดสอบการ config ว่าใช้งานได้  
  
  

> <?php  
> echo "Hello HHVM";  
> echo "<br />";  
> phpinfo();

  
เมื่อเสร็จแล้วลองเรียกผ่าน <http://hhvm.localdomain/> ก็จะได้ output ดังภาพ  
[![](http://4.bp.blogspot.com/-wnzKqQdGq2Q/VNXMvJ5A9TI/AAAAAAAAUdo/e9AGsoCQDZ4/s1600/Screenshot-18.png)](http://4.bp.blogspot.com/-wnzKqQdGq2Q/VNXMvJ5A9TI/AAAAAAAAUdo/e9AGsoCQDZ4/s1600/Screenshot-18.png)  
  
  
หากต้องการ phpinfo() แบบละเอียด hhvm มันไม่ได้จัดมาไว้ให้ครับต้องใช้ script ตัวนี้  
<https://gist.github.com/ck-on/67ca91f0310a695ceb65> เมื่อนำมารันก็จะได้ดังภาพ  
  
[![](http://2.bp.blogspot.com/-J2SMCiG7mGA/VNXNek4jpXI/AAAAAAAAUdw/70oURfRYIdQ/s1600/Screenshot-19.png)](http://2.bp.blogspot.com/-J2SMCiG7mGA/VNXNek4jpXI/AAAAAAAAUdw/70oURfRYIdQ/s1600/Screenshot-19.png)  
  
  
  
  
