$("#newPost").on("click", function() {
    $("#postModal").openModal();
});

[].forEach.call(document.querySelectorAll('.card-content div'), function(e){
  var i = document.createElement('img');
  i.src = '/advert';
  console.log(i);
  console.log(e);
});

$("#postBodyBtn").on("click", function() {
    var form = new FormData(document.getElementById("postForm")),
        req = new XMLHttpRequest();

    req.open("POST", "/new", true);
    req.responseType = "json";
    req.onload = function(d) {
      var data = d.currentTarget.response,
          elem = $(`
              <div class="row">
                  <div class="col s12">
                      <div class="card blue-grey darken-1">
                          <div class="card-content white-text">
                              <span class="card-title">` + data.title + `</span>
                              <div>
                                  ` + data.body + `
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          `);
      elem.hide();
      elem.prependTo("#posts");
      elem.slideToggle();
    }

    req.send(form);
});
