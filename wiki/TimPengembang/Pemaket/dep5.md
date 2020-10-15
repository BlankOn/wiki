## DEP-5: Machine-readable debian/copyright"
     Title: Machine-readable debian/copyright DEP: 5 State: CANDIDATE
     Date: 2011-01-06 Drivers: Steve Langasek <vorlon@…>,
          Lars Wirzenius <liw@…>
     URL: ​http://dep.debian.net/deps/dep5 License:
          Copying and distribution of this file, with or without
          modification, are permitted in any medium without royalty
          provided the copyright notice and this notice are
          preserved.
     Abstract:
          Establish a standard, machine-readable format for debian/
          copyright files within packages, to facilitate automated
          checking and reporting of licenses for packages and sets of
          packages.
## Introduction
This is a proposal to make debian/copyright machine-interpretable. This file is
one of the most important files in Debian packaging, yet there is currently no
standard format defined for it and its contents vary tremendously across
packages, making it difficult to automatically extract licensing information.
This is not a proposal to change the policy in the short term. In particular,
nothing in this proposal supersedes or modifies any of the requirements
specified in Debian Policy regarding the appropriate detail or granularity to
use when documenting copyright and license status in debian/copyright.
## Rationale
The diversity of free software licenses means that Debian needs to care not
only about the freeness of a given work, but also its license's compatibility
with the other parts of Debian it uses.
The arrival of the GPL version 3, its incompatibility with version 2, and our
inability to spot the software where the incompatibility might be problematic
is one prominent occurrence of this limitation.
There are earlier precedents, also. One is the GPL/OpenSSL incompatibility.
Apart from grepping debian/copyright, which is prone to numerous false
positives (packaging under the GPL but software under another license) or
negatives (GPL software but with an "OpenSSL special exception" dual licensing
form), there is no reliable way to know which software in Debian might be
problematic.
And there is more to come. There are issues with shipping GPLv2-only software
with a CDDL operating system such as Nexenta. The GPL version 3 solves this
issue, but not all GPL software can switch to it and we have no way to know how
much of Debian should be stripped from such a system.
A user might want to have a way to avoid software with certain licenses they
have a problem with, even if the licenses are DFSG-free. For example, the
Affero GPL.
## Acknowledgements
Many people have worked on this specification over the years. The following
alphabetical list is incomplete, please suggest missing people:
    * Russ Allbery,
    * Ben Finney,
    * Sam Hocevar,
    * Steve Langasek,
    * Charles Plessy,
    * Noah Slater,
    * Jonas Smedegaard,
    * Lars Wirzenius.
## File syntax
The debian/copyright file must be machine-interpretable, yet human-readable,
while communicating all mandated upstream information, copyright notices and
licensing details.
The syntax of the file is the same as for other Debian control files, as
specified in section 5.1 of the Debian Policy Manual. See <​http://
www.debian.org/doc/debian-policy/ch-controlfields.html#s-controlsyntax> for
details. Extra fields can be added to any paragraph. No prefixing is necessary
or desired, but please avoid names similar to standard ones so that mistakes
are easier to catch. Future versions of the debian/copyright specification will
attempt to avoid conflicting specifications for widely used extra fields.
There are four kinds values for fields. Each field specifies which kind is
allowed.
    * Single-line values.
    * White space separated lists.
    * Line based lists.
    * Text formatted like package long descriptions.
