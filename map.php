<? include 'include/header_share.php'; ?>
<title>이사카코타로</title>
</head>

<body class="index" onload="load()" onunload="GUnload()">
<div id="wrap" class="movie">
	<? include 'include/header.php'; ?>

	<div id="map" class="map"></div>
	<form>
		<div class="selectbox">
		<select id="geoPoint">
			<option value=""selected>각 세트장 지도를 본다</option>
			<optgroup label="센다이 시내 중심부">
			<option value="38.260305, 140.872595">후지사키</option>
			<option value="38.262196, 140.87202">센다이 포라스</option>
			<option value="38.26217, 140.87006">정선사통</option>
			<option value="38.266946, 140.871798">고토 다이 공원</option>
			</optgroup>
			<optgroup label="립치기리 spot">
			<option value="38.265982, 140.863987">SENDAI KOFFEE</option>
			<option value="38.261613, 140.872139">Lindenbaum</option>
			</optgroup>
		</select>
		</div>
	</form>

<style type="text/css">
.map {width:1200px;height:800px;}
</style>
<script type="text/javascript" src="http://maps.google.com/maps?file=api&amp;v=2&amp;key=AIzaSyAG_gEUNo3VKDEp0flyQgChh5cp7XM71_I"></script>
<script type="text/javascript" src="/js/data.map.js"></script>


</body>
</html>