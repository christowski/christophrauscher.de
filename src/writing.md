---
title: "If I could write"
description: "I’d set all the words free"
layout: "layouts/collection.njk"
---

<section>
  <ul class="layout-grid--duo spacer-b--s">
    {% for item in collections.writing %}
      <li class="writing-card">
        <a href="{{ item.url }}">
          <div class="kicker">
            <p>{{ item.data.label }}</p>
            <figure>
              <img src="{{ item.data.teaserImg.image }}" alt="{{ item.data.teaserImg.imageAlt }}" />
            </figure>
          </div>
          <div>
            <h2>{{ item.data.title }}</h2>
            <p>{{ item.data.description }}</p>
          </div>
        </a>
      </li>
    {% endfor %}
  </ul>
</section>

<section class="layout-grid--writing">
  <div class="layout-writing--notes">
    <div class="section-header">
      <h2 class="header--title">Recent ramblings</h2>
      <div class="header--meta">
        <a class="link--pill link--rss" href="{{ site.url }}/feed.xml">RSS</a>
      </div>
    </div>
    <ul class="post-list spacer-b--m">
      {% for post in collections.note | reverse %}
        <li class="post-teaser">
          <a class="post-teaser--link" href="{{ post.url }}">
              <img class="post-teaser--thumb" src="{{ post.data.image }}" alt="{{ post.data.imageAlt }}">
            <div class="post-teaser--data">
              <div class="post-teaser--title">
                <p>{{ post.data.tag }}</p>
                <h3>{{ post.data.title }}</h3>
                <p>{{ post.data.abstract }}</p>
                <date class="post-teaser--date">{{ post.data.date | dateFilter }}</date>
              </div>
            </div>
          </a>
        </li>
      {% endfor %}
    </ul>
  </div>
  <div class="layout-writing--newsletter">
    <div class="newsletter-column--header">
      <h2 class="header--title">Newsletter</h2>
      <img src="/media/postman-white.png" alt="Illustration of a little post man">
      <a class="button-arrow" href="/newsletter">Subscribe now</a>
    </div>
    <ul class="spacer-b--s">
      {% for post in collections.Newsletter | reverse | limit(7) %}
        <li class="newsletter-teaser--small">
          <a class="" href="{{ post.url }}">
            <img src="{{ post.data.image }}" alt="{{ post.data.imageAlt }}">
            <div class="">
              <h3>{{ post.data.title }}</h3>
              <date class="post-teaser--date">{{ post.data.date | dateFilter }}</date>
            </div>
          </a>
        </li>
      {% endfor %}
    </ul>
    <div style="text-align: center;">
      <a class="link--more spacer-b--s" href="/newsletter">Read all issues</a>
    </div>
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
