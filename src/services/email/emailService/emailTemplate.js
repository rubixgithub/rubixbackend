import getEmailService from './get'
import getUserService from '../../user/get'


const strReplace =  async(findArray, replaceArray, str) =>{
    var i, regex = [], map = {};
    for (i = 0; i < findArray.length; i++) {
        regex.push(findArray[i].replace(/([-[\]{}()*+?.\\^$|#,])/g, '\\$1'));
        map[findArray[i]] = replaceArray[i];
    }
    regex = regex.join('|');
    str = str.replace(new RegExp(regex, 'g'), function (matched) {
        return map[matched];
    });
    return str;
}

const getEmailTemplate = async (templateId,userId, dataObj) => {
    try{
        const usrInfoObj = await getUserService.byId(userId)
        if (usrInfoObj !== null) {
            defaultLang = (usrInfoObj.default_lang.length === 0 || langObj.includes(usrInfoObj.default_lang)) ? 'en' : usrInfoObj.default_lang;
            
            if(defaultLang.length!=2){
                //defaultLang = 'en-gb';
                var index = defaultLang.indexOf('-');

                if (index !== -1) {
                    defaultLang = [defaultLang.slice(0, index), defaultLang.slice(index + 1)];
                }

                defaultLang = (typeof defaultLang[0] !== 'undefined') ? defaultLang[0] : defaultLang;
            }

            fname = usrInfoObj.first_name;
            lname = usrInfoObj.last_name;
            fullName = strUcWords(fname + ' ' + lname);
            toEmail = userEmail = usrInfoObj.email;
            timeZone = usrInfoObj.time_zone;
        }
        const emailData = await getEmailService.byIdAndLang(templateId,defaultLang)
        if(emailData){
            let emailContent = emailData.content;
            let subject = emailData.templ_name;
            switch(templateId){
                case 1:
                    findArr = ['{FULLNAME}'];
                    replaceArr = [fullName];
                    emailText = strReplace(findArr, replaceArr, emailContent);
                    break;
            }
            let signature = `<br><br>
                        Kontakt:<br><br>

                        CarMarketplace <br><br>
                        Lahnwegsberg 21 <br>
                        35435 Wettenberg <br>
                        Deutschland <br><br>

                        <a href="https://www.carmarketplace.eu" target="_blank">https://www.carmarketplace.eu</a><br>
                        Email: <a href="mailto:info@carmarketplace.eu" target="_top">info@carmarketplace.eu</a><br>
                        Tel.: +49 641 97278208`;

            let emailHtml = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
                            <html xmlns="http://www.w3.org/1999/xhtml">
                                <head>
                                    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
                                    <title> ${subject} </title>
                                    <meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
                                </head>
                                <body style="margin: 0; padding: 0;">
                                    ${emailText}
                                    ${signature}
                                </body>
                            </html>`;
            return await sendEmail(toEmail, emailHtml, subject);
        }
        
    }catch(e) {
        throwError(e);
    }
}

const sendEmail = async (emailTo, emailTxt, emailSubj) => {
    let serverEnv = `${process.env.NODE_ENV}`;
    let isError = false;
    if (typeof emailTo == 'undefined' || isEmpty(emailTo)) {
        isError = true;
        return { status: 0, message: 'Email is required' };
    }
    if (isEmpty(emailTxt)) {
        isError = true;
        return { status: 0, message: 'Email Text is required' };
    }
    if (isEmpty(emailSubj)) {
        isError = true;
        return { status: 0, message: 'Email Subject is required' };
    }

    if (!isError) {
        const nodemailer = require("nodemailer");//https://nodemailer.com/message/

        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: `${process.env.emailHost}`,
            port: `${process.env.emailPort}`,//587
            secure: false, // true for 465, false for other ports
            auth: {
                user: `${process.env.emailUser}`,
                pass: `${process.env.emailPass}`,
            },
            //debug: true, // show debug output
            //logger: true // log information in console
        });
        
      
        let mailOptions = {
            from: `${process.env.emailFrom}`, // sender address
            to: emailTo, //'test_cmbuild@mailinator.com', // list of receivers
            bcc: `${process.env.emailFrom}`, // cc address
            subject: emailSubj, // Subject line
            html: emailTxt, // html body
            //text: "Hello world?", // plain text body
        };
        //console.log(mailOptions); 
        // send mail with defined transport object
        return await transporter.sendMail(mailOptions, async (err, info) => {
            transporter.close();
            if (err) {
                return {
                    status: 0,
                    message: 'Something goes wrong, Please try again!',
                    data: err
                };
            } else {
                //console.log(info.envelope);
                //console.log("Message sent: %s", info.messageId);
                // Preview only available when sending through an Ethereal account
                //console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
                // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
                return {
                    status: 1,
                    message: 'Email Sent Successfully.',
                    data: info
                };
            }

        });
    }
}

module.exports={
    getEmailTemplate
}