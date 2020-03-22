package br.com.nao.saia.service;

import br.com.nao.saia.dto.UserStatusDTO;
import br.com.nao.saia.model.User;
import br.com.nao.saia.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Service de {@link User}
 */
@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public UserStatusDTO login(User user) {
        User userBd = userRepository.findByEmailAndPassword(user.getEmail(), user.getPassword());
        if (userBd != null) {
            // Implementar regra
        } else {
            // Implementar regra
            userRepository.save(user);
        }
        return new UserStatusDTO();
    }

    public UserStatusDTO createUser(User user) {
        User userBd = userRepository.findByEmailAndPassword(user.getEmail(), user.getPassword());
        if (userBd != null) {
            // Implementar regra
        }
        return new UserStatusDTO();
    }

}
