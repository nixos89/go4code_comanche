package vp.spring.rcs;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import vp.spring.rcs.model.Comment;
import vp.spring.rcs.model.Post;
import vp.spring.rcs.model.SecurityAuthority;
import vp.spring.rcs.model.User;
import vp.spring.rcs.model.UserSecurityAuthority;
import vp.spring.rcs.service.CommentService;
import vp.spring.rcs.service.PostService;
import vp.spring.rcs.service.SecurityAuthorityService;
import vp.spring.rcs.service.UserService;

@Component
public class TestData {

	@Autowired
	UserService userService;

	@Autowired
	CommentService commentService;

	@Autowired
	private SecurityAuthorityService secAuthService;
	
	@Bean
	PasswordEncoder getEncoder() {
	    return new BCryptPasswordEncoder();
	}
	


	/*
	 * Inicijalizacija testnih podataka.
	 */
	@Autowired
	PostService postService;

	// Inicijalizacija testnih podataka.
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


		// SimpleDateFormat sdf = new SimpleDateFormat("yyyy/MM/dd");
		// String cur_date = sdf.format(new Date());

		// DateFormat formatter1 = new SimpleDateFormat("2018/09/05");
		// Date dateFormat =
		// DateTimeFormatter formatter = new DateTimeFormatterBuilder();
		// LocalDate localDate = new LocalDateParser(formatter);
		Date dateTime1 = null;
		Date dateTime2 = null;
		try {
			String str1 = "2018-05-12 11:03:15";
			String str2 = "2018-04-15 23:05:23";
			// DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd
			// HH:mm:ss");
			// LocalDate dateTime1 = LocalDate.parse(str1, formatter);
			SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

			dateTime1 = (Date) sdf.parse(str1);
			dateTime2 = (Date) sdf.parse(str2);
		} catch (Exception e) {
			e.printStackTrace();
		}

		Post post1 = new Post(user1, new Date(), dateTime1, "Ovo je neki tekst", 5, 4.5);
		postService.save(post1);

	

		Post post2 = new Post(user2, new Date(), dateTime2, "Ovo je neki novi tekst", 2, 3.5);
		postService.save(post2);
		
		Comment comment1 = new Comment("Yo hot mama!", user1, post1);
		commentService.save(comment1);
		
		Comment comment2 = new Comment("Al je neki!", user2, post1);
		commentService.save(comment2);
		
		Comment comment3 = new Comment("Sta je ovo!", user1, post2);
		commentService.save(comment3);
		
		Comment comment4 = new Comment("Uf sto je dobar!", user2, post1);
		commentService.save(comment4);
		
	}

}
