package com.proyecto.JavaAvanzado.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.proyecto.JavaAvanzado.entidad.Habitacion;
import com.proyecto.JavaAvanzado.projection.ProjectionHabitacion;
import com.proyecto.JavaAvanzado.repository.RepositorioHabitacion;

@Service
public class HabitacionImpl implements Servicio<Habitacion>{

	@Autowired
	private RepositorioHabitacion repositorio;

	@Override
	public Habitacion insertar(Habitacion habitacion) {
		return repositorio.save(habitacion);
	}

	@Override
	public Habitacion actualizar(Habitacion habitacion) {
		return repositorio.save(habitacion);
	}

	public List<ProjectionHabitacion> listAll() {
		return repositorio.listAll();
	}
	
	public List<ProjectionHabitacion> listHabHotel(int hotel) {
		return repositorio.listHabHotel(hotel);
	}
	
	public List<ProjectionHabitacion> listHabHuespuedes(int huespedes) {
		return repositorio.listHabHuespuedes(huespedes);
	}
	
	public List<ProjectionHabitacion> listHabHuespuedesYCamas(int huespedes, int camas) {
		return repositorio.listHabHuespuedesYCamas(huespedes,camas);
	}
	
	public List<ProjectionHabitacion> listHabCamas(int camas) {
		return repositorio.listHabCamas(camas);
	}
	
	public List<ProjectionHabitacion> listHabHueCamHotel(int hotel, int camas, int huespedes) {
		return repositorio.listHabHueCamHotel(hotel,camas,huespedes);
	}

	@Override
	public void eliminar(Habitacion habitacion) {
		repositorio.delete(habitacion);
	}
	
}
