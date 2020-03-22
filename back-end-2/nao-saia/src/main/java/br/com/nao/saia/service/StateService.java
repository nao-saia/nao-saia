package br.com.nao.saia.service;

import br.com.nao.saia.converter.StateConverter;
import br.com.nao.saia.dto.StateDTO;
import br.com.nao.saia.exception.StateNotFoundException;
import br.com.nao.saia.model.State;
import br.com.nao.saia.repository.StateRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class StateService {

    private final StateRepository stateRepository;

    public StateService(StateRepository stateRepository) {
        this.stateRepository = stateRepository;
    }

    public State findById(Integer id) {
        return stateRepository.findById(id)
                .orElseThrow(() -> new StateNotFoundException(id));
    }

    public StateDTO findDTOById(Integer id) {
        return stateRepository.findById(id)
                .map(StateConverter::fromDomainToDTO)
                .orElseThrow(() -> new StateNotFoundException(id));
    }

    public List<StateDTO> findAll() {
        return stateRepository.findAll().stream()
                .map(StateConverter::fromDomainToDTO)
                .collect(Collectors.toList());
    }

    public void save(StateDTO stateDTO) {
        State state = StateConverter.fromDTOToDomain(stateDTO);
        stateRepository.save(state);
    }

}
