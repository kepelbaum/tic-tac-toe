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
    const up1 = (move) => {tile1 = move;}
    const up2 = (move) => {tile2 = move;}
    const up3 = (move) => {tile3 = move;}
    const up4 = (move) => {tile4 = move;}
    const up5 = (move) => {tile5 = move;}
    const up6 = (move) => {tile6 = move;}
    const up7 = (move) => {tile7 = move;}
    const up8 = (move) => {tile8 = move;}
    const up9 = (move) => {tile9 = move;}
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
    };
    return {getMessage, updateMessage, get1, get2, get3, get4, get5, get6, get7, get8, get9, up1, up2, up3, up4, up5, up6, up7, up8, up9, resetBoard};
}

const Board = handleBoard();

// console.log(Board.get1());
// Board.up1('X');
// console.log(Board.get1());
// Board.resetBoard();
// console.log(Board.get1());

// console.log(Info.getOne(), Info.getTwo());
// Info.updateOne('Bob');
// Info.updateTwo('Ross');
// console.log(Info.getOne(), Info.getTwo());

// console.log(Info.getScoreOne, Info.getScoreTwo);
// Info.upScoreOne();
// Info.upScoreOne();
// Info.upScoreOne();
// Info.upScoreOne();
// Info.upScoreOne();
// Info.upScoreTwo();
// console.log(Info.getScoreOne(), Info.getScoreTwo());












// displaymessage
// tilestate