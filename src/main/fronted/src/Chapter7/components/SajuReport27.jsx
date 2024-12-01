import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../css/SajuReport27.css';
import {useSaju} from "../../context/SajuContext";

const SajuReport27 = () => {
    const { sajuData } = useSaju();
    const { name } = sajuData || {};
    const location = useLocation();
    const navigate = useNavigate();
    const { energyScores } = location.state || {}; // 26페이지에서 전달된 약점 데이터

    if (!energyScores) {
        return <div>데이터가 없습니다. 이전 페이지로 돌아가세요.</div>;
    }

    // 약점별 메시지와 동물 이미지 매핑
    const weaknessMessages = {
        비견: {
            description: "늑대처럼 자기 영역을 침범 당하면 강하게 반발해요.",
            imageSrc: `${process.env.PUBLIC_URL}/images/wolf.png`,
            imageAlt: "늑대 이미지",
        },
        겁재: {
            description: "호랑이처럼 힘을 과시하려다 무리와 충돌할 수 있어요.",
            imageSrc: `${process.env.PUBLIC_URL}/images/tiger.png`,
            imageAlt: "호랑이 이미지",
        },
        식신: {
            description: "소처럼 익숙한 길만 가려 하여 새로운 시도를 꺼려해요.",
            imageSrc: `${process.env.PUBLIC_URL}/images/cow.png`,
            imageAlt: "소 이미지",
        },
        상관: {
            description: "원숭이처럼 말이 앞서고, 준비 없는 행동으로 실수합니다.",
            imageSrc: `${process.env.PUBLIC_URL}/images/monkey.png`,
            imageAlt: "원숭이 이미지",
        },
        편재: {
            description: "독수리처럼 높이만 보고 중요한 기회를 지나칠 수 있어요.",
            imageSrc: `${process.env.PUBLIC_URL}/images/eagle.png`,
            imageAlt: "독수리 이미지",
        },
        정재: {
            description: "개미처럼 사소한 일에만 몰두해 큰 그림을 놓치기 쉬워요.",
            imageSrc: `${process.env.PUBLIC_URL}/images/turtle.png`,
            imageAlt: "개미 이미지",
        },
        편관: {
            description: "사자처럼 자신만의 리더십을 고집해 타인을 배려하지 않아요.",
            imageSrc: `${process.env.PUBLIC_URL}/images/lion.png`,
            imageAlt: "사자 이미지",
        },
        정관: {
            description: "말처럼 자신의 길을 고집해 다른 사람과 충돌할 때가 있어요.",
            imageSrc: `${process.env.PUBLIC_URL}/images/horse.png`,
            imageAlt: "말 이미지",
        },
        편인: {
            description: "올빼미처럼 밤에만 활동해 현실 감각이 부족할 수 있어요.",
            imageSrc: `${process.env.PUBLIC_URL}/images/owl.png`,
            imageAlt: "올빼미 이미지",
        },
        정인: {
            description: "코끼리처럼 신중한 나머지 중요한 결정을 미루는 경향이 있어요.",
            imageSrc: `${process.env.PUBLIC_URL}/images/goose.png`,
            imageAlt: "코끼리 이미지",
        },
    };

    const handleNextPage = () => {
        navigate('/Report28');
    };

    return (
        <div className="saju-report27-container">
            <h1 className="saju-report27-title">사주의 약점을 분석해 성장의 길을 찾아보세요</h1>
            <p className="saju-report27-subtitle">{name}님의 약점을 동물의 이미지로 쉽게 이해해보세요.</p>

            <div className="saju-report27-weakness-section">
                {Object.entries(energyScores)
                    .filter(([_, score]) => score > 0) // 0% 약점은 표시하지 않음
                    .map(([weakness, score]) => (
                        <div key={weakness} className="saju-report27-weakness-item">
                            <div className="saju-report27-weakness-header">
                                <h2 className="saju-report27-weakness-title">{weakness} 약점</h2>
                                <span className="saju-report27-weakness-score">{score}%</span>
                            </div>
                            <div className="saju-report27-weakness-content">
                                <img
                                    src={weaknessMessages[weakness]?.imageSrc}
                                    alt={weaknessMessages[weakness]?.imageAlt}
                                    className="saju-report27-weakness-image"
                                />
                                <p className="saju-report27-weakness-description">
                                    {weaknessMessages[weakness]?.description}
                                </p>
                            </div>
                        </div>
                    ))}
            </div>

            <button className="saju-report27-next-button" onClick={handleNextPage}>
                다음 페이지로 이동
            </button>
        </div>
    );
};

export default SajuReport27;
