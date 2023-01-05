function updateLinks() {
    var link1url = '/'; link1text = 'Home';
    var link2url = '/aboutme'; link2text = 'About Me';
    var link3url = '/clock'; link3text = 'Clock';
    var link4url = '/spotify'; link4text = 'Spotify nowplaying';
    var link5url = '/blog'; link5text = 'Blog (soon!)';
    var link6url = '/projects'; link6text = 'Projects';
    var link7url = '/test'; link7text = 'Test';
    var link8url = 'https://github.com/agent-seed/agentseed.org'; link8text = 'Github';
    
    var link1 = '<a href="' + link1url + '">' + link1text + '</a>';
    var link2 = '<a href="' + link2url + '">' + link2text + '</a>';
    var link3 = '<a href="' + link3url + '">' + link3text + '</a>';
    var link4 = '<a href="' + link4url + '">' + link4text + '</a>';
    var link5 = '<a href="' + link5url + '">' + link5text + '</a>';
    var link6 = '<a href="' + link6url + '">' + link6text + '</a>';
    var link7 = '<a href="' + link7url + '">' + link7text + '</a>';
    var link8 = '<a href="' + link8url + '">' + link8text + '</a>';

    document.getElementById("sidebar").innerHTML = link1 + link2 + link3 + link4 + link5 + link6 + link7 + link8;
}