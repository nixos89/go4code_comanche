package vp.spring.rcs.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import vp.spring.rcs.data.SecurityAuthorityRepository;
import vp.spring.rcs.model.SecurityAuthority;


@Service
public class SecurityAuthorityService {
	
	@Autowired	
	SecurityAuthorityRepository securityAuthorityRepository;
	

	public List<SecurityAuthority> getAllPosts() {
		return securityAuthorityRepository.findAll();
	}

	public SecurityAuthority getPost(Long id) {
		return securityAuthorityRepository.findOne(id);
	}

	public SecurityAuthority save(SecurityAuthority post) {
		return securityAuthorityRepository.save(post);
	}

	public boolean delete(Long id) {
		SecurityAuthority post = getPost(id);
		if (post != null) {
			securityAuthorityRepository.delete(post);
			return true;
		} else
			return false;
	}
	
	
	
}
