package com.proyecto.JavaAvanzado.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.proyecto.JavaAvanzado.entidad.Opinion;
import com.proyecto.JavaAvanzado.projection.ProjectionOpinion;

public interface RepositorioOpinion extends JpaRepository<Opinion, Integer>{
	
	//LISTA DE TODAS LAS OPINIONES
	@Query("select o.idOpinion as idOpinion, o.opinion as opinion, o.calificacion as calificacion, CONCAT(u.nombre, ' ', u.apellido) as usuario,"
			+ "h.nombreHotel as hotel from Opinion o"
			+ " join Usuario u"
			+ " on u.idUsuario = o.usuario"
			+ " join Hotel h"
			+ " on h.idHotel = o.hotel")
	public List<ProjectionOpinion> listAll();
	
	//LISTA DE TODAS LAS OPINIONES POR HOTEL
	@Query("select o.idOpinion as idOpinion, o.opinion as opinion, o.calificacion as calificacion, CONCAT(u.nombre, ' ', u.apellido) as usuario,"
			+ "h.nombreHotel as hotel from Opinion o"
			+ " join Usuario u"
			+ " on u.idUsuario = o.usuario"
			+ " join Hotel h"
			+ " on h.idHotel = o.hotel"
			+ " where h.idHotel = ?1")
	public List<ProjectionOpinion> listOpinionHotel(int hotel);
	
	//LISTA DE TODAS LAS OPINIONES POR USUARIO
	@Query("select o.idOpinion as idOpinion, o.opinion as opinion, o.calificacion as calificacion, CONCAT(u.nombre, ' ', u.apellido) as usuario,"
			+ "h.nombreHotel as hotel from Opinion o"
			+ " join Usuario u"
			+ " on u.idUsuario = o.usuario"
			+ " join Hotel h"
			+ " on h.idHotel = o.hotel"
			+ " where u.idUsuario = ?1")
	public List<ProjectionOpinion> listOpinionUsuario(int usuario);
}
