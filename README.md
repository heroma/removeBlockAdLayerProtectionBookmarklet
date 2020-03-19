# removeBlockAdLayerProtectionBookmarklet
A simple bookmarlet to remove block ad layer protection from sites.

Some sites shows a layer protection to invite you to remove you navigation ad block extension and let them show somes ads. This simple bookmarklet, remove all DOM elements with a z-index value greater than 1.000 and changes the overflow property value from the BODY element to "auto".

Just copy & paste this code on a new bookmark:
```js
  javascript:(function(zIndexLimitValue){[...document.querySelectorAll("*")].map(e=>{if (e.tagName==="BODY"){e.style.overflow = "auto";}var zi=window.getComputedStyle(e).getPropertyValue("z-index");return{element:e,zIndex:(isNaN(zi*1)?0:zi*1)}}).filter(e=>(e.zIndex>zIndexLimitValue)).map(e=>e.element.remove());})(1000);
```

You can change zIndexLimitValue to a greater one if this code removes other important elements just changing the last value.

## Browser compatibility
This code can be adapted removing spread selector (...) and arrow functions (=>) to increase its compatibility with old browsers like IE.
