# Timeline Express - No Icons Add-On #
![Banner Image](wp-org-assets/banner-772x250.jpg)

**Contributors:** [codeparrots](https://profiles.wordpress.org/codeparrots), [eherman24](https://profiles.wordpress.org/eherman24)  
**Tags:** [timeline](https://wordpress.org/themes/tags/timeline/), [express](https://wordpress.org/themes/tags/express/), [no](https://wordpress.org/themes/tags/no/), [icons](https://wordpress.org/themes/tags/icons/), [add-on](https://wordpress.org/themes/tags/add-on/), [shortcode](https://wordpress.org/themes/tags/shortcode/), [parameter](https://wordpress.org/themes/tags/parameter/)  
**Plugin URI:** https://www.wp-timelineexpress.com  
**Requires at least:** WP 4.0 & Timeline Express 1.2  
**Requires PHP:** 5.6  
**Tested up to:** 4.8  
**Stable tag:** 1.2.0  
**License:** GPLv2 or later  

Remove the icons associated with Timeline Express announcements.

[![Build Status](https://travis-ci.org/CodeParrots/timeline-express-no-icons-add-on.svg?branch=master)](https://travis-ci.org/CodeParrots/timeline-express-no-icons-add-on) [![License](https://img.shields.io/badge/license-GPL--2.0-brightgreen.svg)](https://github.com/CodeParrots/timeline-express-no-icons-add-on/blob/master/license.txt) [![PHP 5.6](https://img.shields.io/badge/php-5.6-8892bf.svg)](https://secure.php.net/supported-versions.php) [![WordPress plugin](https://img.shields.io/wordpress/plugin/v/timeline-express-no-icons-add-on.svg)](https://wordpress.org/plugins/timeline-express-no-icons-add-on/) [![WordPress](https://img.shields.io/wordpress/v/timeline-express-no-icons-add-on.svg)](https://img.shields.io/wordpress/v/timeline-express-no-icons-add-on.svg) [![WordPress](https://img.shields.io/wordpress/plugin/dt/timeline-express-no-icons-add-on.svg)](https://wordpress.org/plugins/timeline-express-no-icons-add-on/)  

## Description ##

Timeline Express - No Icons Add-On is a WordPress plugin that extends the base plugin, <a href="https://wordpress.org/plugins/timeline-express/">Timeline Express</a>.

The Timeline Express - No Icons Add-On removes the icons associated with the Timeline Express announcements. This add-on will remove the icon selection on the announcement new/edit screen, as well as the icons on the front end of the site.

When activated, the Timeline Express - No Icons Add-On will create a new settings tab on the Timeline Express settings page which will allow you to remove the icons globally, or explain how you can remove the icons on each timeline.

**Basic Usage**

Head into 'Timeline Express > Settings' and enable the 'Global No Icons' option to remove the icons on *all* timelines on your site.

If you want to remove the icons on a specific timeline, but leave them on others, you can add the 'no-icons' parameter to the <code>[timeline-express]</code> shortcode and set it to "1".

**Example**
<code>[timeline-express no-icons="1"]</code>

## Screenshots ##
1. Timeline Express - No Icons Add-On Settings
2. Front-End of Site No Icons Add-On Example

## Changelog ##

### 1.2.0 - September 10th, 2017 ###
* Tweaked the shortcode generate section for Timeline Express Pro v2 API.
* Prevent the no icons stylesheet from loading if the styles module is loaded in the Pro version (v2.0+).
* Change class from 'no-icons' to 'no-icon' to match the Pro version syntax.
* Prevent duplicate 'no-icon' class if user has 'hide icons' checked in pro version (v2.0+) and the `no-icons="1"`` shortcode parameter is set.

### 1.1.1 - February 12th, 2017 ###
* Updated styles to work with Timeline Express Pro horizontal timelines.

### 1.1.0 - February 8th, 2017 ###
* Resolved styling issue between Timeline Express free/pro.
* Removed excess CSS files and consolidated into a single file `timeline-express-no-icons.css`.
* Tweak grunt tasks.

### 1.0.0 - December 27th, 2017 ###
* Initial release.

## Upgrade Notice ##

### 1.1.1 - February 12th, 2017 ###
* Updated styles to work with Timeline Express Pro horizontal timelines.
