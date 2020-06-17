class Links {
    constructor(title, url, author) {
        let typeOfUrl = url;
        // check if the url starts with "http://" or "https://", if it is "http://", then it added to its beginning.

        if (!typeOfUrl.startsWith("http://") || !typeOfUrl.startsWith("https://")) {
            typeOfUrl = `http://${typeOfUrl}`;
        }

        // link properties
        this.title = title;
        this.url = typeOfUrl;
        this.author = author;
        }
    }
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
    let linksMenu = prompt(`
    Choose an option:

    1 : Show links
    2 : Add links
    3 : Remove a link
    0 : Quite
    `);

    // to show the links
    switch (linksMenu) {
        case "1":
            for (let i = 0; i < link.length; i++) {
                let myLinks = `
                Title : ${link[i].title}
                url : ${link[i].typeOfUrl} 
                author : ${link[i].author}
                `;
                alert(myLinks);
            }
            break;
        case "2": 
            // the user asked to enter new link to add new array
            const title = prompt("Enter the link title:");
            const url = prompt("Enter the link url:");
            const author = prompt("Enter the link author:");
            link.push(new Links(title, url, author));
            break;
        case "3": 
        // Remove an existing link from array
        let linkToRemove = Number(
            prompt(`Enter the number of link to remove (0 to 3)`)
        );
        let removedLink = link.splice(linkToRemove--, 1);
            alert(`link ${removedLink[0].title} removed succefully`);
            break;
        default:
        alert('No thanks');
    }

