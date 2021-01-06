package fslk.com.apisc.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.List;

@Entity
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@Data @NoArgsConstructor
public class Eleve implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id ;
    //Nom de l'élève
    private String firstName ;
    //Prénom de l'élève
    private String lastName ;
    private String genre;
    @DateTimeFormat(pattern = "dd/MM/yyyy")
    private Date dateNaissance;
    private String adresse;
    private float moyenne;
    private float moyenneGeneral;
    private String observations;
    private String photoName;
    private Boolean avatar = false;
    @ManyToOne
    @JsonBackReference
    private Classe classe;
    @ManyToOne
    @JsonBackReference
    private Referent referent;
    @OneToMany(mappedBy = "eleve", fetch = FetchType.EAGER)
    @JsonManagedReference
    private List<Matiere> matieres;

    public Eleve(String firstName, String lastName) {
        super();
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
