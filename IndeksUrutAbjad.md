# Indeks Wiki BlankOn
[Indeks Wiki BlankOn urut kategori](/Indeks.html)

## Urut Abjad

<ul>
  {% assign urut = site.pages | sort: 'title' %}
  {% for page in urut %}
    <li>
	{% if page.title == '' or page.title == nil %}
      <a href="{{ site.url }}{{ site.baseurl }}{{ page.url }}">{{ page.url }}</a>
	{% else %}
      <a href="{{ site.url }}{{ site.baseurl }}{{ page.url }}">{{ page.title }}</a>
	{% endif %}
    </li>
  {% endfor %}
</ul>
