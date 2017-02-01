	<?
		$currurl = "http://" . $_SERVER["HTTP_HOST"] . $_SERVER["REQUEST_URI"];
	?>

	<div class="share">
		<div class="container">
			<a href="https://www.facebook.com/sharer/sharer.php?u=<?=$currurl?>" target="_blank"><img src="/images/share-facebook.png" alt="페이스북"></a>
			<a href="https://twitter.com/intent/tweet?url=<?=$currurl?>" target="_blank"><img src="/images/share-twitter.png" alt="트위터"></a>
			<a href="https://plus.google.com/share?url=<?=$currurl?>" target="_blank"><img src="/images/share-googleplus.png" alt="구글플러스"></a>
			<a href="https://story.kakao.com/share?url=<?=$currurl?>" target="_blank"><img src="/images/share-kakao.png" alt="카카오"></a>
		</div>
	</div>

	<footer id="footer" class="footer">
		<div class="container">
			<div class="col-md-8 info">
				<p>Version <a href="/version.php">1.0</a>
				<span>|</span>
				Contact <a href="mailto:pigjh1@gmail.com">pigjh1@gmail.com</a><br>
				<span class="copyright">Copyright 2015. isakakotaro all rights reserved.</span>
				</p>
			</div>
			<div class="col-md-4 sns">
				<a href="http://cafe.naver.com/isakakotaro/" target="_blnak"><img src="/images/isakakotaro-naver-cafe.png" alt=""></a>
				<a href="https://twitter.com/isakakr/" target="_blnak"><img src="/images/isakakotaro-twitter.png" alt=""></a>
				<a href="https://www.facebook.com/isakakorea" target="_blnak"><img src="/images/isakakotaro-facebook.png" alt=""></a>
			</div>
		</div>
	</footer>

<!-- analytics -->
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-63340989-1', 'auto');
  ga('send', 'pageview');
</script>
<script type="text/javascript" src="http://wcs.naver.net/wcslog.js"></script>
<script type="text/javascript">
if(!wcs_add) var wcs_add = {};
wcs_add["wa"] = "2b2449116e2ef0";
wcs_do();
</script>
<!-- //analytics -->