---
title: 'find – linux command cheat sheet'
date: '2012-01-12 00:07:00'
---

  
Basic Syntax for Find command :`find (name/size/type/access or modified date) ..argument ..argument`**Search for file ending .conf**  
`find /etc/ -name *.conf`**Search for directories ending with *conf**  
`find /etc/ -type d`-name *conf``**Search for files ending with .doc and accessed in last 24 hours(or 1 day)**  
`find /home/xyzuser/ -name *.doc -atime -1`**Find files modified by minutes**  
`Syntax : find /path/ -mmin`**Find files 10 minutes ago**  
`find /etc/ -mmin -10`**Find files more then 10 minutes ago**  
`find /etc/ -mmin +10`**Find files modified between 10 to 20 minutes ago**  
`find /etc/ -mmin +10 -mmin -20`**Find files modified in past 2 days(48 hours)**  
`find /etc/ -mtime -2`**Search for files owned by xyz user**  
`find /etc/ -type f -user xyz`**Search for directories and change permission to 755**  
`find /home/xyz.com/public_html/ -type d -exec chmod -v 755 {} \;`These are find command example used by every admin most frequently.