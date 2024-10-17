---
title: "My design work"
description: "From making books to building websites"
layout: "layouts/collection.njk"
---

<!-- <section>
  <div class="section-header">
    <h2 class="header--title">Case Studies</h2>
  </div>

  <ul class="layout-grid--duo">
    {% for item in collections.casestudy %}
    <li class="project-grid--tile">
      {%- if (item.data.projectPage) -%}
        <a href="{{ item.data.permalink }}{{ item.url }}">
          <img src="{{ item.data.hero.image }}" 
            srcset="{{ item.data.hero.image }} 1x, {{ item.data.hero.image2x }} 2x"
            alt="{{ item.data.hero.imageAlt }}" />
          <h3>{{ item.data.title }}</h3>
          <p>{{ item.data.description }}</p>
        </a>
      {%- else -%}
        <img src="{{ item.data.hero.image }}" 
          srcset="{{ item.data.hero.image }} 1x, {{ item.data.hero.image2x }} 2x"
          alt="{{ item.data.hero.imageAlt }}" />
        <h3>{{ item.data.title }}</h3>
        <p>{{ item.data.description }}</p>
      {%- endif -%}
    </li>
  {%- endfor -%}
  </ul>
</section>

<hr> -->

<section>
  <ul class="layout-grid--duo spacer-b--m">
    {% include "partials/list-projects.njk" %}
  </ul>
</section>