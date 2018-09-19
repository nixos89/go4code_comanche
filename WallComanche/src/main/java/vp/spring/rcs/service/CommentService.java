package vp.spring.rcs.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import vp.spring.rcs.data.CommentRepository;
import vp.spring.rcs.data.PostRepository;
import vp.spring.rcs.model.Comment;
import vp.spring.rcs.model.Post;

@Service
public class CommentService {

	@Autowired
	PostRepository postRepository;
	
	@Autowired
	CommentRepository commentRepository;

	public List<Comment> getAllCommentsForPostId(Long postId) {
		return commentRepository.findAllCommentByPostId(postId);
	}

	public Comment getCommentForPostIdAndCommentId(Long postId, Long commentId) {
		Post post = postRepository.findOne(postId);
		for(Comment c: post.getComments()) {
			if(c.getId() == commentId) {
				return c;
			}
		} 
		return null;
	}

	public Comment save(Comment comment) {
		return commentRepository.save(comment);
	}

	public boolean delete(Long postId, Long commentId) {
		Comment comment = getCommentForPostIdAndCommentId(postId, commentId);
		if (comment != null) {
			commentRepository.delete(comment);
			return true;
		} else
			return false;
	}

}
