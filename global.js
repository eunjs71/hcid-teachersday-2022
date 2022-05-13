let bgm_teachersday;
let bgm_looping = false;
let sound_button;

function preload() {
  bgm_teachersday = loadSound("sound/teachersday.mp3");
  sound_button = loadSound("sound/button_sound.mp3");
}

function setup() {
  sound_button.play();
}

function bgm_loop() {
  if (bgm_looping == false) {
    bgm_teachersday.loop();
    bgm_looping = true;
  }
}

function sound_btn_clicked() {
  sound_button.play();
}

const mouseTransitionTime = 125;

const cursorData = {
  mode: 1,
};

function getCursorMode() {
  return cursorData.mode;
}

function setCursorMode(mode) {
  cursorData.mode = mode;
}

function mouseClick() {
  //   console.log("mouse clicked");
  if (getCursorMode() == 1) {
    setCursorMode(3);
    document.body.style.cursor = "url('image/ball3ss.png') 15 20, auto";
    setTimeout(() => {
      if (getCursorMode() == 3) {
        setCursorMode(2);
        document.body.style.cursor = "url('image/ball2ss.png') 15 20, auto";
        setTimeout(() => {
          if (getCursorMode() == 2) {
            document.body.style.cursor = "url('image/ball1ss.png') 15 20, auto";
            setCursorMode(1);
            // console.log("1");
          }
        }, mouseTransitionTime);
        // console.log(2);
      }
    }, mouseTransitionTime);
    // console.log(3);
  }
}

document.body.onclick = mouseClick;

function nextPage() {
  $.fn.fullpage.moveSectionDown();
}

let menu = document.getElementsByClassName("menu")[0];
menu.style.height = `${parseInt(screen.height) * 0.9}px`;

let startButton = document.getElementsByClassName("menu__start")[0];
// startButton.onclick = nextPage;
startButton.addEventListener("click", nextPage, false);
startButton.addEventListener("click", sound_btn_clicked, false);

let characterSelect = document.getElementsByClassName("characterSelect")[0];
characterSelect.style.height = `${parseInt(screen.height) * 0.9}px`;

let characterButtons = document.getElementsByClassName(
  "characterSelect__characters__character"
);
for (let b of characterButtons) {
  b.onclick = nextPage;
  b.addEventListener("click", bgm_loop, false);
  b.addEventListener("click", sound_btn_clicked, false);
}

// let gradex = document.getElementsByClassName("gradex")[0];
// gradex.style.height = `${parseInt(screen.height) * 0.8}px`;

// let gradex_items = document.getElementsByClassName(
//   "gradex__list__title__items__item"
// );

// for (let gi of gradex_items) {
//   gi.addEventListener("click", sound_btn_clicked, false);
// }

let ngradex = document.getElementsByClassName("ngradex")[0];
ngradex.style.height = `${parseInt(screen.height) * 0.9}px`;
let nw = ngradex.getBoundingClientRect().width;
let nh = ngradex.getBoundingClientRect().height;
if (2 * nw >= 3 * nh) {
  ngradex.style.width = `${nh * 1.5}px`;
} else {
  ngradex.style.height = `${nw / 1.5}px`;
}

let ngradex_right_button = document.getElementsByClassName(
  "ngradex__page__rightbox__bbton"
)[0];

ngradex_right_button.addEventListener("click", sound_btn_clicked, false);

