package fslk.com.apisc.security.auth;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.Collection;
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class AppRole  implements Serializable {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;
        private  String roleName;
        /*@ManyToMany
        private Collection<AppUser> users = new ArrayList<>();*/

        public AppRole(String roleName) {
            this.roleName = roleName;
        }
}
