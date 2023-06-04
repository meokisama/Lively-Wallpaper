function livelyPropertyListener(name, val){
	switch(name) {
		case "scene":
			var indexItems = ['index1.html', 'index2.html', 'index3.html', 'index4.html', 'index5.html'];

			if(!window.location.href.includes(indexItems[val]))
			{
				window.location.replace(indexItems[val]);
			}
			break;  
	}
}