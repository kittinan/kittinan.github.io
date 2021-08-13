---
title: 'เปลี่ยนมือถือ Android ให้เป็น Webcam'
date: '2020-04-03 20:59:00'
---

เราสามารถเปลี่ยนมือถือ Android ของเราให้เป็น Webcam ง่ายๆได้ด้วยโปรแกรมที่ชื่อว่า [DroidCam](https://www.dev47apps.com/) โดยในตัวอย่างการติดตั้งผมจะทำบนเครื่อง PC ที่ติดตั้งระบบปฏิบัติการ Ubuntu 18.04 สำหรับบน Windows ก็น่าจะติดตั้งคล้ายๆกัน  
  
**สิ่งที่ต้องการ**  
- โทรศัพท์มือ Android  
- เครื่องคอมพิวเตอร์  
- ระบบ Network  
  
  
**1. ติดตั้ง App บนมือถือ**  
  
สามารถ Download ผ่าน Playstore ได้ที่  
  
<https://play.google.com/store/apps/details?id=com.dev47apps.droidcam&hl=th>  
  
  
**2. ติดตั้งโปรแกรมที่เครื่องคอม**  
  
สามารถ Download โปรแกรมได้ที่  
  
<https://www.dev47apps.com/>  
  
มีทั้ง Windows และ Linux  
  
เปิด terminal รันคำสั่งดังนี้  
  

```
sudo apt install linux-headers-`uname -r`  
cd tmp  
wget https://www.dev47apps.com/files/linux/droidcam_latest.zip  
unzip droidcam_latest.zip -d droidcam && cd droidcam  
sudo ./install
```
  
ดูว่าติดตั้งสำเร็จไหมด้วยคำสั่ง  
lsmod | grep v4l2loopback\_dc  
  
**3. เชื่อมต่อ Droidcam PC กับ มือถือ**  
PC กับ มือถือ ต้องอยู่ใน Wifi network เดียวกัน  
  
เปิดโปรแกรมบน terminal ด้วยคำสั่ง  
  

```
droidcam
```
  
  
- เปิดโปรแกรม Droidcam บน Android เพื่อดู IP Address  
  
[![](https://1.bp.blogspot.com/-T2ql4DLlV0A/Xoc_-m7ox6I/AAAAAAAB_ds/FiXzZacmOCM-g68Kc-ZBSN1g2Te04i8wACNcBGAsYHQ/s640/Screenshot_2020-04-03-20-46-25-809_com.dev47apps.droidcam.jpg)](https://1.bp.blogspot.com/-T2ql4DLlV0A/Xoc_-m7ox6I/AAAAAAAB_ds/FiXzZacmOCM-g68Kc-ZBSN1g2Te04i8wACNcBGAsYHQ/s1600/Screenshot_2020-04-03-20-46-25-809_com.dev47apps.droidcam.jpg)  
  
- นำ Wifi IP: มาใส่ในโปรแกรม Droidcam บนเครื่องคอม แล้วกด Connect  
  
[![](https://1.bp.blogspot.com/-uezlBkNNVH0/XodAK6OfyWI/AAAAAAAB_dw/BHL9jWLezDUWB6vDw3MI2fWEJVAotvGQACNcBGAsYHQ/s640/Screenshot%2Bat%2B2020-04-03%2B20-54-35.png)](https://1.bp.blogspot.com/-uezlBkNNVH0/XodAK6OfyWI/AAAAAAAB_dw/BHL9jWLezDUWB6vDw3MI2fWEJVAotvGQACNcBGAsYHQ/s1600/Screenshot%2Bat%2B2020-04-03%2B20-54-35.png)  
  
เสร็จสิ้นเรียบร้อย  
  
[![](https://1.bp.blogspot.com/-Xblxi-R2NPg/XodAQTdvYmI/AAAAAAAB_d4/Azkq7_YH7qI35CXKWRKOdZvpkUpTiy0hACNcBGAsYHQ/s640/Screenshot%2Bat%2B2020-04-03%2B20-50-52.png)](https://1.bp.blogspot.com/-Xblxi-R2NPg/XodAQTdvYmI/AAAAAAAB_d4/Azkq7_YH7qI35CXKWRKOdZvpkUpTiy0hACNcBGAsYHQ/s1600/Screenshot%2Bat%2B2020-04-03%2B20-50-52.png)