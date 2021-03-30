'use strict';

let globalObserverPointer;

window.addEventListener(
    'load',
    function()
    {
        // Select the node that will be observed for mutations
        const targetNode = document.querySelector('.repository');

        // Options for the observer (which mutations to observe)
        const config = { attributes: true, childList: true, subtree: true, characterData: true };

        // Callback function to execute when mutations are observed
        const callback = function(mutationsList, observer) {
            document.location.href = 'https://bluegarian-advanced-technologies.github.io/repository/Unauthorized.html';
        };

        // Create an observer instance linked to the callback function
        const observer = new MutationObserver(callback);

        // Start observing the target node for configured mutations
        observer.observe(targetNode, config);

        globalObserverPointer = observer;

        document.querySelector('.loading').style = 'opacity:0';
        setTimeout(() => {
            document.querySelector('.loading').style.display = 'none';
        }, 500);
    }
)

// User objects and properties storage
const Emperor_of_Bluegaria = {username: "Almighty Emperor of Bluegaria", password: "glorytothebluegarianempire", admin: "yes"};
const Kaiser_of_Redistan = {username: "Kaiser of Redistan", password: "CheekiBreeki", admin: "yes"};
const Czar_of_Yellowgard = {username: "Czar of Yellowgard", password: "respecttothebluegarianempire", admin: "yes"};
const Administrator = {username: "Governement Official of Bluegaria", password: "highlysecurepassword", admin: "yes"}

const Guest = {username: "Citizen of Bluegaria", password: "Bluegaria", admin: "no"};

// Seperate object from the chronicle of Bluegaria
const Macy = {username: "Bingus", password: "Amongus", admin: "yes"};
const Stephen =  {username: "Stimmons", password: "die", admin: "yes"};
const Mr_Moist = {username: "Mr. Moist", password: "Password", admin: "yes"};
const Corey = {username: "Corona Steve", password: "asd921112", admin: "yes"};

let Temp = {username: "Website in development object", password: "0", admin: "yes"};

// Global variable declaration

var currentUser;
var username;
var userPass;

let widthCenter = window.innerWidth / 2;
let heightCenter = window.innerHeight / 2;

widthCenter -= 400;
heightCenter -= 300;

// Get user to read TOU before login

document.querySelector('.login-box').addEventListener('click',readTOU)

function readTOU() {
    window.open("https://bluegarian-advanced-technologies.github.io/repository/TOU.html", "The Terms of Use", `top=${heightCenter},left=${widthCenter},width=800,height=600`);
    
    setTimeout(() => {
        document.querySelector('.login-box-tou').style.display = 'none';
        document.getElementById('username').removeAttribute('disabled');
        document.getElementById('password').removeAttribute('disabled');
        document.getElementById('password').removeAttribute('disabled');
        document.querySelector('.login-box button').removeAttribute('disabled');

        document.querySelector('.login-box').removeEventListener('click', readTOU);
    }, 5000);
}

// Show password toggle

document.getElementById('show-password').addEventListener(
    'click',
    function()
    {
        if (document.getElementById('show-password').checked == true)
        {
            document.getElementById('password').type = 'text';
        }else {
            document.getElementById('password').type = 'password';
        }
    }
)

// Check if inputs have text

document.getElementById('username').addEventListener(
    'keydown',
    function()
    {
        setTimeout(() => {
            if (document.getElementById('username').value != '')
            {
                document.getElementById('username').style = 'border-bottom: 2px solid #1F92EE; color: white;';
            }else {
                document.getElementById('username').style = '';
            }
        }, 100);
    }
);
document.getElementById('password').addEventListener(
    'keydown',
    function()
    {
        setTimeout(() => {
            if (document.getElementById('password').value != '')
            {
                document.getElementById('password').style = 'border-bottom: 2px solid #1F92EE; color: white;';
            }else {
                document.getElementById('password').style = '';
            }
        }, 100);
    }
);

// Login switch function
function login() 
{
    username = document.getElementById('username').value;
    userPass = document.getElementById('password').value;

    switch (username)
    {
        case '':
            document.getElementById('invalidMsg').innerHTML = 'no username entered!';
            setTimeout(() => {
                document.getElementById('invalidMsg').innerHTML = '';
            }, 3500);
            break;

        case 'Guest':
            currentUser = Guest;
            checkPassword();
            break;

        case 'Emperor of Bluegaria':
            currentUser = Emperor_of_Bluegaria;
            checkPassword();
            break;

        case 'Kaiser of Redistan':
            currentUser = Kaiser_of_Redistan;
            checkPassword();
            break;

        case 'Czar of Yellowgard':
            currentUser = Czar_of_Yellowgard;
            checkPassword();
            break;

        case 'Administrator':
            currentUser = Administrator;
            checkPassword();
            break;

        case 'Macy':
            currentUser = Macy;
            checkPassword();
            break;

        case 'Stephan':
            currentUser = Stephen;
            checkPassword();
            break;

        case 'Mr. Moist':
            currentUser = Mr_Moist;
            checkPassword();
            break;

        case 'Corona Steve':
            currentUser = Corey;
            checkPassword();
            break;

        case 'Temp':
            currentUser = Temp;
            checkPassword();
            break;

        default:
            invalidUsername();
    };
};

