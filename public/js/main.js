$("#newPost").on("click", function() {
    $("#postModal").openModal();
});

$("#postBodyBtn").on("click", function() {
    var form = new FormData(document.getElementById("postForm"));
    $.ajax("/new", {
        method: "POST",
        data: form,
        dataType: "json",
        statusCode: {
            200: function(data) {
                $("#posts").prepend(`
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
            }
        }
    })
});