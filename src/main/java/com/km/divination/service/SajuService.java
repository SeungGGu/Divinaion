package com.km.divination.service;

import com.km.divination.util.DaylightSavingTimeUtil;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpMethod;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Service
public class SajuService {

    // 운세박사 API URL
    private static final String UNSEBAKSA_API_URL = "https://api.aifortunedoctor.com/manse";

    /**
     * 사주팔자 계산 메서드
     *
     * @param birthDate: 생년월일 (YYYYMMDD 형식)
     * @param birthTime: 출생 시각 (00, 02, 04 등 2시간 단위)
     * @param birthdayType: 양력/음력 여부 (SOLAR / LUNAR)
     * @param gender: 성별 (MALE / FEMALE)
     * @return String: API 응답 결과
     */
    public String calculateSaju(String birthDate, String birthTime, String birthdayType, String gender) {
        try {
            // 입력한 출생 시간과 날짜를 합쳐서 서머타임 체크
            String birthDateTime = birthDate + " " + birthTime;
            LocalDateTime adjustedDateTime = DaylightSavingTimeUtil.adjustForDaylightSavingTime(birthDateTime);

            // 조정된 시간으로 다시 birthDate와 birthTime 분리
            String formattedBirthDate = adjustedDateTime.format(DateTimeFormatter.ofPattern("yyyyMMdd"));
            String formattedTime = convertTimeToEnum(adjustedDateTime.format(DateTimeFormatter.ofPattern("HH:mm")));


            // JSON 요청 데이터 생성
            String requestJson = String.format(
                    "{\"birthday\":\"%s\",\"time\":\"%s\",\"birthdayType\":\"%s\",\"gender\":\"%s\"}",
                    formattedBirthDate, formattedTime, birthdayType, gender
            );

            // HTTP 요청 설정
            HttpHeaders headers = new HttpHeaders();
            headers.set("Content-Type", "application/json");
            HttpEntity<String> requestEntity = new HttpEntity<>(requestJson, headers);

            // API 요청
            RestTemplate restTemplate = new RestTemplate();
            ResponseEntity<String> response = restTemplate.exchange(
                    UNSEBAKSA_API_URL, HttpMethod.POST, requestEntity, String.class
            );

            // API 응답 전체 출력
            System.out.println("API Response: " + response.getBody());

            // API 응답 반환 (전체 응답을 그대로 반환)
            return response.getBody();

        } catch (Exception e) {
            e.printStackTrace();
            return "API 호출 중 오류 발생: " + e.getMessage();
        }
    }

    /**
     * 시간 형식을 2시간 단위의 Enum 값으로 변환하는 메서드
     *
     * @param birthTime: "HH:MM" 형식의 출생 시간
     * @return String: 2시간 단위의 시간 코드 ("00", "02" 등)
     */
    private String convertTimeToEnum(String birthTime) {
        String[] timeRanges = {"00", "02", "04", "06", "08", "10", "12", "14", "16", "18", "20", "22", "24"};
        int hour = Integer.parseInt(birthTime.split(":")[0]);
        int index = (hour / 2);
        return timeRanges[index];
    }
}
