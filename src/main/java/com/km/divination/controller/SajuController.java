package com.km.divination.controller;

import com.km.divination.service.SajuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/saju")
public class SajuController {

    @Autowired
    private SajuService sajuService;

    @PostMapping("/calculate")
    public String calculateSaju(@RequestBody Map<String, String> request) {
        String birthDate = request.get("birthDate");      // YYYYMMDD 형식
        String birthTime = request.get("birthTime");      // 시간 (00, 02, 04 등)
        String birthdayType = request.get("birthdayType"); // 양력/음력
        String gender = request.get("gender");             // MALE/FEMALE

        // SajuService를 통해 사주 계산
        return sajuService.calculateSaju(birthDate, birthTime, birthdayType, gender);
    }
}
