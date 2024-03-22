function handlePlayerInfo () {
    let playerOne = 'Player One';
    let playerTwo = 'Player Two';
    let scoreOne = 0;
    let scoreTwo = 0;
    const getOne = () => playerOne;
    const getTwo = () => playerTwo;
    const getScoreOne = () => scoreOne;
    const getScoreTwo = () => scoreTwo;
    const updateOne = (name) => {playerOne = name;}
    const updateTwo = (name) => {playerTwo = name;}
    const upScoreOne = () => scoreOne++;
    const upScoreTwo = () => scoreTwo++;
    return {updateOne, updateTwo, getOne, getTwo, getScoreOne, getScoreTwo, upScoreOne, upScoreTwo}; 
}

const Info = handlePlayerInfo();

function handleBoard () {
    let message = '';
    let tile1 = '';
    let tile2 = '';
    let tile3 = '';
    let tile4 = '';
    let tile5 = '';
    let tile6 = '';
    let tile7 = '';
    let tile8 = '';
    let tile9 = '';
    let over = '';
    let activePlayer = 1;
    const getMessage = () => message;
    const get1 = () => tile1;
    const get2 = () => tile2;
    const get3 = () => tile3;
    const get4 = () => tile4;
    const get5 = () => tile5;
    const get6 = () => tile6;
    const get7 = () => tile7;
    const get8 = () => tile8;
    const get9 = () => tile9;
    const ifOver = () => over;
    const active = () => activePlayer;
    const up1 = (move) => {tile1 = move;}
    const up2 = (move) => {tile2 = move;}
    const up3 = (move) => {tile3 = move;}
    const up4 = (move) => {tile4 = move;}
    const up5 = (move) => {tile5 = move;}
    const up6 = (move) => {tile6 = move;}
    const up7 = (move) => {tile7 = move;}
    const up8 = (move) => {tile8 = move;}
    const up9 = (move) => {tile9 = move;}
    const passTurn = () => {
        if (active() == 1) {
            activePlayer = 2;
        }
        else {
            activePlayer = 1;
        }
    };
    const gameOver = () => {
        over = 'over';
    }
    const updateMessage = (newMessage) => {message = newMessage};
    const resetBoard = (move) => {
        updateMessage('');
        up1('');
        up2('');
        up3('');
        up4('');
        up5('');
        up6('');
        up7('');
        up8('');
        up9('');
        activePlayer = 1;
        over = '';
    };
    return {getMessage, updateMessage, get1, get2, get3, get4, get5, get6, get7, get8, get9, up1, up2, up3, up4, up5, up6, up7, up8, up9, resetBoard, active, passTurn, ifOver, gameOver};
}

const Board = handleBoard();

