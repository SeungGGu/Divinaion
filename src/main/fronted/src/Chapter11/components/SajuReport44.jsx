import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../../Chapter1/css/SajuReport2.css'; // 기존 스타일 재사용

const fortuneDetails = {
    비견: {
        title: [
            { description: "자신감을 키우고 새 도전을 시작해보세요." },
            { description: "새로운 만남이 더 많은 기회를 열어줄 거예요." },
            { description: "혼자 해결해야 할 일이 늘어나며 성장할 거예요." },
            { description: "이성적인 선택으로 중요한 기회를 잡아보세요." },
        ],
        TitleDescription: "늑대처럼",
        subDescription: [
            { description: "자신감과 협동심이 돋보이는 시기입니다." },
            { description: "새로운 사람들과 만나며 목표를 향해 함께 나아가 보세요" },
        ],
        imageAlt: "늑대",
        imageSrc: `${process.env.PUBLIC_URL}/images/animals/wolf.png`,
    },
    겁재: {
        title: [
            { description: "능력을 발휘하며 기회를 잡아요." },
            { description: "예상치 못한 지출에 대비하세요." },
            { description: "중요한 관계에서는 신중히 대처해요." },
            { description: "새로운 도전에서 성공을 이끌어보세요." },
        ],
        TitleDescription: "호랑이처럼",
        subDescription: [
            { description: "경쟁에서 창의력을 발휘하는 시기입니다." },
            { description: "용기 있게 도전하되, 신중한 판단을 잊지 마세요." },
        ],
        imageAlt: "호랑이",
        imageSrc: `${process.env.PUBLIC_URL}/images/animals/tiger.png`,
    },
    식신: {
        title: [
            { description: "운동으로 건강을 유지해 보세요." },
            { description: "창의적인 활동에 도전해 보세요." },
            { description: "새로운 만남이 큰 기회를 가져올 거예요." },
            { description: "기술을 배우기에 좋은 시기입니다." },
        ],
        TitleDescription: "소처럼",
        subDescription: [
            { description: "성실함과 꾸준함이 빛나는 시기입니다." },
            { description: "새로운 경험과 만남을 통해 안정된 성과를 얻어 보세요." },
        ],
        imageAlt: "소",
        imageSrc: `${process.env.PUBLIC_URL}/images/animals/cow.png`,
    },
    상관: {
        title: [
            { description: "일상에 변화를 주기에 좋은 시기예요." },
            { description: "직설적인 말투로 오해를 살 수 있어요." },
            { description: "중요한 결정을 서두르지 마세요." },
            { description: "변화를 활용할 기회가 많아져요." },
        ],
        TitleDescription: "원숭이처럼",
        subDescription: [
            { description: "활발하고 창의적인 에너지가 넘치는 시기입니다." },
            { description: "하지만 지나친 솔직함이 오해를 부를 수 있으니 주의하세요." },
        ],
        imageAlt: "원숭이",
        imageSrc: `${process.env.PUBLIC_URL}/images/animals/monkey.png`,
    },
    편재: {
        title: [
            { description: "뜻밖의 수입이 생길 기회가 있어요." },
            { description: "투자 기회를 놓치지 않도록 주의하세요." },
            { description: "결정해야 할 일이 많아질 수 있어요." },
            { description: "여행이나 소비 욕구가 커질 수 있어요." },
        ],
        TitleDescription: "독수리처럼",
        subDescription: [
            { description: "멀리 보고 기회를 잡는 능력이 돋보이는 시기입니다." },
            { description: "계획적으로 행동하며 성과를 만들어 보세요." },
        ],
        imageAlt: "독수리",
        imageSrc: `${process.env.PUBLIC_URL}/images/animals/eagle.png`,
    },
    정재: {
        title: [
            { description: "소비를 줄이고 저축의 기회를 잡아보세요." },
            { description: "혼자만의 공간에서 휴식을 가져보세요." },
            { description: "주변을 정리하며 생활의 안정을 찾아보세요." },
            { description: "가까운 사람들과 관계가 깊어질 거예요." },
        ],
        TitleDescription: "개미처럼",
        subDescription: [
            { description: "부지런히 저축하고 재정을 관리하는 시기입니다." },
            { description: "꼼꼼한 관리로 안정된 성과를 쌓아 보세요." },
        ],
        imageAlt: "개미",
        imageSrc: `${process.env.PUBLIC_URL}/images/animals/ant.png`,
    },
    편관: {
        title: [
            { description: "건강을 관리하며 몸을 챙기세요." },
            { description: "예상치 못한 일이 생길 수 있어요." },
            { description: "협력하며 양보가 필요한 시기예요." },
            { description: "리더십을 발휘할 기회가 많아져요." },
        ],
        TitleDescription: "사자처럼",
        subDescription: [
            { description: "강한 리더십으로 팀을 이끄는 시기입니다." },
            { description: "책임감을 가지고 주도적으로 문제를 해결해 보세요." },
        ],
        imageAlt: "사자",
        imageSrc: `${process.env.PUBLIC_URL}/images/animals/lion.png`,
    },
    정관: {
        title: [
            { description: "목표를 달성하기 좋은 시기예요." },
            { description: "새로운 기회를 자주 마주할 거예요." },
            { description: "안정된 직장 생활이 시작돼요." },
            { description: "가정에서 큰 안정감을 느낄 거예요." },
        ],
        TitleDescription: "말처럼",
        subDescription: [
            { description: "꾸준히 목표를 향해 나아가는 시기입니다." },
            { description: "차분히 준비하며 성실한 태도로 성취를 이뤄 보세요." },
        ],
        imageAlt: "말",
        imageSrc: `${process.env.PUBLIC_URL}/images/animals/horse.png`,
    },
    편인: {
        title: [
            { description: "기존 일에서 흥미를 잃을 수 있어요." },
            { description: "의심이 들 땐 신중히 판단하세요." },
            { description: "일상 속에서 여유를 찾아보세요." },
            { description: "혼자만의 시간을 통해 내면을 돌아보세요." },
        ],
        TitleDescription: "올빼미처럼",
        subDescription: [
            { description: "깊은 사색과 자기 탐구의 시간이 주어집니다." },
            { description: "내면을 돌아보며 새로운 관점으로 문제를 해결해 보세요." },
        ],
        imageAlt: "올빼미",
        imageSrc: `${process.env.PUBLIC_URL}/images/animals/owl.png`,
    },
    정인: {
        title: [
            { description: "노력의 결실을 맺을 시기예요." },
            { description: "합격 운이 좋아 좋은 결과를 기대해요." },
            { description: "자격증을 딸 기회가 많아져요." },
            { description: "멘토와의 교류로 배울 기회가 생겨요." },
        ],
        TitleDescription: "코끼리처럼",
        subDescription: [
            { description: "차분함과 꾸준함으로 성과를 쌓는 시기입니다." },
            { description: "학업이나 자격증을 통해 실력을 키워 보세요." },
        ],
        imageAlt: "코끼리",
        imageSrc: `${process.env.PUBLIC_URL}/images/animals/elephant.png`,
    },
};

