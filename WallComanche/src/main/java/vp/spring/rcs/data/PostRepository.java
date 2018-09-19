package vp.spring.rcs.data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import vp.spring.rcs.model.Post;

@Repository
public interface PostRepository extends JpaRepository<Post, Long>{
	
}
