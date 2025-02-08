import React from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import '../css/SajuReport27.css';
import {useSaju} from "../../context/SajuContext";

const SajuReport27 = () => {
    const {sajuData} = useSaju();
    const {name} = sajuData || {};
    const location = useLocation();
    const navigate = useNavigate();
    const {energyScores} = location.state || {}; // 26페이지에서 전달된 약점 데이터

    if (!energyScores) {
        return <div>데이터가 없습니다. 이전 페이지로 돌아가세요.</div>;
    }

    // 약점별 메시지 매핑
    const weaknessMessages = {
        비견: { title: "협력적 행동", description: "독립심이 강해 도움을 거부하거나 고집을 부려 불필요한 갈등을 초래할 수 있습니다." },
        겁재: { title: "도전적 행동", description: "감정적으로 급하게 결단을 내리거나 무리한 도전을 시도해 실패할 수 있습니다." },
        식신: { title: "내향적 행동", description: "감정에 치우쳐 중요한 일의 우선순위를 놓치고 처리 속도가 느려질 수 있습니다." },
        상관: { title: "외향적 행동", description: "즉흥적이고 충동적으로 행동해 실수를 하거나 주변과 갈등을 초래할 수 있습니다." },
        편재: { title: "실리적 행동", description: "기회를 우선시해 무리하게 행동하거나 상황 판단을 놓쳐 실수를 할 성향입니다." },
        정재: { title: "실용적 행동", description: "감정보다 이익을 우선시해 주변 사람들과의 관계에서 거리를 두는 성향입니다." },
        편관: { title: "권위적 행동", description: "권위를 과하게 중시해 권위적으로 보이거나 타인과의 갈등이 생길 수 있습니다." },
        정관: { title: "원칙적 행동", description: "타인의 실수를 쉽게 용납하지 못하고 때때로 비판적 태도를 보일 수 있습니다." },
        편인: { title: "독창적 행동", description: "아이디어는 많지만 실행력이 부족하고 준비 없이 즉흥적으로 행동할 수 있습니다." },
        정인: { title: "포용적 행동", description: "신중함이 지나쳐 결정을 미루거나 타이밍을 놓쳐 중요한 기회를 잃는 성향입니다." },
    };

    const handleNextPage = () => {
        navigate('/Report28');
    };

    return (
        <div className="saju-report27-container">
            <button className="nextPage-button" onClick={handleNextPage}>
                다음 ▶
            </button>
            <h1 className="saju-report27-title">20. {name}님의 행동 성향 약점, 사주로 알려드립니다</h1>
            <p className="saju-report27-subtitle">십신(十神) 사주를 통해 약점을 쉽고 재미있게 만나보세요</p>

            <div className="saju-report27-weakness-list">
                {Object.entries(energyScores)
                    .filter(([_, score]) => score > 0)
                    .map(([weakness, score]) => (
                        <div key={weakness} className="saju-report27-weakness-row">
                            <div className="weakness-category">
                                <strong>{weaknessMessages[weakness]?.title} - {score}% 있어요</strong>
                            </div>
                            <div className="weakness-description">
                                {weaknessMessages[weakness]?.description}
                            </div>
                        </div>
                    ))}
            </div>

            <div className="footer-section">
                <p className="footer-message">
                    약점을 강점으로 바꾸면 긍정적인 변화를 시작할 수 있습니다.
                </p>
            </div>
        </div>
    );
};

export default SajuReport27;
