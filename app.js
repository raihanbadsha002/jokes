const jokes = document.getElementById('joke');
const jokeButton = document.getElementById('jokeBtn');


// const generateJokes = () => {
//     const setHeader = {
//         headers: {
//             Accept : "application/json"
//         }
//     }
    
//     fetch('https://icanhazdadjoke.com/', setHeader)
//     .then(res => res.json())
//     .then(data => {
//         jokes.innerText = data.joke
//     })
//     .catch(error => console.log(error))
// }


// ===== Async Await================///////



const generateJokes = async () => {

    try{
         const setHeader = {
        headers: {
            Accept : "application/json"
        }
     } 
        const res = await fetch('https://icanhazdadjoke.com/', setHeader);
        const data = await res.json();
        jokes.innerText = data.joke 
    }
    catch(error){
      console.log(`This is error ${error}`);
    }
  
    
}

jokeButton.addEventListener('click', generateJokes);