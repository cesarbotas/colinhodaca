import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import CadastroPet from '../views/CadastroPet.vue'
import CadastroCliente from '../views/CadastroCliente.vue'
import AgendamentoPetSitter from '../views/AgendamentoPetSitter.vue'
// import AgendamentoHome from '../views/AgendamentoHome.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/cadastro-pet', component: CadastroPet },
  { path: '/cadastro-cliente', component: CadastroCliente },
  { path: '/agendamento-petsitter', component: AgendamentoPetSitter },
  // { path: '/agendamento-home', component: AgendamentoHome },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
