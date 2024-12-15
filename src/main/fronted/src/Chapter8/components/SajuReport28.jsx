import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/SajuReport28.css';
import { useSaju } from '../../context/SajuContext';

const SajuReport28 = () => {
    const { sajuData } = useSaju();
    const { name } = sajuData || {};
    const navigate = useNavigate();

    const handleNextPage = () => {
        navigate('/Report29'); // 다음 페이지로 이동
    };

    return (
        <div className="report28-container">
            {/* 다음 페이지 버튼 */}
            <button className="nextPage-button" onClick={handleNextPage}>
                다음 ▶
            </button>

            <h1 className="report28-title">{name}님의 성격과 건강, 음양오행으로 알 수 있어요</h1>
            <p className="report28-subtitle">
                음양오행의 순환을 통해 당신의 강점과 건강을 확인하세요!
            </p>

            <div className="report28-content">
                {/* 이미지 */}
                <div className="report28-image-container">
                    <img
                        src={`${process.env.PUBLIC_URL}/images/mainPicture/five_elements.png`}
                        alt="음양오행 이미지"
                        className="report28-main-image"
                    />
                </div>

                {/* 박스 글 추가 */}
                <div className="report28-text-box">
                    <p className="report28-text-title">음양 오행의 에너지가</p>
                    <p className="report28-text-subtitle">당신의 강점을 찾아드립니다</p>
                    <p className="report28-text-description">
                        {name}님의 오행을 통해 <br />
                        숨겨진 가능성을 발견해보세요
                    </p>
                </div>
            </div>

            {/* 하단 메시지 */}
            <div className="footer-section">
                <p className="footer-message">
                    음향오행 에너지를 활용하면 강점과 건강을 함께 증진시킬 수 있습니다
                </p>
            </div>
        </div>
    );
};

export default SajuReport28;
