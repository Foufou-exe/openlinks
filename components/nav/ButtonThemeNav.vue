<template>
    <div>
      <Button @click="toggleTheme" variant="ghost">
        <!-- Afficher l'icône correspondant au thème actuel -->
        <Icon :name="currentThemeIcon" class="text-2xl" />
      </Button>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue';

  
  const colorMode = useColorMode();
  
  const currentThemeIcon = computed(() => {
  if (colorMode.preference === 'system') {
    // Icône pour le mode système
    return 'circum:laptop';
  } else {
    // Icônes pour les modes sombre et clair
    return colorMode.preference === 'dark' ? 'circum:sun' : 'circum:dark';
  }
});

function toggleTheme() {
  // Basculer entre les thèmes clair, sombre, et système
  if (colorMode.preference === 'light') {
    colorMode.preference = 'dark';
  } else if (colorMode.preference === 'dark') {
    colorMode.preference = 'light';
  } else {
    // Si actuellement en mode système, basculer vers le mode opposé à la valeur actuelle de colorMode
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
  }
}
  </script>
  