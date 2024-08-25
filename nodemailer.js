import nodemailer from 'nodemailer'

const nodemail = async(req,res)=>{
    const transport = nodemailer.createTransport({
        
        service: 'gmail',
        secure:true,
        auth:{
            user: process.env.EMAIL_USER,
            pass:process.env.EMAIL_PASS
        }
        
        
    })

    const mailOptions = {
        from:process.env.EMAIL_USER,
        to:res.email,
        subject:res.subject,
        text:res.text,
    }
    try{

    await transport.sendMail(mailOptions)
    return{
        statusCode: 200,
        body: JSON.stringify({
            message:'email sent successfully'
        }),
    }

    }
    catch(err){
        console.log('error',err)
        return{
            statusCode: 500,
            body: JSON.stringify({
                message:'Please try after sometime'
            }),

        }
    }

}
export default nodemail