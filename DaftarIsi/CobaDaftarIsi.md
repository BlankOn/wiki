# Daftar Isi
## 1 for page in site.pages > page

<ul>
  {% for page in site.pages %}
    <li>
      <a href="{{ page.url }}">{{ page.title }}</a>
    </li>
  {% endfor %}
</ul>

