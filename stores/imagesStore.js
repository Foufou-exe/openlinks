import { defineStore } from 'pinia'

function getRandomItem(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

export const useImagesStore = defineStore("images", {
  state: () => ({
    currentImage: "/images/form/background1.png",
    images: [
        "/images/form/background1.png",
        "/images/form/background2.png",
        "/images/form/background3.png",
    ],
  }),
  actions: {
    changeImage() {
        this.currentImage = getRandomItem(this.images);
    },
  },
});
