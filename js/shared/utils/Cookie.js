let Cookie = {
  createCookie: function(name, value, expires, path, domain) {
    let cookie = name + "=" + escape(value) + "; ";
    if (expires) {
        // If it's a date
        if(expires instanceof Date) {
          // If it isn't a valid date
          if (isNaN(expires.getTime()))
           expires = new Date();
        }
        else
          expires = new Date(new Date().getTime() + parseInt(expires) * 1000 * 60 * 60 * 24);

        cookie += "expires=" + expires.toGMTString() + "; ";
      }
    if (path)
      cookie += "path=" + path + ";";
    if (domain)
      cookie += "domain=" + domain + ";";

    document.cookie = cookie;
  },
  getCookie: function(name) {
    // Escape regexp special characters (thanks kangax!)
    name = name.replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');

    var regex = new RegExp('(?:^|;)\\s?' + name + '=(.*?)(?:;|$)','i'),
        match = document.cookie.match(regex);

    return match && unescape(match[1]);
  }
}

export default Cookie;
