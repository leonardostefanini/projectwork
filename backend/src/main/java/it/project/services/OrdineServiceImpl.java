package it.project.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import it.project.entities.Ordine;
import it.project.repos.OrdineDAO;

@Service
public class OrdineServiceImpl implements OrdineService {

	@Autowired
	
	OrdineDAO ordineDao;
	
	
	@Override
	public Ordine add(Ordine o) {
		// TODO Auto-generated method stub
		return ordineDao.save(o);
	}

	@Override
	public Ordine getById(int id) {
		// TODO Auto-generated method stub
		return ordineDao.findById(id).get();
	}

	@Override
	public List<Ordine> getAll() {
		// TODO Auto-generated method stub
		return ordineDao.findAll();
	}

	@Override
	public Ordine update(Ordine o) {
		// TODO Auto-generated method stub
		return ordineDao.save(o);
	}

	@Override
	public void delete(int id) {
		ordineDao.deleteById(id);

	}

}
