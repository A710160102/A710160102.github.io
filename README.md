<!DOCTYPE html>
<html>
<title>MY TEMPLATE</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<style>
body,h1,h2,h3,h4,h5,h6 {font-family: "Raleway", sans-serif}
</style>
<body class="w3-light-blue w3-content" style="max-width:1600px">

<!-- Sidebar/menu -->
<nav class="w3-sidebar w3-collapse w3-white w3-animate-left" style="z-index:3;width:300px;" id="mySidebar"><br>
  <div class="w3-container">
    <a href="#" onclick="w3_close()" class="w3-hide-large w3-right w3-jumbo w3-padding w3-hover-grey" title="close menu">
      <i class="fa fa-remove"></i>
    </a>
    <img src="IMG_6985.JPG" style="width:45%;" class="w3-round"><br><br>
    <h4><b>TEMPLATE</b></h4>
    <p class="w3-text-grey">Template by ADHITYAS</p>
  </div>
  <div class="w3-bar-block">
    <a href="#Template" onclick="w3_close()" class="w3-bar-item w3-button w3-padding w3-text-teal"><i class="fa fa-th-large fa-fw w3-margin-right"></i>TEMPLATE</a> 
    <a href="#about" onclick="w3_close()" class="w3-bar-item w3-button w3-padding"><i class="fa fa-user fa-fw w3-margin-right"></i>ABOUT</a> 
    <a href="#contact" onclick="w3_close()" class="w3-bar-item w3-button w3-padding"><i class="fa fa-envelope fa-fw w3-margin-right"></i>CONTACT</a>
  </div>
  <div class="w3-panel w3-large">
    <i class="fa fa-facebook-official w3-hover-opacity"></i>
    <i class="fa fa-instagram w3-hover-opacity"></i>
    <i class="fa fa-snapchat w3-hover-opacity"></i>
    <i class="fa fa-pinterest-p w3-hover-opacity"></i>
    <i class="fa fa-twitter w3-hover-opacity"></i>
    <i class="fa fa-linkedin w3-hover-opacity"></i>
  </div>
</nav>

<!-- Overlay effect when opening sidebar on small screens -->
<div class="w3-overlay w3-hide-large w3-animate-opacity" onclick="w3_close()" style="cursor:pointer" title="close side menu" id="myOverlay"></div>

<!-- !PAGE CONTENT! -->
<div class="w3-main" style="margin-left:300px">

  <!-- Header -->
  <header id="template">
    <a href="#"><img src="IMG_6985.JPG" style="width:65px;" class="w3-circle w3-right w3-margin w3-hide-large w3-hover-opacity"></a>
    <span class="w3-button w3-hide-large w3-xxlarge w3-hover-text-grey" onclick="w3_open()"><i class="fa fa-bars"></i></span>
    <div class="w3-container">
    <h1><b>Contoh Animasi 2D dan 3D</b></h1>
    <div class="w3-section w3-bottombar w3-padding-16">
      <span class="w3-margin-right">Filter:</span> 
      <button class="w3-button w3-black">ALL</button>
      <button class="w3-button w3-white"><i class="fa fa-diamond w3-margin-right"></i>Design</button>
      <button class="w3-button w3-white w3-hide-small"><i class="fa fa-photo w3-margin-right"></i>Photos</button>
      <button class="w3-button w3-white w3-hide-small"><i class="fa fa-map-pin w3-margin-right"></i>Art</button>
    </div>
    </div>
  </header>
  
  <!-- First Photo Grid-->
  <div class="w3-row-padding">
    <div class="w3-third w3-container w3-margin-bottom">
      <img src="tom and jerry.jpg" alt="image" style="width:100%" class="w3-hover-opacity">
      <div class="w3-container w3-white">
        <p><b>Tom And Jerry</b></p>
        <p>Tom and Jerry adalah serial film animasi Amerika yang dibuat pada tahun 1940 oleh William Hanna dan Joseph Barbera. Ini berpusat pada persaingan antara dua karakter judulnya, Tom, kucing, dan Jerry, tikus, dan banyak karakter berulang, yang didasarkan pada komedi slapstick.</p>
      </div>
    </div>
    <div class="w3-third w3-container w3-margin-bottom">
      <img src="scoobydoo.jpg" alt="image" style="width:100%" class="w3-hover-opacity">
      <div class="w3-container w3-white">
        <p><b>Scooby-Doo</b></p>
        <p>Serial animasi Scooby-Doo diciptakan oleh Joe Ruby, Ken Spears (cerita) dan Iwao Takamoto (perancang karakter) untuk Hanna-Barbera Productions --- produser film animasi yang menghasilkan banyak seri-seri lainnya yang berhubungan dengan Scooby-Doo -- hingga dibelinya rumah produksi ini oleh Warner Bros. pada tahun 1997. Warner Bros. ini kemudian meneruskan produksi serial animasi ini sejak saat itu.

