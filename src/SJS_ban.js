// Tools for banning and unbanning users.
// Uses localstorage API, so if user clears their data, they will still be able to access the site.

var SJS_ban = {
  banUser: function() {
    localStorage.setItem("sjs_ban", "true");
  },
  unbanUser: function() {
    localStorage.setItem("sjs_ban", "false");
  },
  isUserBanned: function() {
    var SJSisBanned = localStorage.getItem("sjs_ban");
    return SJSisBanned;
  }
}
