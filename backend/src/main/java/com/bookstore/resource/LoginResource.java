package com.bookstore.resource;

import java.util.Collections;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import com.bookstore.config.SecurityUtility;
import com.bookstore.domain.User;
import com.bookstore.domain.security.Role;
import com.bookstore.domain.security.UserRole;
import com.bookstore.repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import com.bookstore.service.UserService;

@RestController
public class LoginResource {
	@Autowired
	private UserService userService;
	@Autowired
    private RoleRepository roleRepository;

	@RequestMapping("/token")
	public Map<String, String> token(HttpSession session, HttpServletRequest request) {
		System.out.println(request.getRemoteHost());

		String remoteHost = request.getRemoteHost();
		int portNumber = request.getRemotePort();

		System.out.println(remoteHost+":"+portNumber);
		System.out.println(request.getRemoteAddr());

		return Collections.singletonMap("token", session.getId());
	}

	@RequestMapping("/checkSession")
	public ResponseEntity checkSession() {
		return new ResponseEntity("Session Active!", HttpStatus.OK);
	}

	@RequestMapping(value="/user/logout", method=RequestMethod.POST)
	public ResponseEntity logout(){
		SecurityContextHolder.clearContext();
		return new ResponseEntity("Logout Successfully!", HttpStatus.OK);
	}

	@PostMapping("/user/signUp")
	public User createUser(@RequestBody User user) {

        Set<UserRole> userRoles = new HashSet<>();
        user.setPassword(SecurityUtility.passwordEncoder().encode(user.getPassword()));

        Role role = roleRepository.findByRoleId(1);
        userRoles.add(new UserRole(user, role));

        User serviceUser = userService.createUser(user, userRoles);
        return serviceUser;
	}
}
