package vp.spring.rcs.data;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import vp.spring.rcs.model.Comment;

@Repository
public interface CommentRepository extends JpaRepository<Comment, Long> {
	public List<Comment> findAllCommentByPostId(Long id);
	
}