.</p>
      </div>
    </div>
    <div class="w3-third w3-container">
      <img src="toy story.jpg" alt="image" style="width:100%" class="w3-hover-opacity">
      <div class="w3-container w3-white">
        <p><b>Toy Story</b></p>
        <p>Toy Story adalah film komedi petualangan animasi komputer Amerika tahun 1995 yang diproduksi oleh Pixar Animation Studios untuk Walt Disney Pictures. Berlangsung di dunia di mana mainan antropomorfik berpura-pura mati ketika manusia hadir, plotnya berfokus pada hubungan antara Woody, boneka koboi kuno, dan Buzz Lightyear.</p>
      </div>
    </div>
  </div>
  
  <!-- Second Photo Grid-->
  <div class="w3-row-padding">
    <div class="w3-third w3-container w3-margin-bottom">
      <img src="tangled.jpg" alt="image" style="width:100%" class="w3-hover-opacity">
      <div class="w3-container w3-white">
        <p><b>Tangled</b></p>
        <p>Kisah seorang gadis muda lugu, Rapunzel, dikurung ibunya yang sangat protektif padanya. Dia ingin melarikan diri ke dunia luar, akhirnya menjadi kenyataan dengan bantuan pencuri yang baik hati, Flynn..</p>
      </div>
    </div>
    <div class="w3-third w3-container w3-margin-bottom">
      <img src="keluarga pak somat.jpg" alt="image" style="width:100%" class="w3-hover-opacity">
      <div class="w3-container w3-white">
        <p><b>Keluarga Pak Somat</b></p>
        <p>Film animasi keluarga somat banyak digemari di kalangan masyarakat karena film ini bergenre komedi dan diproduksi oleh Dreamtoon Baros Studio, PT Animasi Kartun Indonesia. Film animasi ini asli buatan Indonesia dengan durasi 11 menit dan menggunakan bahasa Indonesia. Film animasi ini mulai ditayangkan di televisi pada tahun 2013-2015 sudah menayangkan 232 episode.
.</p>
      </div>
    </div>
    <div class="w3-third w3-container">
      <img src="chalkzone.jpg" alt="image" style="width:100%" class="w3-hover-opacity">
      <div class="w3-container w3-white">
        <p><b>Chalk Zone</b></p>
        <p>Serial ini berkisar pada petualangan Rudy bersama Snap kawannya dan teman sekelasnya Penny Sanchez. Rudy Tabootie merupakan seorang anak kecil berusia 10 tahun yang gemar menggambar, Penny Sanchez merupakan teman perempuan yang sekelas dengan Rudy dan dia sangat pintar. Selanjutnya ada Snap, snap merupakan makhluk biru yang baik yang berasal dari dunia kapur. Snap adalah hasil gambar ciptaan Rudy pada usia 8 tahun.</p>
      </div>
    </div>
  </div>

  <!-- Pagination -->
  <div class="w3-center w3-padding-32">
    <div class="w3-bar">
      <a href="#" class="w3-bar-item w3-button w3-hover-black">«</a>
      <a href="#" class="w3-bar-item w3-black w3-button">1</a>
      <a href="#" class="w3-bar-item w3-button w3-hover-black">2</a>
      <a href="#" class="w3-bar-item w3-button w3-hover-black">3</a>
      <a href="#" class="w3-bar-item w3-button w3-hover-black">4</a>
      <a href="#" class="w3-bar-item w3-button w3-hover-black">»</a>
    </div>
  </div>

  <!-- Images of Me -->
 <div class="w3-third w3-container w3-margin-bottom">
     <img src="IMG_6985.jpg" alt="image" style="width:100%" class="w3-hover-opacity">
     <div class="w3-container w3-white"></div>
