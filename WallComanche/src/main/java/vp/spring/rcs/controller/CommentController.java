package vp.spring.rcs.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import vp.spring.rcs.model.Comment;
import vp.spring.rcs.service.CommentService;

@Controller
public class CommentController {

	@Autowired
	CommentService commentService;

	@GetMapping(value = "/api/{postId}/comments")
	public ResponseEntity<List<Comment>> getAllCommentsForPostId(@PathVariable Long postId) {
		List<Comment> comments = commentService.getAllCommentsForPostId(postId);
		if (comments.isEmpty()) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		} else {
			return new ResponseEntity<>(comments, HttpStatus.OK);
		}
	}

	@GetMapping(value = "/api/{postId}/comments/{commentId}")
	public ResponseEntity<Comment> getComment(@PathVariable Long postId, @PathVariable Long commentId) {
		Comment comment = commentService.getCommentForPostIdAndCommentId(postId, commentId);
		if (comment != null)
			return new ResponseEntity<>(comment, HttpStatus.OK);
		else
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}

	@PostMapping(value = "/api/{postId}/comments")
	public ResponseEntity<Comment> saveComment(@PathVariable Long postId, @RequestBody Comment comment) {
		List<Comment> comments = commentService.getAllCommentsForPostId(postId);
		if (!comments.contains(comment)) {
			Comment retVal = commentService.save(comment);
			return new ResponseEntity<>(retVal, HttpStatus.OK);
		} else
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}

	@PutMapping(value = "/api/{postId}/comments/{commentId}")
	public ResponseEntity<Comment> updateComment(@PathVariable Long postId, @PathVariable Long commentId, @RequestBody Comment comment) {
		Comment foundComment = commentService.getCommentForPostIdAndCommentId(postId, commentId);
		if (foundComment != null) {
			foundComment.setId(commentId);
			foundComment.setCommentText(comment.getCommentText());
			foundComment.setUser(comment.getUser());
			foundComment.setPost(comment.getPost());
			Comment retVal = commentService.save(foundComment);
			return new ResponseEntity<>(retVal, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@DeleteMapping(value = "/api/{postId}/comments/{commentId}")
	public ResponseEntity<Boolean> deleteComment(@PathVariable Long postId, @PathVariable Long commentId) {
		Comment foundComment = commentService.getCommentForPostIdAndCommentId(postId, commentId);
		boolean isDeleted = false;
		if (foundComment != null) {
			isDeleted = commentService.delete(postId, commentId);
			return new ResponseEntity<>(isDeleted, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

}
