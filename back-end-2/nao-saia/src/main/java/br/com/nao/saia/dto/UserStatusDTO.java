package br.com.nao.saia.dto;

import br.com.nao.saia.model.User;

/**
 * Classe responsavel pela geracao de DTO de status de {@link User}
 *
 * @author Taynan Rezende
 * @since 22/03/2020
 */
public class UserStatusDTO {

    private boolean status;
    private String message;

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
