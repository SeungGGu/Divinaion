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
                    5대 복의 의미를 확인하고 삶의 균형을 찾아보세요!
                </p>
            </div>

            {/* 메인 콘텐츠 */}
            <div className="content-section">
                {/* 이미지 섹션 */}
                <div className="image-container">
                    <img
                        src={`${process.env.PUBLIC_URL}/images/mainPicture/fivebok.png`}
                        alt="5대 복 이미지"
                        className="main-image"
                    />
                </div>

                {/* 텍스트 섹션 */}
                <div className="text-container">
                    <h2>
                        5대 복(福)은 {name}님의 삶을 빛내는 숨은 열쇠!<br/>
                        성공과 행복의 문을 활짝 여는 비밀이에요!<br/>
                        {name}님은 어떤 복을 많이 타고났을까요?<br/>
                        삶을 빛낼 특별한 복의 비밀을 찾아보세요!<br/>
                    </h2>
                </div>
            </div>

            <div className="description-container">
                <h2 className="description-title">{name}님의 타고난 5대 복을 찾아보세요</h2>
                <ul className="description-list">
                    <li><strong>인 복</strong>: 주변 사람들의 사랑과 도움을 받아 인생에서 따뜻한 관계를 맺는 복이에요</li>
                    <li><strong>식 복</strong>: 타고난 재능으로 경제적 안정과 현실적 문제를 해결하는 특별한 복이에요</li>
                    <li><strong>재물 복</strong>: 경제적으로 여유롭고 안정된 삶을 누리며 기회를 만들어가는 복이에요</li>
                    <li><strong>직장 복</strong>: 직장에서의 성공과 안정된 커리어를 통해 인정을 받는 든든한 복이에요</li>
                    <li><strong>문서 복</strong>: 계약, 문서 처리, 자격증, 학위 등 공인된 증서를 통해 인정받는 복이에요</li>
                </ul>
            </div>

            {/*/!* 하단 메시지 *!/*/}
            {/*<div className="footer-section">*/}
            {/*    <p className="footer-message">*/}
            {/*        5대 복을 강점으로 활용하면 풍요로운 삶을 만들 수 있습니다.*/}
            {/*    </p>*/}
            {/*</div>*/}
        </div>
    );
};

export default SajuReport17;
