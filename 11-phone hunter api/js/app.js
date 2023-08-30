const loadPhones = async () =>{
    const res = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone');
    const data = await res.json();
    const phones = data.data;
    showPhones(phones);
}

const showPhones = phones =>{
    const phoneCardContainer = document.getElementById('phone-container');
    phones.forEach(phone =>{
        console.log(phone);
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

loadPhones()
