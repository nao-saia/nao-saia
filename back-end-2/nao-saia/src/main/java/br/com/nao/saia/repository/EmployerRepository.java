package br.com.nao.saia.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.nao.saia.model.Employer;

public interface EmployerRepository extends JpaRepository<Employer, Long> {
	
	List<Employer> findByRazaoSocialStartingWithIgnoreCase(String param);
	
}
