<template>
  <section class="about">
    <div class="overlay"></div>

    <div class="container">
      <!-- Title -->
      <h1 class="title">welcome to my about page</h1>

      <!-- Intro -->
      <p class="text">
        Hi, I'm <span>Muhammad Naqi</span>, a Frontend Developer who builds
        modern, responsive and user-friendly websites.
      </p>

      <!-- Loop Line -->
      <p class="loop">
        {{ currentText }}
      </p>

      <!-- Skills -->
      <div class="skills">
        <span v-for="skill in skills" :key="skill">
          {{ skill }}
        </span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

/* Loop text */
const texts = [
  "I love clean and modern design.",
  "I build responsive websites.",
  "I turn ideas into reality.",
  "Always learning new things."
];

const currentText = ref(texts[0]);
let i = 0;

onMounted(() => {
  setInterval(() => {
    i = (i + 1) % texts.length;
    currentText.value = texts[i];
  }, 2500);
});

/* Skills */
const skills = ["HTML", "CSS", "JavaScript", "Vue.js"];
</script>

<style scoped>
.about {
  height: 105vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  position: relative;

  background: url("https://images.unsplash.com/photo-1492724441997-5dc865305da7")
    no-repeat center/cover;
}

/* Overlay */
.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0);
}

/* Container */
.container {
  text-align: center;
  z-index: 1;
  max-width: 600px;
  padding: 20px;
}

/* Title */
.title {
  font-size: 2.8rem;
  margin-bottom: 20px;
}

/* Text */
.text {
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.text span {
  color: #ff0000e7;
}

/* Loop */
.loop {
  margin-bottom: 20px;
  font-size: 1.1rem;
  animation: fade 2.5s infinite;
}

/* Skills */
.skills {
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
}

.skills span {
  padding: 8px 15px;
  background: rgba(255, 255, 255, 0.062);
  border-radius: 20px;
  transition: 0.3s;
}

.skills span:hover {
  background: #00ccff4f;
  color: black;
}

/* Animation */
@keyframes fade {
  0% { opacity: 0; transform: translateY(10px); }
  30% { opacity: 1; transform: translateY(0); }
  70% { opacity: 1; }
  100% { opacity: 0; transform: translateY(-10px); }
}
</style>