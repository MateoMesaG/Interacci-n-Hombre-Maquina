const app = Vue.createApp({

  data() {
    return {
      nuevaTarea: "",
      categoria: "Importante",
      tareas: [],
      tareasRealizadas: [],
      contador: 1
    };
  },

  computed: {
    tareasImportantes() {
      return this.tareas.filter(tarea => tarea.categoria === "Importante");
    },

    tareasUrgentes() {
      return this.tareas.filter(tarea => tarea.categoria === "Urgente");
    },

    tareasNormales() {
      return this.tareas.filter(tarea => tarea.categoria === "Normal");
    }
  },

  methods: {
    agregarTarea() {
      if (this.nuevaTarea.trim() === "") {
        alert("Escribe una tarea primero");
        return;
      }

      const tarea = {
        id: this.contador,
        texto: this.nuevaTarea,
        categoria: this.categoria
      };

      this.tareas.push(tarea);

      this.nuevaTarea = "";
      this.categoria = "Importante";
      this.contador++;
    },

    completarTarea(tarea) {
      this.tareasRealizadas.push(tarea);

      this.tareas = this.tareas.filter(t => t.id !== tarea.id);
    },

    eliminarTarea(tarea) {
      this.tareasRealizadas = this.tareasRealizadas.filter(t => t.id !== tarea.id);
    }
  }

});

app.mount("#app");
