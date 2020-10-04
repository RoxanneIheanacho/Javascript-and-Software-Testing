
'use strict'
var alphabet = /^[A-Za-z]+$/
let hangman = {}
var underscore = []
var nickname = []
var tried = []
var tries = 10
var trygone = false
var right = 0
var output = ''
let tryagain

var software = {
  word: ['s', 'o', 'f', 't', 'w', 'a', 'r', 'e'],
  numlets: new Array(8),
  tries: tries
}

var statemachine = {
  word: ['s', 't', 'a', 't', 'e', 'm', 'a', 'c', 'h', 'i', 'n', 'e'],
  numlets: new Array(12),
  tries: tries
}

var usecase = {
  word: ['u', 's', 'e', 'c', 'a', 's', 'e'],
  numlets: new Array(7),
  tries: tries
}

var word = [statemachine, software, usecase]

function newgame () {
  tries = 10
  hangman = {}
  hangman = word[Math.floor(Math.random() * word.length)]

  underscore = (function (hangman) {
    const inputletter = []

    for (var i = 0; i < hangman.word.length; i++) {
      if (hangman.word[i] === ' ') {
        inputletter.push(' ')
      } else {
        inputletter.push('_')
      }
    }
    return inputletter
  })(hangman)

  console.log(underscore.join(' ') + '   tries: ' + tries + '.' + ' good job, ' + nickname + 'your current word guess:' /** + guessed**/)
}

function reset () {
  hangman = {}
  underscore = []
  nickname = []
  newword = []
  tried = []
  tries = 10
  trygone = false
  right = 0
  output = ''
}

function gamewon () {
  console.log('congratulations ' + nickname + ' you win, press newgame(); to play again!')
  quitgame()
}

function nolives () {
  console.log('no lives left,' + nickname + ' press newgame(); to play again')
  quitgame()
}

function inputnickname (newname) {
  if (newname.length === 0) {
    throw new Error('your name cannot be empty. please enter your name')
    reset()
  } else if (newname.length > 15) {
    throw new Error('the name is too long, please try a shorter name!')
    reset()
  }
  return nickname.push(newname)
  console.log('hello' + newname + 'type newgame(); to play new game')
}

function guessword (newword) {
 if (newword.includes(' ')) {
 throw new Error('only one word allowed')
 }
 guessed.push(newword)

  
function inputletter (letter) {
  if (tried.includes(letter)) {
    tryagain = true
  } else if (letter.length < 0) {
    throw new Error('invalid input. please type in atleast one letter')
  } else if (letter.length > 1) {
    throw new Error('invalid input. type in only one letter')
  } else if (!letter.match(alphabet)) {
    throw new Error('invalid input. you can only guess letters.')
  } else {
      tryagain = false
  }
  return tried.push(letter)
  

  for (var i = 0; i < hangman.word.length; i++) {
    if (letter === hangman.word[i] && tryagain === false) {
      underscore[i] = letter
    } 

  }

  for (var j = 0; j < hangman.word.length; j++) {
    if (letter === hangman.word[j]) {
      right = 1
      break
    } else {
      right = 2
    }
  }

  if (right === 1 && tryagain === false) {
    output = 'there is a ' + tried[tried.length - 1] + 'in the word \n' + underscore.join(' ') + '\ntries: ' + tries + ' for ' + nickname + 'your current word guess:' + /** guessed**/
    console.log(output)
    output = ''
  } else if (right === 2 && tryagain === false) {
    trygone = true
    if (trygone) {
      tries--
    }
    trygone = false

    output = 'there is no' + ' ' + tried[tried.length - 1] + ' ' + 'in the word: \n' + underscore.join(' ') + '\ntries: ' + tries + ' for ' + nickname + 'your current word guess:' + /** guessed**/
    console.log(output)
    output = ''
  } else if (tryagain === true) {
    output = 'letter already played: \n' + underscore.join(' ') + '\ntries: ' + tries + ' for ' + nickname + 'your current word guess:' + /** guessed**/
    console.log(output)
    output = ''
  }

  hangman.numlets = underscore.slice(0)

  if (underscore.toString() === hangman.word.toString()) {
    gamewon()
  }

  if (tries === 0) {
    nolives()
  }
}
function instructions () {
  console.log("welcome!  please enter your nickname by pressing inputnickname('yournamehere'), and your game guess guessword('yourguess') then press newgame(); \nType inputletter('one letter here'); to try a letter \n to quite press quitgame(); and To check how many tries you have type tries\nYou start with " + tries + ' tries ')
}
function quitgame() {
    tryagain = false 
    hangman = {}
    underscore = []
    nickname = []
    newword = []
    tried = []
    tries = 10
    trygone = false
    right = 0
    output = ''
    console.log('game quit. type newgame(); to play a new game.')
}

console.log('Hangmangame test game!for instructions type instructions(); ')
instructions()
newgame()