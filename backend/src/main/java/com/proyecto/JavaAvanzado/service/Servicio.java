package com.proyecto.JavaAvanzado.service;

import org.springframework.stereotype.Service;

@Service
public interface Servicio<T> {
	public T insertar(T objeto);
	public T actualizar(T objeto);
	public void eliminar(T objeto);
}
