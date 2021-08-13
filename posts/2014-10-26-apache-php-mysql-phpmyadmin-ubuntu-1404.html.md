---
title: 'วิธีการติดตั้ง Apache + PHP + Mysql + Phpmyadmin บน Ubuntu 14.04'
date: '2014-10-26 22:30:00'
---

มาถึงปลายปี 2014 ผมเชื่อว่ายังมีนักพัฒนาเวปด้วยภาษา php หลายท่านยังใช้ Appserv, XAMPP, WAMP และ MAMP กันอยู่ ไม่ใช่มันไม่ดีนะครับ แต่เราควรที่จะเรียนรู้วิธีการติดตั้ง Software แต่ละตัวกันเองดีกว่า ผมจะยกตัวอย่างของ Appserv นะครับ Appserv รุ่นล่าสุดยังใช้งาน PHP ใน version 5.2 อยู่เลยครับ ซึ่งปัจจุบัน ณ เวลานี้ PHP ออก version 5.6 มาแล้วครับ  
  
และอีกอย่างนึงก็อยากให้นักพัฒนาเวปด้วย php ทั้งหลายลองหันมาใช้ Linux กันครับ เพราะสภาพแวดล้อมจริงๆในการรัน  Web Server ส่วนใหญ่จะรันอยู่บน Linux ซึ่งจะทำให้ตัวนักพัฒนาเข้าใจสภาพแวดล้อมดียิ่งขึ้นครับ  
  
เรามาเริ่มกันเลยครับ โดยผมจะใช้ Ubuntu 14.04 ในการติดตั้ง ผ่าน Terminal หรือ Command line นั้นเอง โดยบน Ubuntu 14.04 สามารถกดคีย์ลัดคือ CTRL + ALT +T  
  
1. ติดตั้ง Apache Web Server  
  

> sudo apt-get install apache2

  
[![](http://2.bp.blogspot.com/-YK9WrNR3ll4/VEz_f-seILI/AAAAAAAAPoM/jPnqGXtqOUA/s1600/Screenshot-1.png)](http://2.bp.blogspot.com/-YK9WrNR3ll4/VEz_f-seILI/AAAAAAAAPoM/jPnqGXtqOUA/s1600/Screenshot-1.png)  
  
2. ทดสอบว่า Apache ติดตั้งสำเร็จ โดยเปิด Web Browser แล้วเข้าที่ <http://localhost/>  
  
3. ทำการติดตั้ง Mysql Server (หากไม่ชอบ Mysql ผมแนะนำเป็น MariaDB แทนครับ Performance ดีกว่า Mysql มากๆ)  
  
3.1 ติดตั้ง Mysql  
  

> sudo apt-get install mysql-server mysql-client

  


| [![](http://2.bp.blogspot.com/-RbMB0TmvVwE/VE0C2f9lAEI/AAAAAAAAPoY/O7uWrLZtN6c/s1600/Screenshot-2.png)](http://2.bp.blogspot.com/-RbMB0TmvVwE/VE0C2f9lAEI/AAAAAAAAPoY/O7uWrLZtN6c/s1600/Screenshot-2.png) |
| Enter Your Mysql Password |

  
  
  
  
  
  
  
  
  
  
  
4. ติดตั้ง PHP และ Apache php module  
  

> sudo apt-get install php5 libapache2-mod-php5 php5-mysql php5-curl php5-gd php-pear php5-imagick php5-mcrypt php5-memcache php5-sqlite php5-json

  
5. ทดสอบว่า php ใช้งานได้  
  

> sudo chmod 777 /var/www/html/

  
5.1 สร้างไฟล์ info.php ที่ path /var/www/html/  
  

> nano /var/www/html/info.php

  
โดยใส่ code เข้าไปดังนี้  
  

> <?php  
>   phpinfo();

[![](http://3.bp.blogspot.com/-CmATKHNE5rY/VE0O0iGUeTI/AAAAAAAAPos/YI3O35ekQQA/s1600/Screenshot-3.png)](http://3.bp.blogspot.com/-CmATKHNE5rY/VE0O0iGUeTI/AAAAAAAAPos/YI3O35ekQQA/s1600/Screenshot-3.png)  
  
  
  
  
  
  
  
  
  
5.2 Restart Apache  
  

> sudo service apache2 restart

  
5.3 ทดสอบโดยการเปิด Web Browser ไปที่ <http://localhost/info.php>  
  
[![](http://1.bp.blogspot.com/-_o9kw9Uicwo/VE0Oz_Oa2vI/AAAAAAAAPoo/mBLCewi2igA/s1600/Screenshot-4.png)](http://1.bp.blogspot.com/-_o9kw9Uicwo/VE0Oz_Oa2vI/AAAAAAAAPoo/mBLCewi2igA/s1600/Screenshot-4.png)  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
6. ติดตั้ง Phymyadmin  
  
6.1 Download ไฟล์ phpmyadmin จากเวป <http://www.phpmyadmin.net/home_page/downloads.php>  
  
6.2 แตกไฟล์ที่ Download ไว้ที่ /var/www/html/phpmyadmin  
  
6.3 เปลี่ยนชื่อไฟล์ /var/www/html/phpmyadmin/config.sample.inc.php เป็น /var/www/html/phpmyadmin/config.inc.php  
  
6.4 เปิดไฟล์ /var/www/html/phpmyadmin/config.inc.php และแก้ไข้บรรทัด  
  

> $cfg['blowfish\_secret'] = '5555555555555555555555555555555555'; 

  
โดยใส่ค่ามั่วๆลงไป  
  
6.5 ทดสอบโดยการเปิด Web Browser ไปที่ <http://localhost/phpmyadmin>  
  
[![](http://3.bp.blogspot.com/-ojNxrYjG5F8/VE0S5DbQYcI/AAAAAAAAPo8/b-FGYGH-wdo/s1600/Screenshot-5.png)](http://3.bp.blogspot.com/-ojNxrYjG5F8/VE0S5DbQYcI/AAAAAAAAPo8/b-FGYGH-wdo/s1600/Screenshot-5.png)  
  
  
ก็เสร็จสิ้นไปแล้วสำหรับการติดตั้ง Apache + Mysql + PHP + Phpmyadmin นะครับ ไม่ยากเลยง่ายนิดเดียว