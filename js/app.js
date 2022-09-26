let eventDataList = {}
const startBtn = document.getElementsByClassName("form-buttons")[0];
startBtn.addEventListener("click", createEvent);

function getDataForCreateEvent() {
  let eventTitle = document.getElementById("event-title").value
  let eventUrl = document.getElementById("event-link").value
  let eventWhastsapp = document.getElementById("event-whatsapp").value
  let eventInfo = document.getElementById("event-info").value
  let eventCategory = document.getElementById("event-category").value
  let eventEmail = document.getElementById("event-email").value
  let eventPassword = document.getElementById("event-password").value
  let eventCheckbox = document.getElementById("event-check").value
  let eventDate = new Date(document.getElementById("event-date").value)
  let eventbegin = document.getElementById("event-begin").value
  let eventEnd = document.getElementById("event-end").value

  eventDataList = {
    eventTitle,
    eventUrl,
    eventWhastsapp,
    eventInfo,
    eventCategory,
    eventEmail,
    eventPassword,
    eventCheckbox,
    eventDate: `${eventDate.getDate() + 1}/${eventDate.getMonth() + 1}/${eventDate.getFullYear()}`,
    eventbegin,
    eventEnd
  }
}

function renderEvent() {

  let isValidTitle = eventDataList.eventTitle !== ''
  let isValidUrl = eventDataList.eventUrl !== ''
  let isValidWhatsapp = eventDataList.eventWhastsapp !== ''
  let isValidInfo = eventDataList.eventInfo !== ''
  let isValidCategory = eventDataList.eventCategory !== ''
  let isValidEmail = eventDataList.eventEmail !== ''
  let isValidpassword = eventDataList.eventPassword !== ''
  let isValidDate = eventDataList.eventDate !== ''
  let isValidbegin = eventDataList.eventbegin !== ''
  let isValidend = eventDataList.eventEnd !== ''

  let falseOrTrue = isValidTitle == true && isValidDate == true && isValidbegin == true && isValidend == true && isValidCategory == true && isValidUrl == true && isValidEmail == true && isValidpassword == true && isValidWhatsapp == true && isValidInfo == true;
  if (falseOrTrue) {
    const body = document.getElementsByTagName('body')[0]
    body.setAttribute('class', 'bg-green')
    const formHeader = document.querySelector('.form-header')
    formHeader.innerHTML = '<h1 class="sucess-h">Evento cadrastado com sucesso:</h1>'

    const formButtons = document.querySelector('.form-buttons')
    formButtons.style.display = 'none'
    const form = document.getElementById('form')
    form.style.background = '#262626'
    form.style.marginBottom = '100px'
    form.innerHTML = `<h1 class="event-title">${eventDataList.eventTitle}</h1>
                  <p class="event-info">link do evento: <a href="http://${eventDataList.eventUrl}" target="_blank">${eventDataList.eventUrl}</a></p>
                  <p class="event-info">contato: <span class="contact">${eventDataList.eventWhastsapp}<span></p>
                  <p class="event-info">Informações do evento :</p>
                  <div class="event-desc">
                    <p>${eventDataList.eventInfo}</p>
                  </div>

                  <p class="event-info">Categoria: ${eventDataList.eventCategory}</p>
                  <p class="event-info">Data e Hora: <strong>${eventDataList.eventDate} das ${eventDataList.eventbegin} até as ${eventDataList.eventEnd}</strong></p>
                `
  }
  return falseOrTrue

}

function createEvent() {
  startBtn.childNodes[1].textContent = 'cadastrando evento...'
  setTimeout(() => {
    getDataForCreateEvent()
    let renderStatus = renderEvent()
    console.log(eventDataList)
    startBtn.childNodes[1].textContent = 'Salvar evento'
    if(renderStatus == false) {
      startBtn.childNodes[3].textContent = '* Verifique se preencheu todos os campos corretamente e tente novamente'
    }
  }, 2000)
}


