---
title: 'ทำ Continuous Integration ด้วย Gitlab '
date: '2015-10-15 22:54:00'
---

หลังจาก Blog ที่แล้วได้เล่าถึง [วิธีการติดตั้ง Gitlab](http://kittinanx.blogspot.com/2015/10/gitlab-ubuntu-1404.html) ไปแบบคร่าวๆ คราวนี้เราจะใช้เจ้า Gitlab ทำ Continuous Integration กันดู โดยในที่นี้จะใช้โปรเจคนี้เป็นตัวอย่างในการทำ (<https://github.com/kittinan/thailandpost-track>) ซึ่งเราจะทำกับภาษา PHP นั้นเอง  
  
สมมุติว่าเจ้าโปรเจค <https://github.com/kittinan/thailandpost-track>อยู่บน Gitlab ของเราเรียบร้อยแล้วนะครับ  
  
[![](http://1.bp.blogspot.com/-IBdNKKR0VmM/Vh-7QZpjiXI/AAAAAAAAZfY/MVqPQK658jQ/s640/Screenshot-kittinan%2B-%2Bthailandpost-track%2B%257C%2BGitLab%2B-%2BChromium.png)](http://1.bp.blogspot.com/-IBdNKKR0VmM/Vh-7QZpjiXI/AAAAAAAAZfY/MVqPQK658jQ/s1600/Screenshot-kittinan%2B-%2Bthailandpost-track%2B%257C%2BGitLab%2B-%2BChromium.png)  
  
สิ่งที่เราต้องทำอันดับแรกก็คือ เราต้องติดตั้งเจ้า Gitlab Runner (<https://gitlab.com/gitlab-org/gitlab-ci-multi-runner>) ซึ่งเจ้าตัวนี้มีหน้าที่ทำการ Build และรันทดสอบ  Code ของเราตามที่เราต้องการ  
  
### ติดตั้ง Gitlab Runner

  
มาติดตั้งเจ้า  Gitlab Runner กันเลย  
<https://gitlab.com/gitlab-org/gitlab-ci-multi-runner/blob/master/docs/install/linux-repository.md>  
  
วิธีการติดตั้งก็ง่ายๆเหมือนติดตั้งเจ้า Gitlab นั้นแหละ  
  

> curl -L https://packages.gitlab.com/install/repositories/runner/gitlab-ci-multi-runner/script.deb.sh | sudo bash

  

> sudo apt-get install gitlab-ci-multi-runner

  
### เปิดการใช้งาน Continuous Integration

  
เราจะต้องทำการเปิดการใช้งาน Continuous Integration ในแต่ละโปรเจคก่อน โดยให้เราไปที่ Gitlab Dashboard > Continuous Integration ดังภาพ  
  
[![](http://4.bp.blogspot.com/-w6VE6b2CeO0/Vh-9SAatgaI/AAAAAAAAZfk/kP_c6ddJGIc/s640/Screenshot-Projects%2B%257C%2BDashboard%2B%257C%2BGitLab%2B-%2BChromium-1.png)](http://4.bp.blogspot.com/-w6VE6b2CeO0/Vh-9SAatgaI/AAAAAAAAZfk/kP_c6ddJGIc/s1600/Screenshot-Projects%2B%257C%2BDashboard%2B%257C%2BGitLab%2B-%2BChromium-1.png)  
  
คลิก Add Project to CI  
  
[![](http://1.bp.blogspot.com/-wETjCFrYocA/Vh-9e_H1Y7I/AAAAAAAAZfs/d3aM8N5tVVk/s640/Screenshot-GitLab%2B-%2BChromium.png)](http://1.bp.blogspot.com/-wETjCFrYocA/Vh-9e_H1Y7I/AAAAAAAAZfs/d3aM8N5tVVk/s1600/Screenshot-GitLab%2B-%2BChromium.png)  
  
ให้เราเข้าไปที่เมนู Runner  
  
[![](http://1.bp.blogspot.com/-2JoQaLVdbtw/Vh-91L93cgI/AAAAAAAAZf0/72jT3XuVxsU/s640/Screenshot-GitLab%2B-%2BChromium-1.png)](http://1.bp.blogspot.com/-2JoQaLVdbtw/Vh-91L93cgI/AAAAAAAAZf0/72jT3XuVxsU/s1600/Screenshot-GitLab%2B-%2BChromium-1.png)  
  
เมื่อเข้ามาในหน้า Runner แล้ว เจ้า  Gitlab ก็จะมีให้เลือกว่าเราจะใช้ Sepecific runners หรือ Shared runners  
  
Sepecific runners - private server ของเราเอง  
Shared runners - server ฟรีของ gitlab  
  
ให้กลับไปที่ Server ที่เราเพิ่งลง Gitlab Runner ไว้ รันคำสั่ง  
  

> sudo gitlab-ci-multi-runner register

  
ให้เรานำ url ที่อยู่ในหน้าเวปมาใส่ ในที่นี้ก็คือ http://gitlab.kittinan.domain/ci  
หลังจากใส่  url แล้วก็ใส่ token ต่อ หลังจากนั้นจะมีให้ใส่ Description กับ tag จะใส่ไม่ใส่ก็แล้วแต่  
แล้ว Gitlab Runner จะถามว่าจะใช้ executor ตัวไหน ซึ่ง Gitlab Runner ก็สามารถใช้ได้หลายอย่างเช่น docker, docker-ssh, ssh, shell, parallels ในที่นี้ใช้ shell ดังภาพ  
  
[![](http://4.bp.blogspot.com/-bHZlRt16UBM/Vh-_389KR_I/AAAAAAAAZgA/SWLwtQ8X4UU/s640/Screenshot-root%2540gitlab%253A%2B%257E-1.png)](http://4.bp.blogspot.com/-bHZlRt16UBM/Vh-_389KR_I/AAAAAAAAZgA/SWLwtQ8X4UU/s1600/Screenshot-root%2540gitlab%253A%2B%257E-1.png)  
  
เมื่อเรา Refresh หน้าเวป Runner ก็จะมี Runner ที่ Activate แล้วขึ้นมา  
  
[![](http://3.bp.blogspot.com/-HASjMoRNlTo/Vh_AP24kigI/AAAAAAAAZgI/HsjHcSs-lCU/s640/Screenshot-GitLab%2B-%2BChromium-2.png)](http://3.bp.blogspot.com/-HASjMoRNlTo/Vh_AP24kigI/AAAAAAAAZgI/HsjHcSs-lCU/s1600/Screenshot-GitLab%2B-%2BChromium-2.png)  
  
### **เตรียม Server ให้พร้อมรัน Test (PHP)**

ทำการติดตั้ง Package ต่างๆที่จะใช้ในการรัน Test ซึ่งในที่นี้เราจะทำการติดตั้ง Package PHP ต่างๆที่จำเป็นต้องใช้สำหรับโปรเจคนี้  
  

> sudo apt-get install php5-cli php5-curl

  
ติดตั้ง composer  
  

> curl -sS https://getcomposer.org/installer | php  
> sudo mv composer.phar /usr/bin/composer

  
เสร็จสิ้นการเตรียม environment สำหรับการรัน Test โปรเจคนี้  
  
### สร้างไฟล์ .gitlab-ci.yml

  
เราต้องทำการสร้างไฟล์ .gitlab-ci.yml ขึ้นมาใน Root Path โปรเจคของเรา ซึ่งไฟล์นี้จะทำหน้าที่ประมวลผลตามที่เราต้องการ เช่น ก่อนที่เราจะ Test เราต้องการให้ composer โหลด  library ต่างๆก่อน  
  
   
สำหรับคำสั่งในไฟล์ .gitlab-ci.yml  
  
before\_script คือ ก่อนจะเริ่มทำงานตาม job ต่างๆ ให้ทำอะไรก่อนบ้าง ในที่นี้สั่งให้ composer โหลด library ต่างๆ  
    
job1: <--- ชื่องาน ในที่นี้คือ job1 เราจะตั้งเป็นอะไรก็ได้เช่น TestModel  
    script:  
        - vendor/bin/phpunit tests/    <-- สั่งให้รัน test ใน directory tests  
  
สามารถดูคำสั่งที่ใช้ใน .gitlab-ci.yml เพิ่มเติม ได้ที่ <http://doc.gitlab.com/ci/yaml/README.html>  
  
เมื่อเพิ่มไฟล์ .gitlab-ci.yml ให้ทำการ commit และ push  
  
### ดูผลลัพท์ใน Gitlab

  
หลังจากที่เราได้ push code เข้า Gitlab เรียบร้อย เจ้า  Gitlab ก็จะไปบอก Gitlab Runner ให้ทำการทดสอบ Code ของเราตาม คำสั่งที่เราได้สั่งไว้ในไฟล์ .gitlab-ci.yml   
  
เข้าหน้าเวป Gitlab ของเรา ดูที่  commit ก็จะเห็นสถานะของการรัน Test ดังภาพ  
  
[![](http://3.bp.blogspot.com/-vx6ub1N8xpw/Vh_IbQTJUXI/AAAAAAAAZgU/Wq5kC6M7t7I/s640/Screenshot-GitLab%2B-%2BChromium-7.png)](http://3.bp.blogspot.com/-vx6ub1N8xpw/Vh_IbQTJUXI/AAAAAAAAZgU/Wq5kC6M7t7I/s1600/Screenshot-GitLab%2B-%2BChromium-7.png)  
ภาพขณะตัว Runner กำลังรัน composer เพื่อโหลด library ต่างๆ  
  
[![](http://3.bp.blogspot.com/-8vzGu3WGhAk/Vh_M9MyzWBI/AAAAAAAAZg4/mwLqB9HsrOc/s640/Screenshot-GitLab%2B-%2BChromium-6.png)](http://3.bp.blogspot.com/-8vzGu3WGhAk/Vh_M9MyzWBI/AAAAAAAAZg4/mwLqB9HsrOc/s1600/Screenshot-GitLab%2B-%2BChromium-6.png)  
ภาพเมื่อรัน Test เสร็จแล้ว  
  
[![](http://3.bp.blogspot.com/-_b9JvPlzjTQ/Vh_JAP3pZdI/AAAAAAAAZgk/n8rKJ1GCU_Q/s640/Screenshot-GitLab%2B-%2BChromium-8.png)](http://3.bp.blogspot.com/-_b9JvPlzjTQ/Vh_JAP3pZdI/AAAAAAAAZgk/n8rKJ1GCU_Q/s1600/Screenshot-GitLab%2B-%2BChromium-8.png)  
พอเรากลับมาดูที่หน้า  Commit ก็จะเป็นว่า Run Test  ผ่านเรียบร้อย Success เขียวๆ ดังภาพ  
  
[![](http://4.bp.blogspot.com/-zg5VY67zTW0/Vh_JSChK77I/AAAAAAAAZgs/fJERhmNthoI/s640/Screenshot-GitLab%2B-%2BChromium-9.png)](http://4.bp.blogspot.com/-zg5VY67zTW0/Vh_JSChK77I/AAAAAAAAZgs/fJERhmNthoI/s1600/Screenshot-GitLab%2B-%2BChromium-9.png)  
  
เป็นอันเสร็จสิ้นการทำ Continuous Integration ด้วย Gitlab  (PHP) แบบคร่าวๆแล้วครับ  
  
  
REF:  
<https://gitlab.com/gitlab-org/gitlab-ci-multi-runner/blob/master/docs/install/linux-repository.md>  
<https://about.gitlab.com/gitlab-ci/>  
<http://doc.gitlab.com/ci/yaml/README.html>  
  
  