A single-line value means that the whole value of a field must fit on a single
line. For example, the Format field has a single line value specifying the
version of the machine-readable format that is used.
A white space separated list means that the field value may be on one line or
many, but values in the list are separated by one or more white space
characters (including space, TAB, and newline). For example, the Files field
has a list of filename patterns.
Another kind of list value has one value per line. For example, Copyright can
list many copyright statements, one per line.
Formatted text fields use the same rules as the long description in a package's
Description field, possibly also using the first line as a synopsis, like
Description uses it for the short description. See section 5.6.13,
"Description", at <​http://www.debian.org/doc/debian-policy/ch-
controlfields.html#s-f-Description> for details. For example, Disclaimer has no
special first line, whereas License does.
# Paragraphs
There are three kinds of paragraphs: the first one is called the "header
paragraph". Every other paragraph is either a "Files" paragraph or a stand-
alone license paragraph. This is similar to source and binary package
paragraphs in debian/control files.
## Header paragraph (Once)
    * Format
          o Required
          o Syntax: single line
          o URI of the format specification, such as:
                # ​http://svn.debian.org/wsvn/dep/web/deps/
                  dep5.mdwn?op=file&rev=REVISION
    * Upstream-Name
          o Optional
          o Syntax: single line
          o The name upstream uses for the software.
    * Upstream-Contact
          o Optional
          o Syntax: line based list
          o The preferred address(es) to reach the upstream project. May be
            free-form text, but by convention will usually be written as a list
            of RFC5822 addresses or URIs.
    * Source
          o Required
          o Syntax: formatted text, no synopsis
          o An explanation from where the upstream source came from. Typically
            this would be a URL, but it might be a free-form explanation. If
            the upstream source has been modified to remove non-free parts,
            that should be explained in this field.
    * Disclaimer
          o Optional
          o Syntax: formatted text, no synopsis
          o This field can be used in the case of non-free and contrib packages
            (see [Policy 12.5]( ​http://www.debian.org/doc/debian-policy/ch-
            docs.html#s-copyrightfile))
    * Comment
          o Optional
          o Syntax: formatted text, no synopsis
          o Description: This field can provide additional information. For
            example, it might quote an e-mail from upstream justifying why the
            license is acceptable to the main archive, or an explanation of how
            this version of the package has been forked from a version known to
            be DFSG-free, even though the current upstream version is not.
    * Copyright
          o Optional.
          o Syntax: line based list
          o In the header paragraph (no Files specification), this field gives
            the copyright information for the package as a whole, which may be
            different or simplified from a combination of all the per-file
            copyright information. See also Copyright below in the Files
            paragraph section.
Example:
    Format: http://dep.debian.net/deps/dep5/
    Upstream-Name: SOFTware
    Upstream-Contact: John Doe <john.doe@example.com>
    Source: http://www.example.com/software/project
## Files paragraph (Repeatable)
The declaration of copyright and license for files is done in one or more
paragraphs. In the simplest case, a single paragraph can be used which applies
to all files and lists all applicable copyrights and licenses.
    * Files
          o Required (not in header paragraph).
          o Syntax: white space separated list
          o List of patterns indicating files covered by the license and
            copyright specified in this paragraph. See below for details.
    * Copyright
          o Required
          o Syntax: line based list
          o One or more free-form copyright statement(s), one per line, that
            apply to the files matched by the above pattern. If a work has no
            copyright holder (i.e., it is in the public domain), that
            information should be recorded here.
               The Copyright field collects all relevant
               copyright notices for the files of this
               paragraph. Not all copyright notices may apply to
               every individual file, and years of publication
               for one copyright holder may be gathered
               together. For example, if file A has:
                        Copyright 2008 John Smith
                        Copyright 2009 Angela Watts
               and file B has:
                        Copyright 2010 Angela Watts
               the Copyright field for a stanza covering both
               file A and file B need contain only:
                        Copyright 2008 John Smith
                        Copyright 2009, 2010 Angela Watts
          The Copyright field may contain the original copyright
          statement copied exactly (including the word "Copyright"),
          or it can shorten the text, as long as it does not
          sacrifice information. Examples in this specification use
          both forms.
    * License
          o Licensing terms for the files listed in Files field for this
            paragraph
          o Required
          o Syntax: formatted text, with synopsis
          o First line: an abbreviated name for the license, or expression
            giving alternatives (see *Short names* section for a list of
            standard abbreviations). If there are licenses present in the
            package without a standard short name, an arbitrary short name may
            be assigned for these licenses. These arbitrary names are only
            guaranteed to be unique within a single copyright file.
          o Remaining lines: if left blank here, the file must include a stand-
            alone License paragraph matching each license short name listed on
            the first line (see the *Standalone License Paragraph
          o section). Otherwise, this field should either include the full text
            of the license(s) or include a pointer to the license file under /
            usr/share/common-licenses. This field should include all text
            needed in order to fulfill both Debian Policy's requirement for
            including a copy of the software's distribution license (<a
            href="​http://www.debian.org/doc/debian-policy/ch-docs.html#s-
            copyrightfile">§12.5</a>), and any license requirements to include
            warranty disclaimers or other notices with the binary package.
    * Comment
          o Same as in the header paragraph.
Filename patterns in the Files field are specified using a simplified shell
glob syntax. Patterns are separated by white space.
    * Only the wildcards * and ? apply; the former matches any number of
      characters (including none), the latter a single character. Both match a
      slash ("/") and a leading dot.
    * The backslash ("\\") is used to remove the magic from the next character;
      see table below.
    * Patterns match pathnames that start at the root of the source tree. Thus,
      "Makefile.in" matches only the file at the root of the tree, but "*/
      Makefile.in" matches at any depth.
Backslash escape sequences:
     \* match star (asterisk) \? match question mark
     match backslash
Any other character following a backslash is an error.
Multiple Files paragraphs are allowed. The last paragraph that matches a
particular file applies to it.
Exclusions are done by having multiple Files paragraphs.
Example:
    Files: *
    Copyright: 1975-2010 Ulla Upstream
    License: GPL-2+
    Files: debian/*
    Copyright: 2010 Daniela Debianizer
    License: GPL-2+
    Files: debian/patches/fancy-feature
    Copyright: 2010 Daniela Debianizer
    License: GPL-3+
    Files: */*.1
    Copyright: 2010 Manuela Manpager
    License: GPL-2+
In this example, all files are copyright by the upstream and licensed under the
GPL, version 2 or later, with three exceptions. All the Debian packaging files
are copyright by the packager, and further one specific file providing a new
feature is licensed differently. Finally, there are some manual pages added to
the package, written by a third person.
## Standalone License Paragraph (Optional, Repeatable)
Where a set of files are dual (tri, etc) licensed, or when the same license
occurs multiple times, you can use a single line License field and standalone
License paragraphs to expand the license short names.
Example 1 (tri-licensed files).
    Files: src/js/editline/*
    Copyright: 1993, John Doe
               1993, Joe Average
    License: MPL-1.1 or GPL-2 or LGPL-2.1
    License: MPL-1.1
     [LICENSE TEXT]
    License: GPL-2
     [LICENSE TEXT]
    License: LGPL-2.1
     [LICENSE TEXT]
Example 2 (recurrent license).
    Files: src/js/editline/*
    Copyright: 1993, John Doe
               1993, Joe Average
    License: MPL-1.1
    Files: src/js/fdlibm/*
    Copyright: 1993, J-Random Corporation
    License: MPL-1.1
    License: MPL-1.1
     [LICENSE TEXT]
## License specifications
### Short name
Much of the value of a machine-parseable copyright file lies in being able to
correlate the licenses of multiple pieces of software. To that end, this spec
defines standard short names for a number of commonly used licenses, which can
be used in the first line of a "License" field.
These short names have the specified meanings across all uses of this file
format, and *must not* be used to refer to any other licenses. Parsers may thus
rely on these short names referring to the same licenses wherever they occur,
without needing to parse or compare the full license text.
From time to time, licenses may be added to or removed from the list of
standard short names. Such changes in the list of short names will always be
accompanied by changes to the recommended Format value. Implementors who are
parsing copyright files should take care not to assume anything about the
meaning of license short names for unknown Format versions.
Use of a standard short name does not override the Debian Policy requirement to
include the full license text in debian/copyright, nor any requirements in the
license of the work regarding reproduction of legal notices. This information
must still be included in the License field, either in a stand-alone license
paragraph or in the relevant files paragraph.
For licenses which have multiple versions in use, the version number is added,
using a dash as a separator. If omitted, the lowest version number is implied.
When the license grant permits using the terms of any later version of that
license, the short name is finished with a plus sign. For SPDX compatibility,
trailing "dot-zeroes" are considered to be equal to plainer version (e.g.,
"2.0.0" is considered equal to "2.0" and "2").
**keyword** | **meaning**
`Apache` | Apache license. For versions, consult the [Apache Software
Foundation](http://www.apache.org/licenses/).
`Artistic` | Artistic license. For versions, consult the [Perl Foundation]
(http://www.perlfoundation.org/legal)
`BSD-2-clause` | Berkeley software distribution license, 2-clause version
`BSD-3-clause` | Berkeley software distribution license, 3-clause version
`BSD-4-clause` | Berkeley software distribution license, 4-clause version
`FreeBSD` | FreeBSD Project license
`ISC` | [Internet Software Consortium](http://opensource.org/licenses/isc-
license.txt)'s license, sometimes also known as the OpenBSD License
`CC-BY` | Creative Commons Attribution license
`CC-BY-SA` | Creative Commons Attribution Share Alike license
`CC-BY-ND` | Creative Commons Attribution No Derivatives
`CC-BY-NC` | Creative Commons Attribution Non-Commercial
`CC-BY-NC-SA` | Creative Commons Attribution Non-Commercial Share Alike
`CC-BY-NC-ND` | Creative Commons Attribution Non-Commercial No Derivatives
`CC0` | Creative Commons Universal waiver
`CDDL` | Common Development and Distribution License. For versions, consult
[Sun Microsystems](http://www.sun.com/cddl/).
`CPL` | IBM Common Public License. For versions, consult the [IBM Common Public
License (CPL) Frequently asked questions](http://www.ibm.com/developerworks/
library/os-cplfaq.html).
`EFL` | The Eiffel Forum License. For versions, consult the [Open Source
Initiative](http://www.opensource.org/licenses/eiffel.html)
`Expat` | The Expat license
`GPL` | GNU General Public License
`LGPL` | GNU Lesser General Public License, (GNU Library General Public License
for versions lower than 2.1)
`GFDL` | GNU Free Documentation License
`GFDL-NIV` | GNU Free Documentation License, with no invariant sections
`LPPL` | LaTeX Project Public License
`MPL` | Mozilla Public License. For versions, consult [Mozilla.org](http://
www.mozilla.org/MPL)
`Perl` | Perl license (use "GPL-1+ or Artistic-1" instead)
`Python-CNRI` | Python Software Foundation license. For versions, consult the
[Python Software Foundation](http://www.python.org/psf/license/)
`QPL` | Q Public License
`W3C` | W3C Software License. For more information, consult the [W3C
Intellectual Rights FAQ](http://www.w3.org/Consortium/Legal/IPR-FAQ-20000620S)
and the [20021231 W3C Software notice and license](http://www.w3.org/
Consortium/Legal/2002/copyright-software-20021231)
`Zlib` | [zlib/libpng license](http://www.opensource.org/licenses/zlib-
license.php)
`Zope` | Zope Public License. For versions, consult [Zope.org](http://
www.zope.org/Resources/License/)
There are [many versions of the MIT license](​http://en.wikipedia.org/wiki/
MIT_License#Various_versions).Please use Expat instead, when it matches.
Exceptions and clarifications are signaled in plain text, by appending "with
keywords exception" to the short name. This document provides a list of
keywords that refer to the most frequent exceptions.
The GPL "Font" exception refers to the text added to the license notice of each
file as specified at [How does the GPL apply to fonts?](​http://www.gnu.org/
licenses/gpl-faq.html#FontException). The precise text corresponding to this
exception is:
> As a special exception, if you create a document which uses this font,
> and embed this font or unaltered portions of this font into the
> document, this font does not by itself cause the resulting document to
> be covered by the GNU General Public License. This exception does not
> however invalidate any other reasons why the document might be covered
> by the GNU General Public License. If you modify this font, you may
> extend this exception to your version of the font, but you are not
> obligated to do so. If you do not wish to do so, delete this exception
> statement from your version.
The GPL "OpenSSL" exception gives permission to link GPL-licensed code with the
OpenSSL library, which contains GPL-incompatible clauses. For more information,
see ["The -OpenSSL License and The GPL"](​http://www.gnome.org/~markmc/openssl-
and-the-gpl.html) by Mark McLoughlin? and the message ["middleman software
license conflicts with OpenSSL"](​http://lists.debian.org/debian-legal/2004/05/
msg00595.html) by Mark McLoughlin? on the debian-legal mailing list. The text
corresponding to this exception is:
     In addition, as a special exception, the copyright holders give
     permission to link the code of portions of this program with the
     OpenSSL library under certain conditions as described in each
     individual source file, and distribute linked combinations including
     the two.
     You must obey the GNU General Public License in all respects for all
     of the code used other than OpenSSL. If you modify file(s) with this
     exception, you may extend this exception to your version of the file
     (s), but you are not obligated to do so. If you do not wish to do so,
     delete this exception statement from your version. If you delete this
     exception statement from all source files in the program, then also
     delete it here.
## Syntax
License names are case-insensitive, and may not contain spaces.
In case of multi-licensing, the license short names are separated by or when
the user can chose between different licenses, and by and when use of the work
must simultaneously comply with the terms of multiple licenses.
For instance, this is a simple, "GPL version 2 or later" field:
     License: GPL-2+
This is a dual-licensed GPL/Artistic work such as Perl:
     License: GPL-1+ or Artistic
This is for a file that has both GPL and classic BSD code in it:
     License: GPL-2+ and BSD
For the most complex cases, the comma is used to disambiguate the priority of
ors and ands: and has the priority over or, unless preceded by a comma. For
instance:
     A or B and C means A or (B and C). A or B, and C means (A or B), and
     C.
This is for a file that has Perl code and classic BSD code in it:
     License: GPL-2+ or Artistic-2.0, and BSD
A GPL-2+ work with the OpenSSL exception is in effect a dual-licensed work that
can be redistributed either under the GPL-2+, or under the GPL-2+ with the
OpenSSL exception. It is thus expressed as GPL-2+ with OpenSSL exception:
     License: GPL-2+ with OpenSSL exception
          This program is free software; you can redistribute it and/
          or modify it under the terms of the GNU General Public
          License as published by the Free Software Foundation;
          either version 2 of the License, or (at your option) any
          later version. . In addition, as a special exception, the
          author of this program gives permission to link the code of
          its release with the OpenSSL project's "OpenSSL" library
          (or with modified versions of it that use the same license
          as the "OpenSSL" library), and distribute the linked
          executables. You must obey the GNU General Public License
          in all respects for all of the code used other than
          "OpenSSL". If you modify this file, you may extend this
          exception to your version of the file, but you are not
          obligated to do so. If you do not wish to do so, delete
          this exception statement from your version. . This program
          is distributed in the hope that it will be useful, but
          WITHOUT ANY WARRANTY; without even the implied warranty of
          MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See
          the GNU General Public License for more details. . You
          should have received a copy of the GNU General Public
          License along with this package; if not, write to the Free
          Software Foundation, Inc., 51 Franklin St, Fifth Floor,
          Boston, MA 02110-1301 USA . On Debian systems, the full
          text of the GNU General Public License version 2 can be
          found in the file `/usr/share/common-licenses/GPL-2'.
## SPDX
[SPDX](​http://spdx.org/) is an attempt to standardize a format for
communicating the components, licenses and copyrights associated with a
software package. It and the machine-readable debian/copyright format attempt
to be somewhat compatible. However, the two formats have different aims, and so
the formats are different. The [DEP5 wiki page](​http://wiki.debian.org/
Proposals/CopyrightFormat) will be used to track the differences.
# Examples
## Simple
A possible copyright file for the program 'X Solitaire' distributed in the
Debian source package xsol:
     Format: ​http://dep.debian.net/deps/dep5/ Upstream-Name: X Solitaire
     Source: ​ftp://ftp.example.com/pub/games
     Copyright: Copyright 1998 John Doe <jdoe@…> License: GPL-2+
          This program is free software; you can redistribute it and/
          or modify it under the terms of the GNU General Public
          License as published by the Free Software Foundation;
          either version 2 of the License, or (at your option) any
          later version. . This program is distributed in the hope
          that it will be useful, but WITHOUT ANY WARRANTY; without
          even the implied warranty of MERCHANTABILITY or FITNESS FOR
          A PARTICULAR PURPOSE. See the GNU General Public License
          for more details. . You should have received a copy of the
          GNU General Public License along with this package; if not,
          write to the Free Software Foundation, Inc., 51 Franklin
          St, Fifth Floor, Boston, MA 02110-1301 USA . On Debian
          systems, the full text of the GNU General Public License
          version 2 can be found in the file `/usr/share/common-
          licenses/GPL-2'.
     Files: debian/* Copyright: Copyright 1998 Jane Smith <jsmith@…>
     License:
          [LICENSE TEXT]
## Complex
A possible copyright file for the program 'Planet Venus', distributed in the
Debian source package planet-venus:
     Format: ​http://dep.debian.net/deps/dep5/ Upstream-Name: Planet Venus
     Upstream-Contact: John Doe <jdoe@…> Source: ​http://www.example.com/
     code/venus
     Copyright: 2008, John Doe <jdoe@…>
          2007, Jane Smith <jsmith@…> 2007, Joe Average <joe@…> 2007,
          J. Random User <jr@…>
     License: PSF-2
          [LICENSE TEXT]
     Files: debian/* Copyright: 2008, Dan Developer <dan@…> License:
          Copying and distribution of this package, with or without
          modification, are permitted in any medium without royalty
          provided the copyright notice and this notice are
          preserved.
     Files: debian/patches/theme-diveintomark.patch Copyright: 2008, Joe
     Hacker <hack@…> License: GPL-2+
          [LICENSE TEXT]
     Files: planet/vendor/compat_logging/* Copyright: 2002, Mark Smith
     <msmith@…> License: MIT
          [LICENSE TEXT]
     Files: planet/vendor/httplib2/* Copyright: 2006, John Brown <brown@…>
     License: MIT2
          Unspecified MIT style license.
     Files: planet/vendor/feedparser.py Copyright: 2007, Mike Smith
     <mike@…> License: PSF-2
          [LICENSE TEXT]
     Files: planet/vendor/htmltmpl.py Copyright: 2004, Thomas Brown
     <coder@…> License: GPL-2+
          This program is free software; you can redistribute it and/
          or modify it under the terms of the GNU General Public
          License as published by the Free Software Foundation;
          either version 2 of the License, or (at your option) any
          later version. . This program is distributed in the hope
          that it will be useful, but WITHOUT ANY WARRANTY; without
          even the implied warranty of MERCHANTABILITY or FITNESS FOR
          A PARTICULAR PURPOSE. See the GNU General Public License
          for more details. . You should have received a copy of the
          GNU General Public License along with this package; if not,
          write to the Free Software Foundation, Inc., 51 Franklin
          St, Fifth Floor, Boston, MA 02110-1301 USA . On Debian
          systems, the full text of the GNU General Public License
          version 2 can be found in the file `/usr/share/common-
          licenses/GPL-2'.
# Appendix: Note about the use of this format in Debian
The Debian Policy (§12.5) demands that each package is accompanied by a file,
debian/copyright in source packages and /usr/share/doc/package/copyright in
binary packages, that contains a verbatim copy of its copyright and
distribution license. In addition, it requires that copyrights must be
extractable by mechanical means. This proposal for machine-readable copyright
and license summary files has been crafted for Debian's use, but it is our hope
that other software distributions, as well as upstream developers will adopt
it, so that review efforts can be easily reproduced and shared.
The copyright of the Debian packaging and the history of package maintainers is
simply indicated in a Files: debian/* paragraph.
Last modified on 01/12/2011 05:13:31 AM
#### 
    
 
 
 
 
 
---
 
