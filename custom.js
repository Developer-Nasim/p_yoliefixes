window.addEventListener('load', () => {

    function HeaderMenuResponsive() {
        const mBtns = document.querySelectorAll(".showMenuForMobile") 
        mBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                if (document.querySelector('body').classList.contains('show_menu')) {
                    document.querySelectorAll('.all_more_items').forEach(item => {
                        item.classList.remove('show_menu')
                    })
                }
                document.body.classList.toggle('show_menu')
            })
        })
    }
    HeaderMenuResponsive()


    function Accordion() {
        const accordin = document.querySelectorAll('.accordion4 > div > div:nth-child(2)') 
        if (accordin.length > 0) {
            accordin.forEach(btn => {
                btn.addEventListener('click', () => {
                    btn.parentElement.classList.toggle('show_contents') 
                })
            }) 
        }
    }
    Accordion()

 
    function TabMenuAction() {
        const breakingNews =  () => {
            const items = document.querySelectorAll('.categories8 > div')
            if (items.length > 0) {
                items.forEach(item => {
                    item.addEventListener('click', ()=>{

                        items.forEach(it => {
                            it.classList.remove('filter_activeBtn')
                        })

                        item.classList.add('filter_activeBtn') 
                    })
                })
            }
        }
        breakingNews()

        const upcommingEvenets =  () => {
            const items = document.querySelectorAll('.categories4 > div')
            if (items.length > 0) {
                items.forEach(item => {
                    item.addEventListener('click', ()=>{

                        items.forEach(it => {
                            it.classList.remove('filter_activeBtn')
                        })

                        item.classList.add('filter_activeBtn') 
                    })
                })
            }
        }
        upcommingEvenets()

        const artistProfile =  () => {
            const items = document.querySelectorAll('.categories6 > div')
            if (items.length > 0) {
                items.forEach(item => {
                    item.addEventListener('click', ()=>{

                        items.forEach(it => {
                            it.classList.remove('filter_activeBtn')
                        })

                        item.classList.add('filter_activeBtn') 
                    })
                })
            }
        }
        artistProfile()
     
    }
    TabMenuAction()


    function HeaderMoreExpend() {
        const moreBtns = document.querySelectorAll('.more_items')
        const moreBlk = document.querySelectorAll('.all_more_items')
        moreBtns.forEach(Btn => {
            Btn.addEventListener('click', () => {  
                moreBlk.forEach(item => {
                    item.classList.toggle('show_menu')
                })
            })
        })
    }
    HeaderMoreExpend()

    
})