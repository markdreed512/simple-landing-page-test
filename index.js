// need to reset modals after submit
// need to reconfigure contact modal in .html, not here
// fix gap on right
$('#demo-modal-form').on("submit", handleDemoSubmit)
$('#contact-modal-form').on("submit", handleContactSubmit)
// $('#contact-btn').on("click", handleContactClick)


// function handleContactClick(){
//     $("#demo-modalLabel").html(`<h3>Contact Us</h3>`)
//     let contactHTML = `
//         <div class="mb-3">
//             <label for="firstName" class="form-label">First Name</label>
//             <input type="text" class="form-control" id="firstName" aria-describedby="firstName">
//         </div>
//         <div class="mb-3">
//             <label for="lastName" class="form-label">Last Name</label>
//             <input type="text" class="form-control" id="lastName">
//         </div>
//         <div class="mb-3">
//             <label for="email" class="form-label">Email</label>
//             <input type="email" class="form-control" id="email">
//         </div>
//         <div class="mb-3">
//             <label for="message" class="form-label">Message</label>
//             <textarea type="text" class="form-control" id="email"></textarea>
//         </div>
//         <button type="submit" class="btn btn-primary">Submit</button>
//     `
//     $(".modal-body").html(contactHTML)
// }

function handleDemoSubmit(e){
    e.preventDefault()
    let name = e.target.children[0].children[1].value
    $("#demo-modalLabel").html(`<h3>Success!!</h3>`)
    $("#demo-modal-body").html(`<h4>Thanks ${name}! You'll be hearing from one of our agents soon.</h4><button type="button" class="btn btn-secondary mt-5" data-bs-dismiss="modal">Close</button>`)
    throwConfetti("top")
}  
function handleContactSubmit(e){
    e.preventDefault()
    let name = e.target.children[0].children[1].value
    $("#contact-modalLabel").html(`<h3>Success!!</h3>`)
    $("#contact-modal-body").html(`<h4>Thanks ${name}! You'll be hearing from one of our agents soon.</h4><button type="button" class="btn btn-secondary mt-5" data-bs-dismiss="modal">Close</button>`)
    throwConfetti("middle")
}  
function throwConfetti(startingPoint){
    for(let i=0; i < 100; i++){
        let c = new Confetti(startingPoint)
        c.show()
    }
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
            position: "absolute",
            left: `${Math.floor(Math.random()*100)}%`,
            top: `${Math.floor(Math.random()*5) - 10}%`,
            width: `${5 + Math.floor(Math.random() * 10)}px`,
            height: `${10 + Math.floor(Math.random() * 20)}px`,
            transform: `rotate(${Math.floor(Math.random()*360)}deg)`,
            backgroundColor: `rgb(${this.r},${this.g},${this.b})`,
            animationName: this.animation,
            animationDuration: `${Math.floor(Math.random()*4) + 3}s`,
            animationDelay: `${Math.floor(Math.random()*2)}s`,
            animationTimingFunction: "ease-in"
        }
        div.css(styles)
        $('body').append(div)
    }
}