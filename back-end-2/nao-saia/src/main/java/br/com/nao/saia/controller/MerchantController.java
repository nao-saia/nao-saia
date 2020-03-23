package br.com.nao.saia.controller;

import br.com.nao.saia.dto.MerchantDTO;
import br.com.nao.saia.model.Merchant;
import br.com.nao.saia.service.MerchantService;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.mapping.MongoMappingContext;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.List;
import java.util.UUID;

/**
 * Classe que armazena os endpoints de {@link Merchant} recebendo as requisicoes,
 * tratando e devolvendo os resultados
 *
 * @author Taynan Rezende
 * @since 22/03/2020
 */
@RestController
@RequestMapping("merchants")
public class MerchantController {

    private final MerchantService merchantService;
    private final MongoTemplate mongoTemplate;
    private final MongoMappingContext mongoMappingContext;

    public MerchantController(MerchantService merchantService, MongoTemplate mongoTemplate, MongoMappingContext mongoMappingContext) {
        this.merchantService = merchantService;
        this.mongoTemplate = mongoTemplate;
        this.mongoMappingContext = mongoMappingContext;
    }

    @GetMapping
    public List<MerchantDTO> findAll() {
        return merchantService.findAll();
    }

    @GetMapping("/{id}")
    public MerchantDTO findById(@PathVariable UUID id) {
        return merchantService.findById(id);
    }

    @PostMapping
    public void save(@Valid @RequestBody MerchantDTO merchantDTO) {
        merchantService.save(merchantDTO);
    }

    @DeleteMapping("{id}")
    public void delete(@PathVariable UUID id) {
        merchantService.deleteById(id);
    }

    @GetMapping(path = "/category/{category}")
    public List<MerchantDTO> findByCategory(@PathVariable String category) {
        return merchantService.findByCategory(category);
    }

    @GetMapping(path = "/city/{city}")
    public List<MerchantDTO> findByCity(@PathVariable String city) {
        return merchantService.findByCity(city);
    }

    @GetMapping(path = "/state/{state}")
    public List<MerchantDTO> findByUf(@PathVariable String state) {
        return merchantService.findByState(state);
    }

    @GetMapping(path = "/location")
    public List<MerchantDTO> findByLocation(@RequestParam("lat") double latitude,
                                            @RequestParam("lon") double longitude,
                                            @RequestParam(required = false, defaultValue = "10.0") double distance) {
        return merchantService.findByLocation(latitude, longitude, distance);
    }

}
