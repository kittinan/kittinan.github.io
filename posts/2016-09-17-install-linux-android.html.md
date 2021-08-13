---
title: 'วิธีการรัน Linux บนโทรศัพท์ Android'
date: '2016-09-17 13:20:00'
---

**สิ่งที่ต้องมี**  
  
- โทรศัพท์ Android ที่ root แล้ว (ซึ่งแต่ละรุ่นวิธีการ root ไม่เหมือนกันต้องไปหาวิธีกันเอง)  
  
- พื้นที่เหลือในเครื่องสักประมาณ 4 GB   
  
  
**วิธีการติดตั้ง**  
  
- ติดตั้ง แอพ [Linux Deploy](https://play.google.com/store/apps/details?id=ru.meefik.linuxdeploy) (<https://play.google.com/store/apps/details?id=ru.meefik.linuxdeploy>)  
  
- ติดตั้ง แอพ [BusyBox](https://play.google.com/store/apps/details?id=ru.meefik.busybox) (<https://play.google.com/store/apps/details?id=ru.meefik.busybox>) ต้องเป็น BusyBox ตัวนี้นะ ตัวอื่นจะใช้ไม่ได้ครับ  
  
- ติดตั้ง แอพ [JuiceSSH](https://play.google.com/store/apps/details?id=com.sonelli.juicessh) (<https://play.google.com/store/apps/details?id=com.sonelli.juicessh>) ไว้สำหรับ Remote เข้า Linux  
  
  
**หลังจากติดตั้งแอพด้านบนครบแล้ว**  
  
**ติดตั้ง BusyBox**  
  
- เปิดแอพ BusyBox กด Install แอพ BusyBox มันจะขอ สิทธิ์ root ก็ให้มันไป  
  
[![](https://1.bp.blogspot.com/-7UT5TBT7gfc/V9zNL1hPmZI/AAAAAAAAj3w/Ad5B9vcX2QAPBeV-qRWctWuMmHqgYP9MQCK4B/s640/Screenshot_20160917-111934.png)](http://1.bp.blogspot.com/-7UT5TBT7gfc/V9zNL1hPmZI/AAAAAAAAj3w/Ad5B9vcX2QAPBeV-qRWctWuMmHqgYP9MQCK4B/s1600/Screenshot_20160917-111934.png)  
  
**ติดตั้ง Linux**  
  
- เปิดแอพ Linux Deploy แล้วกดตรงรูป Download ตามรูป  
  
  
- เลือก Distribution ที่ต้องการ ในที่นี้เลือกใช้ Debian ครับ Distribution suite ก็คือ version ของ Distribution นั้นๆ ผมเลือกใช้ Debian Jessie ส่วน Architecture ก็เลือกเป็น armhf ดังรูป  
  
[![](https://4.bp.blogspot.com/-7OF6x_arqx4/V9zNu2ZO5iI/AAAAAAAAj34/pCWK_CvmF-8a2-j2aCN0OiigPDSg4iAOACK4B/s640/Screenshot_20160917-112858.png)](http://4.bp.blogspot.com/-7OF6x_arqx4/V9zNu2ZO5iI/AAAAAAAAj34/pCWK_CvmF-8a2-j2aCN0OiigPDSg4iAOACK4B/s1600/Screenshot_20160917-112858.png)  
  
- กด Install แล้วก็รอสักพักใหญ่ ตัวแอพมันจะไปโหลด Package ต่างๆมาลงให้ (รอนานมาก ขึ้นอยู่กับเน็ตและความเร็วเครื่องแต่ละคน)  
  
[![](https://3.bp.blogspot.com/-eixkJ-0GlDk/V9zOEo2aI7I/AAAAAAAAj4A/H0ZGzJowRYw4q1TjUfJ45eCjVkXzBZ5EwCK4B/s640/Screenshot_20160917-112907.png)](http://3.bp.blogspot.com/-eixkJ-0GlDk/V9zOEo2aI7I/AAAAAAAAj4A/H0ZGzJowRYw4q1TjUfJ45eCjVkXzBZ5EwCK4B/s1600/Screenshot_20160917-112907.png)  
  
- ถ้าเกิด Error แล้วลงไม่สำเร็จต้องลงใหม่ โดยการกด STOP แล้วเข้ารูป Download ไปกด Install ใหม่ครับ  
  


| [![](https://3.bp.blogspot.com/-iCNgcETqih0/V9zOM-g1uYI/AAAAAAAAj4I/5whYjU0jtIcdgw5ZWV-8DA3x0XlP5F6UQCK4B/s640/Screenshot_20160917-113707.png)](http://3.bp.blogspot.com/-iCNgcETqih0/V9zOM-g1uYI/AAAAAAAAj4I/5whYjU0jtIcdgw5ZWV-8DA3x0XlP5F6UQCK4B/s1600/Screenshot_20160917-113707.png) |
| ภาพโหลดไฟล์ไม่สำเร็จ ต้องกดลงใหม่ |

  
  
- เมื่อติดตั้งเสร็จแล้วให้กด START เป็นอันเสร็จสิ้นแล้ว เราก็สามารถ remote ไปยังตัว Linux ที่เราลงได้ผ่านทาง SSH หรือ VNC ครับ  
  
  
**การ Remote SSH บนมือถือ**  
  
ผมใช้แอพ JuiceSSH ในการเชื่อมต่อครับ วิธีการใช้งาน JuiceSSH ก็ง่ายมากแค่เซต host, user, password มาเริ่มกันเลย  
  
- เปิดแอพ JuiceSSH เข้า Connections แล้วกด ปุ่ม + ขวาล่าง  
  
  
[![](https://2.bp.blogspot.com/-zuh9fHveSnY/V9zPLSHmXCI/AAAAAAAAj4Q/NGJZrw1NgwknOWQDieW9oDdjlEP2TAMOgCK4B/s640/Screenshot_20160917-114500.png)](http://2.bp.blogspot.com/-zuh9fHveSnY/V9zPLSHmXCI/AAAAAAAAj4Q/NGJZrw1NgwknOWQDieW9oDdjlEP2TAMOgCK4B/s1600/Screenshot_20160917-114500.png)  
  
  
Nickname : แล้วแต่เราจะตั้ง  
Type: SSH  
Address: localhost  
Identity: จิ้มเข้าไปกด New  
             Nickname: แล้วแต่เราจะตั้ง  
             Username: android  
             Password: changeme  
  


| [![](https://1.bp.blogspot.com/-i77g66H14wc/V9zPbVWVZBI/AAAAAAAAj4Y/U9XPjRB8MyY1OlJ54uaJwJdSKyDrkqYhQCK4B/s640/Screenshot_20160917-114714.png)](http://1.bp.blogspot.com/-i77g66H14wc/V9zPbVWVZBI/AAAAAAAAj4Y/U9XPjRB8MyY1OlJ54uaJwJdSKyDrkqYhQCK4B/s1600/Screenshot_20160917-114714.png) |
| เมื่อจิ้มไปที่ Identity เลือก New |

  


| [![](https://2.bp.blogspot.com/-pZxWsDiaD2o/V9zPhSc2FyI/AAAAAAAAj4g/obI3XOvgEu4zr-aSiyO3rUqgustJMbUqQCK4B/s640/Screenshot_20160917-114858.png)](http://2.bp.blogspot.com/-pZxWsDiaD2o/V9zPhSc2FyI/AAAAAAAAj4g/obI3XOvgEu4zr-aSiyO3rUqgustJMbUqQCK4B/s1600/Screenshot_20160917-114858.png) |
| ภาพเซต Identity เสร็จ (ในภาพพิมพ์ localhost ผิดนะ) |

  
  
กด เครื่องหมายถูกขวาบนเพื่อเซฟ แล้วก็สามารถ Connect เข้าไปยัง Linux ที่เราลงไว้ได้เลยดังภาพ  
  
[![](https://2.bp.blogspot.com/-GZrsF6d7l_I/V9zgC0uYJBI/AAAAAAAAj5E/vw4OLKP-fL8vJsADIEjt9mBg4aozkSvGgCLcB/s640/Screenshot_20160917-131514.png)](https://2.bp.blogspot.com/-GZrsF6d7l_I/V9zgC0uYJBI/AAAAAAAAj5E/vw4OLKP-fL8vJsADIEjt9mBg4aozkSvGgCLcB/s1600/Screenshot_20160917-131514.png)  
  
  
  
