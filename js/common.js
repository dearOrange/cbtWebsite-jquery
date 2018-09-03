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
   
    // 导航部分
    var menuType = 'desktop';

    $(window).on('load resize', function() {
        var currMenuType = 'desktop';

        if (matchMedia('only screen and (max-width: 991px)').matches) {
            currMenuType = 'mobile';
        }

        if (currMenuType !== menuType) {
            menuType = currMenuType;

            if (currMenuType === 'mobile') {
                var $mobileMenu = $('#mainnav').attr('id', 'mainnav-mobi').hide();
                var hasChildMenu = $('#mainnav-mobi').find('li:has(ul)');

                $('#header').after($mobileMenu);
                hasChildMenu.children('ul').hide();
                hasChildMenu.children('a').after('<span class="btn-submenu"></span>');
                $('.btn-menu').removeClass('active');
            } else {
                var $desktopMenu = $('#mainnav-mobi').attr('id', 'mainnav').removeAttr('style');

                $desktopMenu.find('.submenu').removeAttr('style');
                $('#header').find('.nav-wrap').append($desktopMenu);
                $('.btn-submenu').remove();
            }
        }
    });

    $('.btn-menu').on('click', function() {
        $('#mainnav-mobi').slideToggle(300);
        $(this).toggleClass('active');
    });

    $(document).on('click', '#mainnav-mobi li .btn-submenu', function(e) {
        $(this).toggleClass('active').next('ul').slideToggle(300);
        e.stopImmediatePropagation()
    });
    $('body').off('click', '.footer_title').on('click', '.footer_title', function() {
        $(this).siblings('.aa_content').slideToggle(300);
    });
    $('.person_img').on('click', function() {
        $('.link_person').slideToggle(300);
    });


    $.ajax({
        type: "get",
        url: "http://hunter.chebutou.com.cn/hunterServer/content/getWebsiteData",
        dataType: "json",
        headers: {
            'Content-type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        success: function(data){
            var res = data.data;
            if(data.code === 'SUCCESS'){
                $('.third_number_task').html(res.totalTask);
                $('.third_number_prices').html(res.totalPrices);
                $('.third_number_downstream').html(res.totalDownstream);
                $('.third_number_upstream').html(res.totalUpstream);
            }
        }
    });
});



