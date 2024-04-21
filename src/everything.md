---
title: "Everything"
layout: "layouts/base.njk"
---

<div class="pageheader">
  <h1>This is it! This is everything!</h1>
  <p>Making websites is time-consuming. Until I get around doing all the things I want to do this little internet’s space, here’s a long list of texts, newsletters, essays, projects, and more. Lists forever!</p>
</div>

<section class="container--normal">
  <div class="section-header">
    <h2 class="header--title">Blog like its 2005. All posts:</h2>
  </div>
  <ul>
    {%- for item in collections.note | reverse -%}
      <!-- <li><a href="{{ post.url }}">{{ post.data.title }}</a> {{ post.data.date }}</li> -->
      <li class="post-teaser">
      <a class="post-teaser--link" href="{{ item.url }}">
        <div class="post-teaser--data">
          <div class="post-teaser--title">
            <h3>{{ item.data.title }}</h3>
        </div>
          <time class="post-teaser--date">{{ item.data.date | dateFilter }}</time>
        </div>
      </a>
    </li>
    {%- endfor -%}
  </ul>
</section>

<section>
  <div class="section-header">
    <h2 class="header--title">More than a note: My essays</h2>
  </div>
  <ol>
    {%- for item in collections.essay | reverse -%}
      <!-- <li><a href="{{ post.url }}">{{ post.data.title }}</a> {{ post.data.date }}</li> -->
      <li class="post-teaser">
      <a class="post-teaser--link" href="{{ item.url }}">
          <img class="post-teaser--thumb" src="{{ item.data.image }}" alt="{{ item.data.imageAlt }}">
        <div class="post-teaser--data">
          <div class="post-teaser--title">
            <h3>{{ item.data.title }}</h3>
            <p>{{ item.data.abstract }}</p>
        </div>
          <time class="post-teaser--date">{{ item.data.date | dateFilter }}</time>
        </div>
      </a>
    </li>
    {%- endfor -%}
  </ol>
</section>

<hr>

<section>
  <div class="section-header">
    <h2 class="header--title">My newsletter archive (since 2016!)</h2>
  </div>
  <ol>
    {%- for item in collections.newsletter -%}
      <li class="post-teaser">
      <a class="post-teaser--link" href="{{ item.url }}">
          <img class="post-teaser--thumb" src="{{ item.data.image }}" alt="{{ item.data.imageAlt }}">
        <div class="post-teaser--data">
          <div class="post-teaser--title">
            <h3>{{ item.data.title }}</h3>
            <p>{{ item.data.abstract }}</p>
          </div>
        </div>
      </a>
    </li>
    {%- endfor -%}
  </ol>
</section>

<hr>

<section>
  <div class="section-header">
    <h2 class="header--title">All projects</h2>
  </div>
  <ul>
    {%- for item in collections.project -%}
      <li><a href="{{ item.url }}">{{ item.data.title }}</a></li>
    {%- endfor -%}
  </ul>
</section>

<hr>

<section>
  <div class="section-header">
    <h2 class="header--title">Literally <em>everything:</em></h2>
  </div>
  <ul>
    {%- for item in collections.all -%}
      <li style="display:inline-block; margin-right: 1rem;"><a href="{{ item.url }}">{{ item.data.title }}</a> {{ item.data.tag }}</li>
    {%- endfor -%}
  </ul>
</section>


<section>
<ul>
    {%- for item in collections.newsletter -%}
    <li style="text-transform:lowercase;">
      <h3>{{ item.data.title }}</h3>
    </li>
    {%- endfor -%}
  </ul>
</section>