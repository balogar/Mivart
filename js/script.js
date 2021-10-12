const slider = document.querySelectorAll('.from-down');
const sliderCircle = document.querySelectorAll('.from-down-circle');
const sliderContact = document.querySelectorAll('.from-down-contact');
const sliderForm = document.querySelectorAll('.from-down-form');
const company = document.querySelectorAll('.company-name');

$(function(){
    $('#img-border-about-1').hover(function(){
        
        $('#menu-about-title-1').css('color', 'blue');
        $('#menu-about-title-1').css('transition', '1s');
    }, function(){
        $('#menu-about-title-1').css('color', ''); 
    });
});
$(function(){
    $('#img-border-about-2').hover(function(){
        $('#menu-about-title-2').css('color', 'blue');
        $('#menu-about-title-2').css('transition', '1s');
    }, function(){
        $('#menu-about-title-2').css('color', ''); 
    });
});
$(function(){
    $('#img-border-about-3').hover(function(){
        
        $('#menu-about-title-3').css('color', 'blue');
        $('#menu-about-title-3').css('transition', '1s');
    }, function(){
        $('#menu-about-title-3').css('color', ''); 
    });
});
$(function(){
    $('#img-border-offer-1').hover(function(){
        
        $('#menu-offer-title-1').css('color', 'blue');
        $('#menu-offer-title-1').css('transition', '1s');
    }, function(){
        $('#menu-offer-title-1').css('color', ''); 
    });
});
$(function(){
    $('#img-border-offer-2').hover(function(){
        $('#menu-offer-title-2').css('color', 'blue');
        $('#menu-offer-title-2').css('transition', '1s');
    }, function(){
        $('#menu-offer-title-2').css('color', ''); 
    });
});
$(function(){
    $('#img-border-offer-3').hover(function(){
        
        $('#menu-offer-title-3').css('color', 'blue');
        $('#menu-offer-title-3').css('transition', '1s');
    }, function(){
        $('#menu-offer-title-3').css('color', ''); 
    });
});
$('#menu-burger-1').click(function(){
    $('.left-menu-col').hide("slow");
    $('.right-menu-col').hide("slow");
    $('.fixed-menu').show("slow");
    $('.under-menu').show("slow");
    
});
$('#menu-burger-2').click(function() { 
    $('.left-menu-col').show("slow");
    $('.right-menu-col').show("slow");
    $('.fixed-menu').hide("slow");
    $('.under-menu').hide("slow");
    
});
$(window).scroll(function() {
    if ($(window).scrollTop() > 800) {
        $(".fixed-menu").show("slow");
    } else if ($(".left-menu-col").is(":hidden")){
        $(".fixed-menu").show("slow");
    } else {
        $(".fixed-menu").hide("slow");
    }
});


const appearOptions = {
    threshold:0,
    rootMargin: "0px 0px -150px 0px"
};

const appearOnScroll = new IntersectionObserver
(function(
    entries, 
    appearOnScroll
    ){
        entries.forEach(entry =>{
                

                if(!entry.isIntersecting){
                    return;
                } else{
                    entry.target.classList.add('appear');
                    appearOnScroll.unobserve(entry.target);
                }
            
        });
    },
    appearOptions);

    slider.forEach((slider, i) =>{
        setTimeout(() =>{
            appearOnScroll.observe(slider);
        }, i * 1000);   
    });

    sliderCircle.forEach((sliderCircle, i) =>{
        setTimeout(() =>{
            appearOnScroll.observe(sliderCircle);
        }, i * 1000);   
    });

    sliderContact.forEach((sliderContact, i) =>{
        setTimeout(() =>{
            appearOnScroll.observe(sliderContact);
        }, i * 1000);   
    });
    
    sliderForm.forEach((sliderForm, i) =>{
        setTimeout(() =>{
            appearOnScroll.observe(sliderForm);
        }, i * 1000);   
    });

    company.forEach((company, i) =>{
        appearOnScroll.observe(company);
    });

const sectionOne = document.querySelector('.about');
const sections = document.querySelectorAll('.section');
const menu_1 = document.querySelector('#first-menu-element');
const menu_2 = document.querySelector('#second-menu-element');
const menu_3 = document.querySelector('#third-menu-element');
const menu_4 = document.querySelector('#fourth-menu-element');
const menu_5 = document.querySelector('#fifth-menu-element');
const menu_6 = document.querySelector('#sixth-menu-element');

const options = {
    rootMargin: "0px 0px 0px 0px"
};

const observer = new IntersectionObserver(function(entries, observer){
    entries.forEach(entry =>{
        
        if (!entry.isIntersecting){
            return;
        }else{

            if(entry.target.classList[2]=='section1'){
                menu_1.classList.add('active-toggle');
            }else{
                menu_1.classList.remove('active-toggle');
            }

            if(entry.target.classList[2]=='section2'){
                menu_2.classList.add('active-toggle');
            }else{
                menu_2.classList.remove('active-toggle');
            }

            if(entry.target.classList[2]=='section3'){
                menu_3.classList.add('active-toggle');
            }else{
                menu_3.classList.remove('active-toggle');
            }

            if(entry.target.classList[2]=='section4'){
                menu_4.classList.add('active-toggle');
            }else{
                menu_4.classList.remove('active-toggle');
            }

            if(entry.target.classList[2]=='section5'){
                menu_5.classList.add('active-toggle');
            }else{
                menu_5.classList.remove('active-toggle');
            }

            if(entry.target.classList[2]=='section6'){
                menu_6.classList.add('active-toggle');
            }else{
                menu_6.classList.remove('active-toggle');
            }
            
        
        }
        
    });
}, options);

sections.forEach(section =>{
    observer.observe(section);
});

const btn = document.querySelector('#submit_email_button');
const inputs = document.querySelector('form');
textarea
function sendEmail() {
    if (inputs.elements["email"].value =="" & inputs.elements["message"].value == "" & inputs.elements["name"].value=="" &inputs.elements["number"].value ==""){
        $('.form-wrapper').css('border-color', 'red'),
        $('textarea').css('border-color', 'red'),
        alert("Mail nebol poslany")
    } else{
	Email.send({
    SecureToken:"ede90c75-f019-40d2-961c-2c7c4ba60ce9",
	To: 'testforfirm1224@gmail.com',
	From: inputs.elements["email"].value,
    Subject: "Email zo stranky Leonides",
    Body: "Sprava: "+inputs.elements["message"].value + "<br>" + "Meno: "+inputs.elements["name"].value +"<br>"+ "Cislo: " +inputs.elements["number"].value,
	}).then(
        $('.form-wrapper').css('border-color', '#a29375'),
        $('textarea').css('border-color', '#a29375'),
		alert("Mail bol poslany")
	);
    $('#form')[0].reset();
}
}



