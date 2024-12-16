import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../css/SajuReport41.css"; // 스타일 재사용

// 운세별 설명 매핑 (타이틀과 내용 3개씩 추가)
const fortuneDetails = {
    비견: {
        caution: [
            {content: "지나친 기대를 버리고 현실적인 목표를 세우세요" },
            {content: "중요한 결정을 내릴 때 신중히 생각하세요" },
            {content: "협력을 우선하며 다른 사람의 의견을 존중하세요" },
            {content: "자신의 일을 미루지 말고 스스로 해결하세요" },
        ],
        advice: [
            {content: "다양한 만남을 통해 새로운 인연이 생길 거예요" },
            {content: "자신감을 키우며 성장의 기회를 얻을 수 있어요" },
            {content: "협력을 통해 목표를 이루며 성과를 낼 수 있어요" },
            {content: "팀워크로 새로운 가능성을 발견하게 될 거예요" },
        ],
    },
    겁재: {
        caution: [
            {content: "과욕을 부리지 않도록 스스로 조절하세요" },
            {content: "감정적 판단을 피하고 차분하게 생각하세요" },
            {content: "예산을 지키며 소비를 줄여보세요" },
            {content: "경쟁보다는 협력하는 방법을 찾아보세요" },
        ],
        advice: [
            {content: "실력을 통해 인정받을 기회가 찾아올 거예요" },
            {content: "협력을 통해 더 큰 성과를 낼 수 있어요" },
            {content: "한 단계 성장할 자신을 발견하게 돼요" },
            {content: "새로운 시도로 능력을 발휘해보세요" },
        ],
    },
    식신: {
        caution: [
            {content: "일의 우선순위를 정하고 지나친 욕심을 버리세요" },
            {content: "여유를 잃지 않고 차분히 진행하세요" },
            {content: "혼자 해결하려 하지 말고 도움을 구하세요" },
            {content: "결과보다는 과정을 즐기며 나아가세요" },
        ],
        advice: [
            {content: "꾸준한 노력으로 성과를 만들어갈 수 있어요" },
            {content: "안정된 기회를 통해 능력을 발휘해보세요" },
            {content: "새로운 인연과 함께 의미 있는 일을 만들어보세요" },
            {content: "자신감이 점차 쌓이며 내면의 힘을 느끼게 돼요" },
        ],
    },
    상관: {
        caution: [
            {content: "지나친 표현을 조심하며 신뢰를 유지하세요" },
            {content: "결과에 집착하지 말고 과정에 집중하세요" },
            {content: "충동적인 행동보다는 계획적으로 움직이세요" },
            {content: "다른 사람의 의견도 열린 마음으로 받아들이세요" },
        ],
        advice: [
            {content: "창의성을 발휘해 사람들의 주목을 받을 수 있어요" },
            {content: "새로운 프로젝트에서 중요한 역할을 맡게 돼요" },
            {content: "다양한 의견을 조율하며 관계를 넓혀갈 수 있어요" },
            {content: "독창적인 아이디어로 팀의 성과를 보여보세요" },
        ],
    },
    편재: {
        caution: [
            {content: "지나친 욕심이 아닌 현실적인 목표를 세우세요" },
            {content: "타인을 평가하기보다는 협력을 우선하세요" },
            {content: "재정 관리를 철저히 하며 낭비를 줄이세요" },
            {content: "감정적인 갈등을 피하고 차분히 대처하세요" },
        ],
        advice: [
            {content: "새로운 기회를 통해 성취를 만들어낼 수 있어요" },
            {content: "강한 추진력으로 어려운 문제를 해결할 수 있어요" },
            {content: "넓어진 네트워크로 인연이 더 깊어질 거예요" },
            {content: "창의적인 아이디어로 성과를 높여보세요" },
        ],
    },
    정재: {
        caution: [
            {content: "완벽주의를 내려놓고 현실적인 대안을 찾아보세요" },
            {content: "소통을 게을리하지 말고 관계를 유지하세요" },
            {content: "주변의 도움을 받아서 업무를 효율화하세요" },
            {content: "자신의 의견을 지나치게 강조하지 않도록 하세요" },
        ],
        advice: [
            {content: "안정적인 환경에서 성과를 만들어낼 수 있어요" },
            {content: "재정적인 여유를 통해 삶이 풍요로워질 거예요" },
            {content: "협력을 통해 목표를 달성하는 기쁨을 느낄 수 있어요" },
            {content: "신뢰를 쌓으며 관계에서 좋은 변화를 만들어가세요" },
        ],
    },
    편관: {
        caution: [
            {content: "권위적인 태도를 내려놓고 유연하게 소통하세요" },
            {content: "모든 책임을 떠안기보다는 분담하세요" },
            {content: "불필요한 갈등을 피하고 협력에 집중하세요" },
            {content: "결정을 내릴 때 신중하게 생각하세요" },
        ],
        advice: [
            {content: "강한 리더십으로 팀을 이끄는 기회가 생겨요" },
            {content: "도전 속에서 자신감을 키울 수 있어요" },
            {content: "명확한 목표로 성과를 만들어낼 수 있어요" },
            {content: "책임감 있는 모습으로 사람들의 신뢰를 얻어요" },
        ],
    },
    정관: {
        caution: [
            {content: "지나친 원칙주의를 피하고 융통성을 발휘하세요" },
            {content: "혼자 모든 것을 해결하려 하지 마세요" },
            {content: "타인의 의견을 경청하며 협력의 길을 찾으세요" },
            {content: "감정적인 반응보다는 논리적으로 접근하세요" },
        ],
        advice: [
            {content: "안정된 환경에서 책임감 있는 역할을 맡을 수 있어요" },
            {content: "자신의 신뢰를 통해 관계가 더욱 깊어질 거예요" },
            {content: "계획을 실현하며 성취감을 느낄 수 있어요" },
            {content: "노력으로 목표를 달성하는 자신을 발견할 거예요" },
        ],
    },
    편인: {
        caution: [
            {content: "지나친 분석보다 행동으로 옮겨보세요" },
            {content: "내면에만 집중하지 말고 주변과 소통하세요" },
            {content: "새로운 시도에 겁먹지 말고 도전하세요" },
            {content: "자신의 약점을 부정하지 말고 인정하세요" },
        ],
        advice: [
            {content: "통찰력 있는 조언으로 주위의 신뢰를 얻을 수 있어요" },
            {content: "독립적인 환경에서 자신의 역량을 발휘할 수 있어요" },
            {content: "깊은 탐구로 문제를 해결하는 성취감을 느껴요" },
            {content: "새로운 경험을 통해 자신감을 키울 수 있어요" },
        ],
    },
    정인: {
        caution: [
            {content: "지나친 배려로 자신을 희생하지 마세요" },
            {content: "감정에 휘둘리지 않고 중심을 잡으세요" },
            {content: "모든 일을 완벽하게 하려는 부담을 내려놓으세요" },
            {content: "주변의 기대에만 맞추지 말고 자신의 길을 찾으세요" },
        ],
        advice: [
            {content: "따뜻한 배려로 사람들에게 안정감을 줄 수 있어요" },
            {content: "신뢰를 바탕으로 가족과의 관계가 더 깊어질 거예요" },
            {content: "협력을 통해 목표를 달성하는 기쁨을 느낄 수 있어요" },
            {content: "조화로운 환경에서 자신감을 키워갈 수 있어요" },
        ],
    },
};

