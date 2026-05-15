---
title: Hosting my personal site on GCP's free tier — because $35 felt like too much
date: 2021-01-18
category: Tech & Tinkering
excerpt: Google Cloud's f1-micro free tier had been on my radar for a while. My Namecheap renewal notice finally gave me the push I needed to actually try it.
---

Yes, the primary motivation was money. My Namecheap hosting plan came up for renewal and I was not excited about paying $35. I am cheap like that.

But there was a real reason underneath the cheap one: Google Cloud Platform had announced their free tier a while back and I had been curious about what it would actually take to run my personal site on their f1-micro VPS. The renewal notice was just the nudge I needed to finally find out.

## What I was working with

The GCP free tier includes an f1-micro instance — a small virtual machine — available in select regions at no cost. For a personal site that isn't exactly getting crushed with traffic, this felt like a reasonable experiment.

The other thing I wanted to get away from with Namecheap was their SSL setup. They don't use Let's Encrypt, which is a free and genuinely excellent certificate service. Instead you buy your SSLs and configure them through cPanel. On a VPS you just handle it yourself, which I actually prefer.

## The setup

The process was straightforward enough:

1. Created the VPS on GCP using the f1-micro instance in a free tier eligible region. Tagged it with `http-server` and `https-server` — these map to firewall rules that open ports 80 and 443. They were already configured in the network rules but I double checked anyway.

2. Set the external IP to static and configured SSH access, which involved adding a public key during the setup process.

3. Used Putty to connect. GCP has a browser-based SSH option but I'm used to Putty and old habits die hard.

4. Installed nginx, hardened it a bit, then set up two server blocks beyond the default — one for dev, one for production. Digital Ocean has a solid guide for this that I leaned on.

5. Went back to Namecheap to point subdomains at the new IP. I wasn't ready to fully cut over yet — the plan was to run on a subdomain for a few days first and see how it held up.

## A few days later

It held up fine. The f1-micro ran without issues. The site isn't exactly high traffic, but for a simple React or static HTML site it's genuinely reliable — and the price is hard to argue with.

For the time being I kept the main site on GitHub Pages. But the experiment confirmed what I suspected: for a personal project, a GCP free tier instance is more than enough, and the control you get over your own server is worth the extra setup time.