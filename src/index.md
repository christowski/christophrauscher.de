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
    <div><p>Hello, I’m Christoph Rauscher: a <em>designer</em>, <em>illustrator</em>, <em>writer</em> and <em>visual thinker</em> based in Berlin, Germany.</p>
    </div>
    <div class="social">
      <a rel="me" href="https://mastodon.social/@christowski" target="_blank"><img src="media/mastodon.svg" title="@christowski" alt="Mastodon Toots"></a>
      <a href="https://instagram.com/christowski" target="_blank"><img src="media/instagram.svg" title="Instagram: christowski" alt="Instagram Photos"></a>
      <a href="https://de.linkedin.com/in/rauscherchristoph" target="_blank"><img src="media/linkedin.svg" title="LinkedIn" alt="LinkedIn Profile"></a>
    </div>
</section>

<section class="section--large white">
  <div class="section-header">
    <h2 class="header--title">Some recent projects</h2>
    <div class="header--meta">
      <a class="link--more link--pill" href="/projects">All <span>projects</span></a>
    </div>
  </div>
  <ul class="layout-grid--duo project-grid"> 
    {% for item in collections.featuredProjects %}<li class="project-grid--tile">
      <img src="{{ item.data.hero.image }}" alt="{{ item.data.hero.imageAlt }}" />
      <h3>{{ item.data.title }}</h3>
      <p>{{ item.data.description }}</p>
      <!-- <a href="{{ item.url }}">
        <img src="{{ item.data.hero.image }}" alt="{{ item.data.hero.imageAlt }}" />
        <h3>{{ item.data.title }}</h3>
        <p>{{ item.data.description }}</p>
      </a> -->
    </li>
  {% endfor %}
  </ul>
  <a class="button-arrow" href="/projects">See all projects</a>
</section>

<section class="section--large writing dark">
  {% include "partials/section-writing.njk" %}
</section>

<section class="section--large accent">
  <div class="container--normal">

    <div class="section-header">
      <h2 class="header--title">Sign up to my newsletter</h2>
    </div>

    {% include "partials/newsletter-signup.njk" %}
  </div>
</section>

<section class="section--large white about container--wide">
  {% include "partials/about.njk" %}
</section>
