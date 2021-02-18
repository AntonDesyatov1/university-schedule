export const fetchUniversitiesRequest = () =>
  fetch("http://localhost:9000/universities")
    .then(res => res.json())
    .then(responseData => responseData);

export const postCommentRequest = (comment, title, author) => {
  let reqBody = { comment, title, author };
  return fetch("http://localhost:9000/fetchComments", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(reqBody)
  })
    .then(res => res.json())
    .then(responseData => responseData);
};

export const loginUserRequest = (login, password) => {
  const reqBody = { login, password };
  return fetch("http://localhost:9000/loginUser", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(reqBody)
  })
    .then(res => res.json())
    .then(responseData => responseData)
    .catch(err => err);
};

export const fetchScheduleDataRequest = university => {
  return fetch("http://localhost:9000/fetchScheduleData", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ university })
  })
    .then(res => res.json())
    .then(responseData => responseData)
    .catch(err => err);
};

export const fetchUserDataRequest = login => {
  const requestBody = { login };
  return fetch("http://localhost:9000/fetchUserData", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(requestBody)
  })
    .then(res => res.json())
    .then(responseData => responseData)
    .catch(err => err);
};

export const signupUserRequest = (login, password) => {
  const requestBody = { login, password };
  return fetch("http://localhost:9000/registrateNewUser", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(requestBody)
  })
    .then(res => res.json())
    .then(responseData => responseData)
    .catch(err => err);
};
