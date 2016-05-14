function load() {
	if (GBrowserIsCompatible()) {
		var map = new GMap2(document.getElementById("map"));
		map.setCenter(new GLatLng(38.304975, 140.932252), 11);

		//コントロールの追加
		ctrlobj = new GLargeMapControl();
		map.addControl(ctrlobj);

		//小さい地図を作成
		map2=new GOverviewMapControl(new GSize(100,100));
		map.addControl(map2);

		//마커 추가
		var marker1 = new GMarker(new GLatLng(38.329375, 140.902309), {title:"이즈미 지역/도호쿠 가쿠인 대학 이즈 캠퍼스"});
		var marker2 = new GMarker(new GLatLng(38.323277, 140.90837), {title:"이즈미 지역/걸음 사카 쵸우"});
		var marker3 = new GMarker(new GLatLng(38.315919, 140.880797), {title:"이즈미 지역/타카 야나기 공원 인근 지하철 고가하"});
		var marker4 = new GMarker(new GLatLng(38.319115, 140.881376), {title:"이즈미 지역/유아텟크장 센다이"});
		var marker5 = new GMarker(new GLatLng(38.328592, 140.885106), {title:"이즈미 지역/양과자점 문구"});
		var marker6 = new GMarker(new GLatLng(38.243978, 140.843568), {title:"야키야마 지역/센다이시 야기야 마 동물 공원"});
		var marker7 = new GMarker(new GLatLng(38.245865, 140.87535), {title:"야키야마 지역/아타고 신사"});
		var marker8 = new GMarker(new GLatLng(38.249055, 140.884426), {title:"야키야마 지역/대접 만 리나"});
		var marker9 = new GMarker(new GLatLng(38.260297, 140.882049), {title:"센다이 역 지역/센다이 역"});
		var marker10 = new GMarker(new GLatLng(38.258246, 140.902547), {title:"센다이 역 지역/풀 캐스트 스타디움 미야기"});
		var marker11 = new GMarker(new GLatLng(38.227324, 140.719109), {title:"센다이 역 지역/아 키우온 천"});
		var marker12 = new GMarker(new GLatLng(38.331608, 140.613496), {title:"센다이 역 지역/사쿠나 미온천"});
		var marker13 = new GMarker(new GLatLng(38.307067, 141.034929), {title:"시오 가마·히가시 마쓰시마 지역/북스 나니와"});
		var marker14 = new GMarker(new GLatLng(38.319443, 141.029763), {title:"시오 가마·히가시 마쓰시마 지역/마린 게이트 시오 가마"});
		var marker15 = new GMarker(new GLatLng(38.360554, 141.157966), {title:"시오 가마·히가시 마쓰시마 지역/노비루 해안"});
		var marker16 = new GMarker(new GLatLng(38.354025, 141.157638), {title:"시오 가마·히가시 마쓰시마 지역/사가 케이 관광 유람선"});
		var marker17 = new GMarker(new GLatLng(38.370212, 141.064309), {title:"시오 가마·히가시 마쓰시마 지역/고 다이도"});
		var marker18 = new GMarker(new GLatLng(38.372122, 141.059999), {title:"시오 가마·히가시 마쓰시마 지역/즈이 간지"});
		var marker19 = new GMarker(new GLatLng(38.369507, 141.061479), {title:"시오 가마·히가시 마쓰시마 지역/관란 정류장"});

		map.addOverlay(marker1);
		map.addOverlay(marker2);
		map.addOverlay(marker3);
		map.addOverlay(marker4);
		map.addOverlay(marker5);
		map.addOverlay(marker6);
		map.addOverlay(marker7);
		map.addOverlay(marker8);
		map.addOverlay(marker9);
		map.addOverlay(marker10);
		map.addOverlay(marker11);
		map.addOverlay(marker12);
		map.addOverlay(marker13);
		map.addOverlay(marker14);
		map.addOverlay(marker15);
		map.addOverlay(marker16);
		map.addOverlay(marker17);
		map.addOverlay(marker18);
		map.addOverlay(marker19);

		//마커 버튼을 눌러서 표시하는 내용（이즈미 지역）
		GEvent.addListener(marker1, "click" , function(){ marker1.openInfoWindowHtml("<div class='gmfbox'><h2 class='gmname'>도호쿠 가쿠인 대학 이즈 캠퍼스</h2><p class='gmdata'><span class='bold'>[アクセス]</span><br />地下鉄센다이 역から地下鉄泉中央駅まで約20分、乗り継ぎ、地下鉄泉中央駅バスプール４番乗り場から<br />宮城交通バス도호쿠 가쿠인 대학 이즈 캠퍼스行き乗車約15分 <br />→ <a href=\"http://www.sentabi.jp/0000/0017/index.php?f=000000170002#iz01\" target=\"_top\">자세히보기</a></p></div>"); });
		GEvent.addListener(marker2, "click" , function(){ marker2.openInfoWindowHtml("<div class='gmfbox'><h2 class='gmname'>걸음 사카 쵸우</h2><p class='gmdata'><span class='bold'>[アクセス]</span><br />도호쿠 가쿠인 대학 이즈 캠퍼스裏門より徒歩約５分<br />→ <a href=\"http://www.sentabi.jp/0000/0017/index.php?f=000000170002#iz02\" target=\"_top\">자세히보기</a></p></div>"); });
		GEvent.addListener(marker3, "click" , function(){ marker3.openInfoWindowHtml("<div class='gmfbox'><h2 class='gmname'>타카 야나기 공원 인근 지하철 고가하</h2><p class='gmdata'><span class='bold'>[アクセス]</span><br />地下鉄泉中央駅から地下鉄八乙女駅約5分、地下鉄八乙女駅より徒歩約10分<br />→ <a href=\"http://www.sentabi.jp/0000/0017/index.php?f=000000170002#iz03\" target=\"_top\">자세히보기</a></p></div>"); });
		GEvent.addListener(marker4, "click" , function(){ marker4.openInfoWindowHtml("<div class='gmfbox'><h2 class='gmname'>유아텟크장 센다이</h2><p class='gmdata'><span class='bold'>[アクセス]</span><br />地下鉄泉中央駅から徒歩約５分<br />→ <a href=\"http://www.sentabi.jp/0000/0017/index.php?f=000000170002#iz04\" target=\"_top\">자세히보기</a></p></div>"); });
		GEvent.addListener(marker5, "click" , function(){ marker5.openInfoWindowHtml("<div class='gmfbox'><h2 class='gmname'>양과자점 문구</h2><p class='gmdata'><span class='bold'>[アクセス]</span><br />地下鉄泉中央駅バスプール６番乗り場から宮城交通バス将監団地行き将監団地入口下車約15分<br />→ <a href=\"http://www.sentabi.jp/0000/0017/index.php?f=000000170002#iz05\" target=\"_top\">자세히보기</a></p></div>"); });
		//마커 버튼을 눌러서 표시하는 내용（야키야마 지역）
		GEvent.addListener(marker6, "click" , function(){ marker6.openInfoWindowHtml("<div class='gmfbox'><h2 class='gmname'>센다이시 야기야 마 동물 공원</h2><p class='gmdata'><span class='bold'>[アクセス]</span><br />센다이 역西口バスプール9番・11番・12番乗り場から仙台市営バス動物公園循環及び動物公園前経由線乗車、<br />八木山動物公園前下車約25分<br />센다이 역西口バスプール12番乗り場から宮城交通バス八木山動物公園経由線乗車、八木山動物公園前下車約25分<br />→ <a href=\"http://www.sentabi.jp/0000/0017/index.php?f=000000170003#ya01\" target=\"_top\">자세히보기</a></p></div>"); });
		GEvent.addListener(marker7, "click" , function(){ marker7.openInfoWindowHtml("<div class='gmfbox'><h2 class='gmname'>아타고 신사</h2><p class='gmdata'><span class='bold'>[アクセス]</span><br />仙台市営バス八木山動物公園前乗車、아타고 신사前下車約10分<br />→ <a href=\"http://www.sentabi.jp/0000/0017/index.php?f=000000170003#ya02\" target=\"_top\">자세히보기</a></p></div>"); });
		GEvent.addListener(marker8, "click" , function(){ marker8.openInfoWindowHtml("<div class='gmfbox'><h2 class='gmname'>대접 만 리나（도시락 가게）</h2><p class='gmdata'><span class='bold'>[アクセス]</span><br />仙台市営バス아타고 신사前乗車、愛宕大橋下車約２分、そこから徒歩で約10分<br />→ <a href=\"http://www.sentabi.jp/0000/0017/index.php?f=000000170003#ya03\" target=\"_top\">자세히보기</a></p></div>"); });
		//마커 버튼을 눌러서 표시하는 내용（센다이 역 지역）
		GEvent.addListener(marker9, "click" , function(){ marker9.openInfoWindowHtml("<div class='gmfbox'><h2 class='gmname'>센다이 역</h2><p class='gmdata'>→ <a href=\"http://www.sentabi.jp/0000/0017/index.php?f=000000170004#s01\" target=\"_top\">자세히보기</a></p></div>"); });
		GEvent.addListener(marker10, "click" , function(){ marker10.openInfoWindowHtml("<div class='gmfbox'><h2 class='gmname'>東北楽天イーグルス「풀 캐스트 스타디움 미야기」</h2><p class='gmdata'><span class='bold'>[アクセス]</span><br />센다이 역東口より徒歩約30分<br />→ <a href=\"http://www.sentabi.jp/0000/0017/index.php?f=000000170004#s02\" target=\"_top\">자세히보기</a></p></div>"); });
		GEvent.addListener(marker11, "click" , function(){ marker11.openInfoWindowHtml("<div class='gmfbox'><h2 class='gmname'>奥州３名湯　아 키우온 천</h2><p class='gmdata'><span class='bold'>[アクセス]</span><br />仙台市内から車で約20分<br />센다이 역西口バスプール８番から宮城交通아 키우온 천行き乗車特急約45分<br />→ <a href=\"http://www.sentabi.jp/0000/0017/index.php?f=000000170004#s03\" target=\"_top\">자세히보기</a></p></div>"); });
		GEvent.addListener(marker12, "click" , function(){ marker12.openInfoWindowHtml("<div class='gmfbox'><h2 class='gmname'>仙台の奥座敷　사쿠나 미온천</h2><p class='gmdata'><span class='bold'>[アクセス]</span><br />仙台市内から車で約30分<br />JR仙山線센다이 역から사쿠나 미온천下車約30分<br />→ <a href=\"http://www.sentabi.jp/0000/0017/index.php?f=000000170004#s04\" target=\"_top\">자세히보기</a></p></div>"); });
		//마커 버튼을 눌러서 표시하는 내용（시오 가마·히가시 마쓰시마 지역）
		GEvent.addListener(marker13, "click" , function(){ marker13.openInfoWindowHtml("<div class='gmfbox'><h2 class='gmname'>북스 나니와（本屋）</h2><p class='gmdata'><span class='bold'>[アクセス]</span><br />JR仙石線센다이 역から本塩釜駅下車約30分、そこから徒歩約30分<br />仙台市内から車で約60分<br />→ <a href=\"http://www.sentabi.jp/0000/0017/index.php?f=000000170005#si01\" target=\"_top\">자세히보기</a></p></div>"); });
		GEvent.addListener(marker14, "click" , function(){ marker14.openInfoWindowHtml("<div class='gmfbox'><h2 class='gmname'>마린 게이트 시오 가마</h2><p class='gmdata'>→ <a href=\"http://www.sentabi.jp/0000/0017/index.php?f=000000170005#si05\" target=\"_top\">자세히보기</a></p></div>"); });
		GEvent.addListener(marker15, "click" , function(){ marker15.openInfoWindowHtml("<div class='gmfbox'><h2 class='gmname'>노비루 해안</h2><p class='gmdata'><span class='bold'>[アクセス]</span><br />JR仙石線센다이 역から野蒜駅下車約60分<br />仙台市内から車で三陸自動車道鳴瀬奥松島IC経由約60分<br />→ <a href=\"http://www.sentabi.jp/0000/0017/index.php?f=000000170005#si02\" target=\"_top\">자세히보기</a></p></div>"); });
		GEvent.addListener(marker16, "click" , function(){ marker16.openInfoWindowHtml("<div class='gmfbox'><h2 class='gmname'>사가 케이 관광 유람선</h2><p class='gmdata'>→ <a href=\"http://www.sentabi.jp/0000/0017/index.php?f=000000170005#si03\" target=\"_top\">자세히보기</a></p></div>"); });
		GEvent.addListener(marker17, "click" , function(){ marker17.openInfoWindowHtml("<div class='gmfbox'><h2 class='gmname'>고 다이도</h2><p class='gmdata'><span class='bold'>[アクセス]</span><br />JR仙石線센다이 역から松島海岸駅下車約40分 <br />→ <a href=\"http://www.sentabi.jp/0000/0017/index.php?f=000000170005#si04\" target=\"_top\">자세히보기</a></p></div>"); });
		GEvent.addListener(marker18, "click" , function(){ marker18.openInfoWindowHtml("<div class='gmfbox'><h2 class='gmname'>즈이 간지</h2><p class='gmdata'><span class='bold'>[アクセス]</span><br />JR仙石線센다이 역から松島海岸駅下車約40分 <br />→ <a href=\"http://www.sentabi.jp/0000/0017/index.php?f=000000170005#si04\" target=\"_top\">자세히보기</a></p></div>"); });
		GEvent.addListener(marker19, "click" , function(){ marker19.openInfoWindowHtml("<div class='gmfbox'><h2 class='gmname'>관란 정류장</h2><p class='gmdata'><span class='bold'>[アクセス]</span><br />JR仙石線센다이 역から松島海岸駅下車約40分 <br />→ <a href=\"http://www.sentabi.jp/0000/0017/index.php?f=000000170005#si04\" target=\"_top\">자세히보기</a></p></div>"); });

		//셀렉트를 선택에서 지도의 표시 위치를 지정
		var selObj = document.getElementById("geoPoint");
		selObj.onchange = function(){
			var gp = this.value;
			if (gp == "") return;
			var x = gp.split(",")[1];
			var y = gp.split(",")[0];
			map.setCenter(new GLatLng(y, x),16);
		}
	}
}