const canvas = document.getElementById("gameCanvas"); //Get The Canvas Element
const ctx = canvas.getContext("2d");


const preview = document.getElementById("preCanvas");
const pre = preview.getContext("2d");

//Tetrominoes Code
const I = [
    [
        [0, 1, 0, 0],
        [0, 1, 0, 0],
        [0, 1, 0, 0],
        [0, 1, 0, 0],
    ],
    [
        [0, 0, 0, 0],
        [1, 1, 1, 1],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
    ],

    [
        [0, 0, 1, 0],
        [0, 0, 1, 0],
        [0, 0, 1, 0],
        [0, 0, 1, 0],
    ],
    [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [1, 1, 1, 1],
        [0, 0, 0, 0],
    ]
];

const J = [
    [
        [1, 0, 0],
        [1, 1, 1],
        [0, 0, 0]
    ],
    [
        [0, 1, 1],
        [0, 1, 0],
        [0, 1, 0]
    ],
    [
        [0, 0, 0],
        [1, 1, 1],
        [0, 0, 1]
    ],
    [
        [0, 1, 0],
        [0, 1, 0],
        [1, 1, 0]
    ]
];

const L = [
    [
        [0, 0, 1],
        [1, 1, 1],
        [0, 0, 0]
    ],
    [
        [0, 1, 0],
        [0, 1, 0],
        [0, 1, 1]
    ],
    [
        [0, 0, 0],
        [1, 1, 1],
        [1, 0, 0]
    ],
    [
        [1, 1, 0],
        [0, 1, 0],
        [0, 1, 0]
    ]
];

const O = [
    [
        [0, 0, 0, 0],
        [0, 1, 1, 0],
        [0, 1, 1, 0],
        [0, 0, 0, 0],
    ]
];

const S = [
    [
        [0, 1, 1],
        [1, 1, 0],
        [0, 0, 0]
    ],
    [
        [0, 1, 0],
        [0, 1, 1],
        [0, 0, 1]
    ],
    [
        [0, 0, 0],
        [0, 1, 1],
        [1, 1, 0]
    ],
    [
        [1, 0, 0],
        [1, 1, 0],
        [0, 1, 0]
    ]
];

const T = [
    [
        [0, 1, 0],
        [1, 1, 1],
        [0, 0, 0]
    ],
    [
        [0, 1, 0],
        [0, 1, 1],
        [0, 1, 0]
    ],
    [
        [0, 0, 0],
        [1, 1, 1],
        [0, 1, 0]
    ],
    [
        [0, 1, 0],
        [1, 1, 0],
        [0, 1, 0]
    ]
];

const Z = [
    [
        [1, 1, 0],
        [0, 1, 1],
        [0, 0, 0]
    ],
    [
        [0, 0, 1],
        [0, 1, 1],
        [0, 1, 0]
    ],
    [
        [0, 0, 0],
        [1, 1, 0],
        [0, 1, 1]
    ],
    [
        [0, 1, 0],
        [1, 1, 0],
        [1, 0, 0]
    ]
];
// we first need too define ROW and  coloumns constants
const ROW = 20;
const COL = 10;

// Cosnt for squate size
const SQ = 30;

