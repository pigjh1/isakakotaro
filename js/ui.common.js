/**********************************************************
 * 파일명	:design.js
 * 설명		:디자인용 스크립트
 * 작성자	:김주희
 * 작성일	:2011.05.11
***********************************************************/

$(window).ready(function(){
	setNaviCurrentDepth();

});

function setNaviCurrentDepth(){
	var currentDepth;

	if(typeof setCurrentDepth != "function"){
		currentDepth = String(00);
	} else {
		currentDepth = String(setCurrentDepth());
	}

	var depth1 = parseInt(currentDepth.charAt(0))-1;
	var depth2 = parseInt(currentDepth.substr(1,1))-1;

	if(depth1>=0){
		var o = $("nav");
		var d1 = o.find("li").eq(depth1);
		d1.addClass("active");
	}
}



function inifSNS(){
	// instagram
	var access_token = "16384709.6ac06b4.49b97800d7fd4ac799a2c889f50f2587",
	access_parameters = {
		access_token: access_token
	};

	function grabImages(tag, count, access_parameters) {
		var instagramUrl = 'https://api.instagram.com/v1/tags/' + tag + '/media/recent?callback=?&count=' + count;
		$.getJSON(instagramUrl, access_parameters, onDataLoaded);
	}

	function onDataLoaded(instagram_data) {
		var target = $("#target");
		//console.log(instagram_data);
		if (instagram_data.meta.code == 200) {
			var photos = instagram_data.data;
			//console.log(photos);
			if (photos.length > 0) {
				target.empty();
				for (var key in photos) {
					var photo = photos[key];
					target.append('<a href="' + photo.link + '" target="INSTA"><img src="' + photo.images.thumbnail.url + '"></a>')
				}
			} else {
				target.html("nothing found");
			}
		} else {
			var error = instagram_data.meta.error_message;
			target.html(error);
		}
	}

	grabImages('伊坂幸太郎', 30, access_parameters);
}