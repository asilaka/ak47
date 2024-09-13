const catalog = [
    {
        name: 'АК-47',
        img: 'https://www.therange702.com/wp-content/uploads/2016/10/shutterstock_102492452_1.jpg',
        price: 500,
        oldPrice: 1000,
        currency:'$',
        description: 'афтомат',
    },
    {
        name: 'кроссовки',
        img: 'https://basket-12.wbcontent.net/vol1710/part171087/171087381/images/big/1.webp',
        price: 600,
        oldPrice: 900,
        currency:'$',
        description: 'оригинал',
    },
    {
        name: 'бмв',
        img: 'https://cdnstatic.rg.ru/crop910x640/uploads/images/214/80/67/1.jpg',
        price: 500000,
        oldPrice: 10000000,
        currency:'$',
        description: 'синая бомба',
    },
    {
        name: 'телефон',
        img: 'https://prodelo.by/wp-content/uploads/2024/05/iphone-16.jpg',
        price: 5000,
        oldPrice: 7000,
        currency:'$',
        description: 'дубай версия ',
    },
    {
        name: 'фуйсти',
        img: 'https://orzon.uz/upload/iblock/6e4/6e41c93d3865ff3ad27262281f9edfad.jpg',
        price: 5030,
        oldPrice: 12000,
        currency:'$',
        description: 'вкусный чай',
    },
]



const cards = document.querySelector('.cards')

catalog.forEach(card => { 
 cards.innerHTML += `
  <div class="card">
<img src=${card.img} alt="" />
<h3>${card.name}</h3>
<p>${card.description}</p>
<s>${card.oldPrice} ${card.currency}</s>
<h4>${card.price} ${card.currency}</h4>   
<button>Купить</button>
</div>
 `
})
