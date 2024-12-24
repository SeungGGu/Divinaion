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

    // 약점별 메시지와 동물 이미지 매핑
    const weaknessMessages = {
        비견: {
            description: "늑대처럼 고집이 강하면 협력이 어려워질 수 있어요.",
            imageSrc: `${process.env.PUBLIC_URL}/images/animals/wolf.png`,
            imageAlt: "늑대 이미지",
        },
        겁재: {
            description: "호랑이처럼 충동적으로 행동하면 갈등을 초래할 수 있어요.",
            imageSrc: `${process.env.PUBLIC_URL}/images/animals/tiger.png`,
            imageAlt: "호랑이 이미지",
        },
        식신: {
            description: "소처럼 고집이 지나치면 변화에 적응하기 어려울 수 있어요.",
            imageSrc: `${process.env.PUBLIC_URL}/images/animals/cow.png`,
            imageAlt: "소 이미지",
        },
        상관: {
            description: "원숭이처럼 말이 앞서 준비 없이 행동하다 실수할 수 있어요.",
            imageSrc: `${process.env.PUBLIC_URL}/images/animals/monkey.png`,
            imageAlt: "원숭이 이미지",
        },
        편재: {
            description: "독수리처럼 높이만 보다가 중요한 기회를 놓칠 수 있어요.",
            imageSrc: `${process.env.PUBLIC_URL}/images/animals/eagle.png`,
            imageAlt: "독수리 이미지",
        },
        정재: {
            description: "개미처럼 작은 일에만 집착해 큰 목표를 놓칠 수 있어요.",
            imageSrc: `${process.env.PUBLIC_URL}/images/animals/ant.png`,
            imageAlt: "개미 이미지",
        },
        편관: {
            description: "사자처럼 리더십만 고집하다가 소통이 어려울 수 있어요.",
            imageSrc: `${process.env.PUBLIC_URL}/images/animals/lion.png`,
            imageAlt: "사자 이미지",
        },
        정관: {
            description: "말처럼 자신의 길만 고집하다가 갈등이 생길 수 있어요.",
            imageSrc: `${process.env.PUBLIC_URL}/images/animals/horse.png`,
            imageAlt: "말 이미지",
        },
        편인: {
            description: "올빼미처럼 밤에만 활동해 현실 감각이 부족할 수 있어요.",
            imageSrc: `${process.env.PUBLIC_URL}/images/animals/owl.png`,
            imageAlt: "올빼미 이미지",
        },
        정인: {
            description: "코끼리처럼 책임감이 과하면 효율성이 떨어질 수 있어요.",
            imageSrc: `${process.env.PUBLIC_URL}/images/animals/elephant.png`,
            imageAlt: "코끼리 이미지",
        },
    };

    const handleNextPage = () => {
        navigate('/Report28');
    };

    return (
        <div className="saju-report27-container">
            <button className="nextPage-button" onClick={handleNextPage}>
                다음 ▶
            </button>
            <h1 className="saju-report27-title">20. {name}님의 약점, 동물 이미지로 풀어보세요</h1>
            <p className="saju-report27-subtitle">동물 이미지를 통해 사주 속 약점을 쉽게 이해하세요</p>

            <p>동물 이미지로 본 {name}님의 약점과 극복 방법을 확인하세요</p>
            <div className="saju-report27-weakness-grid">
                {Object.entries(energyScores)
                    .filter(([_, score]) => score > 0)
                    .map(([weakness, score]) => (
                        <div key={weakness} className="saju-report27-weakness-card">
                            <div className="energy-content">
                                <img
                                    src={weaknessMessages[weakness]?.imageSrc}
                                    alt={weaknessMessages[weakness]?.imageAlt}
                                    className="saju-report27-weakness-image"
                                />
                                <div>
                                    <h2 className="saju-report27-weakness-title">{weakness} 에너지</h2>
                                    <p className="saju-report27-weakness-score">{score}% 있어요</p>
                                    <p className="saju-report27-weakness-description">
                                        {weaknessMessages[weakness]?.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>

            <div className="footer-section">
                <p className="footer-message">
                    동물 이미지를 통해 약점을 이해하면 더 나은 자신으로 변화할 수 있습니다
                </p>
            </div>
        </div>
    );
};

export default SajuReport27;
