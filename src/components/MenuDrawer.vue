<template>
  <v-navigation-drawer
    app
    :model-value="drawer"
    @update:modelValue="$emit('update:drawer', $event)"
    color="beige"
  >
    <v-list nav dense>
      <v-list-item-title class="text-h6 text-center mt-2 mb-4"></v-list-item-title>

      <!-- Home -->
      <v-list-item link to="/" exact>
        <v-list-item-icon><v-icon>mdi-home</v-icon></v-list-item-icon>
        <v-list-item-title>Home</v-list-item-title>
      </v-list-item>

      <!-- Cadastros -->
      <v-list-group value="true" prepend-icon="mdi-account-box">
        <template #activator="{ props }">
          <v-list-item v-bind="props" title="Cadastros" />
        </template>

        <v-list-item
          title="Cliente"
          to="/cadastro-cliente"
          prepend-icon="mdi-account"
        />
        <v-list-item
          title="Pet"
          to="/cadastro-pet"
          prepend-icon="mdi-dog"
        />
      </v-list-group>

      <!-- Agendamentos -->
      <v-list-group prepend-icon="mdi-calendar">
        <template #activator="{ props }">
          <v-list-item v-bind="props" title="Agendamentos" />
        </template>

        <v-list-item
          title="PetSitter"
          to="/agendamento-petsitter"
          prepend-icon="mdi-home-heart"
        />
        <v-list-item
          title="Hospedagem"
          to="/agendamento-hospedagem"
          prepend-icon="mdi-hotel"
        />
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'MenuDrawer',
  props: {
    drawer: {
      type: Boolean,
      required: true
    }
  }
}
</script>
