'use strict';

const Emperor_of_Bluegaria = {username: "Almighty Emperor of Bluegaria", password: "glorytothebluegarianempire", admin: "yes"};
const Kaiser_of_Redistan = {username: "Kaiser of Redistan", password: "0000", admin: "yes"};
const Czar_of_Yellowgard = {username: "Czar of Yellowgard", password: "respecttothebluegarianempire", admin: "yes"};
const Administrator = {username: "Governement Offical of Bluegaria", password: "highlysecurepassword", admin: "yes"}
const Guest = {username: "Citizen of Bluegaria", password: "Bluegaria", admin: "no"};

var currentUser;

var username;
var userPass;

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
            break

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

        default:
            invalidUsername();
    };
};

let invalidFieldTimeout = 0;
function invalidUsername()
{
    document.getElementById('invalidMsg').innerHTML = 'username invalid!';
    invalidFieldTimeout++;

    if (invalidFieldTimeout > 9)
    {
        document.write('<h1 style="color:red;text-align:center;">Too many incorrect attempts! Connection terminated!</h1>')
    }

    setTimeout(() => {
        document.getElementById('invalidMsg').innerHTML = '';
    }, 3500);
}
function invalidPassword()
{
    document.getElementById('invalidMsg').innerHTML = 'password invalid!';
    invalidFieldTimeout++;

    if (invalidFieldTimeout > 9)
    {
        document.write('<h1 style="color:red;text-align:center;">Too many incorrect attempts! Connection terminated!</h1>')
    }

    setTimeout(() => {
        document.getElementById('invalidMsg').innerHTML = '';
    }, 3500);
};

function checkPassword() 
{
    if (userPass === currentUser.password)
    {
        alert('Correct password, now initiating second factor authorization confirmation');
        document.querySelector('.secondfa').style.display = 'flex';

        document.getElementById('secondfaSounds').play();

        setTimeout(() => {
            document.getElementById('kill_agent').style = 'transform: scale(1.75);'
        }, 200);

        setTimeout(() => {
            document.getElementById('kill_agent').addEventListener('click',function()
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