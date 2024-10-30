=== Mailigen Widget ===
Contributors: krisjanis@imedia.lv
Tags: email marketing, mailigen, mailing list, newsletter, signup form, widget
Requires at least: 3.0.1
Tested up to: 4.8
Stable tag: trunk

Add beautiful sign-up forms with ease to your site. Create a custom design and place it on your site.

== Description ==

Mailigen Wordpress plugin provides an easy, lightweight way to let your visitors or clients to sign up for your Mailigen list.

With our Mailigen Wordpress Integration you can:

*	Add a sign-up form to your page
*	Display the collection of only information that you actually need to ask from your mailers
*	Customize texts of your sign-up form
*	Collect checkbox, dropdown, and radio fields (user must eplicate values on the plugin settings separated by a comma)
*	Set a widget description text
*	Set a custom Success Message
*	Ability to set an optional Redirect URL after submission
*	Turn off double opt-in
*	Turn off update existing user
*	Turn off send welcome email
*	Hide field labels (adds labels inside text fields)
*	Add a waiting indicator when user needs to wait for a response from server after pressing subscribe button
*	Multiple subscribe form widgets allowed on one page

> __This plugin requires a <a href="http://www.mailigen.com" title="Sign up for a free Mailigen trial" rel="nofollow">Mailigen account</a>.__ <br />*Don't have an account?* Mailigen offers a <a href="http://www.mailigen.com/sign-up" rel="nofollow">free 30 day trial</a>, so sign up and give this plugin a try!


== Installation ==

1. Upload the mailigen-widget to /wp-content/plugins/.
1. Activate the plugin through the "Plugins" menu in WordPress.
1. Enter valid Mailigen user credentials on the plugin admin page ("Settings" >> "Mailigen Widget").
1. Select a mailing list, preferable input fields.
1. Drag the widget into your sidebar from the "Widgets" menu in WordPress and you're ready to go!
1. Please rate the plugin.

== Frequently Asked Questions ==

= Do I need a Mailigen account? =

Yes, this plugin requires a <a href="http://www.mailigen.com/sign-up" title="Sign up for Mailigen" rel="nofollow">Mailigen account</a>.

= Where is the settings page =

In the WordPress administration, navigate to Settings > Mailigen Widget in the WordPress sidebar. The URL should be `[yoursite.com]/wp-admin/options-general.php?page=settings-mailigen`


== Screenshots ==

1. Just add your Mailigen user credentials.
1. Choose your Mailigen list and prefered fields.
1. Select your Widget Options.
1. The widget displays in your sidebar.


== Changelog ==

= 1.3.5 =
* Ajax request didn't work if IP address is used instead of domain name for the site.

= 1.3.4 =
* Fixed additional `Notice: Undefined index` issues when running Wordpress in DEBUG mode.

= 1.3.3 =
* Updated Mailigen API library
* Fixed `The called constructor method for WP_Widget in Mailigen_Widget is deprecated since version 4.3.0!`
* Fixed `Notice: Undefined index` issues when running Wordpress in DEBUG mode.

= 1.3.2 =
* Fixed old style constructors to support PHP versions >= 5.3.3

= 1.3.1 =
* Changed deprecated PHP functions: split, eregi

= 1.3.0 =
* Added new features (Thanks to Ted Barnett):
 * ability to select list in widget settings
 * ability to allow multiple different signup forms on the site or a single page
* Removed style & script files from being loaded twice in the admin (Thanks to Ted Barnett)
* Removed message that was placed after label when validation error occurred
* Fixed validation for all requried fields
* Changed the placement of asterisk symbol (*) in label for required dropdown, radio and checkbox field

= 1.2.7 =
* Fixed messed up styling on the Widgets page (/wp-admin/widgets.php)

= 1.2.6 =
* Fixed bug when signup was not possible because of error `You must specify a email_address value for the listSubscribe method (#-90)`
* Fixed bug when pressing Submit button loader was half way outside

= 1.2.5 =
* Fixed bug when specific type fields (number, date, address, SMS, website, image) were not shown in the signup form.
* Updated Mailigen API library

= 1.2.4 =
* Fixed bug when plugin slowed down administration page if connection to Mailigen API could not be established.

= 1.2.3 =
* Added `Reset Settings` button in widget settings screen to allow connection with different Mailigen user account.

