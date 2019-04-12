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
    var locations = '';
    locations += '<ul>';
    locations += '<button>Previous</button>';

    for (var i = 0;i < data.locations.length; i++){

        locations += '<li><button>';
        locations += '<h2>' + data.locations[i].city + ", " + data.locations[i].state + '</h2>';
        locations += '<p>' +  data.locations[i].title + '</p>';
        locations += '<p>' +  data.locations[i].text + '</p>';
        locations += '</button></li>';
    }
    locations += '<button>Next</button>';
    locations += '</ul>';
    var content1 = document.querySelector('#highlightedLocations');
    content1.innerHTML = locations;

    // Recent Posts (index.html)
    var recentPosts = '';
    recentPosts += '<h2><strong>Recent Posts</strong></h2>';
    recentPosts += '<ul>';

    for (var j = 0; j < data.posts.length; j++){

        recentPosts += '<li>';
        recentPosts += '<img src=" ' + data.posts[j].imageURL + ' " alt = " ' + data.posts[j].subtitle + '" width="300" height="200" />';
        recentPosts += '<h3>' + data.posts[j].title + '</h3>';
        recentPosts += '<p>' + data.posts[j].author + '</p>';
        recentPosts += '<p>' + data.posts[j].text + '</p>';
        recentPosts += '</li>';
    }

    recentPosts += '</ul>';
    var content2 = document.querySelector('#recentPosts');
    content2.innerHTML = recentPosts;


    // Upcoming Events (index.html)
    var upcomingEvent = '';
    upcomingEvent += '<h2>Upcoming Events</h2>';
    upcomingEvent += '<dl>';

    for (var z = 0; z < 3; z++){
        upcomingEvent += '<dt>' + data.events[z].title + '</dt>';
        upcomingEvent += '<dd>' + data.events[z].text + '</dd>';
    }

    upcomingEvent += '</dl>';
    var content3 = document.querySelector('#upcomingEvents');
    content3.innerHTML = upcomingEvent;


    // New Hikers (index.html)
    var hikersElement = '';
    hikersElement += '<h2>New Hikers</h2>';
    hikersElement += '<dl>';

    for(var n = 0; n < 4; n++){
        hikersElement += '<img src=" ' + data.hikers[n].imageURL + ' " alt = " ' + data.hikers[n].username + '" width="50" height="50" />';
        hikersElement += '<dt> '+ data.hikers[n].lastname + ", " + data.hikers[n].firstname +' </dt>';
        hikersElement += '<dd> '+ data.hikers[n].city + ", " + data.hikers[n].state +' </dd>';
    }

    hikersElement += '</dl>';
    var content4 = document.querySelector('#newHikers');
    content4.innerHTML = hikersElement;


    // About section
    var aboutUs = '';
    aboutUs += '<h2>About</h2>';
    aboutUs += '<h3>'+ data.about.title +'</h3>';
    aboutUs += '<p>' + data.about.text + '</p>';
    aboutUs += '<p>' + data.about.copyright + '</p>';

    var content5 = document.querySelector('#about');
    content5.innerHTML = aboutUs;



};

// Call Ajax
jsonFile.open('GET', 'https://joshbloom.github.io/dws1/data/hikersguide.json', true);
jsonFile.send(null);