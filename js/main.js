function init(){
    setEvents();
}
function setEvents(){
    document.querySelector('#menu-btn').addEventListener('click',fixMenu)
}
function fixMenu(){
    const div=document.querySelector('#menu-fix')
    const bg=document.querySelector('#Home')
    const bgOpacity=document.querySelector('.bg-opacity')
    if (div.className.includes('responsive-fix')){
        div.className='info-home row align-items-center'
        bg.className='img-bg'
        bgOpacity.className='bg-opacity'
    }else{
        div.className='info-home row align-items-center responsive-fix'
        bg.className='img-bg responsive-fix-bg'
        bgOpacity.className='bg-opacity responsive-fix-bg'
    }
}