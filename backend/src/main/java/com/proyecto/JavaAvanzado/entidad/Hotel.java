package com.proyecto.JavaAvanzado.entidad;

import java.util.Collection;
import java.util.Set;
import lombok.Data;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.JoinColumn;

@Data
@Entity
@Table(name="Hotel")
public class Hotel {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int idHotel;
	
	@Column(name = "nombreHotel", nullable = false, length = 100)
	private String nombreHotel;
	
	@Column(name = "direccion", nullable = false, length = 150)
	private String direccion;
	
	@Column(name = "telefono", nullable = false, length = 50)
	private String telefono;
	
	@Column(name = "foto", nullable = true, length = 150)
	private String foto;
	
	@Column(name = "descripcion", nullable = false, length = 300)
	private String descripcion;
	
	@Column(name = "estado", nullable = false)
	private boolean estado;
	
    @OneToMany(mappedBy="hotel")
    private Set<Habitacion> habitaciones;
    
    @ManyToOne(optional = false, cascade = CascadeType.MERGE, fetch = FetchType.EAGER)
    private Ciudad ciudad;
    
    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.MERGE)
	@JoinTable(
			name = "PrestacionHotel",
			joinColumns = @JoinColumn(
				name = "idHotel",
				referencedColumnName = "idHotel"),
			inverseJoinColumns = @JoinColumn(
				name = "idPrestacion",
				referencedColumnName = "idPrestacion")
		)
	private Collection<PrestacionHotel> prestacion;
    
    public Hotel() {
    }
    
    public Hotel(int idHotel) {
		super();
		this.idHotel = idHotel;
    }
    
    public Hotel(int idHotel, String nombreHotel, String direccion, String telefono, String foto, String descripcion,
			boolean estado, Ciudad ciudad) {
		super();
		this.idHotel = idHotel;
		this.nombreHotel = nombreHotel;
		this.direccion = direccion;
		this.telefono = telefono;
		this.foto = foto;
		this.descripcion = descripcion;
		this.estado = estado;
		this.ciudad = ciudad;
	}

	public int getIdHotel() {
		return idHotel;
	}

	public void setIdHotel(int idHotel) {
		this.idHotel = idHotel;
	}

	public String getNombreHotel() {
		return nombreHotel;
	}

	public void setNombreHotel(String nombreHotel) {
		this.nombreHotel = nombreHotel;
	}

	public String getDireccion() {
		return direccion;
	}

	public void setDireccion(String direccion) {
		this.direccion = direccion;
	}

	public String getTelefono() {
		return telefono;
	}

	public void setTelefono(String telefono) {
		this.telefono = telefono;
	}

	public String getFoto() {
		return foto;
	}

	public void setFoto(String foto) {
		this.foto = foto;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public boolean isEstado() {
		return estado;
	}

	public void setEstado(boolean estado) {
		this.estado = estado;
	}

	public Ciudad getCiudad() {
		return ciudad;
	}

	public void setCiudad(Ciudad ciudad) {
		this.ciudad = ciudad;
	}

	public String toString() {
    	return "ID: " + idHotel + " Nombre: " + nombreHotel + " Direccion: " + direccion + " Telefono: " + telefono
    			+ " Foto: " + foto + " Descripcion: " + descripcion + " Estado: " + estado + " Ciudad: " + ciudad;
    }
}