const letters = [
  {
    name: "심지연",
    pokenum: 133,
    level: 26,
    dept: "언론정보학과",
    status: "석사 과정",
    "letter-j":
      "교수님, 스승의 날 축하드려요! 항상 좋은 가르침 주셔서 감사합니다! HCI는 저에게 새로운 분야이자 도전이였는데 교수님 덕분에 너무 재밌게 배우고 있는 것 같습니다. 앞으로도 더 열심히 하겠습니다! 항상 좋은 일만 가득하시길 바랄게요:) !! ㅎㅎㅎ ",
    "letter-h":
      "교수님, 스승의 날 축하드려요! 미팅 때마다 항상 좋은 의견 주시고 응원해 주셔서 감사합니다! 교수님 조언과 가르침 덕분에 많이 배우고 있어요! 감사합니다! 항상 좋은 일만 가득하셨으면 좋겠어요! ㅎㅎ",
  },
  {
    name: "김수민",
    pokenum: 7,
    level: 99,
    dept: "언론정보학과",
    status: "졸업생",
    "letter-j":
      "선생님 작년 한해 잘 이끌어주시고 무사히 졸업 시켜주셔서 감사해요~ 교수님 랩에 문 두들긴지 어연 8년이란 시간이 되었는데 그동안 학문적으로도 인격적으로도 배울 수 있었던 값진 시간 이었어요~ 저희 랩에 들어와서 너무 행운이었어요!!! 앞으로도 잘 부탁드려요😍",
    "letter-h": "",
  },
  {
    name: "황유짘",
    pokenum: 143,
    level: 77,
    dept: "인지과학 협동과정",
    status: "졸업생",
    "letter-j":
      "교수님~ 황유진입니다:)\n운좋게 스승의날에 교수님 찾아뵙게 되어 넘 행복하네용~~ 스승의날 말고도 자주 찾아뵐게용~저 졸업했다고 잊으시면 안되요!!  항상 감사합니다😄 \n어디에 있던 저희 hci+d연구실 넘 사랑해요🧡",
    "letter-h": "",
  },
  {
    name: "주소리",
    pokenum: 245,
    level: 99,
    dept: "인지과학 협동과정",
    status: "석사 과정",
    "letter-j":
      "선생님!!! 소리입니다!! XD 졸업한지도 벌써 4개월이 다 되어 가네요... 하지만 언제나 선생님과 hci+d를 잊지 않고 있습니다! 자주 찾아오라고 하셨는데 자주 찾아뵙지 못해 죄송합니다 ㅠ_ㅠ 좋은 소식 갖고 찾아뵐 수 있도록 하겠습니다!!",
    "letter-h": "",
  },
  {
    name: "정규하",
    pokenum: 70,
    level: 26,
    dept: "언론정보학과",
    status: "석사 과정",
    "letter-j":
      "선생님 안녕하세요, 석사생 정규하입니다~ 나리봇 할  때가 엊그제 같은데 제가 선생님을 뵌 지 벌써 3년이 되가네요. 저를 포함한 학생들 옆에서 연구와 학교 생활에 있어 매번 든든한 조언자가 되어주시고 폭넓은 관점을 제시해주셔서 감사합니다. 선생님 덕분에 HCI에 더욱 관심이 커지는 제 자신을 발견할 수 있었습니다. 저도 선생님에게 든든한 제자가 될 수 있도록 더욱 열심히 연구하겠습니다. 늘 건강하세요 선생님. 스승의 날 축하드립니다!!",
    "letter-h":
      "선생님 안녕하세요, 석사생 정규하입니다~ 선생님이 랩실에 오신지 벌써 3개월차에 접어들고 있네요. 아무래도 이번 학기에 오셔서 정말 바쁜 날을 보내고 계실 것 같은데요, 저를 포함한 랩실 학생들에게 하진쌤이 계신다는 것이 얼마나 큰 행운인지 알고 계실까요. 저희끼리 얘기할 때도 두 분의 선생님께 동시에 조언을 받아서 너무 유익하고 행복하다고 종종 얘기하곤 합니다. 특히 연구 및 학교 생활에 대해서 매번 시간 내주시고, 객관적이고 정확한 판단/조언을 해주시고, 예상치 못한 인사이트를 제공해주셔서 정말 감사드려요. 선생님 덕분에 HCI에 더욱 관심이 커지는 제 자신을 발견할 수 있었습니다. 저도 선생님에게 든든한 제자가 될 수 있도록 더욱 열심히 연구하겠습니다. 늘 건강하세요 선생님. 스승의 날 축하드립니다!!",
  },
  {
    name: "진예원",
    pokenum: 26,
    level: 1,
    dept: "언론정보학과",
    status: "석사 과정",
    "letter-j":
      "이준환 교수님 안녕하세요 진예원입니다. 석사 2개월차 baby 이지만 열심히 성장중입니다. 교수님만 보고 서울대학교 대학원에 오게 되었는데 좋은 선택이었던 것 같습니다. 원하던 공부를 하고있는 것같아요. 뉴비 미팅때도 매주 좋은 말씀 해주시고 감사합니다. 스승의 날 축하드리고 늘 건강하세요!\n예원 드림",
    "letter-h":
      "안녕하세요 임하진 교수님. 석사 2개월차 진예원입니다. 저번에 교수님께 개인적으로 면담 신청했었는데 정말 경험에서 우러나온 말씀이 많이 와닿았습니다. 걱정이 많았는데 좀 나아진 것 같고 열심히 공부해야겠다는 의지도 생겼어요. 항상 감사합니다. 앞으로도 잘부탁드려요. 헤헤. 스승의 날 축하드리고 늘 건강하세요!\n예원 드림",
  },
  {
    name: "전소윤",
    pokenum: 7,
    level: "50? ㅋㅋ",
    dept: "언론정보학과",
    status: "박사 과정",
    "letter-j":
      "선생님! 항상 따뜻하게 지도해주시고, 이끌어주셔서 감사합니다. 건강하세요!!! 사랑합니다♡ -소윤-",
    "letter-h": "",
  },
  {
    name: "곽민경",
    pokenum: 7,
    level: 1,
    dept: "언론정보학과",
    status: "석사 과정",
    "letter-j":
      "교수님! 항상 세심하게 가르쳐주시고 재밌는 이야기도 많이 해주셔서 감사드립니다! 앞으로도 더 열심히 배우는 제자 되도록 노력하겠습니다 ~ >0<",
    "letter-h":
      "교수님 항상 뉴비 미팅때 꼼꼼히 봐주셔서 많이 배웁니다! 열심히 하는 제자 되겠습니다!! 항상 정말 감사드립니다 ^0^",
  },
  {
    name: "장수연",
    pokenum: 132,
    level: 77,
    dept: "언론정보학과",
    status: "졸업생",
    "letter-j":
      "준환 선생님! 벌써 징글징글한 8년차😱...직장인이 되고보니 스스로 돌이켜보는 순간들이 많은데요. 그 때마다 선생님과 우리 연구실 덕분에 여기까지 왔구나, 하고 감사의 맘을 느끼곤 합니다☺️ 그 마음만큼 자주 찾아뵙고 싶은데 그러지 못해서 아쉽고 죄송스러울 따름이어요. 너무 더워지기 전에 날 좋을 때 꼭! 한번 학교로 찾아 뵙겠습니다 :) 행복한 스승의 날 보내셔요! 🌹",
    "letter-h":
      "아니 세상에 하진언니..! 이젠 하진교수님! 진짜 너무너무 축하드려요-!! 멋집니당☺️ 학교 가게되면 교수님방 빼꼼 놀러가고 싶네요! 저의 어색반가운 인사를 받아주실 것을 기대하며,,,ㅎㅎ 다시한번 축하드립니다~! ",
  },
  {
    name: "이하연",
    pokenum: 196,
    level: 77,
    dept: "언론정보학과",
    status: "석사 과정",
    "letter-j":
      "안녕하세요 선생님! 하연입니당!!(●'◡'●) 항상 많은 가르침 주셔서 감사합니다!!! 열심히 지도해 주셔서 이번에 무사히 프로포절 통과했습니다╰(*°▽°*)╯ 이제부터 또 열심히 공부하고 실험도 차근차근 잘 준비해서 논문까지 잘 작성하도록 하겠습니다!! hcid 랩에 들어와서 너무 재밌고 즐거워요..!!! 앞으로도 hcid 연구실에서 많이 보고 배우겠습니다 ㅎㅎ 그리고.. 프로포절 끝나고 신나게 놀고 있었는데요...ㅎㅎ 이제 슬슬..irb 문건도 준비해보겠습니다...ㅎㅎ 건강하고 행복한 5월 되세요!!❤ ❤ ❤ ",
    "letter-h":
      "안녕하세요 교수님! 이번에 프로포절한 석사과정 이하연입니다!(●'◡'●) 이번에 프로포절 때 정말 많이 가르쳐주시고 지도해주셔서 감사합니다 ㅠㅠㅠ 늦은 밤에도 원고랑 연구가설 봐주시고.. 정말 너무 감사하고 죄송했습니다ㅜㅠㅜ 교수님의 지원 덕분에 이번에 무사히 프로포절 통과할 수 있었던 것 같습니다!! 이제부터 또 열심히 공부하고 실험도 차근차근 준비해서 석사과정 잘 마무리해보도록 하겠습니다 ㅎㅎ╰(*°▽°*)╯ 앞으로도 많이 배우겠습니다..! 즐겁고 행복한 5월 되세요!! ❤ ❤ ❤ ",
  },
  {
    name: "홍나희",
    pokenum: 54,
    level: 35,
    dept: "언론정보학과",
    status: "석사 과정",
    "letter-j":
      "선생님! 제가 졸업한지 벌써 5년이 됐어요. 코로나 핑계로 못 찾아뵈서 죄송해요. 항상 감사드리고 조만간 연락 드릴게요💙😄",
    "letter-h": "",
  },
  {
    name: "김혜선",
    pokenum: 175,
    level: 64,
    dept: "언론정보학과",
    status: "석사 과정",
    "letter-j":
      "이준환 교수님께,\n\n교수님 안녕하세요! 김혜선입니다. 교수님과 함께하는 첫 스승의 날이네요. hcid 랩에 합류한 후 좋은 사람들과 공부할 수 있어서 너무나 행복하게 생활하고 있습니다. 항상 좋은 말씀 해주시고 많은 깨달음을 주셔서 너무너무 감사합니다. 많이 바쁘시지만 건강 꼭 챙기시면서 지내시면 좋겠습니다! 앞으로도 잘 부탁드리며 해피 스승의 날! 되세요 :)\n\n김혜선 드림",
    "letter-h":
      "임하진 교수님께,\n\n교수님 안녕하세요. 김혜선입니다. 교수님이 연구실에 합류하셔서 더욱 액티브한 분위기가 되어 너무 기뻐요. 많이 배우고 있습니다! 학교에서 맞이하는 첫 스승의 날 행복하시면 좋겠습니다 :) 앞으로도 잘 부탁드리며 재미있는 아이디어 많이 낼 수 있도록 노력할게요. 감사합니다, 임하진 교수님!\n\n김혜선 드림",
  },
  {
    name: "이선율",
    pokenum: 43,
    level: 27,
    dept: "언론정보학과",
    status: "석사 과정",
    "letter-j":
      "교수님  아직 아무것도 모르는 저에게 늘 좋은 말씀해주시고 소중한 가르침 주셔서 감사합니다. 늘 바쁘시겠지만 언제나 건강하세요♡ 교수님의 건강이 저희 모두의 바람이랍니다. 앞으로도 발전하는 모습 보여드릴 수 있도록 하겠습니다. 행복하세요..!!♡♡",
    "letter-h":
      "아직 너무나 부족한 저에게도 늘 친절히 가르쳐주셔서 늘 감사했습니다. 교수님의 모든 점이 제 롤모델이셔요♡ 많이 배우고 얼른 성장하겠습니다. 바쁘셔도 꼭 건강 챙기세요! 감사합니다♡♡",
  },
  {
    name: "마르고",
    pokenum: 700,
    level: 25,
    dept: "인지과학 협동과정",
    status: "졸업생",
    "letter-j":
      "교수님 스승의날 축하드립니다! 연구실에 랩로테이션부터 졸업까지 교수님 많은 것을 친절하게 가르쳐주셔서 항상 감사합니다! 행복하시고 건강하세요! 한국에 들어갈 때 또 뵙겠습니다 ^__^",
    "letter-h": "",
  },
  {
    name: "김한울",
    pokenum: 153,
    level: 49,
    dept: "언론정보학과",
    status: "석사 과정",
    "letter-j":
      "선생님 안녕하세요, 석사과정 김한울입니다. 선생님께 메일 드리고 노크하여 인턴십을 부탁드렸던 것이 벌써 2년 반이 지나갔네요. 선생님을 만나뵌 그 순간이 저의 인생의 전환점이라고 생각하여 아직도 생생하게 기억이 납니다. 그 이후 선생님께서 가르쳐주시고, 믿고 일을 맡겨주셔서 2년 반 동안 놀라울 만큼 성장할 수 있었습니다. 정말 감사드립니다. 중간에 많이 흔들리고, 저의 부족한 부분들을 많이 보여드렸지만, 따뜻한 마음으로 저의 상황을 잘 이해해주셔서 지금 다시 일어서게 되었습니다. 너무 감사드립니다. 제가 아직 많이 부족해서 이 은혜를 갚을 길이 없지만, 그만큼 더 노력하고 더 기억하겠습니다.\n석사과정 김한울 올림.",
    "letter-h":
      "임하진 선생님 안녕하세요, 석사과정 김한울입니다.\n선생님과 정식적인 미팅을 한 것은 아직 두 번 뿐이지만, 저에게 꼭 필요한 정보를 콕 찝어서 전해주시고, 확실한 방향성을 잘 잡아주셔서 어려운 상황에서도 일어설 수 있었습니다. 정말 감사드립니다. 좀 더 빠르게 선생님을 찾아 만나 뵈었으면 좋았으리라는 아쉬움이 남습니다. 아쉬운 만큼 선생님을 더 귀찮게 하도록 노력하겠습니다(농담입니다 ㅎㅎ…). 편안하고 건강한 교직 생활이 되시기를 빕니다. 감사합니다.\n석사과정 김한울 올림.",
  },
  {
    name: "황구현",
    pokenum: 132,
    level: 10,
    dept: "언론정보학과",
    status: "석사 과정",
    "letter-j":
      "준환샘 안녕하세요!\n스승의날에 인사를 올립니다.\n\n항상 인사드리고 찾아뵙겠다고 마음 먹으면서도 회사 다니다보면 생각보다 그러기가 쉽지 않은 것 같습니다 ㅠㅠ \n\n지난 번에 전화드렸을 때 반갑게 맞아주셔서 정말 감사합니다. 대학원 생활을 선생님 밑에서 할 수 있어서 다행이고 영광이란 생각을 이따금씩 합니다.\n\n보직때문에 매년 바쁘게 지내고 계실텐데 항상 건강 챙겨주시고 행복하게 보내주세요 :)\n\n20일에 있는 언론학회를 업무상 출장으로 가게될 것 같은데 교수님 계시면 직접 인사 올리겠습니다!\n\n스승의 날에 스승은 왜 쉬지 못하는걸까 싶은 생각이 들지만, 선생님의 건강과 행복이 스승의날에는 두 배, 세 배가 되는 날이 되길 기도하겠습니다!!\n\n항상 감사합니다.\n\n\n황구현 올림",
    "letter-h": "",
  },
  {
    name: "김유정",
    pokenum: 132,
    level: 1,
    dept: "언론정보학과",
    status: "석사 과정",
    "letter-j":
      "교수님, 안녕하세요! 저 유정이에요~ 선생님의 조언과 도움으로 인해 작년 프로포절과 이번 실험 과정이 비교적 순탄하게 흘러가고 있는 것 같아요!! 늘 바쁘신 와중에도, 항상 신경써주셔서 정말 감사합니다. 선생님이 아니었다면, 아마 석사 과정에 연구를 어떻게 해야할지에 대한 감 자체가 오지 않았을 것 같아요. 그리고 그 과정에서 전수진 교수님과 소통하게 되면서, 보다 구체적으로 배우고 많은 것을 느낄 수 있었어요! 전수진 선생님께도 너무 감사하네요~hci+d랩실에서 알게 된 좋은 선배님과 동기들 덕분에 함께 배우고, 성장할 수 있는 것 같아요. 이번 학기에 디펜스 잘하고, 또 틈틈이 연락드릴게요. ",
    "letter-h":
      "교수님, 안녕하세요! 저 유정이에요~~ 처음에 선생님을 뵈었을 때 바쁘신 와중에, 제게 약속한 시간을 내어주시고- 진행중인 연구에 도움을 많이 주셔서 정말 감사합니다. 실험 연구가 처음이고, 석사 논문도 처음인 제게 모든 것이 너무 혼란스럽고 어려웠는데 선생님께서 원래 연구가 그런 것이라면서, 많이 디펜스 하라고 조언해주셨던 것이 생각나네요. 얼마전에 함께 2시간 넘게 노트필기 연구에 대해 이야기를 하면서 꿈에 키에라가 나올 것 같다는 선생님 말씀이 생각나요(!ㅋㅋㅋ) 그만큼 제 연구에 귀 귀울여주시고, 최대한 많이 조언해주셔서 다시 한번 정말 감사드려요. 이번 학기 디펜스 잘 마무리하고, 나중에 선생님 시간 되실 때 찾아뵐게요. 다시 한번 늘 감사해요, 선생님!",
  },
  {
    name: "이소형",
    pokenum: 151,
    level: 33,
    dept: "융합과학부",
    status: "박사 과정",
    "letter-j":
      "교수님 안녕하세요  :) 소형입니다! \n교수님께 배운 내용, 조언들 참고하여 즐겁고 알차게 연구와 일 하고 있습니다. \n꼭 감사하다는 말씀드리고 싶었습니다! \n늘 존경하고 감사합니다 😊",
    "letter-h": "",
  },
  {
    name: "김혁",
    pokenum: 133,
    level: 77,
    dept: "언론정보학과",
    status: "졸업생",
    "letter-j":
      "길게 끌었던 논문도 끝맺음을 하고 여러모로 결실이 있는 해인 것 같아요. 연구자의 길로 이끌어주셔서 고맙습니다. 건강 챙기시고요, 함부르크에서 뵐 수 있기를 기다리겠습니다 :)",
    "letter-h": "",
  },
  {
    name: "박향희",
    pokenum: 39,
    level: 77,
    dept: "언론정보학과",
    status: "박사 과정",
    "letter-j":
      "교수님 오랫동안 한결같이 늘 따뜻하게 지도해주셔서 감사합니다. <3 늘 건강하시고 행복하세요! :)",
    "letter-h": "",
  },
  {
    name: "맹욱재",
    pokenum: 185,
    level: 77,
    dept: "융합과학부",
    status: "박사 과정",
    "letter-j":
      "이준환 교수님, 안녕하세요 맹욱재입니다. 스승의 날에 감사인사를 드리는게 벌써 6년이 되었네요. 제가 힘들었던 시기에 받아주시고, 좋은 연구실에서 생활할 수 있도록 해주신점 언제나 마음속 깊이 새기고 있습니다. “지도”라는 단어로 표현하기에 부족한 연구와 삶의 방향에 관해 늘 가르침을 주셔서 감사드립니다. 멋진 프로젝트에 참여하게 해주시고, 좋은 연구 주제와 방향도 잘 잡아주셔서 뚜벅뚜벅 걸어나가기만 하는데 부족한 제자가 그러지 못해 죄송합니다. 게을리하지 않고 노력해서 학위 잘 마무리할 수 있도록 하겠습니다. ",
    "letter-h": "",
  },
  {
    name: "박유빈",
    pokenum: 393,
    level: 1,
    dept: "언론정보학과",
    status: "석사 과정",
    "letter-j":
      "교수님의 깊은 가르침과 큰 배움으로 한층 성장해 나가고 있습니다! 높은 은혜 잊지 않겠습니다. 얼른 복학해서 교수님 수업 듣고 싶어요ㅎㅎ 연구도 열정적으로 열심히 하겠습니다! 항상 이끌어주셔서 감사합니다!",
    "letter-h":
      "교수님을 알게 된지 얼마 되지 않았지만 벌써 너무 큰 가르침과 배움을 얻었습니다. 생각하지 못한 새로운 방향성을 제시해주시고 이끌어주셔서 감사합니다. 감사합니다!",
  },
  {
    name: "이규호",
    pokenum: 129,
    level: 1,
    dept: "언론정보학과",
    status: "박사 과정",
    "letter-j":
      "항상 지도에 감사드립니다. 박사 과정을 빨리 마칠 수 있도록 노력하겠습니다.",
    "letter-h": "",
  },
  {
    name: "권익재",
    pokenum: 1,
    level: 1,
    dept: "인지과학 협동과정",
    status: "석사 과정",
    "letter-j":
      "홍화정 교수님께 지도를 받다가 이렇게 갑자기 변경되었음에도 불구하고 열정적으로 지도해주셔서 감사합니다. 처음엔 석사 졸업을 포기해야하나 많은 고민도 되었습니다만, 교수님의 따뜻한 지도와 뛰어나신 분들이 많이 있는 Hci-d Lab 일원으로 함께해서 너무 감사한 한해였던 것 같습니다. 올 한해 제 개인적으로 사건/사고가 많았음었음에도 부모님처럼 따뜻하게 지도해주셔서 너묵 감사했고 항상 건강하시고 행복하시길 기도하겠습니다.",
    "letter-h":
      "제대로 인사 드리지도 못하고 갑자기 석사 논문 심사 위원을 요청 드렸음에도 흔쾌히 승낙해주셔서 얼마나 감사했는지 모릅니다. 교수님께서 함께해주셔서 너무 감사하고 교수님께서도 항상 건강하시고 행복하시길 기도하겠습니다. ",
  },
  {
    name: "고소영",
    pokenum: 43,
    level: 22,
    dept: "언론정보학과",
    status: "석사 과정",
    "letter-j":
      "선생님, 제게 많은 용기를 주셔서 감사합니다. 뚜벅쵸처럼 뚜벅뚜벅 걸어서 꼭 해낼 수 있도록 하겠습니다. 건강히 지내시고 늘 행복하세요!!",
    "letter-h":
      "선생님께서 처음 면담하던 날 해주신 이야기가 큰 도움이 되었습니다. 만나뵙게 되어 행운이고 감사드립니다. 선생님도 건강히 지내시고 행복하세요!!",
  },
  {
    name: "박서라",
    pokenum: 258,
    level: 27,
    dept: "언론정보학과",
    status: "석사 과정",
    "letter-j":
      "교수님 서라입니다! 정문과에 이어서 대학원까지 네코준환의 가호 아래ㅎㅎ hci+d 랩에서 공부하고 연구할 수 있어서 정말 좋습니다! 정식으로(?) 스승의 날에 인사드리는 건 처음인 것 같은데 정말 감사드리고 앞으로도 잘 부탁드립니다~!!",
    "letter-h":
      "안녕하세요 교수님 서라입니다! 아직 많은 말씀을 나눠보진 못했지만 함께 연구실에서 만나뵙게 되어서 정말 반갑고, 앞으로 미팅 등으로 더 많이 얘기나눌 수 있었으면 좋겠습니다ㅎㅎ 스승의날 감사드립니다~!",
  },
  {
    name: "홍유진",
    pokenum: 417,
    level: 26,
    dept: "언론정보학과",
    status: "석사 과정",
    "letter-j":
      "이준환 교수님 안녕하세요 유진이에요 (홍이요ㅎㅎ)\n제가 평상시에 표현을 잘 못하지만 교수님 너무 좋아요 최고예요❤️❤️❤️\n교수님 덕분에 hcid 랩에 함께할 수 있어서 항상 감사하고 있어요.\n앞으로 더 열심히 하는 모습 보여드릴 수 있도록 노력하겠습니다! (＞Д＜)ゝ 충성충성!\n홍유진 올림",
    "letter-h":
      "임하진 교수님 안녕하세요!\n단체미팅이나 개인미팅 때 마다 중요한 포인트도 많이 짚어주시고 좋은 이야기 많이 해주셔서 감사합니다. 스승의 날 축하드려요! 감사합니다.\n홍유진 올림",
  },
  {
    name: "이상혁",
    pokenum: 143,
    level: 39,
    dept: "언론정보학과",
    status: "박사 과정",
    "letter-j":
      "선생님 안녕하세요 이상혁입니다. 늘 학생들과 함께 걷고 눈높이를 맞춰주셔서 감사드립니다. 항상 건강하시고 행복한 하루하루가 이어지시기를 바랍니다.",
    "letter-h": "",
  },
  {
    name: "김현주",
    pokenum: 25,
    level: 10,
    dept: "언론정보학과",
    status: "박사 과정",
    "letter-j":
      "선생님 태평양같이 넓고 깊은 인내로 기다려주시고 이끌어주셔서 늘 너무 감사하고 죄송할 따름입니다.  올해도 건강하시고 또 왕성히 연구하시길 빌께요. 저도 열심히해서 너무 오래 걸리지 않도록 하겠습니다.   ",
    "letter-h":
      "임하진 선생님 올해 연구실에서 뵙게되어 기쁩니다. 앞으로 많은 지도 부탁드리겠습니다. \n부임 첫 해 모든 일들이 순조로우시길 빕니다. 감사합니다. ",
  },
  {
    name: "김준석",
    pokenum: 132,
    level: 33,
    dept: "인지과학 협동과정",
    status: "졸업생",
    "letter-j":
      "안녕하세요 선생님! 김준석입니다. 건강히 잘 지내시죠? 석사를 졸업하던 다음해부터 계속되었던 코로나도 어느새 거의 끝나가고 있는 것 같습니다. 회사를 다니다보니 학부와 대학원 시절이 자주 생각납니다. 강의에서 얻은 지식 외에도 선생님 밑에서 배우고 익혔던게 정말 많았던 것 같아요. 오늘은 아쉽게 편지로만 인사드리지만 조만간 찾아뵙도록 하겠습니다. 스승의 날 축하드리고 건강하세요!",
    "letter-h": "",
  },
  {
    name: "은진수",
    pokenum: 53,
    level: 9,
    dept: "융합과학부",
    status: "박사 과정",
    "letter-j":
      "이준환 교수님께...\n\n 교수님, 날씨가 점점 더워져 하루 빨리 중앙 냉방이 나왔으면 하는 여름이 다가오고 있는 요즘입니다. 잘 지내고 계시는지요. 저는 잘 지내고 있습니다. 비록 날씨는 덥지만 올해 논문 공장은 풀 가동시키겠습니다. 항상 건강 잘 챙기시고 오래오래 행복하세요~\n\n감사합니다.",
    "letter-h":
      "임하진 교수님께.\n\n안녕하세요. 박사과정 은진수입니다. 첫 스승의 날 축하드리며, 앞으로 논문 지도도 잘 부탁드립니다.\n\n감사합니다.",
  },
  {
    name: "박성민",
    pokenum: 607,
    level: 43,
    dept: "언론정보학과",
    status: "석사 과정",
    "letter-j":
      "안녕하세요 선생님 성민입니다^^. 졸업 후에도 계속 학교에 남아 있으니 졸업한 기분이 안 드는 것은 왜일까요ㅎㅎ. 학부 때부터 석사 과정까지 선생님의 지도를 받았다니,, 오랜 기간 동안 고생 많으셨습니다. 앞으로도 건강하시고, 좋은 일들 많이 하시며 행복한 일들 많으셨으면 좋겠습니다. 스승의 날 축하드리고, 감사합니다.",
    "letter-h": "",
  },
];

