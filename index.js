$('#modal-form').on("submit", handleSubmit)

function handleSubmit(e){
    e.preventDefault()
    let name = e.target.children[0].children[1].value
    // console.log(name)
    // select the modal, set it's contents to a message
    $("#modalLabel").html(`<h3>Success!!</h3>`)
    $(".modal-body").html(`<h4>Thanks ${name}! You'll be hearing from one of our agents soon.</h4><button type="button" class="btn btn-secondary mt-5" data-bs-dismiss="modal">Close</button>`)
    for(let i=0; i < 100; i++){
        let width = 5 + Math.floor(Math.random() * 10)
        let height = 10 + Math.floor(Math.random() * 20)
        let red = Math.floor(Math.random() * 255)
        let green = Math.floor(Math.random() * 255)
        let blue = Math.floor(Math.random() * 255)
        let c = new Confetti(width, height, red, green, blue)
        c.show()
    }
    
}  
class Confetti{
    constructor(w,h,r,g,b){
        this.w = w
        this.h = h
        this.color = `rgb(${r},${g},${b})`
    }
    show(){
        console.log("showing confetti")
        let div = $('<div>')
        let styles = {
            position: "absolute",
            left: `${Math.floor(Math.random()*100)}%`,
            top: `${Math.floor(Math.random()*5) - 10}%`,
            width: this.w,
            height: this.h,
            transform: `rotate(${Math.floor(Math.random()*360)}deg)`,
            backgroundColor: this.color,
            animationName: "fall",
            animationDuration: `${Math.floor(Math.random()*4) + 3}s`,
            animationDelay: `${Math.floor(Math.random()*2)}s`,
            animationTimingFunction: "ease-in"
        }
        div.css(styles)
        $('body').append(div)
    }
}