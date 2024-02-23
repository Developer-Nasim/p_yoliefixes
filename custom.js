window.addEventListener('load', () => {

    function HeaderMenuResponsive() {
        const mBtns = document.querySelectorAll(".showMenuForMobile")
        const mItems = document.querySelectorAll(".headMemu")
        mBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                document.body.classList.toggle('show_menu')
            })
        })
    }
    HeaderMenuResponsive()







    



    function HeaderMoreExpend() {
        const moreBtns = document.querySelectorAll('.more_items')
        const moreBlk = document.querySelectorAll('.all_more_items')
        moreBtns.forEach(Btn => {
            Btn.addEventListener('click', () => { 
                console.log(Btn)
                moreBlk.forEach(item => {
                    item.classList.toggle('show_menu')
                })
            })
        })
    }
    HeaderMoreExpend()

    
})