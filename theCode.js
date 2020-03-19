[...document.querySelectorAll("*")]
	.map(e=>{
		if (e.tagName === "BODY"){
			e.style.overflow = "auto";
		}
		var zi = window.getComputedStyle(e).getPropertyValue("z-index");
		return {
			element: e,
			zIndex : (isNaN(zi*1)?0:zi*1)
		}
	})
	.filter(e=>(e.zIndex>1000))
	.map(e=>e.element.remove());