let letters_to_jh = [];
let letters_to_hj = [];

for (let letter of letters) {
  letters_to_jh.push(letter);
  if (letter["letter-h"].length > 0) {
    letters_to_hj.push(letter);
  }
}

let ngradex_mode = "";

function rScreenReset(title) {
  let rscreen_title = document.getElementsByClassName(
    "ngradex__page__rightbox__rscreen__title"
  )[0];
  rscreen_title.innerText = title;

  let rList = document.getElementsByClassName(
    "ngradex__page__rightbox__rscreen__list"
  )[0];

  while (rList.firstChild) {
    rList.removeChild(rList.lastChild);
  }
  return rList;
}

function deleteLeftScreen() {
  let linfo = document.getElementsByClassName(
    "ngradex__page__leftscreen__info"
  )[0];

  while (linfo.firstChild) {
    linfo.removeChild(linfo.lastChild);
  }

  return linfo;
}

function addJHLetterList() {
  ngradex_mode = "JH";

  let linfo = deleteLeftScreen();
  let linfo_ph = document.createElement("div");
  linfo_ph.className = "ngradex__page__leftscreen__info__placeholder";
  linfo_ph.innerText = "포켓몬을 선택해주세요!";
  linfo.appendChild(linfo_ph);

  let rList = rScreenReset("hci+d lab students");

  for (let letter of letters_to_jh) {
    let item = document.createElement("div");
    item.className = "ngradex__page__rightbox__rscreen__list__item";
    item.addEventListener("click", sound_btn_clicked, false);
    item.msg = letter["letter-j"];
    item.pokenum = letter.pokenum;
    item.level = letter.level;
    item.studentName = letter.name;
    item.addEventListener("click", msgScreen, false);

    let icon = document.createElement("div");
    icon.className = "ngradex__page__rightbox__rscreen__list__item__icon";
    let img = document.createElement("img");
    img.className = "ngradex__page__rightbox__rscreen__list__item__icon__img";
    img.src = `image/${letter.pokenum}.png`;
    let name = document.createElement("div");
    name.className = "ngradex__page__rightbox__rscreen__list__item__name";

    let nameStr = document.createElement("div");
    nameStr.innerText = letter.name;
    name.appendChild(nameStr);
    let span = document.createElement("span");
    if (letter.status == "석사 과정") {
      span.className = "master";
      span.innerText = "(석)";
    } else if (letter.status == "박사 과정") {
      span.className = "doctor";
      span.innerText = "(박)";
    } else if (letter.status == "졸업생") {
      span.className = "alumni";
      span.innerText = "(졸)";
    } else if (letter.status == "학부 과정") {
      span.className = "undergraduate";
      span.innerText = "(학)";
    }

    name.appendChild(span);

    let level = document.createElement("div");
    level.className = "ngradex__page__rightbox__rscreen__list__item__level";
    level.innerText = `Lv. ${letter.level}`;
    let dept = document.createElement("div");
    dept.className = "ngradex__page__rightbox__rscreen__list__item__dept";
    dept.innerText = letter.dept;

    rList.appendChild(item);
    item.append(icon);
    item.append(name);
    item.append(level);
    item.append(dept);
    icon.append(img);
  }

  let bbtn = document.getElementsByClassName(
    "ngradex__page__rightbox__bbton"
  )[0];
  bbtn.innerText = "< 2022 스승의 날 >";
}

