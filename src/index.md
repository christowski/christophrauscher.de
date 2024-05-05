---
title: "Hello world!"
layout: "layouts/base.njk"
class: "body--home"
templateEngineOverride: njk,md
metaDesc: "The personal website of designer, writer and illustrator Christoph Rauscher"
socialImage: "media/socialimage.png"
---

<section class="stage">
  <figure>
    <img src="media/keyvisual.jpg" alt="Keyvisual"/>
  </figure>
  <div class="introduction">
    <div>
      <p>Hello, I’m Christoph Rauscher: a <em>designer</em>, <em>illustrator</em>, <em>writer</em> and <em>visual thinker</em> based in Berlin, Germany.</p>
      <ul class="nav--stage">
        <li><a href="/projects" title="Check out my recent projects">Design</a></li>
        <li><a href="/writing" title="Read what I write">Writing</a></li>
        <li><a href="/drawings" title="See what I draw">Drawings</a></li>
        <li><a href="#about" title="Learn more about me">About me</a></li>
      </ul>
    </div>
    <div class="social">
      <a rel="me" href="https://mastodon.social/@christowski" target="_blank"><img src="media/mastodon.svg" title="Mastodon: @christowski@mastodon.social" alt="Mastodon"></a>
      <a href="https://instagram.com/christowski" target="_blank"><img src="media/instagram.svg" title="Instagram: @christowski" alt="Instagram Photos"></a>
      <a href="https://de.linkedin.com/in/rauscherchristoph" target="_blank"><img src="media/linkedin.svg" title="LinkedIn" alt="LinkedIn Profile"></a>
    </div>
</section>

<section class="section--large white">
  <div class="section-header">
    <h2 class="header--title">Recent design work</h2>
    <div class="header--meta">
      <a class="link--more link--pill" href="/projects"><span>See </span>all <span>projects</span></a>
    </div>
  </div>
  <ul class="layout-grid--duo project-grid"> 
    {% for item in collections.featuredProjects | limit(4) %}
    <li class="project-grid--tile">
      <img src="{{ item.data.hero.image }}" alt="{{ item.data.hero.imageAlt }}" />
      <h3>{{ item.data.title }}</h3>
      <p>{{ item.data.description }}</p>
    </li>
  {% endfor %}
  </ul>
  <a class="button-arrow" href="/projects">See all projects</a>
</section>

<section class="section--large writing dark">
  {% include "partials/section-writing.njk" %}
</section>

<section class="section--large white">
  <div class="section-header">
    <h2 class="header--title">From the sketchbook</h2>
  </div>

  <div class="drawings-grid"> 
    <figure>
      <img src="../media/drawings/akropolis-800.jpg" alt="Drawing: Akropolis and a foot">
    </figure>

    <figure>
      <img src="../media/drawings/andrea-humboldthain-800.jpg" alt="Drawing: Andrea in the park">
    </figure>

    <figure>
      <img src="../media/drawings/im-teppich-800.jpg" alt="Drawing: Me in the carpet">
    </figure>

    <figure>
      <img src="../media/drawings/phonefall-800.gif" alt="Drawing: Phone falling on your face in bed">
    </figure>
  </div>
  <div class="header--meta">
    <span><a class="link--more link--pill" href="/drawings">See more drawings</a></span>
  </div>
</section>

<section class="section--large accent">
  <div class="container--normal">

    <div class="section-header">
      <h2 class="header--title">Sign up to my newsletter</h2>
    </div>

    {% include "partials/newsletter-signup.njk" %}
  </div>
</section>

<section id="about" class="section--large white about container--wide">
  {% include "partials/about.njk" %}
</section>
