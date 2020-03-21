package br.com.naosaia.service.init;

import javax.annotation.PostConstruct;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.boot.autoconfigure.jdbc.DataSourceTransactionManagerAutoConfiguration;
import org.springframework.boot.autoconfigure.jdbc.JdbcTemplateAutoConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import br.com.erp.framework.datasource.DataSourceJdbc;
import br.com.erp.framework.helper.LoggerHelper;

@SpringBootApplication(scanBasePackages = { "br.com.erp", "br.com.naosaia" }, 
			exclude = {DataSourceAutoConfiguration.class, 
					   JdbcTemplateAutoConfiguration.class, 
					   DataSourceTransactionManagerAutoConfiguration.class })

public class Init {
 
	public static void main(String[] args) throws Exception {
		SpringApplication.run(Init.class, args);
	}

	@PostConstruct
	private void init() {
		LoggerHelper.info(Init.class, "Iniciando a versao [1] do nao saia");
 
	}

	@Bean
	public DataSourceJdbc dataSourceControler() {
		DataSourceJdbc ds = new DataSourceJdbc();
		ds.setJdbcUrl("jdbc:postgresql://localhost:5432/naosaia");
		ds.setUrlDetault("jdbc:postgresql://");
		ds.setType("POSTGRES");
		ds.setPassword("postgres");
		ds.setUsername("postgres");
		return ds;
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