import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../css/SajuReport41.css";

// 운세별 설명 매핑 (타이틀과 내용 3개씩 추가)
const fortuneDetails = {
    비견: {
        caution: [
            { title: "기대가 지나치지 않도록 해요", content: "도움 받더라도 스스로 할 부분은 챙기세요" },
            { title: "중요한 결정을 신중하게 해요", content: "서두르지 말고 충분히 고민한 후 결정하세요" },
            { title: "경쟁보다는 협력을 우선하세요", content: "상대와 목표를 나누고 협력할 방법을 찾아보세요" },
        ],
        advice: [
            { title: "새로운 만남을 기회로 삼으세요", content: "다양한 모임에 참석해 먼저 인사를 건네보세요" },
            { title: "자신감이 상승할 수 있어요", content: "작고 쉬운 목표를 세워 성취하며 자신감을 키워요" },
            { title: "협력하며 더 큰 성과를 낼 수 있어요", content: "팀원과 소통하며 역할을 나눠 목표를 이루어보세요" },
        ],
    },
    겁재: {
        caution: [
            { title: "과욕을 피하세요", content: "무리한 욕심은 스트레스를 부르고 실패를 유발해요" },
            { title: "이성적 감정을 유지하세요", content: "감정에 휘둘리지 말고 냉정히 판단하며 대처하세요" },
            { title: "금전 관리를 철저히 하세요", content: "예산을 세우고 지출을 통제하며 낭비를 줄여보세요" },
        ],
        advice: [
            { title: "실력을 발휘해 보세요", content: "새로운 활동에서 실력을 펼치고 인정받아 보세요" },
            { title: "협력으로 결과를 높이세요", content: "협력하며 함께 더 나은 결과를 만들어 나가보세요" },
            { title: "한 단계 성장할 기회예요", content: "새롭고 도전적인 일로 자신을 성장시켜 보세요" },
        ],
    },
    식신: {
        caution: [
            { title: "지난친 과식을 피하세요", content: "과식은 건강에 문제를 줄 수 있으니 조심하세요" },
            { title: "과도한 일을 피하세요", content: "무리한 에너지를 소모하지 않도록 주의하세요" },
            { title: "욕구를 적절히 조절하세요", content: "활동에 집중하며 욕구를 과하게 키우지 마세요" },
        ],
        advice: [
            { title: "새로운 취미를 시작해 보세요", content: "미술, 음악 등으로 새 즐거움을 찾아보세요" },
            { title: "규칙적인 운동으로 건강을 지키세요", content: "운동으로 마음과 몸의 균형을 유지해보세요" },
            { title: "자기 개발의 기회를 잡아보세요", content: "책이나 배움을 통해 더 나은 자신을 만들어보세요" },
        ],
    },
    상관: {
        caution: [
            { title: "성급한 결정을 피하세요", content: "충분히 고민하고 신중하게 결정을 내려보세요" },
            { title: "변화를 너무 자주 시도하지 마세요", content: "한 번 정한 목표를 실천하며 결과를 확인하세요" },
            { title: "즉흥적인 행동을 주의하세요", content: "즉흥적으로 결정하면 문제가 생길 가능성이 커져요" },
        ],
        advice: [
            { title: "일상에 변화를 주며 여행을 즐겨보세요", content: "짧은 여행으로 새로운 경험과 즐거움을 찾아보세요" },
            { title: "새로운 시도로 배움의 기회를 잡아보세요", content: "흥미로운 분야를 탐구하며 배움을 시도해 보세요" },
            { title: "트렌드를 활용해 유리한 상황을 만드세요", content: "소셜 미디어 활용으로 기회를 만들며 도전해 보세요" },
        ],
    },
    편재: {
        caution: [
            { title: "과도한 소비를 자제하세요", content: "불필요한 지출을 줄이고 계획적으로 사용해 보세요" },
            { title: "일상 생활에서 지출을 조정하세요", content: "무계획적인 소비를 줄이고 필요한 곳에만 쓰세요" },
            { title: "우선순위를 신중하게 정하세요", content: "중요한 일부터 우선 진행하며 시간을 관리하세요" },
        ],
        advice: [
            { title: "예상치 못한 수익을 얻을 수 있어요", content: "여유 자금으로 소액 투자를 하며 경험을 쌓아보세요" },
            { title: "재정 성장이 기대돼요", content: "수익을 저축하거나 새로운 기회에 투자해 보세요" },
            { title: "여행으로 특별한 경험을 쌓아보세요", content: "국내 여행을 통해 새로운 장소를 탐험해 보세요" },
        ],
    },
    정재: {
        caution: [
            { title: "소비를 줄이지 않으면 돈 관리가 어려워요", content: "불필요한 지출을 줄이고 예산을 계획해 보세요" },
            { title: "정돈되지 않으면 마음이 불편해요", content: "주변을 잘 정리하며 마음의 안정감을 찾아보세요" },
            { title: "관계에 소홀하면 기회를 놓칠 수 있어요", content: "주변 사람들과의 대화 속에서 신뢰를 쌓아보세요" },
        ],
        advice: [
            { title: "저축 기회가 많아져요", content: "예산을 세워 필요한 곳에 알맞게 저축해 보세요" },
            { title: "정리된 공간이 편안함을 줘요", content: "깔끔하게 정리된 공간에서 여유를 느껴보세요" },
            { title: "사람들과 좋은 성과를 얻을 수 있어요", content: "가족이나 친구와의 대화로 기쁨을 나눠보세요" },
        ],
    },
    편관: {
        caution: [
            { title: "예상치 못한 일을 준비하세요", content: "예상치 못한 상황에 대비해 계획을 세워보세요" },
            { title: "건강이나 가족 문제에 주의하세요", content: "작은 문제라도 점검하고 필요한 조치를 취해보세요" },
            { title: "중요한 순간에는 배려가 필요해요", content: "고집을 내려놓고 유연하게 상황을 조율해 보세요" },
        ],
        advice: [
            { title: "예상치 못한 기회가 찾아올 수 있어요", content: "돌발 기회를 활용해 새로운 변화를 시도해 보세요" },
            { title: "양보와 배려로 상황을 유리하게 만드세요", content: "대화 속에서 상대의 의견을 존중하며 조율하세요" },
            { title: "가까운 사람들과의 관계가 견고해질 수 있어요", content: "가족, 친구와 시간을 보내며 신뢰를 쌓아 보세요" },
        ],
    },
    정관: {
        caution: [
            { title: "경쟁이 치열해질 수 있어요", content: "무리하지 말고 차분하게 결정을 내려보세요" },
            { title: "기회를 놓치지 않도록 준비하세요", content: "예상치 못한 상황에 대비해 계획을 세워보세요" },
            { title: "균형을 유지하세요", content: "일과 휴식을 조화롭게 배치하며 균형을 맞춰보세요" },
        ],
        advice: [
            { title: "직장에서 안정감을 느낄 수 있어요", content: "차분한 태도로 안정적인 성과를 쌓아보세요" },
            { title: "가정에서 더 큰 안정을 찾을 수 있어요", content: "세심한 대화로 가족과의 신뢰를 만들어 보세요" },
            { title: "성공할 기회가 많아져요", content: "구체적인 계획으로 성공 기회를 실현해 보세요" },
        ],
    },
    편인: {
        caution: [
            { title: "현재 일에 집중을 잃지 마세요", content: "중요한 일에만 집중하고 새로운 것에 주의하세요" },
            { title: "서두르지 말고 신중히 행동하세요", content: "서두르지 말고 차분히 판단하며 결정해 보세요" },
            { title: "휴식을 통해 마음의 안정을 유지하세요", content: "복잡한 생각을 멈추고 안정감을 찾아보세요" },
        ],
        advice: [
            { title: "새로운 활동을 할 기회가 많아져요", content: "다양한 활동에 참여하며 관심 분야를 찾아보세요" },
            { title: "변화의 시기에 열정을 되찾을 수 있어요", content: "새로운 목표를 시작하며 열정을 키워 보세요" },
            { title: "집중하며 성장할 수 있어요", content: "자기 개발과 온라인 학습으로 성장을 이루세요" },
        ],
    },
    정인: {
        caution: [
            { title: "권리를 지킬 때 신중하세요", content: "갈등을 피하고 조화로운 해결책을 찾아보세요" },
            { title: "기회를 놓치지 않도록 준비하세요", content: "중요한 일이 오기 전 철저히 준비해 보세요" },
            { title: "고민이 많아지면 결정을 미룰 수 있어요", content: "빠른 결단으로 문제를 해결해 나가 보세요" },
        ],
        advice: [
            { title: "자격증 취득 기회가 많아져요", content: "관심 분야의 자격증으로 새 기회를 찾아보세요" },
            { title: "꾸준한 학습으로 성장할 수 있어요", content: "지속적인 학습으로 목표를 실현해 보세요" },
            { title: "부동산이나 금융 기회가 찾아올 수 있어요", content: "관련 상담과 공부로 새로운 기회를 만들어 보세요" },
        ],
    },
};


