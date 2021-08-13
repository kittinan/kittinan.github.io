---
title: 'วิธีการสร้าง Virtutal Host ให้กับ Apache บน Ubuntu 14.04'
date: '2014-10-27 20:46:00'
---

เบื่อไหมกับการรันเวปในเครื่องตัวเองแล้วต้องไปที่ http://localhost/xxxx วันนี้เราจะมาจำลอง Virtual Host กัน โดยหลักการการทำงานของมันก็คือ  
  
- ชี้ Domain มาที่เครื่องเราเอง (localhost)  
  
- สร้าง Virtual Host ให้กับ Apache เพื่อให้รองรับ Request สำหรับ Domain นั้น  
  
สำหรับโจทย์ก็คือต้องการสร้าง Domain  [http://kittinan.localdomain](http://kittinan.localdomain/) โดยให้ชี้ไปที่  path /home/null/git/kittinan เรามาเริ่มกันเลยครับ  
  
1. แก้ไฟล์ host ให้ชี้มาที่เครื่องเราเอง ก่อนผ่าน Terminal  
  

> sudo nano /etc/hosts

เพิ่ม 127.0.0.1  kittinan.localdomain ไปดังภาพ  
  
[![](http://2.bp.blogspot.com/-mYjJ7qd3yvY/VE5DP3kM4_I/AAAAAAAAPpM/OmfF0j2pOlw/s1600/Screenshot-6.png)](http://2.bp.blogspot.com/-mYjJ7qd3yvY/VE5DP3kM4_I/AAAAAAAAPpM/OmfF0j2pOlw/s1600/Screenshot-6.png)  
  
  
2. สร้างไฟล์  Virtual Host ให้กับ Apache  
  
- ไปยัง path /etc/apache2/sites-available  
  

> cd  /etc/apache2/sites-available

- สร้างไฟล์ kittinan.localdomain.conf  
  

> sudo nano kittinan.localdomain.conf


> <VirtualHost *:80>  
>         ServerName kittinan.localdomain  
>         ServerAdmin webmaster@localhost  
>         DocumentRoot /home/null/git/kittinan  
>  <Directory /home/null/git/kittinan>  
>      Require all granted  
>  </Directory>  
>         ErrorLog ${APACHE\_LOG\_DIR}/error.log  
>         CustomLog ${APACHE\_LOG\_DIR}/access.log combined  
>         #Include conf-available/serve-cgi-bin.conf  
> </VirtualHost>

  
[![](http://1.bp.blogspot.com/-XKVSDAaoiWU/VE5JFvPI8FI/AAAAAAAAPpc/lgV7zw80PZw/s1600/Screenshot-8.png)](http://1.bp.blogspot.com/-XKVSDAaoiWU/VE5JFvPI8FI/AAAAAAAAPpc/lgV7zw80PZw/s1600/Screenshot-8.png)  
  
- enable virtual host  

> sudo a2ensite kittinan.localdomain.conf

- Restart Apache  

> sudo service apache2 restart

  
3. สร้าง Folder ที่เรา point virtual host ซึ่งก็คือ path  /home/null/git/kittinan  
  
- กลับมายัง home directory ของเรา  

> cd ~/

- สร้าง folder /home/null/git/kittinan  

> mkdir -p git/kittinan

- สร้างไฟล์ index.php  /home/null/git/kittinan/index.php  

> nano git/kittinan/index.php


> <?php  
> echo 'Hello Kittinan';

4. ทดลองรันด้วยการเปิด Web browser ไปที่ [http://kittinan.localdomain](http://kittinan.localdomain/)  
  
[![](http://2.bp.blogspot.com/-MMgBnfG9o4w/VE5JK2BzMCI/AAAAAAAAPpk/Rvc4DSqsYEI/s1600/Screenshot-7.png)](http://2.bp.blogspot.com/-MMgBnfG9o4w/VE5JK2BzMCI/AAAAAAAAPpk/Rvc4DSqsYEI/s1600/Screenshot-7.png)  
  
เป็นอันเสร็จสิ้นการสร้าง Virtual Host สำหรับในการพัฒนาครับ 