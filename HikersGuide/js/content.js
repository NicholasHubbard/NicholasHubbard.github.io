/*
 * Use AJAX to load the JSON and manipulate the HTML
 * https://joshbloom.github.io/dws1/data/hikersguide.json
*/

// Use Ajax to load the .Json file
var jsonFile = new XMLHttpRequest();

jsonFile.onload = function () {
    // variable to save the JSON data
    var data = JSON.parse(jsonFile.responseText);

    // Insert the HTML Articles & into section
    var postElement = document.querySelectorAll('#recentPosts li');

    for (var i = 0; i < postElement.length; i++) {

        postElement[i].getElementsByTagName('li')[i].innerHTML = "<img src=" + 'data.posts[i].imageURL' + "/>";
        //postElement[i].getElementsByTagName('img').alt[0].innerHTML = data.posts[i].subtitle;
        postElement[i].getElementsByTagName('h3')[0].innerHTML = data.posts[i].title;
        postElement[i].getElementsByTagName('p')[0].innerHTML = data.posts[i].author;
        postElement[i].getElementsByTagName('p')[1].innerHTML = data.posts[i].text;

    }

};

// Call Ajax
jsonFile.open('GET', 'https://joshbloom.github.io/dws1/data/hikersguide.json', true);
jsonFile.send(null);