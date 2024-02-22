window.addEventListener('load', () => {
    
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