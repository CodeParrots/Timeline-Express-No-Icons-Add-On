=== Timeline Express - No Icons Add-On ===
Contributors: codeparrots, eherman24
Tags: timeline, express, time, line, timeline express, add, on, add-on, no, icons, no icons
Plugin URI: https://www.wp-timelineexpress.com
Requires at least: WP 4.0 & Timeline Express 1.2
Tested up to: 4.7.2
Stable tag: 1.1.0
License: GPLv2 or later

Remove the icons associated with Timeline Express announcements.

== Description ==

Timeline Express - No Icons Add-On is a WordPress plugin that extends the base plugin, <a href="https://wordpress.org/plugins/timeline-express/">Timeline Express</a>.

The Timeline Express - No Icons Add-On removes the icons associated with the Timeline Express announcements. This add-on will remove the icon selection on the announcement new/edit screen, as well as the icons on the front end of the site.

When activated, the Timeline Express - No Icons Add-On will create a new settings tab on the Timeline Express settings page which will allow you to remove the icons globally, or explain how you can remove the icons on each timeline.

**Basic Usage**

Head into 'Timeline Express > Settings' and enable the 'Global No Icons' option to remove the icons on *all* timelines on your site.

If you want to remove the icons on a specific timeline, but leave them on others, you can add the 'no-icons' parameter to the <code>[timeline-express]</code> shortcode and set it to "1".

**Example**
<code>[timeline-express no-icons="1"]</code>

== Screenshots ==
1. Timeline Express - No Icons Add-On Settings
2. Front-End of Site No Icons Add-On Example

== Changelog ==

= 1.1.0 - February 8th, 2017 =
* Resolved styling issue between Timeline Express free/pro.
* Removed excess CSS files and consolidated into a single file `timeline-express-no-icons.css`.
* Tweak grunt tasks.

= 1.0.0 - December 27th, 2017 =
* Initial release.
