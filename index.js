const checkButton = document.querySelector('#check-btn')
const billAmount = document.querySelector('#bill-amount')
const cashGiven = document.querySelector('#cash-given')
const registerTable = document.querySelector('#register-table')
const cashLabel = document.querySelector('label[for="cash-given"]')

const notes = [2000, 500, 200, 100, 50, 10, 1]

billAmount.addEventListener('input', () => {
  if (billAmount.value !== '') {
    cashGiven.style.display = 'block'
    cashLabel.style.display = 'block'
  } else {
    cashGiven.style.display = 'none'
    cashLabel.style.display = 'none'
  }
})

checkButton.addEventListener('click', () => {
  const bill = parseInt(billAmount.value)
  const cash = parseInt(cashGiven.value)
  if (bill > 0 && cash >= bill) {
    let amountToPay = cash - bill
    for (let i = 0; i < notes.length; i++) {
      const numNotes = Math.floor(amountToPay / notes[i])
      if (numNotes > 0) {
        document.querySelector(`#note-${i + 1}`).innerText = numNotes
        amountToPay -= numNotes * notes[i]
      } else {
        document.querySelector(`#note-${i + 1}`).innerText = 0
      }
    }
    registerTable.style.display = 'grid'
    document.querySelector('.error').style.display = 'none'
  } else {
    registerTable.style.display = 'none'
    document.querySelector('.error').style.display = 'block'
  }
})
