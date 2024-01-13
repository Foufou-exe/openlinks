/*
    Files in this folder are automatically registered as stores.
*/

// Path: app/stores/index.js
import { defineStore } from "pinia";


function getRandomItem(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

const useQuotesStore = defineStore("quotes", {
  state: () => ({
    randomQuote: {
        text: "The most remarkable development of our era is undoubtedly open source, enriched and invigorated by its passionate community.",
        author: "Foufou-exe | Devhub",
      },
    quotes: [
      {
        text: "The most remarkable development of our era is undoubtedly open source, enriched and invigorated by its passionate community.",
        author: "Foufou-exe | Devhub",
      },
      {
        text: "Software is a great combination of art and engineering",
        author: "Bill Gates | Microsoft",
      },
      {
        text: "Technology alone is not enough. We need technology combined with the human sciences, combined with the arts, to produce the results that make our hearts beat faster.",
        author: "Steve Jobs | Apple",
      },
      {
        text: "We need diversity of thought in the world to face up to the new challenges",
        author: "Tim Berners-Lee | World Wide Web",
      },
      {
        text: "What's important is your idea, your ability to execute that idea and to take it forward.",
        author: "Sheryl Sandberg | Facebook",
      },
      {
        text: "When something is important and seems impossible, you have to do it anyway",
        author: "Elon Musk | Tesla && SpaceX && Twitter",
      },
      {
        text: "The greatest risk is not taking risks. In a rapidly changing world, the only strategy guaranteed to fail is not to take risks.",
        author: "Mark Zuckerberg | Facebook",
      },
      {
        text: "The Internet is one of the greatest engines of change. Access to information is a fundamental human right",
        author: "Sundar Pichai | Google",
      },
      {
        text: "Don't be a know-it-all. Always be a learner",
        author: "Satya Nadella | Microsoft",
      },
      {
        text: "The best way to predict the future is to invent it",
        author: "Jeff Bezos | Amazon",
      },
      {
        text: "If you're working on something exciting that you really love, you don't need to be pushed. The vision draws you in",
        author: "Larry Page | Google",
      },
    ],
  }),
  actions: {
    changeQuote() {
        this.randomQuote = getRandomItem(this.quotes);
    },
  },
});

const useImagesStore = defineStore("images", {
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

const useEmojisStore = defineStore("emojis", {
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


export { 
    useQuotesStore, 
    useImagesStore, 
    useEmojisStore 
};