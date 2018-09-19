<<<<<<< HEAD
package vp.spring.rcs.model;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

@Entity
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, 
					property="id", scope = UserSecurityAuthority.class)
public class UserSecurityAuthority {

	@Id
	@GeneratedValue
	private Long id;

	@ManyToOne(cascade = CascadeType.REFRESH)
	private User user;

	@ManyToOne(cascade = CascadeType.REFRESH)
	private SecurityAuthority securityAuthority;

	public UserSecurityAuthority() {

	}

	public UserSecurityAuthority(User user, SecurityAuthority securityAuthority) {
		this.user = user;
		this.securityAuthority = securityAuthority;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public SecurityAuthority getSecurityAuthority() {
		return securityAuthority;
	}

	public void setSecurityAuthority(SecurityAuthority securityAuthority) {
		this.securityAuthority = securityAuthority;
	}

//	@Override
//	public int hashCode() {
//		return (Long)id.hashCode();
//	}

//	@Override
//	public boolean equals(Object obj) {
//		if (this == obj)
//			return true;
//		if (obj == null)
//			return false;
//		if (getClass() != obj.getClass())
//			return false;
//		UserSecurityAuthority other = (UserSecurityAuthority) obj;
//		return other.id == id;
//	}

}
=======
package vp.spring.rcs.model;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

@Entity
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property="id", scope = UserSecurityAuthority.class)
public class UserSecurityAuthority {

	@Id
	@GeneratedValue
	private Long id;

	@ManyToOne(cascade = CascadeType.REFRESH)
	private User user;

	@ManyToOne(cascade = CascadeType.REFRESH)
	private SecurityAuthority securityAuthority;

	public UserSecurityAuthority() {

	}

	public UserSecurityAuthority(User user, SecurityAuthority securityAuthority) {
		this.user = user;
		this.securityAuthority = securityAuthority;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public SecurityAuthority getSecurityAuthority() {
		return securityAuthority;
	}

	public void setSecurityAuthority(SecurityAuthority securityAuthority) {
		this.securityAuthority = securityAuthority;
	}

//	@Override
//	public int hashCode() {
//		return (Long)id.hashCode();
//	}

//	@Override
//	public boolean equals(Object obj) {
//		if (this == obj)
//			return true;
//		if (obj == null)
//			return false;
//		if (getClass() != obj.getClass())
//			return false;
//		UserSecurityAuthority other = (UserSecurityAuthority) obj;
//		return other.id == id;
//	}

}
>>>>>>> branch 'master' of https://github.com/nixos89/go4code_comanche.git
