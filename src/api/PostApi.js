const url = "http://192.168.76.2:3000/posts";

export function addPosts(post) {
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  })
    .then((res) => res.json())
    .then((json) => console.log(json))
    .catch((e) => {
      console.log(e);
    });
}

export function getAllPost(){
  return fetch(url + "?_expand=user&_sort=createdAt&_order=desc", {
    method: "GET"
  }).then((res)=> res.json())
  .catch(e => console.log(e));
}