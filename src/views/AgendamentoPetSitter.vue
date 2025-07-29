<!-- src/views/AgendamentoPetSitter.vue -->
<template>
  <v-container>
    <v-card class="pa-6" max-width="600" elevation="6">
      <v-card-title class="text-h5">Agendamento Pet Sitter</v-card-title>
      <v-form @submit.prevent="submitForm">
        <v-text-field v-model="agendamento.pet" label="Nome do Pet" required />
        <v-text-field v-model="agendamento.data" label="Data" type="date" required />
        <v-text-field v-model="agendamento.hora" label="Hora" type="time" required />
        <v-btn type="submit" color="primary" class="mt-4">Agendar</v-btn>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'AgendamentoPetSitter',
  data() {
    return {
      agendamento: {
        pet: '',
        data: '',
        hora: ''
      }
    }
  },
  methods: {
    async submitForm() {
      await fetch('http://localhost:3000/agendamentos-petsitter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.agendamento)
      })
      alert('Agendamento realizado!')
      this.agendamento = { pet: '', data: '', hora: '' }
    }
  }
}
</script>
