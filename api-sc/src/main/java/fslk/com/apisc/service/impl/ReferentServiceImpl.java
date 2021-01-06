package fslk.com.apisc.service.impl;

import fslk.com.apisc.entities.Referent;
import fslk.com.apisc.repository.ReferentRepository;
import fslk.com.apisc.service.ReferentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ReferentServiceImpl implements ReferentService {
    @Autowired
    private ReferentRepository referentRepository;
    @Override
    public List<Referent> listReferents() {
        return referentRepository.findAll();
    }

    @Override
    public Referent getReferentId(Long id) {
        Optional<Referent> ref = referentRepository.findById(id);
        if (ref.isPresent()){
            return ref.get();
        }
        return null;
    }

    @Override
    public Referent addReferent(Referent referent) {
        return referentRepository.save(referent);
    }

    @Override
    public Referent modifyReferent(Long id, Referent referent) {
        return referentRepository.save(referent);
    }

    @Override
    public Referent supprimerReferent(long id) {
        Referent ref = referentRepository.findById(id).get();
        if (ref!= null){
            referentRepository.deleteById(id);
        }
        return ref;
    }
}
