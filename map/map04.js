	function load() {
		var mapdiv = document.getElementById("locamap");
		LatLngCenter = new google.maps.LatLng(38.265815,140.908585);
		zoom = 13;

		var map_option = {
			center:LatLngCenter,
			mapTypeControl:true,

			navigationControl:true,
			navigationControlOptions : {
				style : google.maps.NavigationControlStyle.SMALL,
				position : google.maps.ControlPosition.TOP_LEFT
			},

			zoom:zoom,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};

		var map = new google.maps.Map(mapdiv, map_option);

		var marker1 = new google.maps.Marker({ map:map,position: new google.maps.LatLng(38.256978,140.877686) });
		var popup1 = new google.maps.InfoWindow({ content: "<p class=\"locapoint_name\">仙台国際ホテル</p><p class=\"locapoint_address\">仙台市青葉区中央4-6-1</p>" });

		var marker2 = new google.maps.Marker({ map:map,position: new google.maps.LatLng(38.2579605,140.86857570000006) });
		var popup2 = new google.maps.InfoWindow({ content: "<p class=\"locapoint_name\">MEALS</p><p class=\"locapoint_address\">仙台市青葉区片平1-1-11<br />片平ビル1F</p>" });

		var marker3 = new google.maps.Marker({ map:map,position: new google.maps.LatLng(38.2603048,140.87259470000004) });
		var popup3 = new google.maps.InfoWindow({ content: "<p class=\"locapoint_name\">후지사키</p><p class=\"locapoint_address\">仙台市青葉区一番町3-2-17</p>" });

		var marker4 = new google.maps.Marker({ map:map,position: new google.maps.LatLng(38.2626573,140.86957540000003) });
		var popup4 = new google.maps.InfoWindow({ content: "<p class=\"locapoint_name\">網元 上の家</p><p class=\"locapoint_address\">仙台市青葉区国分町2-2-28<br />第一藤原ビル1F</p>" });

		var marker5 = new google.maps.Marker({ map:map,position: new google.maps.LatLng(38.280083,140.936179) });
		var popup5 = new google.maps.InfoWindow({ content: "<p class=\"locapoint_name\">仙台市民球場</p><p class=\"locapoint_address\">仙台市宮城野区新田東4-1-1</p>" });

		var marker6 = new google.maps.Marker({ map:map,position: new google.maps.LatLng(38.267104,140.871795) });
		var popup6 = new google.maps.InfoWindow({ content: "<p class=\"locapoint_name\">고토 다이 공원</p><p class=\"locapoint_address\">仙台市青葉区本町3丁目</p>" });

		var marker7 = new google.maps.Marker({ map:map,position: new google.maps.LatLng(38.252193,140.855906) });
		var popup7 = new google.maps.InfoWindow({ content: "<p class=\"locapoint_name\">仙台城跡</p><p class=\"locapoint_address\">仙台市青葉区天守台青葉城址</p>" });

		var marker8 = new google.maps.Marker({ map:map,position: new google.maps.LatLng(38.268936,140.869416) });
		var popup8 = new google.maps.InfoWindow({ content: "<p class=\"locapoint_name\">仙台市役所北庁舎</p><p class=\"locapoint_address\">仙台市青葉区二日町1-1</p>" });

		google.maps.event.addListener(marker1,"click",function(){popup1.open(map, marker1);});
		google.maps.event.addListener(marker2,"click",function(){popup2.open(map, marker2);});
		google.maps.event.addListener(marker3,"click",function(){popup3.open(map, marker3);});
		google.maps.event.addListener(marker4,"click",function(){popup4.open(map, marker4);});
		google.maps.event.addListener(marker5,"click",function(){popup5.open(map, marker5);});
		google.maps.event.addListener(marker6,"click",function(){popup6.open(map, marker6);});
		google.maps.event.addListener(marker7,"click",function(){popup7.open(map, marker7);});
		google.maps.event.addListener(marker8,"click",function(){popup8.open(map, marker8);});

		var selObj = document.getElementById("geoPoint");
		selObj.onchange = function(){
			var gp = this.value;
			if (gp == "") return;
			var x = gp.split(",")[1];
			var y = gp.split(",")[0];
			zoom=17;
			LatLngCenter = new google.maps.LatLng(y, x);
			map.setZoom(zoom);
			map.setCenter(LatLngCenter);
		}
	}
