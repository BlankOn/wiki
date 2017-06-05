# Panduan Menulis Wiki
## Membuat Tabel

Cara Menggunakan #!div dan #!span
Format Html                            Tampilan
{{{
#!div class="important" style="border:
2pt solid; text-align: center"
This is the ''only'' way to go in Trac
0.11
}}}

{{{
#!div class="wikipage" style="border:
1pt dotted"
Only `wikipage` (same as specifying no
class attribute)
}}}                                    This is the only way to go in Trac 0.11
                                       Only wikipage (same as specifying no
{{{                                    class attribute)
#!div class="wikipage compact "        Use combined classes (compact and
style="border: 1pt solid"              wikipage)
Use combined classes (`compact` and    Only compact
`wikipage`)                            No classes (not the same as specifying
}}}                                    no class attribute...)

{{{
#!div class="compact" style="border:
1pt dotted"
Only `compact`
}}}

{{{
#!div class="" style="border: 1pt
solid"
No classes (//not// the same as
specifying no class attribute...)
}}}
Note that the contents of a #!div block are contained in one or more
paragraphs, which have a non-zero top and bottom margin. This leads to the top
and bottom padding in the example above. To remove the top and bottom margin of
the contents, add the compact class to the #!div. Another predefined class
besides wikipage and compact is important, which can be used to make a
paragraph stand out. Extra CSS classes can be defined via the site/style.css
file for example, see TracInterfaceCustomization#SiteAppearance.
For spans, you should rather use the Macro call syntax:
Wiki Markup
Hello
[[span(''WORLD'' (click [#anchor here]), style=color: green; font-size: 120%,
id=anchor)]]!
Display
     Hello WORLD (click here)!


Cara Menggunakan #!td, #!tr, #!th, dan #!table
#!td or #!th processors are actually the main ones, for creating table data and
header cells, respectively. The other processors #!table and #!tr are not
required for introducing a table structure, as #!td and #!th will do this
automatically. The |- row separator can be used to start a new row when needed,
but some may prefer to use a #!tr block for that, as this introduces a more
formal grouping and offers the possibility to use an extra level of
indentation. The main purpose of the #!table and #!tr is to give the
possibility to specify HTML attributes, like style or valign to these elements.
Wiki Markup                              Display
Simple 2x2 table with rich content:      Simple 2x2 table with rich content:
{{{#!th align=left                           * Left              * Right
 - Left                                      * Header            * Header
 - Header                                    * Left          RightContent
}}}                                          * Content
{{{#!th align=left                       ... and this can be with pipe-based
 - Right                                 mixed               cells
 - Header                                Pick the style the more appropriate
}}}                                      to your content
|----------------------------------      See WikiFormatting#Tables for details
{{{#!td style="background: #ffd"         on the pipe-based table syntax.
 - Left                                  If one needs to add some attributes to
 - Content                               the table itself...
}}}                                      Left header Right header
{{{#!td style="vertical-align: top"      1.1         1.2
!RightContent                            2.1         2.2
}}}
|----------------------------------
|| ... and this can be mixed||\
||with pipe-based cells ||
{{{#!td colspan=2
Pick the style the more appropriate
to your content

See WikiFormatting#Tables for details
on the pipe-based table syntax.
}}}

If one needs to add some
attributes to the table itself...

{{{
#!table style="border:none;text-align:
center;margin:auto"
  {{{#!tr
====================================
    {{{#!th style="border: none"
    Left header
    }}}
    {{{#!th style="border: none"
    Right header
    }}}
  }}}
  {{{#!tr ==== style="border: 1px dotted
grey"
    {{{#!td style="border: none"
    1.1
    }}}
    {{{#!td style="border: none"
    1.2
    }}}
  }}}
  {{{#!tr
====================================
    {{{#!td style="border: none"
    2.1
    }}}
    {{{#!td
    2.2
    }}}
  }}}
}}}



