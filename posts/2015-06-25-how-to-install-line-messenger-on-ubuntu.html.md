---
title: 'How to install Line Messenger on Ubuntu 14.04'
date: '2015-06-25 20:26:00'
---

1. open terminal to install wine  
  

> sudo apt-get install wine winetricks -y

  
2. open winetricks to install vcrun2008  
  

> winetricks

  
wine will install some library on the firsttime, after finish we will install vcrun2008  
  
- select the default wineprefix  
  
[![](http://3.bp.blogspot.com/-CuB8XTuyp1U/VYv6CWeDamI/AAAAAAAAXKo/-YA3YZPbZj8/s640/Screenshot-Winetricks%2B-%2Bchoose%2Ba%2Bwineprefix.png)](http://3.bp.blogspot.com/-CuB8XTuyp1U/VYv6CWeDamI/AAAAAAAAXKo/-YA3YZPbZj8/s1600/Screenshot-Winetricks%2B-%2Bchoose%2Ba%2Bwineprefix.png)  
  
- install a Windows DLL or component  
  
[![](http://1.bp.blogspot.com/-vECCT4dxIiw/VYv6Gzx0PhI/AAAAAAAAXKw/3TvShNL1ecY/s640/Screenshot-Winetricks%2B-%2Bcurrent%2Bprefix%2Bis%2B%2522-home-null-.wine%2522.png)](http://1.bp.blogspot.com/-vECCT4dxIiw/VYv6Gzx0PhI/AAAAAAAAXKw/3TvShNL1ecY/s1600/Screenshot-Winetricks%2B-%2Bcurrent%2Bprefix%2Bis%2B%2522-home-null-.wine%2522.png)  
  
- select vcrun2008 and install  
  
[![](http://4.bp.blogspot.com/-a9uFrBEXea8/VYv6KQzmjaI/AAAAAAAAXK4/WpDKfSuEwRI/s1600/Screenshot-Microsoft%2BVisual%2BC%252B%252B%2B2008%2BRedistributable%2BSetup.png)](http://4.bp.blogspot.com/-a9uFrBEXea8/VYv6KQzmjaI/AAAAAAAAXK4/WpDKfSuEwRI/s1600/Screenshot-Microsoft%2BVisual%2BC%252B%252B%2B2008%2BRedistributable%2BSetup.png)  
  
  
3. Download & Install Line Messenger  
  

> cd /tmp  
> wget http://cdn.line-apps.com/client/win/new/LineInst.exe  
> wine LineInst.exe

  
install it  
  
[![](http://1.bp.blogspot.com/-zVAv4Nc9NSM/VYv7EQRSH_I/AAAAAAAAXLA/AmZLITp2nb8/s1600/Screenshot-LINE%2Binstallation.png)](http://1.bp.blogspot.com/-zVAv4Nc9NSM/VYv7EQRSH_I/AAAAAAAAXLA/AmZLITp2nb8/s1600/Screenshot-LINE%2Binstallation.png)  
  
  
[![](http://3.bp.blogspot.com/-WHZRhwP4AOo/VYv7M0nlD1I/AAAAAAAAXLI/6OVjp3-c8ws/s1600/Screenshot-LINE.png)](http://3.bp.blogspot.com/-WHZRhwP4AOo/VYv7M0nlD1I/AAAAAAAAXLI/6OVjp3-c8ws/s1600/Screenshot-LINE.png)  
  
  
5. Install font for support Thai language  
  

> wget "https://docs.google.com/uc?authuser=0&id=0B4BVfmN-CsL5YnV1dXFidEVpNmM&export=download" -O tahoma.zip  
> unzip tahoma.zip  
> cp tahoma/* ~/.wine/drive\_c/windows/Fonts/

  
6. Reopen Line Messenger  
  
