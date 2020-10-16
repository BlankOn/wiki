## CamelCase
New words created by smashing together capitalized words.
CamelCase is the original wiki convention for creating hyperlinks, with the
additional requirement that the capitals are followed by a lower-case letter;
hence “AlabamA” and “ABc” will not be links.

### Customizing the Wiki behavior
Some people dislike linking by CamelCase. While Trac remains faithful to the
original Wiki style, it provides a number of ways to accomodate users with
different preferences:
    * There's an option (ignore_missing_pages in the [wiki] section of TracIni)
      to simply ignore links to missing pages when the link is written using
      the CamelCase style, instead of that word being replaced by a gray link
      followed by a question mark.
      That can be useful when CamelCase style is used to name code artifacts
      like class names and there's no corresponding page for them.
    * There's an option (split_page_names in the [wiki] section of TracIni) to
      automatically insert space characters between the words of a CamelCase
      link when rendering the link.
    * Creation of explicit Wiki links is also easy, see WikiPageNames for
      details.
    * In addition, Wiki formatting can be disabled completely in some places
      (e.g. when rendering commit log messages). See wiki_format_messages in
      the [changeset] section of TracIni.
See TracIni for more information on the available options.

### More information on CamelCase
    * ​http://c2.com/cgi/wiki?WikiCase
    * ​http://en.wikipedia.org/wiki/CamelCase

See also: WikiPageNames, WikiNewPage, WikiFormatting, TracWiki

Last modified on 10/16/2014 01:10:30 PM
 
---
 
