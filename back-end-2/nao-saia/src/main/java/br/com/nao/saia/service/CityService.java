package br.com.nao.saia.service;

import br.com.nao.saia.converter.CityConverter;
import br.com.nao.saia.dto.CityDTO;
import br.com.nao.saia.exception.CityNotFoundException;
import br.com.nao.saia.model.City;
import br.com.nao.saia.model.Merchant;
import br.com.nao.saia.repository.CityRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CityService {

    private final CityRepository cityRepository;
    private final CityConverter cityConverter;

    public CityService(CityRepository cityRepository,
                       CityConverter cityConverter) {
        this.cityRepository = cityRepository;
        this.cityConverter = cityConverter;
    }

    public CityDTO findById(Integer id) {
        return cityRepository.findById(id)
                .map(cityConverter::fromDomainToDTO)
                .orElseThrow(() -> new CityNotFoundException(id));
    }

    public List<CityDTO> findAll() {
        return cityRepository.findAll().stream()
                .map(cityConverter::fromDomainToDTO)
                .collect(Collectors.toList());
    }

    public void save(CityDTO cityDTO) {
        City city = cityConverter.fromDTOToDomain(cityDTO);
        cityRepository.save(city);
    }

}
