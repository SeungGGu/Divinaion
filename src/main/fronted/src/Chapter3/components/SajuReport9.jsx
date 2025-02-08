import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/SajuReport9.css';
import { useSaju } from "../../context/SajuContext"; // Report9 전용 스타일

const SajuReport9 = () => {
    const navigate = useNavigate();
    const { sajuData } = useSaju();
    const { name } = sajuData;

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
                        src={`${process.env.PUBLIC_URL}/images/mainPicture/radar-chart.png`}
                        alt="성장 능력 레이더 차트"
                        className="radar-chart-image"
                    />
                </div>

                {/* 능력 설명 표 */}
                <div className="ability-table">
                    <table>
                        <thead>
                        <tr>
                            <th colSpan={2}>{name}님의 타고난 능력을 찾아보세요</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>자신감</td>
                            <td>어려움 속에서도 쉽게 포기하지 않고 끝까지 밀어붙이는 힘이 있나요?</td>
                        </tr>
                        <tr>
                            <td>잠재력</td>
                            <td>평범한 일상 속에서도 나만의 잠재된 능력을 발견하고 발휘하고 있나요?</td>
                        </tr>
                        <tr>
                            <td>경제력</td>
                            <td>돈을 현명하게 관리하고 새로운 기회를 잡아 수익을 만드는 능력이 있나요?</td>
                        </tr>
                        <tr>
                            <td>조직력</td>
                            <td>조직에서 신뢰를 얻고 협력하며 목표를 달성해 성과를 내는 힘이 있나요?</td>
                        </tr>
                        <tr>
                            <td>학습력</td>
                            <td>정보를 빠르게 이해하고 문제 해결 능력을 실생활에 활용하고 있나요?</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </main>
            {/*/!* 하단 섹션 *!/*/}
            {/*<footer className="report9-footer">*/}
            {/*    <p>사주의 타고난 능력을 활용하면 목표를 설정하고 성공을 이룰 수 있습니다</p>*/}
            {/*</footer>*/}
        </div>
    );
};

export default SajuReport9;