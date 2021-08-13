---
title: 'Ubuntu 14.04 Connect Android Using MTP'
date: '2017-07-22 08:54:00'
---

  
STEP 1  
Firstly we're going to need to install some of the common MTP apps that will be needed. Open up a terminal and type the following two lines one after the other.  
  
  
sudo apt-get install libmtp-common mtp-tools libmtp-dev libmtp-runtime libmtp9  
  
sudo apt-get dist-upgrade  
  
STEP 2  
Then we're going to amend the fuse.conf file. FUSE is an application that aims to provide a secure method for non privileged users to create and mount their own file system implementations. This option overrides the security measure restricting file access to the user mounting the file system. So all users (including root) can access the files. This option is by default only allowed to root, but this restriction can be removed with a change to the aforementioned fuse.conf file as follows:  
  
At the terminal type  
  
  
sudo nano /etc/fuse.conf  
  
We want to remove the # from the below line of code for user\_allow\_other, like so...  
  
  
#/etc/fuse.conf - Configuration file for Filesystem in Userspace (FUSE)  
  
#Set the maximum number of FUSE mounts allowed to non-root users.  
#The default is 1000.  
#mount\_max = 1000  
  
# Allow non-root users to specify the allow\_other or allow\_root mount options.  
user\_allow\_other  
  
  
Now save the file by pressing Ctrl+x, press Y and then Enter.  
  
STEP 3  
  
We now need to set up some rules for our device that we plan on connecting, but before we do that we need to find out both the vendor and product id  
  
Connect your device via an available usb port and from terminal enter  
  
  
lsusb  
This should bring up an output similar to the following  
  
  
Bus 002 Device 003: ID 0fce:01b1 Sony Ericsson Mobile Communications AB  
Bus 002 Device 002: ID 8087:0024 Intel Corp. Integrated Rate Matching Hub  
Bus 002 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub  
Bus 004 Device 001: ID 1d6b:0003 Linux Foundation 3.0 root hub  
Bus 003 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub  
Bus 001 Device 006: ID 0461:4d65 Primax Electronics, Ltd  
Bus 001 Device 005: ID 0846:9020 NetGear, Inc. WNA3100(v1) Wireless-N 300  
  
  
You need to look for your device, in this instance my Sony Tablet is at the top of the list, the vendor id is 0fce and product id is 01b1  
  
STEP 4  
We're then going to amend the mtp udev rules as follows, from a terminal type  
  
  
sudo nano /lib/udev/rules.d/69-mtp.rules  
  
Then add the below line of code  
  
  
# Sony Xperia Z2 Tablet  
ATTR{idVendor}=="0fce", ATTR{idProduct}=="01b1", SYMLINK+="libmtp-%k", ENV{ID\_MTP\_DEVICE}="1", ENV{ID\_MEDIA\_PLAYER}="1"  
  
Remember what you're changing here is the device name next to the #, this can be whatever you want, the # comments out the code, but for clarity and reference later I would choose the name of your tablet/phone and also the vendor id and product id, they should match what was seen when you issued the lsusb command earlier.  
  
Once done, save the file.  
  
STEP 5  
The next step would also be to add a line of code to the 51 android rules file, again from a terminal type  
  
  
sudo nano /etc/udev/rules.d/51-android.rules  
  
Then add the following line of code  
  
  
ATTR{idVendor}=="0fce", ATTR{idProduct}=="01b1", MODE=”0666"  
  
Remember what I have highlighted in red needs to be changed to your device product id and vendor id.  
  
Once that is done and the file is saved, remove any usb device currently connected and issue the following commands  
  
[B]STEP 6  
  
  
sudo service udev restart  
  
Then save any other remaining work you may have open and reboot the system.  
  
STEP 7  
  
sudo reboot  
  
  
Source: <https://ubuntuforums.org/archive/index.php/t-2226702.html>