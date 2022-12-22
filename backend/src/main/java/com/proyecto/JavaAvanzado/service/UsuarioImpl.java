package com.proyecto.JavaAvanzado.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.proyecto.JavaAvanzado.entidad.Usuario;
import com.proyecto.JavaAvanzado.projection.ProjectionUser;
import com.proyecto.JavaAvanzado.projection.ProjectionUsuario;
import com.proyecto.JavaAvanzado.repository.RepositorioUsuario;

@Service
public class UsuarioImpl implements Servicio<Usuario>{
	
	@Autowired
	private RepositorioUsuario repositorio;

	@Override
	public Usuario insertar(Usuario usuario) {
		return repositorio.save(usuario);
	}

	@Override
	public Usuario actualizar(Usuario usuario) {
		return repositorio.save(usuario);
	}

	public List<ProjectionUsuario> listAll() {
		return repositorio.listAll();
	}
	
	public List<ProjectionUsuario> listRol(int rol) {
		return repositorio.listRol(rol);
	}
	
	public List<ProjectionUser> existeUsuario(String correo, String contrasenha) {
		List<ProjectionUser> listaVacia = null;
		if (repositorio.verificacionUsuario(correo).size() == 0) {
			return listaVacia;
		} else {
			if (contrasenhavalida(correo,contrasenha)) {
				return showRol(correo);
			}
			else {
				return listaVacia;
			}
		}
	}

	public Boolean contrasenhavalida(String correo, String contrasenha) {
		if (repositorio.verificacionContrasenha(correo, contrasenha).size() == 0) {
			return false;
		} else {
			return true;
		}
	}
	
	public List<ProjectionUser> showRol(String correo) {
		return repositorio.showRol(correo);
	}

	@Override
	public void eliminar(Usuario usuario) {
		repositorio.delete(usuario);
	}
}