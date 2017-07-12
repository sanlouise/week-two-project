//
// !! Don't Edit this file
//
function runAnswer (num, question) {
  const color = 'background: #ff4e29; color: #FFFFFF';
  console.log(`%c -- Question ${num} -- `, color);
  question();
}


// Using the fetch API, I had to move the logger functions to the main.js file to
// avoid having all functions come back as undefined. I believe that it was happening
// because of the asynchronous request to the Etsy API - the logger ran first but
// the functions had not loaded yet as the response from Etsy's server came late.
