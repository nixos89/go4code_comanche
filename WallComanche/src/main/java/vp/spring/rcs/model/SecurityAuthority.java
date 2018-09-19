package vp.spring.rcs.model;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class SecurityAuthority {

	@Id
	@GeneratedValue
	private Long id;

	private String name;

	@ManyToOne(cascade = CascadeType.REFRESH)
	private Set<UserSecurityAuthority> users = new HashSet<UserSecurityAuthority>();

	public SecurityAuthority() {
	}

	public SecurityAuthority(String name) {
		this.name = name;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@Override
	public int hashCode() {
		return id.hashCode();
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		SecurityAuthority other = (SecurityAuthority) obj;
		return other.id == id;
	}

}
