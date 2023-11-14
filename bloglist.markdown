---
layout: home
---

# Blogs List

{% for blog in site.blogs %}
  |{{ blog.title }}|{{ blog.date | date: "%Y-%m-%d" }}|
{% endfor %}
