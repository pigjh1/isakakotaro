function load() {
	if (GBrowserIsCompatible()) {
		var map = new GMap2(document.getElementById("map"));
		map.setCenter(new GLatLng(38.263254, 140.872579), 15);

		//コントロールの追加
		ctrlobj = new GLargeMapControl();
		map.addControl(ctrlobj);

		//小さい地図を作成
		map2=new GOverviewMapControl(new GSize(100,100));
		map.addControl(map2);

		//마커 추가
		var marker1 = new GMarker(new GLatLng(38.260305, 140.872595), {title:"센다이 시내 중심부/후지사키"});
		var marker2 = new GMarker(new GLatLng(38.262196, 140.87202), {title:"센다이 시내 중심부/센다이 포라스"});
		var marker3 = new GMarker(new GLatLng(38.26217, 140.87006), {title:"센다이 시내 중심부/정선사통"});
		var marker4 = new GMarker(new GLatLng(38.266946, 140.871798), {title:"센다이 시내 중심부/고토 다이 공원"});
		var marker5 = new GMarker(new GLatLng(38.265982, 140.863987), {title:"가볼만한 spot/ＳＥＮＤＡＩ　ＫＯＦＦＥＥ"});
		var marker6 = new GMarker(new GLatLng(38.261613, 140.872139), {title:"가볼만한 spot/Lindenbaum"});
		var marker7 = new GMarker(new GLatLng(38.256249, 140.923865), {title:"郊外/오로시 마치"});
		var marker8 = new GMarker(new GLatLng(38.269307, 140.966816), {title:"郊外/토호쿠 후생 연금 병원"});
		var marker9 = new GMarker(new GLatLng(38.342755, 140.838104), {title:"郊外/센다이 로열 파크 호텔"});
		var marker10 = new GMarker(new GLatLng(38.257269, 140.764037), {title:"郊外/ヒルサイドショップス＆アウトレット"});
		var marker11 = new GMarker(new GLatLng(38.34237, 140.865652), {title:"가볼만한 spot/Ｂａl Ｍｕｓｅｔｔｅ"});
		var marker12 = new GMarker(new GLatLng(38.267529, 140.777518), {title:"가볼만한 spot/Ｐａｔｉｓｓｅｒｉｅ　ｍｏｎｃｈｅｒ"});
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

		//마커 버튼을 눌러서 표시하는 내용（센다이 시내 중심부）
		GEvent.addListener(marker1, "click" , function(){ marker1.openInfoWindowHtml("<div class='gmfbox'><h2 class='gmname'>후지사키</h2><p class='gmdata'><span class='bold'>[住所]</span><br />仙台市青葉区一番町3-2-17</p></div>"); });
		GEvent.addListener(marker2, "click" , function(){ marker2.openInfoWindowHtml("<div class='gmfbox'><h2 class='gmname'>센다이 포라스</h2><p class='gmdata'><span class='bold'>[住所]</span><br />仙台市青葉区一番町3-11-15</p></div>"); });
		GEvent.addListener(marker3, "click" , function(){ marker3.openInfoWindowHtml("<div class='gmfbox'><h2 class='gmname'>정선사통</h2><p class='gmdata'><span class='bold'>[住所]</span><br />仙台市青葉区立町</p></div>"); });
		GEvent.addListener(marker4, "click" , function(){ marker4.openInfoWindowHtml("<div class='gmfbox'><h2 class='gmname'>고토 다이 공원</h2><p class='gmdata'><span class='bold'>[住所]</span><br />仙台市青葉区本町3丁目</p></div>"); });
		//마커 버튼을 눌러서 표시하는 내용（立ち寄り　센다이 시내 중심부）
		GEvent.addListener(marker5, "click" , function(){ marker5.openInfoWindowHtml("<div class='gmfbox'><h2 class='gmname'>ＳＥＮＤＡＩ　ＫＯＦＦＥＥ<br />（センダイコーヒー）</h2><p class='gmdata'><span class='bold'>[住所]</span><br />仙台市青葉区春日町４－２５<br />パストラルハイム春日町１Ｆ</p></div>"); });
		GEvent.addListener(marker6, "click" , function(){ marker6.openInfoWindowHtml("<div class='gmfbox'><h2 class='gmname'>Lindenbaum<br />（リンデンバウム）</h2><p class='gmdata'><span class='bold'>[住所]</span><br />仙台市青葉区一番町３－１１－２７<br />かねはち一番町ビル３Ｆ</p></div>"); });
		//마커 버튼을 눌러서 표시하는 내용（郊外）
		GEvent.addListener(marker7, "click" , function(){ marker7.openInfoWindowHtml("<div class='gmfbox'><h2 class='gmname'>오로시 마치</h2><p class='gmdata'><span class='bold'>[住所]</span><br />仙台市若林区오로시 마치2丁目</p></div>"); });
		GEvent.addListener(marker8, "click" , function(){ marker8.openInfoWindowHtml("<div class='gmfbox'><h2 class='gmname'>토호쿠 후생 연금 병원</h2><p class='gmdata'><span class='bold'>[住所]</span><br />仙台市宮城野区福室1-12-1</p></div>"); });
		GEvent.addListener(marker9, "click" , function(){ marker9.openInfoWindowHtml("<div class='gmfbox'><h2 class='gmname'>센다이 로열 파크 호텔</h2><p class='gmdata'><span class='bold'>[住所]</span><br />仙台市泉区寺岡6-2-1</p></div>"); });
		GEvent.addListener(marker10, "click" , function(){ marker10.openInfoWindowHtml("<div class='gmfbox'><h2 class='gmname'>ヒルサイドショップス＆アウトレット</h2><p class='gmdata'><span class='bold'>[住所]</span><br />仙台市青葉区錦ヶ丘1-3-1</p></div>"); });
		//마커 버튼을 눌러서 표시하는 내용（立ち寄り　郊外）
		GEvent.addListener(marker11, "click" , function(){ marker11.openInfoWindowHtml("<div class='gmfbox'><h2 class='gmname'>Ｂａl Ｍｕｓｅｔｔｅ<br />（バル　ミュゼット）</h2><p class='gmdata'><span class='bold'>[住所]</span><br />仙台市泉区桂4－5－2</p></div>"); });
		GEvent.addListener(marker12, "click" , function(){ marker12.openInfoWindowHtml("<div class='gmfbox'><h2 class='gmname'>Ｐａｔｉｓｓｅｒｉｅ　ｍｏｎｃｈｅｒ<br>（パティスリーモンシェル）</h2><p class='gmdata'><span class='bold'>[住所]</span><br />仙台市青葉区栗生7-1-4<br>　　　みやぎ生協新愛子店敷地内</p></div>"); });

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