import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../css/SajuReport26.css';
import {useSaju} from "../../context/SajuContext";

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
            description: "늑대처럼 무리를 이끌며 협동하고 충성심을 다합니다.",
            imageSrc: `${process.env.PUBLIC_URL}/images/wolf.png`,
            imageAlt: "늑대 이미지",
        },
        겁재: {
            description: "호랑이처럼 용맹하게 도전하며 어려움에 굴하지 않습니다.",
            imageSrc: `${process.env.PUBLIC_URL}/images/tiger.png`,
            imageAlt: "호랑이 이미지",
        },
        식신: {
            description: "소처럼 끈기와 성실함으로 묵묵히 임무를 완수합니다.",
            imageSrc: `${process.env.PUBLIC_URL}/images/cow.png`,
            imageAlt: "소 이미지",
        },
        상관: {
            description: "원숭이처럼 유쾌하고 창의적인 에너지를 발산합니다.",
            imageSrc: `${process.env.PUBLIC_URL}/images/monkey.png`,
            imageAlt: "원숭이 이미지",
        },
        편재: {
            description: "독수리처럼 넓은 시야로 전체를 통찰하고 판단합니다.",
            imageSrc: `${process.env.PUBLIC_URL}/images/eagle.png`,
            imageAlt: "독수리 이미지",
        },
        정재: {
            description: "개미처럼 성실하고 꾸준히 목표를 향해 나아갑니다.",
            imageSrc: `${process.env.PUBLIC_URL}/images/turtle.png`,
            imageAlt: "개미 이미지",
        },
        편관: {
            description: "사자처럼 강한 리더십으로 무리를 이끌어 신뢰받습니다.",
            imageSrc: `${process.env.PUBLIC_URL}/images/lion.png`,
            imageAlt: "사자 이미지",
        },
        정관: {
            description: "말처럼 책임감 있게 강한 의지로 목표를 향해 나아갑니다.",
            imageSrc: `${process.env.PUBLIC_URL}/images/horse.png`,
            imageAlt: "말 이미지",
        },
        편인: {
            description: "올빼미처럼 지혜롭고 통찰력 있는 판단을 합니다.",
            imageSrc: `${process.env.PUBLIC_URL}/images/owl.png`,
            imageAlt: "올빼미 이미지",
        },
        정인: {
            description: "코끼리처럼 협동하며 신뢰를 쌓아가며 관계를 유지합니다.",
            imageSrc: `${process.env.PUBLIC_URL}/images/goose.png`,
            imageAlt: "코끼리 이미지",
        },
    };

    const handleNextPage = () => {
        navigate('/Report27', { state: { energyScores } });
    };

    return (
        <div className="report26-container">
            <h1 className="report-title">에너지 분석과 동물 이미지로 이해하기</h1>
            <p className="report-subtitle">각 에너지가 {name}님의 삶에 어떤 영향을 미치는지 분석해보세요.</p>

            <div className="energy-section">
                {Object.entries(energyScores)
                    .filter(([_, score]) => score > 0) // 0% 에너지는 표시하지 않음
                    .map(([energy, score]) => (
                        <div key={energy} className="energy-item">
                            <div className="energy-header">
                                <h2 className="energy-title">{energy} 에너지</h2>
                                <span className="energy-score">{score}%</span>
                            </div>
                            <div className="energy-content">
                                <img
                                    src={energyMessages[energy]?.imageSrc}
                                    alt={energyMessages[energy]?.imageAlt}
                                    className="energy-image"
                                />
                                <p className="energy-description">{energyMessages[energy]?.description}</p>
                            </div>
                        </div>
                    ))}
            </div>

            <button className="next-page-button" onClick={handleNextPage}>
                다음 페이지로 이동
            </button>
        </div>
    );
};

export default SajuReport26;
