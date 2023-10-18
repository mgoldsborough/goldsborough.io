---
date: 2014-04-29
layout: post
title: Using Passport with a Google Apps Hosted Domain
description: Using Passport to securely authenticate using your Google Apps Hosted Domain.
og:
  article: true
---

## Motivation

TLDR&#58; I use my Google account to log in to my custom Node.js app. [Skip Ahead]({{ page.url }}#passport_oauth_and_you).

User authentication has always irked me.  As I move from project to project and language to language
I find myself spending precious cycles building a login scheme and not building out functionality.
Supporting secure user authentication, credential updates, password reminders and resets can be a fairly 
large undertaking for a solo developer working to put out an [MVP](https://en.wikipedia.org/wiki/Minimum_viable_product).  
While I'm not trying to downplay the importance of web application security, I feel like it's something that 
should be a lot easier to implement.  Django's authentication system is a perfect example.  An easy to use Python 
[module](https://docs.djangoproject.com/en/dev/topics/auth/) built right into the framework.  Configure a 
few routes, write some HTML and you're done - easy as that.

Being a recent convert to [Node.js](http://nodejs.org/) I find myself writing smaller, more modular web applications 
that do highly specialized things.  Some scrape websites, some ping servers, others collect and store data.  Most of the time I
push these up to [Heroku](https://www.heroku.com/) 
to provide other remote team members access.  Now the application is accessible by the entire Internet.  **Crap.** 
This is not okay.  I want to spend time building out core functionality, not figuring out how to get a user logged in to my website. 

Luckily, most of the big web companies have exposed services that allow users to securely authenticate with a third-party site without 
forcing the user to create new credentials.  More and more you see companies that don't even allow you to create a new account but rather 
integrate directly with Google, Facebook, Twitter or *[insert your favorite social network here]* for user authentication.  However, I don't 
want just anyone with a Google account to log in to my application.  Only users that have accounts on an authorized 
[Google Apps Hosted Domain](http://google.com/a) should be allowed access. That way user account and password management is offloaded to a
company who's business is built around user security, Google, allowing me to focus on the specific implementation details of my app.

While there are a few protocols out there, I've had the most success with [OAuth 2.0](http://oauth.net/2/). 
[Passport](http://passportjs.org/) provides almost effortless integration with OAuth for your own authentication schemes.  

## OAuth 2.0

As its name suggests *OAuth 2.0* is the second iteration of the OAuth protocol.  OAuth provides
a user the ability to authenticate against an OAuth provider (in my case Google) without 
sharing their credentials with the application itself. The last part is key - you do NOT need to type in your credentials. 
The OAuth server provides the client with what amount to access tokens allowing secure, third-party access to 
secure sever resources.

<a name="passport_oauth_and_you"></a>

## Passport, OAuth, and You

Google not only implements the OAuth 2.0 protocol for authentication, it allows a client to specify a hosted domain to restrict logins.
That is, only allow users from the specified domain the ability to access your application.  An OAuth 2.0 client can specify the hosted domain
by providing the ```hd``` parameter via the URI (More information on Authentication URI parameters can be found [here](https://developers.google.com/accounts/docs/OAuth2Login#authenticationuriparameters)).

While poorly documented, the [passport-google-oauth](https://github.com/jaredhanson/passport-google-oauth) strategy for 
[Passport](http://passportjs.org/) does support Google OAuth 2.0 using a using a Google Apps Hosted Domain.  ***THIS IS EPIC***

Lets check out how to enable it, shall we?

After a little digging through the passport-google-oauth source code I came across the following:

    // Snippet: lib/passport-google-oauth/oauth2.js
    if(options) {
        params['hd'] = options.hostedDomain || options.hd;
    }

Looks like Passport will read the the ```hostedDomain``` (or the ```hd```) from the provide options and set the ```hd``` parameter
which is used when building the OAuth 2.0 request to Google. So how do you initialize it?  Like this.

    // GET /auth/google
    //   Use passport.authenticate() as route middleware to authenticate the
    //   request.  The first step in Google authentication will involve redirecting
    //   the user to google.com.  After authenticating, Google will redirect the
    //   user back to this application at /auth/google/return
    app.get('/auth/google',
    passport.authenticate('google', { 
        failureRedirect: '/login', 
        hostedDomain: 'mathewgoldsborough.com*'
    }),
    function(req, res) {
        res.redirect('/');
    });

If you're familiar with Node.js this should look pretty simple.  This should also look similar to the 
[sample](https://github.com/jaredhanson/passport-google/blob/master/examples/signon/app.js)
provided by passport-google with one addition.  Note line 9 - this is where the magic happens.  By providing a domain via 
```hostedDomain: 'mathewgoldsborough.com``` Google will only allow users with an ```@mathewgoldsborough.com``` email address
to successfully authenticate. Before making this work you'll need to create an OAuth 2.0 application and generate a client ID/secret - 
I've linked to the Google API Console below.

I'm not sure if others find this as fascinating as I do but _loosely_ decoupling authentication from your application is a winner in my book.
Authorization - now thats a different story and the subject of another blog post.

### Reference Links:

 * [Node.js](http://nodejs.org/)
 * [Express](http://expressjs.com/)
 * [Passport](http://passportjs.org/)
 * [passport-google](https://github.com/jaredhanson/passport-google)
 * [Google API Console](https://code.google.com/apis/console)
