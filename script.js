const dino = document.querySelector('.dino')
const krzak = document.querySelector('.krzak')
const wynik = document.querySelector('.wynik')
const st = getComputedStyle(krzak);
const sp = getComputedStyle(dino);
let punkt = 0;
let wyskok = 0;

function podskok() {
    let timerId = setInterval(function () {
        if (wyskok > 250) {
            clearInterval(timerId)
            let timerDownId = setInterval(function () {
                if (wyskok < 0) {
                    clearInterval(timerDownId)
                }
                wyskok -= 5
                dino.style.bottom = `${wyskok}px`
            },20)
         }
        wyskok += 30
        dino.style.bottom = `${wyskok}px`
    }, 20)
    punkt++
}
dino.addEventListener('click', podskok)

const przeszkoda = () => {

    if (st.left == `1200px`) {
        krzak.style.left = `0px`
    } else if (st.left == `0px`) {
        krzak.style.left = `1200px`
    }
    
    wygrana()
    

}

setInterval(function () {
    przeszkoda()
}, 1000);
function  wygrana(){
    
   if(krzak.offsetLeft>'550'&&krzak.offsetLeft<'750'&&dino.offsetTop>'450'){
   wynik.innerHTML=`Game Ower, ilość punktów:  ${punkt} `
   setTimeout("window.location.reload()", 2000);
   }  
}