</div>
    <h4><b>About Me</b></h4>
    <p>Hallo teman-teman! Perkenalkan nama saya Adhityas Nugraheni Basqoro biasa dipanggil Tyas. Saya membuat template seperti ini agar kalian dapat menambah ilmu tentang contoh animasi 2D dan 3D. Semoga bermanfaat untuk kalian yang membaca.</p>
    <hr>

  <!-- Contact Section -->
  <div class="w3-container w3-padding-large w3-grey">
    <h4 id="contact"><b>Contact Me</b></h4>
    <div class="w3-row-padding w3-center w3-padding-24" style="margin:0 -16px">
      <div class="w3-third w3-dark-grey">
        <p><i class="fa fa-envelope w3-xxlarge w3-text-light-grey"></i></p>
        <p>tyasheni9@gmail.com</p>
      </div>
      <div class="w3-third w3-teal">
        <p><i class="fa fa-map-marker w3-xxlarge w3-text-light-grey"></i></p>
        <p>Surakarta, ID</p>
      </div>
      <div class="w3-third w3-dark-grey">
        <p><i class="fa fa-phone w3-xxlarge w3-text-light-grey"></i></p>
        <p>6271567116</p>
      </div>
    </div>
    <hr class="w3-opacity">
    <form action="/action_page.php" target="_blank">
      <div class="w3-section">
        <label>Name</label>
        <input class="w3-input w3-border" type="text" name="Name" required>
      </div>
      <div class="w3-section">
        <label>Email</label>
        <input class="w3-input w3-border" type="text" name="Email" required>
      </div>
      <div class="w3-section">
        <label>Message</label>
        <input class="w3-input w3-border" type="text" name="Message" required>
      </div>
      <button type="submit" class="w3-button w3-black w3-margin-bottom"><i class="fa fa-paper-plane w3-margin-right"></i>Send Message</button>
    </form>
  </div>

  <!-- Footer -->
  <footer class="w3-container w3-padding-32 w3-dark-grey">
  <div class="w3-row-padding">
    <div class="w3-third">
      <h3>FOOTER</h3>
      <p>Template ini berisi tentang contoh-contoh animasi 2D dan 3D.</p>
      <p>Dibuat oleh Adhityas</p>
    </div>
  
    <div class="w3-third">
      <h3>BLOG POSTS</h3>
      <ul class="w3-ul w3-hoverable">
        <li class="w3-padding-16">
          <img src="doraemon.jpg" class="w3-left w3-margin-right" style="width:50px">
          <span class="w3-large">Doraemon</span><br>
          <span>Kartun terpopuler</span>
        </li>
        <li class="w3-padding-16">
          <img src="sinchan.jpg" class="w3-left w3-margin-right" style="width:50px">
          <span class="w3-large">Sinchan</span><br>
          <span>Kartun terpopuler</span>
        </li> 
      </ul>
    </div>

    <div class="w3-third">
      <h3>POPULAR TAGS</h3>
      <p>
        <span class="w3-tag w3-black w3-margin-bottom">Travel</span> <span class="w3-tag w3-grey w3-small w3-margin-bottom">Japan</span> <span class="w3-tag w3-grey w3-small w3-margin-bottom">London</span>
        <span class="w3-tag w3-grey w3-small w3-margin-bottom">Indonesian</span> <span class="w3-tag w3-grey w3-small w3-margin-bottom">Cartoon</span> <span class="w3-tag w3-grey w3-small w3-margin-bottom">DIY</span>
        <span class="w3-tag w3-grey w3-small w3-margin-bottom">Animation</span> <span class="w3-tag w3-grey w3-small w3-margin-bottom">Child</span> <span class="w3-tag w3-grey w3-small w3-margin-bottom">Family</span>
        <span class="w3-tag w3-grey w3-small w3-margin-bottom">News</span> <span class="w3-tag w3-grey w3-small w3-margin-bottom">Clothing</span> <span class="w3-tag w3-grey w3-small w3-margin-bottom">Shopping</span>
        <span class="w3-tag w3-grey w3-small w3-margin-bottom">Food</span> <span class="w3-tag w3-grey w3-small w3-margin-bottom">Games</span>
      </p>
    </div>

  </div>
  </footer>
  
  <div class="w3-black w3-center w3-padding-24">Powered by <a href="https://www.w3schools.com/w3css/default.asp" title="W3.CSS" target="_blank" class="w3-hover-opacity">w3.css</a></div>

<!-- End page content -->
</div>

<script>
// Script to open and close sidebar
function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}
 
function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}
</script>

</body>
</html>