function drawSquare(x, y, color, stroke, T) {
    ctx.globalAlpha = 1;
    if (stroke === "piece") {
        if (T === "shadow") {
            ctx.strokeStyle = color;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.strokeRect(x * SQ + 1, y * SQ + 1, SQ - 2, SQ - 2);
            ctx.strokeRect(x * SQ + 2, y * SQ + 2, SQ - 4, SQ - 4);

            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.strokeRect(x * SQ + 6.5, y * SQ + 6.5, SQ - 13, SQ - 13);



            ctx.lineWidth = 2;
            // if (T === "shadow") { ctx.lineWidth = 5; };
            ctx.beginPath();
            ctx.moveTo(x * SQ + 2, y * SQ + 2)
            ctx.lineTo(x * SQ + 6.5, y * SQ + 6.5);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(x * SQ + SQ - 2, y * SQ + 2)
            ctx.lineTo(x * SQ + SQ - 6.5, y * SQ + 6.5);
            ctx.stroke();
            // Downn

            ctx.beginPath();
            ctx.moveTo(x * SQ + 2, y * SQ - 2 + SQ)
            ctx.lineTo(x * SQ + 6.5, y * SQ - 6.5 + SQ);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(x * SQ + SQ - 2, y * SQ - 2 + SQ)
            ctx.lineTo(x * SQ - 6.5 + SQ, y * SQ - 6.5 + SQ);
            ctx.stroke();
        } else {
            ctx.fillStyle = color;
            ctx.fillRect(x * SQ, y * SQ, SQ, SQ);
            ctx.strokeStyle = "black";
            ctx.lineWidth = 1;

            ctx.beginPath();
            ctx.strokeRect(x * SQ + 1, y * SQ + 1, SQ - 2, SQ - 2);
            ctx.strokeRect(x * SQ + 2, y * SQ + 2, SQ - 4, SQ - 4);

            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.strokeRect(x * SQ + 6.5, y * SQ + 6.5, SQ - 13, SQ - 13);



            ctx.lineWidth = 2;
            // if (T === "shadow") { ctx.lineWidth = 5; };
            ctx.beginPath();
            ctx.moveTo(x * SQ + 2, y * SQ + 2)
            ctx.lineTo(x * SQ + 6.5, y * SQ + 6.5);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(x * SQ + SQ - 2, y * SQ + 2)
            ctx.lineTo(x * SQ + SQ - 6.5, y * SQ + 6.5);
            ctx.stroke();
            // Downn

            ctx.beginPath();
            ctx.moveTo(x * SQ + 2, y * SQ - 2 + SQ)
            ctx.lineTo(x * SQ + 6.5, y * SQ - 6.5 + SQ);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(x * SQ + SQ - 2, y * SQ - 2 + SQ)
            ctx.lineTo(x * SQ - 6.5 + SQ, y * SQ - 6.5 + SQ);
            ctx.stroke();

        }

    }

    // ctx.strokeStyle = "black";
    // ctx.lineWidth = 1;
    // ctx.beginPath();
    // ctx.strokeRect(x * SQ + 1, y * SQ + 1, SQ - 2, SQ - 2);
    // ctx.strokeRect(x * SQ + 2, y * SQ + 2, SQ - 4, SQ - 4);
    else {

        ctx.fillStyle = color;
        ctx.fillRect(x * SQ, y * SQ, SQ, SQ);

    }
};



// a VACANT (empty) square has this color.
// const VACANT = "rgba(19, 18, 18, 0.719)";
const VACANT = "transparent";
// now we define the board array.
let board = [];


// let's create the rows.
for (let r = 0; r < ROW; r++) {
    board[r] = [];
    // let's create the columns
    for (let c = 0; c < COL; c++) {
        board[r][c] = VACANT;
        // when we first draw the board all the square are empty, so every square has the value "VACANT".
    }
}


function drawBoard(empty) {
    for (r = 0; r < ROW; r++) {
        for (c = 0; c < COL; c++) {
            if (empty == "empty") {
                board[r][c] = VACANT;
                drawSquare(c, r, board[r][c], "board");
            } else {
                if (board[r][c] != VACANT) {
                    drawSquare(c, r, board[r][c], "piece")
                } else {
                    drawSquare(c, r, board[r][c], "board");
                }
            }

        }
    }
}


drawBoard()
    //Piece and there color

const PIECES = [
        [Z, "rgb(75, 30, 252)"],
        [S, "rgb(238, 122, 46)"],
        [T, "rgb(248, 242, 242)"],
        [O, "yellow"],
        [L, "rgb(245, 94, 144)"],
        [I, "rgb(236, 26, 255)"],
        [J, "rgb(121, 236, 240)"]
    ]
    // Generator random Piece



function nextPiece() {
    r = Math.floor(Math.random() * PIECES.length)
    previewPiece = new PreviewPiece(PIECES[r][0], PIECES[r][1]);
    xd = r
    previewPiece.clear();
    previewPiece.draw();
    return xd

}





