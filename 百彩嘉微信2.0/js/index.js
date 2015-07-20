/* JS Document */

$(function(){

//	菜单栏

	$('.container ul li.fl').click(function(){
		$('.container ul li.fl b').html('<img src="../images/arrows_b.png">');
		$('.container ul li.ft b').html('<img src="../images/arrows_h.png">');
		$('.container ul li.ft a').css('color','#333');
		$(this).addClass('fq').siblings().removeClass('fq');
		$(this).find('a').css('color','#f07e9f');
		$('.sum1 .level_menu').hide();
		$('.sub_menu').slideToggle();
		$('.sub_menu1').slideUp();	
	})
	$('.container ul li.ft').click(function(){		
		$('.sub_menu').slideUp();
		$('.sub_menu1').slideToggle();
		$('.sum1 .level_menu').hide();
		$(this).find('a').css('color','#f07e9f');
		$('.container ul li.fl a').css('color','#333');
		$(this).addClass('fq').siblings().removeClass('fq');
		$('.container ul li.fl b').html('<img src="../images/arrows_h.png">');
		$('.container ul li.ft b').html('<img src="../images/arrows_b.png">');
		
	})
	$('.site ul li').click(function(){
		$(this).addClass()
	})
	$('.site ul li.fq').click(function(){
		$('.site ol').slideToggle();
	})
	$('.site ol li').click(function(){
		$(this).addClass('fk').siblings().removeClass('fk');
	})
	$('.sub_menu a').click(function(){
		var index = $(this).index();
		$('.sum1_right .level_menu').eq(index).show().siblings().hide();
		$(this).addClass('fy').siblings().removeClass('fy');
	})
	$('.sub_menu1 a').click(function(){
		var index = $(this).index();
		$('.sum1_left .level_menu').eq(index).show().siblings().hide();
		$(this).addClass('fy').siblings().removeClass('fy');
	})
	$('.level_menu a').click(function(){
		$(this).addClass('fk').siblings().removeClass('fk');
	})

//  订单

	$('.nav ul li a').click(function(){
		$(this).addClass('fl').parents().siblings().find('a').removeClass('fl');
	})
//  弹出层
	$('.share').click(function(){
		$('.popup, .hint').show();
	})
	$('.cencal').click(function(){
		$('.popup, .hint').hide();
	})
	$('.cancel_i').click(function(){
		$('.popup, .hint').show();
	})
	$('.cancel_r').click(function(){
		$('.hint ul').show();
		$('.succeed a').hide().animate({'opacity':1},20);
	})
	$('.cancel_l').click(function(){
		$('.hint dl').show();
		$('.succeed a').hide().animate({'opacity':1},20);
	})
	$('.cancel').click(function(){
		$('.popup, .hint, .hint dl, .hint ul').hide();
		$('.succeed a.fl').show().animate({'opacity':0},5000);
	})
	$('.sc').click(function(){
		$(this).hide();
		$('.sc_h').show();
		$('.succeed a.fl').show().animate({'opacity':0},5000);
		$('.succeed a.fy').hide().animate({'opacity':1},50);
	})
	$('.sc_h').click(function(){
		$(this).hide();
		$('.sc').show();
		$('.succeed a.fy').show().animate({'opacity':0},5000);
		$('.succeed a.fl').hide().animate({'opacity':1},50);
	})
	$('.refund').click(function(){
		$('.popup, .hint ,.hint dl, .hint ul').hide();
	})
	$('.confirm').click(function(){
		$('.popup, .hint, .hint ul, .hint dl').hide();
	})
	$('.footer p').click(function(){
		$('.popping, .date').show();
		$(this).hide();
		$('.container ol').css('margin-bottom',0)
	})

// 您还可以输入多少字
	var limitNum = 15;
    var pattern = '您还需要输入' + limitNum + '字';
    $('.contentwordage').html(pattern);
    $('.content').keyup(
	    function(){
	        var remain = $(this).val().length;
	        if(remain > 15){
	                pattern = "字数超过限制！";
	        }else{
	            var result = limitNum - remain;
	            pattern = '您还需要输入' + result + '字';
	        }
	        if(remain >= 1){
	        	$('button').css({'background':'#f07e9f','border':'1px solid #f07e9f'});
	        	$('.btn').click(function(){
	        		$('.more').show();
	        		$('.list,.contant').hide();
	        	})
	        	$('.cencal_btn').click(function(){
	        		
	        	})
	        }
            $('.contentwordage').html(pattern);
        }
    );
	$('.content').click(function(){
		$(this).html('');
	})
//  加载更多
	var html = $('.think').html()
	$('.main ol li em').height($('.main ol li em').width())
	$('.more span').click(function(){
		$('.think').append(html);
	})
//  评论
	$('.main ul .fk,.main ul .fl,.main ul .fy').click(function(){
		$(this).find('.img_s').toggle().parents().siblings().find('.img_s').hide();
	})
	$('.comment ul li').click(function(){
		$(this).addClass('fl').siblings().removeClass('fl');
	})
	$('.list ol li.fy').click(function(){
		$(this).animate({'top':0},500);
		$('.list ol li.fl').animate({'height':$('.list ol li a').height()},500);
	})
//  日期
	/*var Year = myDate.getFullYear()
	document.write(Year)
	var Month = myDate.getMonth()
	myDate.getDay();        //获取当前星期X(0-6,0代表星期天)
    myDate.getTime();       //获取当前时间(从1970.1.1开始的毫秒数)    
    myDate.getHours();      //获取当前小时数(0-23)    
    myDate.getMinutes();    //获取当前分钟数(0-59)    
    myDate.getSeconds();    //获取当前秒数(0-59)    
    myDate.getMilliseconds();   //获取当前毫秒数(0-999)    
    myDate.toLocaleDateString();    //获取当前日期    
    var mytime=myDate.toLocaleTimeString();    //获取当前时间    
    myDate.toLocaleString( );       //获取日期与时间  */ 
	var myDate = new Date();
	var day = myDate.getDay();
	var Month = myDate.getMonth()
	var mytime=myDate.toLocaleString()
	var data = ['星期一','星期二','星期三','星期四','星期五','星期六','星期日'];
	//alert($('.date ul li.fn').length)
	for(i=0;i<$('.date ul li.fn').length;i++){
		/*if($('.date ul li.fn').eq(2).find('span').html() == data[5] ){
			//alert(111)
		}*/
		//$('.date ul li.fn').eq(i).find('span').html(data[day+i])
			//if(i==$('.date ul li.fn').length-1){
				
				for(l=0;l<7;l++){
					//if($('.date ul li.fn').find('span').html() == data[6]){
						//day = 0
						//alert(111)
						//$('.date ul li.fn').eq(i).find('span').html(data[day+l])
						//alert($('.date ul li.fn').eq(2).find('span').html())
						
					//}
				}
			//$('.date ul li.fn').eq(i).find('span').html(data[day+l])
			//}
		
		/*if(i==$('.date ul li.fn').length-1){
			if($('.date ul li.fn').eq(2).find('span').html() == data[6]){
				//day = 0
				//alert($('.date ul li.fn').eq(2).find('span').html())
				//$('.date ul li.fn').eq(i).find('span').html(data[day+i])
			}
			
		}*/

	}

	
	
	
	
	
	
	
})