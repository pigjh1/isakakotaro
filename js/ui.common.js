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
	var o = $("#navbar");

	if(depth1>=0){
		var d1 = o.find(".d1").eq(depth1);
		d1.addClass("active");
	}
	if(depth2>=0){
		var d2 = d1.find("li").eq(depth2);
		d2.addClass("active");
	}
}

function initQna(){
	var article = $('.qna-list .article');
	article.addClass('hd');
	article.find('.cont').slideUp(100);

	$('.qna-list .article .trigger').click(function(){
		var myArticle = $(this).parents('.article:first');
		if(myArticle.hasClass('hd')){
			article.addClass('hd').removeClass('sh'); // 아코디언 효과를 원치 않으면 이 라인을 지우세요
			article.find('.cont').slideUp(100); // 아코디언 효과를 원치 않으면 이 라인을 지우세요
			myArticle.removeClass('hd').addClass('sh');
			myArticle.find('.cont').slideDown(100);
		} else {
			myArticle.removeClass('sh').addClass('hd');
			myArticle.find('.cont').slideUp(100);
		}
	});

	$('.qna-list .hgroup .trigger').click(function(){
		var hidden = $('.qna-list .article.hd').length;
		if(hidden > 0){
			article.removeClass('hd').addClass('sh');
			article.find('.cont').slideDown(100);
		} else {
			article.removeClass('sh').addClass('hd');
			article.find('.cont').slideUp(100);
		}
	});
}

function initSNS(val){
	var tagname;
	if (val == 1)	{
		tagname="伊坂幸太郎"
	} else if (val == 2)	{
		tagname="이사카코타로"
	} else if (val == 3)	{
		tagname="이사카코타로책장"
	}

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

	grabImages(tagname, 30, access_parameters);
}
