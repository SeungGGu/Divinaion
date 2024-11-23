import React, { createContext, useContext, useState, useEffect } from 'react';

// Context 생성
const SajuContext = createContext();

export const useSaju = () => useContext(SajuContext);

export const SajuProvider = ({ children }) => {
    const [sajuData, setSajuData] = useState(() => {
        // 로컬 스토리지에서 데이터 복구
        const savedData = localStorage.getItem('sajuData');
        return savedData ? JSON.parse(savedData) : null;
    });

    useEffect(() => {
        // sajuData가 변경될 때 로컬 스토리지에 저장
        if (sajuData) {
            localStorage.setItem('sajuData', JSON.stringify(sajuData));
        }
    }, [sajuData]);

    return (
        <SajuContext.Provider value={{ sajuData, setSajuData }}>
            {children}
        </SajuContext.Provider>
    );
};