function Piece(Tetromino, color) {
    this.tetromino = Tetromino;
    this.color = color;
    this.tetrominoN = 0;
    this.activeTetromino = this.tetromino[this.tetrominoN];
    this.x = 3;
    this.y = -2;
    // Piece.prototype.draw
    this.draw = function() {
        let sha = this.shadow();
        for (r = 0; r < this.activeTetromino.length; r++) {
            for (c = 0; c < this.activeTetromino.length; c++) {
                if (this.activeTetromino[r][c]) {
                    drawSquare(this.x + c, this.y + r, this.color, "piece");
                    if (this.y + r !== this.y + r + sha) {
                        drawSquare(this.x + c, this.y + sha + r, this.color, "piece", "shadow")
                    }



                }
            }

        }

        // console.log(sha);


    }

    // Piece.prototype.Clear 
    this.update = function() {
            for (r = 0; r < this.activeTetromino.length; r++) {
                for (c = 0; c < this.activeTetromino.length; c++) {
                    if (this.activeTetromino[r][c]) {
                        update();
                    }
                }
            }
        }
        // Piece.prototype.moveDown
    this.moveDown = function() {

            if (!this.collide(0, 1, this.activeTetromino)) {

                this.update();
                this.y++;
                this.draw();
                // ctx.shadowOffsetY -= SQ
            } else {
                if (SoundOn) {
                    CollideSound.play();
                }
                this.lockPiece();
                p = new Piece(PIECES[x][0], PIECES[x][1]);
            }
            if (this.y === -1) {
                // ctx.shadowOffsetY -= 1 * SQ
                x = nextPiece();
            }

        }
        // Piece.prototype.moveRight 
    this.moveRight = function() {
        if (!this.collide(1, 0, this.activeTetromino)) {
            if (SoundOn) {
                MoveSound.play();

            }
            this.update();
            this.x++;
            this.draw();
        }
    }

    // Piece.prototype.moveLeft
    this.moveLeft = function() {
            if (SoundOn) {
                MoveSound.play();
            }
            if (!this.collide(-1, 0, this.activeTetromino)) {
                this.update();
                this.x--;
                this.draw();
            }
        }
        // Piece.prototype.rotate 
    this.rotate = function() {
        let nextPat = this.tetromino[(this.tetrominoN + 1) % this.tetromino.length];
        let kick = 0;
        if (SoundOn) {
            RotateSound.play();
        }
        if (this.collide(0, 0, nextPat)) {
            if (this.x > COL / 2) {
                kick = -1;
            } else {
                kick = 1;
            }
        }
        if (!this.collide(kick, 0, nextPat)) {

            this.update();
            this.x += kick;
            this.tetrominoN = (this.tetrominoN + 1) % this.tetromino.length;
            this.activeTetromino = this.tetromino[this.tetrominoN];
            this.draw();
        }
    }

    // Piece.prototype.collide
    this.collide = function(x, y, piece) {
        for (r = 0; r < piece.length; r++) {
            for (c = 0; c < piece.length; c++) {
                //Empty square skip
                if (!piece[r][c]) {
                    continue;
                }
                let newX = this.x + c + x;
                let newY = this.y + r + y;
                if (newX < 0 || newX >= COL || newY >= ROW) {
                    return true;
                }
                if (newY < 0) {
                    continue;
                }
                if (board[newY][newX] != VACANT) { return true; }
            }
        }
    }
    this.lockPiece = function() {
        let LineClear = 0
        let DeltaScore = 0
        for (r = 0; r < this.activeTetromino.length; r++) {
            for (c = 0; c < this.activeTetromino.length; c++) {
                //skip empty block
                if (!this.activeTetromino[r][c]) {

                    continue;
                }
                //piece to lock if reaches the top
                if (this.y + r < 0) {

                    gameOver = true;
                    ThemeSong.stop();

                    break;
                }
                //we lock piece when it reaches bottom
                board[this.y + r][this.x + c] = this.color
            }
        }
        // remove full rows
        for (r = 0; r < ROW; r++) {
            let isRowFull = true;
            for (c = 0; c < COL; c++) {
                isRowFull = isRowFull && (board[r][c] != VACANT);
            }
            if (isRowFull) {
                // ThemeSong.stop();
                if (SoundOn) {
                    LineClearSound.play();
                }
                // ThemeSong.play();
                for (y = r; y > 1; y--) {
                    for (c = 0; c < COL; c++) {
                        board[y][c] = "green"
                        board[y][c] = board[y - 1][c];


                    }
                }
                //the top row board[0][...] has no row above it
                for (c = 0; c < COL; c++) {
                    board[0][c] = VACANT;

                }
                //Increase Score
                LineClear++
                DeltaScore += 100




            }

        }

        Score += DeltaScore
        ClearLine += LineClear;

        //console.log("Socre", Score, "Line: ", LineClear, "TClear: ", ClearLine)
        update();
    }
    this.shadow = function() {
        for (i = 1; i < ROW; i++) {
            if (this.collide(0, i, this.activeTetromino)) {

                return i - 1 //i is the point of collision therefore we draw piece one step before collision
            } else { continue; }
        }
    }

}


