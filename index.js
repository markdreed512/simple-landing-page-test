// need to reset modals after submit

// fix gap on right
$('#demo-modal-form').on("submit", handleDemoSubmit)
$('#contact-modal-form').on("submit", handleContactSubmit)
// $('#demo-close-btn').on("click", handleDemoClose)

function handleDemoModalClose(){
    console.log("handling demo close")
    $("#demo-modalLabel").html(`Schedule a Demo`)
    $("#demo-modal-body").html(`<form id="demo-modal-form">
    <div class="mb-3">
      <label for="demo-firstName" class="form-label">First Name</label>
      <input type="text" class="form-control" id="demo-firstName" aria-describedby="demo-firstName">
    </div>
    <div class="mb-3">
      <label for="demo-lastName" class="form-label">Last Name</label>
      <input type="text" class="form-control" id="demo-lastName">
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>`)
}
function handleContactModalClose(){
    console.log("handling demo close")
    $("#contact-modalLabel").html(`Contact Us`)
    $("#contact-modal-body").html(`<form id="contact-modal-form">
    <div class="mb-3">
      <label for="contact-firstName" class="form-label">First Name</label>
      <input type="text" class="form-control" id="contact-firstName" aria-describedby="contact-firstName">
    </div>
    <div class="mb-3">
      <label for="contact-lastName" class="form-label">Last Name</label>
      <input type="text" class="form-control" id="contact-lastName">
    </div>
    <div class="mb-3">
        <label for="contact-message" class="form-label">Message</label>
        <textarea type="text" class="form-control" id="contact-message"></textarea>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>`)
}
function handleDemoSubmit(e){
    e.preventDefault()
    let name = e.target.children[0].children[1].value
    $("#demo-modalLabel").html(`<h3>Success!!</h3>`)
    $("#demo-modal-body").html(`<h4>Thanks ${name}! You'll be hearing from one of our agents soon.</h4><button type="button" onclick="handleDemoModalClose()" class="btn btn-secondary mt-5" data-bs-dismiss="modal">Close</button>`)
    throwConfetti("top")
}  

function handleContactSubmit(e){
    e.preventDefault()
    let name = e.target.children[0].children[1].value
    $("#contact-modalLabel").html(`<h3>Success!!</h3>`)
    $("#contact-modal-body").html(`<h4>Thanks ${name}! You'll be hearing from one of our agents soon.</h4><button type="button"  onclick="handleContactModalClose()" id="contact-close-btn" class="btn btn-secondary mt-5" data-bs-dismiss="modal">Close</button>`)
    // throwConfetti("middle")
}  
function throwConfetti(startingPoint){
    for(let i=0; i < 100; i++){
        let c = new Confetti(startingPoint)
        c.show()
        setTimeout(removeConfetti, 4000)
    }
}
function removeConfetti(){
    $(".confetti").remove()
}
class Confetti{
    constructor(animation){
        this.r = Math.floor(Math.random() * 255)
        this.g = Math.floor(Math.random() * 255)
        this.b = Math.floor(Math.random() * 255)
        this.animation = animation
    }
    show(){
        console.log("showing confetti")
        let div = $('<div>')
        let styles = {
            animationName: this.animation,
            left: `${Math.floor(Math.random()*100)}%`,
            width: `${5 + Math.floor(Math.random() * 10)}px`,
            height: `${10 + Math.floor(Math.random() * 20)}px`,
            transform: `rotate(${Math.floor(Math.random()*360)}deg)`,
            backgroundColor: `rgb(${this.r},${this.g},${this.b})`,
            animationDuration: `${Math.floor(Math.random()*4) + 3}s`,
            animationDelay: `${Math.floor(Math.random()*2)}s`
        }
        div.addClass("confetti")
        div.css(styles)
        $('body').append(div)
    }
}