const inputBtn = document.getElementById('input-btn');
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
let myLeads = []



inputBtn.addEventListener('click', ()=> {

    myLeads.push(inputEl.value)
    inputEl.value = ''
    renderLeads()

})



    // const li = document.createElement('li')
    // li.textContent = myLeads[i]
    // ulEl.append(li)


function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        // listItems += "<li><a target='_blank' href='" + myLeads +"'>" + myLeads[i] +  "</a></li>"
        listItems += `
        <li>
        <a target='_blank' href='${myLeads[i]}'>${myLeads[i]}</a>
        </li>
        `
       

    }
    ulEl.innerHTML = listItems

}




// function btn() {
//     console.log('Button Clicked')
// }