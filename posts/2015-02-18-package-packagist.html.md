---
title: 'วิธีการอัพโหลด PHP Package ขึ้น Packagist'
date: '2015-02-18 00:15:00'
---

วันนี้มีโอกาสอัพโหลด PHP Library ที่เขียนขึ้นมาใช้งานเองเข้า Packagist เนื่องจากต้องการโหลด Library ที่เขียนขึ้นผ่าน composer จึงมาเขียน Blog แบ่งปันประสบการณ์ครับ  
  
Composer กับ Packagist คืออะไรผมจะไม่กล่าวถึงแล้วนะครับ   
  
สิ่งที่จำเป็นสำหรับการอัพโหลด PHP Library เข้า Packagist ก็คือ  
  
1. composer.json  
2. Code ของเราต้องอยู่ในรูปแบบของ [PSR-4](http://www.php-fig.org/psr/psr-4/)  
3. Github  
  
ผมจะใช้โปรเจค <https://github.com/kittinan/php-http> เป็นตัวอย่างนะครับ ซึ่ง commit ก่อนที่เปลี่ยนรูปแบบให้เป็น PSR-4 นั้น จะอยู่ใน commit นี้ <https://github.com/kittinan/php-http/tree/9a91de95c53538d081081c56ee4d77b6d9fa2171> ซึ่งจะสังเกตุเห็นว่ามีอยู่แค่ 2 ไฟล์เท่านั้นคือ  
  
- http.php  
- README.md  
  
  
โดยผมจะจัดการไฟล์ใหม่ให้มันอยู่ในรูปแบบของ PSR-4 นะครับ โดยที่ผมจะจัดวางไฟล์ใหม่ดังนี้  
  
\<NamespaceName>(\<SubNamespaceNames>)*\<ClassName>  
  
ซึ่งเมื่อจัดแล้วจะอยู่ในรูปแบบ  
  
\KS\HTTP\HTTP.php  
  
เมื่อจัดการวางไฟล์และโฟล์เดอร์ให้อยู่ในรูปแบบ PSR-4 เรียบร้อยผมก็จัดการแก้ชื่อ class จากเดิมที่เป็น http  เป็น HTTP และใส่ namespace ที่ถูกต้องเข้าไปก็คือ namespace KS\HTTP; ดูได้จากไฟล์นี้นะครับ <https://github.com/kittinan/php-http/blob/master/src/KS/HTTP/HTTP.php>  
  
เมื่อจัดการไฟล์และโฟล์เดอร์เรียบร้อยแล้ว ก็มาถึงคิวของ composer.json ซึ่งจะต้องสร้างไฟล์นี้ไว้ที่ root path ของ project นะครับ  
  
สร้าง composer.json ที่ root path ของ project โดยใส่รายละเอียดตามไฟล์นี้ครับ <https://github.com/kittinan/php-http/blob/master/composer.json>  
  
สิ่งสำคัญคือตรง autoload เราต้องกำหนดให้ถูกต้องครับ ซึ่งเราจะใช้ PSR-4  โดยที่ key ของ json ตรงนั้นจะเปน namespace ของเรา แล้ว  value ก็จะเป็น folder ครับซึ่งจะออกมาเป็นดังนี้  
  

> "KS\\HTTP\\": "src/KS/HTTP"

เมื่อสร้างไฟล์ composer.json เรียบร้อย ให้ commit และ push ขึ้น github ครับ หลังจากนั้นเราก็เข้าไปที่เวป <https://packagist.org/> ให้ login  ด้วย user Github ให้เรียบร้อยก่อนนะครับ เสร็จแล้วกด submit package เราก็นำ url github project ของเรามาใส่ รอสักครู่มันก็จะไปดึงข้อมูลจาก github มาให้ กด submit เป็นเสร้จสิ้น  
  
หากเราต้องการเวลาที่ push code ใหม่ๆเข้าไปยัง Github และไป update เจ้า Packagist  เราต้องสร้าง GitHub Service Hook ไปยัง  Packagist ครับ โดยกดเข้าไปที่ GitHub Service Hook ดังภาพ  
  
[![](http://4.bp.blogspot.com/-DWpwnRMbCvQ/VONzZ6fYvkI/AAAAAAAAUos/Q-c4BtYVdV4/s1600/Screenshot-20.png)](http://4.bp.blogspot.com/-DWpwnRMbCvQ/VONzZ6fYvkI/AAAAAAAAUos/Q-c4BtYVdV4/s1600/Screenshot-20.png)  
เมื่อกดเข้าไปแล้วสิ่งที่เราต้องการคือ  Your API Token กดเพื่อแสดง token ครับดังภาพ  
  
[![](http://2.bp.blogspot.com/-hTXg2a_dS3Y/VON0DcDdmtI/AAAAAAAAUo0/yJxd8fV_jH8/s1600/Screenshot-21.png)](http://2.bp.blogspot.com/-hTXg2a_dS3Y/VON0DcDdmtI/AAAAAAAAUo0/yJxd8fV_jH8/s1600/Screenshot-21.png)  
  
  
ให้เรานำ API token ไปใส่ที่ Github ครับ ซึ่งเข้าไปที่ Project ของเราแล้วกด Setting ดังภาพ  
  
[![](http://4.bp.blogspot.com/-hoisQpLYZYk/VON0tPPbHBI/AAAAAAAAUpA/4BMJ_Z5TzmU/s1600/Screenshot-22.png)](http://4.bp.blogspot.com/-hoisQpLYZYk/VON0tPPbHBI/AAAAAAAAUpA/4BMJ_Z5TzmU/s1600/Screenshot-22.png)  
  
เมื่อกดเข้าไปที่ Setting  แล้วให้ไปที่ Webhooks & Services >  กด Add Services เลือก Pakagist ครับ  
  
เสร็จแล้วใส่ username เราที่ใช้ใน Pakagist ถ้าในที่นี่ login Pakagist ด้วย Github  
username ที่ใช้ก็จะเหมือน username ของ Github ครับ ในโปรเจคนี้คือ kittinan และใส่ token ที่เราได้จาก Pakagist ดังภาพ  
  
[![](http://3.bp.blogspot.com/-ZhSKX7keJWQ/VON13AUmZbI/AAAAAAAAUpI/_5FNUzXryDg/s1600/Screenshot-23.png)](http://3.bp.blogspot.com/-ZhSKX7keJWQ/VON13AUmZbI/AAAAAAAAUpI/_5FNUzXryDg/s1600/Screenshot-23.png)  
  
กด Add Service เป็นอันเสร็จสิ้นครับ เมื่อเรา Push code ใหม่ๆเข้า Gihub เจ้า Gtihub ก็จะยิงไปบอก Pakagist ว่ามี code ใหม่ๆมาแล้วนะ เจ้า Pakgist ก็จะอัพเดทข้อมูลๆใหม่ครับ  
  
  
เดี๋ยวบทความต่อไปจะมาเล่าถึงวิธีการเชื่อต่อกับ [travis-ci](https://travis-ci.org/) เพื่อทำ Continuous Integration นะครับ