function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    drawBoard();

}
var RotateSound = new sound("../../Game Assets/music/RotateSound.wav", false)
    // var MoveDown = new sound("../../Game Assets/music/MoveDown.wav", false)
var MoveSound = new sound("../../Game Assets/music/MoveSound.wav", false)
var GameOverSound = new sound("../../Game Assets/music/Game Over Sound.wav", false)
var ThemeSong = new sound("../../Game Assets/music/Tetris_theme.ogg", true);
var LineClearSound = new sound("../../Game Assets/music/Line Clear.wav", false);
var CollideSound = new sound("../../Game Assets/music/CollideSound.wav", false);
let Score = 0;
let dropStart = Date.now();
let gameOver = false;
let speed = 1000;
let PrevClear = 0;
let Level = 1;
let GamePaused = false;
let ClearLine = 0;
let start = false;
let SoundOn = null;
let MusicOn = null;
x = nextPiece()
let p = new Piece(PIECES[x][0], PIECES[x][1]);
if (localStorage.getItem("SoundOn") == null) {
    SoundOn = true;
    localStorage.setItem("SoundOn", SoundOn);
} else {
    SoundOn = (localStorage.getItem("SoundOn"));
    // console.log(SoundOn)
    if (SoundOn == "true") {
        SoundOn = true;
        document.getElementById("Sound").src = "../../Game Assets/img/Sound.png"

    } else if (SoundOn == "false") {
        SoundOn = false;
        document.getElementById("Sound").src = "../../Game Assets/img/MuteSound.png"

    }
}
if (localStorage.getItem("MusicOn") == null) {
    MusicOn = true;
    localStorage.setItem("MusicOn", MusicOn);
} else {
    MusicOn = (localStorage.getItem("MusicOn"));
    if (MusicOn == "true") {
        MusicOn = true;
        document.getElementById("MusicNote").src = "./Game Assets/img/music-note.png"

    } else if (MusicOn == "false") {
        MusicOn = false;
        document.getElementById("MusicNote").src = "./Game Assets/img/muted-music-notes.png"

    }
}

function StartGame() {
    Score = 0;
    dropStart = Date.now();
    gameOver = false;
    speed = 1000;
    PrevClear = 0;
    Level = 1;
    GamePaused = false;
    ClearLine = 0;
    start = true;
    if (MusicOn) {
        ThemeSong.play();
    }

    document.getElementById("menu").style.display = "none";
    document.getElementById("GameArea").style.display = "flex";

    drop()

}

if (localStorage.getItem("Score") == null) {
    localStorage.setItem("Score", Score)
}

function drop() {
    let now = Date.now();
    let delta = now - dropStart;
    if (delta > speed) {

        p.moveDown()

        dropStart = Date.now();
    }
    if (start) {
        if (!gameOver) {
            if (!GamePaused) {
                requestAnimationFrame(drop)
            }
        } else {
            if (MusicOn) {

                GameOverSound.play();
            }

            // console.log('Two seconds later, showing sleep in a loop...');
            document.getElementById("menu").style.display = "flex";
            document.getElementById("Dscore").innerHTML = Score;
            if (Number(localStorage.getItem("Score")) < Score) {
                document.getElementById("highScore").style.display = "block";
                localStorage.setItem("Score", Score);

            } else {
                document.getElementById("highScore").style.display = "none";

            }
            document.getElementById("displayScore").style.display = "flex";
            document.getElementById("start").style.display = "none";
            document.getElementById("newGame").style.display = "block";
            document.getElementById("Gover").style.display = "block";
            document.getElementById("resume").style.display = "none";
            document.getElementById("GameArea").style.display = "none";
            ThemeSong.stop();


            // menuShowHide();

        }
    }


    if (ClearLine - PrevClear >= 10) {
        PrevClear = ClearLine;
        Level += 1;
        if (speed >= 250) {

            speed -= 10 * Level;
        } else if (Level < 35) {
            speed += 10 * Level;
        }
        Score += 10 * Level;



    }
    document.getElementById("sc").innerHTML = Score;
    document.getElementById("lv").innerHTML = Level;
}



