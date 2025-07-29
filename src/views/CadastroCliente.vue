<!-- src/views/CadastroCliente.vue -->
<template>
  <v-container>
    <v-card class="pa-6" max-width="600" elevation="6">
      <v-card-title class="text-h5">Cadastro de Cliente</v-card-title>
      <v-form @submit.prevent="submitForm">
        <v-text-field v-model="cliente.nome" label="Nome" required />
        <v-text-field v-model="cliente.telefone" label="Telefone" required />
        <v-text-field v-model="cliente.email" label="Email" />
        <v-btn type="submit" color="primary" class="mt-4">Cadastrar</v-btn>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'CadastroCliente',
  data() {
    return {
      cliente: {
        nome: '',
        telefone: '',
        email: ''
      }
    }
  },
  methods: {
    async submitForm() {
      await fetch('http://localhost:3000/clientes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.cliente)
      })
      alert('Cliente cadastrado com sucesso!')
      this.cliente = { nome: '', telefone: '', email: '' }
    }
  }
}
</script>
