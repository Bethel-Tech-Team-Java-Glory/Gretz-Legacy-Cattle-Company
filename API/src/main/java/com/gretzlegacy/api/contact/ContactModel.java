package com.gretzlegacy.api.contact;

import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@Table(name = "contact")
@EntityListeners(AuditingEntityListener.class)


public class ContactModel {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	
	
	private Integer contact_id;
	
	
	private String name;
	private String phone;
	private String comment;
	
	

	public Integer getId() {
		return contact_id;
	}

	public void setId(Integer id) {
		this.contact_id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}
	
	public String getComment() {
		return comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}
	
}