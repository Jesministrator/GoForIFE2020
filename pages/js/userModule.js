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
                if(usernameReg(name)){
                    console.log("value:"+$(this).val()+"   length:"+$(this).val().length);
                }else{
                    console.log("用户名由中文,英文或数字构成，不能以数字开头");
                }
                
            }
        }, 0);
        
    })
})

function usernameReg(name){
    var reg = /^[\u4E00-\u9FA5\A-z][\u4E00-\u9FA5\A-z\d]+$/;
    return reg.test(name);
}