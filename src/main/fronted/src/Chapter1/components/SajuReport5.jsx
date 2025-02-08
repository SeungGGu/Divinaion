import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSaju } from '../../context/SajuContext';
import '../css/SajuReport2.css'; // 기존 스타일 활용

const SajuReport5 = () => {
    const { sajuData } = useSaju();
    const { result, name } = sajuData;
    const navigate = useNavigate();

    const analysisData = {
        "비견": {
            title: name + "님의 대인관계 강점을 확인하세요",
            strengths: [
                { title: "비교와 경쟁을 잘합니다", description: "다른 사람과의 비교와 경쟁을 통해 스스로 성장하며 목표를 이룹니다" },
                { title: "독립심이 강합니다", description: "강한 독립심으로 스스로의 힘으로 문제를 해결하고 관계를 유지합니다" },
                { title: "친구가 많습니다", description: "사교성이 뛰어나 다양한 친구들과 관계를 맺으며 네트워크를 확장합니다" },
                { title: "주관이 뚜렷합니다", description: "자신의 의견과 주관이 명확해 타인에게 신뢰감을 주는 성향을 보입니다" },
                { title: "협동심이 뛰어납니다", description: "협동심이 강해 팀워크를 잘 이끌며 조화롭고 신뢰 있는 관계를 유지합니다" },
            ],
            TitleDescription: "늑대의 특성으로 본 " + name + "님의 대인 관계 강점을 확인하세요",
            ImageDescription: [
                { title: "늑대처럼 서로를 지키며 신뢰를 바탕으로 관계를 오래 이어갑니다."},
                { title: "늑대처럼 주도적으로 나서며 주변을 보호하고 어려움을 함께 극복합니다."},
                { title: "늑대처럼 상황을 파악하며 관계에서 필요한 도움을 빠르게 제공합니다."},
                { title: "늑대처럼 조화를 이루며 관계를 안정적으로 유지하고 더욱 발전합니다"},
            ],
            EndDescription: name + "님은 협력적이며 주변 사람들과 함께 문제를 해결하고 조화롭게 어울립니다",
            imageAlt: "늑대와 호랑이 이미지",
            imageSrc: `${process.env.PUBLIC_URL}/images/animals/wolf.png`,
        },
        "겁재": {
            title: name + "님의 대인관계 강점을 확인하세요",
            strengths: [
                { title: "승부욕이 강합니다", description: "강한 승부욕으로 목표를 향해 노력하며 경쟁 속에서도 성과를 냅니다" },
                { title: "친절합니다", description: "진심 어린 친절로 주변 사람들에게 따뜻함과 호감을 주는 성향입니다" },
                { title: "야망이 있습니다", description: "높은 목표를 세우고 이를 이루기 위해 끊임없이 노력하며 자신감을 보입니다" },
                { title: "뚝심과 끈기가 있습니다", description: "한 번 시작한 일은 끝까지 해내는 뚝심과 끈기로 깊은 신뢰를 얻습니다" },
                { title: "가식이 없습니다", description: "솔직한 태도로 진심을 표현하며 사람들과 자연스럽고 편안하게 어울립니다" },
            ],
            TitleDescription: "호랑이의 특성으로 본 " + name + "님의 대인 관계 강점을 확인하세요",
            ImageDescription: [
                { title: "호랑이처럼 용기 있게 다가가며 새로운 관계를 적극적으로 시작합니다." },
                { title: "호랑이처럼 상황을 주도적으로 해결하며 깊은 신뢰를 꾸준히 쌓아갑니다." },
                { title: "호랑이처럼 목표를 향해 끊임없이 노력하며 관계를 지속적으로 발전시킵니다." },
                { title: "호랑이처럼 당당하게 자신의 의견을 전하며 주변의 공감을 자연스레 이끕니다" },
            ],
            EndDescription: name + "님은 새로운 도전과 변화를 두려워하지 않고 적극적으로 나아가는 성향입니다",
            imageAlt: "늑대와 호랑이 이미지",
            imageSrc: `${process.env.PUBLIC_URL}/images/animals/tiger.png`,
        },
        "식신": {
            title: name + "님의 대인관계 강점을 확인하세요",
            strengths: [
                { title: "성실하게 행동합니다", description: "꾸준한 태도로 신뢰를 쌓으며 주변 사람들에게 안정감과 신뢰감을 줍니다" },
                { title: "긍정적입니다", description: "긍정적인 태도로 주변 사람들에게 희망과 활력을 전하며 분위기를 밝힙니다" },
                { title: "말하기와 글쓰기를 잘합니다", description: "말과 글로 자신의 생각을 명확히 표현해 소통과 공감을 이끌어냅니다" },
                { title: "낙천적이고 사교적입니다", description: "낙천적이고 사교적인 성향으로 사람들과 쉽게 친해지고 유대를 만듭니다" },
                { title: "재치와 유머가 있습니다", description: "뛰어난 재치와 유머로 사람들에게 즐거움을 주며 관계를 돋보이게 합니다" },
            ],
            TitleDescription: "소의 특성으로 본 " + name + "님의 대인 관계 강점을 확인하세요",
            ImageDescription: [
                { title: "소처럼 꾸준히 노력하며 관계를 안정적으로 깊고 오래 유지합니다." },
                { title: "소처럼 차분하게 소통하며 신뢰를 쌓아 깊은 유대를 지속해서 만듭니다." },
                { title: "소처럼 한결같이 책임을 다하며 믿음을 점차 더 단단히 쌓아갑니다." },
                { title: "소처럼 인내하며 갈등을 완화하고 관계를 더욱 조화롭게 발전시킵니다" },
            ],
            EndDescription: name + "님은 내면의 평화를 중시하고 조용히 자신의 목표를 향해 나아가는 성향입니다",
            imageAlt: "소",
            imageSrc: `${process.env.PUBLIC_URL}/images/animals/cow.png`,
        },
        "상관": {
            title: name + "님의 대인관계 강점을 확인하세요",
            strengths: [
                { title: "말을 잘합니다", description: "뛰어난 말솜씨로 자신의 생각을 효과적으로 전달하며 주변을 설득합니다" },
                { title: "창의력이 뛰어납니다", description: "창의적인 아이디어로 새로운 길을 제시하며 주변 사람들에게 영감을 줍니다" },
                { title: "서비스정신이 풍부합니다", description: "타인을 배려하는 서비스 정신으로 주변 사람들에게 따뜻함을 전합니다" },
                { title: "사교적이고 개방적입니다", description: "사교적이고 개방적인 성향으로 다양한 사람들과 쉽게 관계를 맺습니다" },
                { title: "권위를 싫어합니다", description: "권위적인 태도를 꺼리며 자유롭고 평등한 관계를 더 선호하고 중시합니다" },
            ],
            TitleDescription: "원숭이의 특성으로 본 " + name + "님의 대인 관계 강점을 확인하세요",
            ImageDescription: [
                { title: "원숭이처럼 재치 있게 대응하며 갈등을 유연하고 현명하게 잘 풀어냅니다." },
                { title: "원숭이처럼 호기심으로 다가가며 새로운 관계를 활발하게 만들어갑니다." },
                { title: "원숭이처럼 빠르게 적응하며 변화 속에서도 관계를 안정적으로 잘 유지합니다." },
                { title: "원숭이처럼 유쾌하게 소통하며 분위기를 더욱 밝고 활기차게 만들어갑니다." },
            ],
            EndDescription: name + "님은 사람들과 활발히 교류하며 자신의 생각과 감정을 솔직하게 표현합니다",
            imageAlt: "원숭이",
            imageSrc: `${process.env.PUBLIC_URL}/images/animals/monkey.png`,
        },
        "편재": {
            title: name + "님의 대인관계 강점을 확인하세요",
            strengths: [
                { title: "모험심이 강합니다", description: "새로운 도전과 경험을 즐기며, 과감하게 모험에 나서는 성향을 보입니다" },
                { title: "넓은 세상을 추구합니다", description: "넓은 세상을 바라보며 한계를 넘어 더 큰 가능성을 찾으려 노력합니다" },
                { title: "야망이 있습니다", description: "높은 목표를 세우고 이를 이루기 위해 끊임없이 노력하며 자신감을 보입니다" },
                { title: "허례허식을 싫어합니다", description: "겉치레보다는 진솔함을 중시하며, 솔직하고 자연스러운 관계를 선호합니다" },
                { title: "결단력이 뛰어납니다", description: "중요한 순간에 결단력 있게 행동하며 주변의 신뢰와 존경을 얻습니다" },
            ],
            TitleDescription: "독수리의 특성으로 본 " + name + "님의 대인 관계 강점을 확인하세요",
            ImageDescription: [
                { title: "독수리처럼 넓은 시야로 상황을 세밀히 파악하며 관계를 주도적으로 이끕니다." },
                { title: "독수리처럼 목표를 명확히 설정하며 관계에 더욱 신중하고 깊이 집중합니다." },
                { title: "독수리처럼 독립적으로 행동하며 자신의 역할을 끝까지 책임감 있게 완수합니다." },
                { title: "독수리처럼 빠르게 판단하며 효율적으로 관계를 능숙하고 자연스럽게 조율합니다." },
            ],
            EndDescription: name + "님은 현실적 이익과 실리를 중시하며 실용적인 사고를 바탕으로 행동합니다",
            imageAlt: "독수리",
            imageSrc: `${process.env.PUBLIC_URL}/images/animals/eagle.png`,
        },
        "정재": {
            title: name + "님의 대인관계 강점을 확인하세요",
            strengths: [
                { title: "신용을 중시합니다", description: "신뢰를 기반으로 관계를 형성하며, 약속을 지키는 태도로 신용을 쌓습니다" },
                { title: "계산이 정확합니다", description: "정확한 계산과 체계적인 관리로 재정적인 안정감과 신뢰를 제공합니다" },
                { title: "낭비를 싫어합니다", description: "자원을 효율적으로 활용하며 낭비를 최소화해 실속 있는 삶을 추구합니다" },
                { title: "재테크를 잘합니다", description: "금전 관리와 재테크에 능숙해 안정적이고 효율적인 재정을 유지합니다" },
                { title: "정당한 소득을 추구합니다", description: "정직하게 얻은 소득을 중시하며 이를 기반으로 안정적인 삶을 만들어갑니다" },
            ],
            TitleDescription: "개미의 특성으로 본 " + name + "님의 대인 관계 강점을 확인하세요",
            ImageDescription: [
                { title: "개미처럼 꾸준히 노력하며 관계를 안정적이고 끝까지 성실히 유지합니다." },
                { title: "개미처럼 체계적으로 계획을 세워 신뢰를 차근차근 확실히 쌓아갑니다." },
                { title: "개미처럼 협력하며 공동의 목표를 함께 꾸준히 달성하고 발전해 나갑니다." },
                { title: "개미처럼 책임을 다하며 관계에서 믿음을 꾸준히 깊고 단단하게 키워냅니다." },
            ],
            EndDescription: name + "님은 계획적이고 실생활에 도움이 되는 현실적인 방법을 모색하는 성향입니다",
            imageAlt: "개미",
            imageSrc: `${process.env.PUBLIC_URL}/images/animals/ant.png`,
        },
        "편관": {
            title: name + "님의 대인관계 강점을 확인하세요",
            strengths: [
                { title: "법과 질서를 우선시합니다", description: "법과 질서를 중요하게 생각하며 정의롭고 공정한 관계를 만들어갑니다" },
                { title: "자신에게 엄격합니다", description: "스스로에게 엄격한 태도로 책임감 있게 행동하며 주변의 신뢰를 얻습니다" },
                { title: "희생과 봉사정신이 있습니다", description: "주변 사람들을 돕고 희생하며, 공동체의 발전과 화합을 위해 노력합니다" },
                { title: "카리스마가 있습니다", description: "강한 카리스마로 주변 사람들에게 신뢰를 주며 자연스럽게 중심이 됩니다" },
                { title: "불의에 저항합니다", description: "불의를 보면 참지 않고 바로잡으려는 강한 정의감으로 주변의 존경을 받습니다" },
            ],
            TitleDescription: "사자의 특성으로 본 " + name + "님의 대인 관계 강점을 확인하세요",
            ImageDescription: [
                { title: "사자처럼 강한 리더십으로 주변을 확실히 이끌며 신뢰와 존경을 쌓습니다." },
                { title: "사자처럼 용기 있게 어려움에 맞서며 관계를 끝까지 지키고 보호합니다." },
                { title: "사자처럼 빠르게 결단하며 관계에서 명확함과 꾸준한 신뢰를 보여줍니다." },
                { title: "사자처럼 당당한 태도로 갈등을 조율하며 안정과 화합을 만듭니다." },
            ],
            EndDescription: name + "님은 리더십을 발휘하고 책임감을 갖고 주변에 긍정적인 영향력을 미칩니다",
            imageAlt: "사자",
            imageSrc: `${process.env.PUBLIC_URL}/images/animals/lion.png`,
        },
        "정관": {
            title: name + "님의 대인관계 강점을 확인하세요",
            strengths: [
                { title: "품행이 단정합니다", description: "품행이 단정하며 예의 바른 태도로 주변 사람들에게 신뢰와 존경을 받아요" },
                { title: "위계질서를 중시합니다", description: "위계질서를 존중하며 조직에서 안정적이고 조화로운 관계를 유지합니다" },
                { title: "권위 의식이 있습니다", description: "권위 있는 태도로 타인의 신뢰를 얻으며 조직에서 중심 역할을 합니다" },
                { title: "꼼꼼하고 정확합니다", description: "꼼꼼하고 정확한 태도로 신뢰를 쌓으며 관계를 세심하게 유지합니다" },
                { title: "순종적입니다", description: "순종적인 태도로 타인의 의견을 존중하며 조화로운 관계를 형성합니다" },
            ],
            TitleDescription: "말의 특성으로 본 " + name + "님의 대인 관계 강점을 확인하세요",
            ImageDescription: [
                { title: "말처럼 꾸준히 움직이며 신뢰를 쌓고 관계를 더욱 깊고 발전시킵니다." },
                { title: "말처럼 규칙을 잘 지키며 균형과 질서를 안정적이고 조화롭게 유지합니다." },
                { title: "말처럼 성실하게 책임을 다하며 믿음을 점차 더 단단히 쌓고 만듭니다." },
                { title: "말처럼 온화한 태도로 갈등을 조율하며 협력을 지속적으로 이룹니다." },
            ],
            EndDescription: name + "님은 규칙과 원칙을 중시하며 공정하고 안정적인 방향을 추구하는 성향입니다",
            imageAlt: "말",
            imageSrc: `${process.env.PUBLIC_URL}/images/animals/horse.png`,
        },
        "편인": {
            title: name + "님의 대인관계 강점을 확인하세요",
            strengths: [
                { title: "끼가 많습니다", description: "끼와 재능이 많아 다양한 상황에서 사람들에게 즐거움을 주는 성향입니다" },
                { title: "눈치가 빠릅니다", description: "빠른 상황 판단으로 타인의 의도를 잘 파악하며 원활한 관계를 만듭니다" },
                { title: "남다른 생각을 합니다", description: "독특하고 창의적인 생각으로 주변 사람들에게 새로운 시각을 제공합니다" },
                { title: "임기응변에 능합니다", description: "변화하는 상황에 임기응변으로 대처하며 유연하게 관계를 유지합니다" },
                { title: "몰입을 잘합니다", description: "한 가지에 깊이 몰입하며 이를 통해 신뢰와 성과를 동시에 이끌어냅니다" },
            ],
            TitleDescription: "올빼미의 특성으로 본 " + name + "님의 대인 관계 강점을 확인하세요",
            ImageDescription: [
                { title: "올빼미처럼 신중하게 관찰하며 상대의 의도를 세밀히 파악하고 분석합니다." },
                { title: "올빼미처럼 깊이 있는 사고로 대화를 이끌며 신뢰를 차근차근 쌓습니다." },
                { title: "올빼미처럼 혼자만의 시간을 활용해 관계를 전략적으로 준비하고 계획합니다." },
                { title: "올빼미처럼 조용하지만 효과적으로 소통하며 안정감과 믿음을 더욱 줍니다." },
            ],
            EndDescription: name + "님은 창의적인 사고로 새로운 아이디어를 제시하고 독창적인 시각을 가집니다",
            imageAlt: "올빼미",
            imageSrc: `${process.env.PUBLIC_URL}/images/animals/owl.png`,
        },
        "정인": {
            title: name + "님의 대인관계 강점을 확인하세요",
            strengths: [
                { title: "박학다식합니다", description: "다양한 지식과 경험을 바탕으로 주변 사람들에게 신뢰와 존경을 받습니다" },
                { title: "자기성찰을 잘 합니다", description: "스스로를 돌아보며 성장하고 관계를 더 깊고 긍정적으로 발전시킵니다" },
                { title: "윗사람을 존중합니다", description: "윗사람을 존중하며 예의 바르고 협력적인 태도로 신뢰와 존경을 얻습니다" },
                { title: "인정받는 사람입니다", description: "책임감 있는 태도와 성실함으로 사람들에게 인정과 신뢰를 받습니다" },
                { title: "언행이 단정합니다", description: "언행이 바르고 단정하여 주변 사람들에게 신뢰와 좋은 인상을 남깁니다" },
            ],
            TitleDescription: "코끼리의 특성으로 본 " + name + "님의 대인 관계 강점을 확인하세요",
            ImageDescription: [
                { title: "코끼리처럼 느긋하게 행동하며 관계에서 안정감과 편안함을 제공합니다." },
                { title: "코끼리처럼 기억력이 좋아 약속을 지키며 신뢰를 더욱 깊게 쌓아갑니다." },
                { title: "코끼리처럼 무리를 배려하며 관계를 더욱 조화롭고 평화롭게 유지합니다." },
                { title: "코끼리처럼 의연하게 문제를 해결하며 관계를 끝까지 책임감 있게 지켜냅니다." },
            ],
            EndDescription: name + "님은 타인을 이해하고 포용하며 신뢰를 바탕으로 관계를 형성하는 성향입니다",
            imageAlt: "코끼리",
            imageSrc: `${process.env.PUBLIC_URL}/images/animals/elephant.png`,
        },
    };

    const currentAnalysis = analysisData[result.manseMonthGroundRelation] || {
        title: "데이터 없음",
        strengths: [{ title: "데이터 없음", description: "해당 관계에 대한 데이터가 없습니다." }],
        description: "해당 관계에 대한 상세 설명을 준비 중입니다.",
        imageAlt: "이미지 없음",
        imageSrc: `${process.env.PUBLIC_URL}/images/placeholder.png`,
    };

    const handleNextPage = () => {
        navigate('/Report6');
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
                    <div className="sky-symbol">{result.manseMonthGroundRelation}</div>
                </div>
                <h1 className="report-title">4. {name}님의 대인 관계 강점을 찾아드립니다</h1>
            </div>
            <p className="report-subtitle">강점을 바탕으로 더 나은 대인관계를 만들어보세요</p>

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
                    <p>{currentAnalysis.TitleDescription}</p>
                    <img
                        src={currentAnalysis.imageSrc}
                        alt={currentAnalysis.imageAlt}
                        className="analysis-image"
                    />
                    <ul className="strengths-list">
                        {currentAnalysis.ImageDescription.map((item, index) => (
                            <li key={index}>
                                <strong>{item.title}</strong><br/>
                            </li>
                        ))}
                    </ul>
                    <p>{currentAnalysis.EndDescription}</p>
                </div>
            </div>
            <p className="footer-text">강점을 활용하면 조화로운 협력과 소통의 길을 열 수 있습니다</p>
        </div>
    );
};

export default SajuReport5;
