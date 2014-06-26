<!DOCTYPE html>
<html>
<head>
    
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-52023607-1', 'willvillanueva.com');
  ga('send', 'pageview');

</script>
    
    <title>Will Villanueva</title>

    <meta name="HandheldFriendly" content="True">
    <meta name="MobileOptimized" content="320">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

    <meta name="description" content="Software Engineer in the Bay Area, passionate about collaborating with other web enthusiasts.">

    <meta name="twitter:card" content="summary">
    <meta name="twitter:title" content="Will Villanueva">
    <meta name="twitter:description" content="Software Engineer in the Bay Area, passionate about collaborating with other web enthusiasts.">

    <meta property="og:type" content="article">
    <meta property="og:title" content="Will Villanueva">
    <meta property="og:description" content="Software Engineer in the Bay Area, passionate about collaborating with other web enthusiasts.">

    <link href="/favicon.ico" rel="shortcut icon" type="image/x-icon">
    <link href="/apple-touch-icon-precomposed.png" rel="apple-touch-icon">

    
    <link rel="stylesheet" type="text/css" href="/assets/css/uno.css?v=8b7ed2f930" />

    
    <meta name="generator" content="Ghost 0.4" />
<link rel="alternate" type="application/rss+xml" title="Will Villanueva" href="/rss/">
<link rel="canonical" href="http://www.willvillanueva.com/" />

</head>
<body class="home-template no-js">

    <span class="mobile btn-mobile-menu">
        <i class="icon icon-list btn-mobile-menu__icon"></i>
        <i class="icon icon-x-circle btn-mobile-close__icon hidden"></i>
    </span>

    <header class="panel-cover " style="background-image: url(/content/images/2014/Jun/14081282717_f1dd641ab5_o.jpg)">
  <div class="panel-main">

    <div class="panel-main__inner panel-inverted">
    <div class="panel-main__content">

        
        <h1 class="panel-cover__title panel-title"><a href="http://www.willvillanueva.com" title="link to homepage for Will Villanueva">Will Villanueva</a></h1>
        
        <hr class="panel-cover__divider" />
        <p class="panel-cover__description">Software Engineer in the Bay Area, passionate about collaborating with other web enthusiasts.</p>
        <hr class="panel-cover__divider panel-cover__divider--secondary" />

        <div class="navigation-wrapper">

          <nav class="cover-navigation cover-navigation--primary">
            <ul class="navigation">
              <li class="navigation__item"><a href="/#blog" title="link to Will Villanueva blog" class="blog-button">Blog</a></li>
            </ul>
          </nav>

          

<nav class="cover-navigation navigation--social">
  <ul class="navigation">


  <!-- Twitter -->
  <li class="navigation__item">
    <a href="https://twitter.com/wjvill" title="@wjvill on Twitter">
      <i class='icon icon-social-twitter'></i>
      <span class="label">Twitter</span>
    </a>
  </li>

  <!-- Linkedin -->

  <li class="navigation__item">
    <a href="https://www.linkedin.com/in/williamvillanueva" title="Will on Linkedin">
      <i class='icon icon-social-linkedin'></i>
      <span class="label">Linkedin/span>
    </a>
  </li>

   <!-- github -->
     <li class="navigation__item">
    <a href="https://github.com/villanuevawill" title="Will on github">
      <i class='icon icon-social-github'></i>
      <span class="label">github/span>
    </a>
  </li>
         
    <!-- Email -->
    <li class="navigation__item">
      <a href="mailto:william.j.villanueva@gmail.com" title="Email william.j.villanueva@gmail.com.com">
        <i class='icon icon-mail'></i>
        <span class="label">Email</span>
      </a>
    </li>

  </ul>
</nav>

        </div>

      </div>

    </div>

    <div class="panel-cover--overlay"></div>
  </div>
