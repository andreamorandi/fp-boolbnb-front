<script>

export default{
    name :'AppFooter',
}
</script>

<template>

<!-- {{-- begin upper footer --}} -->
<footer class="footer bg-dark">
  	 <div class="container">
  	 	<div class="row">
  	 		<div class="footer-col col-6 col-sm-3">
  	 			<h4>company</h4>
  	 			<ul>
  	 				<li><a href="#">about us</a></li>
  	 				<li><a href="#">our services</a></li>
  	 				<li><a href="#">privacy policy</a></li>
  	 				<li><a href="#">affiliate program</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col col-6 col-sm-3">
  	 			<h4>get help</h4>
  	 			<ul>
  	 				<li><a href="#">FAQ</a></li>
  	 				<li><a href="#">COVID-19</a></li>
  	 				<li><a href="#">fish & chips</a></li>
  	 				<li><a href="#">Fuj & Sacicc</a></li>
  	 				<li><a href="#">payment options</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col col-6 col-sm-3">
  	 			<h4>Developers</h4>
  	 			<ul>
  	 				<li><a href="#">Andrea</a></li>
  	 				<li><a href="#">Giovanni</a></li>
  	 				<li><a href="#">Luigi</a></li>
  	 				<li><a href="#">Eustache</a></li>
  	 				<li><a href="#">Ottavio</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col col-6 col-sm-3">
  	 			<h4>follow us</h4>
  	 			<div class="social-links">
  	 				<a href="#"><i class="fa-brands fa-facebook"></i></a>
  	 				<a href="#"><i class="fa-brands fa-twitter"></i></a>
  	 				<a href="#"><i class="fa-brands fa-instagram"></i></a>
  	 				<a href="#"><i class="fa-brands fa-linkedin"></i></a>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer{
    padding: 70px 0;
}

.footer-col h4{
	font-size: 18px;
	color: #ffffff;
	text-transform: capitalize;
	margin-bottom: 35px;
	font-weight: 500;
	position: relative;
}
.footer-col h4::before{
	content: '';
	position: absolute;
	left:0;
	bottom: -10px;
	background-color: #c9e265;
	height: 2px;
	box-sizing: border-box;
	width: 50px;
}
.footer-col ul li:not(:last-child){
	margin-bottom: 10px;
}
.footer-col ul li a{
	font-size: 16px;
	text-transform: capitalize;
	color: #ffffff;
	text-decoration: none;
	font-weight: 300;
	color: #bbbbbb;
	display: block;
	transition: all 0.3s ease;
}
.footer-col ul li a:hover{
	color: #ffffff;
	padding-left: 8px;
}
.footer-col .social-links a{
	display: inline-block;
	height: 40px;
	width: 40px;
	background-color: rgba(255,255,255,0.2);
	margin:0 10px 10px 0;
	text-align: center;
	line-height: 40px;
	border-radius: 50%;
	color: #ffffff;
	transition: all 0.5s ease;
}
.footer-col .social-links a:hover{
	color: #24262b;
	background-color: #ffffff;
}

</style>