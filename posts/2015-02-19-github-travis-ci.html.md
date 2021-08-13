---
title: 'วิธีการเชื่อมต่อ Github กับ Travis-CI'
date: '2015-02-19 12:43:00'
---

ต่อจากบทความ [วิธีการอัพโหลด PHP Package ขึ้น Packagist](http://kittinanx.blogspot.com/2015/02/package-packagist.html) บทความนี้ก็จะมาเล่าประสบการณ์ในการเชื่อมต่อ Github  กับ [Travis-CI](https://travis-ci.org/) นะครับ โดยในบทความนี้จะไม่พูดถึง การเขียน Test PHP  ด้วย [phpunit](https://phpunit.de/) และ [Continuous Integration](http://blog.thjug.com/2014/01/continuous-integration-part-i.html) คืออะไรแล้วนะครับ  
  
มาเริ่มกันเลยครับ  
  
1. Sign in [Travis-CI](https://travis-ci.org/) ด้วย Username Github ที่ <https://travis-ci.org/>  
  
[![](http://4.bp.blogspot.com/-E7NjaLKTNz4/VOQNyGR7iMI/AAAAAAAAUpc/94EVG_lzdvE/s1600/Screenshot%2Bfrom%2B2015-02-18%2B10%3A53%3A42.png)](http://4.bp.blogspot.com/-E7NjaLKTNz4/VOQNyGR7iMI/AAAAAAAAUpc/94EVG_lzdvE/s1600/Screenshot%2Bfrom%2B2015-02-18%2B10%3A53%3A42.png)  
2. เจ้า  Travis-CI ก็จะขอ Permission ต่างๆนาๆกับ  Github เราก็กด Authorize application  ไป  
  
[![](http://1.bp.blogspot.com/-rcTCLD95PKg/VOQOD-lG8wI/AAAAAAAAUpk/jLxrpkEMiag/s1600/Screenshot%2Bfrom%2B2015-02-18%2B10%3A55%3A03.png)](http://1.bp.blogspot.com/-rcTCLD95PKg/VOQOD-lG8wI/AAAAAAAAUpk/jLxrpkEMiag/s1600/Screenshot%2Bfrom%2B2015-02-18%2B10%3A55%3A03.png)  
3. เมื่อ Login Travis-CI ด้วย Github User เรียบร้อยแล้ว ก็จะเข้าสู่หน้าตาที่ List Project ต่างๆของเราดังภาพ  
  
[![](http://1.bp.blogspot.com/-R0gVQprTS7w/VOVgfxyeLfI/AAAAAAAAUqc/NEDrF1n5I00/s1600/Screenshot%2Bfrom%2B2015-02-19%2B11%3A02%3A55.png)](http://1.bp.blogspot.com/-R0gVQprTS7w/VOVgfxyeLfI/AAAAAAAAUqc/NEDrF1n5I00/s1600/Screenshot%2Bfrom%2B2015-02-19%2B11%3A02%3A55.png)  
4. กด ON ที่โปรเจคที่เราต้องการ ในที่นี่คือ [kittinan/php-http](https://github.com/kittinan/php-http) ครับ  
5. สร้าง Service Travis-CI ใน Github ของเราเพื่อที่เวลา Push Code เข้า Github แล้ว  Travis-CI จะได้ทำการ Build และ Test โดยวิธีการสร้าง Service  ทำดังนี้  
  
  5.1 ไปที่ Travis-CI <https://travis-ci.org/profile/info> เพื่อนำ token ไปใส่ยัง Github Project ของเรา  
  5.2 กลับมาที่ Github Project ของเรา ไปที่ Setting > Webhooks & Services > Add Services เลือก  Travis CI ใส่ Username และ token ที่ได้จากข้อ 5.1 เสร็จแล้วกด Add Service  
  
6. สร้างไฟล์ .travis.yml ที่  Root Project ของเรา โดยสามารถดูรายละเอียดต่างๆได้ที่ Document ของ Travis-CI ได้ที่นี่ครับ <http://docs.travis-ci.com/user/languages/php/>  
  
  6.1 Config file .travis.yml ที่ผมใช้ก็ตามลิ้งนี้เลยครับ <https://gist.github.com/kittinan/30aca75a7c12776b11b2>  
  

> language: php <-- เลือกภาษาที่จะใช้  
> php: <-- ให้ทดสอบ PHP Version อะไรบ้าง  
> - 5.5  
> - 5.4  
> - 5.3  
> - hhvm before\_script: <-- ก่อนจะรัน script ทดสอบให้ทำอะไรบ้างในที่นี่คือไป Download composer มาและสั่งให้ install dependency ที่เราใช้งานครับ  
> - wget http://getcomposer.org/composer.phar  
> - php composer.phar install --dev --no-interaction script: <-- จะให้ Travis-CI รันอะไรบ้าง ในที่นี่คือรัน Test ที่อยู่ใน Folder /tests ครับ และยังสร้าง code coverrage ด้วยครับ   
> - phpunit ./tests  
> - mkdir -p build/logs  
> - phpunit --coverage-clover build/logs/clover.xml ./tests

  
7. เมื่อ Config .travis.yml เรียบร้อยก็ทำการ commit และ push ขึ้นไปยัง Github ครับ เจ้า Github ก็จะไปบอก Travis-CI ว่ามี code ใหม่ๆมาแล้วนะ Travis-CI ก็จะ Build & Test ตาม Config ที่เราสั่งครับ    
  
8. เข้าไปที่เวป [travis-ci](https://travis-ci.org/) แล้วดู Project ที่เราเพิ่ง Push Code เข้าไปใหม่ มันจะแสดงสถานะการ Build & Test ให้เราดูดังภาพ   
  
[![](http://4.bp.blogspot.com/-7XbauuM1W9w/VOVo1EQY3cI/AAAAAAAAUqs/Iqbehkdk69Q/s1600/Screenshot%2Bfrom%2B2015-02-19%2B11%3A36%3A59.png)](http://4.bp.blogspot.com/-7XbauuM1W9w/VOVo1EQY3cI/AAAAAAAAUqs/Iqbehkdk69Q/s1600/Screenshot%2Bfrom%2B2015-02-19%2B11%3A36%3A59.png)  
9. รอสักครู่จนมัน Test เสร็จหมด เย้ๆ เขียวหมดเลย   
  
[![](http://2.bp.blogspot.com/-32rDIABltaE/VOVpWXpHuUI/AAAAAAAAUq0/NIinAfMXTnI/s1600/Screenshot%2Bfrom%2B2015-02-19%2B11%3A40%3A39.png)](http://2.bp.blogspot.com/-32rDIABltaE/VOVpWXpHuUI/AAAAAAAAUq0/NIinAfMXTnI/s1600/Screenshot%2Bfrom%2B2015-02-19%2B11%3A40%3A39.png)  
  
10. หากต้องการ badge เท่ๆมาติดที่หน้า README.md ให้กดตรง build passing ครับแล้วเลือก เป็น Markdown นำมาแปะที่หน้า README.md ได้เลยครับ ดังภาพ   
  
[![](http://4.bp.blogspot.com/-duUnDpC_0QU/VOVqfHG7G8I/AAAAAAAAUrA/W97ahXced-A/s1600/Screenshot%2Bfrom%2B2015-02-19%2B11%3A42%3A08.png)](http://4.bp.blogspot.com/-duUnDpC_0QU/VOVqfHG7G8I/AAAAAAAAUrA/W97ahXced-A/s1600/Screenshot%2Bfrom%2B2015-02-19%2B11%3A42%3A08.png)  
  
  
เสร็จสิ้นการเชื่อมต่อ Github กับ Travis-CI แล้วครับ เดี๋ยวบทความต่อไปจะมาเล่าถึงวิธีการเชื่อมต่อ Github กับ scrutinizer-ci ซึ่งผมเอาไว้สร้าง badge code coverage และ code quality ครับ 