<template>
  <div class="contact-page">
    <section class="contact-hero">
    
    </section>
    <H1>contact</H1>

    <section class="contact-form-section">
      <form @submit.prevent="sendMessage" class="contact-form">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" v-model="form.name" placeholder="Enter your name" required />
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="form.email" placeholder="Enter your email" required />
        </div>

        <div class="form-group">
          <label for="phone">Phone</label>
          <input type="tel" id="phone" v-model="form.phone" placeholder="Enter your phone number" required />
        </div>

        <div class="form-group">
          <label for="message">Message</label>
          <textarea id="message" v-model="form.message" placeholder="Write your message" required></textarea>
        </div>

        <button type="submit" class="btn">Send Message</button>
      </form>
    </section>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      form: {
        name: "",
        email: "",
        phone: "",
        message: ""
      }
    };
  },
  methods: {
    sendMessage() {
      // For now, just log the form data
      console.log("Form submitted:", this.form);
      alert("Your message has been sent! ✅");
      // Reset the form
      this.form.name = "";
      this.form.email = "";
      this.form.phone = "";
      this.form.message = "";
    }
  }
};
</script>

<style scoped>
.contact-page {
  min-height: 70vh;
  font-family: 'Poppins', sans-serif;
  background: linear-gradient(135deg, #1d2e64d8, #f8e2cd02);
  color: rgba(255, 255, 255, 0.877);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
}

/* HERO SECTION */
.contact-hero {
  text-align: center;
  max-width: 600px;
  margin-bottom: 20px;
}

.contact-hero h1 {
  font-size: 29px;
  margin-bottom: 15px;
}

.contact-hero p {
  font-size: 25px;
  opacity: 5.9;
  line-height: 1.6;
}

/* FORM SECTION */
.contact-form-section {
  width: 70%;
  max-width: 400px;
  background: rgba(255,255,255,0.1);
  padding: 15px;
  border-radius: 4px;
  backdrop-filter: blur(500px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.267);
}

.contact-form .form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

.contact-form label {
  margin-bottom: 8px;
  font-weight: bold;
  color: black;
}

.contact-form input,
.contact-form textarea {
  padding: 10px 13px;
  border-radius: 11px;
  border: none;
  outline: none;
  font-size: 14px;
  background: rgba(255,255,255,0.2);
  color: black;
}

.contact-form input::placeholder,
.contact-form textarea::placeholder {
  color: rgba(255,255,255,0.7);
}

.contact-form textarea {
  min-height: 120px;
  resize: vertical;
}

/* BUTTON */
.btn {
  padding: 12px 25px;
  background: rgba(0, 0, 221, 0.185);
  color: black;
  border: none;
  border-radius: 25px;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;
}

.btn:hover {
  background: #3700ff4f;
  color: black;
}
</style>