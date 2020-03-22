package br.com.nao.saia.converter;

import br.com.nao.saia.dto.StateDTO;
import br.com.nao.saia.model.State;
import org.springframework.stereotype.Component;

public final class StateConverter {

    private StateConverter() {
    }

    public static State fromDTOToDomain(StateDTO stateDTO) {
        State state = new State();
        state.setCodeIbge(stateDTO.getCodeIbge());
        state.setName(stateDTO.getName());
        state.setUf(stateDTO.getUf());
        state.setCountry(stateDTO.getCountry());
        return state;
    }

    public static StateDTO fromDomainToDTO(State state) {
        StateDTO stateDTO = new StateDTO();
        stateDTO.setCodeIbge(state.getCodeIbge());
        stateDTO.setName(state.getName());
        stateDTO.setUf(state.getUf());
        stateDTO.setCountry(state.getCountry());
        return stateDTO;
    }

}
