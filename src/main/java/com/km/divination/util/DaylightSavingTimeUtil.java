package com.km.divination.util;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class DaylightSavingTimeUtil {

    /**
     * 서머타임 적용 여부를 확인하고 시간을 조정하는 메서드
     *
     * @param birthDateTime: "yyyy-MM-dd HH:mm" 형식의 출생 시간
     * @return LocalDateTime: 서머타임 또는 30분 빠른 시간 조정된 시간 반환, 아니면 그대로 반환
     */
    public static LocalDateTime adjustForDaylightSavingTime(String birthDateTime) {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm");
        LocalDateTime dateTime = LocalDateTime.parse(birthDateTime, formatter);

        // 30분 느림 적용 확인
        if (isThirtyMinutesSlowPeriod(dateTime)) {
            return dateTime.minusMinutes(30);
        }

        // 서머타임 적용 확인
        if (isDaylightSavingTime(dateTime)) {
            return dateTime.minusHours(1);
        }

        return dateTime;
    }

    /**
     * 해당 날짜가 서머타임 기간 내에 있는지 확인하는 메서드
     *
     * @param dateTime: 확인할 LocalDateTime 객체
     * @return boolean: 서머타임 적용 여부
     */
    private static boolean isDaylightSavingTime(LocalDateTime dateTime) {
        LocalDateTime[][] daylightSavingPeriods = {
            { LocalDateTime.of(1987, 5, 10, 2, 0), LocalDateTime.of(1987, 10, 11, 3, 0) },
            { LocalDateTime.of(1988, 5, 8, 2, 0), LocalDateTime.of(1988, 10, 9, 3, 0) }
        };

        for (LocalDateTime[] period : daylightSavingPeriods) {
            if (!dateTime.isBefore(period[0]) && !dateTime.isAfter(period[1])) {
                return true;
            }
        }
        return false;
    }

    /**
     * 해당 날짜가 30분 빨리 기간 내에 있는지 확인하는 메서드
     *
     * @param dateTime: 확인할 LocalDateTime 객체
     * @return boolean: 30분 빨리 적용 여부
     */
    private static boolean isThirtyMinutesSlowPeriod(LocalDateTime dateTime) {
        LocalDateTime[][] slowPeriods = {
            { LocalDateTime.of(1948, 6, 1, 0, 0), LocalDateTime.of(1948, 9, 13, 0, 0) },
            { LocalDateTime.of(1949, 4, 3, 0, 0), LocalDateTime.of(1949, 9, 11, 0, 0) },
            { LocalDateTime.of(1950, 4, 1, 0, 0), LocalDateTime.of(1950, 9, 10, 0, 0) },
            { LocalDateTime.of(1951, 5, 6, 0, 0), LocalDateTime.of(1951, 9, 9, 0, 0) }
        };

        for (LocalDateTime[] period : slowPeriods) {
            if (!dateTime.isBefore(period[0]) && !dateTime.isAfter(period[1])) {
                return true;
            }
        }
        return false;
    }
}
