package br.com.nao.saia.service;

import br.com.nao.saia.dto.ResponseDTO;
import br.com.nao.saia.exception.BusinessException;
import br.com.nao.saia.exception.MerchantNotFoundException;
import br.com.nao.saia.exception.UserNotFoundException;
import br.com.nao.saia.model.User;
import br.com.nao.saia.repository.UserRepository;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Service de {@link User}
 */
@Service
public class UserService {

    private final UserRepository repository;

    public UserService(UserRepository userRepository) {
        this.repository = userRepository;
    }

    public ResponseDTO login(User user) {
        User userBd = repository.findByEmailAndPassword(user.getEmail(), user.getPassword());
        if (userBd != null) {
            // Implementar regra
        } else {
            // Implementar regra
            repository.save(user);
        }
        return new ResponseDTO();
    }
    
    public User findById(UUID id) {
    	return this.repository.findById(id).orElseThrow(() -> new UserNotFoundException(id));
    }

    public ResponseDTO<User> createUser(User user) {
        User userBd = repository.findByEmail(user.getEmail());
        if (userBd != null) {
            throw new BusinessException("Usuário ja cadastrado");
        }
        User saved = this.repository.save(user);
        return ResponseDTO.success(saved);
    }

}
