const profilesList = document.getElementById('profiles');

// API URL
const apiURL = 'https://reqres.in/api/users'
const fetchData = async (url) => {
    try {

        let dataRes = await fetch(url);
        let jsonData = await dataRes.json();
        return jsonData;

    } catch (err) {
        console.error(err);
    }
}

// Render
const renderList = async () => {
    let getData = await fetchData(apiURL);
    getData.data.forEach(profile => {
        const collectionItem = document.createElement('li');
        collectionItem.classList = 'collection-item avatar';
        collectionItem.innerHTML += `
       <img src='${profile.avatar}' alt='' class="circle"/>
      <span class="title">
      ${profile.first_name} ${profile.last_name}</span>`;
        profilesList.appendChild(collectionItem);
    });
}

// here we do the init
renderList();

