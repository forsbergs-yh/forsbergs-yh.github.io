
// https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/authorizing-oauth-apps
/* 
1: Users are redirected to request their GitHub identity
2: Users are redirected back to your site by GitHub
3: Your app accesses the API with the user's access token
*/
const clientId = 'Ov23liGusittSCIzNE2p';  // Client ID of the GitHub OAuth app
const state = Math.random().toString(36).substring(2);  // Generating a random string for the state parameter
const url = `https://github.com/login/oauth/authorize?client_id=${clientId}&state=${state}`; // Formatted string inside backticks

window.onload = myFunction; // Executions of referred function


// "myFunction" can be defined with any appropriate name using the "camelCase" naming convention
function myFunction() // Desired executions of myFunction defined below inside {}:
{
    var iframe = document.createElement('iframe');
    iframe.src = url;
    document.body.appendChild(iframe); // Append 'iframe' as a child element of body to the html document
}