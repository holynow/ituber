'use strict';

$(function(){
    function mouseOver (){
        // 메인 howto 마우스오버시
        const howtoLastLi = $('.howto_link_box ul li').eq(2);
        howtoLastLi.hover(
            function(){
                const imageSrc = `../image/daugther_06_Explanation.gif?${Math.random()}`
                howtoLastLi.css('background-image', `url(${imageSrc})`)
            },
            function(){
                howtoLastLi.css('background-image','')
            }
        )
    }
    function clickEvent (){
        const clickEl = ".paging_btn_list ul li, .character_sel ul li, .tab_btns li";
        const ACTIVE = 'active';
        const LIST = 'li';
        function actEve(e) {
            const $this = $(e.currentTarget);
            $this.addClass(ACTIVE)
            $this.siblings(LIST).removeClass(ACTIVE)
            tabClick($this);
        }
        $(clickEl).on('click',function(target){
            actEve(target)
        }); 
        // 엔터눌렀을 경우 해당탭 선택
        $(clickEl).on('keydown',function(target){
            if(target.keyCode == 13){
                actEve(target);
            }
        });         
    }
    function tabClick (target) {
        const tabWrap = target.parents('.tab_wrap');
        let targetData = target.data('type');
        const tabCont = tabWrap.find('.tab_list_wrap ul li');
        tabCont.each(function(){
            let tabData = $(this).data('group');
            if(tabData === targetData){
                $(this).show()
            } 
            else if(targetData === 'all') {
                tabCont.show();
            }
            else {
                $(this).hide();
            }    
        })
    }
    
    const $topBtn = $('.floating_area .top_btn');
    $topBtn.hide();
    $(window).on('scroll', function () {
        if ($("html, body").scrollTop() === 0) {
            $topBtn.hide();
        } else if (($("html, body").scrollTop() > 500)) {
            $topBtn.show();
        }
    })
    $topBtn.on('click', function() {
        $("html, body").animate({scrollTop: 0}, "slow");
    })
   
    const $moNav = $('.mo_nav');
    const $navBtn = $('.mo_nav_btn .btn')
    $navBtn.on('click', function () {
        $moNav.toggleClass('on')
    })
   
    AOS.init();
    clickEvent();
    mouseOver();
    
    
})


