function load() {
	if (GBrowserIsCompatible()) {
		var map = new GMap2(document.getElementById("map"));
		map.setCenter(new GLatLng(38.230629, 140.8255), 10);

		//コントロールの追加
		ctrlobj = new GLargeMapControl();
		map.addControl(ctrlobj);

		//小さい地図を作成
		map2=new GOverviewMapControl(new GSize(100,100));
		map.addControl(map2);

		//마커 추가
		var marker1 = new GMarker(new GLatLng(38.134531, 140.481218), {title:"자오 지역/자오 에코 라인"});
		var marker2 = new GMarker(new GLatLng(38.126287, 140.52909), {title:"자오 지역/미야기 자오 스키장 사는 껍질 스노 파크"});
		var marker3 = new GMarker(new GLatLng(38.254383, 140.872067), {title:"센다이 시거리 영역/토호쿠 대학"});
		var marker4 = new GMarker(new GLatLng(38.26376, 140.855022), {title:"센다이 시거리 영역/미야기 현 미술관"});
		var marker5 = new GMarker(new GLatLng(38.261285, 140.873461), {title:"센다이 시거리 영역/브라은도ー도 이치발쵸·산모루 이치발쵸"});
		var marker6 = new GMarker(new GLatLng(38.257977, 140.868603), {title:"센다이 시거리 영역/MEALS"});
		var marker7 = new GMarker(new GLatLng(38.26601, 140.869059), {title:"센다이 시거리 영역/Bar Lounge欅 ～zelkova～"});
		var marker8 = new GMarker(new GLatLng(38.322565, 140.886598), {title:"센다이 시 외곽 지역/이즈미 츄오 욘초메 공원"});
		var marker9 = new GMarker(new GLatLng(38.323246, 140.881988), {title:"센다이 시 외곽 지역/이즈미 츄오 보행자 데크"});
		var marker10 = new GMarker(new GLatLng(38.26369, 140.898057), {title:"센다이 시 외곽 지역/하라 마치 상가"});
		var marker11 = new GMarker(new GLatLng(38.235209, 140.876841), {title:"센다이 시 외곽 지역/미야기 현 제삼 여자 고등 학교"});
		var marker12 = new GMarker(new GLatLng(38.286064, 141.005811), {title:"연안 지역/다가죠우 스타렌"});
		var marker13 = new GMarker(new GLatLng(38.381218, 141.068974), {title:"연안 지역/마쓰시마 정 사무소"});
		var marker14 = new GMarker(new GLatLng(38.295631, 141.077599), {title:"연안 지역/시치가 하마 마치 오모테 하마"});
		var marker15 = new GMarker(new GLatLng(38.121625, 140.578555), {title:"가볼만한 spot[蔵王]/도갓타 호텔 씨성 정자"});
		var marker16 = new GMarker(new GLatLng(38.049863, 140.653928), {title:"가볼만한 spot[蔵王]/타카노 본점"});
		var marker17 = new GMarker(new GLatLng(38.255956, 140.85667), {title:"가볼만한 spot[센다이 시 교외]/센다이시 박물관"});
		var marker18 = new GMarker(new GLatLng(38.267832, 140.862406), {title:"가볼만한 spot[센다이 시 교외]/귤 꽃과"});
		var marker19 = new GMarker(new GLatLng(38.323567, 140.882184), {title:"가볼만한 spot[센다이 시 교외]/SELVA"});
		var marker20 = new GMarker(new GLatLng(38.319023, 140.885898), {title:"가볼만한 spot[센다이 시 교외]/두 기둥 신사"});
		var marker21 = new GMarker(new GLatLng(38.372182, 141.059601), {title:"가볼만한 spot[연안부]/즈이 간지"});
		var marker22 = new GMarker(new GLatLng(38.370121, 141.065556), {title:"가볼만한 spot[연안부]/송도 섬 순회 관광선 기업 조합"});
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
		map.addOverlay(marker20);
		map.addOverlay(marker21);
		map.addOverlay(marker22);

		//마커 버튼을 눌러서 표시하는 내용（자오 지역）
		GEvent.addListener(marker1, "click" , function(){ marker1.openInfoWindowHtml("<div class='gmfbox'><h2 class='gmname'>자오 에코 라인</h2><p class='gmdata'><span class='bold'>[住所]</span><br />宮城県刈田郡蔵王町</p></div>"); });
		GEvent.addListener(marker2, "click" , function(){ marker2.openInfoWindowHtml("<div class='gmfbox'><h2 class='gmname'>미야기 자오 스키장 사는 껍질 스노 파크</h2><p class='gmdata'><span class='bold'>[住所]</span><br />宮城県刈田郡蔵王町遠刈田温泉字倉石岳国有林内</p></div>"); });
		//마커 버튼을 눌러서 표시하는 내용（센다이 시거리 영역）
		GEvent.addListener(marker3, "click" , function(){ marker3.openInfoWindowHtml("<div class='gmfbox'><h2 class='gmname'>토호쿠 대학</h2><p class='gmdata'><span class='bold'>[住所]</span><br />仙台市青葉区片平、川内など</p></div>"); });
		GEvent.addListener(marker4, "click" , function(){ marker4.openInfoWindowHtml("<div class='gmfbox'><h2 class='gmname'>미야기 현 미술관</h2><p class='gmdata'><span class='bold'>[住所]</span><br />仙台市青葉区川内元支倉34-1</p></div>"); });
		GEvent.addListener(marker5, "click" , function(){ marker5.openInfoWindowHtml("<div class='gmfbox'><h2 class='gmname'>브라은도ー도 이치발쵸·산모루 이치발쵸</h2><p class='gmdata'><span class='bold'>[住所]</span><br />仙台市青葉区一番町3丁目</p></div>"); });
		GEvent.addListener(marker6, "click" , function(){ marker6.openInfoWindowHtml("<div class='gmfbox'><h2 class='gmname'>MEALS</h2><p class='gmdata'><span class='bold'>[住所]</span><br />仙台市青葉区片平1-1-11 片平ビル 1F</p></div>"); });
		GEvent.addListener(marker7, "click" , function(){ marker7.openInfoWindowHtml("<div class='gmfbox'><h2 class='gmname'>Bar Lounge欅 ～zelkova～</h2><p class='gmdata'><span class='bold'>[住所]</span><br />仙台市青葉区国分町3丁目2-3<br />仙台プレイスハンズビル10Ｆ</p></div>"); });
		//마커 버튼을 눌러서 표시하는 내용（센다이 시 외곽 지역）
		GEvent.addListener(marker8, "click" , function(){ marker8.openInfoWindowHtml("<div class='gmfbox'><h2 class='gmname'>이즈미 츄오 욘초메 공원</h2><p class='gmdata'><span class='bold'>[住所]</span><br />仙台市泉区泉中央4丁目22-1</p></div>"); });
		GEvent.addListener(marker9, "click" , function(){ marker9.openInfoWindowHtml("<div class='gmfbox'><h2 class='gmname'>이즈미 츄오 보행자 데크</h2><p class='gmdata'><span class='bold'>[住所]</span><br />仙台市泉区泉中央</p></div>"); });
		GEvent.addListener(marker10, "click" , function(){ marker10.openInfoWindowHtml("<div class='gmfbox'><h2 class='gmname'>하라 마치 상가</h2><p class='gmdata'><span class='bold'>[住所]</span><br />仙台市宮城野区原町</p></div>"); });
		GEvent.addListener(marker11, "click" , function(){ marker11.openInfoWindowHtml("<div class='gmfbox'><h2 class='gmname'>미야기 현 제삼 여자 고등 학교</h2><p class='gmdata'><span class='bold'>[住所]</span><br />仙台市太白区門前町9-2</p></div>"); });
		//마커 버튼을 눌러서 표시하는 내용（연안 지역）
		GEvent.addListener(marker12, "click" , function(){ marker12.openInfoWindowHtml("<div class='gmfbox'><h2 class='gmname'>다가죠우 스타렌</h2><p class='gmdata'><span class='bold'>[住所]</span><br />多賀城市町前2-3-16</p></div>"); });
		GEvent.addListener(marker13, "click" , function(){ marker13.openInfoWindowHtml("<div class='gmfbox'><h2 class='gmname'>마쓰시마 정 사무소</h2><p class='gmdata'><span class='bold'>[住所]</span><br />宮城郡松島町高城字町10</p></div>"); });
		GEvent.addListener(marker14, "click" , function(){ marker14.openInfoWindowHtml("<div class='gmfbox'><h2 class='gmname'>시치가 하마 마치 오모테 하마</h2><p class='gmdata'><span class='bold'>[住所]</span><br />七ヶ浜町</p></div>"); });
		//마커 버튼을 눌러서 표시하는 내용（立ち寄り　자오 지역）
		GEvent.addListener(marker15, "click" , function(){ marker15.openInfoWindowHtml("<div class='gmfbox'><h2 class='gmname'>도갓타 호텔 씨성 정자</h2><p class='gmdata'><span class='bold'>[住所]</span><br />蔵王町遠刈田温泉東裏30</p></div>"); });
		GEvent.addListener(marker16, "click" , function(){ marker16.openInfoWindowHtml("<div class='gmfbox'><h2 class='gmname'>타카노 본점</h2><p class='gmdata'><span class='bold'>[住所]</span><br />刈田郡蔵王町宮字馬場21</p></div>"); });
		//마커 버튼을 눌러서 표시하는 내용（立ち寄り　센다이 시거리 영역）
		GEvent.addListener(marker17, "click" , function(){ marker17.openInfoWindowHtml("<div class='gmfbox'><h2 class='gmname'>센다이시 박물관</h2><p class='gmdata'><span class='bold'>[住所]</span><br />1青葉区川内26</p></div>"); });
		GEvent.addListener(marker18, "click" , function(){ marker18.openInfoWindowHtml("<div class='gmfbox'><h2 class='gmname'>귤 꽃과</h2><p class='gmdata'><span class='bold'>[住所]</span><br />仙台市青葉区支倉町2-51</p></div>"); });
		//마커 버튼을 눌러서 표시하는 내용（立ち寄り　센다이 시 외곽 지역）
		GEvent.addListener(marker19, "click" , function(){ marker19.openInfoWindowHtml("<div class='gmfbox'><h2 class='gmname'>SELVA</h2><p class='gmdata'><span class='bold'>[住所]</span><br />仙台市泉区泉中央1-4-1</p></div>"); });
		GEvent.addListener(marker20, "click" , function(){ marker20.openInfoWindowHtml("<div class='gmfbox'><h2 class='gmname'>두 기둥 신사</h2><p class='gmdata'><span class='bold'>[住所]</span><br />仙台市泉区市名坂字西裏61</p></div>"); });
		//마커 버튼을 눌러서 표시하는 내용（立ち寄り　연안 지역）
		GEvent.addListener(marker21, "click" , function(){ marker21.openInfoWindowHtml("<div class='gmfbox'><h2 class='gmname'>즈이 간지</h2><p class='gmdata'><span class='bold'>[住所]</span><br />宮城郡松島町松島字町内91</p></div>"); });
		GEvent.addListener(marker22, "click" , function(){ marker22.openInfoWindowHtml("<div class='gmfbox'><h2 class='gmname'>송도 섬 순회 관광선 기업 조합</h2><p class='gmdata'><span class='bold'>[住所]</span><br />宮城郡松島町松島字町内85</p></div>"); });

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