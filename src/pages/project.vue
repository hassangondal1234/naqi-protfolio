<template>
  <div class="shop-page">

    <header>
      NAQI SHOES STORE 👟
    </header>

    <!-- MEN SECTION -->
    <section class="section">
      <h2>Men Shoes</h2>
      <div class="products">
        <div class="card" v-for="(product, index) in menShoes" :key="index">
          <img :src="product.img" :alt="product.name" />
          <div class="card-content">
            <h3>{{ product.name }}</h3>
            <p>{{ product.desc }}</p>
            <div class="price">{{ product.price }}</div>
            <a href="#" class="btn">Buy Now</a>
          </div>
        </div>
      </div>
    </section>

    <!-- WOMEN SECTION -->
    <section class="section">
      <h2>Women Shoes</h2>
      <div class="products">
        <div class="card" v-for="(product, index) in womenShoes" :key="index">
          <img :src="product.img" :alt="product.name" />
          <div class="card-content">
            <h3>{{ product.name }}</h3>
            <p>{{ product.desc }}</p>
            <div class="price">{{ product.price }}</div>
            <a href="#" class="btn">Buy Now</a>
          </div>
        </div>
      </div>
    </section>

    <!-- KIDS SECTION -->
    <section class="section">
      <h2>Kids Shoes</h2>
      <div class="products">
        <div class="card" v-for="(product, index) in kidsShoes" :key="index">
          <img :src="product.img" :alt="product.name" />
          <div class="card-content">
            <h3>{{ product.name }}</h3>
            <p>{{ product.desc }}</p>
            <div class="price">{{ product.price }}</div>
            <a href="#" class="btn">Buy Now</a>
          </div>
        </div>
      </div>
    </section>

    <!-- VISIT CARD -->
    <div class="visit">
      <h2>Visit Our Store 🏬</h2>
      <p>Come and explore the latest shoes collection with best quality and prices.</p>
      <a href="#">Visit Now</a>
    </div>

  </div>
</template>

<script>
export default {
  name: "Shop",
  data() {
    return {
      menShoes: [
        { name: "Running Shoes", desc: "Comfortable and stylish running shoes.", price: "Rs. 4500", img: "..." },
        { name: "Casual Shoes", desc: "Perfect for daily wear.", price: "Rs. 3200", img: "..." }
      ],  // <-- comma ok
      womenShoes: [
        { name: "Heels", desc: "Elegant high heels for special occasions.", price: "Rs. 5500", img: "..." },
        { name: "Flat Sandals", desc: "Comfortable and trendy.", price: "Rs. 2800", img: "..." }
      ],  // <-- comma ok
      kidsShoes: [
        { name: "Kids Sneakers", desc: "Fun and colorful sneakers for kids.", price: "Rs. 2000", img: "..." },
        { name: "School Shoes", desc: "Durable shoes for school use.", price: "Rs. 1800", img: "..." }
      ]  // <-- last array no comma
    }
  }
}
</script>

<style scoped>
.shop-page {
  background: linear-gradient(120deg,#0f2027,#203a43,#2c5364);
  color: white;
  min-height: 100vh;
  padding-bottom: 50px;
}

header {
  text-align: center;
  padding: 40px;
  font-size: 35px;
  font-weight: bold;
  letter-spacing: 2px;
}

.section {
  padding: 50px 20px;
}

.section h2 {
  font-size: 30px;
  margin-bottom: 30px;
  border-left: 5px solid #00ffd5;
  padding-left: 10px;
}

.products {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px,1fr));
  gap: 25px;
}

.card {
  background: rgba(255,255,255,0.05);
  border-radius: 20px;
  overflow: hidden;
  backdrop-filter: blur(10px);
  transition: 0.4s;
  box-shadow: 0 10px 30px rgba(0,0,0,0.5);
}

.card:hover {
  transform: translateY(-10px) scale(1.03);
}

.card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-content {
  padding: 15px;
}

.card-content h3 {
  margin-bottom: 10px;
}

.card-content p {
  font-size: 14px;
  opacity: 0.8;
}

.price {
  margin-top: 10px;
  color: #00ffd5;
  font-weight: bold;
}

.btn {
  display: inline-block;
  margin-top: 10px;
  padding: 8px 15px;
  background: #00ffd5;
  color: black;
  border-radius: 20px;
  text-decoration: none;
  font-size: 14px;
}

.visit {
  margin: 60px 20px;
  padding: 40px;
  text-align: center;
  border-radius: 20px;
  background: linear-gradient(135deg,#00ffd5,#00a8ff);
  color: black;
  box-shadow: 0 10px 30px rgba(0,0,0,0.5);
}

.visit h2 {
  margin-bottom: 15px;
}

.visit p {
  margin-bottom: 20px;
}

.visit a {
  padding: 10px 20px;
  background: black;
  color: white;
  border-radius: 20px;
  text-decoration: none;
}
</style>