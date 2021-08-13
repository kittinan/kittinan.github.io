---
title: 'Ubuntu Virtualbox Cannot register the hard disk fixed'
date: '2014-04-27 12:55:00'
---

i found this problem after upgrade from Ubuntu 12.04 to 14.04. the problem is  cannot register the hard disk UUID because UUID already exists.  
  
[![](http://3.bp.blogspot.com/-j-_ROatWIwE/U1yaL8zf60I/AAAAAAAAOHw/lZBfZRr-hbQ/s1600/Screenshot-33.png)](http://3.bp.blogspot.com/-j-_ROatWIwE/U1yaL8zf60I/AAAAAAAAOHw/lZBfZRr-hbQ/s1600/Screenshot-33.png)  
  
We need to change hard disk uuid from command line  
  

> vboxmanage internalcommands sethduuid vmimage.vdi

  
[![](http://4.bp.blogspot.com/-ey6DD8hUUmo/U1ybFVMV_sI/AAAAAAAAOH4/2u5kpN4hntw/s1600/Screenshot-null@null:+-media-null-Music-VM-kali.png)](http://4.bp.blogspot.com/-ey6DD8hUUmo/U1ybFVMV_sI/AAAAAAAAOH4/2u5kpN4hntw/s1600/Screenshot-null@null:+-media-null-Music-VM-kali.png)  
After change hard disk UUID, We need to add vm image to Virtualbox  
  
  
[![](http://3.bp.blogspot.com/-PMqSX_ugDoc/U1ybheIl_XI/AAAAAAAAOIA/qVVtr6bbq3E/s1600/Screenshot-34.png)](http://3.bp.blogspot.com/-PMqSX_ugDoc/U1ybheIl_XI/AAAAAAAAOIA/qVVtr6bbq3E/s1600/Screenshot-34.png)  
  
  
Done. Happy!!!