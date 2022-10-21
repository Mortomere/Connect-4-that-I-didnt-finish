document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.grid div')
    const result = document.querySelector('#result')
    const displayCurrentPlayer = document.querySelector('#current-player')
    let currentPlayer = 1

    for (let i = 0; i < squares.length; i++){

       //function (index){
        //add an onclick to each square in your grid
            squares[i].onclick = function (onClick) {
            //if the square below your current sqaure is taken, you can go ontop of it      
                if(!squares[i].classList.contains('taken')) {
                    if (currentPlayer === 1) {
                        squares[i].classList.add('player-one')
                        //change the Player
                        currentPlayer = 2
                    }  else if (currentPlayer === 2) {
                        squares[i].classList.add('player-two')
                        //change the player
                        currentPlayer = 1
                    }
                    squares[i].classList.add('taken')
                    displayCurrentPlayer.innerHTML = currentPlayer
                } else { 
                    alert('cant go here')
                }
            }
         //}(i)
    }
})


    
