document.querySelector('#request').addEventListener('click', getQuestion)
const url = 'https://american-citizenship-test.herokuapp.com/api/'

function getQuestion(){
  let choice = document.querySelector('input').value.toLowerCase()
  
  console.log(`${url}${choice}`)
  fetch(`${url}${choice}`)
  .then(res => res.json()) // parse response as JSON
  .then(data => {
    console.log(data)
    document.querySelector('#obj').innerText = data
  
  })
  .catch(err => {
      console.log(`error ${err}`)
  });
}
