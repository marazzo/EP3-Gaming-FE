 
const username = document.getElementById('username')
const password = document.getElementById('password')
const button = document.getElementById('button')

button.addEventListener('click',()=>{
  const newUser = {username: username.value, password: password.value}
  const options = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newUser)
  }

  fetch('APISIGNUP', options)
    .then(response =>{
      response.json()
    }).then(data =>{
      console.log(data)
    }).catch(err=>{
      console.log(err)
    })
})

const SignUp=()=>{
  return(
  <form action="/login" method="post">
      <div>
          <label>Username:</label>
          <input id="username"type="text" name="username"/>
      </div>
      <div>
          <label>Password:</label>
          <input id="password" type="password" name="password"/>
      </div>
      <div>
          <input id = "button" type="submit" value="Log In"/>
      </div>
  </form>
)}




export default SignUp
  