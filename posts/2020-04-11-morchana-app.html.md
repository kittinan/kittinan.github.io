---
title: 'ตรวจสอบแอพ "หมอชนะ" เบื้องต้น'
date: '2020-04-11 18:38:00'
---

เมื่อวันที่ 10 เมษายน 2563 ได้มีการเปิดตัวแอพ **[หมอชนะ](https://www.blognone.com/node/115736)** เพื่อเก็บประวัติการเดินทางของประชาชน และประเมินว่าบริเวณนั้นมีผู้ป่วย COVID-19 หรือไม่ ผมจึงทำการตรวจสอบว่ามีการส่งข้อมูลอะไรบ้างไปยัง Server  
  


| [![](https://1.bp.blogspot.com/-PF6LBTlfNlk/XpG0kZx-TaI/AAAAAAACATU/Nl4h1sMW4O0Z22Mvh9vsWSQA9pxxXoCRACNcBGAsYHQ/s640/0568.jpg)](https://1.bp.blogspot.com/-PF6LBTlfNlk/XpG0kZx-TaI/AAAAAAACATU/Nl4h1sMW4O0Z22Mvh9vsWSQA9pxxXoCRACNcBGAsYHQ/s1600/0568.jpg) |
| รูปจาก <https://www.prachachat.net/ict/news-447255> |

  
  
วิธีการตรวจสอบเบื้องต้นคือการทำ Man In The Middle (MITM)  
  
โดยมีการเรียก API ต่างๆดังนี้  
  
**1. /registerDevice**  
  
โดยมีการส่งข้อมูลเป็น JSON ดังนี้  
  
Request:  
  

```
{"deviceId":"XXXXXXXXXX"}
```
  
โดยค่าใน deviceId น่าจะเป็นค่า hash จากอะไรบางอย่าง  
  
Response:  
  

```
{"userId":"XXXXXXXXXX","anonymousId":"XXXXXXXXXX"}  

```
  
**2. /userdata**  
  
มีการเรียกใช้เมื่อทำแบบทดสอบ  
  
Request:  
  

```
{"data":{"questionaire":{"one_uri_symp":["none"],"travel_risk_country":false,"covid19_contact":["none"],"int_contact":false}}}  

```
  
**3. /qr**  
  
เรียกเพื่อโหลด QRCode ของเรา โดยมีการส่ง anonymousId แนบไปกับ header ด้วย  
  
  
**4. /location**  
  
อันนี้จะส่งข้อมูลพิกัดที่เราอยู่ไปยัง Server  
  
Request:  
  

```
{"locations":[{"is_moving":false,"uuid":"XXXX","timestamp":"2020-04-11T10:50:50.482Z","odometer":0,"coords":{"latitude":13,"longitude":100,"accuracy":25.9,"speed":-1,"heading":-1,"altitude":-23.5},"activity":{"type":"still","confidence":100},"battery":{"is_charging":true,"level":0.38},"extras":{"triggerType":"appState"}}]}  

```
  
  
**5. /scan**  
  
หากพบ device อื่นๆผ่าน Bluetooth  หรือการ scan QRCode ก็จะส่ง API อันนี้  
  

```
{"meetId":"XXXX","timestamp":"2020-04-11T11:06:53.777Z","meetWithIds":["XXXX"],"location":{"latitude":13,"longitude":100,"accuracy":24.2},"type":"bluetooth"}  

```
  
**6. https://raw.githubusercontent.com/codeforpublic/morchana-core/master/available**  
  
เป็น API Kill-Switch เอาไว้เมื่อเลิกเก็บข้อมูลผู้ใช้แล้ว ก็จะใช้งานแอพไมไ่ด้ ชอบตรงที่เก็บไว้บน Github  
  
[![](https://1.bp.blogspot.com/--5pvypeMgXQ/XpGt_uV1rJI/AAAAAAACASU/1JASpLED7KYE1Xs4LReziGfg8MHOlfeuACNcBGAsYHQ/s640/Screenshot_2020-04-11-14-57-40-973_com.thaialert.app.jpg)](https://1.bp.blogspot.com/--5pvypeMgXQ/XpGt_uV1rJI/AAAAAAACASU/1JASpLED7KYE1Xs4LReziGfg8MHOlfeuACNcBGAsYHQ/s1600/Screenshot_2020-04-11-14-57-40-973_com.thaialert.app.jpg)  
  
**สรุป**  
- ไม่พบว่ามีการส่งรูปที่เราถ่ายขึ้นไปยังบน Server  
- ไม่พบว่ามีการส่งข้อมูลอื่นๆนอกเหนือจากที่ประกาศไว้  
- งั้นเรามาใช้แอพ หมอชนะ กันเถอะ  
Appstore: <https://apps.apple.com/th/app/allthaialert/id1505185420>  
Play Store: <https://play.google.com/store/apps/details?id=com.thaialert.app>  
  
  
  
