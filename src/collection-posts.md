---
title: "All posts in post collection"
description: "D'uh"
layout: "layouts/collection.njk"
---

{% set blogposts = collections.posts %}
{% for item in blogposts %}
  <li class="post-teaser">
    <a class="post-teaser--link" href="{{ item.url }}">
      <div class="post-teaser--data">
        <div class="post-teaser--title">
          <h3>{{ item.data.tags }}</h3>
          <h3>{{ item.data.title }}</h3>
          <p>{{ item.data.abstract }}</p>
      </div>
        <time class="post-teaser--date">{{ item.data.date | dateFilter }}</time>
      </div>
    </a>
  </li>
{% endfor %}