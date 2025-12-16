---
date: 2012-06-09
title: Changing the origin of your git repo
description: How to change the origin of your git repository.
---

Some people suggest manually updating your .git/config file.  I've found the easiest way is to completely remove the origin remove via git command line and re-add it via:

    $ git remote rm origin  
    $ git remote add origin YOUR_GIT_REPO

