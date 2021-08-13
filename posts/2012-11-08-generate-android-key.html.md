---
title: 'Generate Android Key'
date: '2012-11-08 12:30:00'
---

  

> keytool -exportcert -alias androiddebugkey -keystore ~/.android/debug.keystore  | openssl sha1 -binary | openssl base64

  
