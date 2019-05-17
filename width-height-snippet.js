// Source: https://codeandunicorns.com/width-in-browser-js-snippet/


// Correct width in all browsers (JS snippet)

// This is a short JS snippet which is quite hard to find but it works like a charm.
// Basically with help of this JS snippet you get your width of the page correctly
// displayed in old IE6 and IE4 if you need to make it compatible with them or
// android/chrome/other browsers.


function get_width() {
    var myWidth = 0;
    if(document.width) {
    //chrome
    myWidth = document.width;
    } else if( typeof( window.innerWidth ) == 'number' ) {
    //Non-IE
    myWidth = window.innerWidth;
    } else if( document.documentElement && ( document.documentElement.clientWidth) ) {
    //IE 6+ in 'standards compliant mode'
    myWidth = document.documentElement.clientWidth;
    } else if( document.body && ( document.body.clientWidth ) ) {
    //IE 4 compatible
    myWidth = document.body.clientWidth;
    }
    return myWidth;
 }

// And here is another JS snippet which does the same super compatibility except with height now width.


function get_height() {
    var myHeight = 0;
    if(document.height) {
    //chrome
    myHeight = document.height;
    } else if( typeof( window.innerHeight ) == 'number' ) {
    //Non-IE
    myHeight = window.innerHeight;
    } else if(document.documentElement && (document.documentElement.clientHeight)) {
    //IE 6+ in 'standards compliant mode'
    myHeight = document.documentElement.clientHeight;
    } else if(document.body && (document.body.clientHeight)) {
    //IE 4 compatible
    myHeight = document.body.clientHeight;
    }
    return myHeight;
}

// This JS snippets can be quite hard to find so hopefully this helps people who are searching for something like this.
