import { reactive } from 'vue'

export const store = reactive({
  patients: [{name: "admin", email: "vinicaio2016@gmail.com", password: "123"}],
  endocrinos: [],
  cardios: [],
  pediatras: [],
  cirurgioes: [],
  pneumologistas: [],
  clinicos: [],
  consultas: [],
  user: null
})