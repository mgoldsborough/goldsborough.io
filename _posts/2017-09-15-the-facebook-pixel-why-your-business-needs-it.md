---
date: 2017-09-15
layout: post
title: "The Facebook Pixel: Why your business needs it"
description: The Facebook Pixel is the most powerful digital marketing tool businesses can use. Learn about how the Facebook Pixel can help your small business grow.
og:
  article: true
---

Facebook is one of the most powerful business marketing tools on the planet. Through it's advertising platform and the large scale deployment of the Facebook Pixel, Facebook has been able to develop a detailed demographic breakdown of every single one of it's 2 Billion-plus monthly active users. And yes, that's Billion with a "B."

Like it or not, Facebook knows a lot about you. Your activity on Facebook - the stories you share, groups you are in, and what you post on your News Feed - are analyzed by Facebook to better understand you, what you like, and what you like to engage with. It's reach goes beyond just Facebook.com too. Facebook has built out an arsenal of widgets and tools for business, advertisers, and content publishers alike to integrate into their own websites. Each tool helps Facebook build a better profile of you as a user.

The Facebook Pixel is one of the newest tools to be introduced to help study user behavior but it's not the first. Have you ever "Liked" a page or commented on a webpage using your Facebook profile? Facebook has been using these tools for almost a decade to better understand their users.

<img class="img-fluid" src="/assets/images/2017-09-15/facebook-like-share-button.png" />

*Among other methods, Facebook targets you based on your "Likes."*

All of this data seems a bit Orwellian but there is a <ins>massive opportunity</ins> for advertisers both big and small. If Facebook knows all this about you, they also know it about your customers. You as a business owner can leverage Facebook's ad platform to help your business grow through highly targeted ads that cost a fraction of what they would compared to conventional methods.

## Facebook Advertising

Before we get into the nitty gritty on how Facebook uses the Facebook Pixel, it will help to understand how Facebook advertising works.

Facebook makes the vast majority of its revenue from advertisements that people like you and I place every day. Last quarter alone Facebook made $9.3 Billion in revenue and $9.2 Billion of that came from advertisements [1]. That's <ins>over 98%</ins> of their revenue from advertisements!

<img class="img-fluid" src="/assets/images/2017-09-15/facebook-revenue-q2-2017.png" />

With advertisement revenue being Facebook's cash cow, it's in their best interest to know everything they can about you to better serve their advertisers.

The sheer amount of data Facebook collects is staggering. There is a lot of complex data mining that goes on behind the scenes but it all boils down to understanding two key metrics. Facebook wants to know what sites you visit and what you like to do while on those sites.

What sites do you visit on a regular basis? How much time do you spend reading the articles?
What do you click while on sites? Do you read blog posts, watch videos, or look at images?
Are you a shopper? If so, where do you shop, how often do you make purchases, and what type of items do you buy?
Do you like to engage with others on Facebook? How often do you like or comment on posts?

Answers to questions like these and more help Facebook build a profile of you. The use this profile to determine what ads you're most likely to interact with.

## Sponsored Posts

Unlike conventional banner advertisements, Facebook advertisements are actually quite subtle. They blend right into your homepage without taking to much away from the posts from your friends and family.

