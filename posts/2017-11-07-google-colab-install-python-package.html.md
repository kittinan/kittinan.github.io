---
title: '[Google Colab] ติดตั้ง Python Package เพิ่มแบบแฮกหน่อยๆ'
date: '2017-11-07 22:42:00'
---

หลังจากที่ได้ทดลองใช้งาน [Google Colab](https://colab.research.google.com/notebook) ([Jupyter Notebook](http://jupyter.org/) ฟรีจาก Google) ตั้งแต่วันที่ 27 ตุลาคม เป็นต้นมา ก็ได้พบวิธีที่จะติดตั้ง Python Package เพิ่มแบบแฮกหน่อยๆ  
**หลักการ**  
1. Reverse Shell  
2. pip install PACKAGE  
  
**สิ่งที่ต้องการ**  
1. Public Server ของเราเองเอาไว้ reverse shell  
  
**วิธีการ**  
1. Remote ไปยัง Public Server ของเรา  
2. รันคำสั่ง netcat  
  

> nc -lv 13337

3. สร้าง Google Colab ใหม่มา 1 อัน นำคำสั่ง reverse shell ไปรัน (อย่าลืมแก้ IP Address กับ Port ให้ตรงกับ Server เรา และที่ netcat กำลัง listen อยู่)  
  
   
4. เมื่อได้ Shell ก็สั่งติดตั้ง Package ที่ต้องการ  
  

> pip install PACKAGE

  
**Proof of concept**  
  
1. ทดลอง import keras แต่ว่าไม่พบ module  
  
[![](https://1.bp.blogspot.com/-_6v7gVD4LhI/WgHQV14JYCI/AAAAAAAA6ec/sIMVgiW7JsIyu3wPgxFhib7RsKZ-hFFIQCLcBGAs/s1600/Screenshot%2Bfrom%2B2017-11-07%2B22%253A13%253A38.png)](https://1.bp.blogspot.com/-_6v7gVD4LhI/WgHQV14JYCI/AAAAAAAA6ec/sIMVgiW7JsIyu3wPgxFhib7RsKZ-hFFIQCLcBGAs/s1600/Screenshot%2Bfrom%2B2017-11-07%2B22%253A13%253A38.png)  
2. เมื่อรันคำสั่ง Reverse Shell เพื่อที่ให้ Google Colab connect กลับมายัง Server ของเราที่ตั้ง netcat รอไว้ก็จะได้ Shell  
  
[![](https://4.bp.blogspot.com/-3dhdqkd7zMw/WgHQvZTAtgI/AAAAAAAA6eg/_wSukGxm2942eD6nr-UdQ8kMAt8tMDLFQCLcBGAs/s640/Screenshot%2Bfrom%2B2017-11-07%2B22%253A15%253A50.png)](https://4.bp.blogspot.com/-3dhdqkd7zMw/WgHQvZTAtgI/AAAAAAAA6eg/_wSukGxm2942eD6nr-UdQ8kMAt8tMDLFQCLcBGAs/s1600/Screenshot%2Bfrom%2B2017-11-07%2B22%253A15%253A50.png)  
  
3. สั่งติดตั้ง package keras ผ่าน pip เมื่อลองรันคำสั่ง import keras ใน  Colab อีกครั้งก็จะสามารถ import ได้  
  
[![](https://2.bp.blogspot.com/-GYcr_Lor79E/WgHRXu_Q0jI/AAAAAAAA6eo/_mzGAwpw9tkd3AkdHSwP7nQq3gYoEpHAwCLcBGAs/s1600/Screenshot%2Bfrom%2B2017-11-07%2B22%253A16%253A33.png)](https://2.bp.blogspot.com/-GYcr_Lor79E/WgHRXu_Q0jI/AAAAAAAA6eo/_mzGAwpw9tkd3AkdHSwP7nQq3gYoEpHAwCLcBGAs/s1600/Screenshot%2Bfrom%2B2017-11-07%2B22%253A16%253A33.png)  
4. ทดลองใช้งาน keras package โดยการ Train MNIST CNN  
  
[![](https://4.bp.blogspot.com/-hsOX2BGo7WU/WgHSB-qdkNI/AAAAAAAA6ew/ErhjufidfkItu41ObyWcN7B1hwqjtt8VQCLcBGAs/s640/Screenshot%2Bfrom%2B2017-11-07%2B22%253A21%253A29.png)](https://4.bp.blogspot.com/-hsOX2BGo7WU/WgHSB-qdkNI/AAAAAAAA6ew/ErhjufidfkItu41ObyWcN7B1hwqjtt8VQCLcBGAs/s1600/Screenshot%2Bfrom%2B2017-11-07%2B22%253A21%253A29.png)  
**Video**  
  
  
  
ตัว Google Colab นั้นจะสร้าง Docker container ขึ้นมาเพื่อให้แต่ละคนใช้งานโดยจะได้สเปคคือ RAM 12 GB และ CPU Xeon 2.2 GHz 2 core เมื่อเราไม่ได้ใช้งานตัว Container ก็จะถูกทำลายทิ้ง พอเรากลับมาใช้งานใหม่อีกครั้งก็จะสร้าง Container ใหม่ขึ้นมา  
  
ปล. เราสามารถติดตั้งโปรแกรมอื่นๆใน Container ได้ด้วยนะ อิอิ  
ปล2. ไม่ใช่ Google Security Bug  
  
Follow me on Github: <https://github.com/kittinan>