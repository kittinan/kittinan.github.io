---
title: '[Facebook Bug Bounty] Graph API can change published photo'
date: '2015-11-23 17:36:00'
---

Impact :  
  
The impact of vulnerability. it can change  any photo of my own that was already published (without lost like and comment).  
  
Description :  
1. replace PHOTO\_ID with photo you need to change https://graph.facebook.com/[PHOTO\_ID]  
  
2. attach photo you want to change on parameter url (https://developers.facebook.com/docs/graph-api/reference/photo#Updating)  
  
3. use access\_token from Facebook for Android to change photo  
  
4. Done.  
  
  
Timeline  
  
May 5, 2015 at 3:51am – Report Sent  
May 5, 2015 at 11:23am – Clarification by Facebook  
May 5, 2015 at 11:35am – Clarification sent with video  
May 5, 2015 at 12:29pm – Escalation by Facebook  
June 12, 2015 – Ask progress to Facebook  
June 12, 2015 – Response from Facebook (still discuss with team)  
Sep 24, 2015 – Ask progress to Facebook  
Sep 29, 2015 – Response from Facebook (The team is still working on this)  
Oct 23, 2015 – Patched by Facebook  
Nov 5, 2015 – Bounty Awarded of $1000 by Facebook  
  
