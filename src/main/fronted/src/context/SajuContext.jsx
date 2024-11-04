import React, { createContext, useContext, useState } from 'react';

// Context 생성
const SajuContext = createContext();

// Context Provider 컴포넌트
export const SajuProvider = ({ children }) => {
    const [sajuData, setSajuData] = useState(null); // 사주 데이터를 저장하는 상태

    return (
        <SajuContext.Provider value={{ sajuData, setSajuData }}>
            {children}
        </SajuContext.Provider>
    );
};

// Context를 사용하기 쉽게 하기 위한 커스텀 훅
export const useSaju = () => useContext(SajuContext);
