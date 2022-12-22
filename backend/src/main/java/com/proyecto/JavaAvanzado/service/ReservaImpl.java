package com.proyecto.JavaAvanzado.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.proyecto.JavaAvanzado.entidad.Reserva;
import com.proyecto.JavaAvanzado.projection.ProjectionReserva;
import com.proyecto.JavaAvanzado.repository.RepositorioReserva;

@Service
public class ReservaImpl implements Servicio<Reserva>{

	
	@Autowired
	private RepositorioReserva repositorio;
	
	@Override
	public Reserva insertar(Reserva reserva) {
		return repositorio.save(reserva);
	}

	@Override
	public Reserva actualizar(Reserva reserva) {
		return repositorio.save(reserva);
	}

	public List<ProjectionReserva> listAll() {
		return repositorio.listAll();
	}
	
	public List<ProjectionReserva> listReservaUsuario(int usuario) {
		return repositorio.listReservaUsuario(usuario);
	}

	@Override
	public void eliminar(Reserva reserva) {
		repositorio.delete(reserva);
	}
}
