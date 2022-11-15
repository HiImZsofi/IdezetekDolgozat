import './style.css';
let qlist = []
let thelist = []
let hosszlist = []

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("all").addEventListener('click', async () => {
        all()
    })
    document.getElementById("hossz").addEventListener('click', async () => {
        hossz()
    })
})

async function all(){
    let response = await fetch('quotes.json')
    let result = await response.json()

    qlist.textContent = ''  

    result.quotes.sort((a, b) => a.author.localeCompare(b.author))

    for (let p of result.quotes) {
        let li = document.createElement('li')
        li.textContent = p.author + " : '" + p.quote + "'"
        document.getElementById("quoteslist").appendChild(li)
        qlist.push(result.quote)
        qlist.push(result.author)
    }
}

// async function the(){
//     let response = await fetch('quotes.json')
//     let result = await response.json()

//     for (let p of result.quotes) {
//         thelist.push(p.quote)

//         // thelist.textContent = ''

//         // if(thelist.filter(word => word.length > 6)){

//         // }
//         // let li = document.createElement('li')
//         // li.textContent = p.quote
//         // document.getElementById("thelist").appendChild(li)
//     }

//     let wordArray = thelist.split(' ')
//     let word = "the"

//     for (let i of wordArray) {
//         thelist.textContent = ''
//         if(wordArray.filter(sw => word.includes(sw.toLowerCase()))){
//             //HOGY?????????????
//         }

//     }
// }

async function hossz(){
    let response = await fetch('quotes.json')
    let result = await response.json()
    let lengthlist = []

    for (let p of result.quotes) {
        hosszlist.push(p.quote)
    }
    const words = hosszlist.toString().split(' ')
    for(let i of words){
        lengthlist.push(words.map(w => w.length))
    }
    let szamlist = []
    szamlist.push(lengthlist.join(','))
    document.getElementById("length").append(szamlist)
}






