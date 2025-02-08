import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSaju } from '../../context/SajuContext';
import '../css/SajuReport2.css'; // 동일한 스타일 재활용

const SajuReport4 = () => {
    const { sajuData } = useSaju();
    const { result, name } = sajuData;
    const navigate = useNavigate();

    const analysisData = {
        "비견": {
            title: name + "님의 개인적 성향과 보완점을 확인하세요",
            weaknesses: [
                { title: "낯가림이 심합니다", description: "낯선 사람에게 다가가는 것을 어려워하며, 익숙해지기까지 시간이 필요합니다" },
                { title: "귀가 얇아 손해를 볼 때가 있습니다", description: "다른 사람의 말을 쉽게 믿어 손해를 보거나 오해를 사는 경우가 있습니다" },
                { title: "간섭을 싫어합니다", description: "자신의 일에 간섭 받는 것을 불편해하며 독립적으로 해결하려고 합니다" },
                { title: "고집이 셉니다", description: "자신의 생각을 고수하며 융통성 있게 타협하기 어려운 경우가 있습니다" },
                { title: "시시비비를 잘 가립니다", description: "옳고 그름을 명확히 판단하려는 성향으로 주변과 갈등이 생길 수 있습니다" },
            ],
            TitleDescription: "늑대의 특성으로 본 " + name + "님의 개인적 성향과 보완점",
            subDescription: [
                { description: "늑대처럼 고집이 강해 타인의 조언을 수용하지 못할 때가 종종 있습니다." },
                { description: "늑대처럼 혼자 해결하려다 협력의 기회를 놓치고 어려움을 겪을 수 있습니다." },
                { description: "늑대처럼 지나친 경쟁으로 갈등을 유발하고 관계가 멀어질 위험이 있습니다." },
                { description: "늑대처럼 감정을 숨겨 소통이 부족해지고 오해가 생길 가능성이 있습니다." },
            ],
            EndDescription: "님은 절제와 도전, 협동심을 갖출 때 더욱 성장하고 발전할 수 있습니다",
            imageAlt: "늑대",
            imageSrc: `${process.env.PUBLIC_URL}/images/animals/wolf.png`,
        },
        "겁재": {
            title: name + "님의 개인적 성향과 보완점을 확인하세요",
            weaknesses: [
                { title: "고집이 셉니다", description: "자신의 의견을 굽히지 않는 고집으로 조화를 이루기 어려울 때가 있습니다" },
                { title: "열등감이 있습니다", description: "스스로 부족하다고 느껴 자신감을 잃거나 소극적으로 행동할 수 있습니다" },
                { title: "시비가 자주 붙습니다", description: "강한 자기주장으로 인해 의도치 않게 주변과 갈등이 생길 때가 있습니다" },
                { title: "질투심이 많습니다", description: "주변 사람의 성공에 민감하게 반응하며 비교로 인해 스트레스를 받습니다" },
                { title: "투쟁심이 강습니다", description: "강한 투쟁심으로 타협을 꺼리며 갈등과 긴장감이 조성될 때가 있습니다" },
            ],
            TitleDescription: "호랑이의 특성으로 본 " + name + "님의 개인적 성향과 보완점",
            subDescription: [
                { description: "호랑이처럼 고집이 강해 타인의 의견을 받아들이기 어려울 때가 있습니다." },
                { description: "호랑이처럼 경쟁심이 지나쳐 주변 사람들과 갈등이 생길 수 있습니다." },
                { description: "호랑이처럼 충동적으로 행동해 실수를 하거나 상황을 복잡하게 합니다." },
                { description: "호랑이처럼 독립성을 강조하다 협력과 조화를 잃을 위험이 있습니다." },
            ],
            EndDescription: "님은 절제와 도전, 협동심을 갖출 때 더욱 성장하고 발전할 수 있습니다",
            imageAlt: "호랑이",
            imageSrc: `${process.env.PUBLIC_URL}/images/animals/tiger.png`,
        },
        "식신": {
            title: name + "님의 개인적 성향과 보완점을 확인하세요",
            weaknesses: [
                { title: "우유부단합니다", description: "선택의 순간에 쉽게 결정을 내리지 못해 중요한 기회를 놓칠 때가 있습니다" },
                { title: "감정기복이 심합니다", description: "감정의 변화가 크고 빠르며, 주변 사람들에게 혼란을 줄 때가 있습니다" },
                { title: "역경에 취약합니다", description: "어려운 상황에서 쉽게 지치거나 포기하려는 태도를 보일 때가 있습니다" },
                { title: "게으른 모습을 보일 때가 있습니다", description: "열정이 부족하거나 동기가 약해 중요한 일을 미루는 경향이 있습니다" },
                { title: "편식을 합니다", description: "특정 취향에 집착하며 균형 잡힌 선택과 유연한 대처를 못할 때가 있습니다" },
            ],
            TitleDescription: "소의 특성으로 본 " + name + "님의 개인적 성향과 보완점",
            subDescription: [
                { description: "소처럼 느긋해져 해야 할 일을 미루고 중요한 기회를 놓칠 수 있습니다." },
                { description: "소처럼 익숙한 방식을 고집하다 변화와 발전의 기회를 잃을 수 있습니다." },
                { description: "소처럼 지나친 신중함으로 결정을 미루어 어려움을 겪을 수 있습니다." },
                { description: "소처럼 자신의 감정을 잘 표현하지 않아 소통이 부족해질 때가 있습니다." },
            ],
            EndDescription: "님은 미소, 친절, 도전정신을 갖출 때 성장을 이루고 발전할 수 있습니다",
            imageAlt: "소",
            imageSrc: `${process.env.PUBLIC_URL}/images/animals/cow.png`,
        },
        "상관": {
            title: name + "님의 개인적 성향과 보완점을 확인하세요",
            weaknesses: [
                { title: "잘난 체합니다", description: "뛰어난 능력을 강조하려는 태도가 주변 사람들에게 거만하게 보일 수 있습니다" },
                { title: "실언과 망언을 할 때가 있습니다", description: "생각 없이 한 말이 오해를 불러일으키며 주변과 갈등을 유발할 수 있습니다" },
                { title: "반항적인 성향이 있습니다", description: "권위에 반발하며 자유를 중요시하는 태도가 갈등을 초래할 때가 있습니다" },
                { title: "사치와 허영심이 있습니다", description: "외적인 화려함을 중시하며 현실적인 부분을 간과하는 경우가 있습니다" },
                { title: "오기와 자만심이 있습니다", description: "자신의 의견을 지나치게 고집하며 타인의 조언을 쉽게 받아들이지 않습니다" },
            ],
            TitleDescription: "원숭이의 특성으로 본 " + name + "님의 사회적 성향과 보완점",
            subDescription: [
                { description: "원숭이처럼 자유분방해 규칙을 무시해 주변과 갈등이 생길 수 있습니다." },
                { description: "원숭이처럼 충동적으로 행동해 실수를 하거나 계획을 놓칠 수 있습니다." },
                { description: "원숭이처럼 변덕스러워 관심이 자주 바뀌어 집중이 부족해질 수 있습니다." },
                { description: "원숭이처럼 직설적으로 말해 상대방에게 상처를 줄 위험이 있습니다." },
            ],
            EndDescription: "님은 미소, 친절, 도전정신을 갖출 때 성장을 이루고 발전할 수 있습니다",
            imageAlt: "원숭이",
            imageSrc: `${process.env.PUBLIC_URL}/images/animals/monkey.png`,
        },
        "편재": {
            title: name + "님의 개인적 성향과 보완점을 확인하세요",
            weaknesses: [
                { title: "성급하게 결정합니다", description: "중요한 결정을 서두르는 경향이 있어 신중함이 필요할 때가 있습니다" },
                { title: "투기와 도박을 즐길 때가 있습니다", description: "높은 위험을 감수하며 빠른 성과를 추구하는 태도로 주의가 필요합니다" },
                { title: "풍류를 좋아합니다", description: "여유와 즐거움을 추구하지만, 때로는 일에 집중하기 어려운 경우가 있습니다" },
                { title: "한탕주의 성향이 있습니다", description: "빠른 성공을 기대하며 현실적인 계획보다는 요행을 바랄 때가 있습니다" },
                { title: "독선적이고 독재적입니다", description: "자신의 의견을 강하게 주장하며 타인의 의견을 받아들이기 어려울 수 있습니다" },
            ],
            TitleDescription: "독수리의 특성으로 본 " + name + "님의 개인적 성향과 보완점",
            subDescription: [
                { description: "독수리처럼 높은 곳만 집중해 주변의 조언을 놓칠 위험이 있습니다." },
                { description: "독수리처럼 성급히 결정해 세부 사항을 놓치거나 실수를 할 수 있습니다." },
                { description: "독수리처럼 독립성을 강조해 협력과 조화를 이루기 어려울 수 있습니다." },
                { description: "독수리처럼 경쟁에서 승부욕이 강해 주변과 갈등을 일으킬 수 있습니다." },
            ],
            EndDescription: "님은 성실함과 노력, 선견지명을 갖출 때 더 큰 성장을 이루고 발전합니다",
            imageAlt: "독수리",
            imageSrc: `${process.env.PUBLIC_URL}/images/animals/eagle.png`,
        },
        "정재": {
            title: name + "님의 개인적 성향과 보완점을 확인하세요",
            weaknesses: [
                { title: "물질에 집착합니다", description: "물질적인 부분에 집중하며 때로는 정신적인 가치를 간과할 때가 있습니다" },
                { title: "이해타산적입니다", description: "손익을 꼼꼼히 따지며 사람들에게 때로는 실리적인 인상을 줄 수 있습니다" },
                { title: "계산적입니다", description: "모든 일을 세세히 계산하며 주변 사람들에게 다소 냉정해 보일 수 있습니다" },
                { title: "간섭을 잘 합니다", description: "다른 사람의 일에 적극적으로 관여하며 조언이 과해 부담을 줄 수 있습니다" },
                { title: "구두쇠 기질이 있습니다", description: "필요 이상의 절약으로 사람들에게 인색하고 차가운 인상을 줄 때가 있습니다" },
            ],
            TitleDescription: "개미의 특성으로 본 " + name + "님의 개인적 성향과 보완점",
            subDescription: [
                { description: "개미처럼 지나치게 성실해 스스로를 과로로 몰아갈 위험이 있습니다." },
                { description: "개미처럼 작은 실수에도 민감해 스트레스를 받기 쉬운 편입니다." },
                { description: "개미처럼 익숙한 방식만 고집해 새로운 시도를 꺼리는 경향이 있습니다." },
                { description: "개미처럼 책임감이 강해 다른 사람의 도움을 자주 거부할 수 있습니다." },
            ],
            EndDescription: "님은 성실함과 노력, 선견지명을 갖출 때 더 큰 성장을 이루고 발전합니다",
            imageAlt: "개미",
            imageSrc: `${process.env.PUBLIC_URL}/images/animals/ant.png`,
        },
        "편관": {
            title: name + "님의 개인적 성향과 보완점을 확인하세요",
            weaknesses: [
                { title: "타인을 억압하는 태도가 있습니다", description: "강한 의지로 자신의 의견을 강조하며 타인에게 부담을 줄 때가 있습니다" },
                { title: "독선적이고 과격합니다", description: "자신의 주장을 강하게 밀어붙이며 주변과 조화를 이루기 어려울 때가 있습니다" },
                { title: "강박과 스트레스가 많습니다", description: "완벽을 추구하며 스스로에게 강박감을 주어 스트레스를 느낄 때가 있습니다" },
                { title: "걱정이 많습니다", description: "사소한 일에도 걱정이 많아 스스로 불안감과 스트레스를 키울 때가 있습니다" },
                { title: "자만심이 강합니다", description: "자신감이 넘치지만, 때로는 이를 과시하며 오해와 부담을 줄 수 있습니다" },
            ],
            TitleDescription: "사자의 특성으로 본 " + name + "님의 개인적 성향과 보완점",
            subDescription: [
                { description: "사자처럼 강한 리더십이 독단적으로 비춰져 주변과 갈등이 생길 수 있습니다." },
                { description: "사자처럼 과감한 결단이 신중함을 놓쳐 실수를 초래할 위험이 있습니다." },
                { description: "사자처럼 지나친 자신감으로 타인의 의견을 무시할 가능성이 있습니다." },
                { description: "사자처럼 책임감이 강해 스스로 모든 부담을 떠안아 쉽게 지칠 수 있습니다." },
            ],
            EndDescription: "님은 원칙을 지키고 희생과 겸손을 갖출 때 더 큰 성장을 이룰 수 있습니다",
            imageAlt: "사자",
            imageSrc: `${process.env.PUBLIC_URL}/images/animals/lion.png`,
        },
        "정관": {
            title: name + "님의 개인적 성향과 보완점을 확인하세요",
            weaknesses: [
                { title: "고지식합니다", description: "원칙을 중시하는 태도로 유연한 대처가 어려워 갈등이 생길 때가 있습니다" },
                { title: "손해를 보지 않으려 합니다", description: "자신의 이익을 지키려는 태도가 강해 지나치게 신중해 보일 때가 있습니다" },
                { title: "타협이 어렵습니다", description: "자신의 기준을 고수하며 타인과 조율하는 데 어려움을 느낄 때가 있습니다" },
                { title: "소심한 면이 있습니다", description: "조심스러운 태도로 기회를 놓치거나 적극적인 행동을 주저할 때가 있습니다" },
                { title: "융통성이 부족합니다", description: "변화에 적응하는 데 어려움을 느끼며 고정된 방식을 고수할 때가 있습니다" },
            ],
            TitleDescription: "말의 특성으로 본 " + name + "님의 개인적 성향과 보완점",
            subDescription: [
                { description: "말처럼 규칙을 지나치게 중시해 융통성 없는 모습으로 비춰질 수 있습니다." },
                { description: "말처럼 신중한 태도가 지나쳐 결정을 미루다 기회를 놓칠 수 있습니다." },
                { description: "말처럼 고집이 강해 타인의 의견을 수용하기 어려운 상황이 생길 수 있습니다." },
                { description: "말처럼 책임감이 강해 혼자 모든 일을 떠안아 지칠 가능성이 있습니다." },
            ],
            EndDescription: "님은 원칙을 지키고 희생과 겸손을 갖출 때 더 큰 성장을 이룰 수 있습니다",
            imageAlt: "말",
            imageSrc: `${process.env.PUBLIC_URL}/images/animals/horse.png`,
        },
        "편인": {
            title: name + "님의 개인적 성향과 보완점을 확인하세요",
            weaknesses: [
                { title: "표리부동합니다", description: "속마음을 솔직히 드러내지 않아 주변 사람들에게 오해를 살 때가 있습니다" },
                { title: "잔머리를 잘 씁니다", description: "문제 해결에 창의적인 접근을 하지만, 때로는 깊이 부족해 보일 때가 있습니다" },
                { title: "비현실적입니다", description: "이상적인 목표를 추구하며 현실적인 계획과 실행을 간과할 때가 있습니다" },
                { title: "변덕이 심합니다", description: "상황에 따라 생각이 자주 바뀌어 일관성이 부족해 보일 때가 있습니다" },
                { title: "일의 마무리가 약합니다", description: "시작은 강하지만, 마무리에 집중하지 못해 결과가 미흡할 때가 있습니다" },
            ],
            TitleDescription: "올빼미의 특성으로 본 " + name + "님의 개인적 성향과 보완점",
            subDescription: [
                { description: "올빼미처럼 깊이 생각하다 결정을 미루어 기회를 놓칠 수 있습니다." },
                { description: "올빼미처럼 혼자 있는 것을 선호해 주변과의 소통이 줄어들 수 있습니다." },
                { description: "올빼미처럼 지나치게 분석적으로 접근해 실행이 늦어질 위험이 있습니다." },
                { description: "올빼미처럼 예민한 성향으로 사소한 일에도 스트레스를 받을 수 있습니다." },
            ],
            EndDescription: "님은 사랑과 봉사, 자기성찰을 통해 성장을 이루고 발전할 수 있습니다",
            imageAlt: "올빼미",
            imageSrc: `${process.env.PUBLIC_URL}/images/animals/owl.png`,
        },
        "정인": {
            title: name + "님의 개인적 성향과 보완점을 확인하세요",
            weaknesses: [
                { title: "적극성이 부족합니다", description: "새로운 도전이나 변화에 소극적으로 대응해 기회를 놓칠 때가 있습니다" },
                { title: "융통성이 부족합니다", description: "고정된 방식을 고수하며 변화나 상황에 유연한 대처가 어려울 수 있습니다" },
                { title: "고민을 많이 합니다", description: "사소한 일에도 깊이 고민하며 결정을 내리는 데 시간이 걸릴 때가 있습니다" },
                { title: "고지식합니다", description: "원칙을 중요시하는 성향으로 유연한 접근이 부족해 보일 때가 있습니다" },
                { title: "이기적인 면이 있습니다", description: "자신의 이익을 우선시하며 타인의 입장을 고려하지 못할 때가 있습니다" },
            ],
            TitleDescription: "코끼리의 특성으로 본 " + name + "님의 개인적 성향과 보완점",
            subDescription: [
                { description: "코끼리처럼 신중함이 지나쳐 결정을 미루고 기회를 놓칠 수 있습니다." },
                { description: "코끼리처럼 익숙한 방식을 고집해 변화와 새로움을 받아들이기 어렵습니다." },
                { description: "코끼리처럼 책임감이 강해 스스로 많은 부담을 떠안아 지칠 수 있습니다." },
                { description: "코끼리처럼 감정을 잘 드러내지 않아 소통이 부족해질 위험이 있습니다." },
            ],
            EndDescription: "님은 사랑과 봉사, 자기성찰을 통해 성장을 이루고 발전할 수 있습니다",
            imageAlt: "코끼리",
            imageSrc: `${process.env.PUBLIC_URL}/images/animals/elephant.png`,
        },
    };

    const monthRelation = result.manseMonthGroundRelation; // 동적 데이터
    const currentAnalysis = analysisData[monthRelation] || {
        title: "데이터 없음",
        weaknesses: [{ title: "데이터 없음", description: "해당 관계에 대한 데이터가 없습니다." }],
        description: "해당 관계에 대한 상세 설명을 준비 중입니다.",
        imageAlt: "이미지 없음",
        imageSrc: `${process.env.PUBLIC_URL}/images/placeholder.png`,
    };

    const handleNextPage = () => {
        navigate('/Report5'); // 다음 페이지로 이동
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
                <h1 className="report-title">3. {name}님의 개인적 성향과 보완점을 알려드립니다</h1>
            </div>
            <p className="report-subtitle">작은 변화를 통해 대인관계를 더 긍정적으로 만들어보세요</p>

            <div className="report-content">
                <div className="analysis-container">
                    <h2 className="analysis-title">{currentAnalysis.title}</h2>
                    <ul className="strengths-list">
                        {currentAnalysis.weaknesses.map((item, index) => (
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
            <p className="footer-text">보완점을 개선하면 균현 잡힌 관계와 성장을 이룰 수 있습니다</p>
        </div>
    );
};

export default SajuReport4;
