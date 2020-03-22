package br.com.nao.saia.repository;

import br.com.nao.saia.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
	
	User findByEmailAndSenha(String email, String senha);
	
}
