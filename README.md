# Papopup

## Presentation

Papopup is a plugin made purely in javascript to display and manage popups on multiple elements.

### A JavaScript popup manager

* Lightweight
* No dependencies
* Display a single popup from multiple elements

**The normal version of Papopup does not require jQuery**

## Usage

**PaPopup** can be bound to an html element or even several elements :

```html
<input type="text" id="datepicker">
```

Add the JavaScript to the end of your document:

```html
<script src="papopup.js"></script>
<script>
    var pop = new PaPopup({
                popElem: ".papopup",
                popUrl: "http://pa-bru.fr"
              });
</script>
```

On click on one the concerned html element the popup is opened.

**To prevent the default event behavior set openAuto to false !**

=> you can trigger the opening of the window with `pop.open()`

## Configuration

* `popElem` : (default `.papopup`) bind the popup to every selected element (eg: `popElem: ".popups"`)
* `popUrl` : URL of the new window to open in a popup
* `position` : (default `center`) The position of the popup on the screen
  * center
  * top center
  * top left
  * top right
  * bottom center
  * bottom left
  * bottom right
* `openAuto` : (default `true`) Define or not the default event to open the popup (onclick)
* `popName` : (default `papopup`) Specifies the name of the window
* `marginTop` : (default `null`) Define the top position of the window
  * in pixels
  * Override the `position` property
  * Negative values not allowed
  * You must also set the `marginLeft` property
* `marginLeft` : (default `null`) Define the width of the window
  * in pixels
  * Override the `position` property
  * Negative values not allowed
  * You must also set the `marginTop` property
* `popHeight` : (default `500`) Define the height of the window
  * Min. value is 100
* `popWidth` : (default `500`) Define the height of the window
  * Min. value is 100
* `popOptions` : (default `null`) A comma-separated list of items (no whitespaces) defining the options of the window. 
  eg: `menubar=yes,status=no`
  * `menubar=yes|no|1|0` : Whether or not to display the menu bar
  * `status=yes|no|1|0` : Whether or not to add a status bar
  * `titlebar=yes|no|1|0` : Whether or not to display the title bar. Ignored unless the calling application is an HTML Application or a trusted dialog box


## Releases

**v1.0 :**
* Initial Version


## Author

* Paul-Adrien Bru [My Website][portfolio], [Linkedin][linkedin]

Copyright © 2016 Paul-Adrien Bru | MIT license

  [portfolio]: http://pa-bru.fr "Visit My Portfolio"  
  [linkedin]: https://fr.linkedin.com/in/pauladrienbru "Visit My Linkedin"
