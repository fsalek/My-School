package fslk.com.apisc.service;


import fslk.com.apisc.entities.Classe;

import java.util.List;


public interface ClasseService {
	 public List<Classe> listClasses();
	 public Classe getClasseId(Long id);
	//creer une classe à une classe
	public Classe addClasse(Classe classe);
	//modifier une classe à une classe
	public Classe modifyClasse(Long id, Classe classe);
	//Retire une classe à une classe
	 public Classe supprimerClasse(long id);


}
