package com.cognizant.spring_learn2;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import java.util.List;

@SpringBootApplication
public class SpringLearn2Application {

	private static final Logger LOGGER = LoggerFactory.getLogger(SpringLearn2Application.class);

	public static void main(String[] args) {
		SpringApplication.run(SpringLearn2Application.class, args);
		LOGGER.debug("START - main()");
		displayAllCountries();
		LOGGER.debug("END - main()");
	}

	public static void displayAllCountries() {
		ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
		List<Country> countries = (List<Country>) context.getBean("countryList");

		LOGGER.debug("Available Countries:");
		for (Country country : countries) {
			LOGGER.debug("{}", country);
		}
	}
}
