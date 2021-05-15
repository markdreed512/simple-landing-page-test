// need to reset modals after submit

// fix gap on right
$('#demo-modal-form').on("submit", handleDemoSubmit)
$('#contact-modal-form').on("submit", handleContactSubmit)


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