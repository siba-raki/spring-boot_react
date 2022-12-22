package com.proyecto.JavaAvanzado.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.proyecto.JavaAvanzado.entidad.Usuario;
import com.proyecto.JavaAvanzado.projection.ProjectionUser;
import com.proyecto.JavaAvanzado.projection.ProjectionUsuario;
import com.proyecto.JavaAvanzado.service.Servicio;
import com.proyecto.JavaAvanzado.service.UsuarioImpl;

@RestController
@CrossOrigin(origins = "http://localhost:3000/")
@RequestMapping("/usuario")
public class ControladorUsuario {
	
	ArrayList<Usuario> listaUsuario = new ArrayList<Usuario>();
	
	@Autowired
	private Servicio<Usuario> servicio;
	@Autowired
	private UsuarioImpl servicioUsuario;
	
	@GetMapping
	public List<ProjectionUsuario> listAll() {
		return servicioUsuario.listAll();
	}
	
	@RequestMapping(value="/rol/{rol}", method=RequestMethod.GET)
    public List<ProjectionUsuario> listRol(@PathVariable("rol") int rol) {
		return servicioUsuario.listRol(rol);
    }
	
	@RequestMapping(value="/rolUser/{correo}", method=RequestMethod.GET)
    public List<ProjectionUser> showRol(@PathVariable("correo") String correo) {
		return servicioUsuario.showRol(correo);
    }
	
	@RequestMapping(value="/login/{correo}/{contrasenha}", method=RequestMethod.GET)
    public List<ProjectionUser> existeUsuario(@PathVariable("correo") String correo, @PathVariable("contrasenha") String contrasenha) {
		return servicioUsuario.existeUsuario(correo,contrasenha);
    }
	
	@PostMapping
	public Usuario insertar(@RequestBody Usuario usuario) {
		listaUsuario.add(usuario);
		return servicio.insertar(usuario);
	}
		
	@PutMapping
	public Usuario actualizar(@RequestBody Usuario usuario) {
		return servicio.actualizar(usuario);
	}
	
	@DeleteMapping
	public void eliminar(@RequestBody Usuario usuario) {
		servicio.eliminar(usuario);
	}
}