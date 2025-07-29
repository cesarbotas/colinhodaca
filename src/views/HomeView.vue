<!-- src/views/HomeView.vue -->
<template>
  <v-container class="fill-height d-flex justify-center align-center">
    <v-card class="pa-8" elevation="6" color="background" width="100%" max-width="600">
      <v-card-title class="text-h5 text-center">
        Bem-vindo ao <strong>Colinho da Cá</strong> 💛
      </v-card-title>
      <v-card-text class="text-center mt-4">
        Seu lugar de confiança para cuidados com seu pet!  
        Use o menu no canto superior direito para fazer cadastros ou agendamentos.
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>

<style scoped>
.v-container {
  background-color: #f5f5dc;
}
</style>
