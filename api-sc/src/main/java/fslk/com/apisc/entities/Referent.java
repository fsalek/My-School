package fslk.com.apisc.entities;

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
public class Referent implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String firstName;
    private String lastName;
    private String phone;
    private String email;
    private String adresse;
    private String lienEleve;
    // Un professeureur peut enseigner 1 ou plusieurs matiere
    // Bien penser à instancier la liste des matiere
    // Sinon NullPointException
    @OneToMany(mappedBy = "referent", fetch = FetchType.EAGER)
    @JsonManagedReference
    private List<Eleve> eleves;
}
