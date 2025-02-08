import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../../Chapter1/css/SajuReport2.css';
import {useSaju} from "../../context/SajuContext";

const fortuneDetails = {
    비견: {
        TitleDescription: [
            { title:"목표를 세우고 현실적으로 계획하세요.", description: "명확한 목표를 설정하고 실현 가능한 계획을 세워 꾸준히 실천하세요." },
            { title:"이성 관계에서는 존중이 중요해요.", description: "상대방의 의견을 존중하며 갈등을 예방하고, 서로의 차이를 인정하세요." },
            { title:"일정을 무리하지 말고 유연하게 진행하세요.", description: "새로운 일을 시작할 때는 과도한 고집을 피하고 무리한 일정은 조정하세요." },
            { title:"자신감을 키우고 친구 관계를 넓히세요.", description: "사회적 교류에 적극 참여하며 자신감을 높이고 다양한 사람과 교류하세요." },
            { title:"금전 관리는 신중하게 계획하세요.", description: "소비를 조절하고 필요 이상의 지출을 피하며, 안정적인 금전 계획을 세우세요." },
        ],
        centerDescription: (name) => `늑대의 특성으로 본 ${name}님의 비견 운, 기회를 만들어보세요`,
        subDescription: [
            { description: "늑대처럼 팀과 조화를 이루며 서로를 돕는 강한 관계를 만들어보세요." },
            { description: "늑대처럼 민첩하게 상황에 대처하며 모든 기회를 절대 놓치지 마세요." },
            { description: "늑대처럼 강한 유대감을 통해 주변 사람들과 깊은 신뢰를 쌓아보세요." },
            { description: "늑대처럼 단결된 힘으로 목표를 향해 꾸준히 전진해 끝까지 나아가보세요." },
        ],
        MaleDescription:"인간관계의 갈등을 줄이고 주변 사람들과 조화를 이루세요",
        FeMaleDescription:"인간관계의 갈등을 줄이고 주변 사람들과 조화를 이루세요",
        imageAlt: "늑대",
        imageSrc: `${process.env.PUBLIC_URL}/images/animals/wolf.png`,
    },
    겁재: {
        TitleDescription: [
            { title: "이성 관계의 갈등은 대화로 풀어가세요.", description: "갈등이 생기면 고집을 부리기보다 양보와 대화를 통해 서로 이해하세요." },
            { title: "자신감을 키워 새로운 기회를 찾으세요.", description: "자신감이 높아질수록 새로운 기회가 열리며, 도전에도 긍정적인 영향을 줍니다." },
            { title: "금전 관리에 신경 쓰고 손실을 줄이세요.", description: "경쟁이나 금전 손실에 주의하며, 지출 계획을 세워 안정적인 재무 관리를 하세요." },
            { title: "예상 밖의 상황에도 유연하게 대처하세요.", description: "계획이 생각대로 진행되지 않을 수 있으니, 상황에 맞게 유연하게 대처하세요." },
            { title: "무리한 행동보다 신중한 선택을 하세요.", description: "조급하게 결과를 내기보다 상황을 차분히 판단하고, 신중하게 결정하세요." }
        ],
        centerDescription: (name) => `호랑이의 특성으로 본 ${name}님의 겁재 운, 기회를 만들어보세요`,
        subDescription: [
            { description: "호랑이처럼 용맹하게 자신의 길을 개척하며 당당히 앞으로 나아가세요." },
            { description: "호랑이처럼 예리한 판단으로 기회를 잡아 목표를 향해 질주해보세요." },
            { description: "호랑이처럼 강렬한 열정으로 어려움에 맞서며 끈기를 끝까지 발휘해보세요." },
            { description: "호랑이처럼 강인한 의지로 도전에 맞서며 자신감을 꾸준히 키워보세요." }
        ],
        MaleDescription: "재물 관리에 신경 쓰며 예상치 못한 손실을 미리 대비하세요",
        FeMaleDescription: "재물 관리에 신경 쓰며 예상치 못한 손실을 미리 대비하세요",
        imageAlt: "호랑이",
        imageSrc: `${process.env.PUBLIC_URL}/images/animals/tiger.png`,
    },
    식신: {
        TitleDescription: [
            { title: "감정 조절을 통해 스트레스를 줄이세요.", description: "감정 변화가 클 때는 상황을 차분히 바라보고 스트레스를 관리하세요." },
            { title: "새로운 기술을 배우고 역량을 키우세요.", description: "자신을 위해 새로운 기술에 도전하고 역량을 높이는 데 시간을 투자하세요." },
            { title: "새로운 관계와 활동으로 삶의 즐거움을 찾으세요.", description: "다양한 사람들과 교류하며 새로운 활동을 통해 일상에 즐거움을 더해 보세요." },
            { title: "규칙적인 생활과 운동으로 건강을 챙기세요.", description: "꾸준한 운동과 규칙적인 생활 습관을 통해 몸과 마음의 건강을 유지하세요." },
            { title: "작은 성과를 통해 성취감을 높이세요.", description: "크게 욕심내기보다 작은 목표를 달성하며 성취감을 느끼고 자신감을 키우세요." }
        ],
        centerDescription: (name) => `소의 특성으로 본 ${name}님의 식신 운, 기회를 만들어보세요`,
        subDescription: [
            { description: "소처럼 성실하게 한 걸음씩 나아가며 꾸준히 성과와 경험을 쌓아보세요." },
            { description: "소처럼 묵묵히 맡은 일을 책임지며 신뢰와 믿음을 쌓는 노력을 해보세요." },
            { description: "소처럼 안정감을 바탕으로 차분히 계획을 세워 차질 없이 실행해보세요." },
            { description: "소처럼 인내심을 가지고 천천히 목표를 향해 꾸준하고 성실히 나아가세요." }
        ],
        MaleDescription: "건강을 챙기고 규칙적인 생활 습관으로 안정감을 유지하세요",
        FeMaleDescription: "건강을 돌보며 이성과의 관계에서 신중한 태도를 유지하세요",
        imageAlt: "소",
        imageSrc: `${process.env.PUBLIC_URL}/images/animals/cow.png`,
    },
    상관: {
        TitleDescription: [
            { title: "변화에 따른 불안은 긍정적으로 해소하세요.", description: "변화의 불확실성이 스트레스를 줄 수 있지만, 차분하고 긍정적으로 바라보세요." },
            { title: "새로운 기회를 놓치지 말고 변화에 도전하세요.", description: "새로운 기회가 오면 주저하지 말고 다양한 변화를 경험하며 성장을 도모하세요." },
            { title: "손해를 줄이고 이익을 극대화할 방법을 찾으세요.", description: "변화 속에서 신중하게 판단하여 불필요한 손실을 막고 최대의 이익을 얻으세요." },
            { title: "변화를 긍정적으로 받아들이고 성장하세요.", description: "변화를 두려워하지 말고 적극적으로 받아들이며, 도전을 통해 한 단계 성장하세요." },
            { title: "감정을 조절하며 상황에 맞게 대처하세요.", description: "갑작스러운 변화가 감정적 혼란을 줄 수 있으니, 상황에 맞게 차분히 대처하세요." }
        ],
        centerDescription: (name) => `원숭이의 특성으로 본 ${name}님의 상관 운, 기회를 만들어보세요`,
        subDescription: [
            { description: "원숭이처럼 재치 있게 문제를 해결하며 새로운 아이디어를 시도해보세요." },
            { description: "원숭이처럼 호기심을 발휘해 다양한 기회를 탐색하며 경험을 쌓아보세요." },
            { description: "원숭이처럼 유연하게 변화를 받아들이며 상황에 맞게 적응해보세요." },
            { description: "원숭이처럼 유머와 긍정적인 에너지로 주변 분위기를 밝게 만들어보세요." }
        ],
        MaleDescription: "섣부른 판단을 피하고 중요한 결정을 신중하게 내리세요",
        FeMaleDescription: "섣부른 판단을 피하고 중요한 결정을 신중하게 내리세요",
        imageAlt: "원숭이",
        imageSrc: `${process.env.PUBLIC_URL}/images/animals/monkey.png`,
    },
    편재: {
        TitleDescription: [
            { title: "새로운 기회를 놓치지 말고 적극적으로 잡으세요.", description: "주변에서 다양한 기회가 열릴 때 적극적으로 참여하며 자신을 성장시키세요." },
            { title: "즐거움을 추구할 때 과유불급을 기억하세요.", description: "즐거움과 유흥을 즐기되, 지나치지 않도록 균형을 유지하며 스스로를 돌아보세요." },
            { title: "자신감을 키우되 욕심은 조절하세요.", description: "자신감이 높아지면서 욕심이 생길 수 있으니, 현실적인 목표를 세우세요." },
            { title: "새로운 관심사를 통해 활기를 더해 보세요.", description: "다양한 활동에 참여하며 바쁜 시간을 보내고, 일상에 활력을 불어넣으세요." },
            { title: "금전 관리에 신중하고 지출을 조절하세요.", description: "수입이 늘어도 지출 계획을 세워 불필요한 소비를 줄이고 재정을 안정시키세요." }
        ],
        centerDescription: (name) => `독수리의 특성으로 본 ${name}님의 편재 운, 기회를 만들어보세요`,
        subDescription: [
            { description: "독수리처럼 높은 곳에서 넓게 바라보며 목표를 명확히 설정해보세요." },
            { description: "독수리처럼 빠르게 기회를 포착해 과감히 실행으로 옮기고 성과를 내보세요." },
            { description: "독수리처럼 강인한 의지로 어려움을 이겨내며 성공을 쟁취해보세요." },
            { description: "독수리처럼 집중력을 발휘해 중요한 일에 에너지를 몰아 끝까지 해보세요." }
        ],
        MaleDescription: "금전 문제와 이성 관계에서 신중하고 책임감 있게 대처하세요",
        FeMaleDescription: "금전 문제에 주의하고 지나친 소비를 줄이며 계획적으로 관리하세요",
        imageAlt: "독수리",
        imageSrc: `${process.env.PUBLIC_URL}/images/animals/eagle.png`,
    },
    정재: {
        TitleDescription: [
            { title: "안정된 환경을 마련해 마음의 평화를 찾으세요.", description: "안정된 개인 공간과 환경을 만들어 일상에 집중하고 평온함을 유지하세요." },
            { title: "금전 계획을 세워 자산을 철저히 관리하세요.", description: "저축과 지출을 계획적으로 관리하여 재정적인 안정과 미래의 보상을 준비하세요." },
            { title: "목표 달성을 위한 구체적인 방법을 마련하세요.", description: "단순한 바람이 아닌 구체적인 계획을 세워야 목표를 실현할 가능성이 높아집니다." },
            { title: "꾸준히 노력하면 금전적 보상이 뒤따를 것입니다.", description: "지속적으로 성실히 노력하면 금전적 보상과 원하는 결과를 얻을 수 있습니다." },
            { title: "불필요한 지출을 줄이고 필요한 곳에 투자하세요.", description: "소비를 줄이고 자신의 성장이나 미래를 위한 가치 있는 투자에 신경 쓰세요." }
        ],
        centerDescription: (name) => `개미의 특성으로 본 ${name}님의 정재 운, 기회를 만들어보세요`,
        subDescription: [
            { description: "개미처럼 부지런히 목표를 향해 나아가며 작은 성과를 꾸준히 쌓아보세요." },
            { description: "개미처럼 체계적으로 계획을 세워 꾸준히 실행하며 결과를 만들어보세요." },
            { description: "개미처럼 협력하며 주변 사람들과 함께 더 큰 성과와 결과를 이뤄보세요." },
            { description: "개미처럼 끈기 있게 노력하며 시간을 들여 성실히 결과를 완성해보세요." }
        ],
        MaleDescription: "정리정돈과 체계적인 관리로 안정적이고 균형 잡힌 생활을 유지하세요",
        FeMaleDescription: "정리정돈과 체계적인 관리로 안정적이고 균형 잡힌 생활을 유지하세요",
        imageAlt: "개미",
        imageSrc: `${process.env.PUBLIC_URL}/images/animals/ant.png`,
    },
    편관: {
        TitleDescription: [
            { title: "스트레스 관리 방법을 찾아 내면의 평화를 유지하세요.", description: "스트레스와 강박이 커지기 전에 효과적으로 해소할 방법을 찾아 실천하세요." },
            { title: "힘든 상황을 긍정적으로 받아들이고 성장하세요.", description: "어려운 상황에서도 긍정적인 태도를 유지하며, 이를 성장의 기회로 삼으세요." },
            { title: "예기치 못한 일에도 강인함을 키우세요.", description: "갑작스러운 상황은 내면의 강인함을 키울 기회이니, 차분히 대처하세요." },
            { title: "목표를 향해 꾸준히 나아가며 극복하세요.", description: "어려움이 있더라도 포기하지 말고 목표를 향해 한 걸음씩 나아가세요." },
            { title: "책임을 지되 무리하지 않고 균형을 잡으세요.", description: "책임감이 중요하지만 과도하게 짊어지지 말고, 자신을 돌보며 균형을 유지하세요." }
        ],
        centerDescription: (name) => `사자의 특성으로 본 ${name}님의 편관 운, 기회를 만들어보세요`,
        subDescription: [
            { description: "사자처럼 용기 있게 도전에 맞서며 리더십을 발휘해 상황을 이끌어보세요." },
            { description: "사자처럼 당당한 태도로 책임을 다하며 주변에 신뢰와 존경을 쌓아보세요." },
            { description: "사자처럼 결단력 있게 선택하며 주어진 기회를 확실히 끝까지 잡아보세요." },
            { description: "사자처럼 강인한 정신력으로 어려움을 극복하며 목표를 이루어보세요." }
        ],
        MaleDescription: "어려움이 있어도 포기하지 않고 극복하려는 자세가 중요합니다",
        FeMaleDescription: "어려운 일을 극복하며 이성 관계에서도 특별히 신중하세요",
        imageAlt: "사자",
        imageSrc: `${process.env.PUBLIC_URL}/images/animals/lion.png`,
    },
    정관: {
        TitleDescription: [
            { title: "노력의 결과를 인정받고 보상받을 준비를 하세요.", description: "꾸준한 노력의 결실로 인정받고 보상받을 기회가 곧 찾아올 것입니다." },
            { title: "자신에게 맞는 직장이나 조직을 신중히 선택하세요.", description: "안정감을 주는 환경에서 역량을 발휘할 수 있도록 직장이나 조직을 선택하세요." },
            { title: "경쟁에서 앞서려면 지속적으로 역량을 키우세요.", description: "경쟁 상황에서 유리한 위치를 차지하려면 꾸준히 배우고 역량을 강화하세요." },
            { title: "자신의 입장뿐 아니라 타인의 의견도 존중하세요.", description: "원만한 관계를 위해 자신의 입장을 강조하기보다 타인의 의견도 중요시하세요." },
            { title: "책임을 다하며 신뢰받는 사람이 되세요.", description: "맡은 일에 최선을 다하고 책임감 있는 태도를 보여 주변의 신뢰를 얻으세요." }
        ],
        centerDescription: (name) => `말의 특성으로 본 ${name}님의 정관 운, 기회를 만들어보세요`,
        subDescription: [
            { description: "말처럼 꾸준히 앞으로 나아가며 성실한 태도로 목표를 향해 달려보세요." },
            { description: "말처럼 자유로운 사고로 창의력을 발휘하며 새로운 기회를 찾아보세요." },
            { description: "말처럼 힘차게 움직이며 맡은 일에 최선을 다해 성과를 만들어보세요." },
            { description: "말처럼 신중히 방향을 설정하며 효율적으로 목표를 향해 전진해보세요." }
        ],
        MaleDescription: "직장 문제를 차분히 대처하며 올바른 선택으로 신뢰를 얻으세요",
        FeMaleDescription: "직장과 이성 관계에서 균형을 유지하고 호감을 세심히 관리하세요",
        imageAlt: "말",
        imageSrc: `${process.env.PUBLIC_URL}/images/animals/horse.png`,
    },
    편인: {
        TitleDescription: [
            { title: "불안과 걱정을 줄이고 마음의 안정을 찾으세요.", description: "과도한 걱정은 스트레스를 키우니, 긍정적인 생각으로 마음을 편안히 하세요." },
            { title: "자의적인 해석은 피하고 사실에 집중하세요.", description: "불필요한 걱정과 자의적인 해석은 상황을 악화시키니, 현실에 집중하세요." },
            { title: "불안할 때도 일상 활동을 꾸준히 유지하세요.", description: "마음이 불안할수록 무기력해지기 쉬우니, 꾸준히 움직이며 활력을 찾으세요." },
            { title: "규칙적인 생활로 안정감을 유지하세요.", description: "일상의 규칙을 지키며 생활 리듬을 유지하면 마음이 한결 편안해집니다." },
            { title: "자신의 능력을 믿고 긍정적인 태도를 유지하세요.", description: "불안에 휘둘리지 말고 자신의 능력을 믿으며 긍정적인 태도를 유지하세요." }
        ],
        centerDescription: (name) => `올빼미의 특성으로 본 ${name}님의 편인 운, 기회를 만들어보세요`,
        subDescription: [
            { description: "올빼미처럼 지혜롭게 상황을 분석하며 최적의 해결책을 찾아보세요." },
            { description: "올빼미처럼 깊이 있는 사고로 문제를 이해하며 현명하게 대처해보세요." },
            { description: "올빼미처럼 고요한 집중력으로 내면의 성장을 꾸준히 도모해보세요." },
            { description: "올빼미처럼 신중하게 기회를 엿보며 때를 놓치지 않고 잡아보세요." }
        ],
        MaleDescription: "엉뚱한 생각은 줄이고 현실적인 판단과 행동에 집중하세요",
        FeMaleDescription: "엉뚱한 생각은 줄이고 현실적인 판단과 행동에 집중하세요",
        imageAlt: "올빼미",
        imageSrc: `${process.env.PUBLIC_URL}/images/animals/owl.png`,
    },
    정인: {
        TitleDescription: [
            { title: "자신의 권리를 당당하게 주장하세요.", description: "올해는 자신의 권리를 자신 있게 주장하고, 중요한 상황에서 소신을 밝히세요." },
            { title: "문서와 관련된 혜택을 기대하세요.", description: "합격, 계약, 부동산 등 다양한 문서적 혜택을 경험할 가능성이 아주 높습니다." },
            { title: "감사한 마음으로 주변과의 교류를 넓히세요.", description: "받은 혜택에 감사하며, 주변 사람들과의 네트워크를 적극적으로 확대하세요." },
            { title: "명예를 지키고 무리한 투자는 피하세요.", description: "명예와 신뢰를 해칠 수 있는 무리한 투자나 과한 결정을 주의 깊게 살피세요." },
            { title: "중요한 서류나 계약은 꼼꼼히 검토하세요.", description: "문서와 관련된 일은 작은 부분까지도 세심히 살펴보고 신중하게 처리하세요." }
        ],
        centerDescription: (name) => `코끼리의 특성으로 본 ${name}님의 정인 운, 기회를 만들어보세요`,
        subDescription: [
            { description: "코끼리처럼 묵직한 신념으로 안정적인 길을 선택하며 꾸준히 나아가세요." },
            { description: "코끼리처럼 넓은 마음으로 주변을 포용하며 신뢰와 존경을 쌓아보세요." },
            { description: "코끼리처럼 끈기 있게 목표를 향해 한 걸음씩 나아가 성과를 이루세요." },
            { description: "코끼리처럼 기억력을 활용해 과거의 경험을 바탕으로 현명하게 대처하세요." }
        ],
        MaleDescription: "안정적인 생활을 유지하며 노력의 성과를 기대할 수 있습니다",
        FeMaleDescription: "안정적인 생활을 유지하며 노력의 성과를 기대할 수 있습니다",
        imageAlt: "코끼리",
        imageSrc: `${process.env.PUBLIC_URL}/images/animals/elephant.png`,
    },
};

