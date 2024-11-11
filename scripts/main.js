
// https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/authorizing-oauth-apps
/* 
1: Users are redirected to request their GitHub identity
2: Users are redirected back to your site by GitHub
3: Your app accesses the API with the user's access token
*/
const clientId = 'Ov23liGusittSCIzNE2p';  // Client ID of the GitHub OAuth app
const url = 'https://github.com/login/oauth/authorize';
const state = Math.random().toString(36).substring(2);  // Generating a random string for the state parameter

fetch( // function that makes HTTP requests to specified url
    clientId,
    
    url, {
    method: "GET" // The HTTP method for 'url'. Defaults to GET if not defined.;
    
})