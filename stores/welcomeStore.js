import { defineStore } from 'pinia';

export const useWelcomeStore = defineStore('welcome', {
  state: () => ({
    lastWelcomeMessage: { message: '', date: '' },
  }),
  actions: {
    updateWelcomeMessage() {
      const now = new Date();
      const today = now.toDateString();
      const heure = now.getHours();
      let message = '';
      if (heure < 12) {
        message = 'Good morning 🌄';
      } else if (heure < 18) {
        message = 'Good afternoon ☀️';
      } else {
        message = 'Good evening 🌆';
      }

      // Just update the message and date without checking
      this.lastWelcomeMessage = { message, date: today };
    }
  }
});
