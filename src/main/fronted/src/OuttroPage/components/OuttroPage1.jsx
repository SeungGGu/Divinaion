import React from "react";
import { useNavigate } from "react-router-dom";
import { useSaju } from "../../context/SajuContext";
import "../css/OuttroPage.css"; // OuttroPage 전용 CSS 적용

const OuttroPage = () => {
    const navigate = useNavigate();
    const { sajuData } = useSaju();
    const { name } = sajuData;

    const handleNextPage = () => {
        navigate("/"); // 메인 페이지로 이동
    };

    return (
        <div className="outtro-wrapper">
            {/* 타이틀 */}
            <h1 className="outtro-title">지금부터 더 나은 미래를 준비하세요</h1>

            <div className="outtro-content">
                {/* 이미지 섹션 */}
                <div className="image-section">
                    <img
                        src={`${process.env.PUBLIC_URL}/images/rocket.png`}
                        alt="로켓"
                        className="outtro-image"
                    />
                    <img
                        src={`${process.env.PUBLIC_URL}/images/mainPicture/five_elements.png`}
                        alt="오행"
                        className="outtro-image"
                    />
                </div>

                {/* 글 박스 */}
                <div className="text-box">
                    <p>지금의 선택이 미래를 바꿉니다.</p>
                    <p>더 나은 내일을 위한 첫걸음을 시작하세요!</p>
                    <p>사주의 통찰로 자신만의 특별한 길을 열어보세요.</p>
                    <p>
                        <strong>{name}</strong>님과 함께한 이 여정에 감사드리며,
                        <br />
                        앞으로도 성공과 행복이 가득하시길 바랍니다.
                    </p>
                </div>
            </div>

            {/* 메인 페이지로 돌아가기 버튼 */}
            <button className="nextPage-button" onClick={handleNextPage}>
                메인 페이지로 돌아가기
            </button>
        </div>
    );
};

export default OuttroPage;
