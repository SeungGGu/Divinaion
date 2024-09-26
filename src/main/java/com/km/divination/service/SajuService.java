package com.km.divination.service;

import com.km.divination.util.SajuCalculator;
import com.km.divination.util.SajuCalculator.SajuResult;
import com.km.divination.util.TimeAdjuster;
import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

@Service
public class SajuService {

    // 절기 데이터를 가져오는 메서드 (HttpURLConnection을 이용)
    private String fetchSolarTerms(String birthDate) throws Exception {
        // 디코딩된 서비스 키
        String serviceKey = "AQYe08EMZO/pbTVS6NtJyixJu8Hi7jEcXAkvP1kvQcJxaPjsz3wvC0zIc2krAYuh+VEnaLV/TaO96R027vnMpA==";

        // 서비스 키를 URL 인코딩
        String encodedServiceKey = URLEncoder.encode(serviceKey, StandardCharsets.UTF_8.toString());

        // 생년과 월 추출
        String year = birthDate.substring(0, 4); // 생년 추출
        String month = birthDate.substring(5, 7); // 생월 추출

        // API 엔드포인트 설정
        String url = "https://apis.data.go.kr/B090041/openapi/service/SpcdeInfoService/get24DivisionsInfo"
                + "?serviceKey=" + encodedServiceKey
                + "&solYear=" + year
                + "&solMonth=" + month
                + "&numOfRows=10"
                + "&pageNo=1";

        // HttpURLConnection 설정
        URL obj = new URL(url);
        HttpURLConnection connection = (HttpURLConnection) obj.openConnection();
        connection.setRequestMethod("GET");

        // 응답 읽기
        BufferedReader in = new BufferedReader(new InputStreamReader(connection.getInputStream()));
        String inputLine;
        StringBuffer response = new StringBuffer();

        while ((inputLine = in.readLine()) != null) {
            response.append(inputLine);
        }
        in.close();

        // API 응답 반환
        return response.toString();
    }

    // 사주 계산 로직
    public SajuResult calculateSaju(String birthDate, String birthTime) {
        try {
            // 출생 시각을 LocalDateTime으로 변환
            LocalDate birthDateParsed = LocalDate.parse(birthDate);
            LocalTime birthTimeParsed = LocalTime.parse(birthTime);
            LocalDateTime birthDateTime = LocalDateTime.of(birthDateParsed, birthTimeParsed);

            // 절기 데이터를 API를 통해 가져오기
            String solarTerms = fetchSolarTerms(birthDate);
            System.out.println(solarTerms);

            // 시간 조정 적용 (동경 127도 30분, 군사차 조정, 써머타임)
            birthDateTime = TimeAdjuster.adjustTime(birthDateTime);

            // SajuCalculator를 사용하여 사주 계산 (절기 데이터 전달)
            SajuResult sajuResult = SajuCalculator.calculateSaju(birthDateTime, solarTerms);

            return sajuResult;  // JSON 형태로 응답

        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }
}
