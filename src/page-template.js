function generateCard(employeeArr) {    
    let employeesHtml = ''
    for (let i = 0; i < employeeArr.length; i++) {
      const htmlGeneratedName = `<div class = "top"><h2>${employeeArr[i].getName()}</h2> </div>`
      employeesHtml += htmlGeneratedName
      
      const htmlGeneratedRole = `<div><h3>Role: ${employeeArr[i].getRole()}</h3></div>`
      employeesHtml += htmlGeneratedRole
      
      const htmlGeneratedId = `<div><p>Employee Id: ${employeeArr[i].getId()}</p></div>`
      employeesHtml += htmlGeneratedId

      const htmlGeneratedEmail = `<div><a href="mailto:${employeeArr[i].getEmail()}">Email: ${employeeArr[i].email}</a></div>`
      employeesHtml += htmlGeneratedEmail

      if (employeeArr[i].officeNumber !== undefined) {
        const htmlGeneratedOfficeNum = `<div class = "bottom"><p>Office #: ${employeeArr[i].officeNumber}</p> </div>`
        employeesHtml += htmlGeneratedOfficeNum

    } else if (employeeArr[i].github !== undefined) {
        const htmlGeneratedGithub = `<div class = "bottom"><a href = "https://github.com/${employeeArr[i].getGithub()}" target = "_blank" rel="noopener noreferrer">GitHub profile: ${employeeArr[i].getGithub()}</a> </div>`
        employeesHtml += htmlGeneratedGithub

    } else if (employeeArr[i].school !== undefined) {
        const htmlGeneratedSchool = `<div class = "bottom"><p>School: ${employeeArr[i].getSchool()}</p></div>`
        employeesHtml += htmlGeneratedSchool
    }
    }
    return employeesHtml 
}

function generateHtml(employeeArr) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="style.css">
        <title>My Team</title>
    </head>
    <body>
        <header>
        <h1>My Team</h1>
        </header>

        <div>
    ${generateCard(employeeArr)}
        </div>
    </body>
    </html>`
}

module.exports = {generateCard, generateHtml};
