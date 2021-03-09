document.querySelectorAll('.executive-btn').forEach((elem) => {
  $(elem).on('click', function () { 
    showInfo(elem)
  })
})

$('#go-back').on('click', function() {
  goBack()
})

const NameTmp = $("#exec-data-name")
const MailTmp = $("#exec-data-mail")
const WspTmp = $("#exec-data-wsp")
const TelTmp = $("#exec-data-tel")

function showInfo(btn) {
  
  let data =  [
      {
        name: "Pepe",
        charge: "comertial",
        mail: "pepe@comercial.com",
        whatsapp: "3412749195",
        tel: "4535656",
        chargeName: "ejecutivo comercial"
      },
      {
        name: "Andres",
        charge: "telemarket",
        mail: "andres@ventas.com",
        whatsapp: "341871245",
        tel: "6542154",
        chargeName: "ejecutivo de venta telefónica"
      },
      {
        name: "Miguel",
        charge: "account-manager",
        mail: "miguel@cuentas.com",
        whatsapp: "34124513",
        tel: "4581246",
        chargeName: "ejecutivo de cuenta corriente"
      }
    ] 
    
  let charge = btn.id.split('-').slice(0, -1).join('-')
  
  let executives = data.filter(a => a['charge'] == charge )

  applyStyles(btn)
  
  executives.forEach(executive => {
    displayInfo()
    NameTmp.html(`
      ¡Hola! Soy <b>${executive.name}</b>, su <b>${executive.chargeName}</b> 
      y estos son mis datos para ponernos en contacto
    `)
  
    MailTmp.html(`
      <div id="sendEmail" class="exec-data pointer">
        <span class="iconify right-padding" data-icon="ant-design:mail-filled" data-inline="false"></span>
        <span class="left-border">${executive.mail}</span>
      </div>
    `)

    WspTmp.html(`
      <div class="exec-data pointer">
        <span class="iconify right-padding" data-icon="simple-icons:whatsapp" data-inline="false"></span>
        <a class="left-border" target="_blank" href="https://api.whatsapp.com/send?phone=+54${executive.whatsapp}">+54 ${executive.whatsapp}</a>
      </div>
    `)

    TelTmp.html(`
      <div class="exec-data">
        <span class="iconify right-padding" data-icon="carbon:phone-filled" data-inline="false"></span>
        <span class="left-border">${executive.tel}</span>
      </div>
    `)

    $('#sendEmail').on('click', function() {
      mail = event.target.textContent.replace(/\s/g, '')
      window.open(`mailto:${mail}`)
    })
  })
}

function goBack() {
  $('#excutive-data').attr('hidden', true)
  $('#executives').attr('hidden', false)
  const currentClass = document.getElementById('go-back').dataset.currentBtn
  NameTmp.parent().removeClass(currentClass)
}

function displayInfo() {
  $('#executives').attr('hidden', true)
  $('#excutive-data').attr('hidden', false)
}

function applyStyles(btn) {
  document.getElementById('go-back').dataset.currentBtn = btn.id
  NameTmp.parent().addClass(btn.id)
}
