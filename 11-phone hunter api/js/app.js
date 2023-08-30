const loadPhones = async (searchText) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    showPhones(phones);
}

const showPhones = phones =>{
    const phoneCardContainer = document.getElementById('phone-container');
    phoneCardContainer.innerText = ''

    // show all phone button
    const showAllContainer = document.getElementById('showAll-btn');
    if(phones.length > 12){
        showAllContainer.classList.remove('hidden');
    }else{
        showAllContainer.classList.add('hidden')
    }

    // phone not found
    // const notFoundMassage = document.getElementById('not-found-massage');
    // notFoundMassage.classList.add('warning-phones')
    // if(phones.length === 0){
    //     notFoundMassage.classList.remove('display-none')
    // }else{
    //     notFoundMassage.classList.add('display-none', true)
    // }

    // show only frist 12 phone
    phones = phones.slice(0, 9)

    // display all phone
    phones.forEach(phone =>{
         const phoneCard = document.createElement('div');
        phoneCard.classList.add('card');
        phoneCard.innerHTML = `
        <img src=${phone.image} alt="">
        <h3>${phone.phone_name}</h3>
        <p>There are many variations of passages of available, but the majority have suffered</p>
        <h4>$999</h4>
        <button class="sign-up">Show Details</button>
        `
        phoneCardContainer.appendChild(phoneCard)
    })
}

// handle search btn
const handleSearchBtn =()=>{
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    loadPhones(searchText);
    searchField.value = ''
}

loadPhones()
