---
title: 'Java Android Pause / Resume Thread'
date: '2014-04-21 14:07:00'
---

This example from [stackoverflow](http://stackoverflow.com/questions/6776327/how-to-pause-resume-thread-in-android). Thank You Wroclai  
  
  

```
class YourRunnable implements Runnable {  
 private Object mPauseLock;  
 private boolean mPaused;  
 private boolean mFinished;  
  
 public YourRunnable() {  
 mPauseLock = new Object();  
 mPaused = false;  
 mFinished = false;  
 }  
  
 public void run() {  
 while (!mFinished) {  
 // Do stuff.  
  
 synchronized (mPauseLock) {  
 while (mPaused) {  
 try {  
 mPauseLock.wait();  
 } catch (InterruptedException e) {  
 }  
 }  
 }  
 }  
 }  
  
 /**  
 * Call this on pause.  
 */  
 public void onPause() {  
 synchronized (mPauseLock) {  
 mPaused = true;  
 }  
 }  
  
 /**  
 * Call this on resume.  
 */  
 public void onResume() {  
 synchronized (mPauseLock) {  
 mPaused = false;  
 mPauseLock.notifyAll();  
 }  
 }  
  
}
```
