const url = "http://192.168.1.4:3000/backgrounds";

export function getAllBackground() {
    return fetch(url,{
      method: "GET",
    })
      .then((res) => res.json())
      .then((json) => json)
      .catch((e) => console.log(e));
  }