package fslk.com.apisc.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@Data @NoArgsConstructor @AllArgsConstructor @ToString
public class Matiere implements Serializable {
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String name;
	private int coeficient;
	private int moyenne;
	@OneToMany(mappedBy = "matiere", fetch = FetchType.EAGER)
	@JsonManagedReference
	private List<Professeur> professeurs;
	@ManyToOne
	@JsonBackReference
	private Eleve eleve;

	
	
	

}
