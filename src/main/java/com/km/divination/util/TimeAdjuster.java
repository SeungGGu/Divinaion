package com.km.divination.util;

import java.time.LocalDateTime;

public class TimeAdjuster {

    // 동경 127도 30분 시기를 적용하는 메서드
    public static LocalDateTime applyTimezoneAdjustment(LocalDateTime birthDateTime) {
        // 동경 127도 30분 기준 시기: 1912-01-01 ~ 1961-08-09
        LocalDateTime start127_30 = LocalDateTime.of(1912, 1, 1, 0, 0);
        LocalDateTime end127_30 = LocalDateTime.of(1961, 8, 9, 0, 0);

        if (birthDateTime.isAfter(start127_30) && birthDateTime.isBefore(end127_30)) {
            return birthDateTime.minusMinutes(32);  // 동경 127도 30분 기준 시간 차이 -32분
        }
        return birthDateTime;
    }

    // 군사차 조정 (-8분)을 적용하는 메서드
    public static LocalDateTime applyMilitaryAdjustment(LocalDateTime birthDateTime) {
        // 군사차 조정 시기: 1954-03-21 ~ 1961-08-09
        LocalDateTime startMilitary = LocalDateTime.of(1954, 3, 21, 0, 0);
        LocalDateTime endMilitary = LocalDateTime.of(1961, 8, 9, 0, 0);

        if (birthDateTime.isAfter(startMilitary) && birthDateTime.isBefore(endMilitary)) {
            return birthDateTime.minusMinutes(8);  // 군사차 조정 -8분
        }
        return birthDateTime;
    }

    // 써머타임 적용 여부를 확인하는 메서드
    public static boolean isSummerTime(LocalDateTime birthDateTime) {
        LocalDateTime[] summerTimePeriods = {
                LocalDateTime.of(1948, 6, 1, 0, 0), LocalDateTime.of(1948, 9, 13, 0, 0),
                LocalDateTime.of(1949, 4, 3, 0, 0), LocalDateTime.of(1949, 9, 11, 0, 0),
                LocalDateTime.of(1950, 4, 1, 0, 0), LocalDateTime.of(1950, 9, 10, 0, 0),
                LocalDateTime.of(1951, 5, 6, 0, 0), LocalDateTime.of(1951, 9, 9, 0, 0),
                LocalDateTime.of(1955, 5, 5, 0, 0), LocalDateTime.of(1955, 9, 9, 0, 0),
                LocalDateTime.of(1956, 5, 20, 0, 0), LocalDateTime.of(1956, 9, 30, 0, 0),
                LocalDateTime.of(1957, 5, 5, 0, 0), LocalDateTime.of(1957, 9, 22, 0, 0),
                LocalDateTime.of(1958, 5, 4, 0, 0), LocalDateTime.of(1958, 9, 21, 0, 0),
                LocalDateTime.of(1959, 5, 3, 0, 0), LocalDateTime.of(1959, 9, 20, 0, 0),
                LocalDateTime.of(1960, 5, 1, 0, 0), LocalDateTime.of(1960, 9, 18, 0, 0),
                LocalDateTime.of(1987, 5, 10, 2, 0), LocalDateTime.of(1987, 10, 11, 3, 0),
                LocalDateTime.of(1988, 5, 8, 2, 0), LocalDateTime.of(1988, 10, 9, 3, 0)
        };

        for (int i = 0; i < summerTimePeriods.length; i += 2) {
            if (birthDateTime.isAfter(summerTimePeriods[i]) && birthDateTime.isBefore(summerTimePeriods[i + 1])) {
                return true;
            }
        }
        return false;
    }

    // 전체 시간 조정 로직
    public static LocalDateTime adjustTime(LocalDateTime birthDateTime) {
        birthDateTime = applyTimezoneAdjustment(birthDateTime); // 동경 127도 30분 적용
        birthDateTime = applyMilitaryAdjustment(birthDateTime); // 군사차 조정 적용

        if (isSummerTime(birthDateTime)) {
            birthDateTime = birthDateTime.minusHours(1); // 써머타임 적용
        }
        return birthDateTime;
    }
}