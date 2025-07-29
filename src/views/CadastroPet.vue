<template>
  <v-container>
    <h1>Cadastro de Pet</h1>
    <v-form @submit.prevent="submitForm">
      <v-text-field v-model="pet.nome" label="Nome do Pet" required />
      <v-select v-model="pet.tipo" :items="['Cachorro', 'Gato']" label="Tipo" required />
      <v-btn type="submit">Salvar</v-btn>
    </v-form>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      pet: { nome: '', tipo: '' }
    }
  },
  methods: {
    async submitForm() {
      await fetch('http://localhost:3000/pets', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.pet)
      });
      alert('Pet cadastrado!');
    }
  }
}
</script>
