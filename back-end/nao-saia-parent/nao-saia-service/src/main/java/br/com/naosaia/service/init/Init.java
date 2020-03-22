package br.com.naosaia.service.init;

import javax.annotation.PostConstruct;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.boot.autoconfigure.jdbc.DataSourceTransactionManagerAutoConfiguration;
import org.springframework.boot.autoconfigure.jdbc.JdbcTemplateAutoConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;


@SpringBootApplication(scanBasePackages = { "br.com.naosaia" }, 
			exclude = {DataSourceAutoConfiguration.class, 
					   JdbcTemplateAutoConfiguration.class, 
					   DataSourceTransactionManagerAutoConfiguration.class })

public class Init {
	
	Logger logger = LoggerFactory.getLogger(Init.class);
 
	public static void main(String[] args) throws Exception {
		SpringApplication.run(Init.class, args);
	}

	@PostConstruct
	private void init() {
		logger.info("Iniciando a versao [1] do nao saia");
 
	}
 
	@Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
        		registry.addMapping("/**")
    			.allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS", "HEAD", "TRACE", "CONNECT");
            }
        };
    }
  
}