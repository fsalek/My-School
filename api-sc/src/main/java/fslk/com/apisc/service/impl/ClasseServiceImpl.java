package fslk.com.apisc.service.impl;

import fslk.com.apisc.entities.Classe;
import fslk.com.apisc.repository.ClasseRepository;
import fslk.com.apisc.service.ClasseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ClasseServiceImpl implements ClasseService {
    @Autowired
    private ClasseRepository classeRepository;

    @Override
    public List<Classe> listClasses() {
        return classeRepository.findAll();
    }

    @Override
    public Classe getClasseId(Long id) {
        Optional<Classe> clas = classeRepository.findById(id);
        if(clas.isPresent()){
            return clas.get();
        }
        return null;
    }

    @Override
    public Classe addClasse(Classe classe) {
        return classeRepository.save(classe);
    }

    @Override
    public Classe modifyClasse(Long id, Classe classe) {
        try {
            Classe classtSrc = this.getClasseId(id);
            classe.setId(classtSrc.getId());
            return classeRepository.save(classtSrc);
        } catch (Exception e) {
            //TODO: handle exception
            throw new RuntimeException("Classe not Saved an error occured");
        }
    }

    @Override
    public Classe supprimerClasse(long id) {
        Classe newClass = classeRepository.getClasseById(id);
        if(newClass!=null){
            classeRepository.deleteById(id);
        }
        return newClass;
    }
}
