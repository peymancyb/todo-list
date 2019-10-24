import path from 'path';
import fs from 'fs';

const directoryPath = path.join(__dirname, '../files');

export function getFileList(){
    return new Promise((resolve, reject) => {
        fs.readdir(directoryPath, function (err, files) {
            if (err) {
                console.log('err => ', err);
                return reject(err);
            } 
            const fileList = files.map(file => {
                return {
                    filename: file,

                }
            })
            console.log('fileList -> ', fileList);
            resolve(fileList);
        });
    });
}


export function sendEmail(userInfo) {
    const { email } = userInfo;
    const sender = 'peyman1214@gmail.com';
    const password = 'mivwprdpazxwkdqk';

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        secure: false,
        port: 25,
        auth: {
            user: sender,
            pass: password
        }, tls: {
            rejectUnauthorized: false
        }
    });
    const mailOptions = {
        from: sender,
        to: email,
        subject: 'Download the requested file', // Subject line
        html: '<p>Link to download the file </p>'// plain text body
    };

    transporter.sendMail(mailOptions, (err, info) => {
        if(err)
          console.log(err)
        else
          console.log(info);
     });
}