package com.proyecto.JavaAvanzado.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.proyecto.JavaAvanzado.entidad.Habitacion;
import com.proyecto.JavaAvanzado.projection.ProjectionHabitacion;

public interface RepositorioHabitacion extends JpaRepository<Habitacion, Integer> {
	
	//LISTADO DE HABITACIONES
	@Query("select ha.idHabitacion as idHabitacion, ha.numHabitacion as numHabitacion, ha.cantCamas as cantCamas, ha.cantHuespedes as cantHuespedes,"
			+ " ha.estado as estado, ha.precio as precio, ho.nombreHotel as hotel, t.tipoHabitacion as tipoHabitacion from Habitacion ha"
			+ " join Hotel ho"
			+ " on ho.idHotel = ha.hotel"
			+ " join TipoHabitacion t"
			+ " on t.idTipoHabitacion = ha.tipoHabitacion")
	public List<ProjectionHabitacion> listAll();

	//LISTADO DE HABITACIONES POR HOTEL
	@Query("select ha.idHabitacion as idHabitacion, ha.numHabitacion as numHabitacion, ha.cantCamas as cantCamas, ha.cantHuespedes as cantHuespedes,"
			+ " ha.estado as estado, ha.precio as precio, ho.nombreHotel as hotel, t.tipoHabitacion as tipoHabitacion from Habitacion ha"
			+ " join Hotel ho"
			+ " on ho.idHotel = ha.hotel"
			+ " join TipoHabitacion t"
			+ " on t.idTipoHabitacion = ha.tipoHabitacion"
			+ " where ho.idHotel = ?1")
	public List<ProjectionHabitacion> listHabHotel(int hotel);
	
	//LISTADO DE HABITACIONES POR CANT. CAMAS
	@Query("select ha.idHabitacion as idHabitacion, ha.numHabitacion as numHabitacion, ha.cantCamas as cantCamas, ha.cantHuespedes as cantHuespedes,"
			+ " ha.estado as estado, ha.precio as precio, ho.nombreHotel as hotel, t.tipoHabitacion as tipoHabitacion from Habitacion ha"
			+ " join Hotel ho"
			+ " on ho.idHotel = ha.hotel"
			+ " join TipoHabitacion t"
			+ " on t.idTipoHabitacion = ha.tipoHabitacion"
			+ " where ha.cantCamas = ?1")
	public List<ProjectionHabitacion> listHabCamas(int camas);
	
	//LISTADO DE HABITACIONES POR CANT. HUESPEDES
	@Query("select ha.idHabitacion as idHabitacion, ha.numHabitacion as numHabitacion, ha.cantCamas as cantCamas, ha.cantHuespedes as cantHuespedes,"
			+ " ha.estado as estado, ha.precio as precio, ho.nombreHotel as hotel, t.tipoHabitacion as tipoHabitacion from Habitacion ha"
			+ " join Hotel ho"
			+ " on ho.idHotel = ha.hotel"
			+ " join TipoHabitacion t"
			+ " on t.idTipoHabitacion = ha.tipoHabitacion"
			+ " where ha.cantHuespedes = ?1")
	public List<ProjectionHabitacion> listHabHuespuedes(int huespedes);
	
	//LISTADO DE HABITACIONES POR CAMAS Y HUESPEDES
	@Query("select ha.idHabitacion as idHabitacion, ha.numHabitacion as numHabitacion, ha.cantCamas as cantCamas, ha.cantHuespedes as cantHuespedes,"
			+ " ha.estado as estado, ha.precio as precio, ho.nombreHotel as hotel, t.tipoHabitacion as tipoHabitacion from Habitacion ha"
			+ " join Hotel ho"
			+ " on ho.idHotel = ha.hotel"
			+ " join TipoHabitacion t"
			+ " on t.idTipoHabitacion = ha.tipoHabitacion"
			+ " where ha.cantHuespedes = ?1"
			+ " and ha.cantCamas = ?2")
	public List<ProjectionHabitacion> listHabHuespuedesYCamas(int huespedes, int camas);

	//LISTADO DE HABITACIONES POR CAMAS, HUESPEDES Y HOTEL
	@Query("select ha.idHabitacion as idHabitacion, ha.numHabitacion as numHabitacion, ha.cantCamas as cantCamas, ha.cantHuespedes as cantHuespedes,"
			+ " ha.estado as estado, ha.precio as precio, ho.nombreHotel as hotel, t.tipoHabitacion as tipoHabitacion from Habitacion ha"
			+ " join Hotel ho"
			+ " on ho.idHotel = ha.hotel"
			+ " join TipoHabitacion t"
			+ " on t.idTipoHabitacion = ha.tipoHabitacion"
			+ " where ho.idHotel = ?1"
			+ " and ha.cantHuespedes = ?2"
			+ " and ha.cantCamas = ?3")
	public List<ProjectionHabitacion> listHabHueCamHotel(int hotel, int huespedes, int camas);
}
