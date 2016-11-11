/*
 * papopup.js
 * @author  pa-bru
 * @version 1.0
 * @url http://pa-bru.fr
 */
(function() {
    /***************************************
     HELPERS :
     ***************************************/
    function extendDefaults(source, properties) {
        var property;
        for (property in properties) {
            if (properties.hasOwnProperty(property)) {
                source[property] = properties[property];
            }
        }
        return source;
    }

    function getElems(elems, ctx){
        return (typeof elems === 'string') ? (ctx || document).querySelectorAll(elems) : [elems];
    }

    /***************************************
     POPUP OBJECT CONSTRUCTOR :
     ***************************************/
    this.PaPopup = function(options) {
        //save popup instance to get the scope :
        var pop = {};
        if(pop.instance) return;
        pop.instance = this;

        function mergeParams(options){
            var defaults = {
                position: "center",
                popElem: ".papopup",
                openAuto: true,
                popHeight: 500,
                popWidth: 500,
                popName: "papopup",
                popOptions: "fullscreen=no",
                popUrl: "http://pa-bru.fr",
                marginTop: null,
                marginLeft: null
            };

            // Create options by extending defaults with the passed in arugments
            if (options && typeof options === "object") {
                pop.instance.options = extendDefaults(defaults, options);
            }
        }
        function init(){
            if(pop.instance.options.marginTop && pop.instance.options.marginLeft){
                pop.instance.setCustomMargin(pop.instance.options.marginTop, pop.instance.options.marginLeft)
            } else{
                pop.instance.setPosition(pop.instance.options.position);
            }
            pop.instance.setPopOptions();

            pop.els = getElems(pop.instance.options.popElem);

            //open Auto handler :
            if(pop.instance.options.openAuto == true){
                for (var i = 0, len = pop.els.length; i < len; i++) {
                    pop.els[i].addEventListener("click", function(e){
                        e.preventDefault();
                        pop.instance.open();
                    }, false);
                }
            }
        }
        mergeParams(options);
        init();
	};


    /***************************************
     POPUP PUBLIC API :
     ***************************************/
    PaPopup.prototype.setPopOptions = function(){
        if(this.options.popOptions){
            this.options.popOptions = "," + this.options.popOptions;
        } else{
            this.options.popOptions = "";
        }
    };

    PaPopup.prototype.setCustomMargin = function(marginTop, marginLeft){
        this.options.marginTop = parseInt(marginTop);
        this.options.marginLeft =  parseInt(marginLeft);
    };

    PaPopup.prototype.setPosition = function(position){
        var screenHeight =  window.screen.height;
        var screenWidth = window.screen.width;
        this.options.popHeight = parseInt(this.options.popHeight);
        this.options.popWidth = parseInt(this.options.popWidth);
        switch(position){
            case "center":
                this.options.marginTop = (screenHeight - this.options.popHeight) /2;
                this.options.marginLeft = (screenWidth - this.options.popWidth) /2;
                break;
            case "top center":
                this.options.marginTop = 0;
                this.options.marginLeft = (screenWidth - this.options.popWidth) /2;
                break;
            case "top left":
                this.options.marginTop = 0;
                this.options.marginLeft = 0;
                break;
            case "top right":
                this.options.marginTop = 0;
                this.options.marginLeft = screenWidth - this.options.popWidth;
                break;
            case "bottom center":
                this.options.marginTop = screenHeight - this.options.popHeight;
                this.options.marginLeft = (screenWidth - this.options.popWidth) /2;
                break;
            case "bottom left":
                this.options.marginTop = screenHeight - this.options.popHeight;
                this.options.marginLeft = 0;
                break;
            case "bottom right":
                this.options.marginTop = screenHeight - this.options.popHeight;
                this.options.marginLeft = screenWidth - this.options.popWidth;
                break;
        }
    };

    PaPopup.prototype.open = function() {
        console.log("open");
        console.log(this);
        this.newWindow = window.open(this.options.popUrl,
            this.options.popName,
            "width="+this.options.popWidth+",height="+this.options.popHeight+",top="+this.options.marginTop+",left="+this.options.marginLeft + this.options.popOptions);
        if (window.focus) {
            this.newWindow.focus();
        }
    };

    PaPopup.prototype.close = function() {
        if(typeof this.newWindow != 'undefined'){
            this.newWindow.close();
        }
    };
}());