</header>

    <div class="content-wrapper">
        <div class="content-wrapper__inner">
            

  <div class="main-post-list">

    <ol class="post-list">
      
      <li>
        <h2 class="post-list__post-title post-title"><a href="/parse-rest-api-and-multiple-query-constraints-within-a-parameter/" title="link to Parse Rest API and Multiple Query Constraints Within a Parameter">Parse Rest API and Multiple Query Constraints Within a Parameter</a></h2>
        <p class="excerpt">Recently, I was building a frontend chat client that communicated with a Parse Rest API server via ajax requests.  In my fetch function, intended to fetch new messages, I included a few filters in the retrieval request.  Unfortunately, it took me a little while to get the filters working properly&hellip;</p>
        <div class="post-list__meta"><time datetime="23 Jun 2014" class="post-list__meta--date date">23 Jun 2014</time> &#8226; <span class="post-list__meta--tags tags">on <a href="/tag/javascript/">javascript</a>, <a href="/tag/tag/"> </a>, <a href="/tag/ajax/">ajax</a>, <a href="/tag/parse/">Parse</a>, <a href="/tag/rest-api/">REST API</a></span></div>
        <hr class="post-list__divider" />
      </li>
      
      <li>
        <h2 class="post-list__post-title post-title"><a href="/event-systems-with-a-kick-javascript-events-and-triggers/" title="link to Event Systems With a Kick: Javascript Events and Triggers">Event Systems With a Kick: Javascript Events and Triggers</a></h2>
        <p class="excerpt">Every four years, a world cup comes around, and the world sits in silence as countries stand behind their team.  It's a wonderful time of year, and it sparks a lot of passion in people.  I must say, I'm a huge fan of the world cup.  I also like that&hellip;</p>
        <div class="post-list__meta"><time datetime="23 Jun 2014" class="post-list__meta--date date">23 Jun 2014</time> &#8226; <span class="post-list__meta--tags tags">on <a href="/tag/javascript/">javascript</a>, <a href="/tag/event-systems/">event systems</a>, <a href="/tag/tag/"> </a></span></div>
        <hr class="post-list__divider" />
      </li>
      
      <li>
        <h2 class="post-list__post-title post-title"><a href="/an-introduction-to-pseudoclassical-instantiation-patterns-and-subclassing-in-javascript/" title="link to An Introduction to Pseudoclassical Instantiation Patterns and Subclassing in Javascript">An Introduction to Pseudoclassical Instantiation Patterns and Subclassing in Javascript</a></h2>
        <p class="excerpt">Instantiation Patterns Within Javascript, there are four main instantiation patterns: Functional, Functional-Shared, Prototypal, and Pseudoclassical.  This article will focus in on the Pseudoclassical pattern, and best practices in subclassing within this pattern. Lemmings When I first learned about instantiation and subclasses within javascript, I immediately had a moment of nostalgia&hellip;</p>
        <div class="post-list__meta"><time datetime="17 Jun 2014" class="post-list__meta--date date">17 Jun 2014</time> &#8226; <span class="post-list__meta--tags tags">on <a href="/tag/javascript/">javascript</a>, <a href="/tag/pseudoclassical/">pseudoclassical</a>, <a href="/tag/subclasses/">subclasses</a>, <a href="/tag/instantiation/">instantiation</a>, <a href="/tag/introduction/">introduction</a>, <a href="/tag/pseudoclassical-instantiation/">pseudoclassical instantiation</a></span></div>
        <hr class="post-list__divider" />
      </li>
      
    </ol>

    <hr class="post-list__divider " />

<nav class="pagination" role="navigation">
    
    <span class="pagination__page-number">Page 1 of 1</span>
    
</nav>


  </div>

            <footer class="footer">
    <span class="footer__copyright">&copy; 2014. All rights reserved.</span>
    <span class="footer__copyright"><a href="http://uno.daleanthony.com" title="link to page for Uno Ghost theme">Uno theme</a> by <a href="http://daleanthony.com" title="link to website for Dale-Anthony">Dale-Anthony</a></span>
    <span class="footer__copyright">Proudly published with <a href="http://ghost.org" title="link to Ghost website">Ghost</a></span>
</footer>
        </div>
    </div>

    
    <script src="/public/jquery.min.js?v=8b7ed2f930"></script>

    
    <script type="text/javascript" src="/assets/js/main.js?v=8b7ed2f930"></script>

</body>
</html>
