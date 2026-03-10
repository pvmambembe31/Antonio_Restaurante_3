*{
margin:0;
padding:0;
box-sizing:border-box;
}

body{
font-family:Poppins,sans-serif;
background:#f7f7f7;
color:#222;
line-height:1.6;
}

h1,h2,h3{
font-family:"Playfair Display",serif;
}

section{
padding:80px 10%;
}

.hero{
height:100vh;
background-image:url("https://images.unsplash.com/photo-1533637326139-7d5f0b0d0c4c");
background-size:cover;
background-position:center;
display:flex;
align-items:center;
justify-content:center;
text-align:center;
color:white;
position:relative;
}

.hero::after{
content:"";
position:absolute;
inset:0;
background:rgba(0,0,0,0.5);
}

.hero-content{
position:relative;
max-width:800px;
}

.hero h1{
font-size:3.5rem;
margin-bottom:20px;
}

.hero p{
font-size:1.2rem;
margin-bottom:40px;
}

.buttons{
display:flex;
gap:20px;
justify-content:center;
flex-wrap:wrap;
}

.btn{
padding:14px 26px;
border-radius:30px;
border:none;
cursor:pointer;
font-size:1rem;
transition:.3s;
}

.btn-primary{
background:#c48b3a;
color:white;
}

.btn-secondary{
background:white;
color:#333;
}

.btn:hover{
transform:translateY(-3px);
}

.features{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(200px,1fr));
gap:30px;
margin-top:40px;
}

.feature{
background:white;
padding:30px;
border-radius:18px;
box-shadow:0 10px 25px rgba(0,0,0,0.08);
text-align:center;
transition:.3s;
}

.feature:hover{
transform:translateY(-5px);
}

.gallery{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
gap:20px;
}

.gallery img{
width:100%;
border-radius:16px;
}

.menu-grid{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
gap:30px;
}

.menu-item{
background:white;
border-radius:16px;
overflow:hidden;
box-shadow:0 10px 25px rgba(0,0,0,0.08);
cursor:pointer;
transition:.3s;
}

.menu-item:hover{
transform:translateY(-5px);
}

.menu-item img{
width:100%;
height:180px;
object-fit:cover;
}

.menu-item-content{
padding:20px;
}

.modal{
position:fixed;
top:0;
left:0;
width:100%;
height:100%;
background:rgba(0,0,0,0.7);
display:flex;
align-items:center;
justify-content:center;
opacity:0;
pointer-events:none;
transition:.3s;
}

.modal.active{
opacity:1;
pointer-events:auto;
}

.modal-box{
background:white;
border-radius:20px;
max-width:500px;
padding:30px;
text-align:center;
}

.recommendations{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
gap:25px;
}

.place{
background:white;
padding:25px;
border-radius:16px;
box-shadow:0 10px 25px rgba(0,0,0,0.08);
}

.cta{
text-align:center;
background:#111;
color:white;
padding:100px 10%;
}

.cta h2{
margin-bottom:30px;
}

.footer{
background:#222;
color:white;
text-align:center;
padding:40px 10%;
}

@media(max-width:700px){

.hero h1{
font-size:2.5rem;
}

section{
padding:60px 8%;
}

}