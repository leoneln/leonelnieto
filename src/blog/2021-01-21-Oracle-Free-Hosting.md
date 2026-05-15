---
title: Custom domain for Oracle APEX — down the Oracle Cloud rabbit hole
date: 2021-01-21
category: Tech & Tinkering
excerpt: Oracle APEX URLs are long and ugly. I figured there had to be a better way. Three hours and one failed Ubuntu attempt later, there was.
---

If you've ever tried to share a link to an Oracle APEX app, you know the problem immediately. The URL looks something like this:

`https://vhny0vmfrn7fgtg-leonelnieto.adb.us-phoenix-1.oraclecloudapps.com/ords/r/dsa-data-service/108`

That is one long and nasty URL to send to anyone.

I had an Oracle Cloud account already set up to take advantage of their free tier, and I'd been using the APEX instance as a sandbox — testing projects, demoing apps, playing with features. It's a great free environment for that. But sharing anything from it meant sending that URL, and I wanted to do better.

The goal: map a clean custom domain to my APEX instance using a reverse proxy, with proper SSL. Let's Encrypt obviously.

## The Ubuntu detour

I spun up a new VM on Oracle Cloud — Always Free, which matters — and changed the default Oracle Linux image to Ubuntu 20.x since I'm more comfortable there. Set up SSH keys through the wizard, added ingress rules for ports 80 and 443 on the Virtual Cloud Network security list, then SSH'd in with Putty.

Installed nginx. Installed ufw. Opened the ports. Checked everything looked right.

And then nothing. Port 80 wouldn't respond. Ping didn't resolve. I could SSH in fine so the network wasn't the issue — something about Ubuntu 20.x and the firewall config just wasn't cooperating. Tried `ufw allow 80` directly. Still nothing. After about an hour of troubleshooting I made a pragmatic decision and blew it away.

Good opportunity to finally learn Oracle Linux.

## Starting over with Oracle Linux 7.9

Recreated the VM with the default Oracle Linux 7.9 image. The process from there was much smoother:

- SSH'd in as `opc@ipaddress` with Putty, then `sudo su`
- `yum update`, then `yum install nginx`
- Started nginx with `systemctl start nginx`
- Opened ports 80 and 443 through `firewall-cmd` rather than ufw

After reloading the firewall config, navigating to the public IP showed the nginx welcome screen. Small win, but a satisfying one after the Ubuntu detour.

## Setting up the domain and reverse proxy

I added two A records in Namecheap pointing `cdt.leonieto.website` and `www.cdt.leonieto.website` at the VM's public IP. Then created a new nginx server block for the domain, pointed it at a directory with a simple HTML placeholder, tested the config with `nginx -t`, and reloaded.

The subdomain resolved. On to SSL.

## Let's Encrypt on Oracle Linux

I'd been following Dimitri Gielis' guide for most of this, but diverged here because the Python-based certbot approach didn't work for me. I suspect I had a broken Python installation somewhere but didn't bother investigating — installed snapd instead, used the snap-based certbot instructions, and it worked cleanly.

SSL set up, certificate issued, site secured. Then back to Dimitri's guide to finish configuring the reverse proxy for APEX.

## The result

Any Oracle APEX app I want to share can now be reached at:

`https://cdt.leonieto.website/ords/r/dsa-data-service/108`

Still not short, but the domain is mine and the ugly Oracle cloud hostname is gone. Good enough.

The whole thing took about three hours including the Ubuntu troubleshooting rabbit hole. Dabbled in Oracle Linux for the first time, got more comfortable with `firewall-cmd`, and confirmed once again that Let's Encrypt makes SSL setup the easiest part of any server project.