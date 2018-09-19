package vp.spring.rcs.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import vp.spring.rcs.data.SecurityAuthorityRepository;

@Service
public class SecurityAuthorityService {
	
	@Autowired
	SecurityAuthorityRepository securityAuthorityRepository;
	
	
	
}
