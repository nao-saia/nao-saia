package br.com.naosaia.service.init;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import br.com.erp.framework.datasource.DataSourceJdbc;
import liquibase.integration.spring.SpringLiquibase;

@Configuration
public class LiquibaseConfig {
	
	@Autowired
	public DataSourceJdbc dataSourceControler;
	
	@Value("${liquibase.context}")
	private String context;
	
	@Bean
	public SpringLiquibase liquibase() {
	    SpringLiquibase liquibase = new SpringLiquibase();
	    liquibase.setChangeLog("classpath:db/changelog/db.changelog-master.yaml");
	    liquibase.setDataSource(dataSourceControler.getDataSource());
	    liquibase.setContexts(context);
	    return liquibase;
	}

}
