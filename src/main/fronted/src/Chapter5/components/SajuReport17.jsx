import React from 'react';
import { useSaju } from '../../context/SajuContext'; // SajuContext 가져오기
import '../css/SajuReport17.css'; // 스타일 파일
import { useNavigate } from 'react-router-dom';

const SajuReport17 = () => {
    const { sajuData } = useSaju(); // SajuContext에서 데이터 가져오기
    const { name } = sajuData || {}; // name 데이터 추출 (null 방지)
    const navigate = useNavigate();

    const handleNextPage = () => {
        navigate('/Report18');
    };

    return (
        <div className="report17-container">
            {/* 다음 페이지 버튼 */}
            <button className="nextPage-button" onClick={handleNextPage}>
                다음 ▶
            </button>
            {/* 상단 제목 */}
            <div className="header-section">
                <h1 className="title">{name}님의 타고난 복, 사주로 알 수 있어요</h1>
                <p className="subtitle">
                    {name}님의 5대 복의 의미를 확인하고 삶의 균형을 찾아보세요!
                </p>
            </div>

            {/* 메인 콘텐츠 */}
            <div className="content-section">
                <div className="image-container">
                    <img
                        src={`${process.env.PUBLIC_URL}/images/mainPicture/fivebok.png`} // 더미 이미지 경로
                        alt="5대 복 이미지"
                        className="main-image"
                    />
                </div>
                {/* 설명 섹션 */}
                <div className="description-container">
                    <h2 className="description-title">{name}님의 타고난 5대 복을 찾아보세요</h2>
                    <ul className="description-list">
                        <li><strong>인 복</strong>: 좋은 인간관계와 도움을 받는 복이에요</li>
                        <li><strong>재능 복</strong>: 타고난 재능과 능력을 뜻해요</li>
                        <li><strong>재물 복</strong>: 경제적 안정과 기회를 상징해요</li>
                        <li><strong>직장 복</strong>: 직업에서 성공과 안정성을 보여줘요</li>
                        <li><strong>명예 복</strong>: 사회적 지위와 명성을 의미해요</li>
                    </ul>
                </div>
            </div>

            {/* 하단 메시지 */}
            <div className="footer-section">
                <p className="footer-message">
                    5대 복을 강점으로 활용하면 풍요로운 삶을 만들 수 있습니다.
                </p>
            </div>
        </div>
    );
};

export default SajuReport17;
