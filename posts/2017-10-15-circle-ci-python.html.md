---
title: 'Circle CI กับ Python'
date: '2017-10-15 11:39:00'
---

วันนี้จะเป็นบันทึกการทดลองเล่น [Circle CI](https://circleci.com/) โดยจะให้เจ้า Circle CI นั้นเชื่อมต่อกับ Gtihub ในการรัน Test ซึ่ง Circle CI ก็จะมี Plan ต่างๆดังนี้ <https://circleci.com/pricing/> ในที่นี้เราก็จะใช้ Free Plan  
  
**สิ่งที่ต้องการ**  
- [Github Public Repo](https://github.com/kittinan/my-learn-circleci) ที่มี Test อยู่แล้ว (ถ้าไม่มีก็เริ่มเขียน Test ซะตั้งแต่วันนี้)  
- [Circle CI](https://circleci.com/) (แค่ Login ด้วย Github User)  
  
**ทำการ Setup Project กับ Circle CI**  
  
- ทำการเพิ่ม Project ในเวป Circle CI จากเมนู Add Project ทางด้านซ้าย  
  
[![](https://1.bp.blogspot.com/-pyyC3rJQlRk/WeLdwioz1_I/AAAAAAAA4b0/UxzXAbeBZ9sJr7L-8jU2el-zSqSlFNSEQCLcBGAs/s640/Screenshot%2Bat%2B2017-10-15%2B11-01-52.png)](https://1.bp.blogspot.com/-pyyC3rJQlRk/WeLdwioz1_I/AAAAAAAA4b0/UxzXAbeBZ9sJr7L-8jU2el-zSqSlFNSEQCLcBGAs/s1600/Screenshot%2Bat%2B2017-10-15%2B11-01-52.png)  
  
- เลือก Operating System และ Platform ในที่นี้จะใช้เป็น Linux และ Platform version 2.0  (version 2.0 เราสามารถใช้ Docker image ในการรันได้)  
  
[![](https://1.bp.blogspot.com/-l4_R_TSPVA0/WeLetvRpPII/AAAAAAAA4b8/Ic0zJjzpA7AM5FQlzviG9iTXN1UqiNzwwCLcBGAs/s640/Screenshot%2Bat%2B2017-10-15%2B11-03-20.png)](https://1.bp.blogspot.com/-l4_R_TSPVA0/WeLetvRpPII/AAAAAAAA4b8/Ic0zJjzpA7AM5FQlzviG9iTXN1UqiNzwwCLcBGAs/s1600/Screenshot%2Bat%2B2017-10-15%2B11-03-20.png)  
  
- เลือก ภาษา ที่ใช้ ในที่นี้ผมลองใช้ Python ในการรัน  
  
- เมื่อเลื่อนลงมาด้านล่างจะมีคำแนะนำให้สร้าง Folder .circleci และ ไฟล์ config.yml โดยจะมี Config เบื้องต้นให้เรานำไปใส่ในไฟล์ config.yml ได้เลย  
  
- โดยผมมีการปรับแก้เล็กน้อยตรงคำสั่งในการรัน Test โดยผมแก้เป็น  
  
  

> python -m unittest discover ./tests/

  
ตัวอย่างไฟล์ [.circleci/config.yaml](https://github.com/kittinan/my-learn-circleci/blob/master/.circleci/config.yml)  
  
- ทำการ commit และ Push  
  
- กดปุ่ม Start Building ใน Circle CI  
  
[![](https://3.bp.blogspot.com/-RXRG31J00j4/WeLiHJrFvmI/AAAAAAAA4cI/6uHw8VYF2ZEY0XYPE1gX8L2N8cOoHX5WgCLcBGAs/s640/Screenshot%2Bat%2B2017-10-15%2B11-20-21.png)](https://3.bp.blogspot.com/-RXRG31J00j4/WeLiHJrFvmI/AAAAAAAA4cI/6uHw8VYF2ZEY0XYPE1gX8L2N8cOoHX5WgCLcBGAs/s1600/Screenshot%2Bat%2B2017-10-15%2B11-20-21.png)  
  
- ระบบ  Circle CI ก็จะทำการ Setup Envoriment และตั้งค่าต่างๆตาม config.yaml ของเรา เมื่อมาดู Result ในการ run test ก็จะเห็นว่าสำเร็จเรียบร้อยดี  
  
  
[![](https://1.bp.blogspot.com/-7ZPGb0V5ISc/WeLinTrB-LI/AAAAAAAA4cM/RiVhTpHrX5EBfJWVISbBm6KjsnhwyAcuACLcBGAs/s640/Screenshot%2Bat%2B2017-10-15%2B11-17-53.png)](https://1.bp.blogspot.com/-7ZPGb0V5ISc/WeLinTrB-LI/AAAAAAAA4cM/RiVhTpHrX5EBfJWVISbBm6KjsnhwyAcuACLcBGAs/s1600/Screenshot%2Bat%2B2017-10-15%2B11-17-53.png)  
  
  
- เมื่อเรามีการแก้ไข code ของเราและ Push code เข้าไปใน github ระบบก็จะทำ Build และ Test ให้อัตโนมัติ พร้อมมี Email แจ้งเตือนอย่างสวยงาม  
  
[![](https://2.bp.blogspot.com/-yyjzCiBhLOE/WeLkVUbUm6I/AAAAAAAA4cY/s3N-u22bzQse8nt-zYl-Gzgp8L3a_z7HwCLcBGAs/s1600/Screenshot%2Bat%2B2017-10-15%2B11-30-00.png)](https://2.bp.blogspot.com/-yyjzCiBhLOE/WeLkVUbUm6I/AAAAAAAA4cY/s3N-u22bzQse8nt-zYl-Gzgp8L3a_z7HwCLcBGAs/s1600/Screenshot%2Bat%2B2017-10-15%2B11-30-00.png)  
  
เป็นอันเสร็จสิ้นการทดลองเล่น Circle CI ในเบื้องต้น   
เราสามารถนำ Badge การ Build & Test มาแปะในหน้าเวปของเราได้โดยเข้าไปที่ Setting ของ Project ใน Circle CI และเลือก Status Badges  
[![](https://2.bp.blogspot.com/-3Ll82cvQ3EI/WeLrDJFY6II/AAAAAAAA4co/jWFvy_QOQNkn6Za5ITCvzBHDx--_dcoXgCLcBGAs/s640/Screenshot%2Bat%2B2017-10-15%2B11-57-25.png)](https://2.bp.blogspot.com/-3Ll82cvQ3EI/WeLrDJFY6II/AAAAAAAA4co/jWFvy_QOQNkn6Za5ITCvzBHDx--_dcoXgCLcBGAs/s1600/Screenshot%2Bat%2B2017-10-15%2B11-57-25.png)  
  
**สรุป**จากความรู้สึกในการเล่น Circle CI ครั้งแรก มีความรู้สึกว่าระบบของ Circle CI build ได้รวดเร็วกว่าของทาง Travis CI สามารถดู Code ตัวอย่างได้ที่ <https://github.com/kittinan/my-learn-circleci>  
Ref:[https://circleci.com](https://circleci.com/)<https://circleci.com/docs/2.0/>  
