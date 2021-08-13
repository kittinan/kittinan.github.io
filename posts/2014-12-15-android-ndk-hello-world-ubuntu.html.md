---
title: 'ติดตั้ง Android NDK + Hello World [Ubuntu]'
date: '2014-12-15 00:15:00'
---

1. ดาวโหลด NDK ตัวล่าสุดได้ที่ https://developer.android.com/tools/sdk/ndk/index.html  
  
2. แตกไฟล์  
  

> chmod +x android-ndk-r10d-linux-x86\_64.bin  
> ./android-ndk-r10d-linux-x86\_64.bin

  
3. สร้าง toolchain standalone โดยไปที่ folder android-ndk-r10d/build/tools  
  

> ./make-standalone-toolchain.sh --arch=arm --ndk-dir=/home/null//android-ndk-r10d --install-dir=/home/null/android-toolchain --platform=android-8  --system=linux-x86\_64 --verbose

  
4. สร้างไฟล์ hello.c ที่ /tmp/hello.c  
  

> #include <stdio.h>  
> int main() {  
>         printf("Hello Anroid NDK\n");  
> }

  
5. ไปที่ standalone toolchain ที่สร้างขึ้นมา  
  

> cd ~/android-toolchain/bin/

  
6. compile hello.c ด้วย arm-linux-androideabi-gcc  
  

> ./arm-linux-androideabi-gcc /tmp/hello.c -o /tmp/hello.bin

  
7. อัพไฟล์ที่ compile สำเร็จ hello.bin ไปที่ /data/ ของ Android (ต้อง root เครื่อง)  
  

> adb push /tmp/hello.bin /data/hello.bin

  
8. ทดลองรัน  
  
[![](http://3.bp.blogspot.com/-TN1e2MonvB0/VI3FQlPdUwI/AAAAAAAATIc/46xc_uYZAP8/s1600/Screenshot-Terminal-1.png)](http://3.bp.blogspot.com/-TN1e2MonvB0/VI3FQlPdUwI/AAAAAAAATIc/46xc_uYZAP8/s1600/Screenshot-Terminal-1.png)  
