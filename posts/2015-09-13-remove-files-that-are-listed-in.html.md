---
title: 'Remove files that are listed in the .gitignore'
date: '2015-09-13 19:29:00'
---

command  
  

> git rm --cached `git ls-files -i --exclude-from=.gitignore`

  
Ref: <http://stackoverflow.com/a/13541721>