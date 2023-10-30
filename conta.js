const frm = document.querySelector("form")
const resp = document.querySelector("#outResp1")
const resp1 = document.querySelector("#outResp2")

let numContas = 0 
let valTotal = 0
let resposta = ""

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const descrição = frm.indescrição.value
    const valor = Number(frm.invalor.value)

    numContas++
    valTotal = valTotal + valor

    resposta = resposta + descrição + " - R$: " + valor.toFixed(2) + "/n"

    resp.innerText = `${resposta}-----------------------------`
    resp1.innerText = `${numContas} Contas(s) - Total R$: ${valTotal.toFixed(2)}`

    frm.indescrição.value = ""
    frm.invalor.value = ""
    frm.descrição.focus()
})