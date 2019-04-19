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
    var content1 = document.querySelector('#highlightedLocations');

    if(content1) {
        var locations = '';
        locations += '<ul>';
        locations += '<button>Previous</button>';

        for (var i = 0; i < data.locations.length; i++) {

            locations += '<li>';
            locations += '<h2>' + data.locations[i].city + ", " + data.locations[i].state + '</h2>';
            locations += '<p>' + data.locations[i].title + '</p>';
            locations += '<p>' + data.locations[i].text + '</p>';
            locations += '</li>';
        }
        locations += '<button>Next</button>';
        locations += '</ul>';
        content1.innerHTML = locations;
    }


    // Recent Posts (index.html)
    var content2 = document.querySelector('#recentPosts');

    if(content2) {
        var recentPosts = '';
        recentPosts += '<h2><strong>Recent Posts</strong></h2>';
        recentPosts += '<ul>';

        for (var j = 0; j < data.posts.length; j++) {

            recentPosts += '<li>';
            recentPosts += '<img src=" ' + data.posts[j].imageURL + ' " alt = " ' + data.posts[j].subtitle + '" width="300" height="200" />';
            recentPosts += '<h3>' + data.posts[j].title + '</h3>';
            recentPosts += '<p>' + data.posts[j].author + '</p>';
            recentPosts += '<p>' + data.posts[j].text + '</p>';
            recentPosts += '<p><a href="">Read More</a></p>';
            recentPosts += '</li>';
        }

        recentPosts += '</ul>';
        content2.innerHTML = recentPosts;

    }



    // Upcoming Events (index.html)
    var content3 = document.querySelector('#upcomingEvents');

    if(content3) {
        var upcomingEvent = '';
        upcomingEvent += '<h2>Upcoming Events</h2>';
        upcomingEvent += '<dl>';

        for (var z = 0; z < 3; z++) {
            upcomingEvent += '<dt>' + data.events[z].title + '</dt>';
            upcomingEvent += '<dd>' + data.events[z].text + '</dd>';
        }

        upcomingEvent += '</dl>';
        content3.innerHTML = upcomingEvent;
    }



    // New Hikers (index.html)
    var content4 = document.querySelector('#newHikers');

    if (content4) {
        var hikersElement = '';
        hikersElement += '<h2>New Hikers</h2>';
        hikersElement += '<dl>';

        for (var n = 0; n < 4; n++) {
            hikersElement += '<img src=" ' + data.hikers[n].imageURL + ' " alt = " ' + data.hikers[n].username + '" width="50" height="50" />';
            hikersElement += '<dt> ' + data.hikers[n].lastname + ", " + data.hikers[n].firstname + ' </dt>';
            hikersElement += '<dd> ' + data.hikers[n].city + ", " + data.hikers[n].state + ' </dd>';
        }

        hikersElement += '</dl>';
        content4.innerHTML = hikersElement;
    }



    // About section
    var content5 = document.querySelector('#about');

    if(content5) {

        var aboutUs = '';
        aboutUs += '<h2>About</h2>';
        aboutUs += '<h3>' + data.about.title + '</h3>';
        aboutUs += '<p>' + data.about.text + '</p>';
        aboutUs += '<p>' + data.about.copyright + '</p>';

        content5.innerHTML = aboutUs;

    }



    // Blog (blog.html)
    var blogContent = document.querySelector('#blog');
    if (blogContent) {
        var blogPosts = '';
        blogPosts += '<h2>Blog</h2>';
        blogPosts += '<ul>';

        for (var b = 0; b < data.posts.length; b++) {
            blogPosts += '<li>';
            blogPosts += '<article>';
            blogPosts += '<p>' + data.posts[b].postDate + '</p>';
            blogPosts += '<p>' + data.posts[b].title + '</p>';
            blogPosts += '<img src=" ' + data.posts[b].imageURL + ' " alt = " ' + data.posts[b].subtitle + '" width="400" height="300"/>';
            blogPosts += '<h3>' + data.posts[b].subtitle + '</h3>';
            blogPosts += '<p>' + data.posts[b].text + '</p>';
            blogPosts += '<p><a href="">More</a> </p>';
            blogPosts += '</article>';
            blogPosts += '</li>';
        }

        blogPosts += '</ul>';
        blogPosts += '<p><a href="">See More</a> </p>';
        blogContent.innerHTML = blogPosts;
    }


    // Events (events.html)
    var eventContent = document.querySelector('#events');

    if (eventContent) {

        var eventPosts = '';
        eventPosts += '<h2>Events</h2>';

        for (var p = 0; p < data.events.length; p++) {
            eventPosts += '<img src=" ' + data.posts[p].imageURL + '" alt=" ' + data.posts[p].eventId + ' " width="400" height="300" />';
            eventPosts += '<h3>' + data.events[p].title + '</h3>';
            eventPosts += '<p>' + data.events[p].text + '</p>';
        }

        eventPosts += '<p><a href="">View More Events</a> </p>';

        eventContent.innerHTML = eventPosts;
    }
};

// Call Ajax
jsonFile.open('GET', 'https://joshbloom.github.io/dws1/data/hikersguide.json', true);
jsonFile.send(null);