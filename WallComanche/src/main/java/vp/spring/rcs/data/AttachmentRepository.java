package vp.spring.rcs.data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import vp.spring.rcs.model.Attachment;

@Repository
public interface AttachmentRepository extends JpaRepository<Attachment, Long>{
	
}
