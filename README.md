# KamCode - Fetch API with Javascript (async , await)

How to fetch an API using fetch() method in JavaScript

You can check script.js file :

```js
const profilesList = document.getElementById("profiles");

// API URL
const apiURL = "https://reqres.in/api/users";
const fetchData = async (url) => {
  try {
    let dataRes = await fetch(url);
    let jsonData = await dataRes.json();
    return jsonData;
  } catch (err) {
    console.error(err);
  }
};

// Render
const renderList = async () => {
  let getData = await fetchData(apiURL);
  getData.data.forEach((profile) => {
    const collectionItem = document.createElement("li");
    collectionItem.classList = "collection-item avatar";
    collectionItem.innerHTML += `
       <img src='${profile.avatar}' alt='' class="circle"/>
      <span class="title">
      ${profile.first_name} ${profile.last_name}</span>`;
    profilesList.appendChild(collectionItem);
  });
};

// here we do the init
renderList();
```

↪ [Live Demo](https://medredakamal.github.io/km-fetchapi-js/)

If you are a developer, try to help this repository to get optimized with some pull requests!
I would love to see that . . .

## Overview

![ProjectOverview](https://github.com/medredakamal/km-fetchapi-js/raw/main/screenshot.png)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

This project is protected under GPT license, feel free to use it anywhere you want

### Built by Med Reda Kamal: [Follow me on LinkedIn](https://linkedin.com/in/medredakamal)

### My Portfolio is LIVE! : [Take a visit](https://medredakamal.dev)
