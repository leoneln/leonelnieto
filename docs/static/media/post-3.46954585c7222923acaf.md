# Another documentation about setting up a VPS

I came across some reads on setting up an Oracle Cloud VM and decided to give it try. Sometime ago I set up an Oracle Cloud account to take advantage of the Free Tier Services and deployed and AWS instance. What I really wanted was the Oracle Apex Instance that comes along. I have used this as a sandbox to test projects, demo apps and features in Apex. 

I was interested in figuring out a way to use a custom domain to reference Oracle Apex Apps. Now whenever I share a link of an app the link is typically something like this. 
`https://vhny0vmfrn7fgtg-leonelnieto.adb.us-phoenix-1.oraclecloudapps.com/ords/r/dsa-data-service/108/login_desktop?session=112861213998797`
Now that is one long and nasty url. I figured that I can at least cut down the `https://vhny0vmfrn7fgtg-leonelnieto.adb.us-phoenix-1.oraclecloudapps.com` and take advantage of Oracle Apex Friendly URLs. 

Taking some tips and tricks from [Dunitri Gielis Blog](https://dgielis.blogspot.com/2019/09/best-and-cheapest-oracle-apex-hosting.html) here are the steps I took to achieve this.
1. Log into oracle cloud account.
2. Select "Create a VM Instance" - made sure I am set up to be on *Always Free*. The create a vm wizard defaults to Oracle Linux image but I am not as familiar with Oracle Linux as I am with Ubuntu so I changed the Image to Ubuntu Minimal 20.x. 
3. Part of the VM creation process allows for the setup of an ssh key. I generated a new pair and passed the public key on the wizard. 
4. On Virtual Cloud Network -> Security Lists -> Default Security List for vnc-*** I added two ingress rules for https and http, ports 443 and 80 respectively. Also set the source to 0.0.0.0/0
5. I am on windows so used Putty to ssh into the VM using `ubuntu@ipaddress` and `sudo su` to do some nginx configuration.
6. Start with `sudo apt update` then `sudo apt install nginx` to install nginx
7. Install a firewall with `apt install ufw`
8. On the firewall see the available applications that ufw knows with `ufw app list`. Then enable HTTP with `ufw allow 'Nginx HTTP'`.
9. Check the status of the firewall with `ufw status` if disabled then `ufw enable`.
10. Check the status of nginx with `systemctl status nginx` 
11. This is where I ran into some issues with using Ubuntu 20.4. For some reason I was not able to reach the VM on ports 80 and 483. I know that the VCN is configured properly because I can ssh into the machine but nginx was not loading and cmd `ping ip` did not resolve. I suspect Ubuntu ports 80 and 483 are not open despite steps 7 to 8. I even tried to add the ports with `ufw allow 80` to no aviail. After spending about an hours troubleshooting I decided to give up with Ubuntu and try my hand with Oracle Linux. Good opportunity to learn about it. I repeated steps 2 to 4 this time with default Oracle Linux 7.9.
12. ssh into the machine with Putty using `ocp@ipaddress` and ssh private key, then `sudo su`. Star with `yum update`.
13. Install nginx with `yum install nginx` and start ngix with `systaemctl start ngix`. Checking the status of nginx with `systemctl status nginx` should give you a green light. 
14. Then open the 80 and 483 ports with the following commands
    - `firewall-cmd --permanent --zone=public --add-service=http`
    - `firewall-cmd --permanent --zone=public --add-service=https`
    - Then `firewall-cmd --reload` to reload the firewall configuration. 
15. At this point navigating to the public ip address of the machine should show the "Welcome to Nginx" screen.

![Yes!](https://miro.medium.com/max/810/1*7wcPoKrXNYBZYTvDcHxhhA.png)

16. My domain name is provided by [Namecheap.com](Namecheap.com) so I jumped into the doamin adavnaced dns and added two A records one for cdt.leonieto.website and one for www.cdt.leonieto.website.
17. I created a new nginx server block. Doing this in Oracle Linux was new to me so had to do some googling. 
    - `nano /etc/nginx/conf.d/cdt.leonieto.website.conf`
    - The file above contains the following configuration. 
      ```
        server {
            listen         80;
            listen         [::]:80;
            server_name    cdt.leonieto.website www.cdt.leonieto.website;
            root           /usr/share/nginx/html/cdt.leonieto.website;
            index          index.html;
            try_files $uri /index.html;
        }
      ```
    - Create a directory that will contain the html files with `mkdir /usr/share/nginx/html/cdt.leonieto.webste` and inside created a `index.html` with `nano /usr/share/nginx/html/cdt.leonieto.webste/index.html`
    - The file above contains some simple html
      ```html
        <html>
            <head>
                <title>Client Data Tracker</title>
            </head>
            <body>
                <h1>Welcome to Landing Page</h1>
            </body>
        </html>
      ```
    - Test to make all nginx configurations are good with `nginx -t` and if it’s good to go them `nginx -s reload`. At this point I could reach the html above via `cdt.leonieto.website`. 
18. Now let’s encrypt! This is the main reason for my endless pursuit of free hosting. Setting up SSL certificates should not be a pain. It should be simple! Enter [Lets Encrypt](https://letsencrypt.org/). I diverged from Dimitri's post here because the python approach to certbot did not work. I did not bother looking into it but I suspect I messed my Python installation. Here is what I did instead. 
    - Install snapd using instructions from [here](https://snapcraft.io/docs/installing-snap-on-red-hat).
    - Then follow [this](https://certbot.eff.org/lets-encrypt/centosrhel7-nginx) instructions to install certbot and setup SSL on nginx. 
    - That’s it! My site is now secured via https. 
19. Now this point I went back to trusty Demitri's post and finished with the final steps of setting up the reverse proxy. Now any Oracle Apex apps I want to demo can be reached at. [https://cdt.leonieto.website/ords/r/dsa-data-service/108](https://cdt.leonieto.website/ords/r/dsa-data-service/108). 

This was a great learning experience. From dabbling in Oracle Linux to configuring the proxy for Oracle Apex. This project took me about 3 hours including a few googling minutes on Ubuntu firewall stuff.
