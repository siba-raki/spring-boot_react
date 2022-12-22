package com.proyecto.JavaAvanzado.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.proyecto.JavaAvanzado.entidad.Ciudad;
import com.proyecto.JavaAvanzado.projection.ProjectionCiudad;

public interface RepositorioCiudad extends JpaRepository<Ciudad, Integer> {

	@Query("select idCiudad as idCiudad, ciudad as ciudad from Ciudad")
	public List<ProjectionCiudad> listAll();
}
