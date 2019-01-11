package com.bookstore.repository;

import com.bookstore.config.SecurityUtility;
import com.bookstore.domain.User;
import com.bookstore.domain.security.Role;
import com.bookstore.domain.security.UserRole;
import com.bookstore.service.UserService;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
@DataJpaTest
public class UserRepositoryTest {

    @Autowired
    private TestEntityManager entityManager;

    @Autowired
    private UserRepository userRepository;

    @MockBean
    private UserService userService;

    @Before
    public void setUp() throws Exception {
    }

    @After
    public void tearDown() throws Exception {
    }

    @Test
    public void findByUsername() {
        User savedUser = entityManager.persist(createUser());
        User readUser = userRepository.findByUsername(createUser().getUsername());
        System.out.println(savedUser);
        System.out.println(readUser);
        assertThat(savedUser).isEqualTo(readUser);
    }

    @Test
    public void findByEmail() {
        User savedUser = entityManager.persist(createUser());
        User readUser = userRepository.findByEmail(createUser().getEmail());
        System.out.println(savedUser);
        System.out.println(readUser);
        assertThat(savedUser).isEqualTo(readUser);
    }

    @Test
    public void findAll() {
        ArrayList<User> savedUsers = new ArrayList<>();
        for (User user : createUserList()) {
            savedUsers.add(entityManager.persist(user));
        }
        List<User> all = userRepository.findAll();
        assertThat(all.size()).isEqualTo(2);
    }

    @Test
    public void findById() {
        User savedUser = entityManager.persist(createUser());
        User readUser = userRepository.findById(createUser().getId());
        System.out.println(savedUser);
        System.out.println(readUser);
        assertThat(savedUser).isEqualTo(readUser);
    }

    private User createUser() {
        User user = new User();
        user.setFirstName("karim");
        user.setLastName("beiranvand");
        user.setUsername("karim");
        user.setPassword(SecurityUtility.passwordEncoder().encode("karim"));
        user.setEmail("beiranvand.karim@gmail.com");
        Set<UserRole> userRoles = new HashSet<>();
        Role role1 = new Role();
        role1.setRoleId(1);
        role1.setName("ROLE_USER");
        userRoles.add(new UserRole(user, role1));
        return user;
    }

    private List<User> createUserList() {
        User user1 = new User();
        user1.setFirstName("John");
        user1.setLastName("Adams");
        user1.setUsername("j");
        user1.setPassword(SecurityUtility.passwordEncoder().encode("p"));
        user1.setEmail("JAdams@gmail.com");
        Role role1 = new Role();
        role1.setRoleId(1);
        role1.setName("ROLE_USER");

        User user2 = new User();
        user2.setFirstName("Admin");
        user2.setLastName("Admin");
        user2.setUsername("admin");
        user2.setPassword(SecurityUtility.passwordEncoder().encode("p"));
        user2.setEmail("Admin@gmail.com");
        Role role2 = new Role();
        role2.setRoleId(0);
        role2.setName("ROLE_ADMIN");

        ArrayList<User> users = new ArrayList<>();
        users.add(user1);
        users.add(user2);
        return users;
    }
}
