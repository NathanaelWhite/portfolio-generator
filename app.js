const profileDataArgs = process.argv.slice(2, process.argv.length);
const [name, github] = profileDataArgs;


const generatePage = (username, githubName) => {
    return `
    <!DOCTYPE html>
    <html lang="eng">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Portfolio Demo</title>
    </head>

    <body>
        <h1>${name}</h1>
        <h2><a href="https://github.com/${github}">Github</a></h2>
    </body>
    </html>
    `;
};
console.log(name, github);
console.log(generatePage(name, github));
// const printProfileData = profileDataArr => {
//     // this ...
//     for (let i = 0; i < profileDataArr.length; i += 1) {
//         console.log(profileDataArr[i]);
//     }

//     console.log('===============');

//     // is the same as this
//     profileDataArr.forEach((profileItem) => console.log(profileItem));
// };

// printProfileData(profileDataArgs);
