# Hosting personal website on GCP f1-micro

Google Could Platform announced their free tier plan a while ago and since then I have been very curious about what it would take to publish and host my personal website on their f1-micro Virtual Private Server. I finally got around to it, mainly because my hosting plan with Namecheap.com is up for renewal and was not keen on paying $35 to renew. Yes, I am cheap like that! One of the reasons why I am not loving Namecheap.com is because they don’t use [letsencrypt.org](https://letsencrypt.org/) which is an awesome free SSL certificate service that you can easily configure on your VPS. With [Namecheap.com](https://www.namecheap.com/) you instead have to buy your SSLs and configure them in your cPanel. Here is are the steps I followed.
1.	I created a VPS on GCP and made sure to use the f1-micro instance on one of the free tier eligible regions. I tagged it with http-server and https-sever tags. Apparently, these are firewall rules that should already be configured on your GPC VPS Network Rules. Just to be safe I double checked in indeed they are already there. http-server opens port 80 to any IP address (0.0.0.0/0). Likewise https-server opens port 443. 
    - Part of the creating process involved adding and ssh public key.
2.	While on GCP I configured the IP address as static on the VPS Network -> External IP Addresses and set up SSH
3.	I configured my .ssh keys then used Putty to ninja into the f1-micro instance. I tried the browser ssh service that GCP has but I am used to Putty. 
4.	I installed nginx took some steps to harden it then configured two server blocks in addition to the default. One server block is for dev and the other for production. 
    - [Here](https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-20-04) is great guide by Digital Ocean that walked me through the steps. 
5.	Then I went over to namecheap.com to configure subdomains to test and A records to forward to the f1-mcro public IP address. I am not yet ready to completely move the site. I figure that that I would deploy on subdomain and test for a few days to monitor uptime, etc. 
    - My dev site can be reached here [https://dev.leonieto.website](https://dev.leonieto.website)
    - And the production site which is empty can ge reached here [https://prod.leonieto.website](https://prod.leonieto.website)

To be continued…. 100 Years Later.

6. The f1 micro has been runing great for the last few days. The site is obviously not getting too many hits but this is perhaps something one can realy on for a simple html or react site. 
![](https://leonieto.website/img/f-1%20micro%20gpc%20vps%20monitoring.png)

For the moment being I will keep my site hosted on github pages. Look for a later post in exploring CL to the f1-micro. 
