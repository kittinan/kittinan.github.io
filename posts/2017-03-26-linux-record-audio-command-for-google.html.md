---
title: 'Linux record audio command for Google Cloud Speech API'
date: '2017-03-26 20:15:00'
---

Command:  
  
arecord -f S16\_LE -V mono -r 8000 record.wav  
  
API Request:  
  
{  
  "config": {  
    "sampleRate": 8000,  
    "encoding": "LINEAR16",  
    "languageCode": "th"  
  },  
  "audio": {  
    "content": "CONTENT\_BASE64"  
  }  
}  
  
  
https://cloud.google.com/speech/docs/sync-recognize#speech-sync-recognize-protocol