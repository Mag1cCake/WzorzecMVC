module.exports = {
    renderPage: function() {
        return `
            <html lang="pl">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Formularz</title>
            </head>
            <body>
                <h1>Formularz rejestracyjny</h1>
                <form action="/submit" method="POST">
                    <div>
                        <label for="firstName">Imię:</label>
                        <input type="text" id="firstName" name="firstName" required>
                    </div>
                    <div>
                        <label for="lastName">Nazwisko:</label>
                        <input type="text" id="lastName" name="lastName" required>
                    </div>
                    <div>
                        <label for="age">Wiek:</label>
                        <input type="number" id="age" name="age" required>
                    </div>
                    <div>
                        <label for="gender">Płeć:</label>
                        <select id="gender" name="gender" required>
                            <option value="male">Mężczyzna</option>
                            <option value="female">Kobieta</option>
                            <option value="other">Inna</option>
                        </select>
                    </div>
                    <div>
                        <label for="code">Numer albumu:</label>
                        <input type="number" id="code" name="code" required>
                    </div>
                    <div>
                        <label for="studyField">Kierunek:</label>
                        <input type="text" id="studyField" name="studyField" required>
                    </div>
                    <button type="submit">Zapisz</button>
                </form>
            </body>
            </html>
        `;
    }
};