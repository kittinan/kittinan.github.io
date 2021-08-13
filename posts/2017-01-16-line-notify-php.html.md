---
title: 'ส่ง Notification ผ่าน Line Notify ด้วย PHP'
date: '2017-01-16 00:25:00'
---

วันนี้จะมาแนะนำการส่ง Notification ผ่าน [Line Notify](https://notify-bot.line.me/) ด้วยภาษา PHP กันครับ  
  
โดย Line Notify นั้นมีความสามารถดังนี้- ส่ง Notification มายังตัวเราเอง- ส่ง Notification ไปยัง Line Group ที่เราอยู่ (เราต้องเพิ่ม Line Notify เข้ามาใน Line Group นั้นด้วย)- ส่ง ข้อความ Text, รูปภาพ และ Sticker ได้**Add Line Notify เป็นเพื่อนเราก่อน**  
ก่อนอื่นเราต้องแอด Line Notify มาเป็นเพื่อนเราก่อน โดยค้นหาคำว่า Line Notify แล้วแอดเป็นเพื่อนดังภาพ  
[![](https://4.bp.blogspot.com/-8_b-3jhjcFo/WHum8icPZQI/AAAAAAAAtrs/1nDU9CPXticeGkni_VZptIue9FS_dLhFACLcB/s640/Screenshot_20170115-234228.png)](https://4.bp.blogspot.com/-8_b-3jhjcFo/WHum8icPZQI/AAAAAAAAtrs/1nDU9CPXticeGkni_VZptIue9FS_dLhFACLcB/s1600/Screenshot_20170115-234228.png)  
  
**สร้าง Token สำหรับการ Notify**  
  
- ให้เรา Login เข้าในเวป [https://notify-bot.line.me](https://notify-bot.line.me/)  
- เมื่อ Login เสร็จเรียบร้อย ให้เข้า <https://notify-bot.line.me/my/>  
- เลื่อนลงมาด้านล่างคลิกที่ **Generate Token**  


| [![](https://2.bp.blogspot.com/-M3jusuhL0hY/WHtu2T92B5I/AAAAAAAAtrQ/vVSt37zfqVE8BjONq8xRExl2kpSOmwh4QCLcB/s640/Screenshot%2Bfrom%2B2017-01-15%2B19%253A44%253A34.png)](https://2.bp.blogspot.com/-M3jusuhL0hY/WHtu2T92B5I/AAAAAAAAtrQ/vVSt37zfqVE8BjONq8xRExl2kpSOmwh4QCLcB/s1600/Screenshot%2Bfrom%2B2017-01-15%2B19%253A44%253A34.png) |
| คลิก Generate token |

  
- ให้เราตั้งชื่อ Notify  (ชื่อนี้จะไปแสดงตอนส่งข้อความ)  


| [![](https://3.bp.blogspot.com/-eMRamPKeL44/WHtvqMEIcrI/AAAAAAAAtrU/EUPoCyQRs_8DGsvk7E9AaCwdq-tt8pbdgCLcB/s640/Screenshot%2Bfrom%2B2017-01-15%2B19%253A46%253A43.png)](https://3.bp.blogspot.com/-eMRamPKeL44/WHtvqMEIcrI/AAAAAAAAtrU/EUPoCyQRs_8DGsvk7E9AaCwdq-tt8pbdgCLcB/s1600/Screenshot%2Bfrom%2B2017-01-15%2B19%253A46%253A43.png) |
| เลือกตัวเราเองหรือ Line Group ที่ต้องการ |

  
1-on-1 chat with LINE Notify คือจะส่งข้อความมาหาตัวเราเอง  
นอกนั้นจะเป็น List ของ Line Group ที่เราอยู่ หากต้องการให้ส่งเข้า Line Group เราต้อง Invite Line Notify เข้าไปใน Line Group นั้นด้วย  
- คลิก Generate token เราก็จะได้ Token เอาไว้ในการส่ง Notify ให้เราเซฟไว้ให้ดี เพราะเราจะเห็น Token อันนี้เพียงครั้งเดียว  


| [![](https://3.bp.blogspot.com/-BZTO_PMC5ZA/WHtw_754YpI/AAAAAAAAtrc/e7D_ngRC0TczwjUTWoy6ZuQ9IKqu0kXWACLcB/s1600/Screenshot%2Bfrom%2B2017-01-15%2B19%253A51%253A52.png)](https://3.bp.blogspot.com/-BZTO_PMC5ZA/WHtw_754YpI/AAAAAAAAtrc/e7D_ngRC0TczwjUTWoy6ZuQ9IKqu0kXWACLcB/s1600/Screenshot%2Bfrom%2B2017-01-15%2B19%253A51%253A52.png) |
| Token จะแสดงใน Popup นี้เพียงครั้งเดียวเท่านั้น |

  
**ส่ง Notification ด้วย PHP**  
ในที่นี้เราจะใช้ PHP ในการส่ง Notification กันนะครับ หากต้องการส่งด้วยภาษาอื่นสามารถดู API ได้ที่เอกสารนี้ <https://notify-bot.line.me/doc/en/>  
โดยผมได้สร้าง PHP Library ง่ายๆ สำหรับที่ใช้ในการส่ง Line Notify ไว้ที่ <https://github.com/kittinan/php-line-notify> โดยมี Requirement ดังนี้  
 - PHP 5.5+ - [guzzlehttp](https://github.com/kittinan/php-line-notify)  
เริ่มกันเลย  
- โหลด Library ผ่าน composer  
  

> composer require kittinan/php-line-notify

- ทดสอบส่ง Text Message ตาม Code ด้านล่าง  
   
- ข้อความก็จะถูกส่งไปยังตัวเราหรือ Line Group ที่เรา Generate Token มา  
[![](https://4.bp.blogspot.com/-12ocRsjz6xI/WHuueLZ7XKI/AAAAAAAAtsI/j9G3JRU-YTMpfyjBw855C0F26U0UzfiygCLcB/s640/Screenshot_20170115-235917.png)](https://4.bp.blogspot.com/-12ocRsjz6xI/WHuueLZ7XKI/AAAAAAAAtsI/j9G3JRU-YTMpfyjBw855C0F26U0UzfiygCLcB/s1600/Screenshot_20170115-235917.png)  
  
- ทดลองส่งรูปภาพ ตาม Code ด้านล่าง  
  
   
- รูปภาพก็จะถูกส่งไปยังตัวเราหรือ Line Group ที่เรา Generate Token มา  
  
[![](https://3.bp.blogspot.com/-LFM3GOGPXnM/WHuuid0LsZI/AAAAAAAAtsQ/aD9ZI84clN0m_9RdJxGvnt2c3JNDrQEmQCLcB/s640/Screenshot_20170116-001302.png)](https://3.bp.blogspot.com/-LFM3GOGPXnM/WHuuid0LsZI/AAAAAAAAtsQ/aD9ZI84clN0m_9RdJxGvnt2c3JNDrQEmQCLcB/s1600/Screenshot_20170116-001302.png)  
จบแล้วค้าบบ  
  
ปล. ไว้มีเวลาจะอัพเดท Library ให้สามารถส่ง Sticker ได้นะครับ  
ปล. API Line Notify มี Rate Limit อยู่นะครับ โดย Rate Limit จะอยู่ที่ 1,000 ต่อชั่วโมง