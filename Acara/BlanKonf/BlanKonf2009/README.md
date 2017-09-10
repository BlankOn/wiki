# BlanKonf 2009

  + Acara
  + Periapan PanitiaLokal
  + Persiapan Acara
  + Persiapan Buklet Sponsor
  + Persiapan Daftar Pembicara Panitia
  + Persiapan Daftar Peserta
  + Persiapan
  + Persiapan Peralatan
  + Persiapan Publikasi
  + Persiapan Target Sponsor
  + Presentasi

# Asli
<ul>
  {% for page in site.pages %}
    <li>
      <a href="{{ page.url }}">{{ page.title }}</a>
    </li>
  {% endfor %}
</ul>

# Coba site.pages/Acara/

<ul>
  {% for page in site.pages/Acara/ %}
    <li>
      <a href="{{ page.url }}">{{ page.title }}</a>
    </li>
  {% endfor %}
</ul>

# Coba site/Acara/.pages

<ul>
  {% for page in site/Acara/.pages %}
    <li>
      <a href="{{ page.url }}">{{ page.title }}</a>
    </li>
  {% endfor %}
</ul>

# Coba skrip pak samsul
<ul>
  {% assign urut = (site.pages) %}
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

