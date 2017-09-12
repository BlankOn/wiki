# Indeks Wiki BlankOn Urut Abjad

## Urut Abjad | [Urut kategori](/Indeks.md) | [Daftar Isi Wiki](/DaftarIsi/README.md)
 

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
