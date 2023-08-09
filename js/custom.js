$('body').prepend('<header class="header"></header>');
$('header').load('./header.html', head);

function head() {
    $('header .head ul li a').on('click', function () {
        localStorage.setItem('num', $(this).index());
        location.href = $(this).attr('href');
    })
}

$('body').append('<footer></footer>');
$('footer').load('./footer.html');

const fain = document.querySelectorAll('.fadeIn')
const fain1 = document.querySelectorAll('.fadeIn1')



let view = new IntersectionObserver(function (v) {
    v.forEach(function (d) {
        if (d.intersectionRatio > 0) {
            d.target.classList.add('active')
        } else {
            d.target.classList.remove('active')
        }
    })
})

fain.forEach(function (v) {
    view.observe(v)
})


let view1 = new IntersectionObserver(function (v) {

    v.forEach(function (d1, k) {

        if (d1.intersectionRatio > 0) {
            setTimeout(function () {
                d1.target.classList.add('active')
            }, 500 * k)
        } else {
            d1.target.classList.remove('active')
        }
    })
})

fain1.forEach(function (v) {
    view1.observe(v)
})





let icons = {
    a: [
        {
            아이콘: './imgs/main/ico_a1.svg',
            이름: '도서관포털'
        },
        {
            아이콘: './imgs/main/ico_a2.svg',
            이름: `미래놀이터 
들락날락`
},
        {
            아이콘: './imgs/main/ico_a3.svg',
            이름: `부산아이
다가치키움`
        },
        {
            아이콘: './imgs/main/ico_a4.svg',
            이름: '부산청년 플랫폼'
        },
        {
            아이콘: './imgs/main/ico_a5.svg',
            이름: '50+부산포털'
        },
        {
            아이콘: './imgs/main/ico_a6.svg',
            이름: '지방세납부'
        },
        {
            아이콘: './imgs/main/ico_a7.svg',
            이름: '동백전'
        },
        {
            아이콘: './imgs/main/ico_a8.svg',
            이름: '부비카정보'
        }
    ],
    b: [
        {
            아이콘: './imgs/main/ico_b1.svg',
            이름: `2030부산 
세계박람회`
        },
        {
            아이콘: './imgs/main/ico_b2.svg',
            이름: `가덕도
신공항`
        },
        {
            아이콘: './imgs/main/ico_b3.svg',
            이름: `부울경 초광역 
경제동맹`
        },
        {
            아이콘: './imgs/main/ico_b4.svg',
            이름: `부산항(북항)
재개발`
        },
        {
            아이콘: './imgs/main/ico_b5.svg',
            이름: '국제관광도시'
        },
        {
            아이콘: './imgs/main/ico_b6.svg',
            이름: '에코델타시티'
        },
        {
            아이콘: './imgs/main/ico_b7.svg',
            이름: '2030주요업무'
        },
    ],
    c: [
        {
            아이콘: './imgs/main/ico_c1.svg',
            이름: '민원신청'
        },
        {
            아이콘: './imgs/main/ico_c2.svg',
            이름: '시민제안'
        },
        {
            아이콘: './imgs/main/ico_c3.svg',
            이름: '시민열린마루'
        },
        {
            아이콘: './imgs/main/ico_c4.svg',
            이름: '협치부산'
        },
        {
            아이콘: './imgs/main/ico_c5.svg',
            이름: '신고센터'
        },
        {
            아이콘: './imgs/main/ico_c6.svg',
            이름: '공익제보'
        },
        {
            아이콘: './imgs/main/ico_c7.svg',
            이름: '성희롱상담'
        },
        {
            아이콘: './imgs/main/ico_c8.svg',
            이름: '참여예산'
        },
    ],
    d: [
        {
            아이콘: './imgs/main/ico_d1.svg',
            이름: '부산지오파크'
        },
        {
            아이콘: './imgs/main/ico_d2.svg',
            이름: '용두산공원'
        },
        {
            아이콘: './imgs/main/ico_d3.svg',
            이름: '부산시민공원'
        },
        {
            아이콘: './imgs/main/ico_d4.svg',
            이름: '금강공원'
        },
        {
            아이콘: './imgs/main/ico_d5.svg',
            이름: '중앙공원'
        },
        {
            아이콘: './imgs/main/ico_d6.svg',
            이름: '어린이대공원'
        },
        {
            아이콘: './imgs/main/ico_d7.svg',
            이름: '북항친수공원'
        },
    ]
}


const 

guide1 = document.querySelectorAll('.guide nav a'),
menus = document.querySelector('.guide div');

guide1.forEach(function(v,k){
    v.onclick = function(e){
        $(".sub_menu").slideUp();
        e.preventDefault()
        show(this.dataset.name)
    }
})

let show = function(a){
    setTimeout(function(){
        let tag='';
        menus.innerHTML ='';
        tag += `<ul class="si_ang">`
        icons[a].forEach(function(come){
            tag += ` <li class="si_ang_1">
                        <figure class="si_ang_2">
                            <img class ="comeicons" src="${come.아이콘}">
                            <figcaption>
                            <p>${come.이름} </p>
                        </figure>
                    </li>` 
        })
        tag += `</ul>`
        menus.innerHTML = tag;
    },500)
        
    $(".sub_menu").slideDown();

}


