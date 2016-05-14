<? include '/include/header_share.php'; ?>
<title>이사카코타로</title>
</head>
<body>

<div id="wrap" class="sns">
	<? include '/include/header.php'; ?>

	<div id="content" class="container">
		<div class="page-header">
			<h2>SNS</h2>
		</div>

		<h3>instagram</h3>
		<p>伊坂幸太郎 태그로 올라오는 최신 사진입니다.</p>
		<div id="target" class="insta"></div>
	</div>

	<? include '/include/footer.php'; ?>
</div>

<script src="js/ui.common.js"></script>
<script type="text/javascript">
function setCurrentDepth(){return 71; /*현재위치*/ }
$(document).ready(function(){
	inifSNS();
});
</script>
</body>
</html>