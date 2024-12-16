import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../../Chapter1/css/SajuReport2.css'; // 기존 스타일 재사용

const fortuneDetails = {
    비견: {
        title: [
            { description: "작은 도전이 자신감을 키우는 원동력이 됩니다." },
            { description: "새로운 인연에서 뜻밖의 기회를 발견할 수 있어요." },
            { description: "혼자 해야 할 일이 많아도 성장의 발판이 됩니다." },
            { description: "현명한 선택이 중요한 기회를 열어줍니다" },
        ],
        TitleDescription: "늑대처럼",
        subDescription: [
            { description: "강한 자신감과 협력을 통해 목표와 성과를 동시에 이룰 수 있는 시기입니다" },
        ],
        imageAlt: "늑대",
        imageSrc: `${process.env.PUBLIC_URL}/images/animals/wolf.png`,
    },
    겁재: {
        title: [
            { description: "결단력 있는 선택이 새로운 기회를 만들어냅니다." },
            { description: "예상치 못한 변화에도 유연하게 대처해보세요." },
            { description: "경쟁보다 협력을 통해 더 큰 성과를 이룰 수 있어요." },
            { description: "꾸준한 노력으로 목표에 더 가까워질 시기입니다." },
        ],
        TitleDescription: "호랑이처럼",
        subDescription: [
            { description: "용기와 결단력을 발휘해 어려운 상황을 극복하고, 혼자서도 큰 변화를 이끌어낼 수 있는 시기입니다." },
        ],
        imageAlt: "호랑이",
        imageSrc: `${process.env.PUBLIC_URL}/images/animals/tiger.png`,
    },
    식신: {
        title: [
            { description: "꾸준한 노력으로 안정감과 성과를 만들어갑니다." },
            { description: "창의적 도전으로 새로운 가능성을 발견해요." },
            { description: "새로운 인연이 좋은 기회를 가져올 수 있어요." },
            { description: "배우고 익히는 과정에서 자신감을 얻는 시기입니다." },
        ],
        TitleDescription: "소처럼",
        subDescription: [
            { description: "꾸준함과 인내를 통해 주변에 신뢰를 쌓고, 자신이 가진 역량을 안정적으로 펼칠 수 있는 시기입니다." },
        ],
        imageAlt: "소",
        imageSrc: `${process.env.PUBLIC_URL}/images/animals/cow.png`,
    },
    상관: {
        title: [
            { description: "일상에 변화를 만들어갈 좋은 시기입니다." },
            { description: "말투를 조심하면 관계에서 오해를 줄일 수 있어요." },
            { description: "중요한 결정을 신중히 내리는 것이 필요합니다." },
            { description: "창의적 아이디어로 목표를 이룰 기회가 많아져요." },
        ],
        TitleDescription: "원숭이처럼",
        subDescription: [
            { description: "창의적이고 재치 있는 사고로 새로운 기회를 만들며, 어려운 문제를 해결하며 자신의 능력을 드러낼 수 있는 시기입니다." },
        ],
        imageAlt: "원숭이",
        imageSrc: `${process.env.PUBLIC_URL}/images/animals/monkey.png`,
    },
    편재: {
        title: [
            { description: "뜻밖의 수익 기회를 잘 살펴야 할 시기입니다." },
            { description: "투자 결정은 신중해야 좋은 결과로 이어집니다." },
            { description: "중요한 선택이 많아지니 책임감이 필요합니다." },
            { description: "소비 욕구를 조절하며 재정을 관리하세요." },
        ],
        TitleDescription: "독수리처럼",
        subDescription: [
            { description: "높은 곳에서 전체를 조망하며 효율적으로 목표를 달성하고, 중요한 기회를 잡아낼 수 있는 시기입니다." },
        ],
        imageAlt: "독수리",
        imageSrc: `${process.env.PUBLIC_URL}/images/animals/eagle.png`,
    },
    정재: {
        title: [
            { description: "소비를 줄이고 저축으로 재정을 안정시킬 때입니다." },
            { description: "혼자만의 시간을 가지며 재충전을 해보세요." },
            { description: "주변을 정리해 생활의 안정감을 높여보세요." },
            { description: "가까운 사람들과 관계가 더 깊어질 시기입니다." },
        ],
        TitleDescription: "개미처럼",
        subDescription: [
            { description: "성실하고 꼼꼼한 계획을 통해 안정적으로 성과를 쌓아가며, 삶의 기반을 튼튼히 다질 수 있는 시기입니다." },
        ],
        imageAlt: "개미",
        imageSrc: `${process.env.PUBLIC_URL}/images/animals/ant.png`,
    },
    편관: {
        title: [
            { description: "건강을 챙기며 몸과 마음의 균형을 유지하세요." },
            { description: "예상치 못한 일이 생길 수 있어 침착함이 필요합니다." },
            { description: "협력과 양보가 중요한 순간이 많아질 거예요." },
            { description: "리더십을 발휘해 중요한 역할을 맡을 시기입니다." },
        ],
        TitleDescription: "사자처럼",
        subDescription: [
            { description: "강한 리더십과 책임감을 발휘하여 주변을 이끌고, 중요한 역할을 맡아 성과를 만들어낼 수 있는 시기입니다." },
        ],
        imageAlt: "사자",
        imageSrc: `${process.env.PUBLIC_URL}/images/animals/lion.png`,
    },
    정관: {
        title: [
            { description: "목표를 이루기 좋은 시기로 성실함이 필요합니다." },
            { description: "새로운 기회를 자주 만나며 성장이 기대됩니다." },
            { description: "안정된 직장 생활이 시작될 가능성이 높아요." },
            { description: "가족과 함께 큰 안정감을 느낄 수 있는 시기입니다." },
        ],
        TitleDescription: "말처럼",
        subDescription: [
            { description: "규칙적이고 성실한 자세로 꾸준히 목표를 향해 달리며, 주변 사람들에게 신뢰를 얻고 성공을 이룰 수 있는 시기입니다." },
        ],
        imageAlt: "말",
        imageSrc: `${process.env.PUBLIC_URL}/images/animals/horse.png`,
    },
    편인: {
        title: [
            { description: "기존 일에서 흥미를 잃을 수 있어 동기가 필요해요." },
            { description: "의심이 생길 땐 신중하고 이성적으로 판단하세요." },
            { description: "일상 속 작은 여유로 내면을 돌보는 시기입니다." },
            { description: "혼자만의 시간을 통해 자신을 깊이 이해해요." },
        ],
        TitleDescription: "올빼미처럼",
        subDescription: [
            { description: "깊은 통찰력과 지혜를 발휘하여 새로운 지식을 탐구하고, 중요한 결정을 내릴 수 있는 시기입니다." },
        ],
        imageAlt: "올빼미",
        imageSrc: `${process.env.PUBLIC_URL}/images/animals/owl.png`,
    },
    정인: {
        title: [
            { description: "노력의 결실을 맺으며 성과를 기대할 시기입니다." },
            { description: "합격 운이 좋아 긍정적인 결과를 얻을 수 있어요." },
            { description: "자격증을 따거나 실력을 인정받을 기회가 많아요." },
            { description: "멘토와의 교류로 새로운 배움을 얻을 수 있습니다." },
        ],
        TitleDescription: "코끼리처럼",
        subDescription: [
            { description: "온화하고 안정적인 마음으로 주변을 돕고, 깊은 신뢰를 쌓아 장기적인 성과를 이룰 수 있는 시기입니다." },
        ],
        imageAlt: "코끼리",
        imageSrc: `${process.env.PUBLIC_URL}/images/animals/elephant.png`,
    },
};

