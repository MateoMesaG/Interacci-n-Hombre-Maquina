// Se toma createApp desde Vue.
const { createApp } = Vue;

createApp({
  // data guarda la información principal de la página.
  data() {
    return {
      mostrarBarra: true,
      carrito: 2,
      correo: '',
      mensajeCorreo: '',

      categoriaSeleccionada: 'all',
      precioSeleccionado: 'all',
      ordenSeleccionado: 'normal',

      productos: [
        {
          id: 1,
          nombre: 'Control Pro RGB',
          precio: 79.99,
          precioAnterior: 119.99,
          categoria: 'accesorios',
          nuevo: true,
          descuento: 30,
          imagen: '',
          descripcion: 'Control inalámbrico con luces RGB y agarre cómodo para largas partidas.'
        },
        {
          id: 2,
          nombre: 'Headset Gamer X',
          precio: 59.99,
          precioAnterior: null,
          categoria: 'accesorios',
          nuevo: true,
          descuento: null,
          imagen: "https://media.falabella.com/falabellaCO/129884072_01/w=1500,h=1500,fit=cover",
          descripcion: 'Audífonos gamer con sonido envolvente y micrófono flexible.'
        },
        {
          id: 3,
          nombre: 'Consola Nova X',
          precio: 499.99,
          precioAnterior: null,
          categoria: 'consolas',
          nuevo: false,
          descuento: null,
          imagen: 'img/consola.png',
          descripcion: 'Consola de nueva generación con gráficos 4K y carga rápida.'
        },
        {
          id: 4,
          nombre: 'Silla Gamer Neon',
          precio: 299.99,
          precioAnterior: null,
          categoria: 'setup',
          nuevo: true,
          descuento: null,
          imagen: 'img/silla.png',
          descripcion: 'Silla ergonómica con diseño gamer y soporte lumbar.'
        },
        {
          id: 5,
          nombre: 'Cyber Racing 2099',
          precio: 49.99,
          precioAnterior: null,
          categoria: 'juegos',
          nuevo: false,
          descuento: null,
          imagen: 'img/juego.png',
          descripcion: 'Juego de carreras futuristas con pistas de neón y modo online.'
        },
        {
          id: 6,
          nombre: 'Teclado Mecánico RGB',
          precio: 89.99,
          precioAnterior: null,
          categoria: 'setup',
          nuevo: false,
          descuento: null,
          imagen: 'img/teclado.png',
          descripcion: 'Teclado mecánico con iluminación RGB y switches rápidos.'
        }
      ]
    };
  },

  // computed filtra los productos automáticamente.
  computed: {
    productosFiltrados() {
      let lista = [...this.productos];

      // Filtro por categoría.
      if (this.categoriaSeleccionada !== 'all') {
        lista = lista.filter(producto => producto.categoria === this.categoriaSeleccionada);
      }

      // Filtro por precio.
      if (this.precioSeleccionado === 'bajo') {
        lista = lista.filter(producto => producto.precio <= 100);
      }

      if (this.precioSeleccionado === 'medio') {
        lista = lista.filter(producto => producto.precio > 100 && producto.precio <= 400);
      }

      if (this.precioSeleccionado === 'alto') {
        lista = lista.filter(producto => producto.precio > 400);
      }

      // Ordenar por precio menor.
      if (this.ordenSeleccionado === 'menor') {
        lista.sort((a, b) => a.precio - b.precio);
      }

      // Ordenar por precio mayor.
      if (this.ordenSeleccionado === 'mayor') {
        lista.sort((a, b) => b.precio - a.precio);
      }

      return lista;
    }
  },

  // methods guarda las funciones que usan los botones.
  methods: {
    cerrarBarra() {
      this.mostrarBarra = false;
    },

    agregarCarrito(producto) {
      this.carrito++;
      alert(producto.nombre + ' fue añadido al carrito');
    },

    agregarWishlist(producto) {
      alert(producto.nombre + ' fue añadido a wishlist');
    },

    registrarCorreo() {
      if (this.correo.trim() === '') {
        this.mensajeCorreo = 'Escribe tu correo primero.';
        return;
      }

      this.mensajeCorreo = 'Registro exitoso. ¡Bienvenido a GameZone!';
      this.correo = '';
    }
  }
}).mount('#app');
