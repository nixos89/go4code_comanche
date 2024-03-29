package vp.spring.rcs.data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import vp.spring.rcs.model.SecurityAuthority;

@Repository
public interface SecurityAuthorityRepository extends JpaRepository<SecurityAuthority, Long>{

}
