const fs = require('fs');

function renderPage(data) {
    const { albumNumber, firstName, lastName, gender, age, studyField } = data;

    // Zapisz dane do pliku .txt
    fs.writeFile(`${albumNumber}.txt`, `Album Number: ${albumNumber}\nFirst Name: ${firstName}\nLast Name: ${lastName}\nGender: ${gender}\nAge: ${age}\nStudy Field: ${studyField}`, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Dane zapisane do pliku.');
    });

    return `
        <!DOCTYPE html>
        <html lang="pl">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Student Profile</title>
        </head>
        <body>
            <h1>Student profile</h1>
            <p>Album Number: ${albumNumber}</p>
            <p>First Name: ${firstName}</p>
            <p>Last Name: ${lastName}</p>
            <p>Gender: ${gender}</p>
            <p>Age: ${age}</p>
            <p>Study Field: ${studyField}</p>
        </body>
        </html>
    `;
}

module.exports = { renderPage };