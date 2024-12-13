import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/SajuReport9.css';
import { useSaju } from "../../context/SajuContext"; // Report9 전용 스타일

const SajuReport9 = () => {
    const navigate = useNavigate();
    const { sajuData } = useSaju();
    const { result, name } = sajuData;

    const handleNextPage = () => {
        navigate('/Report10'); // 다음 페이지로 이동
    };

    return (
        <div className="report9-container">

            {/* 다음 페이지 버튼 */}
            <button className="nextPage-button" onClick={handleNextPage}>
                다음 ▶
            </button>

            {/* 상단 섹션 */}
            <header className="report9-header">
                <h1>{name}님의 타고난 능력, 사주로 알 수 있어요</h1>
                <p>사주를 통해 숨겨진 능력을 확인하고, 새로운 길을 열어 보세요!</p>
            </header>

            {/* 메인 콘텐츠 섹션 */}
            <main className="report9-main">
                {/* 중앙 레이더 차트 */}
                <div className="radar-chart-section">
                    <img
                        src={`${process.env.PUBLIC_URL}/images/radar-chart.png`}
                        alt="성장 능력 레이더 차트"
                        className="radar-chart-image"
                    />
                </div>
                {/* 능력 설명 표 */}
                <div className="ability-table">
                    <table>
                        <tr>
                            <th colSpan={2}>{name}님의 타고난 능력을 찾아보세요</th>
                        </tr>
                        <tbody>
                        <tr>
                            <td>사고력</td>
                            <td>논리적으로 문제를 해결하는 힘입니다.</td>
                        </tr>
                        <tr>
                            <td>창의력</td>
                            <td>독창적인 발상과 문제 해결 능력입니다.</td>
                        </tr>
                        <tr>
                            <td>자신감</td>
                            <td>스스로를 믿고 도전을 즐기는 태도입니다.</td>
                        </tr>
                        <tr>
                            <td>경제력</td>
                            <td>자원을 효율적으로 관리하는 능력입니다.</td>
                        </tr>
                        <tr>
                            <td>성취력</td>
                            <td>목표를 꾸준히 이루는 능력입니다.</td>
                        </tr>
                        </tbody>
                    </table>
                </div>

            </main>

            {/* 하단 섹션 */}
            <footer className="report9-footer">
                <p>사주의 타고난 능력을 활용하면 목표를 설정하고 성공을 이룰 수 있습니다</p>
            </footer>
        </div>
    );
};

export default SajuReport9;