---
title: 'fix : PHP Deprecated:  Comments starting with '#' are deprecated in /etc/php5/cli/conf.d/ming.ini on line 1 in Unknown on line 0'
date: '2011-09-10 17:52:00'
---

This is Solution to Fix :  

> PHP Deprecated:  Comments starting with '#' are deprecated in /etc/php5/cli/conf.d/ming.ini on line 1 in Unknown on line 0

1. Open File  **/etc/php5/cli/conf.d/ming.ini**  

> sudo gedit /etc/php5/cli/conf.d/ming.ini

  
2. Replace The '**#**' on First Line with '**;**'  

> ; configuration for php MING module

  
3. Save & Have Fun !