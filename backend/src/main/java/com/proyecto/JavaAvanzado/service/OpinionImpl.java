package com.proyecto.JavaAvanzado.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.proyecto.JavaAvanzado.entidad.Opinion;
import com.proyecto.JavaAvanzado.projection.ProjectionOpinion;
import com.proyecto.JavaAvanzado.repository.RepositorioOpinion;

@Service
public class OpinionImpl implements Servicio<Opinion>{

	
	@Autowired
	private RepositorioOpinion repositorio;
	
	@Override
	public Opinion insertar(Opinion opinion) {
		return repositorio.save(opinion);
	}

	@Override
	public Opinion actualizar(Opinion opinion) {
		return repositorio.save(opinion);
	}

	public List<ProjectionOpinion> listAll() {
		return repositorio.listAll();
	}

	public List<ProjectionOpinion> listOpinionHotel(int hotel) {
		return repositorio.listOpinionHotel(hotel);
	}
	
	public List<ProjectionOpinion> listOpinionUsuario(int usuario) {
		return repositorio.listOpinionUsuario(usuario);
	}
	
	@Override
	public void eliminar(Opinion opinion) {
		repositorio.delete(opinion);
	}
}
