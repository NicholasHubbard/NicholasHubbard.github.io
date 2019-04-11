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
    var posts = document.querySelector('#recentPosts');

    // using if conditional to make sure there is a connection to he JSON to pull data from
    if (posts) {
        var recentPosts = '';
        for (var i = 0; i < data.posts.length; i++) {

            recentPosts += '<article>';
            recentPosts += '<p><img src="'+ data.posts[i].imageURL + '"alt="' + data.posts[i].subtitle + '" width="300" height="200"></p>';
            recentPosts += '<h3>' + data.posts[i].title + '</h3>';

            recentPosts += '<p>' + data.posts[i].text + '</p>';

            recentPosts += '</article>';

        }

        posts.querySelector('h2').insertAdjacentHTML('beforeend', recentPosts);
    }
};

// Call Ajax
jsonFile.open('GET', 'https://joshbloom.github.io/dws1/data/hikersguide.json', true);
jsonFile.send(null);