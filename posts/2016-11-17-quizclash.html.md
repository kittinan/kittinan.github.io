---
title: 'แงะแอพ QuizClash แบบบังเอิญ'
date: '2016-11-17 22:08:00'
---

ช่วงนี้แอพ [QuizClash](http://www.quizclash-game.com/) กำลังเป็นที่นิยมในหมู่เพื่อนฝูงจึงได้มีโอกาสโหลดมาเล่นบ้าง ด้วยความบังเอิญขณะนั่งทำ MITM โทรศัพท์ตัวเองอยู่เพื่อที่จะดูว่าแอพ Facebook มันยังใช้ Certificate Pinning อยู่รึเปล่า ปรากฎว่าแอพ Facebook ยังใช้ Certificate Pinning อยู่ แต่มีบางโดเมนที่ไม่ได้ใช้ (Facebook เริ่มใช้ Certificate Pinning ประมาณเดือนตุลาคมปี 2015) ซึ่งขณะที่นั่งทำ MITM อยู่ก็ได้กดเข้าไปเล่นเกมส์ QuizClash และก็ได้พบอะไรบางอย่างเกิดขึ้น . . .  
  
ย้อนกลับไปเมื่อตอนโหลดแอพ QuizClash มาเล่นในทีแรกก็เกิดข้อสงสัยคือทำไมแอพมันโคตรใหญ่จังเลยวะ  
  
[Android](https://play.google.com/store/apps/details?id=se.feomedia.quizkampen.uk.lite&hl=en)  ~58 MB  
[IOS](https://itunes.apple.com/app/quizclash/id684892946)  ~99 MB  
  
ในทีแรกก็คิดว่ามันคงยัดพวกคำถามกับพวกรูปภาพลงไปในแอพเลย ปรากฎว่า**ไม่ใช่** มันโหลดคำถามและรูปภาพจาก Network ดังภาพ  
  
[![](https://3.bp.blogspot.com/-8eFSxn8Q188/WC2_zzqg56I/AAAAAAAAleM/ZrD7cu7XGcYpj1R4ijcaeoPHP0XxDqGfACLcB/s640/Screenshot-Burp%2BSuite%2BFree%2BEdition%2Bv1.7.10%2B-%2BTemporary%2BProject.png)](https://3.bp.blogspot.com/-8eFSxn8Q188/WC2_zzqg56I/AAAAAAAAleM/ZrD7cu7XGcYpj1R4ijcaeoPHP0XxDqGfACLcB/s1600/Screenshot-Burp%2BSuite%2BFree%2BEdition%2Bv1.7.10%2B-%2BTemporary%2BProject.png)  
  
จากภาพก็จะเห็นว่ามีการใช้ Facebook SDK สำหรับการ Login (เพราะผม Login ด้วย Facebook ในการเล่น)  
  
ตัวเกมส์ก็จะทำการ Login ด้วย Token ของตัวเองด้วยดังภาพ  
  
[![](https://2.bp.blogspot.com/-axUrxcwtZKY/WC3BLYbdelI/AAAAAAAAleU/Pa6grUgznxQa-Nx6g4rraRcKzdNocUOrwCLcB/s1600/Screenshot-Burp%2BSuite%2BFree%2BEdition%2Bv1.7.10%2B-%2BTemporary%2BProject-1.png)](https://2.bp.blogspot.com/-axUrxcwtZKY/WC3BLYbdelI/AAAAAAAAleU/Pa6grUgznxQa-Nx6g4rraRcKzdNocUOrwCLcB/s1600/Screenshot-Burp%2BSuite%2BFree%2BEdition%2Bv1.7.10%2B-%2BTemporary%2BProject-1.png)  
ที่น่าสนใจคือมีการใช้ HMAC ด้วย น่าจะใช้สำหรับเชคความถูกต้อง Request พูดถึง HMAC แล้วก็คิดถึง Ragnarok  
และที่น่าสนใจที่สุดคือ Request นี้  
[![](https://4.bp.blogspot.com/-oDcXO1pk0jk/WC3CAtmWQSI/AAAAAAAAleY/cJSK3jiD6-MFZvTSQI-IpbizdyEYsx6sQCLcB/s1600/Screenshot-12.png)](https://4.bp.blogspot.com/-oDcXO1pk0jk/WC3CAtmWQSI/AAAAAAAAleY/cJSK3jiD6-MFZvTSQI-IpbizdyEYsx6sQCLcB/s1600/Screenshot-12.png)  
มันคือ Request ในการโหลดคำถามและคำตอบของเกมส์ที่เราเล่นกับเพื่อนคนใดคนหนึ่ง ซึ่ง Response เป็น JSON มีขนาดประมาณ 75KB ตัวอย่าง JSON ก็ดังภาพด้านล่าง   
[![](https://1.bp.blogspot.com/-Fl4OfyC2wQw/WC3Er6Ohh9I/AAAAAAAAleg/-xySbtEhfjs3z9BgX_ALPkGRmwAE5X7NwCLcB/s640/Screenshot-tun%2540null%253A%2B-tmp.png)](https://1.bp.blogspot.com/-Fl4OfyC2wQw/WC3Er6Ohh9I/AAAAAAAAleg/-xySbtEhfjs3z9BgX_ALPkGRmwAE5X7NwCLcB/s1600/Screenshot-tun%2540null%253A%2B-tmp.png)  
  
ซึ่งคำถาม - คำตอบจะไม่มีการเปลี่ยนแปลง ถ้าได้ JSON ไฟล์นี้มาก็จะสามารถตอบคำถามได้ทุกข้อล่ะ 555+  
ส่วนแอพที่มีขนาดใหญ่นั้นเมื่อได้ลองแกะดูเบื้องต้นน่าจะมาจาก Resource ไฟล์ภาพนั่นเอง ซึ่งตัวแอพ support หลาย locale เลยต้องมีภาพเยอะตามแต่ละ locale ไปด้วย  
[![](https://4.bp.blogspot.com/-DhS4OxB5ArM/WC3G19pfJAI/AAAAAAAAles/5y-DwlfqB6kkJwTIaEwULH5p0f69a7hugCLcB/s640/Screenshot-13.png)](https://4.bp.blogspot.com/-DhS4OxB5ArM/WC3G19pfJAI/AAAAAAAAles/5y-DwlfqB6kkJwTIaEwULH5p0f69a7hugCLcB/s1600/Screenshot-13.png)  
  
จบแล้วครับ  
ปล. เพื่อการศึกษาเท่านั้น