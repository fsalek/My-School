package fslk.com.apisc.service.impl;

import fslk.com.apisc.entities.Niveau;
import fslk.com.apisc.repository.NiveauRepository;
import fslk.com.apisc.service.NiveauService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class NiveauServiceImpl implements NiveauService {
    @Autowired
    private NiveauRepository niveauRepository;
    @Override
    public List<Niveau> listNiveaux() {
        return niveauRepository.findAll();
    }

    @Override
    public Niveau getNiveauId(Long id) {
        Optional<Niveau> niv = niveauRepository.findById(id);
        if (niv.isPresent()){
            return niv.get();
        }
        return null;
    }

    @Override
    public Niveau addNiveau(Niveau niveau) {
        return niveauRepository.save(niveau);
    }

    public Niveau modifyNiveau(Long id, Niveau niveau) {
        try {
            Niveau nivrc = this.getNiveauId(id);
            niveau.setId(nivrc.getId());
            return niveauRepository.save(nivrc);
        } catch (Exception e) {
            //TODO: handle exception
            throw new RuntimeException("Niveau not Saved an error occured");
        }
    }

    @Override
    public Niveau supprimerNiveau(long id) {
        Niveau newClass = niveauRepository.getNiveauById(id);
        if(newClass!=null){
            niveauRepository.deleteById(id);
        }
        return newClass;
    }


}
