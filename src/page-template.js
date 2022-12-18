function generateCard(employeeArr) {    
    const employeesHtml = ''
    for (let i = 0; i < employeeArr.length; i++) {
      const htmlGeneratedName = `<div><h2>${employeeArr[i].name}</h2> </div>`
      employeesHtml.push(htmlGeneratedName)
      console.log(employeesHtml);

      const htmlGeneratedId = `<div><p>${employeeArr[i].id}</p> </div>`
      employeesHtml.push(htmlGeneratedId)
      console.log(employeesHtml);

      const htmlGeneratedEmail = `<div><a href = "https://youtube.com.com>${employeeArr[i].email}</a> </div>`
      employeesHtml.push(htmlGeneratedEmail)
      console.log(employeesHtml);

      if (employeeArr[i].officeNumber !== undefined) {
        const htmlGeneratedOfficeNum = `<div><p>${employeeArr[i].officeNumber}</p> </div>`
        employeesHtml.push(htmlGeneratedOfficeNum)
        console.log(employeesHtml);

    } else if (employeeArr[i].github !== undefined) {
        const htmlGeneratedGithub = `<div><a href = "https://youtube.com.com>${employeeArr[i].github}</a> </div>`
        employeesHtml.push(htmlGeneratedGithub)
        console.log(employeesHtml);

    } else if (employeeArr[i].school !== undefined) {
        const htmlGeneratedSchool = `<div><p>${employeeArr[i].school}</p> </div>`
        employeesHtml.push(htmlGeneratedSchool)
        console.log(employeesHtml);
    }
    }
    return employeesHtml 
    // let html = [
    //     `<!DOCTYPE html>`,
    //     `<html lang="en">`,
    //     `<head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>My Team</title></head>`,
    //     `<body>`,
    //     `<header><h1>My Team</h1></header>`
    // ]
//     for (let i = 0; i < employeeArr.length; i++) {
//         let employeeCardEl = document.createElement('div');
//         let employeeNameEl = document.createElement('h2');
//         employeeNameEl.textContent = employeeArr[i].name;
//         employeeCardEl.appendChild(employeeNameEl);

//         let employeeIdEl = document.createElement('p');
//         employeeIdEl.textContent = `Employee id: ${employeeArr[i].id}`;
//         employeeCardEl.appendChild(employeeIdEl);

//         let employeeEmailEl = document.createElement('a');
//         employeeEmailEl.setAttribute('href', "https://www.youtube.com")
//         employeeEmailEl.textContent = `Employee email: ${employeeArr[i].email}`;
//         employeeCardEl.appendChild(employeeEmailEl);

//         if (employeeArr[i].officeNumber !== undefined) {
//             let employeeOfficeNumEl = document.createElement('p');
//             employeeOfficeNumEl.textContent = `Employee Office #: ${employeeArr[i].officeNumber}`;
//             employeeCardEl.appendChild(employeeOfficeNumEl);

//         } else if (employeeArr[i].github !== undefined) {
//             let employeeGithubEl = document.createElement('a');
//             employeeGithubEl.setAttribute('href', `https://github.com/${employeeArr[i].github}`)
//             employeeGithubEl.textContent = `Employee GitHub Profile: ${employeeArr[i].github}`;
//             employeeCardEl.appendChild(employeeGithubEl);

//         } else if (employeeArr[i].school !== undefined) {
//             let employeeschoolEl = document.createElement('p');
//             employeeschoolEl.textContent = employeeArr[i].school;
//             employeeCardEl.appendChild(employeeschoolEl);
//         } else {
//             return
//         }
//     }
}

function generateHtml(employeeArr) {
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team</title>
    </head>
    <body>
        <header>
        <h1>My Team</h1>
        </header>

        <div>
        `
    generateCard(employeeArr)`
        </div>
    </body>
    </html>`
}

module.exports = {generateCard, generateHtml};
