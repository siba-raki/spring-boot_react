package com.proyecto.JavaAvanzado.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.proyecto.JavaAvanzado.entidad.Usuario;
import com.proyecto.JavaAvanzado.projection.ProjectionUser;
import com.proyecto.JavaAvanzado.projection.ProjectionUsuario;

public interface RepositorioUsuario extends JpaRepository<Usuario, Integer>{
	
	//LISTA DE TODOS LOS USUARIOS
	@Query("select u.idUsuario as idUsuario, CONCAT(u.nombre, ' ', u.apellido) as usuario, u.cedula as cedula,"
			+ "u.foto as foto, u.correo as correo, u.estado as estado, r.nombreRol as rol"
			+ " from Usuario u"
			+ " join RolUsuario r"
			+ " on r.idRol = u.rol")
	public List<ProjectionUsuario> listAll();
	
	//LISTA DE USUARIOS FILTRADA POR ROL
	@Query("select u.idUsuario as idUsuario, CONCAT(u.nombre, ' ', u.apellido) as usuario, u.cedula as cedula,"
			+ "u.foto as foto, u.correo as correo, u.estado as estado, r.nombreRol as rol"
			+ " from Usuario u"
			+ " join RolUsuario r"
			+ " on r.idRol = u.rol"
			+ " where r.idRol = ?1")
	public List<ProjectionUsuario> listRol(int rol);
	
	//VERIFICACION DE USUARIO
	@Query("select u.idUsuario as idUsuario, CONCAT(u.nombre, ' ', u.apellido) as usuario, u.cedula as cedula,"
			+ "	u.foto as foto, u.correo as correo, u.estado as estado, r.nombreRol as rol"
			+ " from Usuario u"
			+ " join RolUsuario r"
			+ " on r.idRol = u.rol"
			+ " where u.correo = ?1")
	public List<ProjectionUsuario> verificacionUsuario(String correo);

	@Query("select u.idUsuario as idUsuario, CONCAT(u.nombre, ' ', u.apellido) as usuario, u.cedula as cedula,"
			+ "	u.foto as foto, u.correo as correo, u.estado as estado, r.nombreRol as rol"
			+ " from Usuario u"
			+ " join RolUsuario r"
			+ " on r.idRol = u.rol"
			+ " where u.correo = ?1"
			+ " and u.password = ?2")
	public List<ProjectionUsuario> verificacionContrasenha(String correo, String contrasenha);
	
	//LISTA DE USUARIOS FILTRADA POR ROL
	@Query("select r.nombreRol as rol, u.idUsuario as idUsuario"
			+ " from Usuario u"
			+ " join RolUsuario r"
			+ " on r.idRol = u.rol"
			+ " where u.correo = ?1")
	public List<ProjectionUser> showRol(String correo);
	
}
