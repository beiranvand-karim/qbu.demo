package backend.service;

import backend.domain.User;
import backend.domain.security.UserRole;

import java.util.Set;

public interface UserService {

	User createUser(User user, Set<UserRole> userRoles);

}
