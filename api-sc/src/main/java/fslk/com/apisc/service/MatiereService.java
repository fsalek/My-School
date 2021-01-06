package fslk.com.apisc.service;


import fslk.com.apisc.entities.Matiere;

import java.util.List;

public interface MatiereService {
	public List<Matiere> listMatieres();
	public Matiere getMatiereId(Long id);
	//creer une matiere à une matiere
	public Matiere addMatiere(Matiere matiere);
	//modifier une matiere à une matiere
	public Matiere modifyMatiere(Long id, Matiere matiere);
	//Retire une matiere à une matiere
	public Matiere supprimerMatiere(long id);
}
