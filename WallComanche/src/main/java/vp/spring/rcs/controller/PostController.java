<<<<<<< HEAD
package vp.spring.rcs.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import vp.spring.rcs.model.Post;
import vp.spring.rcs.service.PostService;

@Controller
@RequestMapping(value = "/api/posts")
public class PostController {

	@Autowired
	PostService postService;

	@GetMapping
	public ResponseEntity<Page<Post>> getAllPagePosts(Pageable pageable) {
		Page<Post> pagePosts = postService.getAllPagePosts(pageable);
		return new ResponseEntity<>(pagePosts, HttpStatus.OK);
	}

	@GetMapping(value = "/{id}")
	public ResponseEntity<Post> getPost(@PathVariable Long id) {
		Post post = postService.getPost(id);
		if (post != null)
			return new ResponseEntity<>(post, HttpStatus.OK);
		else
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}

	@PostMapping()
	public ResponseEntity<Post> savePost(@RequestBody Post post) {
		List<Post> posts = postService.getAllPosts();
		if (!posts.contains(post)) {
			Post retVal = postService.save(post);
			return new ResponseEntity<>(retVal, HttpStatus.OK);
		} else
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}

	@PutMapping(value = "/{id}")
	public ResponseEntity<Post> updatePost(@PathVariable Long id, @RequestBody Post post) {
		Post foundPost = postService.getPost(id);
		if (foundPost != null) {
			foundPost.setId(id);
			foundPost.setText(post.getText());
			foundPost.setDatum(post.getDatum());
			foundPost.setTime(post.getTime());
			foundPost.setRating(post.getRating());
			foundPost.setUser(post.getUser());
			foundPost.setAttachments(post.getAttachments());
			foundPost.setComments(post.getComments());
			foundPost.setViewNumber(post.getViewNumber() + 1);
			Post retVal = postService.save(foundPost);
			return new ResponseEntity<>(retVal, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@DeleteMapping(value = "/{id}")
	public ResponseEntity<Void> deletePost(@PathVariable Long id) {
		Post foundPost = postService.getPost(id);
		if (foundPost != null) {
			postService.delete(id);
			return new ResponseEntity<>(HttpStatus.OK);
		} else
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);

	}

}
=======
package vp.spring.rcs.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import vp.spring.rcs.model.Post;
import vp.spring.rcs.service.PostService;

@Controller
@RequestMapping(value = "/api/posts")
public class PostController {

	@Autowired
	PostService postService;

	@GetMapping
	public ResponseEntity<Page<Post>> getAllPagePosts(Pageable pageable) {
		Page<Post> pagePosts = postService.getAllPagePosts(pageable);
		return new ResponseEntity<>(pagePosts, HttpStatus.OK);
	}

	@GetMapping(value = "/{id}")
	public ResponseEntity<Post> getPost(@PathVariable Long id) {
		Post post = postService.getPost(id);
		if (post != null)
			return new ResponseEntity<>(post, HttpStatus.OK);
		else
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}

	@PostMapping()
	public ResponseEntity<Post> savePost(@RequestBody Post post) {
		List<Post> posts = postService.getAllPosts();
		if (!posts.contains(post)) {
			postService.save(post);
			return new ResponseEntity<>(post, HttpStatus.OK);
		} else
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}

	@PutMapping(value = "/{id}")
	public ResponseEntity<Post> updatePost(@PathVariable Long id, @RequestBody Post post) {
		Post foundPost = postService.getPost(id);
		if (foundPost != null) {
			foundPost.setId(id);
			foundPost.setText(post.getText());
			foundPost.setDatum(post.getDatum());
			foundPost.setTime(post.getTime());
			foundPost.setRating(post.getRating());
			foundPost.setUser(post.getUser());
			foundPost.setAttachments(post.getAttachments());
			foundPost.setComments(post.getComments());
			foundPost.setViewNumber(post.getViewNumber() + 1);
			
			Post retVal = postService.save(foundPost);
			return new ResponseEntity<>(retVal, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@DeleteMapping(value = "/{id}")
	public ResponseEntity<Void> deletePost(@PathVariable Long id) {
		Post foundPost = postService.getPost(id);
		if (foundPost != null) {
			postService.delete(id);
			return new ResponseEntity<>(HttpStatus.OK);
		} else
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);

	}

}
>>>>>>> branch 'master' of https://github.com/nixos89/go4code_comanche.git