const SajuReport44 = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { nextFortune, nextYear} = location.state || {};

    const nextAnalysis = fortuneDetails[nextFortune] || {};

    const handleNextPage = () => {
        navigate('/Outtro1');
    };

    return (
        <div className="saju-report2-wrapper">
            {/* 다음 페이지 버튼 */}
            <button className="nextPage-button" onClick={handleNextPage}>
                다음 ▶
            </button>

            {/* 타이틀 */}
            <h1 className="report-title">
                33. {nextYear}년, 더 큰 기회를 열어줄 조언을 드립니다
            </h1>
            <p className="report-subtitle">
                {nextYear}년 운세를 통해 내면의 성장을 이끌고 큰 기회를 만들어보세요!
            </p>

            {/* 분석 섹션 */}
            <div className="report-content">
                {/* 왼쪽: 주요 변화 */}
                <div className="analysis-container">
                    <h2 className="analysis-title">{`${nextYear}년 주요 변화와 조언을 확인하세요`}</h2>
                    <ul className="strengths-list">
                        {nextAnalysis.title?.map((item, index) => (
                            <li key={index}>
                                <strong>{index + 1}. {item.description}</strong>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* 오른쪽: 이미지와 요약 */}
                <div className="analysis-image-container">
                    <img
                        src={nextAnalysis.imageSrc}
                        alt={nextAnalysis.imageAlt}
                        className="analysis-image"
                    />
                    <p>{nextFortune}운 은 {nextAnalysis.TitleDescription}</p>
                    <ul className="strengths-list">
                        {nextAnalysis.subDescription?.map((item, index) => (
                            <li key={index}>
                                <strong>👉 {item.description}</strong>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* 하단 메시지 */}
            <p className="footer-text">
                {nextYear}년의 운세를 통해 미래의 변화를 계획하고 성장의 길을 만들어 갈 수 있습니다
            </p>
        </div>
    );
};

export default SajuReport44;
