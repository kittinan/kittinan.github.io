---
title: 'How to install Ubuntu 14.04 on Asus K401UB'
date: '2016-04-03 16:07:00'
---

I lost a few days for install Ubuntu 14.04 on my new laptop [Asus K401UB](https://www.asus.com/Notebooks/K401UB/).  
  
[Asus K401UB](https://www.asus.com/Notebooks/K401UB/) have Hard drive 1 TB and 24 GB SSD, So i install partition like this  
  

> /dev/sda is 1 TB Hard drive  
> /dev/sdb is 24 GB SSD

  
[![](https://3.bp.blogspot.com/-pkm160q6uio/VwDVy0xffkI/AAAAAAAAe3A/INvckUVs-nMxuW91rIwvrrHkmXi2C684Q/s640/Screenshot-root%2540tun-laptop%253A%2B-tmp.png)](https://3.bp.blogspot.com/-pkm160q6uio/VwDVy0xffkI/AAAAAAAAe3A/INvckUVs-nMxuW91rIwvrrHkmXi2C684Q/s1600/Screenshot-root%2540tun-laptop%253A%2B-tmp.png)  
  

> mount /boot on SSD (256MB)  
> mount / on SSD (Remain SSD)  
> mount /home on 1TB Hard drive (200 GB)  
> mount /var on 1TB Hard drive (50GB)

  
After i installed Ubuntu 14.04 i got many problem out of the box  
  
#### Problem:

- Audio not work  
- Touchpad not work  
- Wifi not work (Network Manager show locked by hardware lock)  
- Some of Function Key not work (Airplane mode, Brightness, Touchpad Enable/Disable) not work  
- Hybridge Video Graphic Card (Intel & Geforce 940M)  
  
#### 

#### Solve the problem:

  
Audio & Touchpad Audio & Touchpad solved by install newer kernel  (<https://wiki.ubuntu.com/Kernel/LTSEnablementStack>)  
  

> sudo apt-get install --install-recommends linux-generic-lts-wily xserver-xorg-core-lts-wily xserver-xorg-lts-wily xserver-xorg-video-all-lts-wily xserver-xorg-input-all-lts-wily libwayland-egl1-mesa-lts-wily 

  
After install & reboot Audio and Touchpad work fine.  
  
Wifi  
I found 2 choice to solved wifi work.  
  
1. fn + F1 to sleep laptop, when laptop wake up wifi will work  
2. Uninstall Network Manager and install wicd instead  
  

> sudo apt-get install wicd-gtk  
> sudo apt-get purge network-manager-gnome network-manager

  
reboot your laptop, wifi will work  
  
Function key  
i can't solve this problem but i found shell script to disable and enable Touchpad  
  
- Find Device id from command (in this case device is ELAN1000:00 04F3:0401)  
  

> xinput list

  
[![](https://2.bp.blogspot.com/-uXluGbHCGoU/VwDaoqFTr-I/AAAAAAAAe3M/PP2yqErkF6UlTdU3x_aqA04bfUpJ5YIdw/s640/Screenshot-tun%2540tun-laptop%253A%2B%257E-1.png)](https://2.bp.blogspot.com/-uXluGbHCGoU/VwDaoqFTr-I/AAAAAAAAe3M/PP2yqErkF6UlTdU3x_aqA04bfUpJ5YIdw/s1600/Screenshot-tun%2540tun-laptop%253A%2B%257E-1.png)  
id = 12  
  
Download this shell script  
  
  
  
Replace id with your Touchpad id in this case is  12, this script will toggle your Touchpad Enable/Disable  
  
Video Graphic  
  
I try many solution to solve VGA swiching but nothing work. I decided to use Bumblebee to run Geforce 940M when i need it  
  
<https://wiki.ubuntu.com/Bumblebee>  
  
Update 2016-04-06  
fn key + brighness down/up (F5 & F6) will work when edit config grub  
  
Edit this file /etc/default/grub  
  
Find this line:  
GRUB\_CMDLINE\_LINUX\_DEFAULT="quiet splash"  
  
Change to  
  
GRUB\_CMDLINE\_LINUX\_DEFAULT="quiet splash pcie\_aspm=force acpi\_osi="  
  
Ref:  
<https://wiki.ubuntu.com/Kernel/LTSEnablementStack>  
<http://ubuntuforums.org/showthread.php?t=2141992>  
<http://askubuntu.com/>  
<https://wiki.ubuntu.com/Bumblebee>  
  
  
PS. I'm using Mate Desktop for Desktop Environment.  
  
Hopefully this blog can help you.  
  
  
