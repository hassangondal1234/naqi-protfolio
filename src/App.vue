<template>
<div class="main">

<H1 class="logo">Muhammad Naqi</H1>

<div class="menu">
<a href="#">Home</a>
<a href="#">About Me</a>
<a href="#">Skills</a>
<a href="#">Projects</a>
<a href="#">Contact Me</a>
</div>

<section class="hero">
<h1>WELCOME TO MY PORTFOLIO</h1>
<h2>Hi, I'm Muhammad Naqi</h2>
<p>Programmer, Coder,<br>Frontend Developer</p>
<p class="location">based in Pakistan</p>
</section>
<section class="hero">

<div class="hero-box">
</div>

</section>

<section class="about">
<h2>About Me</h2>
<p>
My name is Muhammad Naqi, Frontend Developer with passion
for building modern web applications using HTML, CSS,
JavaScript and Vue.js.
</p>
</section>

<section class="skills">
<h2>My Skills</h2>

<div class="skill-box">
<span v-for="skill in skills" :key="skill">
{{ skill }}
</span>
</div>

</section>


<section class="projects">

<h2>My Projects</h2>

<div class="project" v-for="project in projects" :key="project.title">

<h3>{{ project.title }}</h3>

<p>{{ project.desc }}</p>

<button>View Details</button>

</div>

</section>


<section class="contact">

<h2>Contact Me</h2>

<input type="text" placeholder="Your Name">

<input type="email" placeholder="Your Email">

<input type="text" placeholder="Subject">

<textarea placeholder="Your Message"></textarea>

<button>Send Message</button>

</section>


<footer>

© 2026 Muhammad Naqi. All Rights Reserved.

</footer>

</div>
</template>


<script>
export default {

data(){
return{

skills:[
"HTML5",
"CSS3",
"JavaScript",
"Vue.js",
"Tailwind"
],

projects:[
{
title:"Portfolio Website",
desc:"Personal portfolio built using HTML CSS JavaScript."
},
{
title:"Shop Website",
desc:"Responsive shop website with modern design."
},
{
title:"Contact Form",
desc:"Vue contact form showing message in console."
}
]

}
}

}

 

</script>


<style>

.main{

background: linear-gradient(135deg,#020617,#0f172a,#1e293b);
min-height:100vh;
color:white;
font-family:Arial;
text-align:center;
padding:20px;

}

.logo{
margin-bottom:10px;
}

.menu a{
margin:10px;
text-decoration:none;
color:white;
font-weight:bold;
}

.menu a:hover{
color:#38bdf8;
}

.hero{
padding:100px 20px;
}

.hero h1{
color:#38bdf8;
}

.location{
color:#94a3b8;
}

.about{
padding:50px;
}

.skills{
padding:50px;
}

.skill-box span{

background:#1e293b;
padding:10px 20px;
margin:10px;
display:inline-block;
border-radius:6px;
border:1px solid #38bdf8;

}

.projects{
padding:50px;
}

.project{

background:#020617;
border:1px solid #38bdf8;
padding:20px;
margin:20px auto;
width:320px;
border-radius:10px;
transition:0.3s;

}

.project:hover{

transform:scale(1.05);

}

.project button{

background:#38bdf8;
border:none;
padding:8px 15px;
color:white;
border-radius:5px;
cursor:pointer;

}

.contact{
padding:50px;
}

.contact input,
.contact textarea{

display:block;
margin:10px auto;
padding:10px;
width:260px;
border:none;
border-radius:6px;
background:#020617;
color:white;
border:1px solid #38bdf8;

}

.contact button{

background:#38bdf8;
border:none;
padding:10px 20px;
color:white;
border-radius:6px;

}

footer{

margin-top:40px;
padding:20px;
background:#020617;

}

</style>