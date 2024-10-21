// ! side bar

$('.openIcon').on('click',function(){
    console.log('done');
    $('.open').css('left' , '0')
})

$('.hclose').on('click',function(){
    $('.open').css('left', '-270px')
})

// ! Slider

$('.slider h3').on('click', function(e){
    $(e.target).next().slideToggle();
    $('.slider div').not($(e.target).next()).slideUp();
})

// ! Counter

setInterval(function(){
    let today = new Date().getTime();
    let countDown = new Date("2024-12-1").getTime();
    let timeLeft = countDown - today;
    let days = Math.floor(timeLeft/(1000 * 60 * 60 * 24));
    let hours = Math.floor(timeLeft%(1000 * 60 * 60 * 24)/(1000 * 60 * 60));
    let minutes = Math.floor(timeLeft%(1000 * 60 * 60 * 24)/(1000 * 60));
    let seconds = Math.floor(timeLeft%(1000 * 60 * 60 * 24)/(1000));

    display(days , hours , minutes , seconds)
},1000)

function display(days , hours , minutes , seconds){
    let card = ` 
    <div id=" counterData" class="row g-4 my-5 mx-4  ">
                <div class="col-md-6 col-lg-3">
                    <div class="card p-4 bg-transparent border-white text-white">
                        <div class="card-info text-center">
                            <h3 class="card-title"> - ${days} D</h3>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3">
                    <div class="card p-4 bg-transparent border-white text-white">
                        <div class="card-info text-center">
                            <h3 class="card-title">${hours} h</h3>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3">
                    <div class="card p-4 bg-transparent border-white text-white">
                        <div class="card-info text-center">
                            <h3 class="card-title">${minutes} </h3>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3">
                    <div class="card p-4 bg-transparent border-white text-white">
                        <div class="card-info text-center">
                            <h3 class="card-title">${seconds} s</h3>
                        </div>
                    </div>
                </div>
            </div>
        
    `
    document.getElementById('counter').innerHTML= card;
    
}

// ! Contact US


$('textarea').on('input', function(e){
    let mylength = $(this).val().length;
    console.log(mylength);
    $('#remainder').text( 100 - mylength <=0 ? "your available character finished " : 100 - mylength);
})

