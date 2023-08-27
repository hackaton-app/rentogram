// const URL = '../../data.json';
const URL = 'https://vatagacatalogue.pythonanywhere.com/get_apartments';

const $properties = document.getElementById('properties');

const STATE = {
    list: [],
    single: {},
}

async function renderList(){
    const response = await fetch(URL);
    const data = await response.json();

    STATE.list = data;
    console.log(STATE.list);

    STATE.list.forEach((item) => {
        const $propertyTemplate = document
            .querySelector('#propertyTemplate')
            .content
            .querySelector('.property-item')

        const $property = $propertyTemplate.cloneNode(true);

        $property.querySelector('.property-price').innerText = item.price + '$';

        let rooms = item.rooms;
        if(item.rooms === 1){
            rooms += ' комната'
        } else {
            rooms += ' комнаты';
        }
        $property.querySelector('.property-rooms').innerText = rooms;
        $property.querySelector('.property-area').innerText = item.area + ' м2';
        $property.querySelector('.property-address').innerText = item.address;
        $property.querySelector('.property-link').href = item.link;

        $properties.append($property);
    });
}


async function renderListItem(){

}

async function renderSingle(id){
    

}

renderList();