const SajuReport42 = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { sajuData } = useSaju();
    const { gender } = sajuData;
    const { currentFortune, nextFortune, name, currentYear, nextYear } = location.state || {};

    const currentAnalysis = fortuneDetails[currentFortune] || {};

    const handleNextPage = () => {
        navigate('/Report43', {
            state: {
                currentFortune,
                nextFortune,
                currentYear,
                nextYear,
                name
            }
        });
    };

    return (
        <div className="saju-report2-wrapper">
            {/* 다음 페이지 버튼 */}
            <button className="nextPage-button" onClick={handleNextPage}>
                다음 ▶
            </button>

            {/* 타이틀 */}
            <h1 className="report-title">
                31. {currentYear}년, {name}님은 운세 조언을 알려드립니다
            </h1>
            <p className="report-subtitle">
                변화와 선택으로 새로운 기회를 만들어갈 수 있는 시기입니다
            </p>

            {/* 분석 섹션 */}
            <div className="report-content">
                {/* 왼쪽: 주요 변화 */}
                <div className="analysis-container">
                    <h2 className="analysis-title">{`${currentFortune} 운에 개선하거나 주의해야 할 점들`}</h2>
                    <ul className="strengths-list">
                        {currentAnalysis.TitleDescription?.map((item, index) => (
                            <li key={index}>
                                <strong>{item.title}</strong>
                                <p>{item.description}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* 오른쪽: 이미지와 요약 */}
                <div className="analysis-image-container">
                    <p>{currentAnalysis.centerDescription(name)}</p>
                    <img
                        src={currentAnalysis.imageSrc}
                        alt={currentAnalysis.imageAlt}
                        className="analysis-image"
                    />
                    <ul className="strengths-list">
                        {currentAnalysis.subDescription?.map((item, index) => (
                            <li key={index}>
                                <strong>👉 {item.description}</strong>
                            </li>
                        ))}
                    </ul>
                    <p className="gender-description">
                        {gender === 'male'
                            ? currentAnalysis.MaleDescription
                            : currentAnalysis.FeMaleDescription}
                    </p>
                </div>
            </div>

            {/* 하단 메시지 */}
            <p className="footer-text">
                {currentYear}년의 운세를 통해 미래의 변화를 계획하고 성장의 길을 만들어 갈 수 있습니다.
            </p>
        </div>
    );
};

export default SajuReport42;
