package com.julia.weatherapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;

import com.julia.weatherapp.model.Response;
import com.julia.weatherapp.model.ZipCode;
import com.julia.weatherapp.repository.ZipCodeRepository;

@Service
public class WeatherService {
    @Value("${api_key}")
    private String apiKey;
    
    @Autowired
    private ZipCodeRepository zipCodeRepository;
    
    public Response getForecast(String zipCode) {
        String url = "http://api.openweathermap.org/data/2.5/weather?zip=" + 
            zipCode + "&units=imperial&appid=" + apiKey;
        RestTemplate restTemplate = new RestTemplate();
        try {
            return restTemplate.getForObject(url, Response.class);
        }
        catch (HttpClientErrorException ex) {
            Response response = new Response();
            response.setName("error");
            return response;
        }
    }
    
    public List<ZipCode> findAllByOrderByCreatedAtDesc() {
    	return zipCodeRepository.findAllByOrderByCreatedAtDesc();
    }
    
    public void addZipCode(String data) {
    	ZipCode zipCode = new ZipCode();
    	zipCode.setCode(data);
    	zipCodeRepository.save(zipCode);
    }
}