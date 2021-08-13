---
title: 'วิธีการตั้ง IP Address ให้ Genymotion อยู่วง Lan เดียวกันกับเครื่อง'
date: '2015-03-30 22:02:00'
---

วิธีการตั้ง IP Address ให้ [Genymotion](https://www.genymotion.com/) อยู่วง Lan เดียวกันกับเครื่องที่ใช้พัฒนา นั้นง่ายมากๆ โดยมีวิธีการดังนี้  
1. เปิด Virtualbox ขึ้นมา  
2. คลิกขวาเลือก Setting สำหรับ VM ที่เราต้องการ  
3. ไปที่ Network เลือก Adapter 2 ตรง Attach to เลือก Bridge Adapter  แล้วเลือก Network Interface ที่ต้องการ ดังภาพ  
[![](http://2.bp.blogspot.com/-E7rhsCXhsGU/VRllQGEkVII/AAAAAAAAVaE/kJeKz76YeJk/s1600/Screenshot-Google%2BNexus%2B7%2B-%2B4.3%2B-%2BAPI%2B18%2B-%2B800x1280%2B-%2BSettings.png)](http://2.bp.blogspot.com/-E7rhsCXhsGU/VRllQGEkVII/AAAAAAAAVaE/kJeKz76YeJk/s1600/Screenshot-Google%2BNexus%2B7%2B-%2B4.3%2B-%2BAPI%2B18%2B-%2B800x1280%2B-%2BSettings.png)  
  
4. เปิด [Genemotion](https://www.genymotion.com/) ตามปกติ เพียงเท่านี้ก็จะอยู่วง Lan เดียวกันแล้วครับ