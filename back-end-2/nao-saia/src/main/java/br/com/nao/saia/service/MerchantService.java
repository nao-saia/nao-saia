package br.com.nao.saia.service;

import br.com.nao.saia.converter.MerchantConverter;
import br.com.nao.saia.dto.MerchantDTO;
import br.com.nao.saia.exception.MerchantNotFoundException;
import br.com.nao.saia.model.Merchant;
import br.com.nao.saia.repository.MerchantRepository;
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

    private final MerchantRepository merchantRepository;
    private final MerchantConverter merchantConverter;

    public MerchantService(MerchantRepository merchantRepository,
                           MerchantConverter merchantConverter) {
        this.merchantRepository = merchantRepository;
        this.merchantConverter = merchantConverter;
    }

    public MerchantDTO findById(UUID id) {
        return merchantRepository.findById(id)
                .map(merchantConverter::fromDomainToDTO)
                .orElseThrow(() -> new MerchantNotFoundException(id));
    }

    public List<MerchantDTO> findAll() {
        return merchantRepository.findAll().stream()
                .map(merchantConverter::fromDomainToDTO)
                .collect(Collectors.toList());
    }

    public void save(MerchantDTO merchantDTO) {
        Merchant merchant = merchantConverter.fromDTOToDomain(merchantDTO);
        merchantRepository.save(merchant);
    }

    public void deleteById(UUID id) {
        Merchant merchant = merchantRepository.findById(id)
                .orElseThrow(() -> new MerchantNotFoundException(id));
        merchantRepository.delete(merchant);
    }

}
