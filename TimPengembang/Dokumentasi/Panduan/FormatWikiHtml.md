# Panduan Menulis Wiki Lama
## Membuat Format Html

Html adalah singkatan dari hyper text markup language. Dengan html, kita dapat membuat tabel, menentukan corak huruf, dan membuat tautan. Di trac 0.12 ini ada
beberapa format html yang bisa kita gunakan, antara lain tabel, huruf, dan judul. Untuk menulis html di trac, terdapat format baku sebagai berikut:

{{{
#!html
<label>x</label>
}}}

Label ini bisa berupa penanda huruf tebal:<b>Tebal</b>; huruf miring:<i>Miring</i>; dan <table>Tabel</table>. Untuk penjelasan lebih lanjut, lihat
pembahasan tentang pembuatan tabel, huruf, dan judul.


## Membuat Judul dengan Format Html

Kategori Format Html  Tampilan      Kategori      Format Html  Tampilan
         {{{                                      {{{
Heading  #!html       ******        Heading Level #!html       ***** Heading
Level 1  <h1>Heading  Heading Level 2             <h2>Heading  Level 2 *****
         Level 1</h1> 1 ******                    Level 2</h2>
         }}}                                      }}}
         {{{                                      {{{
Heading  #!html       **** Heading  Heading Level #!html       *** Heading
Level 3  <h3>Heading  Level 3 ****  4             <h4>Heading  Level 4 ***
         Level 3</h3>                             Level 4</h4>
         }}}                                      }}}
         {{{                                      {{{
Heading  #!html       ** Heading    Heading Level #!html       * Heading
Level 5  <h5>Heading  Level 5 **    6             <h6>Heading  Level 6 *
         Level 5</h5>                             Level 6</h6>
         }}}                                      }}}

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


## Membuat Tautan


Format Wiki                            Tampilan
  Pembuatan halaman                      Wiki pages
      CamelCase or wiki:CamelCase            CamelCase or wiki:CamelCase
  Halaman utama                          Parent page
      [..]                                   ..
  Tiket                                  Tickets
      #1 or ticket:1                         #1 or ticket:1
  Komentar tiket                         Ticket comments
      comment:1:ticket:2                     comment:1:ticket:2
  Laporan                                Reports
      {1} or report:1                        {1} or report:1
  Milestones                             Milestones
      milestone:1.0                          milestone:1.0
  Lampiran                               Attachment
      attachment:example.tgz (for            attachment:example.tgz (for
      current page attachment),              current page attachment),
      attachment:attachment.1073.diff:       attachment:attachment.1073.diff:
      ticket:944 (absolute path)             ticket:944 (absolute path)
  Changesets                             Changesets
      r1, [1], changeset:1 or                r1, [1], changeset:1 or
      (restricted) [1/trunk],                (restricted) [1/trunk], changeset:
      changeset:1/trunk                      1/trunk
  Revision log                           Revision log
      r1:3, [1:3] or log:@1:3, log:          r1:3, [1:3] or log:@1:3, log:
      trunk@1:3, [2:5/trunk]                 trunk@1:3, [2:5/trunk]
  Diffs                                  Diffs
      diff:@1:3, diff:tags/trac-0.9.2/       diff:@1:3, diff:tags/trac-0.9.2/
      wiki-default//tags/trac-0.9.3/         wiki-default//tags/trac-0.9.3/
      wiki-default or diff:trunk/            wiki-default or diff:trunk/
      trac@3538//sandbox/vc-                 trac@3538//sandbox/vc-
      refactoring@3539                       refactoring@3539
  Files                                  Files
      source:trunk/COPYING, source:/         source:trunk/COPYING, source:/
      trunk/COPYING@200 (at version          trunk/COPYING@200 (at version
      200), source:/trunk/                   200), source:/trunk/
      COPYING@200#L25 (at version 200,       COPYING@200#L25 (at version 200,
      line 25)                               line 25)

