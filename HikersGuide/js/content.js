/*
 * Use AJAX to load the JSON and manipulate the HTML
 * https://joshbloom.github.io/dws1/data/hikersguide.json
*/

// Use Ajax to load the .Json file
var jsonFile = new XMLHttpRequest();

jsonFile.onload = function () {
    // variable to save the JSON data
    var data = JSON.parse(jsonFile.responseText);

    // Highlighted locations (index.html)


    // Recent Posts (index.html)
    var recentPosts = '';
    recentPosts += '<h2><strong>Recent Posts</strong></h2>';
    recentPosts += '<ul>';

    for (var i = 0; i < data.posts.length; i++){

        recentPosts += '<li>';
        recentPosts += '<img src=" ' + data.posts[i].imageURL + ' " alt = " ' + data.posts[i].subtitle + '" width="300" height="200" />';
        recentPosts += '<h3>' + data.posts[i].title + '</h3>';
        recentPosts += '<p>' + data.posts[i].author + '</p>';
        recentPosts += '<p>' + data.posts[i].text + '</p>';
        recentPosts += '</li>';
    }

    recentPosts += '</ul>';
    var content2 = document.querySelector('#recentPosts');
    content2.innerHTML = recentPosts;


    // 



};

// Call Ajax
jsonFile.open('GET', 'https://joshbloom.github.io/dws1/data/hikersguide.json', true);
jsonFile.send(null);