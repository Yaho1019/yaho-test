const testData = {

title: "디저트 성향 테스트",

questions: [

{
question: "좋아하는 간식은?",

answers: [
{ text:"케이크", scores:{ cake:2 } },
{ text:"젤리", scores:{ jelly:2 } },
{ text:"초콜릿", scores:{ choco:2 } }
]
},

{
question: "좋아하는 색은?",

answers: [
{ text:"분홍", scores:{ choco:1, cake:3 } },
{ text:"노랑", scores:{ jelly:3, cake:1 } },
{ text:"검정", scores:{ choco:3, jelly:1 } }
]
},

{
question: "좋아하는 계절은?",

answers: [
{ text:"봄", scores:{ choco:1, cake:3 } },
{ text:"여름", scores:{ jelly:3, cake:1 } },
{ text:"겨울", scores:{ choco:3, jelly:1 } }
]
}

],

results: {

cake: {
title:"딸기 케이크 타입",
desc:"부드럽고 다정한 분위기를 가진 사람입니다.",
image:"images/cake.png",
tags:["다정함","공감형","섬세함"],
good:"상대의 기분을 잘 살피고, 주변 사람을 편안하게 만듭니다.",
bad:"거절을 어려워해서 혼자 지치는 일이 많습니다.",
match:"젤리 타입",
mismatch:"초콜릿 타입"
},

jelly: {
title:"젤리 타입",
desc:"통통 튀고 자유로운 에너지를 가진 사람입니다.",
image:"images/cake.png",
tags:["자유로움","유쾌함","즉흥형"],
good:"분위기를 밝게 만들고, 새로운 일을 겁내지 않습니다.",
bad:"흥미가 식으면 금방 지루해질 수 있습니다.",
match:"초콜릿 타입",
mismatch:"딸기 케이크 타입"
},

choco: {
title:"초콜릿 타입",
desc:"차분하고 깊이 있는 매력을 가진 사람입니다.",
image:"images/cake.png",
tags:["차분함","신중함","몰입형"],
good:"한번 마음먹은 일에 깊게 집중하고 쉽게 흔들리지 않습니다.",
bad:"속마음을 잘 드러내지 않아 오해를 살 수 있습니다.",
match:"딸기 케이크 타입",
mismatch:"젤리 타입"
}


}

};