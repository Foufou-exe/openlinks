import { defineStore } from 'pinia'

function getRandomItem(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

export const useEmojisStore = defineStore("emojis", {
  state: () => ({
    currentEmoji: "✨",
    emojis: ["✨", "🚀", "🌟", "🔥"],
  }),
  actions: {
    changeEmoji() {
        this.currentEmoji = getRandomItem(this.emojis);
    },
  },
});