package br.com.nao.saia.exception;

public class StateNotFoundException extends RuntimeException {

    public StateNotFoundException(Integer id) {
        super(String.format("State not found with id %s", id));
    }
}
