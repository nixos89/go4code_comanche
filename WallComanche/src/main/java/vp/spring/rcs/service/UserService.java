package vp.spring.rcs.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import vp.spring.rcs.data.UserRepository;
import vp.spring.rcs.model.User;

@Service
public class UserService {

	@Autowired
	UserRepository userRepository;

	public List<User> getAllUsers() {
		return userRepository.findAll();
	}

	public User getUser(Long id) {
		return userRepository.findOne(id);
	}

	public User save(User user) {
		return userRepository.save(user);
	}

	public boolean delete(Long id) {
		User user = getUser(id);
		if (user != null) {
			userRepository.delete(user);
			return true;
		} else
			return false;
	}
	
}
