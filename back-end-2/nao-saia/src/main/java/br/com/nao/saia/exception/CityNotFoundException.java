package br.com.nao.saia.exception;

public class CityNotFoundException extends RuntimeException {

    public CityNotFoundException(Integer id) {
        super(String.format("City not found with id %s", id));
    }
}
