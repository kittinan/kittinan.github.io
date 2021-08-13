---
title: 'rsync ssh custom port'
date: '2014-09-20 23:18:00'
---

  
  
rsync -avz -e "ssh -p $PORT" user@remoteip:/path/to/files/ /local/path/