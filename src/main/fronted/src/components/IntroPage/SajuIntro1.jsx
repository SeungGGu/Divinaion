import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/SajuIntro1.css';

const SajuIntro1 = () => {
    const navigate = useNavigate();

    function nextPageOnClick() {
        navigate('/Intro2'); // 다음 페이지의 경로로 이동
    }

    return (
        <div className="saju-intro1-container">
            {/* 상단 오행 아이콘 */}
            <div className="saju-intro1-element-icons">
                <div className="saju-intro1-icon saju-intro1-wood">木</div>
                <div className="saju-intro1-icon saju-intro1-earth">土</div>
                <div className="saju-intro1-icon saju-intro1-metal">金</div>
                <div className="saju-intro1-icon saju-intro1-water">水</div>
                <div className="saju-intro1-icon saju-intro1-fire">火</div>
            </div>

            {/* 보고서 제목 */}
            <div className="saju-intro1-title">
                <h1>내 사주</h1>
                <h2>그것이 알고 싶다</h2>
            </div>

            {/* 안내 텍스트 */}
            <div className="saju-intro1-text">
                <p>34가지 분석을 통해 당신의 인생 여정을 시작하세요</p>
                <p className="saju-intro1-highlight">꼭 봐야 할 내 사주 분석 보고서</p>
            </div>

            {/* 페이지 넘김 버튼 */}
            <button className="saju-intro1-next-button" onClick={nextPageOnClick}>다음 페이지로</button>
        </div>
    );
};

export default SajuIntro1;
