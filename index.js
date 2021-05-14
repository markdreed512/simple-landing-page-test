$('#modal-form').on("submit", handleSubmit)

function handleSubmit(e){
    e.preventDefault()
    let name = e.target.children[0].children[1].value
    // console.log(name)
    // select the modal, set it's contents to a message
    $("#modalLabel").html(`<h3>Success!!</h3>`)
    $(".modal-body").html(`<h4>Thanks ${name}! You'll be hearing from one of our agents soon.</h4><button type="button" class="btn btn-secondary mt-5" data-bs-dismiss="modal">Close</button>`)
}