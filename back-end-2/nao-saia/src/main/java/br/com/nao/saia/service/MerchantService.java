package br.com.nao.saia.service;

import br.com.nao.saia.converter.MerchantConverter;
import br.com.nao.saia.dto.MerchantDTO;
import br.com.nao.saia.exception.MerchantNotFoundException;
import br.com.nao.saia.model.Merchant;
import br.com.nao.saia.repository.MerchantRepository;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.geo.Distance;
import org.springframework.data.geo.Metrics;
import org.springframework.data.geo.Point;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

/**
 * Service de {@link Merchant}
 *
 * @author Taynan Rezende
 * @since 22/03/2020
 */
@Service
public class MerchantService {
	
	private static final int PAGE_ZERO = 0;
	private final MerchantRepository merchantRepository;
	private final MerchantConverter merchantConverter;
	
	@Value("${nao.saia.page.size:500}")
	private int pageSize;
	
	public MerchantService(MerchantRepository merchantRepository, MerchantConverter merchantConverter) {
		this.merchantRepository = merchantRepository;
		this.merchantConverter = merchantConverter;
	}
	
	public MerchantDTO findById(UUID id) {
		return merchantRepository.findById(id).map(merchantConverter::fromDomainToDTO)
				.orElseThrow(() -> new MerchantNotFoundException(id));
	}
	
	public List<MerchantDTO> findAll() {
		return merchantRepository.findAll().stream().map(merchantConverter::fromDomainToDTO)
				.collect(Collectors.toList());
	}
	
	public void save(MerchantDTO merchantDTO) {
		Merchant merchant = merchantConverter.fromDTOToDomain(merchantDTO);
		merchantRepository.save(merchant);
	}
	
	public void deleteById(UUID id) {
		Merchant merchant = merchantRepository.findById(id).orElseThrow(() -> new MerchantNotFoundException(id));
		merchantRepository.delete(merchant);
	}
	
	public List<MerchantDTO> findByCategory(String category) {
		return merchantRepository.findByCategoriesIn(category, PageRequest.of(PAGE_ZERO, pageSize)).stream()
				.map(merchantConverter::fromDomainToDTO).collect(Collectors.toList());
	}
	
	public List<MerchantDTO> findByCity(String city) {
		return merchantRepository.findByAddress_City(city, PageRequest.of(PAGE_ZERO, pageSize)).stream()
				.map(merchantConverter::fromDomainToDTO).collect(Collectors.toList());
	}
	
	public List<MerchantDTO> findByState(String state) {
		return merchantRepository.findByAddress_State(state, PageRequest.of(PAGE_ZERO, pageSize)).stream()
				.map(merchantConverter::fromDomainToDTO).collect(Collectors.toList());
	}
	
	/**
	 * Para funfar tem que habilitar o geoNear no mongoDb.
	 * https://drissamri.be/blog/2015/08/18/build-a-location-api-with-spring-data-mongodb-and-geojson/
	 */
	public List<MerchantDTO> findByLocation(double latitude, double longitude, double distance) {
		return merchantRepository.findByAddress_LocationNear(new Point(latitude, longitude),
				new Distance(distance, Metrics.KILOMETERS), PageRequest.of(PAGE_ZERO, pageSize)).stream()
				.map(merchantConverter::fromDomainToDTO).collect(Collectors.toList());
	}
}
