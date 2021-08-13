---
title: 'Android Installation error: INSTALL_FAILED_INSUFFICIENT_STORAGE'
date: '2012-11-21 16:10:00'
---

Error message  
  

> Installation error: INSTALL\_FAILED\_INSUFFICIENT\_STORAGE

  
Fix it by  
  
add this to manifest.xml file  
  

> android:installLocation="preferExternal"

  
just like this  
  
  

> <manifest xmlns:android="http://schemas.android.com/apk/res/android"  
>     package="com.kittinan.blog"  
>     android:theme="@android:style/Theme.Black.NoTitleBar.Fullscreen"  
>     android:versionCode="1"  
>     android:versionName="1.0"  
>     android:installLocation="preferExternal" >

  
  
  
