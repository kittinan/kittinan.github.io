---
title: 'ubuntu 11.04 install apache php mysql phpmyadmin'
date: '2011-09-04 14:41:00'
---

1. open terminal  
2. install mysql  

> sudo apt-get install mysql-server mysql-client

3. install apache  

> sudo apt-get install apache2

4. install php and apache module  

> sudo apt-get install php5 libapache2-mod-php5

5. install php5 basic module  

> sudo apt-get install php5-mysql php5-curl php5-gd php5-idn php-pear php5-imagick php5-imap php5-mcrypt php5-memcache php5-ming php5-ps php5-pspell php5-recode php5-snmp php5-sqlite php5-tidy php5-xmlrpc php5-xsl

6. restart apache  

> sudo  /etc/init.d/apache2 restart

7. test your apache and php work  

> sudo gedit /var/www/info.php

     insert code below and save :  

> <?php  
> phpinfo();

8. open your web browser and check it at <http://localhost/info.php> and see result like this.  
  
![](http://1.bp.blogspot.com/-8BA7kcomP1I/TmMk3VNckAI/AAAAAAAAExc/3dTaqfjbkQI/s400/Screenshot.png)  
9. install phpmyadmin 
> sudo apt-get install phpmyadmin

   select >  apache2  
  
10. edit apache2.conf  

> sudo gedit /etc/apache2/apache2.conf 

  
      insert this code into the last line  

> Include /etc/phpmyadmin/apache.conf

11. reload or restart your apache
> sudo /etc/init.d/apache2 reload

12. open your web browser and go to <http://localhost/phpmyadmin/>  
  
![](http://1.bp.blogspot.com/-l0pVgb1lEW4/TmMrU70amlI/AAAAAAAAExg/tfPhaAUAhIg/s400/Screenshot-2.png)  
  
13. have fun !!!  
  
  
ps.  
  

> sudo apt-get install mysql-server mysql-client apache2 php5 libapache2-mod-php5 php5-mysql php5-curl php5-gd php-pear php5-imagick php5-mcrypt php5-sqlite php5-tidy phpmyadmin

  
