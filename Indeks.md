# Indeks Wiki [BlankOn](/BlankOn.md)

## Urut Kategori | [Urut Abjad](/IndeksUrutAbjad.md) | [Daftar Isi Wiki](/DaftarIsi/README.md)

<ul>
 {% for page in site.pages %}
    <li>
	{% if page.title == '' or page.title == nil %}
      <a href="{{ site.url }}{{ site.baseurl }}{{ page.url }}">{{ page.url }}</a>
	{% else %}
      <a href="{{ site.url }}{{ site.baseurl }}{{ page.url }}">{{ page.title }}</a>
	{% endif %}
    </li>
  {% endfor %}
</ul>`
