// let nextButton = document.getElementById("next")
// let prevButton = document.getElementById("prev")
// console.log(nextButton);
// console.log(prevButton);

// let carousel = document.querySelector(".carousel")
// let sliderDom = carousel.querySelector(".carousel .list")
// let thumbnailBorderDom = document.querySelector(".carousel .thumbnail")
// let thumbnailItemDom = thumbnail.querySelectorAll(".item")
// let timeDom = document.querySelector('.carousel .item')

// thumbnailBorderDom.appendChild(thumbnailItemDom[0])
// let timeRunning = 3000;
// let timeAutoNext = 7000;

// nextButton.addEventListener("click", function(){

//     showSlider("next")
// })

// prevButton.addEventListener("click", function(){

//     showSlider("prev")
    
// })

// let runTimeout;
// let runNextAuto = setTimeout(() => {

//     next.click()
    
// }, timeAutoNext);

// function showSlider (type){

//     let sliderItemDom = sliderDom.querySelectorAll(".carousel .list .item")
//     console.log(itemSlider.innerHtml);
    
//     let itemthumbNail = document.querySelectorAll(" .carousel .thumbnail .item")
//     console.log(itemthumbNail.innerHtml);

//     if (type === "next"){

//     sliderDom.appendChild(sliderItemDom[0])
//     thumbnail.appendChild(itemthumbNail[0])  
//     carousel.classList.add('next')
    
//     }else {

//         // const positionLastItem = itemSlider.length - 1;
//         sliderDom.prepend(sliderItemDom[sliderItemDom.length - 1])
//         thumbnail.prepend(itemthumbNail[itemthumbNail.length - 1])
//         carousel.classList.add('prev')

//         // const lastItem = itemSlider.at(-1); // Access the last element
//         // const lastThumb = itemThumbNail.at(-1); // Access the last element
//         // listItem.prepend(lastItem);
//         // thumbnail.prepend(lastThumb);
//         // carousel.classList.add("prev");
        
        
//     }
    
    
//     clearTimeout(runTimeout);
//     runTimeout = setTimeout(() => {

//         carousel.classList.remove('next') 
//         carousel.classList.remove('prev') 
        
        
//     }, timeRunning);
    
//     clearTimeout(runNextAuto);
//     runNextAuto = setTimeout(() => {
//         next.click();
//     }, timeAutoNext)
    
// }


//step 1: get DOM
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector(' .carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');
// step 2 :  assing the event listener  for the next and previous buttons to be triggered and apply translation function when button triggered and timing 
thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
nextDom.addEventListener("click", function(){

    showSlider('next')
    
})
// nextDom.onclick = function(){
//     showSlider('next');    
// }
prevDom.addEventListener("click", function(){

    showSlider('prev')
    
})
// prevDom.onclick = function(){
//     showSlider('prev');    
// }
let timeRunning = 3000;
let timeAutoNext = 7000;
let runTimeOut;
let runNextAuto = setTimeout(() => {
    next.click();
}, timeAutoNext)


// now write the function for the buttons to apply translating when clicked and timeout functions to  

function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll(' .item');
    
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);
    console.log(timeRunning);
    
    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click();
        console.log(nextDom);
        
    }, timeAutoNext)
    console.log(timeAutoNext);
    

}



// let nextD = document.getElementById('next')
// let prevD = document.getElementById('prev')

// psuedo  js
// selecting the dom (next = id, prev = id, coarousel = class, list = carousel list)



