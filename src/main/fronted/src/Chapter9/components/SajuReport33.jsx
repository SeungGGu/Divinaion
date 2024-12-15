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
            type: '활동적인 역마살이 있다면',
            description: '말처럼 변화를 즐기고 자유로움을 추구하는 성격이에요',
            image: `${process.env.PUBLIC_URL}/images/sinsal/horse.png`, // 역마살 이미지
        },
        {
            type: '매력적인 도화살이 있다면',
            description: '공작처럼 매력을 발휘해 사람들의 관심을 끌고 신뢰를 얻어요',
            image: `${process.env.PUBLIC_URL}/images/sinsal/peacock.png`, // 도화살 이미지
        },
        {
            type: '창의적인 화개살이 있다면',
            description: '거북이처럼 깊은 생각과 예술적 재능이 돋보이는 성격이에요',
            image: `${process.env.PUBLIC_URL}/images/turtle.png`, // 화개살 이미지
        },
    ];

    return (
        <div className="report33-container">
            {/* 다음 페이지 버튼 */}
            <button className="nextPage-button" onClick={handleNextPage}>
                다음 ▶
            </button>

            <h1 className="report-title">{name}님의 타고난 매력, 사주로 알 수 있어요</h1>
            <p className="report-subtitle">
                사주로 숨겨진 매력을 확인하고 나만의 스타일을 만들어보세요!
            </p>

            <div className="sinsal-summary-container">
                {sinsalData.map((sinsal, index) => (
                    <div className="sinsal-card" key={index}>
                        <img
                            src={sinsal.image}
                            alt={sinsal.type}
                            className="sinsal-image"
                        />
                        <div className="sinsal-content">
                            <h2 className="sinsal-type">{sinsal.type}</h2>
                            <p className="sinsal-description">{sinsal.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <footer className="report33-footer">
                <p>신살의 숨겨진 매력을 이해하면 삶에 새로운 가능성을 열 수 있습니다.</p>
            </footer>
        </div>
    );
};

export default SajuReport33;