const SajuReport42 = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { currentFortune, nextFortune, name, currentYear, nextYear } = location.state || {};

    const currentAnalysis = fortuneDetails[currentFortune] || {};

    const handleNextPage = () => {
        navigate('/Report43', {
            state: {
                currentFortune,
                nextFortune,
                currentYear,
                nextYear,
                name
            }
        });
    };

    return (
        <div className="saju-report2-wrapper">
            {/* 다음 페이지 버튼 */}
            <button className="nextPage-button" onClick={handleNextPage}>
                다음 ▶
            </button>

            {/* 타이틀 */}
            <h1 className="report-title">
                31. {currentYear}년, {name}님은 운세 변화를 알려드립니다
            </h1>
            <p className="report-subtitle">
                변화와 선택으로 새로운 기회를 만들어갈 수 있는 시기입니다
            </p>

            {/* 분석 섹션 */}
            <div className="report-content">
                {/* 왼쪽: 주요 변화 */}
                <div className="analysis-container">
                    <h2 className="analysis-title">{`${currentYear}년 주요 변화와 조언`}</h2>
                    <ul className="strengths-list">
                        {currentAnalysis.title?.map((item, index) => (
                            <li key={index}>
                                <strong>{index + 1}. {item.description}</strong>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* 오른쪽: 이미지와 요약 */}
                <div className="analysis-image-container">
                    <img
                        src={currentAnalysis.imageSrc}
                        alt={currentAnalysis.imageAlt}
                        className="analysis-image"
                    />
                    <p>{currentFortune}운 은{currentAnalysis.TitleDescription}</p>
                    <ul className="strengths-list">
                        {currentAnalysis.subDescription?.map((item, index) => (
                            <li key={index}>
                                <strong>👉 {item.description}</strong>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* 하단 메시지 */}
            <p className="footer-text">
                {currentYear}년의 기회를 잡으면 더 나은 미래를 만들어갈 수 있습니다.
            </p>
        </div>
    );
};

export default SajuReport42;
