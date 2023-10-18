---
date: 2011-12-19
layout: post
title: PHP "memory_limit" and OpenX DreamHost One-Click Install
description: Fixing a PHP memory limit in OpenX on DreamHost.
og:
  article: true
---

DreamHost offers OpenX s a one-click install. Unfortunately, it wasn't entirely that easy for me.

The OpenX installer choked because the memory limit for PHP wasn't high enough for it's liking. The fix for this is pretty simple:

Make sure your domain is running PHP 5.3. Create the directories **~/.php/5.3/** and a file called **~/.php/5.3/phprc**

    $ mkdir ~/.php/5.3/  
    $ touch ~/.php/5.3/phprc


In your phprc, just add **memory_limit = 128M** o appease the cranky OpenX installer.

    $ echo "memory_limit = 128M" >> ~/.php/5.3/phprc

Kill all PHP processes to make sure PHP picks up the new settings.  Retry the OpenX installer. It should work normally from there.

    $ killall php53.cgi

Thanks to Daniel McOrmand for this post -  [Source](http://danielmcormond.com/2011/03/16/php-memory_limit-and-openx-dreamhost-one-click-install/)