Advertisers have a few placement options when purchasing ads including directly in your feed, the right column, on your mobile device, and on Instagram. (If you didn't know, Facebook bought Instagram back in 2012 for a cool $1 Billion.)

<img class="img-fluid" src="/assets/images/2017-09-15/facebook-ad-placements-1024x508.png" />

### Facebook advertisements placement options

If you're not actively searching for ads, you might overlook them. A good way to determine if a post is an advertisement is checking right below the main link. If you see Sponsored then that post is an ad (see example image below).

<img class="img-fluid" src="/assets/images/2017-09-15/facebook-sponsored-post-860x1024.png" />

*Facebook used the Facebook Pixel to determine my browsing habits and target me with this ad.*

The image above is a sponsored ad that appeared in my newsfeed. It's a great example of Facebook targeting someone who might be interested in what Alexa has to offer.

It's critical for you to understand that I'm seeing this because an advertiser specifically targeted me based on my browsing habits. When advertisers place ads, they have access to thousands of categories that can be used to place an advertisement in front of a very specific demographic. Some of the categories include:

* Basic demographic information like gender, age, or location of a person
* Their interests based on pages they have liked
* Their activity on websites across the internet, your site included

So why do you think Facebook served me this ad?

Well, I write for a digital marketing blog (the one you're reading right now!), I manage an digital marketing agency, I'm a member of a number of digital marketing and SEO Facebook groups, and I frequent similar blogs on a daily basis.

It's a little creepy to admit, but this is a perfect ad for me to see. Facebook did a great job breaking down my internet usage habits and showing me something I had a high likely hood of interacting with.

How did they learn all this? <ins>The answer is the Facebook Pixel</ins>!

How the Facebook Pixel Works

The [Facebook Pixel](https://www.facebook.com/business/a/facebook-pixel) is a small bit of code (javascript, for the techies out there) provided by Facebook but installed on your site.

For example, our Facebook pixel code that's running on this site right now looks like this:

```javascript
<!-- Facebook Pixel Code -->
<script>
 !function(f,b,e,v,n,t,s)
 {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
 n.callMethod.apply(n,arguments):n.queue.push(arguments)};
 if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
 n.queue=[];t=b.createElement(e);t.async=!0;
 t.src=v;s=b.getElementsByTagName(e)[0];
 s.parentNode.insertBefore(t,s)}(window, document,'script',
 'https://connect.facebook.net/en_US/fbevents.js');
 fbq('init', '300876390394950');
 fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
 src="https://www.facebook.com/tr?id=300876390394950&ev=PageView&noscript=1"
/></noscript>
<!-- End Facebook Pixel Code -->
```

***A page with the Facebook pixel installed showing the code running the Facebook pixel. Very meta.***

This Facebook Pixel code gets executed on every single page and is one of the primary ways Facebook learns about you and your interests. When you visit a Facebook Pixel enabled site, Facebook is actively monitoring your activity, and the activity of any other user, that is simultaneously logged into Facebook.

This mountain of data makes Facebook advertising much more effective. Not only do you have a better idea of who your target audience is, you can also determine how well your advertisements are performing. When placing ads, Facebook provides a number of key features enabling you to become power marketer: Conversion Tracking, Custom Audiences, and Lookalike Audience.

## Features of the Facebook Pixel

### Conversion Tracking

The most important feature enabled by the Facebook Pixel is Conversion Tracking. A conversion is occurs when a user performs an action on your site that you define. A conversion can be literally anything you want but common conversions include:

* Adding items to a cart
* Completing a purchase
* Signing up for your mailing list

Compared to conventional advertising, Conversion Tracking via <ins>the Facebook Pixel is revolutionary</ins>. Traditionally advertising helped drive traffic to your site but once a user got there there was no guarantee they would stay, let alone convert (e.g. buy your products, sign up for your mailing list, etc.). On the other hand, conversion tracking allows you to buy an ad with a specific goal and monitor its performance as it is displayed to customers.

Better still, a number of popular online tools support the Facebook Pixel out of the box. The list includes:

* **eCommerce**: Shopify, WooCommerce
* **Blogging**: Wix, Weebly, Squarespace
* **CMS**: Wordpress, Joomla, Drupal

You can can also implement your own custom conversions but these might require configuration and coding.

Conversion Tracking powered by the Facebook pixel allows you, the advertiser, to quickly know which ads are working and which ads are not effective. In fact, Facebook itself will monitor the conversions of your ad and optimize when and where it is shown to increase your conversion percentage.

Monitoring your conversions through the Facebook Pixel and allowing Facebook to optimize your advertisements over the long term can lead to more leads, more sales, or more brand awareness and overall business growth.

### Custom Audiences

Question: what would be more effective?

Running an ad randomly to one of the 2 Billion monthly active Facebook users or;
Running an ad to a subset of users who have visited your site in the last 30 days?

I don't know about you, but I'd pick #2 everyday of the week. A user who has recently visited my site is:

* More likely to be interested in my other content or what I have to say.
* More likely to view me as an authority.
* More likely to want to buy something from me.

Since the Facebook Pixel can detect users who visit your site and are simultaneously logged into Facebook, building a list of users who visited in the past 30 days is a trivial task. Facebook provides you the ability to advertise to this specific group of users through a feature called Custom Audiences.

<img class="img-fluid" src="/assets/images/2017-09-15/create-a-custom-audience-based-on-the-facebook-pixel-878x1024.png" />

*Creating a Custom Audience audience based on website traffic.*

A Custom Audience based on website traffic is by far the most common. The website traffic is determined by (you guessed it) the Facebook Pixel. When creating Custom Audiences you have a bunch of options:

people who visited your site within the past 30, 60, or 90 days.
the to 25% of people who spent the most time on your site.
people who visited a specific page and took a specific action.

You can also combine a number of these rules for some really targeted advertisements.

World renowned marketer [Dr. Jeffrey Lant](https://www.facebook.com/business/a/facebook-pixel) originally proposed that you need to reach your potential customer seven times before they will buy anything. While seven may not be a hard and fast rule, the key takeaway is that you must reengage with your users on a frequent basis. Custom Audiences via the Facebook Pixel enables you to do just that.

### Lookalike Audiences

Another powerful feature is *Lookalike Audiences*. These are similar to Custom Audiences but instead of a list of users who visited your site, Lookalike Audiences contain a list of users who look similar to those who have visited your site.

Let me explain.

Since the Facebook Pixel enables Facebook to track users, regardless of how they found your site, Facebook can build a detailed profile of what your ideal customer looks like. Facebook then matches other users from across Facebook and allows you to advertise to them. These audiences could be something like:

* 45 year old females who live in New York City, owns a dog, and likes Jamba Juice.
* 25-30 year old males who live in California, works for a Fortune 500 corporation, and like to play guitar.
* 35-65 year olds who live in Florida, leans moderately Republican, likes to tinker with electronics.

Get the picture?

<img class="img-fluid" src="/assets/images/2017-09-15/creating-a-lookalike-audience-facebook-pixel-1024x858.png" />

*Creating a Lookalike Audience of users who Digital Business Tactics within the last 90 days.*

What's great about Lookalike Audiences is that you don't need to do anything other than install the Facebook Pixel and wait. Once Facebook has collected enough data, you'll be able to create and filter a Lookalike Audience based on your end goal.

How the Facebook Pixel helps your business

If it's not already abundantly clear, the Facebook Pixel can help your business grow. Whether you sell physical goods or digital products, are looking to build your mailing list, or want to increase your brand awareness, the Facebook Pixel can help.

Once installed on your site, the Facebook Pixel will optimize your ad placements and allows you to track performance in real-time. As a result, you can quickly end poor performing ad campaigns or scale up those which are performing well.

If you want to take advantage of things like Custom and Lookalike Audiences, you should install the Facebook Pixel now! It takes some time for Facebook to build up a list of users who visited your site - generally 30 days. If you plan on running any Facebook advertisements in the near future, install the Facebook Pixel today!

The steps to create advertisements and custom audiences and how to track conversions is something I will touch on in another post. But I hope you've seen the value of what the Facebook Pixel can do for your business.

Footnotes:
[1] [FB-Q2'17-Earnings-Presentation.pdf](https://s21.q4cdn.com/399680738/files/doc_presentations/FB-Q2'17-Earnings-Presentation.pdf)