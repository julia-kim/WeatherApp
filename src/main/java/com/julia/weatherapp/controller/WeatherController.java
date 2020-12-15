package com.julia.weatherapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.julia.weatherapp.model.Request;
import com.julia.weatherapp.model.Response;
import com.julia.weatherapp.model.ZipCode;
import com.julia.weatherapp.service.WeatherService;

@Controller
public class WeatherController {
	@Autowired
	private WeatherService weatherService;

	@GetMapping
	public String getIndex(Model model) {
		model.addAttribute("request", new Request());
		return "index";
	}

	@PostMapping
	public String postIndex(Request request, Model model) {
		Response data = weatherService.getForecast(request.getZipCode());
		weatherService.addZipCode(request.getZipCode());
		model.addAttribute("data", data);
		return "index";
	}
	
	@ModelAttribute (value = "zipCodes")
	public List<ZipCode> recentSearches() {
		return weatherService.getMostRecentSearches();
	}

}