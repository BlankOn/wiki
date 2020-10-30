module.exports = {
  wiki: [
    "README",
    "Proyek/Misi",
    "MendapatkanBlankOn",
    "BukuAlamat",
    "Lainnya/Glosarium",
    "FAQ"
  ],
  timPengembang: [
    'TimPengembang/TimBlankOn',
    {
      type: 'category',
      label: 'Tim Rilis',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'TimPengembang/Pemaket/README'
        },
        'TimPengembang/Kesenian/README',
        'TimPengembang/JaminanKualitas/README',
        'TimPengembang/Dokumentasi/README',
        'TimPengembang/ManajerRilis/README',
      ]
    },
    {
      type: 'category',
      label: 'Tim Proyek',
      collapsed: false,
      items: [
        'TimPengembang/Humas/README',
        'TimPengembang/Infrastruktur/README',
        'TimPengembang/Riset/README',
      ]
    },
  ],
  produkBlankOn: [
    "ProdukBlankOn/README",
    {
      type: 'category',
      label: 'Distribusi BlankOn Linux',
      collapsed: false,
      items: [
        "ProdukBlankOn/1/README",
        "ProdukBlankOn/2/README",
        "ProdukBlankOn/3/README",
        "ProdukBlankOn/4/README",
        "ProdukBlankOn/5/README",
        "ProdukBlankOn/6/README",
        "ProdukBlankOn/7/README",
        "ProdukBlankOn/8/README",
        "ProdukBlankOn/9/README",
        "ProdukBlankOn/10/README",
        "ProdukBlankOn/11/README",
      ]
    },
    "ProdukBlankOn/Manokwari",
    "ProdukBlankOn/Ridon"
  ]
};
