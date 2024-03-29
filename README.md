# PaPopup

## Presentation

PaPopup is a plugin made purely in javascript to display and manage popups on multiple elements.

[**Demo & Doc→**][papopup]

### A JavaScript popup manager

* Lightweight
* No dependencies
* Display a single popup from multiple elements

**The normal version of PaPopup does not require jQuery**

## Usage

### Basic Usage

**PaPopup** can be bound to an html element or even several elements :

```html
<div class="papopup">click me to open popup</div>
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

### Open popup after init on PaPopup

**To prevent the default event behavior (which is onClick on a popElem) set openAuto to false !**

=> you can trigger the opening of the window with `pop.open()`

```javascript
var pop = new PaPopup({
		openAuto: false, //you must create your own event handler to open the popup 
                popElem: ".papopup",
                popUrl: "http://pa-bru.fr"
});

/*code*/

popElem.addEventListener("click", function(e){
                        e.preventDefault();
                        pop.open(); // now you open the popup
}, false);
```

### Close a popup

```html
<div class="openPop">click me to open popup</div>
<div class="closePop">click me to close popup</div>
<script>
	var pop = new PaPopup({
			openAuto: true,
			popElem: ".openPop",
			popUrl: "http://pa-bru.fr"
	});

	/*the popup is opened on click on elements having class openPop*/

	var closePop = document.querySelectorAll(".closePop");
	closePop.addEventListener("click", function(e){
				e.preventDefault();
				pop.close(); // close the popup
	}, false);
</script>
```

### Triggered events

* onOpen : you can call a function you want when the popup opens

```javascript
var pop = new PaPopup({
	popElem: ".papopup",
	popUrl: "http://pa-bru.fr",
	onOpen: function() {
		console.log('run my onOpen callback function');
	}
});
```

* onClose : you can call a function you want when the popup closes

```javascript
var pop = new PaPopup({
	popElem: ".papopup",
	popUrl: "http://pa-bru.fr",
	onClose: function() {
		console.log('run my onClose callback function');
	}
});
```


## Setters

**You can add/remove/change properties of the papopup object after the init !**


* Define the position of the popup on the screen (more details in Properties topic)
```javascript
pop.setPosition("a position");
```

* Define a custom position of the popup on the screen with pixels (more details in Properties topic)
```javascript
pop.setCustomMargin(marginTop, marginLeft);
```

* Define the options of the window (more details in Properties topic)
```javascript
pop.setPopOptions("options");
```

* Specify a callback function to call when the popup opens (more details in Properties topic)
```javascript
pop.setOnOpen(callback);
```

* Specify a callback function to call when the popup closes (more details in Properties topic)
```javascript
pop.setOnClose(callback);
```

## Properties

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
* `onOpen` : (default `null`) A function you want to call when the popup opens.
* `onClose` : (default `null`) A function you want to call when the popup closes.


## Releases

**v1.0 :**
* Initial Version


## Author

* Paul-Adrien Bru [Linkedin][linkedin]

Copyright © 2016 Paul-Adrien Bru | MIT license
 
  [linkedin]: https://fr.linkedin.com/in/pauladrienbru "Visit My Linkedin"
  [papopup]: https://pa-bru.github.io/PaPopup/ "Demo and Doc of PaPopup"
