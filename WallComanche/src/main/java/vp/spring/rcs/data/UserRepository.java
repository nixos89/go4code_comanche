package vp.spring.rcs.data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import vp.spring.rcs.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

}
