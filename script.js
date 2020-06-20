    //Here we initialize the link within an array
    let link = [
        {
            title : "My first link",
            url : "http://educative.io/courses/javascript-lesson",
            author : "Rosny",
        },
        {
            title : "My second link",
            url : "http://educative.io/courses/exercises",
            author : "Ashmee",
        },
        {
            title : "My third link",
            url : "http://educative.io/freeCodeCamp",
            author : "Tchadly",
        },
        {
            title : "My fourth link",
            url : "http://educative.io/freeCodeCamp/link.js",
            author : "Claudius",
        },
        
    ];
  console.log(link);
    // This prompt let the user to choose until they quit
    const menuLinks = prompt(`
    Choose an option:

    1 : Show links
    2 : Add links
    3 : Remove a link
    0 : Quit
    `);

    let newLink = Number(prompt(menuLinks));

    // to show the links added
    while (newLink !== 0) {
    switch (newLink) {
        case "1":
            for (let i = 0; i < link.length; i++) {
                let myLinks = `
                Title : ${link[i].title}
                url : ${link[i].url} 
                author : ${link[i].author}
                `;
                alert(myLinks);
            }
            break;
        case "2": 
            // the user asked to enter new link to add new array
            let newTitle = prompt("Enter the link title:");
            let newUrl = prompt("Enter the link url:");
            let newAuthor = prompt("Enter the link author:");
            if (!newUrl.startsWith("http://") || !newUrl.startsWith("https://")) {
             newUrl = `http://${newUrl}`;
            }

            let newLink = {
            title : newTitle,
            url : newUrl,
            author : newAuthor,
            };
            link.push(newLink);
            for (let i = 0; i < link.length; i++) {
                let myLinks = `
                Title : ${link[i].title}
                url : ${link[i].url} 
                author : ${link[i].author}
                `;
                alert(myLinks);
            }
            break;
        case "3": 
        // Remove an existing link from array
            let linkToRemove = Number(prompt(`Enter the number of link to remove (0 to 3)`));
            let removedLink = link.splice(linkToRemove--, 1);
            alert(`link ${removedLink[0].title} removed succefully`);
            break;
        default:
        }
        newLink = Number(prompt(menuLinks));
    }