= 1.2.2 =
* Fixed bug `PHP Warning: Invalid argument supplied for foreach() in /public_html/wp-content/plugins/mailigen-widget/mailigen-widget.php on line 704`

= 1.2.1 =
* Added new features (Thanks to Ted Barnett):
 * multiple subscribe form widgets allowed on one page
 * ability to hide field labels (adds labels inside text fields)

= 1.2.0 =
* Added new features (Thanks to Ted Barnett):
 * ability to collect checkbox, dropdown, and radio fields (user must replicate values on the plugin settings separated by a comma)
 * ability to set a widget description text
 * ability to set a custom Success Message
 * ability to set an optional Redirect URL after submission
 * ability to turn off double opt-in
 * ability to turn off update existing user
 * ability to turn off send welcome email
* Added waiting indicator when user needs to wait for a response from server after pressing subscribe button
* Updated Mailigen API library to version 1.5

= 1.1.2 =
* Fixed bug where the signup form was not working in non-index pages

= 1.1.1 =
* Fixed bug when plugin could not be activated because of a fatal error `Parse error: syntax error, unexpected ':' in ../wp-content/plugins/mailigen-widget/mailigen-widget.php on line 385`. Shorthand form of ternary operator `?:` is available starting from PHP v5.3

= 1.1 =
* First release.


== Upgrade Notice ==

= 1.3.5 =
* Ajax request didn't work if IP address is used instead of domain name for the site.

= 1.3.4 =
* Fixed additional `Notice: Undefined index` issues when running Wordpress in DEBUG mode.

= 1.3.3 =
* Updated Mailigen API library
* Fixed `The called constructor method for WP_Widget in Mailigen_Widget is deprecated since version 4.3.0!`
* Fixed `Notice: Undefined index` issues when running Wordpress in DEBUG mode.

= 1.3.2 =
* Fixed old style constructors to support PHP versions >= 5.3.3

= 1.3.1 =
* Changed deprecated PHP functions: split, eregi

= 1.3.0 =
* Added new features (Thanks to Ted Barnett):
 * ability to select list in widget settings
 * ability to allow multiple different signup forms on the site or a single page
* Removed style & script files from being loaded twice in the admin (Thanks to Ted Barnett)
* Removed message that was placed after label when validation error occurred
* Fixed validation for all requried fields
* Changed the placement of asterisk symbol (*) in label for required dropdown, radio and checkbox field

= 1.2.7 =
* Fixed messed up styling on the Widgets page (/wp-admin/widgets.php)

= 1.2.6 =
* Fixed bug when signup was not possible because of error `You must specify a email_address value for the listSubscribe method (#-90)`
* Fixed bug when pressing Submit button loader was half way outside

= 1.2.5 =
* Fixed bug when specific type fields (number, date, address, SMS, website, image) were not shown in the signup form.
* Updated Mailigen API library

= 1.2.4 =
* Fixed bug when plugin slowed down administration page if connection to Mailigen API could not be established.

= 1.2.3 =
* Added `Reset Settings` button in widget settings screen to allow connection with different Mailigen user account.

= 1.2.2 =
* Fixed bug `PHP Warning: Invalid argument supplied for foreach() in /public_html/wp-content/plugins/mailigen-widget/mailigen-widget.php on line 704`

= 1.2.1 =
* Added new features (Thanks to Ted Barnett):
 * multiple subscribe form widgets allowed on one page
 * ability to hide field labels (adds labels inside text fields)

= 1.2.0 =
* Added new features (Thanks to Ted Barnett):
 * ability to collect checkbox, dropdown, and radio fields (user must replicate values on the plugin settings separated by a comma)
 * ability to set a widget description text
 * ability to set a custom Success Message
 * ability to set an optional Redirect URL after submission
 * ability to turn off double opt-in
 * ability to turn off update existing user
 * ability to turn off send welcome email
* Added waiting indicator when user needs to wait for a response from server after pressing subscribe button
* Updated Mailigen API library to version 1.5

= 1.1.2 =
* Fixed bug where the signup form was not working in non-index pages

= 1.1.1 =
* Fixed bug when plugin could not be activated because of a fatal error `Parse error: syntax error, unexpected ':' in ../wp-content/plugins/mailigen-widget/mailigen-widget.php on line 385`. Shorthand form of ternary operator `?:` is available starting from PHP v5.3

= 1.1 =
* First release.
