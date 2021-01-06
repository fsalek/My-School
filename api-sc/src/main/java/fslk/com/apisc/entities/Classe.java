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
public class Classe implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String nbEleves;
    @ManyToOne
    @JsonBackReference
    private Niveau niveau;
    @ManyToMany(mappedBy = "classes")
    private List<Professeur> professeurs;
    @OneToMany(mappedBy = "classe", fetch = FetchType.EAGER)
    @JsonManagedReference
    private List<Eleve> eleves;


    public Classe(String name) {
        super();
        this.name = name;
    }


}
