//codigo automatizacion de correos
const nodemailer=require('nodemailer');//modulo nodemailer
const trasnporter =nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user: 'brianhenao907@gmail.com',
        pass: 'i x h i n x z v m n l l z k w v'
    },
    tls:{
        rejectUnauthorized:false
    }
});
const mailOptions ={
    from: 'brianhenao907@gmail.com',
    to: ['santiagogiraldomorales@gmail.com', 'juandiegomartinezengage@gmail.com'],
    subject:'Correo Automatico',
    text:'Mi primer codigo de automatizacion con Node.js'
};

trasnporter.sendMail(mailOptions,(err,info)=>{
    if (err){
        console.error(err);
    }else{
        console.log('Correo enviado'+ info.response)
    }
});

setInterval(()=>{
    trasnporter.sendMail(mailOptions,(err,info)=>{
        if(err){
            console.error('Error al enviar el correo: ',err);
        }else{
            console.log('Correo enviado:',info.response);
        }
    })

},120000)
