package fslk.com.apisc.service;


import fslk.com.apisc.entities.Professeur;

import java.util.List;

public interface ProfesseurService {
	public List<Professeur> listProfesseurs();
	public Professeur getProfesseurId(Long id);
	//creer une professeur à une professeur
	public Professeur addProfesseur(Professeur professeur);
	//modifier une professeur à une professeur
	public Professeur modifyProfesseur(Long id, Professeur professeur);
	//Retire une professeur à une professeur
	public Professeur supprimerProfesseur(long id);
	

	
	
	
}
