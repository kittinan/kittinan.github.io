---
title: 'Raspberry Pi Wifi Auto Reconnect'
date: '2014-02-15 00:16:00'
---

1. Go to /etc/ifplugd/action.d/ and rename the ifupdown file to ifupdown.original  
2. Then do: cp /etc/wpa\_supplicant/ifupdown.sh ./ifupdown  
3. Finally: sudo reboot  
  
thank you <http://raspberrypi.stackexchange.com/questions/4120/how-to-automatically-reconnect-wifi>