---
pageTitle: "Newsletter"
title: "Subscribe to my newsletter!"
layout: "layouts/base.njk"
socialImage: "media/socialimage.png"
---

<section class="section--large accent">
  <div class="container--normal">

  <div class="section-header">
    <h1 class="header--title">{{ title }}</h1>
  </div>

  {% include "partials/newsletter-signup.njk" %}
</section>

<section style="margin-top: 3rem;">
  <ol class="layout-grid--trio spacer-b--m">
    {% for post in collections.Newsletter | reverse %}
      <li class="newsletter-teaser">
      <a class="newsletter-teaser--link" href="{{ post.url }}">
          <img src="{{ post.data.image }}" alt="{{ post.data.imageAlt }}">
        <div class="newsletter-teaser--data">
          <div class="newsletter-teaser--title">
            <h3>{{ post.data.title }}</h3>
            <p><date class="post-teaser--date">{{ post.data.date | dateFilter }}</date></p>
          </div>
        </div>
      </a>
    </li>
    {% endfor %}
  </ol>
</section>