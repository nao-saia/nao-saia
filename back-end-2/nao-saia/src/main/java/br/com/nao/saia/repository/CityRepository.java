package br.com.nao.saia.repository;

import br.com.nao.saia.model.City;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CityRepository extends MongoRepository<City, Integer> {
	
}
