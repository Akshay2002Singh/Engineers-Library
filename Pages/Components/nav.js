var footer=document.createElement("nav")
footer.innerHTML =`<nav>
<div class="navbar_custom">
	
<div class="logo">
    <h2>Coders</h2>
</div>

<ul class="links">
    <li><a href="AKTU_E-library/index.html">Home</a></li>
    <li><a href="AKTU_E-library/Pages/pbooks.html">Programming Books</a></li>
    <li><a href="AKTU_E-library/Pages/semester.html">Semester Books</a></li>
    <li><a href="AKTU_E-library/Pages/developers.html">Developers</a></li>
</ul>


<div class="toggle">
    <div class="line1"></div>
    <div class="line2"></div>
    <div class="line3"></div>
</div>
</div>
</nav>
    `
document.body.appendChild(footer)



// nav toogle 
const navbar = document.querySelector('.navbar_custom')

navbar.querySelector('.toggle').addEventListener('click',()=>{
	
	navbar.classList.toggle('collapsed')
	
})

window.addEventListener('scroll',(e)=>{
	
	let windowY = window.pageYOffset
	
	let navbarHeight = document.querySelector('.navbar').offsetHeight
	
	if(windowY>navbarHeight) navbar.classList.add('sticky')
	else navbar.classList.remove('sticky')
	
})