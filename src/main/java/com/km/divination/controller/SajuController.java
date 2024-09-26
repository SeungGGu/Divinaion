package com.km.divination.controller;

import com.km.divination.service.SajuService;
import com.km.divination.util.SajuCalculator.SajuResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/saju")
public class SajuController {

    @Autowired
    private SajuService sajuService;

    @PostMapping("/calculate")
    public SajuResult calculateSaju(@RequestBody Map<String, String> request) {
        String birthDate = request.get("birthDate");
        String birthTime = request.get("birthTime");

        // SajuResult 객체 반환
        return sajuService.calculateSaju(birthDate, birthTime);
    }
}
