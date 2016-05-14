<? include '../include/header_share.php'; ?>
<meta name="description" content="일본 작가 이사카코타로 책속의한줄">
<title>책속의한줄 &gt; Book | 이사카코타로</title>
</head>
<body>

<div id="wrap" class="book">
	<? include '../include/header.php'; ?>

	<div id="content" class="container">
		<div class="page-header">
			<h2>Book</h2>
		</div>
		<h3>책속의한줄</h3>
		<ul class="hanzul"></ul>
	</div>

	<? include '../include/footer.php'; ?>
</div>

<script src="/js/ui.common.js"></script>
<script src="/js/data.hanzul.js"></script>
<script type="text/javascript">
function setCurrentDepth(){return 22; /*현재위치*/ }
$(document).ready(function() {
	initHanzul();
});
</script>
</body>
</html>