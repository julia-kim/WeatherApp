package com.julia.weatherapp.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.julia.weatherapp.model.ZipCode;

@Repository
public interface ZipCodeRepository extends CrudRepository<ZipCode, Long> {
	List<ZipCode> findAllByOrderByCreatedAtDesc();
}
