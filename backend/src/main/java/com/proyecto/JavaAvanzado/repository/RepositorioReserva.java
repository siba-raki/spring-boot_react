package com.proyecto.JavaAvanzado.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.proyecto.JavaAvanzado.entidad.Reserva;
import com.proyecto.JavaAvanzado.projection.ProjectionReserva;

public interface RepositorioReserva extends JpaRepository<Reserva, Integer>{
	
	@Query("select r.idReserva as idReserva, CONCAT(u.nombre, ' ', u.apellido) as usuario, h.nombreHotel as hotel,"
			+ "ha.numHabitacion as habitacion, r.reservaDesde as reservaDesde, r.reservaHasta as reservaHasta, r.estado as estado"
			+ " from Reserva r"
			+ " join Usuario u"
			+ " on u.idUsuario = r.usuario"
			+ " join Habitacion ha"
			+ " on ha.idHabitacion = r.habitacion"
			+ " join Hotel h"
			+ " on h.idHotel = ha.hotel")
	public List<ProjectionReserva> listAll();
	
	//VERIFICAR LA RESERVA
	
	//RESERVAS POR USUARIO
	@Query("select r.idReserva as idReserva, CONCAT(u.nombre, ' ', u.apellido) as usuario, h.nombreHotel as hotel,"
			+ "ha.numHabitacion as habitacion, r.reservaDesde as reservaDesde, r.reservaHasta as reservaHasta, r.estado as estado"
			+ " from Reserva r"
			+ " join Usuario u"
			+ " on u.idUsuario = r.usuario"
			+ " join Habitacion ha"
			+ " on ha.idHabitacion = r.habitacion"
			+ " join Hotel h"
			+ " on h.idHotel = ha.hotel"
			+ " where u.idUsuario = ?1")
	public List<ProjectionReserva> listReservaUsuario(int usuario);
}
