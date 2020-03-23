package br.com.nao.saia.repository;

import br.com.nao.saia.model.Merchant;
import org.springframework.data.domain.Pageable;
import org.springframework.data.geo.Distance;
import org.springframework.data.geo.Point;
import org.springframework.data.mongodb.core.geo.GeoJsonPoint;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import java.util.Set;
import java.util.UUID;

@Repository
public interface MerchantRepository extends MongoRepository<Merchant, UUID> {
	
	Set<Merchant> findByCategoriesIn(String category, Pageable pageable);
	
	Set<Merchant> findByAddressCity(String city, Pageable pageable);
	
	Set<Merchant> findByAddressState(String city, Pageable pageable);
	
	Set<Merchant> findByAddressLocationNear(GeoJsonPoint geoJsonPoint, Pageable pageable);
	
	Set<Merchant> findByAddressLocationNear(Point point, Distance distance, Pageable pageable);
	
}
