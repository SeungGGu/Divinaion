import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/SajuReport20.css'; // 스타일 파일 가져오기
import { useSaju } from '../../context/SajuContext'; // SajuContext 가져오기

const SajuReport20 = () => {
    const navigate = useNavigate();
    const { sajuData } = useSaju();
    const { name, gender } = sajuData || {}; // SajuContext에서 데이터 가져오기

    const handleNextPage = () => {
        navigate('/Report21'); // 다음 페이지로 이동
    };

    // gender에 따른 이미지 경로 설정
    const imageSrc = gender === 'FEMALE'
        ? `${process.env.PUBLIC_URL}/images/mainPicture/female.png`
        : `${process.env.PUBLIC_URL}/images/mainPicture/male.png`;

    return (
        <div className="report20-container">
            {/* 다음 페이지 버튼 */}
            <button className="nextPage-button" onClick={handleNextPage}>
                다음 ▶
            </button>
            {/* 상단 제목 */}
            <div className="header-section">
                <h1 className="title">{name}님의 인연과 관련된 5가지 덕(德)</h1>
                <p className="subtitle">
                    5덕의 의미를 이해하고 인연의 균형을 찾아보세요
                </p>
            </div>

            {/* 메인 섹션 */}
            <div className="main-section">
                {/* gender에 따른 이미지 */}
                <div className="image-section">
                    <img
                        src={imageSrc} // gender에 따라 이미지 경로 설정
                        alt="배우자 운 이미지"
                        className="main-image"
                    />
                </div>

                {/* 글 박스 */}
                <div className="text-box">
                    <p className="text-content">
                        <strong>5대 덕(德)</strong>은 인연을 이어주는 마법 같은 힘!<br/>
                        특별한 만남과 관계의 가능성을 열어줘요<br/>
                        {name}님은 어떤 인연을 많이 가졌을까요?<br/>
                        소중한 인연의 연결고리를 알아보세요!
                    </p>
                </div>
            </div>

            {/*5대복*/}
            {/* 5대 덕 섹션 */}
            <div className="blessing-section">
                <h2 className="section-title">{name}님의 타고난 5대 덕</h2>
                <ul className="blessing-list">
                    {gender === "FEMALE"
                        ? [
                            { title: "인 덕", description: "많은 사람들과 좋은 관계를 맺고, 주변에서 자연스레 도움을 받는 덕이에요" },
                            { title: "시댁 덕", description: "시댁의 지지와 응원으로 삶의 안정과 행복을 더하는 소중한 덕이에요" },
                            { title: "남자 덕", description: "남성들의 신뢰와 협력을 얻어 인생에서 많은 도움을 받는 덕이에요" },
                            { title: "자식 덕", description: "자녀가 성공하거나 효도를 하며, 삶에 큰 자부심을 느끼게 하는 덕이에요" },
                            { title: "부모 덕", description: "부모님의 사랑과 지원 덕분에 안정된 환경에서 성장할 수 있는 덕이에요" },
                        ]
                        : [
                            { title: "인 덕", description: "많은 사람들과 좋은 관계를 맺고, 주변에서 자연스레 도움을 받는 덕이에요" },
                            { title: "처가 덕", description: "처가의 지원과 배려로 삶이 더 안정되고 풍요로워지는 특별한 덕이에요" },
                            { title: "여자 덕", description: "여성들에게 신뢰와 도움을 받아 다양한 기회를 얻는 소중한 덕이에요" },
                            { title: "자식 덕", description: "자녀가 성공하거나 효도를 하며, 삶에 큰 자부심을 느끼게 하는 덕이에요" },
                            { title: "부모 덕", description: "부모님의 사랑과 지원 덕분에 안정된 환경에서 성장할 수 있는 덕이에요" },
                        ]
                            .map((blessing, index) => (
                                <li key={index} className="blessing-item">
                                    <strong className="blessing-title">{blessing.title}</strong>: {blessing.description}
                                </li>
                            ))}
                </ul>
            </div>

            {/*/!* 하단 메시지 및 버튼 *!/*/}
            {/*<div className="footer-section">*/}
            {/*    <p className="footer-message">*/}
            {/*        5대 덕을 활용하면 인연의 가치를 발견하고 행복한 삶을 만들 수 있습니다*/}
            {/*    </p>*/}
            {/*</div>*/}
        </div>
    );
};

export default SajuReport20;
