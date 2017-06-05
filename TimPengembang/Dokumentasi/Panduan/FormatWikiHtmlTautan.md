# Panduan Menulis Wiki
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


