package vp.spring.rcs.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import vp.spring.rcs.data.AttachmentRepository;
import vp.spring.rcs.model.Attachment;

@Service
public class AttachmentService {

	@Autowired
	AttachmentRepository attachmentRepository;

	public List<Attachment> getAllAttachments() {
		return attachmentRepository.findAll();
	}

	public Attachment getAttachment(Long id) {
		return attachmentRepository.findOne(id);
	}

	public Attachment save(Attachment attachment) {
		return attachmentRepository.save(attachment);
	}

	public boolean delete(Long id) {
		Attachment attachment = getAttachment(id);
		if (attachment != null) {
			attachmentRepository.delete(attachment);
			return true;
		} else
			return false;
	}
	
	

}
