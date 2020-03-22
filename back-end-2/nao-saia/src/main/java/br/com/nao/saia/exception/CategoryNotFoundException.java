package br.com.nao.saia.exception;

import java.util.UUID;

public class CategoryNotFoundException extends RuntimeException {

    public CategoryNotFoundException(UUID id) {
        super(String.format("Category not found with id %s", id));
    }
}
