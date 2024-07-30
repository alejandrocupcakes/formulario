const frmEmail = document.getElementById('frm-email')
frmEmail.addEventListener('submit',sendEmail)

const serviceId= 'service_yrnktxx'
const templateId ='template_7sh0ary'
const apikey ='FzUzisMU1XrKOdIT4'

function sendEmail(event){
    event.preventDefault()
    emailjs.init(serviceId)

    emailjs.sendForm(serviceId,templateId,frmEmail,apikey)
    .then(result => Swal.fire('Su mensaje se ha enviado con exito.'))
    .catch(error => {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            Text: 'No ha sido posible enviar el mensaje!'
        })
    })
}