const DisplayController = (function(doc) {
    const lb = doc.querySelector('.lb');
    const rb = doc.querySelector('.rb');
    const left = doc.querySelector('.lefttext');
    const right = doc.querySelector('.righttext');
    const display = doc.querySelector('.display');
    const newgame = doc.querySelector('.newgame');
    const one = doc.querySelector('.one');
    const two = doc.querySelector('.two');
    const three = doc.querySelector('.three');
    const four = doc.querySelector('.four');
    const five = doc.querySelector('.five');
    const six = doc.querySelector('.six');
    const seven = doc.querySelector('.seven');
    const eight = doc.querySelector('.eight');
    const nine = doc.querySelector('.nine');
    const endGame = (player) => {
        if (player != '') {
            display.textContent = 'Game Over! ' + player + ' wins!'; 
        }
        else {
            display.textContent = "It's a draw!";
        }
        Board.gameOver();
    }
    const refresh = () => {
        one.textContent = Board.get1();
        two.textContent = Board.get2();
        three.textContent = Board.get3();
        four.textContent = Board.get4();
        five.textContent = Board.get5();
        six.textContent = Board.get6();
        seven.textContent = Board.get7();
        eight.textContent = Board.get8();
        nine.textContent = Board.get9();
        if (one.textContent != '' && (one.textContent == two.textContent && two.textContent == three.textContent || one.textContent == four.textContent && four.textContent == seven.textContent)) {
            if (one.textContent == 'X') {
                Info.upScoreOne();
                endGame(Info.getOne());
            }
            else {
                Info.upScoreTwo();
                endGame(Info.getTwo());
            }
        }
        else if (nine.textContent != '' && (seven.textContent == eight.textContent && eight.textContent == nine.textContent || three.textContent == six.textContent && six.textContent == nine.textContent)) {
            if (nine.textContent == 'X') {
                Info.upScoreOne();
                endGame(Info.getOne());
            }
            else {
                Info.upScoreTwo();
                endGame(Info.getTwo());
            }
        }
        else if (five.textContent != '' && (four.textContent == five.textContent && five.textContent == six.textContent || two.textContent == five.textContent && five.textContent == eight.textContent || one.textContent == five.textContent && five.textContent == nine.textContent || three.textContent == five.textContent && five.textContent == seven.textContent)) {
            if (five.textContent == 'X') {
                Info.upScoreOne();
                endGame(Info.getOne());
            }
            else {
                Info.upScoreTwo();
                endGame(Info.getTwo());
            }
        }
        else if (one.textContent != '' && two.textContent != '' && three.textContent != '' && four.textContent != '' && five.textContent != '' && six.textContent != '' && seven.textContent != '' && eight.textContent != '' && nine.textContent != '') {
            endGame('');
        }
        left.textContent = Info.getOne() + ': '+ Info.getScoreOne();
        right.textContent = Info.getTwo() + ': '+ Info.getScoreTwo();
    }
    one.addEventListener('click', () => {
        if (Board.get1() == '' && Board.ifOver() == '') {
            if (Board.active() == 1) {
                Board.up1('X');
            }
            else {
                Board.up1('O');
            }
            Board.passTurn();
            refresh();
        }
    });
    two.addEventListener('click', () => {
        if (Board.get2() == '' && Board.ifOver() == '') {
            if (Board.active() == 1) {
                Board.up2('X');
            }
            else {
                Board.up2('O');
            }
            Board.passTurn();
            refresh();
        }
    })
    three.addEventListener('click', () => {
        if (Board.get3() == '' && Board.ifOver() == '') {
            if (Board.active() == 1) {
                Board.up3('X');
            }
            else {
                Board.up3('O');
            }
            Board.passTurn();
            refresh();
        }
    })
    four.addEventListener('click', () => {
        if (Board.get4() == '' && Board.ifOver() == '') {
            if (Board.active() == 1) {
                Board.up4('X');
            }
            else {
                Board.up4('O');
            }
            Board.passTurn();
            refresh();
        }
    })
    five.addEventListener('click', () => {
        if (Board.get5() == '' && Board.ifOver() == '') {
            if (Board.active() == 1) {
                Board.up5('X');
            }
            else {
                Board.up5('O');
            }
            Board.passTurn();
            refresh();
        }
    })
    six.addEventListener('click', () => {
        if (Board.get6() == '' && Board.ifOver() == '') {
            if (Board.active() == 1) {
                Board.up6('X');
            }
            else {
                Board.up6('O');
            }
            Board.passTurn();
            refresh();
        }
    })
    seven.addEventListener('click', () => {
        if (Board.get7() == '' && Board.ifOver() == '') {
            if (Board.active() == 1) {
                Board.up7('X');
            }
            else {
                Board.up7('O');
            }
            Board.passTurn();
            refresh();
        }
    })
    eight.addEventListener('click', () => {
        if (Board.get8() == '' && Board.ifOver() == '') {
            if (Board.active() == 1) {
                Board.up8('X');
            }
            else {
                Board.up8('O');
            }
            Board.passTurn();
            refresh();
        }
    })
    nine.addEventListener('click', () => {
        if (Board.get9() == '' && Board.ifOver() == '') {
            if (Board.active() == 1) {
                Board.up9('X');
            }
            else {
                Board.up9('O');
            }
            Board.passTurn();
            refresh();
        }
    })
    newgame.addEventListener('click', () => {
        Board.resetBoard();
        refresh();
        display.textContent = '';
    })
    lb.addEventListener('click', () => {
        let name = prompt('Enter new name', 'Player One');
        Info.updateOne(name);
        refresh();
    });
    rb.addEventListener('click', () => {
        let name = prompt('Enter new name', 'Player Two');
        Info.updateTwo(name);
        refresh();
    });
})(document);




