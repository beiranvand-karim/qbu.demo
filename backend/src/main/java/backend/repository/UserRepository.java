package backend.repository;

import backend.model.User;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface UserRepository extends CrudRepository<User, Long> {
    User findByUserName(String userName);
    User findByEmail(String email);
    List<User> findAll();
}
