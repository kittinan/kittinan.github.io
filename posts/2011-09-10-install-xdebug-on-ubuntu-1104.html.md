---
title: 'Install xdebug on PHP ubuntu 11.04'
date: '2011-09-10 16:46:00'
---

Nomally php **var\_dump()**  function display like this  
  
[![](http://1.bp.blogspot.com/-e31u8qPXI0k/TmsxO34dq8I/AAAAAAAAEyE/JSCsHe7wTTs/s320/Screenshot-3.png)](http://1.bp.blogspot.com/-e31u8qPXI0k/TmsxO34dq8I/AAAAAAAAEyE/JSCsHe7wTTs/s1600/Screenshot-3.png)  
  
We will override **var\_dump()** by [xdebug](http://xdebug.org/) for  human read with color highlight like this  
  
[![](http://2.bp.blogspot.com/-NqV0GDRTk-c/TmsxabTbtWI/AAAAAAAAEyI/jL81hbjq5lw/s400/Screenshot-4.png)](http://2.bp.blogspot.com/-NqV0GDRTk-c/TmsxabTbtWI/AAAAAAAAEyI/jL81hbjq5lw/s1600/Screenshot-4.png)  
  
  
1. install **php5-xdebug** follow command :  

> sudo apt-get install php5-xdebug 

  
2. find **xdebug.so** :  

> sudo find / -name xdebug.so

  
result just like this :  

> /usr/lib/php5/20090626+lfs/xdebug.so

  
3. Edit **php.ini** :  

> sudo gedit /etc/php5/apache2/php.ini

  
add this in the end of file :
> zend\_extension="/usr/lib/php5/20090626+lfs/xdebug.so"

  
find html\_errors in php.ini and change it to on :
> html\_errors = on

save your **php.ini**  
4. Restart Your Apache :
> sudo /etc/init.d/apache2 restart

5. have debug fun !!!