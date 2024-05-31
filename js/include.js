if (document.documentElement.lang === 'ko') {
    var include;
    include = {
        meta : function(){
            document.write('<meta name="viewport" content="width=device-width, initial-scale=1">');
            document.write('<meta name="naver-site-verification" content="6d88449a60af38802fc30f6dc79af0c504e6d867" />');
            document.write('<meta name="google-site-verification" content="msWIoH7rao4XAo3WDfCX9dzytu9PUk4RpL--jWqqv1c" />');
            document.write('<meta name="facebook-domain-verification" content="ft62cbkaw4xu9nmyo70kfwf5al1972" />');
            document.write('<meta name="title" content="아이튜버 크리에이터">');
            document.write('<meta name="keywords" content="아이튜버, 두리번, 아이튜버NFT, I-TUBER NFT, 아이튜버 크리에이터">');
            document.write('<meta name="description" content="아이튜버 크리에이터는 NFT 캐릭터로 누구나 쉽게 방송 콘텐츠를 만들고, 메타버스 공간에서 버츄얼 유튜버로 활동할 수 있도록 도와줍니다.">');
            document.write('<meta property="og:title" content="아이튜버 크리에이터" />');
            document.write('<meta property="og:type" content="website" />');
            document.write('<meta property="og:url" content="https://ituber.co.kr" />');
            document.write('<meta property="og:image" content="https://ituber.co.kr/image/img_opengraph.png" />');
            document.write('<meta property="og:description" content="아이튜버 크리에이터는 NFT 캐릭터로 누구나 쉽게 방송 콘텐츠를 만들고, 메타버스 공간에서 버츄얼 유튜버로 활동할 수 있도록 도와줍니다.">');
        },
        styles: function () {
            document.write('<link rel="icon" href="../image/favicon_ituber.png">');
            document.write('<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">');
            document.write('<link rel="stylesheet" href="../css/reset.css">');
            document.write('<link rel="stylesheet" href="../css/fonts.css">');
            document.write('<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css">');
            document.write('<link rel="stylesheet" href="../css/style.css">');
        },
        scripts : function(){
            document.write('<script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>');
            document.write('<script src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js"></script>');
            document.write('<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>');
            document.write('<script src="../js/style.js" defer></script>');
        },
        skipNav : function(){
            document.write('<div class="skip_navi"><a href="#gnb">주요 메뉴 바로가기</a><a href="#contents">본문 컨텐츠 바로가기</a></div>');
        },
        header : function(){
            document.write('<header class="header">');
            document.write('<div class="logo">');
            document.write('<a href="index.html">');
            document.write('<img src="./image/ico_logo.png" alt="아이튜버크리에이터">');
            document.write('</a>');
            document.write('</div>');
            document.write('<ul class="nav">');
            document.write('<li>');
            document.write('<a href="index.html">');
            document.write('<span>HOME</span>');
            document.write('</a>');
            document.write('</li>');
            document.write('<li>');
            document.write('<a href="ituber_info.html">');
            document.write('<span>about</span>');
            document.write('</a>');
            document.write('</li>');
            document.write('<li>');
            document.write('<a href="ituber_make.html">');
            document.write('<span>how to</span>');
            document.write('</a>');
            document.write('</li>');
            document.write('<li>');
            document.write('<a href="download.html"> ');
            document.write('<span>download</span>');
            document.write('</a>');
            document.write('</li>');
            document.write('</ul>');
            document.write('</header>');
        },
        moNav: function () {
            document.write('<div class="mo_nav">');
            document.write('<ul class="nav">');
            document.write('<li>');
            document.write('<a href="index.html">');
            document.write('<span>HOME</span>');
            document.write('</a>');
            document.write('</li>');
            document.write('<li>');
            document.write('<a href="ituber_info.html">');
            document.write('<span>about</span>');
            document.write('</a>');
            document.write('</li>');
            document.write('<li>');
            document.write('<a href="ituber_make.html">');
            document.write('<span>how to</span>');
            document.write('</a>');
            document.write('</li>');
            document.write('<li>');
            document.write('<a href="download.html"> ');
            document.write('<span>download</span>');
            document.write('</a>');
            document.write('</li>');
            document.write('</ul>');
            document.write('</div>');
            document.write('<div class="mo_nav_wrap">');
            document.write('<div class="mo_nav_btn">');
            document.write('<button type="button" class="btn"></button>');
            document.write('</div>');
            document.write('</div>');
        },
        floating: function () {
            document.write('<div class="floating_area">');
            document.write('<button type="button" class="top_btn">');
            document.write('<span class="a11y">Top</span>');
            document.write('</button>');
            document.write('</div>');  
        },
        footer : function(){
            document.write('<div class="footer">');
            document.write('<div class="inner_wrap">');
            document.write('<div class="footer_inner">');
            document.write('<p class="comp_name">DOORIBUN</p>');
            document.write('<div class="flx">');
            document.write('<div>');
            document.write('<p class="ceo">대표<span>서국한</span></p>');
            document.write('<p class="address">서울시 마포구 토정로 194 2층</p>');
            document.write('<ul class="customer">');
            document.write('<li>T. 02-6395-3926</li>');
            document.write('<li>F. 02-6395-3927</li>');
            document.write('<li>E. itubercreator@dooribun.com</li>');
            document.write('</ul>');
            document.write('<p class="comp_num">사업자등록번호 468-81-00729</p>');
            document.write('</div>');
            document.write('<p class="copyright">ⒸDooribun Co., Ltd. 2022</p>');
            document.write('</div>');
            document.write('</div>');
            document.write('</div>');
            document.write('</div>');
        },
    }
}
else {
    include = {
        meta : function(){
            document.write('<meta name="viewport" content="width=device-width, initial-scale=1">');
            document.write('<meta name="naver-site-verification" content="6d88449a60af38802fc30f6dc79af0c504e6d867" />');
            document.write('<meta name="google-site-verification" content="msWIoH7rao4XAo3WDfCX9dzytu9PUk4RpL--jWqqv1c" />');
            document.write('<meta name="facebook-domain-verification" content="ft62cbkaw4xu9nmyo70kfwf5al1972" />');
            document.write('<meta name="title" content="I-TUBER CREATOR">');
            document.write('<meta name="keywords" content="아이튜버, 두리번, 아이튜버NFT, I-TUBER NFT, I-TUBER CREATOR">');
            document.write('<meta name="description" content="I-TUBER CREATOR는 NFT 캐릭터로 누구나 쉽게 방송 콘텐츠를 만들고, 메타버스 공간에서 버츄얼 유튜버로 활동할 수 있도록 도와줍니다.">');
            document.write('<meta property="og:title" content="I-TUBER CREATOR" />');
            document.write('<meta property="og:type" content="website" />');
            document.write('<meta property="og:url" content="https://ituber.co.kr" />');
            document.write('<meta property="og:image" content="https://ituber.co.kr/image/img_opengraph.png" />');
            document.write('<meta property="og:description" content="I-TUBER CREATOR는 NFT 캐릭터로 누구나 쉽게 방송 콘텐츠를 만들고, 메타버스 공간에서 버츄얼 유튜버로 활동할 수 있도록 도와줍니다.">');
        },
        styles: function () {
            document.write('<link rel="icon" href="../image/favicon_ituber.png">');
            document.write('<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">');
            document.write('<link rel="stylesheet" href="../css/reset.css">');
            document.write('<link rel="stylesheet" href="../css/fonts.css">');
            document.write('<link rel="stylesheet" href="../css/style.css">');
        },
        scripts : function(){
            document.write('<script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>');
            document.write('<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>');
            document.write('<script src="../js/style.js" defer></script>');
        },
        skipNav : function(){
            document.write('<div class="skip_navi"><a href="#gnb">Go to Main Menu</a><a href="#contents">본문 컨텐츠 바로가기</a></div>');
        },
        header : function(){
            document.write('<header class="header">');
            document.write('<div class="logo">');
            document.write('<a href="index.html">');
            document.write('<img src="../image/ico_logo.png" alt="I-TUBER CREATOR LOGO">');
            document.write('</a>');
            document.write('</div>');
            document.write('<ul class="nav">');
            document.write('<li>');
            document.write('<a href="index.html">');
            document.write('<span>HOME</span>');
            document.write('</a>');
            document.write('</li>');
            document.write('<li>');
            document.write('<a href="ituber_info.html">');
            document.write('<span>about</span>');
            document.write('</a>');
            document.write('</li>');
            document.write('<li>');
            document.write('<a href="ituber_make.html">');
            document.write('<span>how to</span>');
            document.write('</a>');
            document.write('</li>');
            document.write('<li>');
            document.write('<a href="download.html"> ');
            document.write('<span>download</span>');
            document.write('</a>');
            document.write('</li>');
            document.write('</ul>');
            document.write('</header>');
        },
        moNav: function () {
            document.write('<div class="mo_nav">');
            document.write('<ul class="nav">');
            document.write('<li>');
            document.write('<a href="index.html">');
            document.write('<span>Home</span>');
            document.write('</a>');
            document.write('</li>');
            document.write('<li>');
            document.write('<a href="ituber_info.html">');
            document.write('<span>about</span>');
            document.write('</a>');
            document.write('</li>');
            document.write('<li>');
            document.write('<a href="ituber_make.html">');
            document.write('<span>HOW to</span>');
            document.write('</a>');
            document.write('</li>');
            document.write('<li>');
            document.write('<a href="download.html"> ');
            document.write('<span>download</span>');
            document.write('</a>');
            document.write('</li>');
            document.write('</ul>');
            document.write('</div>');
            document.write('<div class="mo_nav_wrap">');
            document.write('<div class="mo_nav_btn">');
            document.write('<button type="button" class="btn"></button>');
            document.write('</div>');
            document.write('</div>');
        },
        floating: function () {
            document.write('<div class="floating_area">');
            document.write('<button type="button" class="top_btn">');
            document.write('<span class="a11y">Top</span>');
            document.write('</button>');
            document.write('</div>');  
        },
        footer : function(){
            document.write('<div class="footer">');
            document.write('<div class="inner_wrap">');
            document.write('<div class="footer_inner">');
            document.write('<p class="comp_name">DOORIBUN</p>');
            document.write('<div class="flx">');
            document.write('<div>');
            document.write('<p class="ceo">CEO<span>SEO KOOKHAN</span></p>');
            document.write('<p class="address">2F, 194, Tojeong-ro, Mapo-gu, Seoul, Republic of Korea</p>');
            document.write('<ul class="customer">');
            document.write('<li>T. 02-6395-3926</li>');
            document.write('<li>F. 02-6395-3927</li>');
            document.write('<li>E. itubercreator@dooribun.com</li>');
            document.write('</ul>');
            document.write('<p class="comp_num">Company registration number 468-81-00729</p>');
            document.write('</div>');
            document.write('<p class="copyright">ⒸDooribun Co., Ltd. 2022</p>');
            document.write('</div>');
            document.write('</div>');
            document.write('</div>');
            document.write('</div>');
        },
    }
}


