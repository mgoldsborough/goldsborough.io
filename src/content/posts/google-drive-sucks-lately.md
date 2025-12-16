---
date: 2013-07-23
title: Google Drive Sucks Lately
description: Google Drive sucks lately and here are all the reasons why.
---

I'd like to use my first post in a really long time to pose a really important question, <strong>GOOGLE DRIVE, WTF?</strong>

I essentially love everything Google does.  Yes, they are probably sending our data over to the NSA for a thorough scrubbing but who isn't these days (a blog post for another day). I've been using Google services for years now; everything from Gmail to Docs, Picassa to AdMob.  I've recently turned it up a notch and started using Google business services to provide my side ventures with the whole suite of Google services for a small fee.  I never thought I'd be the person to pay for <em>anything</em> online.  With so many options of great apps out there why should I spend any of my hard earned money on anything extra?  The answer - Google just makes it so easy!  The only thing they have been missing was a Dropbox type syncing platform.

<h2>Enter Google Drive</h2>

For me Google Drive was the holy grail of applications.  

<blockquote>
You're telling me I can sync all my documents, photos, music - essentially anything - all while staying within the Google ecosystem?

That is awesome!
</blockquote>



Things were great until I actually started to use Google Drive on a day to day basis.  I code frequently, I work on a lot of different side projects and use a few different computers depending on what I'm doing and where I am. <code>&lt;nerd&gt;Some combination of (Win7 | Ubuntu) &amp; (desktop | laptop | netbook)&lt;nerd&gt;</code>. I wanted Google Drive to sync all these files so I could bounce between computers without having to make half baked check-in's to git.  Unfortunately it didn't work out that way...

<h3>Loads of Unsyncable Files</h3>
What's with all the red X's!  You're a syncing platform but for some reason can't determine when to sync typical files and folders.  If I'm doing something wrong then tell but I'm tempted to think, "It's not me, it's you."<br>

<img class="img-fluid" src="/assets/images/2013-07-23/Google-Drive-Sucks-Lately-5.png" />

<img class="img-fluid" src="/assets/images/2013-07-23/Google-Drive-Sucks-Lately-1.png" />

<h3>Massive Memory Footprint</h3>

No words can describe how mad this makes me. This is simply unacceptable.

<img class="img-fluid" src="/assets/images/2013-07-23/Google-Drive-Sucks-Lately-2.png" />

<img class="img-fluid" src="/assets/images/2013-07-23/Google-Drive-Sucks-Lately-3.png" />

<h3>Stop Confirming. Be like Nike - JUST DO IT!</h3>
When I delete a directory or one of my build's do (e.g. when I build this blog with <a href="http://jekyllrb.com/" target="_blank">jekyll</a>) just delete it.  I don't need a confirmation every time.  Be smarter!<br>
<img class="img-fluid" src="/assets/images/2013-07-23/Google-Drive-Sucks-Lately-6.png" />

<h3>Random Crashes for no apparent reason</h3>

I've found stability is a big problem.  When I drink coffee I tend to click around faster than usual.  Apparently it's faster than Google Drive can handle.  I get this error screen about five times a day.<br>

<img class="img-fluid" src="/assets/images/2013-07-23/Google-Drive-Sucks-Lately-4.png" />

This might be the wost one of them all.  Apparently I did something yesterday that really pissed Google Drive off.  I was <strong>forced to disconnect my account</strong>.  Not a big deal if you can just reconnect and continue on right? 

<img class="img-fluid" src="/assets/images/2013-07-23/nope.jpg" />

<img class="img-fluid" src="/assets/images/2013-07-23/Google-Drive-Sucks-Lately-7.png" />

Apparently Google has issues syncing the Google Drive folder when you are disconnected from Google Drive.  You need a completely empty folder and you need to re-download <strong>everything</strong>.  If that wasn't enough, the download rate pulling from Google's servers is slower than molasses. I've been syncing my Google Drive folder for the past 48 hours.  I'm sure my ISP loves the fact that once a week I pull down the same 100+ GB.  Unbelievable.

<h2>Developer Beware</h2>

If you like to add your source directory to your syncing platform, Google Drive may not be for you.  Use Eclipse?  Google Drive might report that it was unable to sync 6838 files.  How about django?  Try having your .pyc files get randomly reverted to an older version.  Build your blog using jekyll?  Hope you like getting prompted every time you build.

Granted, most if not all of these problems are a result of me compiling my code in a folder which is synced to a cloud server.  Is this the ideal case?  Probably not.  Maybe one day Google Drive will allow me to exclude specific folders based on some sort of configure file... (see: <a href="https://help.github.com/articles/ignoring-files" target="_blank">.gitignore</a>)  Until then, <a href="https://www.dropbox.com/" target="_blank">Dropbox</a>, here I come!

<h5>/end_rant</h5>

<small><em>Nike and JUST DO IT are trademarks of NIKE. I used them here for dramatic effect. Please don't sue me.</em></small>
