import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/SajuReport24.css'; // 스타일 파일 경로
import { useSaju } from '../../context/SajuContext';

const SajuReport24 = () => {
    const navigate = useNavigate();
    const { sajuData } = useSaju();
    const { name } = sajuData || {};

    const handleNextPage = () => {
        navigate('/Report25');
    };

    return (
        <div className="report24-container">
            {/* 다음 페이지 버튼 */}
            <button className="nextPage-button" onClick={handleNextPage}>
                다음 ▶
            </button>

            <h1 className="report-title">{name}님의 숨겨진 행동 성향, 사주로 발견할 수 있어요</h1>
            <p className="report24-subtitle">
                사주로 당신의 강점과 잠재력을 확인하고, 더 나은 방향을 찾아보세요!
            </p>

            {/* 메인 섹션 */}
            <div className="main24-section">
                {/* 이미지 섹션 */}
                <div className="image24-section">
                    <img
                        src={`${process.env.PUBLIC_URL}/images/mainPicture/strength.png`} // 에너지 분석 이미지 경로
                        alt="사주 에너지 분석"
                        className="main24-image"
                    />
                </div>
                {/* 글 박스 섹션 */}
                <div className="text24-box">
                    <p className="text24-content">
                        10가지 사주 에너지 분석으로 <br/>
                        당신의 성향과 행동 패턴,<br/>
                        강점과 약점,<br/>
                        대인관계의 특징,<br/>
                        그리고 성장 방향을<br/>
                        안내해드립니다
                    </p>
                </div>
            </div>

            <p className="footer-message">
                마음 성향을 이해하면 성장의 기회를 잡을 수 있습니다
            </p>
        </div>
    );
};

export default SajuReport24;