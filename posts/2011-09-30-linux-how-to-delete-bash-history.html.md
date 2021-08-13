---
title: 'Linux : How To Delete Bash History'
date: '2011-09-30 10:08:00'
---

  
**Delete bash history**  
  
To delete the bash history for your current session as well as old sessions, you should do two things:  
  
Delete the .bash\_history file:  
  

> rm -rf ~/.bash\_history

  
Clear the current history stored in RAM:  
  

> history -c

  
  
  
  
**Turn off bash history for all users:**  
  
Append “unset HISTFILE” to /etc/profile:  
  

> echo "unset HISTFILE" >> /etc/profile

  
Turn off bash history for a specific user:  
  
Append “unset HISTFILE” to /home/USER/.bash\_profile:  
  

> echo "unset HISTFILE" >> /home/USER/.bash\_profile

Good Luck ~  
