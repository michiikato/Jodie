<template>
  <div id="app" class="container">
      <h1>Hi Jeia! 💕</h1>
      <p class="sweet-text">
          You’re the sweetest person I know, and I’m so lucky to have you!
      </p>

      <button @click="showSurprise" class="cute-button">
          Click Me for a Surprise!
      </button>

      <div v-if="showFirstMessage">
          <p class="surprise-text">You always make my heart so happy!</p>

          <div v-if="showHeartsBelow" class="hearts">
              <span v-for="n in 5" :key="n" class="heart">💖</span>
          </div>

          <button @click="anotherSurprise" class="cute-button">
              Another Surprise!
          </button>
      </div>

      <div v-if="showSurpriseImage" class="surprise-image">
          <img
              class="surprise-img"
              src="https://c.tenor.com/tLX14hqgV4kAAAAd/tenor.gif"
          />
      </div>

      <p v-if="showSecondMessage" class="surprise-text">
          You make everything brighter <span class="sun-animation">☀️</span>
      </p>

      <button
          v-if="showButtonAfterDelay"
          @click="showAppreciation"
          class="cute-button jeia-button"
      >
          Jeia, 🌸
      </button>

      <div v-if="showAppreciationMessage" class="appreciation-message">
          <p v-html="currentMessage"></p>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'SurpriseComponent',
    data() {
      return {
        showFirstMessage: false,
        showSecondMessage: false,
        showHeartsBelow: false,
        showButtonAfterDelay: false,
        showAppreciationMessage: false,
        showSurpriseImage: false, // Added property for showing surprise image
        words: [],
        currentWordIndex: 0,
        currentMessage: '',
      };
    },
    methods: {
      showSurprise() {
        this.showFirstMessage = true;
        this.showHeartsBelow = true;
      },
      anotherSurprise() {
        this.showSecondMessage = false;
        this.showSurpriseImage = true; // Show the surprise image
        setTimeout(() => {
          this.showSurpriseImage = false; // Hide the image after 3 seconds
          this.showSecondMessage = true; // Show the second message after image disappears
        }, 3000);
        setTimeout(() => {
          setTimeout(() => {
            this.showButtonAfterDelay = true;
          }, 4000);
        });
      },
      showAppreciation() {
        const message = "I appreciate you so much for your love, for taking care of me, and for always looking out for me. 💖 I hope we get to live a long, happy life together, and that I can spoil you endlessly. 🎁 I can't wait for us to travel the world and create meaningful photos and memories. ✈️";
        this.words = message.split(' ');
        this.currentWordIndex = 0;
        this.showAppreciationMessage = true;
        this.currentMessage = '';
        this.showWord();
      },

      showWord() {
        if (this.currentWordIndex < this.words.length) {
          this.currentMessage += this.words[this.currentWordIndex] + ' ';
          this.currentWordIndex++;
          setTimeout(() => {
            this.showWord();
          }, 300); // 300ms delay for each word
        }
      },
    },
  };
</script>

<style>
  body {
      margin: 0;
      padding: 0;
      background: url("https://molang.com/cdn/shop/articles/Blog_Post_Saint-Valentin_2024_950x524.png?v=1708079185")
          repeat;
      background-size: 520px;
  }

  .container {
      text-align: center;
      font-family: "Comic Sans MS", "Arial", sans-serif;
      padding: 50px;
      background: rgba(144, 144, 144, 0.342);
      border-radius: 20px;
      max-width: 600px;
      margin: 50px auto;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
      overflow: visible; /* Allow the surprise image to overflow outside the container */
  }

  h1 {
      color: #ffffff;
      font-size: 48px;
      text-shadow: 2px 2px 4px #000000;
      background-color: #ff7b9e56; /* Background color */
      padding: 7px; /* Padding around the text */
      border-radius: 20px; /* Rounded corners for the border */
      display: inline-block; /* Ensure it wraps around the text */
      margin: 0 auto; /* Center the heading */
  }

  .sweet-text {
      color: #ffd950;
      font-size: 24px;
      margin: 20px 0;
      text-shadow: 2px 2px 4px #000000;
      font-weight: bold;
  }

  .cute-button {
      padding: 15px 30px;
      font-size: 20px;
      background-color: #ffb6c1;
      color: white;
      border: none;
      border-radius: 25px;
      cursor: pointer;
      transition: transform 0.6s, background-color 0.6s;
      margin: 10px;
  }

  .cute-button:hover {
      background-color: #ff69b4;
      transform: scale(1.1);
  }

  .surprise-text {
      text-shadow: 2px 2px 4px #000000;
      color: #ffd950;
      font-size: 22px;
      font-weight: bold;
      margin-top: 20px;
      animation: fadeIn 1s ease-in;
  }

  .hearts {
      position: relative;
      margin-top: 20px;
      display: flex;
      justify-content: center;
  }

  .heart {
      font-size: 40px;
      margin: 0 5px;
      animation: floatUpDown 2s ease-in-out infinite;
  }

  .heart:nth-child(1) {
      animation-delay: 0s;
  }
  .heart:nth-child(2) {
      animation-delay: 0.5s;
  }
  .heart:nth-child(3) {
      animation-delay: 1s;
  }
  .heart:nth-child(4) {
      animation-delay: 1.5s;
  }
  .heart:nth-child(5) {
      animation-delay: 2s;
  }

  @keyframes floatUpDown {
      0% {
          transform: translateY(0);
      }
      50% {
          transform: translateY(-20px);
      }
      100% {
          transform: translateY(0);
      }
  }

  .sun-animation {
      display: inline-block;
      font-size: 30px;
      animation: spin 5s linear infinite;
  }

  .jeia-button {
      animation: fadeIn 3s;
      text-shadow: 2px 2px 4px #000000;
      color: #ffffff;
      background-color: #ffb6c1;
      font-weight: bold;
  }

  .appreciation-message {
      margin-top: 20px;
      font-size: 20px;
      text-shadow: 2px 2px 4px #000000;
      color: #ffd950;
      font-weight: bold;
      animation: fadeIn 0.5s ease-in-out;
  }

  .word {
      display: inline-block;
      opacity: 1; /* No animation applied now */
  }

  .surprise-image {
      display: flex;
      justify-content: center;
      align-items: center; /* Vertically center the image */
      position: fixed; /* Fix the position relative to the viewport */
      top: 50%; /* Position it in the center vertically */
      left: 50%; /* Position it in the center horizontally */
      transform: translate(-50%, -50%); /* Fine-tune the centering */
      z-index: 800; /* Ensure it's above other content */
      width: 80%; /* Make the div take full width */
      height: 80%; /* Make the div take full height */
  }

  .surprise-img {
      max-width: 80%; /* Ensure the image doesn't get cut off horizontally */
      height: auto; /* Keeps the aspect ratio */
      width: 100%; /* Increase size for a larger image */
  }

  @keyframes fadeIn {
      from {
          opacity: 0;
      }
      to {
          opacity: 1;
      }
  }

  @keyframes spin {
      from {
          transform: rotate(0deg);
      }
      to {
          transform: rotate(360deg);
      }
  }
</style>
