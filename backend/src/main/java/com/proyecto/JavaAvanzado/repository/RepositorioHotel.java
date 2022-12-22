package com.proyecto.JavaAvanzado.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.proyecto.JavaAvanzado.entidad.Hotel;
import com.proyecto.JavaAvanzado.projection.ProjectionHotel;

public interface RepositorioHotel extends JpaRepository<Hotel, Integer>{
	
	//LISTA DE TODOS LOS HOTELES
	@Query("select h.idHotel as idHotel, h.nombreHotel as nombreHotel, h.direccion as direccion, h.telefono as telefono,"
			+ "h.descripcion as descripcion, h.estado as estado, c.ciudad as ciudad from Hotel h"
			+ " join Ciudad c"
			+ " on c.idCiudad = h.ciudad")
	public List<ProjectionHotel> listAll();
	
	//LISTA DE HOTELES POR NOMBRE PARA LA BUSQUEDA POR APROXIMACION
	@Query("select h.idHotel as idHotel, h.nombreHotel as nombreHotel, h.direccion as direccion, h.telefono as telefono,"
			+ "h.descripcion as descripcion, h.estado as estado, c.ciudad as ciudad from Hotel h"
			+ " join Ciudad c"
			+ " on c.idCiudad = h.ciudad"
			+ " where h.nombreHotel like ?1 and h.estado = true")
	public List<ProjectionHotel> listNombre(String nombre);
	
	//LISTA DE HOTELES POR CANT DE HABITACIONES
	@Query("select h.idHotel as idHotel, h.nombreHotel as nombreHotel, h.direccion as direccion, h.telefono as telefono,"
			+ "h.descripcion as descripcion, h.estado as estado, c.ciudad as ciudad"
			+ " from Hotel h"
			+ " join Ciudad c"
			+ " on c.idCiudad = h.ciudad"
			+ " join Habitacion ha"
			+ " on ha.hotel = h.idHotel"
			+ " where (select COUNT(ha.idHabitacion) from Hotel h"
			+ "	       join Habitacion ha"
			+ "		   on ha.hotel = h.idHotel) = ?1"
			+ " and h.estado = true"
			+ " Group by h.idHotel, c.ciudad")
	public List<ProjectionHotel> listCantHabitaciones(Long cantHabitaciones);
	
	//LISTA DE HOTELES POR CIUDAD
	@Query("select h.idHotel as idHotel, h.nombreHotel as nombreHotel, h.direccion as direccion, h.telefono as telefono,"
			+ "h.descripcion as descripcion, h.estado as estado, c.ciudad as ciudad from Hotel h"
			+ " join Ciudad c"
			+ " on c.idCiudad = h.ciudad"
			+ " where c.ciudad = ?1 and h.estado = true")
	public List<ProjectionHotel> listCiudad(String ciudad);
	
	//LISTA DE HOTELES POR CALIFICACION, SE HACE UN PROMEDIO DE LOS PUNTAJES DIVIDIDO POR LA CANTIDAD DE PERSONAS QUE PUNTUARON EL HOTEL
	@Query("select h.idHotel as idHotel, h.nombreHotel as nombreHotel, h.direccion as direccion, h.telefono as telefono,"
			+ "h.descripcion as descripcion, h.estado as estado, c.ciudad as ciudad, SUM(op.calificacion)/COUNT(op.idOpinion) as Calificacion"
			+ " from Opinion op"
			+ " join Hotel h"
			+ " on h.idHotel = op.hotel"
			+ " join Ciudad c"
			+ " on c.idCiudad = h.ciudad"
			+ " where calificacion = ?1"
			+ " and h.estado = true"
			+ " group by h.idHotel, c.idCiudad")
	public List<ProjectionHotel> listCalificacion(float calificacion);
	
	//LISTA DE HOTELES POR PRECIO DE LAS HABITACIONES
	@Query("select h.idHotel as idHotel, h.nombreHotel as nombreHotel, h.direccion as direccion, h.telefono as telefono,"
			+"h.descripcion as descripcion,  h.estado as estado, c.ciudad as ciudad"
			+ " from Hotel h"
			+ " join Ciudad c"
			+ " on c.idCiudad = h.ciudad"
			+ " join Habitacion ha"
			+ " on ha.hotel = h.idHotel"
			+ " where ha.precio >= ?1 and ha.precio <= ?2"
			+ " and h.estado = true")
	public List<ProjectionHotel> listPrecio(int precio1, int precio2);
}
