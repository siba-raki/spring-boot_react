package com.proyecto.JavaAvanzado.entidad;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

@Entity
@Table (name = "Usuario", uniqueConstraints = @UniqueConstraint(columnNames = "correo"))
public class Usuario {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int idUsuario;
	
	@Column(name="nombre", nullable = false, length = 100)
	private String nombre;
	
	@Column(name="apellido", nullable = false, length = 100)
	private String apellido;

	@Column(name="cedula", nullable = false, length = 50)
	private String cedula;
	
	@Column(name="foto", length = 150)
	private String foto;
	
	@Column(name="correo", length = 150)
	private String correo;
	
	@Column(name = "estado")
	private boolean estado;
	
	@Column(name = "password", nullable = false, length = 50)
	private String password;
	
	@ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.MERGE)
	private RolUsuario rol;

	public Usuario() {
		super();
	}

	public Usuario(int idUsuario) {
		super();
		this.idUsuario = idUsuario;
	}

	public Usuario(int idUsuario, String nombre, String apellido, String cedula, String foto, String correo,
			boolean estado, String password, RolUsuario rol) {
		super();
		this.idUsuario = idUsuario;
		this.nombre = nombre;
		this.apellido = apellido;
		this.cedula = cedula;
		this.foto = foto;
		this.correo = correo;
		this.estado = estado;
		this.password = password;
		this.rol = rol;
	}

	public int getIdUsuario() {
		return idUsuario;
	}

	public void setIdUsuario(int idUsuario) {
		this.idUsuario = idUsuario;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getApellido() {
		return apellido;
	}

	public void setApellido(String apellido) {
		this.apellido = apellido;
	}

	public String getCedula() {
		return cedula;
	}

	public void setCedula(String cedula) {
		this.cedula = cedula;
	}

	public String getFoto() {
		return foto;
	}

	public void setFoto(String foto) {
		this.foto = foto;
	}

	public String getCorreo() {
		return correo;
	}

	public void setCorreo(String correo) {
		this.correo = correo;
	}

	public boolean isEstado() {
		return estado;
	}

	public void setEstado(boolean estado) {
		this.estado = estado;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public RolUsuario getRol() {
		return rol;
	}

	public void setRol(RolUsuario rol) {
		this.rol = rol;
	}
}
