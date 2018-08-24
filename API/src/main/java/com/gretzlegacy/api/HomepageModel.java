package com.gretzlegacy.api;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "website")
public class HomepageModel {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	
	private Integer idweb;
	private String title;
	private String description;
	public Integer getIdweb() {
		return idweb;
	}
	public void setIdweb(Integer idweb) {
		this.idweb = idweb;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}

}