**Links**
Hyperlinks are automatically created for WikiPageNames and URLs. WikiPageLinks
can be disabled by prepending an exclamation mark "!" character, such as
!WikiPageLink.
Wiki Markup                           Display
TitleIndex, http://www.edgewall.com/, TitleIndex, ​http://www.edgewall.com/,
!NotAlink                             NotAlink
Links can be given a more descriptive title by writing the link followed by a
space and a title and all this inside square brackets. If the descriptive title
is omitted, then the explicit prefix is discarded, unless the link is an
external link. This can be useful for wiki pages not adhering to the
WikiPageNames convention.
Wiki Markup                                    Display
 * [http://www.edgewall.com Edgewall Software]     * ​Edgewall_Software
 * [wiki:TitleIndex Title Index]                   * Title_Index
 * [wiki:TitleIndex]                               * TitleIndex
 * [wiki:ISO9000]                                  * ISO9000?
Following the ​WikiCreole trend, the descriptive title can also be specified by
writing the link followed by a pipe ('|') and a title and all this inside
double square brackets.
 * [[http://www.edgewall.com|Edgewall
Software]]                                * ​Edgewall_Software
 * [[wiki:TitleIndex|Title Index]]        * Title_Index or even Title_Index
   or even [[TitleIndex|Title Index]]     * TitleIndex but not [[TitleIndex]]!
 * [[wiki:TitleIndex]]                    * ISO9000?
   ''' but not ![[TitleIndex]]! '''
 * [[ISO9000]]
Note: the ​WikiCreole style for links is quick to type and certainly looks
familiar as it's the one used on Wikipedia and in many other wikis.
Unfortunately it conflicts with the syntax for macros. So in the rare case when
you need to refer to a page which is named after a macro (typical examples
being TitleIndex, InterTrac and InterWiki), by writing [[TitleIndex]] you will
actually call the macro instead of linking to the page.
***** Trac Links *****
Wiki pages can link directly to other parts of the Trac system. Pages can refer
to tickets, reports, changesets, milestones, source files and other Wiki pages
using the following notations:
Wiki Markup                           Display
 * Tickets: #1 or ticket:1                * Tickets: #1 or ticket:1
 * Reports: {1} or report:1               * Reports: {1} or report:1
 * Changesets: r1, [1] or changeset:1     * Changesets: r1, [1] or changeset:1
 * ...                                    * ...
 * targeting other Trac instances,        * targeting other Trac instances, so
   so called InterTrac links:               called InterTrac links:
   - Tickets: #Trac1 or Trac:ticket:1           o Tickets: #Trac1 or Trac:
   - Changesets: [Trac1] or Trac:                 ticket:1
changeset:1                                     o Changesets: [Trac1] or Trac:
                                                  changeset:1
There are many more flavors of Trac links, see TracLinks for more in-depth
information and a reference for all the default link resolvers.
***** Setting Anchors *****
An anchor, or more correctly speaking, an ​anchor_name can be added explicitly
at any place in the Wiki page, in order to uniquely identify a position in the
document:
[=#point1]
This syntax was chosen to match the format for explicitly naming the header id
documented_above. For example:
== Long title == #title
It's also very close to the syntax for the corresponding link to that anchor:
[#point1]
Optionally, a label can be given to the anchor:
[[=#point1 '''Point 1''']]
Wiki Markup                        Display
[#point2 jump to the second point]      jump_to_the_second
                                        point
...                                     ...
                                        Point2:  Jump here
Point2:  [=#point2] Jump here
For more complex anchors (e.g. when a custom title is wanted), one can use the
Span macro, e.g. [[span(id=point2, class=wikianchor, title=Point 2, ^(2)^)]].
***** Escaping Links and WikiPageNames *****
You may avoid making hyperlinks out of TracLinks by preceding an expression
with a single "!" (exclamation mark).
Wiki Markup         Display
 !NoHyperLink            NoHyperLink #42 is not a
 !#42 is not a link      link

## Tabel Warna
     Nama Warna      Kode      Warna
       Merah     #A40000
   Light Coral   #F08080
   Merah Kalem   #C22F2F
  Merah Terang   #DF5757
      Crimson    #DC143C
   Fire Brick    #B22222
        Ungu     #5c3566
    Ungu Muda    #75507b
   Ungu Terang   #ad7fa8
  Light Salmon   #FFA07A
       Coral     #FF7F50
      Tomato     #FF6347
   Orange Red    #FF4500


