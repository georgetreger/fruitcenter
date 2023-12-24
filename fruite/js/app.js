    const header = document.querySelector('header')
  const menuEl = document.querySelector('.menu-links')
      const faEl = document.querySelector('.fa-bars')
      const faMark = document.querySelector('.fa-xmark')
      const fasearch = document.querySelector('.fa-search')
      const modalContainer = document.querySelector('.modal-container')
      const faClose = document.querySelector('.fa-close')
            

            fasearch.addEventListener('click', function(){
                modalContainer.style.display = 'block'
            })
            faClose.addEventListener('click', function(){
                modalContainer.style.display = 'none'
            })

            window.addEventListener('click', function(e){
                if (e.target === modalContainer){
                    modalContainer.style.display = 'none'
                }
            })

          faEl.addEventListener('click',()=>{
               menuEl.classList.toggle('show-menu')
          })
          faMark.addEventListener('click',()=>{
               menuEl.classList.toggle('show-menu')
          })

      window.addEventListener('scroll', ()=>{
           if (document.documentElement.scrollTop > 20){
              header.classList.add('sticky')   
           } else{
               header.classList.remove('sticky')
           }
      })