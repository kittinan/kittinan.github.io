---
title: 'วิธีการเชื่อมต่อ Github กับ Scrutinizer-CI'
date: '2015-03-07 22:49:00'
---

ต่อจากบทความ [วิธีการเชื่อมต่อ Github กับ Travis-CI](http://kittinanx.blogspot.com/2015/02/github-travis-ci.html) บทความนี้ก็จะมาเล่าเกี่ยวกับวิธีการเชื่อมต่อ Github กับ [Scrutinizer-CI](https://scrutinizer-ci.com/) เพื่อที่ Build & Test และจะได้มี  Badge สำหรับ Code Coverage กับ  Code Quality สวยๆมาแปะครับ  
  
1. เข้าไปที่ Website [https://scrutinizer-ci.com](https://scrutinizer-ci.com/) แล้วทำการ Login ด้วย Github  
  
2. เมื่อ Login เรียบร้อยแล้วให้สร้าง Repository <https://scrutinizer-ci.com/g/new>  
  
3. ใส่ URL Github Project ของเราที่ต้องการใช้งาน (ในที่นี่ใช้ Project นี้ <https://github.com/kittinan/php-http>) ดังภาพ  
  
[![](http://2.bp.blogspot.com/-AHERkONjCy0/VPsWiFKS_6I/AAAAAAAAVDo/8b66SNLWZDc/s1600/Screenshot-39.png)](http://2.bp.blogspot.com/-AHERkONjCy0/VPsWiFKS_6I/AAAAAAAAVDo/8b66SNLWZDc/s1600/Screenshot-39.png)  
  
4. สร้างไฟล์สำหรับ Build Configuration เจ้า Scrutinizer-CI โดยใช้ชื่อว่า [.scrutinizer.yml](https://gist.github.com/kittinan/6baf4dd0961e18dc7812) ที่ root path ของ Project และใส่ code ดังนี้ <https://gist.github.com/kittinan/6baf4dd0961e18dc7812>  
  
   
สามารถดูรายละเอียดเพิ่มเติมสำหรับ Build Configuration ได้ที่ <https://scrutinizer-ci.com/docs/configuration/build>  
  
5. แก้ไขไฟล์ [.travis.yml](https://gist.github.com/kittinan/124d539cd6fbf7c5e8d5) เพื่อให้ Travis-CI อัพโหลด Code Coverage ไปที่  Scrutinizer-CI ดังนี้  
<https://gist.github.com/kittinan/124d539cd6fbf7c5e8d5>  
  
   
  
5. Push file .scrutinizer.yml และ .travis.yml  ขึ้น Github  
  
6. สั่ง Run your first inspection ที่ Scrutinizer-CI แล้วรอสักพักใหญ่  
  
[![](http://4.bp.blogspot.com/-8CWu1GpKdQ0/VPscNVBZSvI/AAAAAAAAVD4/0ZwD7k-Rb3U/s1600/Screenshot-40.png)](http://4.bp.blogspot.com/-8CWu1GpKdQ0/VPscNVBZSvI/AAAAAAAAVD4/0ZwD7k-Rb3U/s1600/Screenshot-40.png)  
7. เมื่อ  Scrutinizer-CI ประมวลผลเสร็จเรียบร้อยก็จะพบกับ Code Quality และ Code Coverage  ดังภาพ  
  
[![](http://1.bp.blogspot.com/-KxXSZ7FgI-g/VPscxK-n7QI/AAAAAAAAVEA/7wwrlZbUgO8/s1600/Screenshot-41.png)](http://1.bp.blogspot.com/-KxXSZ7FgI-g/VPscxK-n7QI/AAAAAAAAVEA/7wwrlZbUgO8/s1600/Screenshot-41.png)  
  
8. เราก็สามารถนำ Badge Code Quality และ Code Coverage เท่ๆมาแปะที่  Github Project ของเราได้แล้วครับ <https://github.com/kittinan/php-http>  
  
[![](http://1.bp.blogspot.com/-7VPtdF3YRy0/VPsdqmUv7PI/AAAAAAAAVEM/vwKTFps_cWE/s1600/Screenshot-42.png)](http://1.bp.blogspot.com/-7VPtdF3YRy0/VPsdqmUv7PI/AAAAAAAAVEM/vwKTFps_cWE/s1600/Screenshot-42.png)  
