import React from 'react';
import {useNavigate} from 'react-router-dom'; // useNavigate 추가
import {useSaju} from '../../context/SajuContext';
import '../../css/nextPageButton.css'; // 공통 CSS 파일 Import
import '../css/SajuReport2.css'; // 컴포넌트 고유 CSS

const SajuReport2 = () => {
    const {sajuData} = useSaju();
    const {result, name} = sajuData;
    const navigate = useNavigate(); // navigate 생성

    const daySky = result.daySky;

    const analysisData = {
        "甲": {
            title: "갑목(甲木)",
            strengths: [
                {title: "미래지향적입니다", description: "먼 미래를 바라보며 계획을 세우고 목표를 향해 꾸준히 노력하며 나아갑니다"},
                {title: "명분을 중시합니다", description: "행동의 명분과 이유를 중요시하며, 올바른 가치관과 신념을 추구합니다"},
                {title: "의욕적입니다", description: "높은 목표를 세우고 이를 이루기 위해 적극적으로 노력하는 성향이 있습니다"},
                {title: "끈기가 강합니다", description: "한 번 시작한 일은 끝까지 해내며, 어려운 상황에서도 포기하지 않습니다"},
                {title: "정직하고 올곧습니다", description: "정직하고 바른 태도로 주변의 신뢰를 얻으며, 정의로운 행동을 추구합니다"},
            ],
            TitleDescription: "뿌리 깊은 나무, 갑목(甲木)의 이야기",
            subDescription: [
                {title: "도전을 두려워하지 않는 리더입니다", description: "갑목은 강한 뿌리를 가진 나무처럼, 어려움 속에서도 굳건히 도전을 이끕니다"},
                {title: "끊임없이 성장하는 나무입니다", description: "갑목은 하늘을 향해 자라듯, 변화를 두려워하지 않고 목표를 향해 나아갑니다"},
                {title: "주변을 이끄는 강한 힘이 있습니다", description: "갑목은 뿌리처럼 신뢰와 안정감을 주며, 주변 사람들을 든든히 이끌어갑니다"},
            ],
            EndDescription:"님은 자립심이 강하고 목표를 향해 곧게 나아가며 추진력이 뛰어납니다",
            imageAlt: "튼튼한 나무",
            imageSrc: `${process.env.PUBLIC_URL}/images/tendency/bigTree.png`,
        },
        "乙": {
            title: "을목(乙木)",
            strengths: [
                {title: "현실적입니다", description: "현실적인 사고로 실현 가능한 목표를 설정하며 실질적인 성과를 중시합니다"},
                {title: "적응력이 좋습니다", description: "변화하는 환경에 유연하게 적응하며 어려운 상황에서도 방법을 찾아냅니다"},
                {title: "인내심이 강습니다", description: "한결같은 태도로 어려움을 극복하며 목표를 향해 꾸준히 나아갑니다"},
                {title: "관계를 소중히 여깁니다", description: "주변 사람들과의 관계를 중요하게 생각하며 신뢰와 조화를 쌓아갑니다"},
                {title: "섬세하고 세심합니다", description: "작은 부분까지 놓치지 않는 세심한 성격으로 주변의 기대를 충족합니다"},
            ],
            TitleDescription: "유연한 생명력, 을목(乙木)의 이야기",
            subDescription: [
                {title: "부드러운 덩굴 나무처럼 유연합니다", description: "을목은 덩굴처럼 빠르게 적응하며 다른 사람들과 조화를 이루어 협력합니다"},
                {title: "다른 나무와 함께 자랍니다", description: "을목은 협력을 통해 주변과 성장하며, 관계 속에서 성과를 만들어냅니다"},
                {title: "강한 내면을 지닌 존재입니다", description: "을목은 어려운 상황에서도 끈기를 발휘하며, 목표를 끝까지 이룹니다"},
            ],
            EndDescription:"님은 유연하고 부드러우며, 조화를 중시하고 타인과 함께 성장하는 성향입니다",
            imageAlt: "성장하는 작은 나무",
            imageSrc: `${process.env.PUBLIC_URL}/images/tendency/smallTree.png`,
        },
        "丙": {
            title: "병화(丙火)",
            strengths: [
                {title: "열정적입니다", description: "뜨거운 열정으로 주변에 활력을 불어넣으며, 긍정적인 에너지를 전합니다"},
                {title: "밝고 명랑합니다", description: "밝고 명랑한 태도로 적극적이며 솔직한 성격으로 주변에 활력을 줍니다"},
                {title: "표현력이 뛰어납니다", description: "자신을 효과적으로 표현하며, 말과 행동으로 주변의 주목을 받습니다"},
                {title: "자존심이 셉니다", description: "강한 자존심으로 자신의 가치를 지키려는 태도와 의지가 뚜렷합니다"},
                {title: "승부욕이 강습니다", description: "하고자 하는 일에 열정을 다하며 주변 사람들에게 긍정적인 에너지를 전합니다"},
            ],
            TitleDescription: "타오르는 열정, 병화(丙火)의 이야기",
            subDescription: [
                {title: "태양처럼 세상을 따뜻하게 비춥니다.", description: "병화는 밝은 에너지로 사람들에게 희망을 주며 긍정적인 변화를 만듭니다"},
                {title: "불꽃처럼 강렬한 에너지를 발산합니다.", description: "병화는 강한 열정으로 목표를 향해 달려가며 주변에 강한 영향을 미칩니다"},
                {title: "빛나는 불꽃처럼 상황을 밝혀줍니다.", description: "병화는 어두운 문제를 드러내고 해결책을 제시해 주변을 밝히고 비춥니다"},
            ],
            EndDescription:"님은 열정적이고 자신감이 넘치며, 주변에 긍정적인 에너지를 전하는 사람입니다",
            imageAlt: "따뜻한 햇살",
            imageSrc: `${process.env.PUBLIC_URL}/images/tendency/tendency/sun.png`,
        },
        "丁": {
            title: "정화(丁火)",
            strengths: [
                {title: "감정이 풍부합니다", description: "풍부한 감정으로 주변 사람들에게 따뜻함을 전하며 공감을 잘 이끌어냅니다"},
                {title: "다정다감합니다", description: "다정한 말과 행동으로 주변 사람들에게 친밀감과 편안함을 자연스럽게 줍니다"},
                {title: "깔끔한 성향입니다", description: "정리정돈을 좋아하며 깔끔한 태도로 안정적이고 신뢰를 주는 성향입니다"},
                {title: "미적인 감각이 뛰어납니다", description: "아름다움에 대한 감각이 뛰어나 주변을 조화롭게 꾸미고 세련되게 표현합니다"},
                {title: "섬세합니다", description: "작은 부분도 놓치지 않는 섬세한 성격으로 주변 사람들에게 신뢰를 줍니다"},
            ],
            TitleDescription: "따스한 빛, 정화(丁火)의 이야기",
            subDescription: [
                {title: "촛불처럼 조용히 타오릅니다", description: "정화는 촛불처럼 은은한 열기로 주변에 온기를 더하며 따뜻함을 선사합니다"},
                {title: "작은 불꽃처럼 꾸준히 밝힙니다", description: "정화는 작은 불꽃처럼 어려움 속에서도 흔들리지 않으며, 희망을 전달합니다"},
                {title: "불꽃처럼 방향을 제시합니다", description: "정화는 불꽃처럼 어둠 속에서도 길을 밝혀주며 사람들에게 길을 제시합니다"},
            ],
            EndDescription:"님은 따뜻하고 섬세하며, 타인의 감정을 잘 이해하고 배려하는 성향입니다",
            imageAlt: "타오르는 불꽃",
            imageSrc: `${process.env.PUBLIC_URL}/images/tendency/fire.png`,
        },
        "戊": {
            title: "무토(戊土)",
            strengths: [
                {title: "보수적입니다", description: "기존의 가치와 전통을 중시하며 신중하고 안정적인 선택을 선호합니다"},
                {title: "중립적 성향입니다", description: "상황을 객관적으로 판단하며 균형 있는 태도로 갈등과 문제를 조율합니다"},
                {title: "주관이 뚜렷합니다", description: "자신의 신념과 기준이 확고해 주변 사람들에게 안정감과 신뢰감을 줍니다"},
                {title: "책임감이 강합니다", description: "맡은 일에 끝까지 책임을 다하며 주변 사람들에게 신뢰와 든든함을 줍니다"},
                {title: "끈기가 있습니다", description: "꾸준한 노력과 인내로 어려운 상황에서도 목표를 향해 끝까지 나아갑니다"},
            ],
            TitleDescription: "든든한 대지, 무토(戊土)의 이야기",
            subDescription: [
                {title: "넓은 대지처럼 모두를 품습니다", description: "무토는 사람들에게 포용력과 안정감을 주며, 든든한 지지를 제공합니다"},
                {title: "큰 산처럼 변함없이 굳건합니다", description: "무토는 어려운 상황에서도 흔들리지 않고, 목표를 향해 꾸준히 나아갑니다"},
                {title: "흔들리지 않는 힘을 발휘합니다", description: "무토는 단단한 기틀로 주변에 안정감을 주며, 사람들에게 신뢰를 심어줍니다"},
            ],
            EndDescription:"님은 안정적이고 책임감이 강하며, 신뢰받는 든든한 리더십을 지닌 사람입니다",
            imageAlt: "튼튼한 산처럼",
            imageSrc: `${process.env.PUBLIC_URL}/images/tendency/mountain.png`,
        },
        "己": {
            title: "기토(己土)",
            strengths: [
                {title: "실속을 중시합니다", description: "겉모습보다는 내실을 중요하게 생각하며 실질적인 결과를 추구합니다"},
                {title: "인내심이 강합니다", description: "인내심이 강으며 꾸준히 노력하는 태도로 목표를 향해 꾸준히 나아갑니다"},
                {title: "현실적입니다", description: "현실적인 사고로 상황을 판단하며 실현 가능한 목표와 계획을 세웁니다"},
                {title: "처세술이 좋습니다", description: "사람들과의 관계에서 적절한 처신을 잘 하며 신뢰와 호감을 얻습니다"},
                {title: "성실합니다", description: "맡은 일을 책임감 있게 끝까지 완수하며, 신뢰를 쌓는 모습을 보여줍니다"},
            ],
            TitleDescription: "부드러운 흙, 기토(己土)의 이야기",
            subDescription: [
                {title: "영양분을 공급하는 땅처럼 키웁니다", description: "기토는 필요한 도움을 주며, 사람들의 성장과 발전을 세심하게 돕습니다"},
                {title: "자연스럽게 변화를 만들어갑니다", description: "기토는 환경에 맞게 조화를 이루며, 상황에 긍정적인 변화를 이끌어냅니다"},
                {title: "튼튼한 뿌리처럼 안정감을 줍니다", description: "기토는 안정적인 기반을 제공하며, 사람들에게 신뢰와 평온함을 심어줍니다"},
            ],
            EndDescription:"님은 현실적이고 세심하며, 주변에 실질적인 도움을 주는 성실한 성향입니다",
            imageAlt: "넉넉한 대지",
            imageSrc: `${process.env.PUBLIC_URL}/images/tendency/ground.png`,
        },
        "庚": {
            title: "경금(庚金)",
            strengths: [
                {title: "결단력이 강합니다", description: "빠르게 결정을 내리고 상황을 주도하며, 문제를 효과적으로 해결합니다."},
                {title: "강인한 성격입니다", description: "어려움에도 굴하지 않고 목표를 향해 나아가는 강인한 의지를 보입니다"},
                {title: "절제력이 강습니다", description: "스스로를 잘 통제하며 어려운 상황에서도 균형 잡힌 태도를 유지합니다"},
                {title: "리더십이 있습니다", description: "상황을 주도적으로 이끌며 주변 사람들에게 신뢰와 존경을 받습니다"},
                {title: "정의롭습니다", description: "옳고 그름을 명확히 판단하며, 불의를 보면 바로잡으려는 태도를 보입니다"},
            ],
            TitleDescription: "단단한 금속, 경금(庚金)의 이야기",
            subDescription: [
                {title: "강한 금속처럼 튼튼합니다", description: "경금은 어려움 속에서도 흔들리지 않고 주변에 안정감과 신뢰를 제공합니다"},
                {title: "날카로운 칼날처럼 정확합니다", description: "경금은 문제를 명확히 파악하고, 신속하고 효과적으로 해결책을 제시합니다"},
                {title: "빛나는 보석처럼 가치가 있습니다", description: "경금은 시간이 지날수록 주변에 큰 영향을 미치고 가치를 인정받습니다"},
            ],
            EndDescription:"님은 강인하고 단호하며, 목표를 향해 결단력 있게 행동하는 성격입니다",
            imageAlt: "단단한 금속",
            imageSrc: `${process.env.PUBLIC_URL}/images/tendency/metal.png`,
        },
        "辛": {
            title: "신금(辛金)",
            strengths: [
                {title: "감정 절제를 잘합니다", description: "감정을 차분히 다스리며, 신중하고 균형 잡힌 태도로 상황에 대처합니다"},
                {title: "칭찬받는 것을 좋아합니다", description: "칭찬과 인정을 받을 때 기뻐하며, 이를 통해 더욱 동기부여를 받습니다"},
                {title: "단정하고 세련되었습니다", description: "세련된 태도로 주변 사람들에게 신뢰와 좋은 인상을 자연스럽게 줍니다"},
                {title: "섬세하고 신중합니다", description: "세심한 배려와 신중한 태도로 사람들과의 관계를 안정적으로 유지합니다"},
                {title: "자신에게 엄격합니다", description: "스스로 높은 기준을 설정하며 끊임없이 성장하고 완벽을 꾸준히 추구합니다"},
            ],
            TitleDescription: "차가운 금속, 신금(辛金)의 이야기",
            subDescription: [
                {title: "단단한 금속처럼 확고합니다", description: "신금은 흔들리지 않는 신념과 결단력으로 사람들에게 안정감을 줍니다"},
                {title: "날카로운 칼날처럼 분석적입니다", description: "신금은 예리한 통찰력으로 문제의 핵심을 파악하며 효과적으로 해결합니다"},
                {title: "빛나는 보석처럼 귀중합니다", description: "신금은 시간이 지나도 빛을 발하며, 주변에 큰 가치를 제공하고 인정받습니다"},
            ],
            EndDescription:"님은 신중하고 섬세하며, 자신만의 기준과 원칙을 중시하는 성향입니다",
            imageAlt: "날카로운 금속",
            imageSrc: `${process.env.PUBLIC_URL}/images/tendency/sword.png`,
        },
        "壬": {
            title: "임수(壬水)",
            strengths: [
                {title: "총명합니다", description: "뛰어난 지적 능력으로 빠르게 상황을 이해하고 현명한 결정을 내립니다"},
                {title: "호기심이 많습니다", description: "새로운 지식과 경험을 즐기며, 스스로 배우고 성장하려는 열정을 보입니다."},
                {title: "사교적입니다", description: "사람들과 잘 어울리며 원활한 의사소통으로 관계를 쉽게 형성합니다"},
                {title: "비밀을 철저히 지킵니다", description: "많은 정보를 알고 있지만 비밀을 잘 지켜 신뢰받는 사람이 될 수 있습니다"},
                {title: "포용력이 강합니다", description: "다양한 사람과 상황을 이해하며 너그러운 태도로 관계를 유지합니다"},
            ],
            TitleDescription: "흐르는 물, 임수(壬水)의 이야기",
            subDescription: [
                {title: "흐르는 물처럼 유연합니다", description: "임수는 상황에 맞게 유연하게 변화하며, 주변에 조화로운 영향을 줍니다"},
                {title: "깊은 강물처럼 강합니다", description: "임수는 내면의 강한 힘으로 흔들리지 않고, 사람들에게 안정감을 제공합니다"},
                {title: "깊은 바다처럼 넓고 깊습니다", description: "임수는 넓은 마음으로 주변을 포용하고, 사람들에게 깊은 신뢰를 줍니다"},
            ],
            EndDescription:"님은 유연하고 포용력이 뛰어나며, 변화에 잘 적응하고 흐름을 이끄는 성격입니다",
            imageAlt: "깊고 맑은 물",
            imageSrc: `${process.env.PUBLIC_URL}/images/tendency/water.png`,
        },
        "癸": {
            title: "계수(癸水)",
            strengths: [
                {title: "섬세합니다", description: "작은 부분까지 세심하게 살피며, 꼼꼼한 태도로 안정감을 제공합니다."},
                {title: "눈치가 빠릅니다", description: "상황을 재빠르게 파악하며 타인의 감정과 의도를 잘 이해하고 소통합니다"},
                {title: "감정이 풍부합니다", description: "깊고 풍부한 감정으로 공감 능력이 뛰어나며 따뜻한 관계를 형성합니다"},
                {title: "논리적입니다", description: "논리적인 사고로 문제를 명확히 분석하며 설득력 있는 해결책을 제시합니다"},
                {title: "유연합니다", description: "변화에 잘 적응하며 다양한 상황에서도 균형 있는 판단과 대처를 내립니다"},
            ],
            TitleDescription: "흐르는 비, 계수(癸水)의 이야기",
            subDescription: [
                {title: "빗물처럼 조용히 흐릅니다", description: "계수는 조용히 흐르며 주변에 안정감을 주고, 사람들에게 편안함을 제공합니다"},
                {title: "물길처럼 유연하게 이어집니다", description: "계수는 변화에 잘 적응하며 사람들에게 유연한 사고와 적응력을 보여줍니다"},
                {title: "안개처럼 변화무쌍하게 흐릅니다", description: "계수는 다양하게 변하며 사람들에게 열린 마음과 새로운 시각을 제공합니다"},
            ],
            EndDescription:"님은 감성적이며 통찰력이 깊고, 조용히 자신의 길을 탐구하는 성향입니다",
            imageAlt: "맑은 강물",
            imageSrc: `${process.env.PUBLIC_URL}/images/tendency/river.png`,
        },
    };

    const currentAnalysis = analysisData[daySky] || {
        title: "데이터 없음",
        strengths: [{title: "데이터 없음", description: "해당 천간에 대한 데이터가 없습니다."}],
        description: "해당 천간에 대한 상세 설명을 준비 중입니다.",
        imageAlt: "이미지 없음",
        imageSrc: `${process.env.PUBLIC_URL}/images/placeholder.png`,
    };

    const handleNextPage = () => {
        navigate('/Report3'); // 다음 페이지로 이동
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
                    <div className="sky-symbol">{daySky}</div>
                </div>
                <h1 className="report-title">1. {name}님의 타고난 성격을 알려드립니다</h1>
            </div>
            <p className="report-subtitle">자신의 타고난 성향을 이해하고 더 나은 선택을 하세요</p>

            {/* 콘텐츠 레이아웃 */}
            <div className="report-content">
                {/* 왼쪽: 성향 분석 */}
                <div className="analysis-container">
                    <h2 className="analysis-title">{name}님의 타고난 성격은 {currentAnalysis.title}입니다</h2>
                    <ul className="strengths-list">
                        {currentAnalysis.strengths.map((strength, index) => (
                            <li key={index}>
                                <strong>{index + 1}. {strength.title}</strong>
                                <br/>
                                <span>{strength.description}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* 오른쪽: 이미지와 설명 */}
                <div className="analysis-image-container">
                    <img
                        src={currentAnalysis.imageSrc}
                        alt={currentAnalysis.imageAlt}
                        className="analysis-image"
                    />
                    <p className="analysis-description">{currentAnalysis.TitleDescription}</p>
                    <ul className="strengths-list">
                        {currentAnalysis.subDescription.map((strength, index) => (
                            <li key={index}>
                                <strong>{index + 1}. {strength.title}</strong>
                                <br/>
                                <span>{strength.description}</span>
                            </li>
                        ))}
                    </ul>
                    <p>{name}{currentAnalysis.EndDescription}</p>
                </div>
            </div>
            <p className="footer-text">타고난 성향을 이해하면 자신만의 특별한 미래를 설계할 수 있습니다</p>
        </div>
    );
};
export default SajuReport2;
