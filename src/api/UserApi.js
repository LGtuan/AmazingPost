const url = "http://192.168.1.9:3000/users";

export function getUserWithPhone(phone) {
  console.log(phone);
  return fetch(url + "?phone=" + phone, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((json) => json[0])
    .catch((e) => console.log(e));
}

export function getUserWithId(phone) {
  console.log(phone);
  return fetch(url + "?id=" + phone, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((json) => json[0])
    .catch((e) => console.log(e));
}

export function addUser(user) {
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .then((json) => console.log(json))
    .catch((e) => console.log(e));
}
