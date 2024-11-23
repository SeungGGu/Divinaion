import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSaju } from '../../context/SajuContext';
import '../css/SajuReport33.css';

const SajuReport33 = () => {
    const navigate = useNavigate();
    const { sajuData } = useSaju();
    const { name } = sajuData || {};

    const handleNextPage = () => {
        navigate('/Report34');
    };

    // 신살 데이터
    const sinsalData = [
        {
            type: '활동적인 역마살',
            description: '자유롭게 어디라도 떠나고 싶어하는 성향이에요!',
            image: `${process.env.PUBLIC_URL}/images/horse.png`, // 역마살 이미지
        },
        {
            type: '매력적인 도화살',
            description: '사람들을 매료시키는 자연스러운 매력의 소유자예요!',
            image: `${process.env.PUBLIC_URL}/images/peacock.png`, // 도화살 이미지
        },
        {
            type: '철학적인 화개살',
            description: '깊은 사색과 예술을 사랑하는 철학자 같은 성향이에요!',
            image: `${process.env.PUBLIC_URL}/images/dragon.png`, // 화개살 이미지
        },
    ];

    return (
        <div className="report33-container">
            <h1 className="report-title">{name}님의 신살로 알아보는 성격과 장점</h1>
            <p className="report-subtitle">
                {name}님의 신살 특성을 이해하고 성장의 기회를 발견해 보세요
            </p>

            <div className="sinsal-summary-container">
                {sinsalData.map((sinsal, index) => (
                    <div className="sinsal-card" key={index}>
                        <h2 className="sinsal-type">{sinsal.type}</h2>
                        <p className="sinsal-description">{sinsal.description}</p>
                        <img
                            src={sinsal.image}
                            alt={sinsal.type}
                            className="sinsal-image"
                        />
                    </div>
                ))}
            </div>

            <footer className="report33-footer">
                <p>{name}님의 신살 의미를 이해하고, 더 밝은 미래를 만들어 보세요!</p>
            </footer>

            <button className="next-page-button" onClick={handleNextPage}>
                다음 페이지로 이동
            </button>
        </div>
    );
};

export default SajuReport33;
