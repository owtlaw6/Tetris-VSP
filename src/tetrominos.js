export const TETROMINOS = {
    L: {
        shape: [ [true, false], [true, false], [true, true] ],
        color: 'red'
    },
    O: {
        shape: [ [true, true], [true, true] ],
        color: 'black'
    },
    J: {
        shape: [ [false, true], [false, true], [true, true] ],
        color: 'green'
    },
    I:{
        shape: [ [true], [true], [true], [true] ],
        color: 'blue'
    },
    S:{
        shape: [ [false, true, true], [true, true, false] ],
        color: 'yellow'
    },
    Z:{
        shape: [ [true, true, false], [false, true, true] ],
        color: 'orange'
    },
    T:{
        shape: [ [false, true, false], [true, true, true] ],
        color: 'brown'
    }

}

export const randomTetromino = () => {
    const tetrominos = 'IJLOSTZ';
    const randomTetromino = tetrominos[Math.floor(Math.random() * tetrominos.length)];
    //const randomTetromino = "O";
    return TETROMINOS[randomTetromino];
}
