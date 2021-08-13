---
title: 'PHP-FPM vs HHVM '
date: '2014-03-18 13:51:00'
---

this is result i tested concurence between [php-fpm](http://php-fpm.org/) (tcp) vs [hhvm](http://www.hhvm.com/) (tcp)  
  
My http server is Nginx. i tested 1000 requests and 50 concurrence.  
  
  
First i tested [php-fpm](http://php-fpm.org/) the time taken for test is 8.272 seconds.  
  


| [![](http://2.bp.blogspot.com/-6GcikFDi9Lo/UyfqqWcPCLI/AAAAAAAANhg/3mQorDzecW0/s1600/Screenshot-null@null:+~-4.png)](http://2.bp.blogspot.com/-6GcikFDi9Lo/UyfqqWcPCLI/AAAAAAAANhg/3mQorDzecW0/s1600/Screenshot-null@null:+~-4.png) |
| php-fpm result |

  
i tested [hhvm](http://www.hhvm.com/) the time taken for test is  2.831 seconds  
  


| [![](http://2.bp.blogspot.com/-smr7jA3m1xY/UyfrE21rycI/AAAAAAAANho/J-cGGdY_GWQ/s1600/Screenshot-null@null:+~-6.png)](http://2.bp.blogspot.com/-smr7jA3m1xY/UyfrE21rycI/AAAAAAAANho/J-cGGdY_GWQ/s1600/Screenshot-null@null:+~-6.png) |
| hhvm result |

the code that i tested is my project based on [cakephp](http://cakephp.org/) framework.  
  
conclusion [hhvm](http://www.hhvm.com/) is very very fast but [hhvm](http://www.hhvm.com/) is not support unix socket now. :-(