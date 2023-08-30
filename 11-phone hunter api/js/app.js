const loadPhones = async (searchText='iphone', isShowAll) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    showPhones(phones, isShowAll);
}

const showPhones = (phones, isShowAll) =>{
    const phoneCardContainer = document.getElementById('phone-container');
    phoneCardContainer.innerText = ''

    // show all phone button
    const showAllContainer = document.getElementById('showAll-container');
    if(phones.length > 12 && !isShowAll){
        showAllContainer.classList.remove('hidden');
    }else{
        showAllContainer.classList.add('hidden')
    }

    // show only frist 12 phone if not show all
    if(!isShowAll){
        phones = phones.slice(0, 9)
    }

    // phone not found
    const notFoundMassage = document.getElementById('not-found-massage');
    if(phones.length === 0){
        notFoundMassage.classList.remove('hidden')
    }else{
        notFoundMassage.classList.add('hidden')
    }


    // display all phone lopping
    phones.forEach(phone =>{
        const phoneCard = document.createElement('div');
        phoneCard.classList.add('phone-card');
        phoneCard.innerHTML = `
        <img src=${phone.image} alt="">
        <h3>${phone.phone_name}</h3>
        <p>There are many variations of passages of available, but the majority have suffered</p>
        <h4>$999</h4>
        <button onclick="handleShowDetail('${phone.slug}');show_details_modal.showModal()" class="sign-up">Show Details</button>
        `
        phoneCardContainer.appendChild(phoneCard)
    });
}

// handleShowDetail info button
const handleShowDetail = async (id)=>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
    const data = await res.json();
    const phone = data.data;
    displayShowDetails(phone)
}

// displayShowDetails individual items
const displayShowDetails = (phone) =>{
    console.log(phone);
    const showDetailContent = document.getElementById('show-details-content');
    showDetailContent.innerHTML =`
    <img src = "${phone.image}">
    <h4>${phone.name}</h4>
    <P>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</P>
    <h4><span>Storage:</span>${phone?.mainFeatures?.storage}</h4>
    <h4><span>GPS:</span>${phone.others?.GPS || 'No GPS available'}</h4>
    <h4><span>GPS:</span>${phone.others?.GPS ? phone.others.GPS : 'No GPS available in this device'}</h4>
    `
    
}

// handle search btn
const handleSearchBtn =(isShowAll)=>{
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    loadPhones(searchText, isShowAll);
    // searchField.value = ''
}

// handle show all
const handleShowAll = ()=>{
    handleSearchBtn(true);
}


loadPhones()
