---
date: 2013-10-28
layout: post
title: Installing f.lux on Ubuntu 13.04 64-bit with Multi-Monitor Support 
description: How to install f.lux on Ubuntu 13.04.
og:
  article: true
---

Yesterday I [posted]({% post_url 2013-10-27-just-get-flux %}) about how a nifty little piece of software called *f.lux* is yesterday.
It runs great on my Ubuntu 13.04 64-bit computer with two Dell widescreens but it took some hacking to get here. Unfortunately
the *f.lux* package installed via apt-get does not support multiple monitors out of the box. Below are the steps I took to get 
*f.lux* to work.

**Add the repository and install fluxgui**

These steps are taken straight from the f.lux website.

    $ sudo add-apt-repository ppa:kilian/f.lux
    $ sudo apt-get update
    $ sudo apt-get install fluxgui

**Download the 64-Bit Binary**

As of today, you can find the download link on [this](http://justgetflux.com/linux.html) page.  Download and extract it to ```~/Downloads/xflux```.

**Stop xflux if it's currently running**

    $ ps -ef |grep xflux
    yeahbuddy  2455  2426  0 16:45 pts/0    00:00:07 /usr/bin/xflux -l 40 -g -75 -k 4200 -nofork
    $ kill -9 2455

**Make a backup of the original xflux binary**

    $ sudo mv /usr/bin/xflux /usr/bin/xflux.back

**Copy new binary and set permissions**

    $ sudo mv ~/Downloads/xflux /usr/bin/xflux
    $ sudo chmod 755 /usr/bin/xflux
    $ sudo chown root:root /usr/bin/xflux
  
Restart your computer and enjoy f.lux running on Ubuntu 13.04 64-bit with multiple montiors!
