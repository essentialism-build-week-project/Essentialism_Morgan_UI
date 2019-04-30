class Carousel {
    constructor(carouselItem){
        this.carouselItem = carouselItem;
        this.leftButton = document.querySelector('.carousel .left-button');
        this.rightButton = document.querySelector('.carousel .right-button');
        this.image = document.querySelectorAll('.image');
         this.contentIndex = 0;
        //  this.image = this.image[0].display = 'none';
         this.image[0].style.display = 'block';
        // this.image[this.contentIndex].style.display = 'block'

        // this.image.forEach(contentIndex => contentIndex +- 1).this.clicked();
      this.leftButton.addEventListener('click', ()=>this.leftClicked());
      this.rightButton.addEventListener('click', ()=>this.rightClicked());
       }
    
    
      rightClicked(){
        
        // if (this.contentIndex === this.image.length - 1) {
        //    this.contentIndex = this.image.length;
        

        //   this.image[this.contentIndex].style.display = 'block';
        //   this.contentIndex -= 1

        //   this.rightButton.removeEventListener('click');

        //   }
        // if(this.contentIndex > [this.image.length]-1 )
         if (this.contentIndex <= [this.image.length] - 2  ){
              // this.contentIndex = this.image.length;
              this.image[this.contentIndex ].style.display = 'none';

              this.contentIndex  += 1;
          this.image[this.contentIndex].style.display = 'block';
          this.rightButton.classList.add('right-button');
          this.rightButton.textContent = '>';
          
          //  document.getElementsByClassName('container carousel')
          // 
          }else{
            this.rightButton.classList.remove('right-button');
            this.rightButton.textContent = '|';
          }
            // this.contentIndex === this.image.length - 1;
            // this.rightButton.removeEventListener();
            
          //   if (this.contentIndex === 0) {

          //     this.image[this.contentIndex].style.display = 'block';

          //     this.contentIndex +=1;
          //     this.image[this.contentIndex].style.display = 'none';

          // } else if (this.contentIndex === this.image.length -1 ) {
    
              
    
              
          //     this.image[this.contentIndex].style.display = 'block';


          //   }
          }
           
          
      leftClicked(){
        if (this.contentIndex === 0) {

          this.image[this.contentIndex].style.display = 'block';

      } else if (this.contentIndex > 0) {

          this.image[this.contentIndex].style.display = 'none'

          this.contentIndex -=1;
          this.image[this.contentIndex].style.display = 'block';

      }
    }
  
}


  let carousel = document.querySelectorAll('.container .carousel').forEach(item => new Carousel(item));


/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
