let dinoList1 = document.querySelectorAll("#orderedDinos li")

function olStrike(){
    for(let i = 0; i < dinoList1.length; i++){
        dinoList1[i].addEventListener("click", function(){
            console.log(dinoList1[i].innerText)
            dinoList1[i].style.textDecoration = "line-through"
        })
    }
}
olStrike()


let dinoList2 = document.querySelector("#unorderedDinos")

dinoList2.addEventListener("click", function(event){
    let arrow = event.target
    console.log("list Item innertext")
    arrow.style.opacity = "0"
})



let dinoPics = document.querySelectorAll("#row img")

function dinoCollapse(){
    for(let i = 0; i < dinoPics.length; i++){
        dinoPics[i].addEventListener("click",function(){
            console.log(dinoPics[i].innerText)
           // dinoPics[i].style.transition = ""
           dinoPics[i].style.width= "0px"

            buttonClassList.add("active")
            console.log(buttonClassList)
        })
    }
}
dinoCollapse()



let destroyAll = document.querySelector("#destroy-all")

destroyAll.addEventListener("click", function(){
    extinguishAll(olStrike,dinoList2,dinoPics)
})

function extinguishAll(array1,array2,array3){
    for(let i= 0; i < array1.length; i++){
        array1[i].style.textDecoration = "line-through solid red"

    }
    for(let i = 0; i < array2.length; i++){
        array2[i].style.opacity = "0"
    }
    for(let i = 0; array3.length; i++){
        array3[i].style.width = "0px"
    }
}