function addHJLetterList() {
  ngradex_mode = "HJ";

  let linfo = deleteLeftScreen();
  let linfo_ph = document.createElement("div");
  linfo_ph.className = "ngradex__page__leftscreen__info__placeholder";
  linfo_ph.innerText = "포켓몬을 선택해주세요!";
  linfo.appendChild(linfo_ph);

  let rList = rScreenReset("hci+d lab students");

  for (let letter of letters_to_hj) {
    let item = document.createElement("div");
    item.className = "ngradex__page__rightbox__rscreen__list__item";
    item.addEventListener("click", sound_btn_clicked, false);
    item.msg = letter["letter-h"];
    item.pokenum = letter.pokenum;
    item.level = letter.level;
    item.studentName = letter.name;
    item.addEventListener("click", msgScreen, false);

    let icon = document.createElement("div");
    icon.className = "ngradex__page__rightbox__rscreen__list__item__icon";
    let img = document.createElement("img");
    img.className = "ngradex__page__rightbox__rscreen__list__item__icon__img";
    img.src = `image/${letter.pokenum}.png`;
    let name = document.createElement("div");
    name.className = "ngradex__page__rightbox__rscreen__list__item__name";

    let nameStr = document.createElement("div");
    nameStr.innerText = letter.name;
    name.appendChild(nameStr);
    let span = document.createElement("span");
    if (letter.status == "석사 과정") {
      span.className = "master";
      span.innerText = "(석)";
    } else if (letter.status == "박사 과정") {
      span.className = "doctor";
      span.innerText = "(박)";
    } else if (letter.status == "졸업생") {
      span.className = "alumni";
      span.innerText = "(졸)";
    } else if (letter.status == "학부 과정") {
      span.className = "undergraduate";
      span.innerText = "(학)";
    }

    name.appendChild(span);

    let level = document.createElement("div");
    level.className = "ngradex__page__rightbox__rscreen__list__item__level";
    level.innerText = `Lv. ${letter.level}`;
    let dept = document.createElement("div");
    dept.className = "ngradex__page__rightbox__rscreen__list__item__dept";
    dept.innerText = letter.dept;

    rList.appendChild(item);
    item.append(icon);
    item.append(name);
    item.append(level);
    item.append(dept);
    icon.append(img);
  }

  let bbtn = document.getElementsByClassName(
    "ngradex__page__rightbox__bbton"
  )[0];
  bbtn.innerText = "< 2022 스승의 날 >";
}

