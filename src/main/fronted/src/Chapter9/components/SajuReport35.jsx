import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../css/SajuReport35.css';
import { useSaju } from "../../context/SajuContext";

const SajuReport35 = () => {
    const { sajuData } = useSaju();
    const { name } = sajuData || {};
    const location = useLocation();
    const { state } = location || {};
    const { sinsalPercentages } = state || {};
    const navigate = useNavigate();

    if (!sinsalPercentages) {
        return <div>데이터가 없습니다. 이전 페이지로 돌아가세요.</div>;
    }

    // 신살별 이미지와 설명 데이터
    const sinsalData = {
        역마살: {
            image: `${process.env.PUBLIC_URL}/images/sinsal/horse.png`,
            description: "여기저기 이동이 잦아 바쁘게 돌아다니며 새로운 환경을 즐깁니다.\n변화와 여행에 강한 열정을 보이며 새로운 경험을 끊임없이 추구합니다.\n여행 가이드, 무역업, 영업직처럼 이동이 많은 직업이 잘 어울립니다",
            noResult: "새로운 환경에 적응하기 어려워 변화보다는 익숙한 것에 머물기 쉽습니다.\n이동이나 여행의 기회가 줄어들며 활동 반경이 좁아질 수 있습니다.\n한곳에 머무르며 안정적이지만 성장의 기회를 놓칠 가능성이 있습니다",
        },
        도화살: {
            image: `${process.env.PUBLIC_URL}/images/sinsal/peacock.png`,
            description: "대인관계에서 매력을 발산해 사람들에게 쉽게 관심과 호감을 끕니다.\n이성과의 만남이 잦아지고 로맨틱한 상황이 자주 생길 가능성이 큽니다.\n연예인, 디자이너, 상담사처럼 대중과 소통하는 직업이 잘 어울립니다",
            noResult: "대인관계에서 매력을 발휘하기 어려워 주변 관심을 받기 힘듭니다.\n이성과의 만남이나 기회가 줄어들어 평범한 관계가 이어질 수 있습니다.\n화려함보다는 차분하고 실속 있는 인간관계를 추구하게 됩니다",
        },
        화개살: {
            image: `${process.env.PUBLIC_URL}/images/sinsal/turtle.png`,
            description: "내면 탐구와 사색을 즐기며 깊이 있는 통찰력과 사고를 보여줍니다.\n예술적 감각과 창의력이 뛰어나 독특한 아이디어를 꾸준히 냅니다.\n작가, 예술가, 철학자처럼 사색과 창의성이 필요한 직업이 잘 어울립니다.",
            noResult: "깊은 내면 탐구가 부족해 감정 표현이 단순하고 직설적일 때가 많습니다.\n예술적 감각이나 창의력이 부족해 다소 현실적인 선택을 선호할 수 있습니다.\n혼자 있는 시간보다는 외부 활동에 더 집중하며 내적 여유가 줄어듭니다",
        },
    };

    // 비율을 개수로 변환하는 함수
    const calculateCount = (percentage) => Math.round(percentage / 25);

    // 개수에 따른 메시지 반환
    const getMessage = (count) => {
        if (count === 0) return '없어요';   // 신살이 없을 경우
        return '있어요';
    };

    const handleNextPage = () => {
        navigate('/Report36');
    };

    return (
        <div className="report35-container">
            {/* 다음 페이지 버튼 */}
            <button className="nextPage-button" onClick={handleNextPage}>
                다음 ▶
            </button>

            <h1 className="report-title">26. {name}님의 매력과 진로, 신살로 알려드립니다</h1>
            <p className="report-subtitle">
                신살 에너지를 활용해 진로의 방향과 가능성을 찾아보세요!
            </p>

            <table className="sinsal-table">
                <thead>
                <tr>
                    <th colSpan="3">신살을 활용해 매력과 진로를 연결하세요</th>
                </tr>
                </thead>
                <tbody>
                {Object.entries(sinsalData).map(([sinsal, data]) => {
                    const count = calculateCount(sinsalPercentages[sinsal] || 0);

                    return (
                        <tr key={sinsal}>
                            <td>
                                {count > 0 ? (
                                    <img
                                        src={data.image}
                                        alt={sinsal}
                                        className="sinsal-percentage-image"
                                    />
                                ) : (
                                    <div className="no-image-placeholder">🚫</div> // 신살이 없을 경우 아이콘 표시
                                )}
                            </td>
                            <td>
                                <div>
                                    {sinsal} : {count}개
                                </div>
                                <div className="highlight-message">{getMessage(count)}</div>
                            </td>
                            <td>
                                {count > 0 ? data.description : data.noResult}  {/* 신살이 없을 때 다른 메시지 표시 */}
                            </td>
                        </tr>
                    );
                })}
                </tbody>
            </table>

            <footer className="report35-footer">
                <p>신살의 에너지를 활용하면 강점을 키우고 약점을 보완할 수 있습니다.</p>
            </footer>
        </div>
    );
};

export default SajuReport35;
