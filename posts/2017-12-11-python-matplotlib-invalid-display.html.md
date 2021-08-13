---
title: 'Python matplotlib Invalid DISPLAY variable'
date: '2017-12-11 23:36:00'
---

Fixed by  
  

> matplotlib.pyplot as plt  
> plt.switch\_backend('agg') 

Ref:  
<https://github.com/matplotlib/matplotlib/issues/3466/#issuecomment-195899517>