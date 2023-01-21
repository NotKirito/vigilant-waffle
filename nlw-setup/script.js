
const form = document.querySelector('form')
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button')

button.addEventListener('click', add)
form.addEventListener("change", save)

function add() {
    const today = new Date().toLocaleDateString('pt-br').slice(0, -5) //para dazer o recote da data, SLICE
    const dayExists = nlwSetup.dayExists(today)
    
    if (dayExists) {
        alert("Dia já incluso")
        return

    }

    nlwSetup.addDay(today)

}

function save() {
    // transforma o objeto nlwSetup em string (texto)
    localStorage.setItem('NLWSetupkirito', JSON.stringify(nlwSetup.data)) || {}

}



const data = JSON.parse(localStorage.getItem("NLWSetupkirito"))
nlwSetup.setData(data)
nlwSetup.load()


