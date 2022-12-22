package com.proyecto.JavaAvanzado.projection;

import java.util.Date;

public interface ProjectionReserva {
	int getIdReserva();
	String getUsuario();
	String getHotel();
	int getHabitacion();
	Date getReservaDesde();
	Date getReservaHasta();
	String getEstado();
}
