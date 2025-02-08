import React from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate 추가
import { useSaju } from '../../context/SajuContext';
import '../css/SajuReport2.css'; // 동일한 스타일을 사용

const SajuReport3 = () => {
    const { sajuData } = useSaju();
    const { result, name } = sajuData;
    const navigate = useNavigate(); // navigate 생성

    const analysisData = {
        "비견": {
            title: name + "님의 개인적 성향과 강점을 확인하세요",
            strengths: [
                { title: "신념이 강합니다", description: "자기 주장이 뚜렷하며 강한 신념으로 목표를 향해 흔들림 없이 나아갑니다" },
                { title: "외모와 체력이 뛰어납니다", description: "외모가 단정하고 건강하며 체력도 뛰어나 활동적이고 에너지가 넘칩니다" },
                { title: "솔직하게 감정을 표현합니다", description: "자신의 생각과 감정을 솔직히 표현해 주변과의 관계를 더욱 깊게 만듭니다" },
                { title: "인맥이 넓습니다", description: "인맥이 넓고 주변 사람들로부터 도움을 자주 받아 협력 관계를 잘 유지합니다" },
                { title: "유사한 사람들과 관계를 맺습니다", description: "마음이 맞는 사람들과 주로 인간관계를 형성하며 깊은 유대를 쌓습니다" },
            ],
            TitleDescription: "늑대의 특성으로 본 " + name + "님의 개인적 성향과 강점",
            subDescription: [
                { description: "늑대처럼 협력하며 목표를 위해 주변 사람들과 조화를 완벽히 이룹니다." },
                { description: "늑대처럼 끈기 있게 끝까지 노력하며 어려움 속에서도 앞을 향해 나아갑니다." },
                { description: "늑대처럼 리더십을 발휘해 팀을 이끌고 모두의 신뢰와 존경을 얻습니다." },
                { description: "늑대처럼 팀워크를 중시하며 서로를 배려해 큰 성과와 결과를 만듭니다." },
            ],
            EndDescription: "님은 사람을 좋아하고 친화력이 뛰어나 사람들과 교류를 활발히 합니다",
            imageAlt: "늑대",
            imageSrc: `${process.env.PUBLIC_URL}/images/animals/wolf.png`,
        },
        "겁재": {
            title: name + "님의 개인적 성향과 강점을 확인하세요",
            strengths: [
                { title: "도전적으로 행동합니다", description: "새로운 일을 두려워하지 않고 시도하며, 문제 해결 능력을 보여줍니다." },
                { title: "투자심리가 강합니다", description: "이윤을 추구하는 투자심리가 강하며 수익과 기회를 놓치지 않으려 합니다" },
                { title: "매력이 넘칩니다", description: "많은 사람들에게 인기가 많으며 매력적인 성격으로 주변의 주목을 받습니다" },
                { title: "협력과 경쟁을 모두 중시합니다", description: "타인과의 협력을 선호하면서도 경쟁심이 강해 목표를 적극적으로 추구합니다" },
                { title: "광범위한 인맥을 갖고 있습니다", description: "친분이 없는 사람들의 연락처도 많이 가지고 있어 넓은 인맥을 형성합니다" },
            ],
            TitleDescription: "호랑이의 특성으로 본 " + name + "님의 개인적 성향과 강점",
            subDescription: [
                { description: "호랑이처럼 용기 있게 나아가며 새로운 도전을 두려워하지 않고 극복합니다." },
                { description: "호랑이처럼 강한 결단력으로 목표를 향해 빠르고 과감히 행동합니다." },
                { description: "호랑이처럼 독립적이며 스스로의 길을 개척하려는 의지가 매우 강합니다." },
                { description: "호랑이처럼 자신감을 갖고 주도적으로 상황을 이끌고 성공을 만듭니다." },
            ],
            EndDescription: "님은 열정적이며 과감하게 도전하고 강한 추진력과 자신감을 가졌습니다",
            imageAlt: "호랑이",
            imageSrc: `${process.env.PUBLIC_URL}/images/animals/tiger.png`,
        },
        "식신": {
            title: name + "님의 개인적 성향과 강점을 확인하세요",
            strengths: [
                { title: "규칙적인 생활을 유지합니다", description: "규칙적인 생활을 꾸준히 이어가며 안정된 삶과 미래를 추구하는 성향입니다" },
                { title: "직접 일하는 것을 선호합니다", description: "자신의 능력으로 직접 일하며 성취감을 느끼고 더욱 독립적으로 일합니다" },
                { title: "꼼꼼하게 처리합니다.", description: "작은 실수도 놓치지 않고 책임감 있게 업무를 완성하며 신뢰를 쌓습니다" },
                { title: "가정적이고 성실합니다", description: "가정적이고 성실하며 자신의 실력으로 삶을 안정적이고 풍요롭게 꾸려갑니다" },
                { title: "건강과 재정을 철저히 관리합니다", description: "건강과 재정관리를 철저히 하며 미래를 준비하고 안정감을 유지합니다" },
            ],
            TitleDescription: "소의 특성으로 본 " + name + "님의 개인적 성향과 강점",
            subDescription: [
                { description: "소처럼 성실하게 맡은 일을 끝까지 해내며 신뢰와 깊은 믿음을 쌓아갑니다." },
                { description: "소처럼 꾸준히 노력하며 안정적인 성과를 지속적으로 만들어내는 성향입니다." },
                { description: "소처럼 신중하고 차분하게 행동하며 주변에 안정감과 따뜻한 신뢰를 줍니다." },
                { description: "소처럼 온화한 태도로 사람들과 조화를 이루며 긍정적인 관계를 유지합니다." },
            ],
            EndDescription: "님은 자기 확신이 강하고 목표를 향해 솔직하고 당당하게 나아갑니다",
            imageAlt: "소",
            imageSrc: `${process.env.PUBLIC_URL}/images/animals/cow.png`,
        },
        "상관": {
            title: name + "님의 개인적 성향과 강점을 확인하세요",
            strengths: [
                { title: "호기심이 많고 활기찹니다", description: "호기심이 많고 활기찬 에너지로 주변 사람들에게 긍정적인 영향을 줍니다" },
                { title: "독립적인 삶을 추구합니다", description: "구속을 싫어하며 독립적이고 자유로운 삶을 지향하는 성향이 매우 강합니다" },
                { title: "개성과 승부욕이 강습니다", description: "자유로운 성격과 강한 개성으로 승부욕을 발휘해 목표를 끝까지 이뤄냅니다" },
                { title: "화려함에 매력을 느낍니다", description: "말을 명확하게 하며 화려하고 눈길을 끄는 것에 자연스레 매력을 느낍니다" },
                { title: "유쾌하게 분위기를 이끕니다.", description: "밝고 활발한 에너지로 주변 사람들의 사기를 북돋고 분위기를 즐겁게 만듭니다" },
            ],
            TitleDescription: "원숭이의 특성으로 본 " + name + "님의 개인적 성향과 강점",
            subDescription: [
                { description: "원숭이처럼 재치 있고 유연하게 문제를 해결하며 창의력을 발휘합니다." },
                { description: "원숭이처럼 호기심이 많아 다양한 아이디어를 끊임없이 만들어냅니다." },
                { description: "원숭이처럼 빠르게 상황을 파악하며 기회를 잡아내는 능력이 뛰어납니다." },
                { description: "원숭이처럼 활발한 에너지로 주변 분위기를 밝게 만들어 모두를 즐겁게 합니다." },
            ],
            EndDescription: "님은 뛰어난 재능과 창의력으로 자신만의 독창적 매력을 발휘합니다",
            imageAlt: "원숭이",
            imageSrc: `${process.env.PUBLIC_URL}/images/animals/monkey.png`,
        },
        "편재": {
            title: name + "님의 개인적 성향과 강점을 확인하세요",
            strengths: [
                { title: "현실적으로 문제를 해결합니다", description: "자원을 효율적으로 활용해 실질적이고 효과적인 해결책을 빠르게 찾아냅니다" },
                { title: "경험을 즐기고 싶어 합니다", description: "세상의 많은 것을 경험하며 즐기고, 다양한 활동으로 삶을 풍요롭게 합니다" },
                { title: "사교적이고 대범합니다", description: "사교적이고 대범하며, 때로는 과시적으로 돈을 사용하며 사람들과 어울립니다" },
                { title: "새로운 경험을 좋아합니다", description: "감성적이고 새로운 경험과 사람들을 좋아해 활발하고 긍정적인 관계를 맺습니다" },
                { title: "재물과 활동에 관심이 많습니다", description: "자유롭고 활동적인 성향으로 재물에 관심을 가지며 목표를 이루려 합니다" },
            ],
            TitleDescription: "독수리의 특성으로 본 " + name + "님의 개인적 성향과 강점",
            subDescription: [
                { description: "독수리처럼 목표를 정확히 포착하고 강한 의지로 끝까지 이를 성취합니다." },
                { description: "독수리처럼 넓은 시야로 기회를 찾아내며 상황을 주도적으로 능숙히 이끕니다." },
                { description: "독수리처럼 독립적이고 당당하게 스스로의 길을 개척하며 성장해 나갑니다." },
                { description: "독수리처럼 빠르게 결단하며 효율적으로 문제를 해결하고 성과를 냅니다." },
            ],
            EndDescription: "님은 큰 꿈과 야망을 품고, 미래를 내다보며 통 크게 계획하고 행동합니다",
            imageAlt: "독수리",
            imageSrc: `${process.env.PUBLIC_URL}/images/animals/eagle.png`,
        },
        "정재": {
            title: name + "님의 개인적 성향과 강점을 확인하세요",
            strengths: [
                { title: "목표를 꾸준히 실천합니다", description: "목표를 이루기 위해 포기하지 않고 끈기 있게 노력하며 끝까지 나아갑니다" },
                { title: "책임감을 가지고 잘 관리합니다", description: "가족과 동료에 대한 책임감을 지니며, 이들을 세심히 관리하고 돕습니다" },
                { title: "가까운 사람들을 잘 돌봅니다", description: "가까운 사람들을 잘 돌보지만, 때로는 과한 간섭으로 부담을 줄 수 있습니다" },
                { title: "단체 활동을 능숙하게 합니다", description: "단체 활동에서 다양한 역할을 맡아 능숙하게 수행하며 협력을 이끕니다" },
                { title: "안정적인 소득을 선호합니다", description: "일정한 고정 소득과 안정적인 봉급 생활을 선호하며 안정감을 추구합니다" },
            ],
            TitleDescription: "개미의 특성으로 본 " + name + "님의 개인적 성향과 강점",
            subDescription: [
                { description: "개미처럼 성실하게 맡은 일을 끝까지 해내며 신뢰와 깊은 믿음을 쌓아갑니다" },
                { description: "개미처럼 철저한 계획으로 목표를 향해 꾸준히 나아가 성과를 만듭니다" },
                { description: "개미처럼 책임감 강한 태도로 주변 사람들에게 믿음과 신뢰를 줍니다" },
                { description: "개미처럼 조직적으로 움직이며 효율적인 결과를 꾸준히 만들어냅니다" },
            ],
            EndDescription: "님은 현실적이고 조직적이며, 안정과 효율을 중시하는 실속 있는 분입니다",
            imageAlt: "개미",
            imageSrc: `${process.env.PUBLIC_URL}/images/animals/ant.png`,
        },
        "편관": {
            title: name + "님의 개인적 성향과 강점을 확인하세요",
            strengths: [
                { title: "목표를 끝까지 지킵니다", description: "목표를 향해 흔들림 없이 꾸준히 노력하면서 결과를 만들어냅니다" },
                { title: "묵묵히 어려운 일을 처리합니다", description: "남들이 꺼리는 일도 묵묵히 처리하며 책임감으로 주변의 신뢰를 얻습니다" },
                { title: "성실함으로 일이 많아집니다", description: "의무를 성실히 이행하며 책임감을 다하다 보니 자연히 해야 할 일이 많아집니다" },
                { title: "손해를 감수하며 믿는 길을 갑니다", description: "손해를 감수하면서도 자신의 믿음을 굳건히 지키며 목표를 향해 나아갑니다" },
                { title: "책임감과 리더십이 뛰어납니다", description: "뛰어난 책임감과 리더십으로 조직을 잘 이끌고 안정된 환경을 만듭니다" },
            ],
            TitleDescription: "사자의 특성으로 본 " + name + "님의 개인적 성향과 강점",
            subDescription: [
                { description: "사자처럼 강한 리더십으로 앞장서며 팀을 이끌고 신뢰와 존경을 얻습니다." },
                { description: "사자처럼 용기 있게 어려움에 맞서며 문제를 해결하는 데 매우 능합니다." },
                { description: "사자처럼 결단력 있게 판단하고 빠르게 행동으로 옮겨 확실한 성과를 냅니다." },
                { description: "사자처럼 당당하고 책임감 있는 태도로 주변을 안정시키고 적극적으로 돕습니다." },
            ],
            EndDescription: "님은 체면과 명예를 중시하며 책임감 있게 의무를 다하는 사람입니다",
            imageAlt: "사자",
            imageSrc: `${process.env.PUBLIC_URL}/images/animals/lion.png`,
        },
        "정관": {
            title: name + "님의 개인적 성향과 강점을 확인하세요",
            strengths: [
                { title: "책임감을 실천합니다", description: "맡은 일을 끝까지 해내며 신뢰를 얻고 주변의 믿음과 깊은 존경을 쌓습니다" },
                { title: "규칙을 충실히 따릅니다", description: "모범적이고 규칙에 충실하며, 틀을 벗어나지 않는 태도로 신뢰를 얻습니다" },
                { title: "출세와 명예를 중시합니다", description: "안정성을 우선시하며 출세와 명예를 중요하게 생각해 꾸준히 노력합니다" },
                { title: "경쟁자를 능숙히 제압합니다", description: "자신의 이익을 위해 경쟁자를 능숙하게 제압하며 목표를 빠르게 달성합니다" },
                { title: "공명정대하며 권력을 지향합니다", description: "공명정대한 태도를 유지하면서 권력을 지향하고 영향력을 넓히려 합니다" },
            ],
            TitleDescription: "말의 특성으로 본 " + name + "님의 개인적 성향과 강점",
            subDescription: [
                { description: "말처럼 책임감 있게 맡은 일을 끝까지 해내며 신뢰와 깊은 믿음을 쌓아갑니다" },
                { description: "말처럼 규칙을 준수하며 균형과 질서를 중시하고 안정감을 제공합니다" },
                { description: "말처럼 꾸준히 노력하며 안정적이고 성과 있는 결과를 꾸준히 만듭니다" },
                { description: "말처럼 성실하고 친근한 태도로 사람들과 조화를 이루며 신뢰를 쌓습니다" },
            ],
            EndDescription: "님은 목표 달성을 위해 적극적으로 노력하며 책임감 있게 실천합니다",
            imageAlt: "말처럼 빠르고 책임감 있게",
            imageSrc: `${process.env.PUBLIC_URL}/images/animals/horse.webp`,
        },
        "편인": {
            title: name + "님의 개인적 성향과 강점을 확인하세요",
            strengths: [
                { title: "자신의 가치에 집중합니다", description: "자신의 가치와 삶의 의미를 깊이 고민하며 이를 중심으로 성실히 살아갑니다" },
                { title: "호기심이 많고 탐구적입니다.", description: "다양한 분야에 관심을 가지며 깊이 탐구하고 새로운 지식을 꾸준히 쌓습니다" },
                { title: "정신적 자유를 추구합니다", description: "정신적 자유를 중요시하며 이를 당연하게 여기는 독립적인 성향을 지닙니다" },
                { title: "희생과 봉사에 헌신합니다", description: "타인의 입장을 배려하며 희생과 봉사를 실천해 주변에 긍정적인 영향을 줍니다" },
                { title: "독창적으로 사고합니다", description: "한 분야에 깊이 몰입하며 창의적이고 독창적인 사고로 새로운 길을 개척합니다" },
            ],
            TitleDescription: "올빼미의 특성으로 본 " + name + "님의 개인적 성향과 강점",
            subDescription: [
                { description: "올빼미처럼 깊이 있는 통찰력으로 상황을 분석하고 해결책을 찾습니다." },
                { description: "올빼미처럼 조용하고 신중하게 행동하며 중요한 순간에 집중력을 발휘합니다." },
                { description: "올빼미처럼 새로운 지식을 탐구하며 끊임없이 배움의 기회를 찾습니다." },
                { description: "올빼미처럼 독립적이며 스스로의 방식으로 문제를 현명하게 해결합니다." },
            ],
            EndDescription: "님은 물질적 가치보다 정신적 교류와 내면의 성장을 더 중요하게 여깁니다",
            imageAlt: "올빼미",
            imageSrc: `${process.env.PUBLIC_URL}/images/animals/owl.png`,
        },
        "정인": {
            title: name + "님의 개인적 성향과 강점을 확인하세요",
            strengths: [
                { title: "자발적으로 행동합니다", description: "지시를 받기보다는 스스로 판단하고 자발적으로 행동하는 성향을 지닙니다" },
                { title: "배움에 열정적입니다.", description: "새로운 지식과 경험을 즐기며 배우는 과정에서 큰 성취감을 느낍니다" },
                { title: "자신을 중요하게 여깁니다", description: "자기 중심적인 성향으로 자신을 우선시하며 스스로를 더욱 소중히 여깁니다" },
                { title: "인복으로 정상에 오릅니다", description: "윗사람의 도움이나 인복을 통해 어려움을 극복하고 정상에 빠르게 도달합니다" },
                { title: "사랑 받는 능력이 있습니다", description: "타인이 자신을 사랑하게 만드는 매력을 지녀 주변 사람들에게 호감을 얻습니다" },
            ],
            TitleDescription: "코끼리의 특성으로 본 " + name + "님의 개인적 성향과 강점",
            subDescription: [
                { description: "코끼리처럼 차분하고 신중하게 행동하며 주변에 안정감과 믿음을 줍니다." },
                { description: "코끼리처럼 지혜롭고 기억력이 뛰어나며 상황을 정확히 잘 분석합니다." },
                { description: "코끼리처럼 끈기 있게 목표를 향해 나아가며 꾸준히 성과를 만들어냅니다." },
                { description: "코끼리처럼 온화하고 배려심 깊은 태도로 사람들과 조화롭게 어울립니다." },
            ],
            EndDescription: "님은 타인의 인정에 기쁨을 느끼며 자신을 긍정적으로 표현하는 분입니다",
            imageAlt: "코끼리",
            imageSrc: `${process.env.PUBLIC_URL}/images/animals/elephant.png`,
        },
    };

    // 월 관계의 결과값으로 동적인 데이터 가져오기
    const monthRelation = result.manseMonthGroundRelation; // 동적으로 결과 가져오기
    const currentAnalysis = analysisData[monthRelation] || {
        title: "데이터 없음",
        strengths: [{ title: "데이터 없음", description: "해당 관계에 대한 데이터가 없습니다." }],
        description: "해당 관계에 대한 상세 설명을 준비 중입니다.",
        imageAlt: "이미지 없음",
        imageSrc: `${process.env.PUBLIC_URL}/images/placeholder.png`,
    };

    const handleNextPage = () => {
        navigate('/Report4'); // 다음 페이지로 이동
    };

    return (
        <div className="saju-report2-wrapper">

            {/* 다음 페이지 버튼 */}
            <button className="nextPage-button" onClick={handleNextPage}>
                다음 ▶
            </button>

            {/* 페이지 제목 */}
            <div className="title-symbol-container">
                <div className="sky-symbol-container">
                    <div className="sky-symbol">{monthRelation}</div>
                </div>
                <h1 className="report-title">2. {name}님의 개인적 성향과 강점을 알려드립니다</h1>
            </div>
            <p className="report-subtitle">사회에서 신뢰를 얻고 성공으로 이끄는 방법을 확인하세요</p>


            <div className="report-content">
                <div className="analysis-container">
                    <h2 className="analysis-title">{currentAnalysis.title}</h2>
                    <ul className="strengths-list">
                        {currentAnalysis.strengths.map((item, index) => (
                            <li key={index}>
                                <strong>{index + 1}. {item.title}</strong>
                                <br/>
                                <span className="strength-description">- {item.description}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="analysis-image-container">
                    <p className="analysis-image-description">{currentAnalysis.TitleDescription}</p>
                    <img
                        src={currentAnalysis.imageSrc}
                        alt={currentAnalysis.imageAlt}
                        className="analysis-image"
                    />
                    <ul className="strengths-list">
                        {currentAnalysis.subDescription.map((item, index) => (
                            <li key={index}>
                                <strong>👉 {item.description}</strong>
                            </li>
                        ))}
                    </ul>
                    <p>{name}{currentAnalysis.EndDescription}</p>
                </div>
            </div>
            <p className="footer-text">개인적 강점을 발휘하면 신뢰와 성공을 쌓을 수 있습니다</p>
        </div>
    );
};

export default SajuReport3;
