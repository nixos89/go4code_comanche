package vp.spring.rcs;

import java.util.HashSet;
import java.util.Set;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import vp.spring.rcs.model.SecurityAuthority;
import vp.spring.rcs.model.User;
import vp.spring.rcs.model.UserSecurityAuthority;
import vp.spring.rcs.service.SecurityAuthorityService;
import vp.spring.rcs.service.UserService;

@Component
public class TestData {

	@Autowired
	private UserService userService;

	@Autowired
	private SecurityAuthorityService secAuthService;
	
	@Bean
	PasswordEncoder getEncoder() {
	    return new BCryptPasswordEncoder();
	}

	/*
	 * Inicijalizacija testnih podataka.
	 */
	@PostConstruct
	public void init() {
		
		
		
		SecurityAuthority temp = new SecurityAuthority("ROLE_ADMINISTRATOR");
		SecurityAuthority role1 = secAuthService.save(temp);

		temp = new SecurityAuthority("ROLE_USER");
		SecurityAuthority role2 = secAuthService.save(temp);

		User foo = new User("jpas", getEncoder().encode("jpas"), "Johny", "Bravo", "jbravo@gmail.com");
		Set<UserSecurityAuthority> roles1 = new HashSet<>();

		User user1 = userService.save(foo);
		roles1.add(new UserSecurityAuthority(user1, role1));

		foo = new User("jugg", getEncoder().encode("jugg"), "Jurnero", "Bravemask", "jurrnerro@gmail.com");
		Set<UserSecurityAuthority> roles2 = new HashSet<>();
		User user2 = userService.save(foo);
		roles2.add(new UserSecurityAuthority(user2, role1));
		roles2.add(new UserSecurityAuthority(user2, role2));

		foo = new User("sven", getEncoder().encode("sven"), "Sven", "StormHammer", "pwn@gmail.com");
		Set<UserSecurityAuthority> roles3 = new HashSet<>();
		User user3 = userService.save(foo);
		roles3.add(new UserSecurityAuthority(user3, role2));

	}

}
