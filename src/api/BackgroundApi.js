const url = "http://10.24.42.115:3000/backgrounds";

export function getAllBackground() {
    return fetch(url,{
      method: "GET",
    })
      .then((res) => res.json())
      .then((json) => json)
      .catch((e) => console.log(e));
  }