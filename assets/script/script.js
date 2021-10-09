const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
let isJumping = false;
let position = 0;

function handleKeyUp(event) {
    if(event.keyCode === 32) {
        if(!isJumping) {
            jump();
        }
    }
}

function jump() {

    isJumping = true;

    let upInterval = setInterval(() => {

        if(position > 150) {
            clearInterval(upInterval);

            //descendo

            let downInterval = setInterval(() => {
                if(position <= 0) {
                    clearInterval(downInterval);
                    isJumping = false;
                }else {

                    position -= 20;
                    dino.style.bottom = position + 'px';
                }
            }, 20);
        }else {
            
            position += 20;
    
            dino.style.bottom = position + 'px';
        }
    }, 20);
}

//cacti

function creatCacti() {
    const cactis = document.createElement('div');
    let cactisPosisiton = 1000;
    let randomTime = Math.random() * 6000;

    cactis.classList.add('cactus');
    cactis.style.left = 1000 + 'px';
    background.appendChild(cactis);

    let leftInterval = setInterval(() => {
        
        if(cactisPosisiton < -60) {
            clearInterval(leftInterval);
            background.removeChild(cactis);
        }else if(cactisPosisiton > 60 && cactisPosisiton < 160 && position < 60){
            // Game over

            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 class="game-over">Game over!</h1>';
        }else {
            cactisPosisiton -= 10;
            cactis.style.left = cactisPosisiton + 'px';
        }
    }, 20);

    setTimeout(creatCacti, randomTime);
}

creatCacti();
document.addEventListener('keydown', handleKeyUp);