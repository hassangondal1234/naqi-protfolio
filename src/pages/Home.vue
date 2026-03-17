<template>
  <div class="app">
    <!-- Navbar -->

<!-- Hero Section -->
<section class="hero">
  <h1>Hi, I’m Muhammad Naqi</h1>
  <p class="subtitle">Front-End & Full Stack Developer| html | css | JavaScript | vue.js</p>
  <button @click="scrollToWork">See My Work</button>
</section>
    <!-- About Section -->
    <section class="about">
      <h2>About Me</h2>
      <p>
        I am a passionate full stack web developer with experience in creating interactive and responsive websites. I specialize in Vue.js, JavaScript, and modern web design with creative layouts.
      </p>
    </section>
    <!-- Skills Section -->
    <section class="skills">
      <h2>Skills</h2>
      <div class="skill-bar">
        <p>HTML5</p>
        <div class="bar"><div class="fill html"></div></div>
      </div>
      <div class="skill-bar">
        <p>CSS2</p>
        <div class="bar"><div class="fill css"></div></div>
      </div>
      <div class="skill-bar">
        <p>JavaScript</p>
        <div class="bar"><div class="fill js"></div></div>
      </div>
      <div class="skill-bar">
        <p>Vue.js</p>
        <div class="bar"><div class="fill vue"></div></div>
      </div>
      <div class="skill-bar">
        <p>tailwind.css </p>
        <div class="bar"><div class="fill vue"></div></div>
      </div>
  <h1>naqi gujjar</h1>
    </section>
     Projects Section 
    <section class="projects">
      <h2>Projects</h2>
      <div class="project-cards">
        <div class="card">
          <img src="https://via.placeholder.com/300" alt="Project 1">
          <h3>Project One</h3>
          <p>Modern e-commerce website with Vue.js and CSS animations.</p>
        </div>
        <div class="card">
          <img src="https://via.placeholder.com/300" alt="Project 2">
          <h3>Project Two</h3>
          <p>Interactive portfolio with smooth transitions and colorful design.</p>
        </div>
        <div class="card">
          <img src="https://via.placeholder.com/300" alt="Project 3">
          <h3>Project Three</h3>
          <p>Responsive landing page built with pure CSS and Vue.js.</p>
        </div>
      </div>
    </section>
    <!-- Contact Section -->
    <section class="contact">
      <h2>Contact Me</h2>
      <form @submit.prevent="sendMessage">
        <input v-model="name" type="text" placeholder="Your Name" required>
        <input v-model="email" type="email" placeholder="Your Email" required>
        <input v-model="phone" type="tel" placeholder="Phone Number">
        <textarea v-model="message" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
    <!-- Footer -->
    <footer>
      © 2026 Muhammad Naqi. All Rights Reserved.
    </footer>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const name = ref('')
const email = ref('')
const phone = ref('')
const message = ref('')
const sendMessage = () => {
  console.log('✅ Message Sent Successfully!')
  console.log('Name:', name.value)
  console.log('Email:', email.value)
  console.log('Phone:', phone.value)
  console.log('Message:', message.value)
  name.value = ''
  email.value = ''
  phone.value = ''
  message.value = ''
}
const scrollToWork = () => {
  document.querySelector('.projects').scrollIntoView({ behavior: 'smooth' })
}
</script>
<style>
/* Global */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Arial', sans-serif;
}
body, html, .app {
  width: 100%;
  scroll-behavior: smooth;
}
/* Hero */
.hero {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #e2662d, #007be0);
  text-align: center;
  color: rgb(255, 255, 255);
  padding: 0 20px;
}
.hero h1 {
  font-size: 4rem;
  margin-bottom: 15px;  /* thoda compact */
}
/* New: Subtitle styling */
.hero .subtitle {
  font-size: 1.5rem;       /* readable size */
  max-width: 800px;        /* ek line me overflow na ho */
  line-height: 1.4;        /* thoda compact spacing */
  margin-bottom: 30px;
  text-align: center;       /* ensure center */
}
/* Hero button */
.hero button {
  padding: 15px 35px;
  font-size: 1rem;
  border: none;
  background-color: #ff8800;
  color: rgb(0, 0, 0);
  font-weight: bold;
  border-radius: 50px;
  cursor: pointer;
  transition: 0.3s;
}
.hero button:hover {
  transform: scale(1.1);
}
/* Responsive */
@media(max-width: 768px) {
  .hero h1 { font-size: 3rem; }
  .hero .subtitle { font-size: 1.2rem; }
}
/* About */
.about {
  padding: 100px 50px;
  text-align: center;
  background: rgba(255, 255, 255, 0.1);
  color: lightsalmon;
}
.about h2 {
  font-size: 3rem;
  margin-bottom: 20px;
}
.about p {
  font-size: 1.2rem;
  max-width: 800px;
  margin: auto;
  line-height: 1.8;
}
/* Skills */
.skills {
  padding: 100px 50px;
  background: #1a1C1ab7;
  color: white;
  text-align: center;
}
.skills h2 {
  font-size: 3rem;
  margin-bottom: 50px;
}
.skill-bar {
  margin-bottom: 25px;
}
.skill-bar p {
  margin-bottom: 5px;
  font-weight: bold;
}
.bar {
  width: 300px;
  height: 20px;
  background: rgba(255,255,255,0.2);
  border-radius: 10px;
  margin: auto;
}
.fill {
  height: 100%;
  border-radius: 10px;
  transition: width 1s ease-in-out;
}
.fill.html { width: 90%; background: #26e3ba; }
.fill.css { width: 85%; background: #26e485; }
.fill.js { width: 80%; background: #4f7af0; color: black; }
.fill.vue { width: 75%; background: #67b842; }
.fill.css{ width: 75; background: #4f7af0;}
/* Projects */
.projects {
  padding: 100px 50px;
  text-align: center;
  background: rgba(255, 255, 255, 0.05);
  color: white;
}
.projects h2 {
  font-size: 3rem;
  margin-bottom: 50px;
}
.project-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
}
.card {
  background: lightcoral;
  padding: 20px;
  border-radius: 20px;
  width: 300px;
  transition: 0.3s;
}
.card img {
  width: 100%;
  border-radius: 15px;
  margin-bottom: 15px;
}
.card:hover {
  transform: scale(1.05);
}
/* Contact */
.contact {
  padding: 100px 50px;
  text-align: center;
  background: lightblue;
  color: white;
}
.contact h2 {
  font-size: 3rem;
  margin-bottom: 30px;
}
.contact form {
  max-width: 500px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.contact input, .contact textarea {
  padding: 10px 15px;
  border-radius: 10px;
  border: none;
  font-size: 1rem;
}
.contact button {
  padding: 15px;
  border-radius: 40px;
  border: none;
  background: #0066ff;
  color: rgb(0, 0, 0);
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
}
.contact button:hover {
  transform: scale(1.1);
}
/* Footer */
footer {
  text-align: center;
  padding: 20px;
  background: rgba(0,0,0,0.7);
  color: white;
}
/* Responsive */
@media(max-width: 768px) {
  .hero h1 { font-size: 3rem; }
  .hero p { font-size: 1.2rem; }
  .project-cards { flex-direction: column; align-items: center; }
  .navbar { flex-direction: column; gap: 20px; }
}
</style>