const SajuReport43 = () => {
    const location = useLocation();
    const navigate = useNavigate();

    // 올해와 내년의 운세 정보 가져오기
    const {currentFortune, nextFortune, currentYear, nextYear, name } = location.state || {};

    if (!nextFortune) {
        return <div>데이터가 없습니다. 이전 페이지로 돌아가세요.</div>;
    }

    const handleNextPage = () => {
        navigate('/Report44', {
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
        <div className="report41-container">
            <h1 className="report41-title">
                32. {nextYear}년, 꼭 알아야 할 {name}님의 내년 운세
            </h1>
            <p className="report41-subtitle">
                내년의 운세로 더 나은 선택과 성장을 계획하세요!
            </p>

            <div className="yearly-fortune-section">
                {/* 내년: 조심해야 할 점 */}
                <div className="year-box">
                    <h2 className="year-title">{nextYear}년, 조심해야 할 점 ⚠️</h2>
                    {fortuneDetails[nextFortune]?.caution.map((item, index) => (
                        <div key={index} className="caution-item">
                            <p className="item-content">{item.content}</p>
                        </div>
                    ))}
                </div>

                {/* 내년: 기대되는 점 */}
                <div className="year-box">
                    <h2 className="year-title">{nextYear}년, 기대되는 점 🌟</h2>
                    {fortuneDetails[nextFortune]?.advice.map((item, index) => (
                        <div key={index} className="advice-item">
                            <p className="item-content">{item.content}</p>
                        </div>
                    ))}
                </div>
            </div>

            <footer className="report41-footer">
                <p>
                    {nextYear}년의 기회를 활용하면 성장의 발판을 만들 수 있습니다
                </p>
            </footer>

            {/* 다음 페이지로 이동 버튼 */}
            <button className="nextPage-button" onClick={handleNextPage}>
                다음 ▶
            </button>
        </div>
    );
};

export default SajuReport43;
