package vp.spring.rcs.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import vp.spring.rcs.data.PostRepository;
import vp.spring.rcs.model.Post;

@Service
public class PostService {
	
	@Autowired
	PostRepository postRepository;

	public Page<Post> getAllPagePosts(Pageable pageble){
		return postRepository.findAll(pageble);
	}
	
	public List<Post> getAllPosts() {
		return postRepository.findAll();
	}

	public Post getPost(Long id) {
		return postRepository.findOne(id);
	}

	public Post save(Post post) {
		return postRepository.save(post);
	}

	public boolean delete(Long id) {
		Post post = getPost(id);
		if (post != null) {
			postRepository.delete(post);
			return true;
		} else
			return false;
	}


}