const SajuReport41 = () => {
    const location = useLocation();
    const navigate = useNavigate();

    // 올해와 내년의 운세 정보 가져오기
    const { currentFortune, currentYear, nextFortune, nextYear, name } = location.state || {};

    if (!currentFortune) {
        return <div>데이터가 없습니다. 이전 페이지로 돌아가세요.</div>;
    }

    const handleNextPage = () => {
        navigate('/Report42', {
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
                {currentYear}년, {name}님의 성공을 위한 맞춤 전략
            </h1>
            <p className="report41-subtitle">
                {currentYear}년 운세를 활용해 성공과 목표 달성을 계획하세요.
            </p>

            <p>{currentYear}년 : 자신감을 키우고 협력을 통해 목표를 달성하세요</p>
            <div className="yearly-fortune-section">
                {/* 올해: 조심해야 할 점 */}
                <div className="year-box">
                    <h2 className="year-title">{currentYear}년, 조심해야 할 점 ⚠️</h2>
                    {fortuneDetails[currentFortune]?.caution.map((item, index) => (
                        <div key={index} className="caution-item">
                            <h3 className="item-title">{item.title}</h3>
                            <p className="item-content">{item.content}</p>
                        </div>
                    ))}
                </div>

                {/* 올해: 기대되는 점 */}
                <div className="year-box">
                    <h2 className="year-title">{currentYear}년, 기대되는 점 🌟</h2>
                    {fortuneDetails[currentFortune]?.advice.map((item, index) => (
                        <div key={index} className="advice-item">
                            <h3 className="item-title">{item.title}</h3>
                            <p className="item-content">{item.content}</p>
                        </div>
                    ))}
                </div>
            </div>

            <footer className="report41-footer">
                <p>
                    {currentYear}년의 선택으로 더 나은 미래를 만들 수 있습니다.
                </p>
            </footer>

            {/* 다음 페이지로 이동 버튼 */}
            <button className="nextPage-button" onClick={handleNextPage}>
                다음 ▶
            </button>
        </div>
    );
};

export default SajuReport41;
