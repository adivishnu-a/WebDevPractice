/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
  .prompt([
    {
      name: 'url',
      message: 'Enter the URL you want to convert to a QR code:',
    }
  ])
  .then((answers) => {
    const URL = answers.url;
    const filename = URL.replace(/[^a-z0-9]/gi, '_').toLowerCase();
    const url = URL.startsWith('https') ? URL : `https://${URL}`;

    // Generate QR code
    const qrCode = qr.image(url, { type: 'png' });
    const qrCodePath = `${filename}.png`;

    // Save QR code to file
    qrCode.pipe(fs.createWriteStream(qrCodePath));

    // Save URL to text file
    fs.writeFileSync(`${filename}.txt`, url);

    console.log(`QR code saved as ${qrCodePath} and URL saved as ${filename}.txt`);
  });