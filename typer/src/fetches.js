const URL = "https://typ3out.herokuapp.com"
// "http://localhost:3000"

// =====================
// game fetches
// =====================
export function getGame(id){
  return fetch(`${URL}/games/${id}`, {
      credentials: "include"
    })
      .then(r => r.json())
}

export function getHighScoreGames(){
  return fetch(`${URL}/games`)
  .then(r => r.json())
}

// custom route to get currentUser's game stats
export function getUserstats(){
  return fetch(`${URL}/userstats`,{
    credentials: "include"
  })
  .then(r => r.json())
}

export function deleteGame(id) {
  return fetch(`${URL}/games/${id}`, {
    method: 'DELETE',
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(r => r.json())
}

export function updateGame(id, body){
  return fetch(`${URL}/games/${id}`, {
      method: "PATCH",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
    .then(r => r.json())
}

export function createGame(passageId){
  const postBody = {
    speed: 0,
    accuracy: 0,
    passage_id: passageId
  }

  console.log("postBody", postBody)

  return fetch(`${URL}/games`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(postBody)
  })
  .then(r => r.json())
}

// =====================
// passage fetches
// =====================
export function getPassages(){
  return fetch(`${URL}/passages`)
    .then(r => r.json())
}

// =====================
// user fetches
// =====================
export function signUp(username, password){
  return fetch(`${URL}/users`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    },
    // body: JSON.stringify({signUpInput})
    body: JSON.stringify({username, password})
  })
  .then(r => r.json())
}

export function login(username, password){
  return fetch(`${URL}/login`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    },
    // body: JSON.stringify({loginInput})
    body: JSON.stringify({username, password})
  })
  .then(r => r.json())
}

export function autoLogin(){
  return fetch(`${URL}/autologin`, {
    credentials: "include" // tells browser to send cookies with fetch req
  })
  .then(r => {
    if (r.ok) {
      return r.json()
    }
    else{
      throw Error("Not logged in!")
    }
  })
}

export function logout(){
  return fetch(`${URL}/logout`, {
    credentials: "include"
  })
  .then(r => r.json())
}
