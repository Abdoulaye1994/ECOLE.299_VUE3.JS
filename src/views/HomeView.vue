<template>
  <div class="home">
  
    <HelloWorld msg="LES HUMAINS OF NEW YORK"/>
    <h1 style="font-size: 90px; font-family: 'Times New Roman', Times, serif;"> Série </h1>
    <p style="font-size: 25px; font-family: 'Times New Roman', Times, serif;"> These stories focus on specific populations, <br> examining their experiences and the challenges that they face. </p>
    
    <div class="img2" >
     <div class="coll">
        <h1> HUMANS OF NEW YORK</h1>

      <h2> Invisible <br> Wounds </h2> <br>
     
       <button><a href="/reade1storie">READ SERIES</a></button>
     
      </div>      
    </div>

  </div>

     <div class="imgerge3" >
         <div class="coll">

                  <div class="poull">
                    <h1> HUMANS OF NEW YORK</h1>

                    <h2 style="color: rgb(210, 28, 34);;"> Pediatric Cancer  </h2> <br>
     
                     <button>READ SERIES</button>    
                  </div>
         </div>
    </div>

         <div class="imgerges4" >
             <div class="coll">

           <div class="pull">
               <h1> HUMANS OF NEW YORK</h1>

                <h2 style="color: rgb(201, 231, 214);"> Immate  Stories </h2> <br>

                <button>READ SERIES</button>  

              </div>
             </div>   
    </div>

        <div class="imgergeoes5" >
             <div class="coll">
                
                     <div class="perle">
                              <h1> HUMANS OF NEW YORK</h1>

                        <h2 style="color: rgb(198, 106, 31)"> Syrian Americans </h2> <br>

                         <button>READ SERIES</button> 
                   </div>

             </div>   
    </div>

           <div class="imgergeoes6" >
                 <div class="coll">
                  <div class="delle">
                         <h1> HUMANS OF NEW YORK</h1>

                        <h2 style="color: rgb(0, 0, 0);"> Refugee Stories </h2> <br>

                         <button>READ SERIES</button>   
                  </div>

                 </div>
    </div>


    <footer>

      
      <a href="#">More Humans of New York</a>

      <div class="list">
        <ul>
         <li><a href=""></a>STORIES</li>
         <li><a href=""></a>COUNTRIE</li>
         <li><a href=""></a>SERIES</li>
         <li><a href=""></a>ABOUT</li>

        </ul>
      </div>
    </footer>
      
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'


export default {
  name: 'HomeView',
  components: {
    HelloWorld,
  }
}

</script>

   <style> 


.coll {

  margin-right: 300px;

}


.poull {

     margin-left: 1000px;
}


.pull {

margin-left: 1000px;
}


.perle {

margin-right: 1000px;

}


.delle {

  margin-left: 1070px;

}

    .coll h1 {

      font-family: "Akzidenz-Grotesk BQ";
       letter-spacing: 3px;
       margin-bottom: 4px;
      font-size: 20px;

     }


     .coll h2 {

      font-family: 'GT Sectra Display Light';
      font-weight: lighter;
      line-height: 145px;
       font-size: 169px;
      margin-top: 4px;
       margin-bottom: 25px;
      color: rgb(105, 52, 27);
       padding-right: 20px;
      
     }


     .coll button {


  background: none;
  border: 1px solid black;
  padding: 17px 35px;
  font-family: 'Merriweather';
  font-weight: bold;
  letter-spacing: 3px;
  font-size: 11px;
  outline: 0px;
  position: relative;
  z-index: 1;
  color: #000; 
  }

   .img2 {
        
        background-image: url("@/assets/6.jpg");
        background-size: cover;
        background-position: 25% 50% ;
              position: relative;
              margin: 0;
              padding: 177px;
              text-align: center;
              box-sizing: border-box;
              background-repeat: no-repeat;
              position: relative;
              height: 750px;

   }
     
     .imgerge3 {
        
        background-image: url("@/assets/2.jpg");
        background-size: cover;
        background-position-x: 20%;
        background-position-y: 50% ;
              position: relative;
              margin: 0;
              padding: 200px;
              text-align: center;
              box-sizing: border-box;
              background-repeat: no-repeat;
              position: relative;
              height: 800px;
       
     }

        .imgerges4 {
           background-image: url("@/assets/3.jpg");
           background-size: cover;
           background-position-x: 100%;
           background-position-y: 50% ;
              position: relative;
              margin: 0;
              padding: 177px;
              text-align: center;
              box-sizing: border-box;
              background-repeat: no-repeat;
              position: relative;
              height: 700px;
        }

            .imgergeoes5 {
              background-image: url("@/assets/4.jpg");
              background-size: cover;
              background-position-x: 100%;
              background-position-y: 50% ;
              position: relative;
              margin: 0;
              padding: 177px;
              text-align: center;
              box-sizing: border-box;
              background-repeat: no-repeat;
              position: relative;
              height: 700px;
        }
            .imgergeoes6 {
              background-image: url("@/assets/5.jpg");
              background-size: cover;
              background-position-x: 100%;
              background-position-y: 50% ;
              position: relative;
              margin: 0;
              padding: 177px;
              text-align: center;
              box-sizing: border-box;
              background-repeat: no-repeat;
              position: relative;
              height: 700px;
            }
           
   footer {


      height: 525px;
     background: #000;
      text-align: center;
      padding-top: 70px;


      a {
        font-family: "GT Sectra Display";
       color: #fff;
       font-size: 45px;
       text-decoration: none;
        display: block;
       background-color: transparent;
        margin-bottom: 100px;


   }

      .list {
        transition: transform 300ms ease-out;
      max-width: 1170px;
      margin: auto;
      font-family: "Akzidenz-Grotesk BQ";
      text-transform: uppercase;
      font-size: 20px;
      letter-spacing: 2px;
      display: flex;
      justify-content: space-between;
      transition-delay: 200ms !important;
       
      }

      ul {
         display: flex;
      }

      li a{
        justify-content: space-between;
        margin: 5px;
      }
   }

   </style>



