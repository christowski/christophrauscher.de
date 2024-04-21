---
title: "Writing"
description: "If I could write"
layout: "layouts/collection.njk"
---

<ul class="layout-grid--duo spacer-b--m">
  {% include "partials/list-writing.njk" %}
</ul>

<div class="section-header">
  <h2 class="header--title">Frequent ramblings</h2>
  <div class="header--meta">
    <a class="link--pill link--rss" href="{{ site.url }}/feed.xml">RSS</a>
  </div>
</div>

<ul class="post-list spacer-b--m">
  {% for post in collections.Note | reverse %}
    <li class="post-teaser">
      <a class="post-teaser--link" href="{{ post.url }}">
          <img class="post-teaser--thumb" src="{{ post.data.image }}" alt="{{ post.data.imageAlt }}">
        <div class="post-teaser--data">
          <div class="post-teaser--title">
            <p>{{ post.data.tag }}</p>
            <h2>{{ post.data.title }}</h2>
            <p>{{ post.data.abstract }}</p>
          </div>
          <date class="post-teaser--date">{{ post.data.date | dateFilter }}</date>
        </div>
      </a>
    </li>
  {% endfor %}
</ul>