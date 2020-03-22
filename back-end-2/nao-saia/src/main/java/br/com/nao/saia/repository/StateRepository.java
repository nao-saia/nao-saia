package br.com.nao.saia.repository;

import br.com.nao.saia.model.State;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StateRepository extends MongoRepository<State, Integer> {
	
}
