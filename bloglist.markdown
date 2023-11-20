---
layout: home
---

# Blogs List

<table>
    <thead>
      <tr>
        <th></th>
        <th>Title</th>
        <th>Date</th>
      </tr>
    </thead>
    {% for blog in site.blogs %}
      <tr><th>{{ forloop.index }}.</th><td><a href="{{ site.url }}\{{blog.url}}">{{ blog.title }}</a></td><td>{{ blog.date | date: "%Y-%m-%d" }}</td></tr>
    {% endfor %}
</table>


