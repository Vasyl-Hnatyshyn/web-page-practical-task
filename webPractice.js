
        let owl = $('.owl-carousel');
        owl.owlCarousel({
            items: 1,

            loop: true,
            margin: 10,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true
        });
  

  
        const dotsArray = [...document.querySelectorAll('.owl-dot')]


        dotsArray.forEach((dot, index) => {
            dot.addEventListener('mouseover', () => {
                dot.classList.add('active')
                $('.owl-carousel').trigger("to.owl.carousel", [index, 1])
            })

            dot.addEventListener('mouseleave', () => {
                dot.classList.remove('active')
            })
        });
        
        
   
     
    
       
    const alertTop = document.getElementById('search').onclick=()=>{
             
            
            let a = document.getElementById('topSearch').value;
            let b = document.getElementById('alert');
            if (a ==""){  
        b.style.display="block";
    }
    else {
        b.style.display="none";
    }
    };
            
           
            
    
    const alertBot = document.getElementById('search2').onclick=()=>{


    let a = document.getElementById('botSearch').value;
    let b = document.getElementById('alert2');
    if (a ==""){

    b.style.display="block";
    }
    else {
        b.style.display="none";
    }
    };
            

