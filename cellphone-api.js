const searchPhone = ()=>{
    const searchField =document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log(searchText);
    searchField.value='';
    const url =`https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    // console.log(url);
    fetch(url)
    .then(res=>res.json())
    .then(json =>displaySearchResult(json.data));
};
 
  const displaySearchResult = data => {
    console.log(data);
    const searchResult= document.getElementById('search-result');
    searchResult.textContent= '';
    if(data.length==0){
      results= 'no results found';
    };
    data.forEach (item=>{
      // console.log(item);
      const div =document.createElement('div');
      div.classList.add('col');
      div.innerHTML=`
      <div onclick="loadPhoneDetail('${item.slug}')"  class="card h-100">
            <img src="${item.image}" class="card-img-top" alt="...">
            <div class="card-body">
              <h4>Phone Name: ${item.phone_name}</h4>
              <h5>Phone Brand Name: ${item.brand}</h5> 
            </div>
            <button class="bg-primary text-white fw-bold w-25 mx-auto rounded-3 ">Click more<button/>
          </div>
      `;
      searchResult.appendChild(div);
    })
  };

  const loadPhoneDetail = itemId =>{
    // console.log(itemId);
    const url =`https://openapi.programming-hero.com/api/phone/${itemId}`;

    fetch(url)
    .then(res =>res.json())
    .then(json => displayPhoneDetail(json.data));
  };

  const displayPhoneDetail = item => {
    console.log(item);
    const phoneDetails = document.getElementById('phone-details');
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML=`
      <img src="${item.image}" class="card-img-top" alt="...">
      <p>${item.releaseDate ? item.releaseDate: 'no relese date found'}</p>
      <div class="card-body">
        <h5 class="card-title">Phone Name: ${item.name}</h5>
        <p class="card-text">Brand Name: ${item.brand}</p>
      </div>
    `;
    phoneDetails.appendChild(div);
  };


