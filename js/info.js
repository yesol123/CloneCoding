let menus = {

    a:[
        {
            이름 :'전통시장 햔황'
        },
        {
            이름 :'가스안전 사용요령'
        },
        {
            이름 :`동남권 방사선 
의·과학 산업단지`
        },
        {
            이름 :`클린에너지 보급 
사업`
        },
        {
            이름 :'경제자유구역 지원안내'
        },
        {
            이름 :`해외마케팅 
통합시스템`
        },
        {
            이름 :'부산경제통계포털'
        },
        {
            이름 :'부산경제진흥원'
        },
        {
            이름 :'부산창업포털'
        },
        {
            이름 :'부산일자리정보망'
        },
        {
            이름 :'부산청년플랫폼'
        },
        {
            이름 :'워크넷'
        },
    ],

    b:[
        {
            이름 :`부산장애인
일자리정보망`
        },
        {
            이름 :`부산형
기초보장제도`
        },
        {
            이름 :'장기요양보험제도'
        },
        {
            이름 :'장애인 무료서비스'
        },
        {
            이름 :'신중년 일자리지원'
        },
        {
            이름 :'돌봄시설 위치 찾기'
        },
        {
            이름 :`부산아이
다가치키움`
        },
        {
            이름 :'여성새로일하기센터'
        },
        {
            이름 :`여성폭력방지
종합지원센터`
        },
        {
            이름 :'부산시건강지원센터'
        },
        {
            이름 :'공공심야약국안내'
        },
        {
            이름 :'응급실찾기'
        },
    ],

    c:[
        {
            이름 :'시민안전 행동요령'
        },
        {
            이름 :'미세먼지 대응요령'
        },
        {
            이름 :`도시침수 
재해정보지도`
        },
        {
            이름 :'도시계획 아고라'
        },
        {
            이름 :`정비사업 
통합홈페이지`
        },
        {
            이름 :'건축동향'
        },
        {
            이름 :`시민생활안전
지킴이`
        },
        {
            이름 :'안전신문고'
        },
        {
            이름 :`재난안전대책기관
전화번호 안내`
        },
        {
            이름 :'부산산림교육센터'
        },
        {
            이름 :`공동주택관리
정보시스템`
        },
        {
            이름 :`대기오염 예보
/경보 SMS신청`
        },
    ],

    
    d:[
        {
            이름 :'시내버스 준공영제'
        },
        {
            이름 :`교통정보 
서비스센터`
        },
        {
            이름 :'버스노선 보기'
        },
        {
            이름 :`주정차/전용차로
위반정보 조회`
        },
        {
            이름 :'부산안전속도 5030'
        },
        {
            이름 :`한국도로공사
교통센터`
        },
        {
            이름 :'해양수산 안전 검사'
        },
        {
            이름 :`해양수산 
방사능 검사결과`
        },
        {
            이름 :`해양안전
종합정보시스템`
        },
        {
            이름 :`오염수 대응
정책정보 모아보기`
        },
        {
            이름 :'농수산물도매시장'
        },
        {
            이름 :`반려동물
복지문화센터`
        },
    ],
    
    e:[
        {
            이름 :'적극행정'
        },
        {
            이름 :'고객불만ZERO'
        },
        {
            이름 :'납세자보호관'
        },
        {
            이름 :'자치법규'
        },
        {
            이름 :'자치경찰위원회'
        },
        {
            이름 :'디지털배움터'
        },
        {
            이름 :'부산평생교육정보망'
        },
        {
            이름 :'교육연구정보원'
        },
        {
            이름 :'부산교육청'
        },
        {
            이름 :'학부모지원포털'
        },
        {
            이름 :'부산글로벌빌리지'
        },
        {
            이름 :`'궁리IN'플랫폼`
        },
    ],

    
    f:[
        {
            이름 :'부산문화 다봄'
        },
        {
            이름 :'부산박물관'
        },
        {
            이름 :'부산시립미술관'
        },
        {
            이름 :'부산현대미술관'
        },
        {
            이름 :'부산근현대역사관'
        },
        {
            이름 :'충렬사'
        },
        {
            이름 :'부산 갈맷길'
        },
        {
            이름 :'물놀이 가능공원'
        },
        {
            이름 :'비짓부산'
        },
        {
            이름 :'의료관광'
        },
        {
            이름 :'부산지오파크'
        },
        {
            이름 :'공연·행사·축제'
        },
    ]
}

const
nav = document.querySelectorAll('.baro section nav a'),
ul = document.querySelector('.baro section ul');

let num=0;
nav.forEach(function(v,k){
    v.onclick = function(e){
        e.preventDefault()
        nav[num].classList.remove('on')
        this.classList.add('on')
        num = k
        showd(this.dataset.name)
    }

})

let showd = function(ks){
    let tag ='';
    ul.innerHTML=``;
    menus[ks].forEach(function(v){
        tag += `
        <li><a href="#"> ${v.이름} </a></li>
        `
    })
    ul.innerHTML = tag
}






//popup--------------------------------------------------------------------------


const
time = document.querySelector('.time');

const date = new Date();
const hours = date.getHours();
const minutes = date.getMinutes();

if (hours < 12){
    time.innerText= `오전 ${hours}:${minutes}`
    }else{
        time.innerText= `오후 ${hours}:${minutes}`}




const 
show = document.querySelector('.chatt'),
chat = document.querySelector('footer div input')
btn = document.querySelector('footer div button');


btn.onclick = function(){
    show.innerHTML += `<img src="./imgs/popup/question_profile.png"><p>${chat.value}</p><br>`
}
function chatd(e){
    const show = document.querySelector('.chatt'),
    chat = document.querySelector('footer div input'),
    main = document.querySelector('.main')
    if(e.code === 'Enter'){
        const date2 = new Date();
        const hours2 = date2.getHours();
        const minutes2 = date2.getMinutes();
        let time2 ='';
        if (hours2 < 12){
            time2 = `오전 ${hours2}:${minutes2}`
            }else{
                time2 = `오후 ${hours2}:${minutes2}`
            }
        show.innerHTML += `<img src="./imgs/popup/question_profile.png">
        <p>${chat.value}</p><span class="time2">${time2}</span><br>` 
        chat.value = ``;
        $(".main").scrollTop($(".main")[0].scrollHeight)
    }
    
}













