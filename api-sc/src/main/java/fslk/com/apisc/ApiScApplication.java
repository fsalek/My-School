package fslk.com.apisc;

import fslk.com.apisc.security.auth.AppRole;
import fslk.com.apisc.security.auth.AppUser;
import fslk.com.apisc.security.services.AccountService;
import fslk.com.apisc.service.impl.ClasseServiceImpl;
import fslk.com.apisc.service.impl.EleveServiceImpl;
import fslk.com.apisc.service.impl.NiveauServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@SpringBootApplication
public class ApiScApplication implements CommandLineRunner {
    @Autowired
    private AccountService accountService;
    @Autowired
    private ClasseServiceImpl classeServiceimpl;
    @Autowired
    private EleveServiceImpl eleveServiceImpl;
    @Autowired
    private NiveauServiceImpl niveauServiceImpl;

    public static void main(String[] args) {
        SpringApplication.run(ApiScApplication.class, args);
    }
    @Bean
    public BCryptPasswordEncoder getBCPE(){
        return new BCryptPasswordEncoder();
    }

    @Override
    public void run(String... args) throws Exception {

    /*
        accountService.saveUser(new AppUser("admin","1234"));
        accountService.saveUser(new AppUser("user","1234"));
        accountService.saveRole(new AppRole("ADMIN"));
        accountService.saveRole(new AppRole("USER"));
        accountService.addRoleToUser("admin", "ADMIN");
        accountService.addRoleToUser("admin", "USER");
        accountService.addRoleToUser("user", "USER");

        Random rnd = new Random();
        niveauServiceImpl.addNiveau(new Niveau("6ème"));
        niveauServiceImpl.addNiveau(new Niveau("7ème"));
        niveauServiceImpl.addNiveau(new Niveau("8ème"));
        niveauServiceImpl.addNiveau(new Niveau("3ème"));
        niveauServiceImpl.addNiveau(new Niveau("2nd"));
        niveauServiceImpl.addNiveau(new Niveau("1ème"));
        niveauServiceImpl.addNiveau(new Niveau("Terminal"));

        niveauServiceImpl.listNiveaux().forEach((niv->{
            for (int i = 0; i<3; i++){
                Classe clas = new Classe();
                clas.setName(RandomString.make(18));
                clas.setNiv(niv);
                classeServiceimpl.addClasse(clas);
            }
            classeServiceimpl.listClasses().forEach(classe -> {
                for (int j = 0; j<5; j++){
                    Eleve elev = new Eleve();
                    elev.setFirstName(RandomString.make(18));
                    elev.setLastName(RandomString.make(18));
                    elev.setGenre(RandomString.make(3));
                    elev.setSelected(rnd.nextBoolean());
                    elev.setPhotoName("Unknown.png");
                    elev.setClasse(classe);
                    eleveServiceImpl.addEleve(elev);
                }
            });
        }));*/

    }

}
