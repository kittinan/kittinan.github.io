---
title: 'วิธีเปิดบอท Rag บนโทรศัพท์ Android'
date: '2016-09-18 00:18:00'
---

วันนี้จะมาเล่าวิธีการเปิดบอท Rag ในโทรศัพท์นะครับ  
  
**สิ่งที่ต้องการ**  
  
- เครื่อง Android ที่ลง Linux เรียบร้อย วิธีลงดูได้จากบทความนี้ ([วิธีการรัน Linux บนโทรศัพท์ Android](https://kittinanx.blogspot.com/2016/09/install-linux-android.html))  
  
- Bot Openkore ที่สามารถรันได้ตามปกติบนคอมอยู่แล้ว ในที่นี้ผมใช้ของท่าน Unstle (<https://github.com/DunstleOS/openkore/>) และใช้ Key ที่ท่าน unknown-item แจกใน [tRO Mega Thread](https://github.com/OpenKore/openkore/issues/221)  
  
- [Firezilla](https://filezilla-project.org/) (เอาไว้อัพไฟล์ Bot เข้า Android) หรือถ้าใครใช้ git เป็นก็อัพผ่าน git ก็ได้สะดวกดี  
  
  
**การติดตั้ง**  
  
ในที่นี้เลือกใช้ Linux Distribution :  Debian Jessie นะครับ  
  
เปิดโปรแกรม JuiceSSH (ที่ได้ลงไว้ในบทความ [วิธีการรัน Linux บนโทรศัพท์ Android](https://kittinanx.blogspot.com/2016/09/install-linux-android.html)) และเชื่อมต่อให้เรียบร้อย  
  
เริ่มการติดตั้ง Package ที่ Bot ต้องการ โดยสามารถดูได้จาก <http://openkore.com/index.php/How_to_run_OpenKore> โดยผมได้รวบรวมเป็นคำสั่งเดียวดังนี้  
  

> sudo apt-get install g++ libreadline6-dev libcurl4-gnutls-dev unzip make libncurses5-dev -y

  


| [![](https://1.bp.blogspot.com/-E9VPhQqsliA/V9153FP5VVI/AAAAAAAAj7E/6dQBA9-1Q2UH8qpgnTycCuEH3C0zhbe6gCLcB/s640/Screenshot_20160917-203202.png)](https://1.bp.blogspot.com/-E9VPhQqsliA/V9153FP5VVI/AAAAAAAAj7E/6dQBA9-1Q2UH8qpgnTycCuEH3C0zhbe6gCLcB/s1600/Screenshot_20160917-203202.png) |
| ภาพเมื่อลง Package ที่ Bot ต้องการเสร็จ |

  
  
เมื่อติดตั้งเสร็จแล้วเราจะอัพ Bot เข้า Android  
**วิธีการอัพไฟล์ด้วย Filezilla**  
  
เราจะใช้ Filezilla อัพ Bot เข้า Android โดยไปที่ File > Site Manager กด New Site แล้วตั้งชื่อไรก็ได้ในที่นี้ตั้งว่า Android  
  
Host: ใส่ ip ของ Android  
Port: 22  
Protocol: SFTP  
Logon Type: Normal  
Username: android  
Password: changeme (หรือตามที่ท่านตั้งไว้)  
  
เมื่อใส่ข้อมูลเรียบร้อยแล้วกด Connect แล้วจะมี dialog เด้งขึ้นมา ให้ติ๊ก Always trust this host แล้วกด OK แล้วให้เข้า Edit > Setting > Transfers ใส่ Maximum simultaneous transers เป็น 10 เพื่อเพิ่มความเร็วในการอัพโหลด  
  
[![](https://4.bp.blogspot.com/-n8x7Z0uQkh0/V916VFtCfGI/AAAAAAAAj7Q/6oU3LqElC98rl1PMBs-Egy7QojoC04BYQCEw/s1600/Screenshot-Site%2BManager.png)](https://4.bp.blogspot.com/-n8x7Z0uQkh0/V916VFtCfGI/AAAAAAAAj7Q/6oU3LqElC98rl1PMBs-Egy7QojoC04BYQCEw/s1600/Screenshot-Site%2BManager.png)  
[![](https://3.bp.blogspot.com/-EBAu_qOyGg4/V916VsqLThI/AAAAAAAAj7U/tiQVnyq0sMAqBrBZOmHwjdZPRCc3XHVjQCEw/s1600/Screenshot-Unknown%2Bhost%2Bkey.png)](https://3.bp.blogspot.com/-EBAu_qOyGg4/V916VsqLThI/AAAAAAAAj7U/tiQVnyq0sMAqBrBZOmHwjdZPRCc3XHVjQCEw/s1600/Screenshot-Unknown%2Bhost%2Bkey.png)  
[![](https://4.bp.blogspot.com/-vzeQY4XGq2c/V916VOgmy2I/AAAAAAAAj7M/dlfrO7aRqYAs01H7XlPkdsknOZdauHtyACEw/s1600/Screenshot-Settings.png)](https://4.bp.blogspot.com/-vzeQY4XGq2c/V916VOgmy2I/AAAAAAAAj7M/dlfrO7aRqYAs01H7XlPkdsknOZdauHtyACEw/s1600/Screenshot-Settings.png)  
  
เสร็จแล้วลาก Folder Bot ฝั่งซ้ายมือไปยังฝั่งขวามือดังภาพ  
  
[![](https://1.bp.blogspot.com/-oLPbKayyrps/V916VKbU-II/AAAAAAAAj7I/xcQDldWLr88sZtUkZEvqRG2YyocFEILQACLcB/s640/Screenshot-Android%2B-%2Bsftp%253A--android%2540192.168.0.104%2B-%2BFileZilla.png)](https://1.bp.blogspot.com/-oLPbKayyrps/V916VKbU-II/AAAAAAAAj7I/xcQDldWLr88sZtUkZEvqRG2YyocFEILQACLcB/s1600/Screenshot-Android%2B-%2Bsftp%253A--android%2540192.168.0.104%2B-%2BFileZilla.png)  
  
เมื่ออัพไฟล์ Bot เสร็จแล้วให้กลับมาที่โทรศัพท์ เพื่อสั่งรันบอท  
  
ls -l  <<< ดู ไฟล์ใน Folder ที่อยู่ปัจจุบัน  
cd opk-unstle  <<< เปลี่ยน Folder ไปยัง Bot ในที่นี้ชื่อ folder คือ opk-unstle  
perl openkore.pl <<< รันบอท รันครั้งแรกบอทจะ compile code ก่อน ก็รอสักพัก  
  
[![](https://1.bp.blogspot.com/-DjO6flVlCuc/V915N-TGkbI/AAAAAAAAj64/77q5JrLL66gNdhFB9vVpiBYMlxsaEmJ5ACK4B/s640/Screenshot_20160917-211806.png)](http://1.bp.blogspot.com/-DjO6flVlCuc/V915N-TGkbI/AAAAAAAAj64/77q5JrLL66gNdhFB9vVpiBYMlxsaEmJ5ACK4B/s1600/Screenshot_20160917-211806.png)  


| [![](https://2.bp.blogspot.com/-Y4sAoTLx4Ik/V915cyOqG_I/AAAAAAAAj68/RmPU-go9KTcWA1eZ1lTq30sPtwzH2hnwACLcB/s640/Screenshot_20160917-235914.png)](https://2.bp.blogspot.com/-Y4sAoTLx4Ik/V915cyOqG_I/AAAAAAAAj68/RmPU-go9KTcWA1eZ1lTq30sPtwzH2hnwACLcB/s1600/Screenshot_20160917-235914.png) |
| ภาพ Bot ขณะ Compile |

  
  
เมื่อ Compile บอทเรียบร้อย Bot ก็จะทำงานแล้วดังภาพ  
  
[![](https://1.bp.blogspot.com/-uvKbT_C8mH4/V914ZTr0cPI/AAAAAAAAj6w/334PpSliA74HbnStd-59DqUarne3lvQ4gCLcB/s640/Screenshot_20160918-000637.png)](https://1.bp.blogspot.com/-uvKbT_C8mH4/V914ZTr0cPI/AAAAAAAAj6w/334PpSliA74HbnStd-59DqUarne3lvQ4gCLcB/s1600/Screenshot_20160918-000637.png)  
  
  
  
เสร็จสิ้นการ Bot บน Android  
  
  
