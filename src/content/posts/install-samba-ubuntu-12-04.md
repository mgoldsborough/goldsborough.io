---
date: 2012-05-12
title: How to Install Samba on Ubuntu 12.04
description: How to install and configure Samba on Ubuntu 12.04.
---

**Part 1: Configuring anonymous share with samba server**

To install the samba package,enter the following command:

    sudo apt-get install samba samba-common

<img class="img-fluid" src="/assets/images/2012-05-12/1.jpg" />

Check the version of installed samba software by using this command:

    smbd --version

<img class="img-fluid" src="/assets/images/2012-05-12/2.jpg" />

Also install these suggested packages for samba:

    sudo apt-get install python-glade2 system-config-samba

<img class="img-fluid" src="/assets/images/2012-05-12/3.jpg" />

Go to your Windows machine and use this command in order to check the WORKGROUP name:

    net config workstation

<img class="img-fluid" src="/assets/images/2012-05-12/4.jpg" />

It will show the output, something like this:

<img class="img-fluid" src="/assets/images/2012-05-12/5.jpg" />

Backup the smb.conf file, then delete it and create the new one:

<img class="img-fluid" src="/assets/images/2012-05-12/6.jpg" />

Add this, in your smb.conf file (or change it according to your requirement):

<img class="img-fluid" src="/assets/images/2012-05-12/7.jpg" />

Save the smb.conf file and restart the service:

    sudo service smbd restart

<img class="img-fluid" src="/assets/images/2012-05-12/8.jpg" />

Access the samba share from windows (where ubuntu is the name of my samba server):

<img class="img-fluid" src="/assets/images/2012-05-12/9.jpg" />

wao, we are able to access the samba share successfully.

<img class="img-fluid" src="/assets/images/2012-05-12/10.jpg" />

Let's try to create something, inside the share folder:

<img class="img-fluid" src="/assets/images/2012-05-12/11.jpg" />

Error, we cannot create anything inside the share folder.

<img class="img-fluid" src="/assets/images/2012-05-12/12.jpg" />

Check the current permission on the samba share:

<img class="img-fluid" src="/assets/images/2012-05-12/13.jpg" />

Change it, in such a way that everyone can read and write it (Check it, that it is allowed in your nvironment or not):

<img class="img-fluid" src="/assets/images/2012-05-12/14.jpg" />

Try to create something again, inside the share folder:

<img class="img-fluid" src="/assets/images/2012-05-12/15.jpg" />

Verify the newly created file on samba server:

<img class="img-fluid" src="/assets/images/2012-05-12/16.jpg" />

**Part 2: Add and manage users and groups**

Add a group in your ubuntu server (in my case smbgrp):

<img class="img-fluid" src="/assets/images/2012-05-12/17.jpg" />

Create a new share, set the permission on the share, add the user to the samba group and create samba password:

<img class="img-fluid" src="/assets/images/2012-05-12/18.jpg" />

Add the newly created samba share in smb.conf file:

<img class="img-fluid" src="/assets/images/2012-05-12/19.jpg" />

Restart the samba service and check the syntax error with _**testparm**_:

<img class="img-fluid" src="/assets/images/2012-05-12/20.jpg" />

Testing from Windows Machine:

<img class="img-fluid" src="/assets/images/2012-05-12/21.jpg" />

<img class="img-fluid" src="/assets/images/2012-05-12/22.jpg" />

<img class="img-fluid" src="/assets/images/2012-05-12/23.jpg" />

Verification from Ubuntu server:

<img class="img-fluid" src="/assets/images/2012-05-12/24.jpg" />

Hope this post helped you as much as it helped me.

Thanks to [rbgeek](http://rbgeek.wordpress.com) for this post - [Source](http://rbgeek.wordpress.com/2012/04/25/how-to-install-samba-server-on-ubuntu-12-04/)