document.getElementById("Sound").addEventListener("click", function() {
    if (SoundOn) {
        SoundOn = false;
        localStorage.setItem("SoundOn", SoundOn)
        document.getElementById("Sound").src = "../../Game Assets/img/MuteSound.png"
            // document.getElementById("Sound").width = "30"
            // document.getElementById("Sound").height = "30"
    } else {
        SoundOn = true;
        localStorage.setItem("SoundOn", SoundOn)
        document.getElementById("Sound").src = "../../Game Assets/img/Sound.png"
            // document.getElementById("Sound").width = "40"
            // document.getElementById("Sound").height = "40"
    }
})
document.getElementById("MusicNote").addEventListener("click", function() {
    if (MusicOn) {
        MusicOn = false;
        localStorage.setItem("MusicOn", MusicOn)
        document.getElementById("MusicNote").src = "./Game Assets/img/muted-music-notes.png"

    } else {
        MusicOn = true;
        localStorage.setItem("MusicOn", MusicOn)
        document.getElementById("MusicNote").src = "./Game Assets/img/music-note.png"

    }
})

document.addEventListener("keydown", CONTROL);


function CONTROL(event) {
    if (start) {
        if (event.keyCode == 37) {
            if (!gameOver) {
                if (!GamePaused) {

                    event.preventDefault();
                    p.moveLeft();
                }

            }
        } else if (event.keyCode == 38) {
            if (!gameOver) {
                if (!GamePaused) {

                    event.preventDefault();

                    p.rotate();
                }

            }
        } else if (event.keyCode == 39) {
            if (!gameOver) {
                if (!GamePaused) {

                    event.preventDefault();

                    p.moveRight()
                }

            }
        } else if (event.keyCode == 40) {
            if (!gameOver) {
                if (!GamePaused) {

                    event.preventDefault();
                    Score++;

                    p.moveDown();
                }
            }
        } else if (event.keyCode == 80) {
            if (!gameOver) {
                checkbox.checked = !checkbox.checked;
                togglePause()
            }
        }
    }
}
document.getElementById("gameCanvas").addEventListener("click", function(e) {
    e.preventDefault();
    p.rotate();
    dropStart = Date.now();
})
let TouchX, TouchY, MoveX = 0,
    MoveY = 0,
    XDiff, YDiff;
document.getElementById("gameCanvas").addEventListener("touchstart", function(e) {
    TouchX = e.touches[0].clientX
    TouchY = e.touches[0].clientY
        // console.log("Tx: ", TouchX, "Ty: ", TouchY)
    document.getElementById("gameCanvas").addEventListener('touchmove', function(e) {
        XDiff = TouchX - MoveX;
        YDiff = TouchY - MoveY;
        if (Math.abs(e.touches[0].clientX - MoveX) > 4 || Math.abs(e.touches[0].clientY - MoveY) > 4) {
            if (Math.abs(XDiff) > Math.abs(YDiff)) {

                if (TouchX < e.touches[0].clientX) {

                    //Right Swipe;
                    p.moveRight();
                } else {
                    // Left Swipe
                    p.moveLeft();
                }
                // TouchX = e.touches[0].clientX
            } else if (Math.abs(XDiff) < Math.abs(YDiff)) {
                if (TouchY < e.touches[0].clientY) {
                    //Down Swipe;

                    Score++;

                    p.moveDown();
                }
            }
        }
        MoveX = e.touches[0].clientX;
        MoveY = e.touches[0].clientY;




    }, { passive: false })
}, { passive: false });