function msgScreen(evt) {
  let rList = rScreenReset("Message");
  let msg = evt.currentTarget.msg;
  let msgText = `
  .
  .
  .

    ${msg}

  .
  .
  .
  `;
  let msgDiv = document.createElement("div");
  msgDiv.className = "ngradex__page__rightbox__rscreen__list__msg";
  msgDiv.innerText = msgText;
  rList.appendChild(msgDiv);
  let pokenum = evt.currentTarget.pokenum;
  let studentName = evt.currentTarget.studentName;
  let level = evt.currentTarget.level;

  let linfo = deleteLeftScreen();

  let linfo_icon = document.createElement("div");
  linfo_icon.className = "ngradex__page__leftscreen__info__icon";
  let linfo_img = document.createElement("img");
  linfo_img.className = "ngradex__page__leftscreen__info__img";
  linfo_img.src = `image/${pokenum}.png`;
  linfo_icon.appendChild(linfo_img);
  let linfo_text = document.createElement("div");
  let linfo_text_txt = `Lv. ${level} ${studentName}`;
  linfo_text.className = "ngradex__page__leftscreen__info__text";
  linfo_text.innerText = linfo_text_txt;
  linfo.appendChild(linfo_icon);
  linfo.appendChild(linfo_text);

  let bbtn = document.getElementsByClassName(
    "ngradex__page__rightbox__bbton"
  )[0];
  bbtn.innerText = "< 뒤로가기";
  bbtn.addEventListener("click", goBack, false);
}

function goBack() {
  if (ngradex_mode == "JH") {
    addJHLetterList();
  } else if (ngradex_mode == "HJ") {
    addHJLetterList();
  }
}

function ngradexImgJH() {
  let ngradex = document.getElementsByClassName("ngradex")[0];
  ngradex.style.backgroundImage = "url('image/ngradex_jh.png')";
}

function ngradexImgHJ() {
  let ngradex = document.getElementsByClassName("ngradex")[0];
  ngradex.style.backgroundImage = "url('image/ngradex_hj.png')";
}

let selectJH = document.getElementById("selectJH");
selectJH.addEventListener("click", addJHLetterList, false);
selectJH.addEventListener("click", ngradexImgJH, false);

let selectHJ = document.getElementById("selectHJ");
selectHJ.addEventListener("click", addHJLetterList, false);
selectHJ.addEventListener("click", ngradexImgHJ, false);
