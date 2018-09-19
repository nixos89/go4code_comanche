package vp.spring.rcs.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import vp.spring.rcs.data.CommentRepository;
import vp.spring.rcs.model.Comment;

@Service
public class CommentService {

	@Autowired
	CommentRepository commentRepository;

	public List<Comment> getAllComments() {
		return commentRepository.findAll();
	}

	public Comment getComment(Long id) {
		return commentRepository.findOne(id);
	}

	public Comment save(Comment comment) {
		return commentRepository.save(comment);
	}

	public boolean delete(Long id) {
		Comment comment = getComment(id);
		if (comment != null) {
			commentRepository.delete(comment);
			return true;
		} else
			return false;
	}

}
