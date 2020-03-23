package br.com.nao.saia.repository;

import br.com.nao.saia.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.UUID;

public interface UserRepository extends MongoRepository<User, UUID> {
	
	User findByEmailAndPassword(String email, String password);
	
	User findByEmail(String email);
	
}
