import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSaju } from '../../context/SajuContext';
import '../css/SajuReport2.css'; // 동일한 스타일 재활용

const SajuReport4 = () => {
    const { sajuData } = useSaju();
    const { result, name } = sajuData;
    const navigate = useNavigate();

    const analysisData = {
        "비견": {
            title: name + "님의 사회적 성향과 보완점을 확인하세요",
            weaknesses: [
                { title: "고집이 강해요", description: "자신의 생각만 고집해 타인의 의견을 놓쳐요" },
                { title: "경쟁심이 과해요", description: "지나친 경쟁으로 스트레스를 받을 수 있어요" },
                { title: "독립성이 강해요", description: "도움을 거부해 혼자 해결하려 할 때가 있어요" },
                { title: "직설적이에요", description: "솔직한 표현이 상대방에게 상처를 줄 수 있어요" },
            ],
            TitleDescription: "늑대처럼 고집이 세서 타협이 어려울 때가 있어요",
            subDescription: [
                { description: "늑대처럼 독립성을 강조해 협력을 놓칠 때가 있어요" },
                { description: "늑대처럼 자기 방식만 고집해 갈등이 생겨요" },
            ],
            imageAlt: "늑대",
            imageSrc: `${process.env.PUBLIC_URL}/images/animals/wolf.png`,
        },
        "겁재": {
            title: name + "님의 사회적 성향과 보완점을 확인하세요",
            weaknesses: [
                { title: "경쟁심이 강해요", description: "승부욕이 강해 갈등을 초래할 수 있어요" },
                { title: "충동적으로 행동해요", description: "성급한 판단으로 실수할 때가 있어요" },
                { title: "독립성이 과해요", description: "도움을 거부해 어려움을 겪을 때가 있어요" },
                { title: "고집이 세요", description: "의견을 고집해 타협이 어려울 수 있어요" },
            ],
            TitleDescription: "호랑이처럼 급하게 행동해 갈등이 생길 때가 있어요",
            subDescription: [
                { description: "호랑이처럼 자기주장이 강할 때가 있어요" },
                { description: "호랑이처럼 타인의 의견을 무시할 때가 있어요" },
            ],
            imageAlt: "호랑이",
            imageSrc: `${process.env.PUBLIC_URL}/images/animals/tiger.png`,
        },
        "식신": {
            title: name + "님의 사회적 성향과 보완점을 확인하세요",
            weaknesses: [
                { title: "느긋함이 있어요", description: "여유를 부리다 일이 지연될 수 있어요" },
                { title: "내성적이에요", description: "혼자 있는 시간이 많아 소통이 적을 수 있어요" },
                { title: "보수적이에요", description: "익숙한 방식을 고집해 변화를 꺼릴 수 있어요" },
                { title: "걱정이 많아요", description: "작은 일에도 고민이 많을 수 있어요" },
            ],
            TitleDescription: "소처럼 고집이 세서 융통성이 부족할 때가 있어요",
            subDescription: [
                { description: "소처럼 느려 기회를 놓칠 때가 있어요" },
                { description: "소처럼 반복에 매여 변화를 꺼릴 때가 있어요" },
            ],
            imageAlt: "소",
            imageSrc: `${process.env.PUBLIC_URL}/images/animals/cow.png`,
        },
        "상관": {
            title: name + "님의 사회적 성향과 보완점을 확인하세요",
            weaknesses: [
                { title: "자유분방해요", description: "규칙보다 자신의 방식을 고집해요" },
                { title: "충동적이에요", description: "계획 없이 행동해 실수를 할 수 있어요" },
                { title: "직설적이에요", description: "솔직한 표현이 상대에게 부담이 될 수 있어요" },
                { title: "변덕스러워요", description: "관심이 자주 바뀌어 꾸준함이 부족해요" },
            ],
            TitleDescription: "원숭이처럼 언행이 지나쳐 신뢰를 잃어요",
            subDescription: [
                { description: "원숭이처럼 규칙을 무시해 불편을 줄 때가 있어요" },
                { description: "원숭이처럼 즉흥적으로 실수할 때가 있어요" },
            ],
            imageAlt: "원숭이",
            imageSrc: `${process.env.PUBLIC_URL}/images/animals/monkey.png`,
        },
        "편재": {
            title: name + "님의 사회적 성향과 보완점을 확인하세요",
            weaknesses: [
                { title: "물질적이에요", description: "재물에 집중하다 중요한 결정을 놓칠 수 있어요" },
                { title: "성급해요", description: "이익을 서두르다 실수를 할 수 있어요" },
                { title: "독립적이에요", description: "혼자 해결하려다 어려움을 겪을 때가 있어요" },
                { title: "고집이 강해요", description: "자신의 방식을 고집해 타협이 어려울 수 있어요" },
            ],
            TitleDescription: "독수리처럼 목표만 보고 주변을 소홀히 해요",
            subDescription: [
                { description: "독수리처럼 독단적으로 행동할 때가 있어요" },
                { description: "독수리처럼 욕심이 많아 실수할 때도 많아요" },
            ],
            imageAlt: "독수리",
            imageSrc: `${process.env.PUBLIC_URL}/images/animals/eagle.png`,
        },
        "정재": {
            title: name + "님의 사회적 성향과 보완점을 확인하세요",
            weaknesses: [
                { title: "변화를 싫어해요", description: "익숙함에 머물러 새 시도를 놓칠 때가 있어요" },
                { title: "결정이 느려요", description: "신중한 성격으로 결정을 미룰 때가 있어요" },
                { title: "고집이 세요", description: "타인의 의견을 받아들이기 어려울 수 있어요" },
                { title: "안정을 추구해요", description: "안전한 길만 선택해 성장이 더딜 수 있어요" },
            ],
            TitleDescription: "개미처럼 지나친 경쟁으로 갈등이 생길 때가 있어요",
            subDescription: [
                { description: "개미처럼 자신의 이익만 고집할 때가 있어요" },
                { description: "개미처럼 집착으로 유연함을 잃을 때가 있어요" },
            ],
            imageAlt: "개미",
            imageSrc: `${process.env.PUBLIC_URL}/images/animals/ant.png`,
        },
        "편관": {
            title: name + "님의 사회적 성향과 보완점을 확인하세요",
            weaknesses: [
                { title: "지나치게 통제해요", description: "자신과 다른 사람을 지나치게 통제하려 해요" },
                { title: "융통성이 부족해요", description: "규칙을 고집해 융통성이 부족할 수 있어요" },
                { title: "고집이 강해요", description: "자신의 의견을 바꾸지 않아 타협이 어려워요" },
                { title: "스트레스를 받아요", description: "책임감으로 인해 스트레스를 받을 때가 있어요" },
            ],
            TitleDescription: "사자처럼 권위를 내세워 타인을 억압할 때가 있어요",
            subDescription: [
                { description: "사자처럼 성급한 결단으로 실수할 때가 있어요" },
                { description: "사자처럼 자신의 방식을 고집할 때가 있어요" },
            ],
            imageAlt: "사자",
            imageSrc: `${process.env.PUBLIC_URL}/images/animals/lion.png`,
        },
        "정관": {
            title: name + "님의 사회적 성향과 보완점을 확인하세요",
            weaknesses: [
                { title: "융통성이 부족해요", description: "규칙을 고집해 유연하게 대처하기 어려워요" },
                { title: "보수적이에요", description: "변화를 피하고 새 시도를 꺼릴 때가 있어요" },
                { title: "신중함이 지나쳐요", description: "결정을 미루다 기회를 놓칠 수 있어요" },
                { title: "고집이 강해요", description: "타인의 의견을 받아들이기 어려울 때가 있어요" },
            ],
            TitleDescription: "말처럼 서두르다 실수할 때가 있어요",
            subDescription: [
                { description: "말처럼 속도만 고집해 협력을 해칠 때가 있어요" },
                { description: "말처럼 주변을 둘러보지 않아 고지식할 수 있어요" },
            ],
            imageAlt: "말",
            imageSrc: `${process.env.PUBLIC_URL}/images/animals/horse.png`,
        },
        "편인": {
            title: name + "님의 사회적 성향과 보완점을 확인하세요",
            weaknesses: [
                { title: "집중력이 부족해요", description: "여러 관심사로 하나에 집중 못할 때가 있어요" },
                { title: "비현실적이에요", description: "창의적이지만 현실을 벗어날 때가 있어요" },
                { title: "소통이 부족해요", description: "혼자 생각에 빠져 소통이 어려울 때가 있어요" },
                { title: "결정을 미뤄요", description: "가능성을 고민하다 결정을 미룰 때가 있어요" },
            ],
            TitleDescription: "올빼미처럼 의심이 많아 기회를 놓칠 때가 있어요",
            subDescription: [
                { description: "올빼미처럼 분석하다 결정을 못 내릴 때가 있어요" },
                { description: "올빼미처럼 혼자만의 생각에 빠질 때가 있어요" },
            ],
            imageAlt: "올빼미",
            imageSrc: `${process.env.PUBLIC_URL}/images/animals/owl.png`,
        },
        "정인": {
            title: name + "님의 사회적 성향과 보완점을 확인하세요",
            weaknesses: [
                { title: "신중함이 지나쳐요", description: "결정을 미뤄 기회를 놓칠 수 있어요" },
                { title: "분석에 집착해요", description: "모든 것을 따지다 실행이 늦어질 때가 있어요" },
                { title: "완고해요", description: "타인의 의견을 받아들이기 어려울 때가 있어요" },
                { title: "소극적이에요", description: "적극적으로 나서지 않아 놓칠 때가 있어요" },
            ],
            TitleDescription: "코끼리처럼 배려가 지나쳐 의견을 숨길 때가 있어요",
            subDescription: [
                { description: "코끼리처럼 안정만 추구해 도전을 피할 때가 있어요" },
                { description: "코끼리처럼 감정을 억눌러 스트레스를 받아요" },
            ],
            imageAlt: "코끼리",
            imageSrc: `${process.env.PUBLIC_URL}/images/animals/elephant.png`,
        },
    };

    const monthRelation = result.manseMonthGroundRelation; // 동적 데이터
    const currentAnalysis = analysisData[monthRelation] || {
        title: "데이터 없음",
        weaknesses: [{ title: "데이터 없음", description: "해당 관계에 대한 데이터가 없습니다." }],
        description: "해당 관계에 대한 상세 설명을 준비 중입니다.",
        imageAlt: "이미지 없음",
        imageSrc: `${process.env.PUBLIC_URL}/images/placeholder.png`,
    };

    const handleNextPage = () => {
        navigate('/Report5'); // 다음 페이지로 이동
    };

    return (
        <div className="saju-report2-wrapper">

            {/* 다음 페이지 버튼 */}
            <button className="nextPage-button" onClick={handleNextPage}>
                다음 ▶
            </button>

            <h1 className="report-title">3. {name}님의 사회적 성향과 보완점을 알려드립니다</h1>
            <p className="report-subtitle">작은 변화를 통해 대인관계를 더 긍정적으로 만들어보세요</p>

            <div className="report-content">
                <div className="sky-symbol-container">
                    <div
                        className="sky-symbol"
                        style={{
                            backgroundColor: "#4287f5",
                            color: "white",
                        }}
                    >
                        {monthRelation}
                    </div>
                </div>

                <div className="analysis-container">
                    <h2 className="analysis-title">{currentAnalysis.title}</h2>
                    <ul className="strengths-list">
                        {currentAnalysis.weaknesses.map((item, index) => (
                            <li key={index}>
                                <strong>{index + 1}. {item.title}</strong>
                                <br/>
                                <span className="strength-description">- {item.description}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="analysis-image-container">
                    <img
                        src={currentAnalysis.imageSrc}
                        alt={currentAnalysis.imageAlt}
                        className="analysis-image"
                    />
                    <p className="analysis-image-description">{currentAnalysis.TitleDescription}</p>
                    <ul className="strengths-list">
                        {currentAnalysis.subDescription.map((item, index) => (
                            <li key={index}>
                                <strong>👉 {item.description}</strong>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <p className="footer-text">보완점을 개선하면 균현 잡힌 관계와 성장을 이룰 수 있습니다</p>
        </div>
    );
};

export default SajuReport4;
