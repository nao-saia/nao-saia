package br.com.nao.saia.repository;

import br.com.nao.saia.model.Merchant;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface MerchantRepository extends MongoRepository<Merchant, UUID> {
	
}
