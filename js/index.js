var step = 0;
var $loading = $("#loading");
var $K = $("#K");
var $yinyue = $("#music");
var rng=0;
var $s=$("#S")
var $jiantou1=$(".jiantou");
var $jiantou2=$(".jiantou2");
var $tyu=$("#tyu")
window.flg=1;
var $bianhuan=$(".qiu1");
var $mi1=$("#mi1");
var $lv=$(".lv");
var $baib=$(".bai")
var $xueli=$(".xueli");
var $q1=$(".q2")
var $q2=$(".q3")
var $q3=$(".q4")
var $q4=$(".q5")
var $q5=$(".q6")
var $x1=$(".x1");
//=================================
$jiantou1.on("click",function(){
	$loading.css("left", "-100%");
				$s.css("left",0);
				console.log($s.css("left"))
				if($s.css("left")==="0px"){
					$lv[0].setAttribute("id","lvv");
					$baib[0].setAttribute("id","baib");
					window.setTimeout(qq,2200)
					
					function qq(){
					$q1[0].setAttribute("id","q1")
					$q2[0].setAttribute("id","q2")
					$q3[0].setAttribute("id","q3")
					$q4[0].setAttribute("id","q4")
					$q5[0].setAttribute("id","q5")
					}
					
					
					
					
					
				}
				
	
	
})
$jiantou2.on("click",function(){
	            window.setTimeout(ee,1900)
	            $bianhuan.css("top","-100%")
	            function ee(){
	            	$s.css("top","-100%");
	            	$mi1.css("top","0%")
	            	window.setTimeout(ii,1200)
	            	
	            }
	            
	            function ii(){
	            	$x1[0].setAttribute("id","x1")
	            }
	
				
				
				
	
	
})
$tyu.on("click",function(){
	
	
	if(window.flg==1){
		window.yiny.pause();
		window.flg=2;
		return
	}if(window.flg==2){
		window.yiny.play();
		window.flg=1;
		
	}
	
			
				
	
	
})

var loading = (function() {
	$da = $(".da");
	$xiao = $(".xiao");

	 var dasb=window.setInterval(qwe, 200)

	function qwe() {
		step += 20;
		$xiao.css("width", step);

		if(parseFloat($xiao.css("width")) > parseFloat($da.css("width")) + 120) {
			clearInterval(dasb);
			$K.css("display", "none");

			return disan.init();
		}

	}
	})()
	
	
	
	//======================
	var disan = (function() {
		function rrr(){
			rng++;
			console.log(rng)
			if(rng>=6){
				$loading.css("left", "-100%")
				$s.css("left",0)
				if($s.css("left")==="0px"){
					$lv[0].setAttribute("id","lvv");
					$baib[0].setAttribute("id","baib");
					window.setTimeout(qq,2600)
					
					function qq(){
					$q1[0].setAttribute("id","q1")
					$q2[0].setAttribute("id","q2")
					$q3[0].setAttribute("id","q3")
					$q4[0].setAttribute("id","q4")
					$q5[0].setAttribute("id","q5")
					}
					
					
					
					
				}
				clearInterval(sb)
				
			}
		}
		var sb=window.setInterval(rrr,2000);
		
		

		return {
			init: function() {
				$loading.css("display", "block")
				var yiny = $yinyue[0];
				window.yiny=yiny;
				yiny.play();
				console.log("mm")
			}

		}
		
		
		
		
		
		
		

	})()
	



