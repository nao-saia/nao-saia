package br.com.nao.saia.repository;

import br.com.nao.saia.model.Merchant;
import org.springframework.data.domain.Pageable;
import org.springframework.data.geo.Distance;
import org.springframework.data.geo.Point;
import org.springframework.data.mongodb.core.geo.GeoJsonPoint;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.UUID;

@Repository
public interface MerchantRepository extends MongoRepository<Merchant, UUID> {
	
	List<Merchant> findByCategoriesIn(String category, Pageable pageable);
	
	List<Merchant> findByAddressCity(String city, Pageable pageable);
	
	List<Merchant> findByAddressState(String city, Pageable pageable);
	
	List<Merchant> findByAddressLocationNear(GeoJsonPoint geoJsonPoint, Pageable pageable);
	
	List<Merchant> findByAddressLocationNear(Point point, Distance distance, Pageable pageable);
}
