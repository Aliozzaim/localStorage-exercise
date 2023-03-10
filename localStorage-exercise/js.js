// username =

// function hello(){
//   let h = document.querySelector("#a")
//     h.innerHTML = ("aaaaaaaaaaafasdf")
 
// // } 


// // function userCheck(){
// //     if ( use)
// //   } 

// // let getname  = prompt("Isminizi Giriniz")
// // myName = document.querySelector("#myName")
// // myName.innerHTML = getname


// // let alican = "aaaaaaaaaaafasdf"

// // let h2 = document.querySelector("#b")
// // h2 = alican

// // hello()
// // hello()
// // hello()
// // console.log("'asdf")

// // let ali = document.querySelector("#a")
// // yazdir = "aaaaaaaaaaafasdf"
// // ali = yazdir

// // h.innerHTML =  yazdir





// let firstname = "LOREM"

// function greetings(firstname =""){
//     console.log(`merhaba ${firstname ? firstname :""} `)
//     console.log(`merhaba ${firstname}`)
// }

    // // greetings()



    // function factorial(n) { 
    //     let result = 1
    //     for (let i = 1 ; n >= i  ; i++) { 
    //       result = result * i	
            
        
        
    // }
    //  return result
    // }

    // console.log(factorial(10)) 



// function selamlama(firsname) {
// console.log(`merhaba ${firsname}`)


// }
// console.log(selamlama)


// const selam = (firsname ) => console.log(`merhaba  ${firsname}`)

// selam("Ali")

// const selam1 = firsname => console.log(`merhaba  ${firsname}`)

// selam1("Ali")
 

// const selam2 = (firsname , lastname) => 
// console.log(`merhaba  ${firsname} ${lastname}`)

// selam2("Ali", 'ozzaim')


// const selam3 = (firsname , lastname) => {
// let info = `merhaba  ${firsname} ${lastname}`
// console.log(info)
// return info
// }
// selam3("Ali", 'ozzaim')

// let greeting = document.querySelector("#a")
// greeting.addEventListener("click" ,domclick )

// function domclick(){
//     console.log("tiklandi")
//     console.log(this.innerHTML = "VURMA")
// }


// let tikolcer = document.querySelector("#b")
// tikolcer.addEventListener("click",domclick2) 

// function domclick2(){
//     console.log("tiklandi")
//     console.log(this.innerHTML = "BANAAGG")
//     // this.style.color == "red" ? this.style.color = "black" : this.style.color = "red"
// }

let counter = localStorage.getItem("number") ? Number(localStorage.getItem("number")) :  0
let counterdom = document.querySelector("#counter")
let increasedom = document.querySelector("#a")
let decreasedom = document.querySelector("#b")

counterdom.innerHTML = counter
decreasedom.addEventListener("click" ,clickevent )
increasedom.addEventListener("click" ,clickevent )

function  clickevent(){ this.id == "a" ?  counterdom.innerHTML = counter+=1 : counterdom.innerHTML = counter-=1
                       localStorage.setItem("number",counter) 
}        
                        


