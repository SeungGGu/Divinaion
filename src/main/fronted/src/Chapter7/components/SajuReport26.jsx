import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../css/SajuReport26.css';
import { useSaju } from "../../context/SajuContext";

const SajuReport26 = () => {
    const { sajuData } = useSaju();
    const { name } = sajuData || {};
    const location = useLocation();
    const navigate = useNavigate();
    const { energyScores } = location.state || {}; // 25페이지에서 넘어온 에너지 데이터

    if (!energyScores) {
        return <div>데이터가 없습니다. 이전 페이지로 돌아가세요.</div>;
    }

    // 에너지별 메시지와 동물 이미지 매핑
    const energyMessages = {
        비견: {
            description: "늑대처럼 협동하며 팀워크를 강화합니다.",
            imageSrc: `${process.env.PUBLIC_URL}/images/animals/wolf.png`,
            imageAlt: "늑대 이미지",
        },
        겁재: {
            description: "호랑이처럼 도전하며 어려움에 굴하지 않습니다.",
            imageSrc: `${process.env.PUBLIC_URL}/images/animals/tiger.png`,
            imageAlt: "호랑이 이미지",
        },
        식신: {
            description: "소처럼 끈기와 성실함으로 완수합니다.",
            imageSrc: `${process.env.PUBLIC_URL}/images/animals/cow.png`,
            imageAlt: "소 이미지",
        },
        상관: {
            description: "원숭이처럼 창의적으로 문제를 해결합니다.",
            imageSrc: `${process.env.PUBLIC_URL}/images/animals/monkey.png`,
            imageAlt: "원숭이 이미지",
        },
        편재: {
            description: "독수리처럼 넓은 시야로 기회를 포착합니다.",
            imageSrc: `${process.env.PUBLIC_URL}/images/animals/eagle.png`,
            imageAlt: "독수리 이미지",
        },
        정재: {
            description: "개미처럼 협력하며 맡은 역할에 최선을 다합니다.",
            imageSrc: `${process.env.PUBLIC_URL}/images/animals/ant.png`,
            imageAlt: "개미 이미지",
        },
        편관: {
            description: "사자처럼 리더십으로 신뢰를 얻습니다.",
            imageSrc: `${process.env.PUBLIC_URL}/images/animals/lion.png`,
            imageAlt: "사자 이미지",
        },
        정관: {
            description: "말처럼 책임감 있게 목표를 향해 나아갑니다.",
            imageSrc: `${process.env.PUBLIC_URL}/images/animals/horse.png`,
            imageAlt: "말 이미지",
        },
        편인: {
            description: "올빼미처럼 신중하게 상황을 분석합니다.",
            imageSrc: `${process.env.PUBLIC_URL}/images/animals/owl.png`,
            imageAlt: "올빼미 이미지",
        },
        정인: {
            description: "코끼리처럼 배려심 깊게 신뢰를 얻습니다.",
            imageSrc: `${process.env.PUBLIC_URL}/images/animals/elephant.png`,
            imageAlt: "코끼리 이미지",
        },
    };

    const handleNextPage = () => {
        navigate('/Report27', { state: { energyScores } });
    };

    return (
        <div className="report26-container">
            {/* 다음 페이지 버튼 */}
            <button className="nextPage-button" onClick={handleNextPage}>
                다음 ▶
            </button>

            <h1 className="report-title">19. {name}님의 타고난 강점, 동물로 풀어봅니다</h1>
            <p className="report-subtitle">동물 이미지를 통해 강점을 쉽고 재미있게 만나보세요</p>

            <p>동물로 본 {name}님의 특별한 강점과 강점과 의미를 확인하세요</p>
            <div className="energy-section">
                {Object.entries(energyScores)
                    .filter(([_, score]) => score > 0) // 0% 에너지는 표시하지 않음
                    .map(([energy, score]) => (
                        <div key={energy} className="energy-item">
                            <div className="energy-content">
                                <img
                                    src={energyMessages[energy]?.imageSrc}
                                    alt={energyMessages[energy]?.imageAlt}
                                    className="energy-image"
                                />
                                <div>
                                    <h2 className="energy-title">{energy} 에너지</h2>
                                    <p className="energy-score">👍 {score}%</p>
                                    <p className="energy-description">{energyMessages[energy]?.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
            {/* 하단 메시지 */}
            <div className="footer-section">
                <p className="footer-message">
                    동물 이미지를 통해 강점을 알게 되면 새로운 가능성을 발견할 수 있습니다.
                </p>
            </div>
        </div>
    );
};

export default SajuReport26;
