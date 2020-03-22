package br.com.nao.saia.service;

import br.com.nao.saia.dto.MerchantDTO;
import br.com.nao.saia.dto.MerchantDTOFactory;
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
    private final MerchantDTOFactory merchantDTOFactory;

    public MerchantService(MerchantRepository merchantRepository,
                           MerchantDTOFactory merchantDTOFactory) {
        this.merchantRepository = merchantRepository;
        this.merchantDTOFactory = merchantDTOFactory;
    }

    public MerchantDTO findById(UUID id) {
        return merchantRepository.findById(id)
                .map(merchantDTOFactory::createMerchantDTO)
                .orElseThrow(() -> new MerchantNotFoundException(id));
    }

    public List<MerchantDTO> findAll() {
        return merchantRepository.findAll().stream()
                .map(merchantDTOFactory::createMerchantDTO)
                .collect(Collectors.toList());
    }

    public void save(Merchant merchant) {
        merchantRepository.save(merchant);
    }

    public void deleteById(UUID id) {
        Merchant merchant = merchantRepository.findById(id)
                .orElseThrow(() -> new MerchantNotFoundException(id));
        merchantRepository.delete(merchant);
    }

}
