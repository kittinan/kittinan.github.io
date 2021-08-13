---
title: 'Facebook Special Token'
date: '2014-01-29 23:20:00'
---

  
On the 16 Jan 2014. I found the Token from Facebook Official Application and Facebook Messenger Application. That Token can access emails & phones of your friends without ask them depends on their privacy setting and this token also can  get email & phones from not friends user if their has set public on privacy setting (You can't see email on the user who is not friend). ahh this token can query your friends of friends. it wonderful. i love this token.  
  
That sure i reported this issue to Facebook security team, this is once of the answer  
  

> As https://www.facebook.com/help/359369650815737 notes, the privacy  
> setting of an email address controls who is able to see the information  
> outside of the context of Timeline. Shown on Timeline or Hidden from  
> Timeline are known as visibility settings and only control what information  
> is highlighted on your timeline. Can you demonstrate the ability to use  
> this token to access email addresses which you shouldn't be able to based  
> on privacy settings?

  
  

> The tokens issued to the official applications have special permissions in order to allow them to function as efficiently as possible. Again, the application should not be able to return any information that it is not possible to access normally. Can you demonstrate a case where you are seeing the friend list for a friend where you could not otherwise see it? 

  
  
 Ok, Let's see how this work.  
  
1. You must have Mobile device and installed Facebook Application, in this case i use my Android.  
  
2. We will capture the special token from this software mitmproxy (<http://mitmproxy.org/>). This software that fake the certificate and make you can read https. Please see this blog for how mitmproxy work and use (<http://blog.philippheckel.com/2013/07/01/how-to-use-mitmproxy-to-read-and-modify-https-traffic-of-your-phone/> )  
  
3. After you learned the blog above you will got the special token when you open the facebook application and logged in  
  
  


| [![](http://3.bp.blogspot.com/-gzEbfsRbhjw/Uukh7rgp43I/AAAAAAAAHhM/X1SPaz_F93A/s1600/Screenshot-root@null:+-tmp.png)](http://3.bp.blogspot.com/-gzEbfsRbhjw/Uukh7rgp43I/AAAAAAAAHhM/X1SPaz_F93A/s1600/Screenshot-root@null:+-tmp.png) |
| From Facebook Android Application |

  


| [![](http://3.bp.blogspot.com/-ZznipTgQMBo/UukiGu0qZoI/AAAAAAAAHhU/kQYPuqp0p1M/s1600/Screenshot-root@null:+-tmp-1.png)](http://3.bp.blogspot.com/-ZznipTgQMBo/UukiGu0qZoI/AAAAAAAAHhU/kQYPuqp0p1M/s1600/Screenshot-root@null:+-tmp-1.png) |
| From Facebook Messenger Application |

  
4. You can check the token [here](https://developers.facebook.com/tools/debug/accesstoken) (wow the expire is never)  
  
[![](http://2.bp.blogspot.com/-S_Up__aTdEc/Uuki2X-fmNI/AAAAAAAAHhc/7xdMFC5Kki4/s1600/Screenshot-28.png)](http://2.bp.blogspot.com/-S_Up__aTdEc/Uuki2X-fmNI/AAAAAAAAHhc/7xdMFC5Kki4/s1600/Screenshot-28.png)  
  
5. After i got the special token i use facebook fql to get data (<https://developers.facebook.com/tools/explorer>)  
  
i will show you for some example  
  
this is the query to get your friends email & phone number  
<https://developers.facebook.com/tools/explorer/?fql=SELECT%20uid%2C%20name%2C%20email%2C%20phones%20FROM%20user%20WHERE%20uid%20IN%20(SELECT%20uid2%20FROM%20friend%20WHERE%20uid1%3Dme())>  
  


| [![](http://2.bp.blogspot.com/-HJvr4gAD230/Uukk1UC85_I/AAAAAAAAHho/7YLlnpwM8ng/s1600/Screenshot-29.png)](http://2.bp.blogspot.com/-HJvr4gAD230/Uukk1UC85_I/AAAAAAAAHho/7YLlnpwM8ng/s1600/Screenshot-29.png) |
| phones is not for regular facebook app token |

  
  


| [![](http://3.bp.blogspot.com/-dGzGPrN747A/UuklmjZKKYI/AAAAAAAAHhw/OxGORTdtshw/s1600/Screenshot-30.png)](http://3.bp.blogspot.com/-dGzGPrN747A/UuklmjZKKYI/AAAAAAAAHhw/OxGORTdtshw/s1600/Screenshot-30.png) |
| After use the special token,  got email and phone number |

  
  
this query can get your friends of friends depends on your friend privacy setting  
SELECT uid, name, email, phones FROM user WHERE uid IN (SELECT uid2 FROM friend WHERE uid1=FACEBOOK\_ID)  
  
  
  
  
  
  
  
