import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSaju } from '../../context/SajuContext';
import '../css/SajuReport34.css';

const SajuReport34 = () => {
    const { sajuData } = useSaju();
    const { name, result } = sajuData || {};
    const navigate = useNavigate();

    if (!result) {
        return <div>데이터가 없습니다. 이전 페이지로 돌아가세요.</div>;
    }

    const birthTime = sajuData.birthTime;
    const birthDate = sajuData.birthDate.split('/');
    const birthYear = birthDate[0];
    const birthMonth = birthDate[1];
    const birthDay = birthDate[2];

    const sinsalMap = {
        역마살: ['寅', '申', '巳', '亥'],
        도화살: ['子', '午', '卯', '酉'],
        화개살: ['辰', '戌', '丑', '未'],
    };

    const elementColors = {
        목: '#89b798', // 목 (green)
        화: '#e57373', // 화 (red)
        토: '#f0d58c', // 토 (yellow)
        금: '#c0c0c0', // 금 (silver)
        수: 'black', // 수 (black)
    };

    const hanjaToElement = {
        '甲': '목', '乙': '목', '丙': '화', '丁': '화',
        '戊': '토', '己': '토', '庚': '금', '辛': '금',
        '壬': '수', '癸': '수', '寅': '목', '卯': '목',
        '巳': '화', '午': '화', '辰': '토', '未': '토',
        '戌': '토', '丑': '토', '申': '금', '酉': '금',
        '亥': '수', '子': '수',
    };

    const groundElements = [
        result.yearGround,
        result.monthGround,
        result.dayGround,
        result.timeGround,
    ];

    const sinsalAssignments = groundElements.map((ground) => {
        for (const [sinsal, values] of Object.entries(sinsalMap)) {
            if (values.includes(ground)) {
                return sinsal;
            }
        }
        return '없음';
    });

    const sinsalCount = {
        역마살: sinsalAssignments.filter((sinsal) => sinsal === '역마살').length,
        도화살: sinsalAssignments.filter((sinsal) => sinsal === '도화살').length,
        화개살: sinsalAssignments.filter((sinsal) => sinsal === '화개살').length,
    };

    const totalGrounds = groundElements.length;

    const sinsalPercentages = {
        역마살: Math.round((sinsalCount.역마살 / totalGrounds) * 100),
        도화살: Math.round((sinsalCount.도화살 / totalGrounds) * 100),
        화개살: Math.round((sinsalCount.화개살 / totalGrounds) * 100),
    };

    const handleNextPage = () => {
        navigate('/Report35', { state: { sinsalPercentages } });
    };

    return (
        <div className="saju-report34-container">
            {/* 다음 페이지 버튼 */}
            <button className="nextPage-button" onClick={handleNextPage}>
                다음 ▶
            </button>

            <h1 className="saju-title">
                25. {name}님의 타고난 매력, 신살로 분석합니다
            </h1>
            <p className="saju-subtitle">
                타고난 신살로 삶의 방향을 찾아보세요
            </p>

            <div className="saju-content">
                {/* 신살 분석표 */}
                <div className="sinsal-table-container">
                    <table className="sinsal-analysis-table">
                        <thead>
                        <td colSpan={4}>{name}님의 신살에너지 구성</td>
                        <tr>
                            <th>{birthTime}</th>
                            <th>{birthDay}일</th>
                            <th>{birthMonth}월</th>
                            <th>{birthYear}년</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            {[result.timeSky, result.daySky, result.monthSky, result.yearSky].map((sky, index) => (
                                <td
                                    key={index}
                                    style={{
                                        backgroundColor: elementColors[hanjaToElement[sky]] || 'transparent',
                                        color: hanjaToElement[sky] === '수' ? 'white' : 'black',
                                    }}
                                >
                                    {sky}
                                </td>
                            ))}
                        </tr>
                        <tr>
                            {[result.timeGround, result.dayGround, result.monthGround, result.yearGround].map(
                                (ground, index) => (
                                    <td
                                        key={index}
                                        style={{
                                            backgroundColor: elementColors[hanjaToElement[ground]] || 'transparent',
                                            color: hanjaToElement[ground] === '수' ? 'white' : 'black',
                                        }}
                                    >
                                        {ground}
                                    </td>
                                )
                            )}
                        </tr>
                        <tr>
                            {sinsalAssignments.map((sinsal, index) => (
                                <td key={index}>{sinsal}</td>
                            ))}
                        </tr>
                        </tbody>
                    </table>
                </div>

                {/* 신살 비율표 */}
                <div className="sinsal-summary-container">
                    <table className="sinsal-percentage-table">
                        <thead>
                        <tr>
                            <th colSpan="3">{name}님의 타고난 신살</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>역마살</td>
                            <td>도화살</td>
                            <td>화개살</td>
                        </tr>
                        <tr>
                            {['horse', 'peacock', 'turtle'].map((sinsal, index) => (
                                <td key={index}>
                                    <img
                                        src={`${process.env.PUBLIC_URL}/images/sinsal/${sinsal}.png`}
                                        alt={sinsal}
                                        className="sinsal-percentage-image"
                                    />
                                </td>
                            ))}
                        </tr>
                        <tr>
                            {['역마살', '도화살', '화개살'].map((sinsal, index) => (
                                <td
                                    key={index}
                                    style={{
                                        backgroundColor: sinsalCount[sinsal] === 0 ? '#f0d58c' : '#444',
                                        color: sinsalCount[sinsal] === 0 ? '#000' : '#fff',
                                    }}
                                >
                                    {sinsalCount[sinsal]}개 있어요
                                </td>
                            ))}
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <footer className="report34-footer">
                <p>신살 에너지를 활용하면 특별한 기회를 발견하고 새로운 변화를 만들 수 있습니다.</p>
            </footer>
        </div>
    );
};

export default SajuReport34;
