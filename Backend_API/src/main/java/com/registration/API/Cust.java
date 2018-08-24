package com.registration.API;


	import java.util.Date;

	import javax.persistence.Entity;
	import javax.persistence.EntityListeners;
	import javax.persistence.GeneratedValue;
	import javax.persistence.GenerationType;
	import javax.persistence.Id;
	import javax.persistence.Table;
	import javax.persistence.Temporal;
	import javax.persistence.TemporalType;
	import org.springframework.data.annotation.LastModifiedDate;
	import org.springframework.data.jpa.domain.support.AuditingEntityListener;

	@Entity
	@Table(name = "customers")
	@EntityListeners(AuditingEntityListener.class)

	public class Cust {
		
		@Id
		@GeneratedValue(strategy=GenerationType.AUTO)
		
		private Long id;
		private String firstName;
		private String lastName;
		private String email;
		
		public Long getId() {
			return id;
		}

		public void setId(Long id) {
			this.id = id;
		}

		public String getFirstName() {
			return firstName;
		}

		public void setFirstName(String firstName) {
			this.firstName = firstName;
		}

		public String getLastName() {
			return lastName;
		}

		public void setLastName(String lastName) {
			this.lastName = lastName;
		}


		public String getEmail() {
			return email;
		}

		public void setEmail(String email) {
			this.email = email;
		}

		public Date getCreatedAt() {
			return createdAt;
		}

		public void setCreatedAt(Date createdAt) {
			this.createdAt = createdAt;
		}

		@Temporal(TemporalType.TIMESTAMP)
		@LastModifiedDate
		private Date createdAt;
		

	}



