let openmenu = document.getElementById("open")
let menu = document.getElementById("menu")
let closemenu = document.getElementById("close")

openmenu.onclick = function(){
    openmenu.style.display = "none"
    closemenu.style.display = "block"
    menu.style.top = "100%"

}
closemenu.onclick = function(){
    closemenu.style.display = "none"
    openmenu.style.display = "block"
    
    menu.style.top = "-150px"
}






// async function market() {
//     let url = 
    
// }
let curr = 'usd'
let api_key = 'CG-NZJpcsWWmJT6T8j7t1qsaGHw'





let listing = document.querySelector('.listing')
let list_container = document.createElement('div')
let searchbtn = document.querySelector('#searchbtn')
let search = document.querySelector('#search')
let option = {
    method: 'GET',
    header: { accept: 'application/json', 'x-cg-demo-api-key': api_key }
}

searchbtn.addEventListener('click', () =>{
    
    let searchid = search.value
    
    try {
        async function start() {
            

            
            let url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${curr}&ids=${searchid}&per_page=250&price_change_percentage=1h`
            

            let reponse = await fetch(url, option)
            
            if (reponse.ok == true) {
                if(searchid === ''){
                    alert('input a coin')
                }
                else{
                    // setTimeout(() => coinfunc(reponse), 1000)
                    // clear()
                    
                    
                }
                
            }
            else {
                let error = new Error("Error in fetching")
                console.log(error)
            }


            
        }
        
        start()
        
    }
    catch (error) {
        console.log(error)
    }

    
})

async function coinfunc(reponse) {
    let data = await reponse.json()
    let coin = data[0]
    

    // let coinId = coin.id
    // let coinName = coin.name
    let coinSymbol = coin.symbol
    coinSymbol = coinSymbol.toUpperCase()
    let coinImg = coin.image
    let coinPrice = coin.current_price
    coinPrice = `${coinPrice.toFixed(4)}%`

    let coinInh = coin.price_change_percentage_1h_in_currency
    coinInh = `${coinInh.toFixed(2)}%`


    let coinMarkcap = coin.market_cap

    let list = document.createElement('div')
    let pImg = document.createElement('img')
    pImg.src = `${coinImg}`
    let pSymbol = document.createElement('p')
    let pPrice = document.createElement('p')
    let pInh = document.createElement('p')
    let pMarketcap = document.createElement('p')


    pPrice.append(coinPrice)
    pSymbol.append(pImg)
    pSymbol.append(coinSymbol)
    pInh.append(coinInh)
    pMarketcap.append(coinMarkcap)

    list.append(pSymbol)
    list.append(pPrice)
    list.append(pInh)
    list.append(pMarketcap)

    list_container.append(list)
    listing.append(list_container)





}

async function trending() {


    let url = 'https://api.coingecko.com/api/v3/search/trending'
    let option = {
        method: 'GET',
        header: { accept: 'application/json', 'x-cg-demo-api-key': api_key }
    }
    // for trending data
    let reponse = await fetch(url, option)
    let data = await reponse.json()
    let coins = data.coins

    let trendcoin = coins.map(t)

    
    for(let i = 0; i < trendcoin.length; i++){
        
        let url2 = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${curr}&ids=${trendcoin[i]}&per_page=250&price_change_percentage=1h`

        let reponse2 = await fetch(url2, option)

        coinfunc(reponse2)
        console.log(trendcoin[i])

        
    }

    
    

}

function t(element, index, array){
    element = array[index].item.id
    return element
}
trending() 


function clear() {
    
    list_container.textContent = ''
    
}