// Do various instances of these functions depending on if username or password is invalid
let invalidFieldTimeout = 0;
function invalidUsername()
{
    document.getElementById('invalidMsg').innerHTML = 'username invalid!';
    document.getElementById('username').style = 'border-bottom: 2px solid red;background: rgba(255, 0, 0, 0.3);';
    
    document.getElementById('incorrectSound').play();

    invalidFieldTimeout++;

    if (invalidFieldTimeout > 9)
    {
        document.write('<h1 style="color:red;text-align:center;">Too many incorrect attempts! Connection terminated!</h1>')
    }

    setTimeout(() => {
        document.getElementById('invalidMsg').innerHTML = '';
        document.getElementById('username').style = '';
    }, 3500);
}
function invalidPassword()
{
    document.getElementById('invalidMsg').innerHTML = 'password invalid!';
    document.getElementById('password').style = 'border-bottom: 2px solid red;background: rgba(255, 0, 0, 0.3);';
    
    document.getElementById('incorrectSound').play();
    
    invalidFieldTimeout++;

    if (invalidFieldTimeout > 9)
    {
        document.write('<h1 style="color:red;text-align:center;">Too many incorrect attempts! Connection terminated!</h1>')
    }

    setTimeout(() => {
        document.getElementById('invalidMsg').innerHTML = '';
        document.getElementById('password').style = '';
    }, 3500);
};

// Checking password, displaying memetic kill agent, and showing main repository
function checkPassword() 
{
    if (userPass === currentUser.password)
    {
        alert('Correct password, now initiating second factor authorization confirmation');
        globalObserverPointer.disconnect();

        document.querySelector('.secondfa').style.display = 'flex';

        document.getElementById('secondfaSounds').play();

        setTimeout(() => {
            document.getElementById('kill_agent').style = 'transform: scale(1.75);'
        }, 200);

        setTimeout(() => {
            document.getElementById('kill_agent').addEventListener('click', function()
            {
                document.querySelector('.secondfa').style.display = 'none';
                document.getElementById('kill_agent').style = 'transform: scale(1);';
    
                document.getElementById('secondfaSounds').pause();
    
                document.querySelector('main').style.display = 'block';
                document.querySelector('.parallax-wrapper').style.display = 'none';

                clearTimeout(eee);
    
                window.onbeforeunload = function (e) {
                    e = e || window.event;
                
                    // For IE and Firefox prior to version 4
                    if (e) {
                        e.returnValue = 'You will be logged out when you exit.';
                    }
                
                    // For Safari
                    return 'You will be logged out when you exit.';
                };
    
                if (currentUser.admin === "yes")
                {
                    document.querySelector('.secret').style.display = 'block';
                }

                document.getElementById('welcomer').innerHTML = currentUser.username;
            })
        }, 1);

        setTimeout(() => {
            document.getElementById('secondfaInfo').innerHTML = 'Press on the image';
        }, 2000);

        let eee = setTimeout(() => {
            document.write('<h1 style="color:red;text-align:center;">Connection terminated! User unresponsive timeout triggered!</h1>')
        }, 10000);
    }else if (userPass == ''){
        document.getElementById('invalidMsg').innerHTML = 'no password entered!';
        setTimeout(() => {
            document.getElementById('invalidMsg').innerHTML = '';
        }, 3500);
    }else {
        invalidPassword();
    };
};

// Main repository folder code ----------------------------- Seperate from login system code above 

let currentSong;

const songs = [
    'Adventure',
    'Aria Math',
    'Crab Rave',
    'Fallen Kingdom',
    'Firefly',
    'Last Summer',
    'Megalovania',
    'Pigstep',
    'Sweden',
    'Turtle Beach',
    'Wait'
];

function hasSong()
{
    var hasTheSong = songs.includes(document.getElementById('music-selected').value);
    return hasTheSong;
}

document.getElementById('submit-music').addEventListener(
    'click',
    function(music)
    {
        music = document.getElementById('music-selected').value;

            if (music == '')
            {
                document.getElementById('music-msg').style = 'transform: translate(0px,-25px);';
                document.getElementById('music-msg').innerHTML = 'No song selected!';
                document.getElementById('music-selected').style = 'border-bottom: 2px solid red;background: rgba(255, 0, 0, 0.3);';
                setTimeout(() => {
                    document.getElementById('music-msg').style = 'opacity: 0;';
                    document.getElementById('music-selected').style = '';
                }, 1200);
            }
            else if (hasSong() == false)
            {
                document.getElementById('music-msg').style = 'transform: translate(0px,-25px);';
                document.getElementById('music-msg').innerHTML = 'Song not found!';
                document.getElementById('music-selected').value = '';
                setTimeout(() => {
                    document.getElementById('music-msg').style = 'opacity: 0;';
                }, 1500);
            }else if (music === currentSong)
            {
                document.getElementById('music-msg').style = 'transform: translate(0px,-25px);';
                document.getElementById('music-msg').classList.add('music-msg--rgb')
                document.getElementById('music-msg').innerHTML = 'Song already playing!';
                document.getElementById('music-selected').value = '';
                setTimeout(() => {
                    document.getElementById('music-msg').style = 'opacity: 0;';
                }, 1500);

                setTimeout(() => {
                    document.getElementById('music-msg').classList.remove('music-msg--rgb');
                }, 2000);
            }else {
                currentSong = music;
    
                document.getElementById('music-controller').src = `Assets/Audio/Music/${currentSong}.mp3`;
                music = document.getElementById('music-selected').value = '';
    
                document.getElementById('music-msg').classList.add('music-msg--rgb')
                document.getElementById('music-msg').style = 'transform: translate(0px,-25px);';
                document.getElementById('music-msg').innerHTML = `Now playing: ${currentSong}!`;
    
                setTimeout(() => {
                    document.getElementById('music-msg').style = 'opacity: 0;';
            }, 3000);

            setTimeout(() => {
                document.getElementById('music-msg').classList.remove('music-msg--rgb');
            }, 3500);
        };
    }
);
