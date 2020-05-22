$(document).ready(function(){
    var name ;
    var flag =true;
    $('#username').on('compositionstart',function(){
        flag = false;
    })
    $('#username').on('compositionend',function(){
        flag = true;
    })
    $("#username").keyup(function(){
        setTimeout(() => {
            if(flag){
                var name = $(this).val();
                if(name.length==0){
                    hideTooltips("name_tooltip");   
                }else if(name.length<2){
                    hideTooltips("name_tooltip");
                    showTooltips("name_tooltip","用户名过短，最少2位","");
                }else{
                    hideTooltips("name_tooltip");
                    if(usernameReg(name)){
                        console.log("value:"+$(this).val()+"   length:"+$(this).val().length);
                        hideTooltips("name_tooltip");
                        showTooltips("name_tooltip","用户名合法","right");
                    }else{
                        hideTooltips("name_tooltip");
                        console.log(name);
                        showTooltips("name_tooltip","英文或数字构成，不能以数字开头","");
                        console.log("用户名由中文,英文或数字构成，不能以数字开头");
                    }
                }
                
                
            }
        }, 0);
        
    })
})
function showTooltips(msgid,msg,suf){
    var base_t = "tooltips";
    var base_m = "msg";
    var base_tb = "tooltips_box";
    if(suf.length!=0){
        base_t = base_t+"_"+suf;
        base_m = base_m+"_"+suf;
        base_tb = base_tb+"_"+suf;
    }
	if (msgid==''){ return; }
    if (msg==''){ msg='Error!'; }
	$('#'+msgid).prepend("<div style='position:relative;'><div class='tooltips_main'><div class='"+base_tb+"'><div class='"+base_t+"'><div class='"+base_m+"'>"+msg+"</div></div><div class='ov'></div></div></div></div>");
	$('#'+msgid+' .tooltips_main').fadeIn("slow").animate({ marginTop: "7px"}, {queue:true, duration:400});
}

function hideTooltips(msgid){
	try{
		$('#'+msgid).find('.tooltips_main').fadeOut("slow");
		$('#'+msgid).find('.tooltips_main').remove();
	}catch(e){}
}
function usernameReg(name){
    var reg = /^[\u4E00-\u9FA5\A-z][\u4E00-\u9FA5\A-z\d]+$/;
    return reg.test(name);
}