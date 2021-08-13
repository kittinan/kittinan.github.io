---
title: 'Train Model บน Cloud ด้วย Google Cloud Machine Learning Engine'
date: '2017-08-13 12:06:00'
---

สวัสดีครับผมจะมาเล่าประสบการณ์ การทดลองใช้งาน [**Google Cloud Machine Learning Engine**](https://cloud.google.com/ml-engine/) หรือเรียกสั้นๆ Cloud ML Engine โดยความสามารถของมันก็คือ การนำ Model Machine Learning ที่เราสร้างขึ้นมาโดย [Tensorflow](https://www.tensorflow.org/) หรือ [Keras](https://keras.io/) (Tensorflow Backend) ไป Train บน Cloud ของ Google นั่นเอง ซึ่งการใช้งาน Cloud ML Engine นั้นมีค่าใช้จ่ายคร่าวๆดังนี้  
  
   
[![](https://3.bp.blogspot.com/-ghbCz1e90j0/WYxMvtczNiI/AAAAAAAA0nE/TtV_h2HCgDMgmKxfPKb54Qsf8CwxIKr_wCLcBGAs/s640/Screenshot%2Bat%2B2017-08-10%2B19-08-14.png)](https://3.bp.blogspot.com/-ghbCz1e90j0/WYxMvtczNiI/AAAAAAAA0nE/TtV_h2HCgDMgmKxfPKb54Qsf8CwxIKr_wCLcBGAs/s1600/Screenshot%2Bat%2B2017-08-10%2B19-08-14.png)  
   
 วิธีการคำนวนราคาโดยละเอียดจะคิดเป็น ML training unit ซึ่งสามารถตรวจสอบได้ที่ <https://cloud.google.com/ml-engine/pricing>  
  
สำหรับ Account Google Cloud ใหม่ Google จะให้ Credit 300 USD ใช้ได้ 12 เดือน ดูรายละเอียดได้ที่ <https://cloud.google.com/free/> (ผมก็ใช้ไอตัว Free Credit เนี่ยแหละมาลองเล่น)  
  
 **สิ่งที่ต้องการ**  
  
- Account Google Cloud ที่ผูกบัตรเครดิตเรียบร้อย  
- เครื่องที่ติดตั้ง  Google Cloud SDK เสร็จเรียบร้อย (วิธีการติดตั้งดูที่ <https://cloud.google.com/sdk/downloads>)  
- Code Model ที่ต้องการ Train (ในที่นี้ผมจะ Train โดยใช้ Keras ที่มี Tensorflow เป็น Backend โดยใช้โปรเจค [thai-handwriting-number](https://github.com/kittinan/thai-handwriting-number))  
  
**สร้างโปรเจค**  
  
- ทำการสร้างโปรเจคใหม่หรือจะใช้โปรเจคเดิมที่มีอยู่แล้วก็ได้  
  


| [![](https://1.bp.blogspot.com/-FgpPaZZVufs/WYxm9AYL72I/AAAAAAAA0nc/EWnvYtDOmcwk0AQgPBMIFUeJDpOsYedBACLcBGAs/s1600/Screenshot%2Bat%2B2017-08-10%2B20-59-16.png)](https://1.bp.blogspot.com/-FgpPaZZVufs/WYxm9AYL72I/AAAAAAAA0nc/EWnvYtDOmcwk0AQgPBMIFUeJDpOsYedBACLcBGAs/s1600/Screenshot%2Bat%2B2017-08-10%2B20-59-16.png) |
| สร้างโปรจคใหม่โดยใช้ชื่อ test-cloud-ml |

  
- รันคำสั่งในเครื่องเราเอง  
  

> gcloud projects list

  
ก็จะขึ้นโปรเจคใหม่ที่เราสร้างขึ้นมาดังภาพ  
  
[![](https://4.bp.blogspot.com/-odVVsQQqgn4/WYxo-Oit6wI/AAAAAAAA0no/GrMYC3X9auEZ-gxHO9wB5zy7ZhTEd53PACLcBGAs/s640/Screenshot%2Bat%2B2017-08-10%2B21-06-31.png)](https://4.bp.blogspot.com/-odVVsQQqgn4/WYxo-Oit6wI/AAAAAAAA0no/GrMYC3X9auEZ-gxHO9wB5zy7ZhTEd53PACLcBGAs/s1600/Screenshot%2Bat%2B2017-08-10%2B21-06-31.png)  
  
ตั้งให้โปรเจค test-cloud-ml เป็นโปรเจคหลัก (ใช้ PROJECT\_ID)  
  

> gcloud config set project test-cloud-ml-176413

  
เปิดการใช้งาน Google Cloud Machine Learning Engine ให้กับโปรเจคของเรา โดยเข้าไปที่ APIs & services > Library  
  


| [![](https://2.bp.blogspot.com/-gdxbkOybfYs/WY5v1MwrSmI/AAAAAAAA0xU/McytEFTAXxQ76r_AHXVYoIeRzXgJ6UTJwCLcBGAs/s640/Screenshot%2Bat%2B2017-08-11%2B16-57-10.png)](https://2.bp.blogspot.com/-gdxbkOybfYs/WY5v1MwrSmI/AAAAAAAA0xU/McytEFTAXxQ76r_AHXVYoIeRzXgJ6UTJwCLcBGAs/s1600/Screenshot%2Bat%2B2017-08-11%2B16-57-10.png) |
| เลือก Machine Learning Engine API |

  


| [![](https://1.bp.blogspot.com/-fsOLbygwdHM/WY5v2L3o3II/AAAAAAAA0xY/5mFMAyEo6hc_ax36NXEdtpE5_R0DJ9THACLcBGAs/s640/Screenshot%2Bat%2B2017-08-11%2B16-57-33.png)](https://1.bp.blogspot.com/-fsOLbygwdHM/WY5v2L3o3II/AAAAAAAA0xY/5mFMAyEo6hc_ax36NXEdtpE5_R0DJ9THACLcBGAs/s1600/Screenshot%2Bat%2B2017-08-11%2B16-57-33.png) |
| กด Enable |

  
 **สิ่งที่ควรรู้ก่อนการปรับปรุง Code เพื่อนำไป Train บน Cloud**  
 -  Cloud ML Runtime นั้นใช้ **Python 2.7** สามารถตรวจสอบ Package ต่างๆและ Version ของ Cloud ML Runtime ได้ที่ <https://cloud.google.com/ml-engine/docs/concepts/runtime-version-list>  
  
- ข้อมูลที่เรา Read / Write ทั้งหมดนั้นต้องผ่าน [Google Cloud Storage](https://cloud.google.com/storage/)  (เราควรจัดการ Dataset ที่จะใช้ Train ให้สะดวกในการใช้งาน ในที่นี้จะจัดการ Dataset ให้อยู่ใน format ของ pickle ซึ่งต้องใช้ protocol version 2)  
  
**ปรับปรุง Code สำหรับ Train บน Cloud**  
  
1. จัดการอัพโหลด Dataset ที่ใช้ในการ Train อัพโหลดขึ้น Google Cloud Stroage เสียก่อน ในที่นี้ผม Serialize ข้อมูลด้วย pickle แล้วเซฟเป็นไฟล์ไว้ โดยต้องใช้ protolcol version 2  
  

> pickle.dump(DATASET\_VARIABLE, open("dataset.pkl", "wb"), protocol = 2)

  
1.1 จัดการสร้าง bucket ของ Google Cloud Storage โดยในที่นี้จะตั้งชื่อ bucket ว่า kittinan (bucket เปรียบเสมือนตู้คอนเทนเนอร์อันนึงที่เอาไว้จัดเก็บข้อมูลของเรา <https://cloud.google.com/storage/docs/key-terms#buckets>)  โดยสร้าง bucket ด้วยคำสั่ง  
  

>  gsutil mb gs://kittinan/

หรือเราสามารถสร้างในหน้าเวปก็ได้  
  
[![](https://2.bp.blogspot.com/-UgXUlEF0-FU/WY2DVxwzdtI/AAAAAAAA0ro/N5KBPoE72PQt90zCocIWoTCQ3S2f6q-SwCLcBGAs/s640/Screenshot%2Bat%2B2017-08-11%2B17-13-26.png)](https://2.bp.blogspot.com/-UgXUlEF0-FU/WY2DVxwzdtI/AAAAAAAA0ro/N5KBPoE72PQt90zCocIWoTCQ3S2f6q-SwCLcBGAs/s1600/Screenshot%2Bat%2B2017-08-11%2B17-13-26.png)  
  
1.2 อัพโหลดไฟล์ Dataset เข้า Google Cloud Storage ด้วยคำสั่ง  
  

> gsutil cp SOURCE gs:://BUCKET\_NAME/

ตัวอย่าง  

> gsutil cp src/thainumber\_28.pkl gs://kittinan/



| [![](https://2.bp.blogspot.com/-7Tu4rpeiFGY/WY2FDucWZTI/AAAAAAAA0r4/cEvtg0UinS4o2wPlVRatLZdQ-8IGzxUgACLcBGAs/s640/Screenshot%2Bat%2B2017-08-11%2B17-20-22.png)](https://2.bp.blogspot.com/-7Tu4rpeiFGY/WY2FDucWZTI/AAAAAAAA0r4/cEvtg0UinS4o2wPlVRatLZdQ-8IGzxUgACLcBGAs/s1600/Screenshot%2Bat%2B2017-08-11%2B17-20-22.png) |
| ภาพเมื่ออัพโหลดไฟล์เสร็จ |

  


| [![](https://3.bp.blogspot.com/-gmzoMc1GyN0/WY2FDulFAhI/AAAAAAAA0r0/3KPI8lUutvQmtOA46_DwUgXGOnQgnYGMwCLcBGAs/s640/Screenshot%2Bat%2B2017-08-11%2B17-20-50.png)](https://3.bp.blogspot.com/-gmzoMc1GyN0/WY2FDulFAhI/AAAAAAAA0r0/3KPI8lUutvQmtOA46_DwUgXGOnQgnYGMwCLcBGAs/s1600/Screenshot%2Bat%2B2017-08-11%2B17-20-50.png) |
| ลองเข้าไปดูในหน้าเวป Google Cloud Storage ก็จะเจอไฟล์ที่เราเพิ่งอัพโหลดเพิ่มขึ้นมา |

  
  
2. สร้าง Folder ชื่ออะไรก็ได้ (ในที่นี้จะใช้ชื่อ Folder ว่า cloud-ml-engine) โดยมีโครงสร้างไฟล์ดังนี้  
  
[![](https://3.bp.blogspot.com/-LPBb2YGLf-I/WY5-3yyqX5I/AAAAAAAA0x8/XgXFY8ZFvawtwiHagNzIckEjgnktBY50QCLcBGAs/s1600/Screenshot%2Bat%2B2017-08-12%2B11-06-32.png)](https://3.bp.blogspot.com/-LPBb2YGLf-I/WY5-3yyqX5I/AAAAAAAA0x8/XgXFY8ZFvawtwiHagNzIckEjgnktBY50QCLcBGAs/s1600/Screenshot%2Bat%2B2017-08-12%2B11-06-32.png)  
  
**setup.py**  
ระบุข้อมูลต่างๆ และ require package ต่างๆ  
<https://cloud.google.com/ml-engine/docs/how-tos/packaging-trainer#recommended_project_structure>  
  
   
**config.yml**  
ระบุค่า parameter ต่างๆของการ Train ครั้งนี้ ในที่นี้ระบุว่าให้ใช้ scaleTiear ที่เป็น BASIC\_GPU  
<https://cloud.google.com/ml-engine/reference/rest/v1/projects.jobs#traininginput>  
  
 **trainer > \_\_init\_\_.py**  
ไฟล์เปล่าๆ ใช้สำหรับ setuptools ที่อยู่ในไฟล์ setup.py   
  
**trainer > model.py**  
- ใช้ argparse module ในการ parse argument ต่างๆ โดยใน code นี้จะทำการ parse argument ของ training data และ job directory (Google Cloud Storage Path)  
  
- Read / Write File ต่างๆ ด้วย tensorflow.python.lib.io.file\_io แทน  
  
   
**ทดสอบรันบนเครื่องตัวเองก่อนด้วยคำสั่ง**  
  

> gcloud ml-engine local train \  
>   --job-dir ./ \  
>   --module-name trainer.model \  
>   --package-path ./trainer \  
>   -- \  
>   --train-file ../thainumber\_28.pkl

--job-dir : directory หรือ Google Cloud Storage ที่ใช้ในการ Package ไฟล์ (ML Engine จะส่ง argument job-dir ไปยัง script โปรแกรมเราด้วย)  
--module-name : module ที่เราต้องการรัน  
--package-path : path ของ module ที่เราจะรัน  
option ที่อยู่หลัง -- \ : คือ argument สำหรับ script โปรแกรมเรา  
  


| [![](https://2.bp.blogspot.com/-hZOegOna7tY/WY6I58YA4rI/AAAAAAAA0yM/krZFp04WJMECu8iyQX2o-v93ciabKQ_pgCLcBGAs/s640/Screenshot%2Bat%2B2017-08-12%2B11-49-31.png)](https://2.bp.blogspot.com/-hZOegOna7tY/WY6I58YA4rI/AAAAAAAA0yM/krZFp04WJMECu8iyQX2o-v93ciabKQ_pgCLcBGAs/s1600/Screenshot%2Bat%2B2017-08-12%2B11-49-31.png) |
| ภาพการรันบนเครื่องตัวเอง |

  
**รันบน Cloud ML Engine**  
ผมสร้าง Shell Script ขึ้นมาชื่อไฟล์ start\_train.sh เพื่อความสะดวกในการแก้ไขค่าต่างๆและการรัน โดยมีคำสั่งดังนี้  
  
   
export environment variables ต่างๆดังนี้  
BUCKET\_NAME - ชื่อ Bucket Google Cloud Storage ที่เราใช้  
JOB\_NAME - ชื่อ job ของเรา  
JOB\_DIR - Path Bucket Google Cloud Storage  
REGION - จะใช้ region ไหนในการรัน (ในที่นี้ใช้ US เพราะถูกกว่า)  
  
Option ต่างๆของ command gcloud ก็จะคล้ายๆกับการรันแบบ Local โดยที่มีเพิ่มเติมขึ้นมาดังนี้  
  
--runtime-version : จะใช้ runtime version ไหน (<https://cloud.google.com/ml-engine/docs/concepts/runtime-version-list>)  
--region : จะใช้ region ไหน  
--config : config yaml ไฟล์ ที่ระบุ training input ต่างๆ  
--train-file : Argument ของ script ที่ระบุ Path Training Data ที่อยู่บน  Google Cloud Storage  
  
ลองรัน ./start\_train.sh กันเลย  
  
[![](https://1.bp.blogspot.com/-8gFd_NQ1V-E/WY6ONROzTQI/AAAAAAAA0yc/g0WJqCSOFzsBoUCZe3EatIFZzte-tGo9gCLcBGAs/s640/Screenshot%2Bat%2B2017-08-12%2B12-02-24.png)](https://1.bp.blogspot.com/-8gFd_NQ1V-E/WY6ONROzTQI/AAAAAAAA0yc/g0WJqCSOFzsBoUCZe3EatIFZzte-tGo9gCLcBGAs/s1600/Screenshot%2Bat%2B2017-08-12%2B12-02-24.png)  
  
เมื่อเรารันสำเร็จ gcloud command จะแนะนำคำสั่งในการ stream log ให้เรา เมื่อลองรันดูก็จะเห็น log ในการรันบน cloud ต่างๆดังภาพ  
  
[![](https://1.bp.blogspot.com/-yBpj9m2XGWs/WY6Ojco-ezI/AAAAAAAA0yg/PvgbCyjCyQMZ0pB5w7LZGkyMP-g5m5MNQCLcBGAs/s640/Screenshot%2Bat%2B2017-08-12%2B12-02-42.png)](https://1.bp.blogspot.com/-yBpj9m2XGWs/WY6Ojco-ezI/AAAAAAAA0yg/PvgbCyjCyQMZ0pB5w7LZGkyMP-g5m5MNQCLcBGAs/s1600/Screenshot%2Bat%2B2017-08-12%2B12-02-42.png)  
เราสามารถเข้าไปดู Log ในเวปได้ด้วยนะ  
 <https://console.cloud.google.com/mlengine/jobs>  
  
[![](https://4.bp.blogspot.com/-rOul_7niNUY/WY6PJYyQiHI/AAAAAAAA0ys/ljfdi0GcZ0MTnbQnEVHfrotyfvRCi8LyACLcBGAs/s400/Screenshot%2Bat%2B2017-08-12%2B12-15-19.png)](https://4.bp.blogspot.com/-rOul_7niNUY/WY6PJYyQiHI/AAAAAAAA0ys/ljfdi0GcZ0MTnbQnEVHfrotyfvRCi8LyACLcBGAs/s1600/Screenshot%2Bat%2B2017-08-12%2B12-15-19.png)  
  
[![](https://2.bp.blogspot.com/-SDXafD-P9kE/WY6PJeaq95I/AAAAAAAA0yo/2WeEmJsBkp4uXpTSxB6bHB7zIYcMUUF3gCLcBGAs/s400/Screenshot%2Bat%2B2017-08-12%2B12-15-58.png)](https://2.bp.blogspot.com/-SDXafD-P9kE/WY6PJeaq95I/AAAAAAAA0yo/2WeEmJsBkp4uXpTSxB6bHB7zIYcMUUF3gCLcBGAs/s1600/Screenshot%2Bat%2B2017-08-12%2B12-15-58.png)  
หลังจากรันเสร็จลองเข้าไปดูใน  Bucket ของเราก็จะพบกับ folder ที่มีชื่อ job name ของเรา  
  
[![](https://1.bp.blogspot.com/-L6akpOsvIH8/WY6PkkVaxvI/AAAAAAAA0yw/Ur6HRg3fPWQVvgF2BucUivsDAUnduZw3ACLcBGAs/s640/Screenshot%2Bat%2B2017-08-12%2B12-17-52.png)](https://1.bp.blogspot.com/-L6akpOsvIH8/WY6PkkVaxvI/AAAAAAAA0yw/Ur6HRg3fPWQVvgF2BucUivsDAUnduZw3ACLcBGAs/s1600/Screenshot%2Bat%2B2017-08-12%2B12-17-52.png)  
เมื่อเข้าไปใน folder ก็จะพบ model\_weight.h5 ที่เราสั่งเซฟไว้ใน Code ของเราหลัง Train เสร็จ  
  
เป็นอันเสร็จสิ้นการทดลองเล่น Google Cloud Machine Learning Engine ครับผม  
  
**เพิ่มเติม**  
  
ทดลอง Download weight model มาลองรัน predict ดู  
  
[![](https://2.bp.blogspot.com/-KZphJ4YP2IQ/WY6TO9Z-WOI/AAAAAAAA0y8/acz9X9uXQT4aMuYRbZjDNV0LKMn5PGINACLcBGAs/s640/Screenshot%2Bat%2B2017-08-12%2B12-33-12.png)](https://2.bp.blogspot.com/-KZphJ4YP2IQ/WY6TO9Z-WOI/AAAAAAAA0y8/acz9X9uXQT4aMuYRbZjDNV0LKMn5PGINACLcBGAs/s1600/Screenshot%2Bat%2B2017-08-12%2B12-33-12.png)  
**สามารถดู Code ทั้งหมดได้ที่**  
<https://github.com/kittinan/thai-handwriting-number>  
<https://github.com/kittinan/thai-handwriting-number/tree/master/src/cloud-ml-engine>  
  
**อ้างอิง**  
<https://cloud.google.com/ml-engine>  
<https://github.com/clintonreece/keras-cloud-ml-engine>