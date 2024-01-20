import { defineStore } from 'pinia'
import  platform  from  "platform";

function determineOS() {
  if (platform.os.family == "Mac") return 'MacOS';
  if (platform.os.family == "Win32") return 'Windows';
  return 'Linux';
}

export const useOsStore = defineStore('os', {
  state: () => ({
    os: determineOS(),
  }),
  getters: {
    shortcutSymbol: (state) => {
      if (state.os === 'MacOS') {
        return '⌘';
      }
      return 'Ctrl';
    }
  }
});