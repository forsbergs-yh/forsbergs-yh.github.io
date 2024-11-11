
// https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/authorizing-oauth-apps
/* 
1: Users are redirected to request their GitHub identity
2: Users are redirected back to your site by GitHub
3: Your app accesses the API with the user's access token
*/
const clientId = 'Ov23liGusittSCIzNE2p';  // Client ID of the GitHub OAuth app
const url = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_url=${redirectURL}&state=${state}`; // Formatted string inside backticks
const redirectURL = `https://forsbergs-yh.github.io/home`;
const state = Math.random().toString(36).substring(2);  // Generating a random string for the state parameter

window.onload = myFunction; // Executions of referred function


// "myFunction" can be named any other "camelCase" defined name of choice
function myFunction() // Desired executions of myFunction defined below inside {}:
{
    fetch(
        url, {
            method: 'GET'
        }
    ) ;
}