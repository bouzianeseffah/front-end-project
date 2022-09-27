const API_URL = "https://todolist-project-backend.herokuapp.com/todo";
// get data from the back-end
export async function getTodosAPI() {
  return fetch(API_URL)
    .then((resp) => resp.json())
    .then((data) => data)
    .catch((e) => console.log(e));
}
//post data
export async function postTodosAPI(todo) {
  return fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  })
    .then((resp) => {
      return resp.json();
    })
    .then((data) => data)
    .catch((e) => console.log(e));
}
// update data
export async function patchTodosAPI(id, done) {
  let todo = {
    _id: id,
    done: done,
  };
  return fetch(API_URL + `/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  })
    .then((resp) => resp.json())
    .then((data) => data)
    .catch((e) => console.log(e));
}
//delete data
export async function deleteTodosAPI(id) {
  return fetch(API_URL + `/${id}`, {
    method: "DELETE",
  })
    .then((resp) => resp.json())
    .then((data) => data)
    .catch((e) => console.log(e));
}
