package vp.spring.rcs.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import vp.spring.rcs.dto.ChangePasswordDTO;
import vp.spring.rcs.model.User;
import vp.spring.rcs.service.UserService;

@Controller
@RequestMapping(value = "/api/users")
public class UserController {

	@Autowired
	UserService userService;

	@Bean
	PasswordEncoder getEncoder() {
		return new BCryptPasswordEncoder();
	}

	@GetMapping
	public ResponseEntity<Page<User>> getAllPagePosts(Pageable pageable) {
		Page<User> pageUsers = userService.getAllPageUsers(pageable);
		return new ResponseEntity<>(pageUsers, HttpStatus.OK);
	}

	@GetMapping(value = "/{id}")
	public ResponseEntity<User> getPost(@PathVariable Long id) {
		User user = userService.getUser(id);
		if (user != null)
			return new ResponseEntity<>(user, HttpStatus.OK);
		else
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}

	@PostMapping()
	public ResponseEntity<User> saveUser(@RequestBody User user) {
		List<User> users = userService.getAllUsers();
		if (!users.contains(user)) {
			userService.save(user);
			return new ResponseEntity<>(user, HttpStatus.OK);
		} else
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}

	@PutMapping(value = "/{id}")
	public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User user) {
		User foundUser = userService.getUser(id);
		if (foundUser != null) {
			foundUser.setId(id);
			foundUser.setFirstName(user.getFirstName());
			foundUser.setLastName(user.getLastName());
			foundUser.setEmail(user.getEmail());
			// foundUser.setPassword(user.getPassword());
			userService.save(foundUser);
			return new ResponseEntity<>(foundUser, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@PutMapping(value = "/changePassword/{id}")
	public ResponseEntity<User> updateUserPassword(@PathVariable Long id, @RequestBody ChangePasswordDTO cpDTO) {
		User foundUser = userService.getUser(id);
		if (foundUser != null) {
			if (foundUser.getPassword().equals(getEncoder().encode(cpDTO.getOldPassword()))) {
				String newPassword = cpDTO.getNewPassword();
				String confirmNewPassword = cpDTO.getConfirmNewPassword();
				if (newPassword.equals(confirmNewPassword)) {
					foundUser.setPassword(getEncoder().encode(newPassword));
					userService.save(foundUser);
				}
			}			
			userService.save(foundUser);
			return new ResponseEntity<>(foundUser, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@DeleteMapping(value = "/{id}")
	public ResponseEntity<Void> deletePost(@PathVariable Long id) {
		User foundUser = userService.getUser(id);
		if (foundUser != null) {
			userService.delete(id);
			return new ResponseEntity<>(HttpStatus.OK);
		} else
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);

	}

}
