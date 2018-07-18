$(function(){

　  $('#sectionSween').fullpage({
        anchors: ['pageOne','pageTwo','pageThree','pageFour','pageFive','pageSix'],
        menu: '#menu',
    });   //激活fullpage的效果，可以检查页面看效果了


    $('.wechat_hover').mouseenter(function(){
        $('.wechat_img').css('display','block')
    })
    $('.wechat_hover').mouseleave(function(){
        $('.wechat_img').css('display','')
    })
    $('.upAPP_hover').mouseenter(function(){
        $('.app_loader').css('display','block')
    })
    $('.upAPP_hover').mouseleave(function(){
        $('.app_loader').css('display','')
    })
   
    $.ajax({
        type: "get",
        url: "http://javadev:8280/hunterServer/content/getWebsiteData",
        dataType: "json",
        headers: {
            'Content-type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        success: function(data){
            var res = data.data;
            if(res.code === 'SUCCESS'){
            console.log(data)
                $('.third_number_task').html(res.data.totalTask);
                $('.third_number_prices').html(res.data.totalPrices);
                $('.third_number_downstream').html(res.data.totalDownstream);
                $('.third_number_upstream').html(res.data.totalUpstream);
            }
        }
    });
});



