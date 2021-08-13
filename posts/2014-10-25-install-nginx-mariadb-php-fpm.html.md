---
title: 'install Nginx + MariaDB + PHP-FPM + Phpmyadmin Ubuntu 14.04'
date: '2014-10-25 14:28:00'
---

  
1. install mariadb server  
  

> sudo apt-get install mariadb-server

  
2. install nginx  

>   
> sudo apt-get install nginx

  
3. install php5-fpm  
  

> sudo apt-get install php5-fpm  php5-mysql php5-curl php5-gd php-pear php5-imagick php5-mcrypt php5-memcache php5-sqlite

  
4. Config Nginx  
  
- backup default config file /etc/nginx/sites-available/default  
  

> mv /etc/nginx/sites-available/default /etc/nginx/sites-available/default.bak

  
- edit file /etc/nginx/sites-available/default for config nginx pass fastcgi like this [config](https://gist.github.com/kittinan/47f6f9421b92eec9471f)  
  
- restart nginx  
  
5. change permission /usr/share/nginx/html depend on your config  
  

> chmod 777 /usr/share/nginx/html

  
6. test php that work  
  

> nano /usr/share/nginx/html/info.php


```
<?php  
  
phpinfo();  
  

```
  
<http://localhost/info.php>  
  
[![](http://2.bp.blogspot.com/-RsFEnvLgXdA/VEy2YbmwgfI/AAAAAAAAPn8/rYKdP6s6xD8/s1600/Screenshot.png)](http://2.bp.blogspot.com/-RsFEnvLgXdA/VEy2YbmwgfI/AAAAAAAAPn8/rYKdP6s6xD8/s1600/Screenshot.png)  
  
  
7. install phpmyadmin  
  
- download phpmyadmin [here](http://www.phpmyadmin.net/home_page/downloads.php)  
  
- unzip to the folder /usr/share/nginx/html/phpmyadmin  
  
- open <http://localhost/phpmyadmin>  
  
  
  
