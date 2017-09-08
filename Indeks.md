# Indeks Wiki [BlankOn](/BlankOn.md)

## Urut Kategori
[Urut Abjad?](/IndeksUrutAbjad.md)

<ul>
  {% assign urut = (site.pages | sort: 'title') %}
  {% for page in urut %}
    <li>
	{% if page.title == '' or page.title == nil %}
      <a href="{{ page.url }}">{{ page.url }}</a>
	{% else %}
      <a href="{{ page.url }}">{{ page.title }}</a>
	{% endif %}
    </li>
  {% endfor %}
</ul>


---
[**Daftar Isi Wiki BlankOn**](/DaftarIsi/README.md)

[**Indeks Wiki BlankOn**](/Indeks.md)