function drawSquarePreview(x, y, color) {
    pre.fillStyle = color;
    pre.fillRect(x * SQ, y * SQ, SQ, SQ);
    pre.strokeStyle = "black";
    pre.lineWidth = 1;
    pre.beginPath();
    pre.strokeRect(x * SQ + 1, y * SQ + 1, SQ - 2, SQ - 2);
    pre.strokeRect(x * SQ + 2, y * SQ + 2, SQ - 4, SQ - 4);
    // pre.strokeRect(x * SQ + 2.5, y * SQ + 2.5, SQ - 5, SQ - 5);

    pre.lineWidth = 1;
    pre.beginPath();
    pre.strokeRect(x * SQ + 6.5, y * SQ + 6.5, SQ - 13, SQ - 13);



    pre.lineWidth = 2;
    //Upper Left 
    pre.beginPath();
    pre.moveTo(x * SQ + 2, y * SQ + 2);
    pre.lineTo(x * SQ + 6.5, y * SQ + 6.5);
    pre.stroke();
    // Upper Right
    pre.beginPath();
    pre.moveTo(x * SQ + SQ - 2, y * SQ + 2);
    pre.lineTo(x * SQ + SQ - 6.5, y * SQ + 6.5);
    pre.stroke();
    // Down Left 
    pre.beginPath();
    pre.moveTo(x * SQ + 2, y * SQ - 2 + SQ);
    pre.lineTo(x * SQ + 6.5, y * SQ - 6.5 + SQ);
    pre.stroke();
    // Down Right
    pre.beginPath();
    pre.moveTo(x * SQ + SQ - 2, y * SQ - 2 + SQ)
    pre.lineTo(x * SQ - 6.5 + SQ, y * SQ - 6.5 + SQ);
    pre.stroke();
}

function PreviewPiece(Tetromino, color) {
    this.tetromino = Tetromino;
    this.color = color;
    this.tetrominoN = 0;
    this.activeTetromino = this.tetromino[this.tetrominoN];
    this.x = 0;
    this.y = 0;
    this.draw = function() {
        for (r = 0; r < this.activeTetromino.length; r++) {
            for (c = 0; c < this.activeTetromino.length; c++) {
                if (this.activeTetromino[r][c]) {
                    drawSquarePreview(this.x + c, this.y + r, this.color);

                }
            }
        }
    }
    this.clear = function() {
        pre.clearRect(0, 0, preview.width, preview.height);

    }
}




document.getElementById("play-pause").addEventListener("click", togglePause)
const checkbox = document.getElementById('play-pause');

function togglePause() {

    if (!gameOver) {
        if (!GamePaused) {
            GamePaused = true;
            // document.getElementById("icon").className = "play";

            // async function demo() {
            if (MusicOn) {

                ThemeSong.stop();
            }

            // await sleep(10000);
            // console.log('Two seconds later, showing sleep in a loop...');
            document.getElementById("iconL").innerHTML = "Resume";
            document.getElementById("menu").style.display = "flex";
            document.getElementById("start").style.display = "none";
            document.getElementById("Gover").style.display = "none";
            document.getElementById("displayScore").style.display = "none";
            document.getElementById("newGame").style.display = "block";
            document.getElementById("resume").style.display = "block";
            document.getElementById("GameArea").style.display = "none";
            // }
        } else {
            GamePaused = false;
            if (MusicOn) {
                ThemeSong.play();
            }
            // document.getElementById("icon").className = "pause";
            document.getElementById("iconL").innerHTML = "Pause";
            document.getElementById("menu").style.display = "none";
            document.getElementById("GameArea").style.display = "flex";

            // document.getElementById("GameArea").style.display = "flex";
        }
        drop();
    }
}

function newGame() {

    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ThemeSong.stop();
    drawBoard("empty")
    x = nextPiece()
    p = new Piece(PIECES[x][0], PIECES[x][1]);
    document.getElementById("menu").style.display = "none";
    document.getElementById("GameArea").style.display = "flex";
    if (!gameOver) {

        checkbox.checked = !checkbox.checked;
    }
    StartGame();

}

function resume() {
    checkbox.checked = !checkbox.checked;
    togglePause()
}

function sound(src, loop) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function() {
        this.sound.loop = loop;
        this.sound.play();
    }
    this.stop = function() {
        this.sound.pause();
    }
}



document.addEventListener("visibilitychange", function() {
    if (document.hidden) {
        if (!GamePaused && start) {
            checkbox.checked = !checkbox.checked;
            togglePause()
        }
    }
});