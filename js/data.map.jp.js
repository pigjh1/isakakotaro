function load() {
	if (GBrowserIsCompatible()) {
		var map = new GMap2(document.getElementById("map"));
		map.setCenter(new GLatLng(38.263254, 140.872579), 15);

		ctrlobj = new GLargeMapControl();
		map.addControl(ctrlobj);

		map2 = new GOverviewMapControl(new GSize(100,100));
		map.addControl(map2);

		// 집오리와 들오리의 코인로커
		var marker1_1 = new GMarker(new GLatLng(38.134531, 140.481218), {title:"蔵王エリア/蔵王エコーライン"});
		var marker1_2 = new GMarker(new GLatLng(38.126287, 140.52909), {title:"蔵王エリア/みやぎ蔵王スキー場すみかわスノーパーク"});
		var marker1_3 = new GMarker(new GLatLng(38.254383, 140.872067), {title:"仙台市街エリア/東北大学"});
		var marker1_4 = new GMarker(new GLatLng(38.26376, 140.855022), {title:"仙台市街エリア/宮城県美術館"});
		var marker1_5 = new GMarker(new GLatLng(38.261285, 140.873461), {title:"仙台市街エリア/ぶらんどーむ一番町・サンモール一番町"});
		var marker1_6 = new GMarker(new GLatLng(38.257977, 140.868603), {title:"仙台市街エリア/MEALS"});
		var marker1_7 = new GMarker(new GLatLng(38.26601, 140.869059), {title:"仙台市街エリア/Bar Lounge欅 ～zelkova～"});
		var marker1_8 = new GMarker(new GLatLng(38.322565, 140.886598), {title:"仙台市郊外エリア/泉中央四丁目公園"});
		var marker1_9 = new GMarker(new GLatLng(38.323246, 140.881988), {title:"仙台市郊外エリア/泉中央ペデストリアンデッキ"});
		var marker1_10 = new GMarker(new GLatLng(38.26369, 140.898057), {title:"仙台市郊外エリア/原町商店街"});
		var marker1_11 = new GMarker(new GLatLng(38.235209, 140.876841), {title:"仙台市郊外エリア/宮城県第三女子高等学校"});
		var marker1_12 = new GMarker(new GLatLng(38.286064, 141.005811), {title:"沿岸部エリア/多賀城スターレーン"});
		var marker1_13 = new GMarker(new GLatLng(38.381218, 141.068974), {title:"沿岸部エリア/松島町役場"});
		var marker1_14 = new GMarker(new GLatLng(38.295631, 141.077599), {title:"沿岸部エリア/七ヶ浜町　表浜"});
		var marker1_15 = new GMarker(new GLatLng(38.121625, 140.578555), {title:"立ち寄りspot[蔵王]/遠刈田ホテル　さんさ亭"});
		var marker1_16 = new GMarker(new GLatLng(38.049863, 140.653928), {title:"立ち寄りspot[蔵王]/高野本店"});
		var marker1_17 = new GMarker(new GLatLng(38.255956, 140.85667), {title:"立ち寄りspot[仙台市街]/仙台市博物館"});
		var marker1_18 = new GMarker(new GLatLng(38.267832, 140.862406), {title:"立ち寄りspot[仙台市街]/たちばなや"});
		var marker1_19 = new GMarker(new GLatLng(38.323567, 140.882184), {title:"立ち寄りspot[仙台市郊外]/SELVA"});
		var marker1_20 = new GMarker(new GLatLng(38.319023, 140.885898), {title:"立ち寄りspot[仙台市郊外]/二柱神社"});
		var marker1_21 = new GMarker(new GLatLng(38.372182, 141.059601), {title:"立ち寄りspot[沿岸部]/瑞巌寺"});
		var marker1_22 = new GMarker(new GLatLng(38.370121, 141.065556), {title:"立ち寄りspot[沿岸部]/松島島巡り観光船企業組合"});

		map.addOverlay(marker1_1);
		map.addOverlay(marker1_2);
		map.addOverlay(marker1_3);
		map.addOverlay(marker1_4);
		map.addOverlay(marker1_5);
		map.addOverlay(marker1_6);
		map.addOverlay(marker1_7);
		map.addOverlay(marker1_8);
		map.addOverlay(marker1_9);
		map.addOverlay(marker1_10);
		map.addOverlay(marker1_11);
		map.addOverlay(marker1_12);
		map.addOverlay(marker1_13);
		map.addOverlay(marker1_14);
		map.addOverlay(marker1_15);
		map.addOverlay(marker1_16);
		map.addOverlay(marker1_17);
		map.addOverlay(marker1_18);
		map.addOverlay(marker1_19);
		map.addOverlay(marker1_20);
		map.addOverlay(marker1_21);
		map.addOverlay(marker1_22);

		GEvent.addListener(marker1_1, "click" , function(){ marker1_1.openInfoWindowHtml("<div class='gmfbox'><h2 class='gmname'>蔵王エコーライン</h2><p class='gmdata'><span class='bold'>[住所]</span><br />宮城県刈田郡蔵王町</p></div>"); });
		GEvent.addListener(marker1_2, "click" , function(){ marker1_2.openInfoWindowHtml("<div class='gmfbox'><h2 class='gmname'>みやぎ蔵王スキー場すみかわスノーパーク</h2><p class='gmdata'><span class='bold'>[住所]</span><br />宮城県刈田郡蔵王町遠刈田温泉字倉石岳国有林内</p></div>"); });
		GEvent.addListener(marker1_3, "click" , function(){ marker1_3.openInfoWindowHtml("<div class='gmfbox'><h2 class='gmname'>東北大学</h2><p class='gmdata'><span class='bold'>[住所]</span><br />仙台市青葉区片平、川内など</p></div>"); });
		GEvent.addListener(marker1_4, "click" , function(){ marker1_4.openInfoWindowHtml("<div class='gmfbox'><h2 class='gmname'>宮城県美術館</h2><p class='gmdata'><span class='bold'>[住所]</span><br />仙台市青葉区川内元支倉34-1</p></div>"); });
		GEvent.addListener(marker1_5, "click" , function(){ marker1_5.openInfoWindowHtml("<div class='gmfbox'><h2 class='gmname'>ぶらんどーむ一番町・サンモール一番町</h2><p class='gmdata'><span class='bold'>[住所]</span><br />仙台市青葉区一番町3丁目</p></div>"); });
		GEvent.addListener(marker1_6, "click" , function(){ marker1_6.openInfoWindowHtml("<div class='gmfbox'><h2 class='gmname'>MEALS</h2><p class='gmdata'><span class='bold'>[住所]</span><br />仙台市青葉区片平1-1-11 片平ビル 1F</p></div>"); });
		GEvent.addListener(marker1_7, "click" , function(){ marker1_7.openInfoWindowHtml("<div class='gmfbox'><h2 class='gmname'>Bar Lounge欅 ～zelkova～</h2><p class='gmdata'><span class='bold'>[住所]</span><br />仙台市青葉区国分町3丁目2-3<br />仙台プレイスハンズビル10Ｆ</p></div>"); });
		GEvent.addListener(marker1_8, "click" , function(){ marker1_8.openInfoWindowHtml("<div class='gmfbox'><h2 class='gmname'>泉中央四丁目公園</h2><p class='gmdata'><span class='bold'>[住所]</span><br />仙台市泉区泉中央4丁目22-1</p></div>"); });
		GEvent.addListener(marker1_9, "click" , function(){ marker1_9.openInfoWindowHtml("<div class='gmfbox'><h2 class='gmname'>泉中央ペデストリアンデッキ</h2><p class='gmdata'><span class='bold'>[住所]</span><br />仙台市泉区泉中央</p></div>"); });
		GEvent.addListener(marker1_10, "click" , function(){ marker1_10.openInfoWindowHtml("<div class='gmfbox'><h2 class='gmname'>原町商店街</h2><p class='gmdata'><span class='bold'>[住所]</span><br />仙台市宮城野区原町</p></div>"); });
		GEvent.addListener(marker1_11, "click" , function(){ marker1_11.openInfoWindowHtml("<div class='gmfbox'><h2 class='gmname'>宮城県第三女子高等学校</h2><p class='gmdata'><span class='bold'>[住所]</span><br />仙台市太白区門前町9-2</p></div>"); });
		GEvent.addListener(marker1_12, "click" , function(){ marker1_12.openInfoWindowHtml("<div class='gmfbox'><h2 class='gmname'>多賀城スターレーン</h2><p class='gmdata'><span class='bold'>[住所]</span><br />多賀城市町前2-3-16</p></div>"); });
		GEvent.addListener(marker1_13, "click" , function(){ marker1_13.openInfoWindowHtml("<div class='gmfbox'><h2 class='gmname'>松島町役場</h2><p class='gmdata'><span class='bold'>[住所]</span><br />宮城郡松島町高城字町10</p></div>"); });
		GEvent.addListener(marker1_14, "click" , function(){ marker1_14.openInfoWindowHtml("<div class='gmfbox'><h2 class='gmname'>七ヶ浜町　表浜</h2><p class='gmdata'><span class='bold'>[住所]</span><br />七ヶ浜町</p></div>"); });
		GEvent.addListener(marker1_15, "click" , function(){ marker1_15.openInfoWindowHtml("<div class='gmfbox'><h2 class='gmname'>遠刈田ホテル　さんさ亭</h2><p class='gmdata'><span class='bold'>[住所]</span><br />蔵王町遠刈田温泉東裏30</p></div>"); });
		GEvent.addListener(marker1_16, "click" , function(){ marker1_16.openInfoWindowHtml("<div class='gmfbox'><h2 class='gmname'>高野本店</h2><p class='gmdata'><span class='bold'>[住所]</span><br />刈田郡蔵王町宮字馬場21</p></div>"); });
		GEvent.addListener(marker1_17, "click" , function(){ marker1_17.openInfoWindowHtml("<div class='gmfbox'><h2 class='gmname'>仙台市博物館</h2><p class='gmdata'><span class='bold'>[住所]</span><br />仙台市青葉区川内26</p></div>"); });
		GEvent.addListener(marker1_18, "click" , function(){ marker1_18.openInfoWindowHtml("<div class='gmfbox'><h2 class='gmname'>たちばなや</h2><p class='gmdata'><span class='bold'>[住所]</span><br />仙台市青葉区支倉町2-51</p></div>"); });
		GEvent.addListener(marker1_19, "click" , function(){ marker1_19.openInfoWindowHtml("<div class='gmfbox'><h2 class='gmname'>SELVA</h2><p class='gmdata'><span class='bold'>[住所]</span><br />仙台市泉区泉中央1-4-1</p></div>"); });
		GEvent.addListener(marker1_20, "click" , function(){ marker1_20.openInfoWindowHtml("<div class='gmfbox'><h2 class='gmname'>二柱神社</h2><p class='gmdata'><span class='bold'>[住所]</span><br />仙台市泉区市名坂字西裏61</p></div>"); });
		GEvent.addListener(marker1_21, "click" , function(){ marker1_21.openInfoWindowHtml("<div class='gmfbox'><h2 class='gmname'>瑞巌寺</h2><p class='gmdata'><span class='bold'>[住所]</span><br />宮城郡松島町松島字町内91</p></div>"); });
		GEvent.addListener(marker1_22, "click" , function(){ marker1_22.openInfoWindowHtml("<div class='gmfbox'><h2 class='gmname'>松島島巡り観光船企業組合</h2><p class='gmdata'><span class='bold'>[住所]</span><br />宮城郡松島町松島字町内85</p></div>"); });

		// 골든슬럼버
		var marker2_1 = new GMarker(new GLatLng(38.260305, 140.872595), {title:"仙台市内中心部/藤崎"});
		var marker2_2 = new GMarker(new GLatLng(38.262196, 140.87202), {title:"仙台市内中心部/仙台フォーラス"});
		var marker2_3 = new GMarker(new GLatLng(38.26217, 140.87006), {title:"仙台市内中心部/定禅寺通"});
		var marker2_4 = new GMarker(new GLatLng(38.266946, 140.871798), {title:"仙台市内中心部/勾当台公園"});
		var marker2_5 = new GMarker(new GLatLng(38.265982, 140.863987), {title:"立ち寄りspot/ＳＥＮＤＡＩ　ＫＯＦＦＥＥ"});
		var marker2_6 = new GMarker(new GLatLng(38.261613, 140.872139), {title:"立ち寄りspot/Lindenbaum"});
		var marker2_7 = new GMarker(new GLatLng(38.256249, 140.923865), {title:"郊外/卸町"});
		var marker2_8 = new GMarker(new GLatLng(38.269307, 140.966816), {title:"郊外/東北厚生年金病院"});
		var marker2_9 = new GMarker(new GLatLng(38.342755, 140.838104), {title:"郊外/仙台ロイヤルパークホテル"});
		var marker2_10 = new GMarker(new GLatLng(38.257269, 140.764037), {title:"郊外/ヒルサイドショップス＆アウトレット"});
		var marker2_11 = new GMarker(new GLatLng(38.34237, 140.865652), {title:"立ち寄りspot/Ｂａl Ｍｕｓｅｔｔｅ"});
		var marker2_12 = new GMarker(new GLatLng(38.267529, 140.777518), {title:"立ち寄りspot/Ｐａｔｉｓｓｅｒｉｅ　ｍｏｎｃｈｅｒ"});

		map.addOverlay(marker2_1);
		map.addOverlay(marker2_2);
		map.addOverlay(marker2_3);
		map.addOverlay(marker2_4);
		map.addOverlay(marker2_5);
		map.addOverlay(marker2_6);
		map.addOverlay(marker2_7);
		map.addOverlay(marker2_8);
		map.addOverlay(marker2_9);
		map.addOverlay(marker2_10);
		map.addOverlay(marker2_11);
		map.addOverlay(marker2_12);

		GEvent.addListener(marker2_1, "click" , function(){ marker2_1.openInfoWindowHtml("<div class='gmfbox'><h2 class='gmname'>藤崎</h2><p class='gmdata'><span class='bold'>[住所]</span><br />仙台市青葉区一番町3-2-17</p></div>"); });
		GEvent.addListener(marker2_2, "click" , function(){ marker2_2.openInfoWindowHtml("<div class='gmfbox'><h2 class='gmname'>仙台フォーラス</h2><p class='gmdata'><span class='bold'>[住所]</span><br />仙台市青葉区一番町3-11-15</p></div>"); });
		GEvent.addListener(marker2_3, "click" , function(){ marker2_3.openInfoWindowHtml("<div class='gmfbox'><h2 class='gmname'>定禅寺通</h2><p class='gmdata'><span class='bold'>[住所]</span><br />仙台市青葉区立町</p></div>"); });
		GEvent.addListener(marker2_4, "click" , function(){ marker2_4.openInfoWindowHtml("<div class='gmfbox'><h2 class='gmname'>勾当台公園</h2><p class='gmdata'><span class='bold'>[住所]</span><br />仙台市青葉区本町3丁目</p></div>"); });
		GEvent.addListener(marker2_5, "click" , function(){ marker2_5.openInfoWindowHtml("<div class='gmfbox'><h2 class='gmname'>ＳＥＮＤＡＩ　ＫＯＦＦＥＥ<br />（センダイコーヒー）</h2><p class='gmdata'><span class='bold'>[住所]</span><br />仙台市青葉区春日町４－２５<br />パストラルハイム春日町１Ｆ</p></div>"); });
		GEvent.addListener(marker2_6, "click" , function(){ marker2_6.openInfoWindowHtml("<div class='gmfbox'><h2 class='gmname'>Lindenbaum<br />（リンデンバウム）</h2><p class='gmdata'><span class='bold'>[住所]</span><br />仙台市青葉区一番町３－１１－２７<br />かねはち一番町ビル３Ｆ</p></div>"); });
		GEvent.addListener(marker2_7, "click" , function(){ marker2_1.openInfoWindowHtml("<div class='gmfbox'><h2 class='gmname'>卸町</h2><p class='gmdata'><span class='bold'>[住所]</span><br />仙台市若林区卸町2丁目</p></div>"); });
		GEvent.addListener(marker2_8, "click" , function(){ marker2_2.openInfoWindowHtml("<div class='gmfbox'><h2 class='gmname'>東北厚生年金病院</h2><p class='gmdata'><span class='bold'>[住所]</span><br />仙台市宮城野区福室1-12-1</p></div>"); });
		GEvent.addListener(marker2_9, "click" , function(){ marker2_3.openInfoWindowHtml("<div class='gmfbox'><h2 class='gmname'>仙台ロイヤルパークホテル</h2><p class='gmdata'><span class='bold'>[住所]</span><br />仙台市泉区寺岡6-2-1</p></div>"); });
		GEvent.addListener(marker2_10, "click" , function(){ marker2_4.openInfoWindowHtml("<div class='gmfbox'><h2 class='gmname'>ヒルサイドショップス＆アウトレット</h2><p class='gmdata'><span class='bold'>[住所]</span><br />仙台市青葉区錦ヶ丘1-3-1</p></div>"); });
		GEvent.addListener(marker2_11, "click" , function(){ marker2_5.openInfoWindowHtml("<div class='gmfbox'><h2 class='gmname'>Ｂａl Ｍｕｓｅｔｔｅ<br />（バル　ミュゼット）</h2><p class='gmdata'><span class='bold'>[住所]</span><br />仙台市泉区桂4－5－2</p></div>"); });
		GEvent.addListener(marker2_12, "click" , function(){ marker2_6.openInfoWindowHtml("<div class='gmfbox'><h2 class='gmname'>Ｐａｔｉｓｓｅｒｉｅ　ｍｏｎｃｈｅｒ<br>（パティスリーモンシェル）</h2><p class='gmdata'><span class='bold'>[住所]</span><br />仙台市青葉区栗生7-1-4<br>　　　みやぎ生協新愛子店敷地内</p></div>"); });

		// 중력삐에로
		var marker3_1 = new GMarker(new GLatLng(38.329375, 140.902309), {title:"泉エリア/東北学院大学泉キャンパス"});
		var marker3_2 = new GMarker(new GLatLng(38.323277, 140.90837), {title:"泉エリア/歩坂町"});
		var marker3_3 = new GMarker(new GLatLng(38.315919, 140.880797), {title:"泉エリア/高柳公園付近地下鉄高架下"});
		var marker3_4 = new GMarker(new GLatLng(38.319115, 140.881376), {title:"泉エリア/ユアテックスタジアム仙台"});
		var marker3_5 = new GMarker(new GLatLng(38.328592, 140.885106), {title:"泉エリア/洋菓子店フレーズ"});
		var marker3_6 = new GMarker(new GLatLng(38.243978, 140.843568), {title:"八木山エリア/仙台市八木山動物公園"});
		var marker3_7 = new GMarker(new GLatLng(38.245865, 140.87535), {title:"八木山エリア/愛宕神社"});
		var marker3_8 = new GMarker(new GLatLng(38.249055, 140.884426), {title:"八木山エリア/ごちそう満菜"});
		var marker3_9 = new GMarker(new GLatLng(38.260297, 140.882049), {title:"仙台駅エリア/仙台駅"});
		var marker3_10 = new GMarker(new GLatLng(38.258246, 140.902547), {title:"仙台駅エリア/フルキャストスタジアム宮城"});
		var marker3_11 = new GMarker(new GLatLng(38.227324, 140.719109), {title:"仙台駅エリア/秋保温泉"});
		var marker3_12 = new GMarker(new GLatLng(38.331608, 140.613496), {title:"仙台駅エリア/作並温泉"});
		var marker3_13 = new GMarker(new GLatLng(38.307067, 141.034929), {title:"塩釜・東松島エリア/ブックスなにわ"});
		var marker3_14 = new GMarker(new GLatLng(38.319443, 141.029763), {title:"塩釜・東松島エリア/マリンゲート塩釜"});
		var marker3_15 = new GMarker(new GLatLng(38.360554, 141.157966), {title:"塩釜・東松島エリア/野蒜海岸"});
		var marker3_16 = new GMarker(new GLatLng(38.354025, 141.157638), {title:"塩釜・東松島エリア/嵯峨渓観光遊覧船"});
		var marker3_17 = new GMarker(new GLatLng(38.370212, 141.064309), {title:"塩釜・東松島エリア/五大堂"});
		var marker3_18 = new GMarker(new GLatLng(38.372122, 141.059999), {title:"塩釜・東松島エリア/瑞巌寺"});
		var marker3_19 = new GMarker(new GLatLng(38.369507, 141.061479), {title:"塩釜・東松島エリア/観瀾亭"});

		map.addOverlay(marker3_1);
		map.addOverlay(marker3_2);
		map.addOverlay(marker3_3);
		map.addOverlay(marker3_4);
		map.addOverlay(marker3_5);
		map.addOverlay(marker3_6);
		map.addOverlay(marker3_7);
		map.addOverlay(marker3_8);
		map.addOverlay(marker3_9);
		map.addOverlay(marker3_10);
		map.addOverlay(marker3_11);
		map.addOverlay(marker3_12);
		map.addOverlay(marker3_13);
		map.addOverlay(marker3_14);
		map.addOverlay(marker3_15);
		map.addOverlay(marker3_16);
		map.addOverlay(marker3_17);
		map.addOverlay(marker3_18);
		map.addOverlay(marker3_19);

		GEvent.addListener(marker3_1, "click" , function(){ marker3_1.openInfoWindowHtml("<div class='gmfbox'><h2 class='gmname'>東北学院大学泉キャンパス</h2><p class='gmdata'><span class='bold'>[アクセス]</span><br />地下鉄仙台駅から地下鉄泉中央駅まで約20分、乗り継ぎ、地下鉄泉中央駅バスプール４番乗り場から<br />宮城交通バス東北学院大学泉キャンパス行き乗車約15分 <br />→ <a href=\"http://www.sentabi.jp/0000/0017/index.php?f=000000170002#iz01\" target=\"_top\">詳しい情報を見る</a></p></div>"); });
		GEvent.addListener(marker3_2, "click" , function(){ marker3_2.openInfoWindowHtml("<div class='gmfbox'><h2 class='gmname'>歩坂町</h2><p class='gmdata'><span class='bold'>[アクセス]</span><br />東北学院大学泉キャンパス裏門より徒歩約５分<br />→ <a href=\"http://www.sentabi.jp/0000/0017/index.php?f=000000170002#iz02\" target=\"_top\">詳しい情報を見る</a></p></div>"); });
		GEvent.addListener(marker3_3, "click" , function(){ marker3_3.openInfoWindowHtml("<div class='gmfbox'><h2 class='gmname'>高柳公園付近地下鉄高架下</h2><p class='gmdata'><span class='bold'>[アクセス]</span><br />地下鉄泉中央駅から地下鉄八乙女駅約5分、地下鉄八乙女駅より徒歩約10分<br />→ <a href=\"http://www.sentabi.jp/0000/0017/index.php?f=000000170002#iz03\" target=\"_top\">詳しい情報を見る</a></p></div>"); });
		GEvent.addListener(marker3_4, "click" , function(){ marker3_4.openInfoWindowHtml("<div class='gmfbox'><h2 class='gmname'>ユアテックスタジアム仙台</h2><p class='gmdata'><span class='bold'>[アクセス]</span><br />地下鉄泉中央駅から徒歩約５分<br />→ <a href=\"http://www.sentabi.jp/0000/0017/index.php?f=000000170002#iz04\" target=\"_top\">詳しい情報を見る</a></p></div>"); });
		GEvent.addListener(marker3_5, "click" , function(){ marker3_5.openInfoWindowHtml("<div class='gmfbox'><h2 class='gmname'>洋菓子店フレーズ</h2><p class='gmdata'><span class='bold'>[アクセス]</span><br />地下鉄泉中央駅バスプール６番乗り場から宮城交通バス将監団地行き将監団地入口下車約15分<br />→ <a href=\"http://www.sentabi.jp/0000/0017/index.php?f=000000170002#iz05\" target=\"_top\">詳しい情報を見る</a></p></div>"); });
		GEvent.addListener(marker3_6, "click" , function(){ marker3_6.openInfoWindowHtml("<div class='gmfbox'><h2 class='gmname'>仙台市八木山動物公園</h2><p class='gmdata'><span class='bold'>[アクセス]</span><br />仙台駅西口バスプール9番・11番・12番乗り場から仙台市営バス動物公園循環及び動物公園前経由線乗車、<br />八木山動物公園前下車約25分<br />仙台駅西口バスプール12番乗り場から宮城交通バス八木山動物公園経由線乗車、八木山動物公園前下車約25分<br />→ <a href=\"http://www.sentabi.jp/0000/0017/index.php?f=000000170003#ya01\" target=\"_top\">詳しい情報を見る</a></p></div>"); });
		GEvent.addListener(marker3_7, "click" , function(){ marker3_7.openInfoWindowHtml("<div class='gmfbox'><h2 class='gmname'>愛宕神社</h2><p class='gmdata'><span class='bold'>[アクセス]</span><br />仙台市営バス八木山動物公園前乗車、愛宕神社前下車約10分<br />→ <a href=\"http://www.sentabi.jp/0000/0017/index.php?f=000000170003#ya02\" target=\"_top\">詳しい情報を見る</a></p></div>"); });
		GEvent.addListener(marker3_8, "click" , function(){ marker3_8.openInfoWindowHtml("<div class='gmfbox'><h2 class='gmname'>ごちそう満菜（お弁当屋）</h2><p class='gmdata'><span class='bold'>[アクセス]</span><br />仙台市営バス愛宕神社前乗車、愛宕大橋下車約２分、そこから徒歩で約10分<br />→ <a href=\"http://www.sentabi.jp/0000/0017/index.php?f=000000170003#ya03\" target=\"_top\">詳しい情報を見る</a></p></div>"); });
		GEvent.addListener(marker3_9, "click" , function(){ marker3_9.openInfoWindowHtml("<div class='gmfbox'><h2 class='gmname'>仙台駅</h2><p class='gmdata'>→ <a href=\"http://www.sentabi.jp/0000/0017/index.php?f=000000170004#s01\" target=\"_top\">詳しい情報を見る</a></p></div>"); });
		GEvent.addListener(marker3_10, "click" , function(){ marker3_10.openInfoWindowHtml("<div class='gmfbox'><h2 class='gmname'>東北楽天イーグルス「フルキャストスタジアム宮城」</h2><p class='gmdata'><span class='bold'>[アクセス]</span><br />仙台駅東口より徒歩約30分<br />→ <a href=\"http://www.sentabi.jp/0000/0017/index.php?f=000000170004#s02\" target=\"_top\">詳しい情報を見る</a></p></div>"); });
		GEvent.addListener(marker3_11, "click" , function(){ marker3_11.openInfoWindowHtml("<div class='gmfbox'><h2 class='gmname'>奥州３名湯　秋保温泉</h2><p class='gmdata'><span class='bold'>[アクセス]</span><br />仙台市内から車で約20分<br />仙台駅西口バスプール８番から宮城交通秋保温泉行き乗車特急約45分<br />→ <a href=\"http://www.sentabi.jp/0000/0017/index.php?f=000000170004#s03\" target=\"_top\">詳しい情報を見る</a></p></div>"); });
		GEvent.addListener(marker3_12, "click" , function(){ marker3_12.openInfoWindowHtml("<div class='gmfbox'><h2 class='gmname'>仙台の奥座敷　作並温泉</h2><p class='gmdata'><span class='bold'>[アクセス]</span><br />仙台市内から車で約30分<br />JR仙山線仙台駅から作並温泉下車約30分<br />→ <a href=\"http://www.sentabi.jp/0000/0017/index.php?f=000000170004#s04\" target=\"_top\">詳しい情報を見る</a></p></div>"); });
		GEvent.addListener(marker3_13, "click" , function(){ marker3_13.openInfoWindowHtml("<div class='gmfbox'><h2 class='gmname'>ブックスなにわ（本屋）</h2><p class='gmdata'><span class='bold'>[アクセス]</span><br />JR仙石線仙台駅から本塩釜駅下車約30分、そこから徒歩約30分<br />仙台市内から車で約60分<br />→ <a href=\"http://www.sentabi.jp/0000/0017/index.php?f=000000170005#si01\" target=\"_top\">詳しい情報を見る</a></p></div>"); });
		GEvent.addListener(marker3_14, "click" , function(){ marker3_14.openInfoWindowHtml("<div class='gmfbox'><h2 class='gmname'>マリンゲート塩釜</h2><p class='gmdata'>→ <a href=\"http://www.sentabi.jp/0000/0017/index.php?f=000000170005#si05\" target=\"_top\">詳しい情報を見る</a></p></div>"); });
		GEvent.addListener(marker3_15, "click" , function(){ marker3_15.openInfoWindowHtml("<div class='gmfbox'><h2 class='gmname'>野蒜海岸</h2><p class='gmdata'><span class='bold'>[アクセス]</span><br />JR仙石線仙台駅から野蒜駅下車約60分<br />仙台市内から車で三陸自動車道鳴瀬奥松島IC経由約60分<br />→ <a href=\"http://www.sentabi.jp/0000/0017/index.php?f=000000170005#si02\" target=\"_top\">詳しい情報を見る</a></p></div>"); });
		GEvent.addListener(marker3_16, "click" , function(){ marker3_16.openInfoWindowHtml("<div class='gmfbox'><h2 class='gmname'>嵯峨渓観光遊覧船</h2><p class='gmdata'>→ <a href=\"http://www.sentabi.jp/0000/0017/index.php?f=000000170005#si03\" target=\"_top\">詳しい情報を見る</a></p></div>"); });
		GEvent.addListener(marker3_17, "click" , function(){ marker3_17.openInfoWindowHtml("<div class='gmfbox'><h2 class='gmname'>五大堂</h2><p class='gmdata'><span class='bold'>[アクセス]</span><br />JR仙石線仙台駅から松島海岸駅下車約40分 <br />→ <a href=\"http://www.sentabi.jp/0000/0017/index.php?f=000000170005#si04\" target=\"_top\">詳しい情報を見る</a></p></div>"); });
		GEvent.addListener(marker3_18, "click" , function(){ marker3_18.openInfoWindowHtml("<div class='gmfbox'><h2 class='gmname'>瑞巌寺</h2><p class='gmdata'><span class='bold'>[アクセス]</span><br />JR仙石線仙台駅から松島海岸駅下車約40分 <br />→ <a href=\"http://www.sentabi.jp/0000/0017/index.php?f=000000170005#si04\" target=\"_top\">詳しい情報を見る</a></p></div>"); });
		GEvent.addListener(marker3_19, "click" , function(){ marker3_19.openInfoWindowHtml("<div class='gmfbox'><h2 class='gmname'>観瀾亭</h2><p class='gmdata'><span class='bold'>[アクセス]</span><br />JR仙石線仙台駅から松島海岸駅下車約40分 <br />→ <a href=\"http://www.sentabi.jp/0000/0017/index.php?f=000000170005#si04\" target=\"_top\">詳しい情報を見る</a></p></div>"); });

		// 포다치
		var marker4_1 = new GMarker(new GLatLng(38.256978,140.877686), {title:"仙台国際ホテル"});
		var marker4_2 = new GMarker(new GLatLng(38.2579605,140.86857570000006), {title:"MEALS"});
		var marker4_3 = new GMarker(new GLatLng(38.2603048,140.87259470000004), {title:"藤崎"});
		var marker4_4 = new GMarker(new GLatLng(38.2626573,140.86957540000003), {title:"網元 上の家"});
		var marker4_5 = new GMarker(new GLatLng(38.280083,140.936179), {title:"仙台市民球場"});
		var marker4_6 = new GMarker(new GLatLng(38.267104,140.871795), {title:"勾当台公園"});
		var marker4_7 = new GMarker(new GLatLng(38.252193,140.855906), {title:"仙台城跡"});
		var marker4_8 = new GMarker(new GLatLng(38.268936,140.869416), {title:"仙台市役所北庁舎"});

		map.addOverlay(marker4_1);
		map.addOverlay(marker4_2);
		map.addOverlay(marker4_3);
		map.addOverlay(marker4_4);
		map.addOverlay(marker4_5);
		map.addOverlay(marker4_6);
		map.addOverlay(marker4_7);
		map.addOverlay(marker4_8);

		GEvent.addListener(marker4_1, "click" , function(){ marker4_1.openInfoWindowHtml("<div class='gmfbox'><h2 class='gmname'>仙台国際ホテル</h2><p class='gmdata'>仙台市青葉区中央4-6-1</p>"); });
		GEvent.addListener(marker4_2, "click" , function(){ marker4_2.openInfoWindowHtml("<div class='gmfbox'><h2 class='gmname'>MEALS</h2><p class='gmdata'>仙台市青葉区片平1-1-11<br />片平ビル1F</p>"); });
		GEvent.addListener(marker4_3, "click" , function(){ marker4_3.openInfoWindowHtml("<div class='gmfbox'><h2 class='gmname'>藤崎</h2><p class='gmdata'>仙台市青葉区一番町3-2-17</p>"); });
		GEvent.addListener(marker4_4, "click" , function(){ marker4_4.openInfoWindowHtml("<div class='gmfbox'><h2 class='gmname'>網元 上の家</h2><p class='gmdata'>仙台市青葉区国分町2-2-28<br />第一藤原ビル1F</p>"); });
		GEvent.addListener(marker4_5, "click" , function(){ marker4_5.openInfoWindowHtml("<div class='gmfbox'><h2 class='gmname'>仙台市民球場</h2><p class='gmdata'>仙台市宮城野区新田東4-1-1</p>"); });
		GEvent.addListener(marker4_6, "click" , function(){ marker4_6.openInfoWindowHtml("<div class='gmfbox'><h2 class='gmname'>勾当台公園</h2><p class='gmdata'>仙台市青葉区本町3丁目</p>"); });
		GEvent.addListener(marker4_7, "click" , function(){ marker4_7.openInfoWindowHtml("<div class='gmfbox'><h2 class='gmname'>仙台城跡</h2><p class='gmdata'>仙台市青葉区天守台青葉城址</p>"); });
		GEvent.addListener(marker4_8, "click" , function(){ marker4_8.openInfoWindowHtml("<div class='gmfbox'><h2 class='gmname'>仙台市役所北庁舎</h2><p class='gmdata'>仙台市青葉区二日町1-1</p>"); });

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