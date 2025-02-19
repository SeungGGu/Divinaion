import React from 'react';
import {useSaju} from '../../context/SajuContext'; // SajuContext 가져오기
import '../css/SajuReport13.css';
import {useNavigate} from "react-router-dom"; // 스타일 파일 가져오기

const SajuReport13 = () => {
    const {sajuData} = useSaju(); // SajuContext에서 데이터 가져오기
    const {name} = sajuData || {}; // name 데이터 추출 (null 방지)
    const navigate = useNavigate();

    const handleNextPage = () => {
        navigate('/Report14');
    };

    return (
        <div className="report13-container">
            {/* 다음 페이지 버튼 */}
            <button className="nextPage-button" onClick={handleNextPage}>
                다음 ▶
            </button>
            {/* 상단 제목 */}
            <div className="header-section">
                <h1 className="title">타고난 마음 성향</h1>
            </div>

            {/* 메인 이미지 섹션 */}
            <div className="content13-section">
                <div className="image-section2">
                    <img
                        src={`${process.env.PUBLIC_URL}/images/mainPicture/mind.png`} // 더미 이미지 경로
                        alt="마음 성향 이미지"
                        className="main-image2"
                    />
                </div>
                <div className="description13-container">
                    <h1>
                        {name}님의 마음성향에서<br/>
                        발견하는 강점과 가능성
                    </h1>
                    <p>
                        사주로 마음 성향을 분석하고<br/>
                        더 나은 성장을 시작하세요
                    </p>
                </div>
            </div>
            {/* 하단 메시지 */}
            <div className="footer-section">
                <p className="footer-message">
                    마음 성향을 이해하면 성장의 기회를 잡을 수 있습니다.
                </p>
            </div>
        </div>

    );
};

export default SajuReport13;
