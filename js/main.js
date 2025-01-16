$(document).ready(function(){
    /*=================== SEARCH BOX PHONE ================================*/
    $("#search-box-phone").css("display", "none")
    
    $("#open-search-box-phone").click(function() {
        $("#search-box-phone").toggle()
    })
    
    $("#close-search-box").click(function() {
        $("#search-box-phone").css("display", "none")
    })

    
    /*=================== PROGRESS BAR ================================*/
    const progressBar = document.getElementById("reading-progress-fill");
    const setProgressBar = () => {
        let scrollDist = document.documentElement.scrollTop || document.body.scrollTop;
        let progressWidth = (scrollDist / (document.body.scrollHeight - document.documentElement.clientHeight)) *  100;
        progressBar.style.width = progressWidth + "%";
    }
    
    if (progressBar) {
        window.addEventListener("scroll", setProgressBar);
    }
    
    /*=================== SHARE ================================*/
    $(".share-icon").click(function() {
        $(".share-body").toggle();
    });
    

    /*=================== TABLE OF CONTENTS ================================*/
    $("#table-of-contents-show").click(function() {
        $("#table-of-contents-menu").toggle();
    });

    /*========================== THEMES =============================*/
    /*$("#light-theme").css("display", "none");
    if ($("#dark-theme").css("display", "block")) {
        $("#dark-theme").click(function() {
            $("#dark-theme").css("display", "none")
            $("#light-theme").css("display", "block")
        })
    } else ($("#dark-theme").css("display", "none"));{
        $("#light-theme").click(function() {
            $("#light-theme").css("display", "none")
            $("#dark-theme").css("display", "block")
        })
    }*/

    $("#light-theme").css("display", "block");
    if ($("#light-theme").css("display", "block")) {
        $("#light-theme").click(function() {
            $("#dark-theme").css("display", "block")
            $("#light-theme").css("display", "none")
        })
    } else ($("#dark-theme").css("display", "block"));{
        $("#dark-theme").click(function() {
            $("#light-theme").css("display", "block")
            $("#dark-theme").css("display", "none")
        })
    }

    let themeSwitches = document.getElementsByClassName('themeswitch')
    let style = localStorage.getItem('style')

    if (style == null) {
        setTheme('dark');
    } else {
        setTheme(style);
    }

    for (let i of themeSwitches){
        i.addEventListener('click', function() {
            let theme = this.dataset.theme;
            setTheme(theme);
        })
    }

    function setTheme(theme){
        if (theme == 'light'){
            document.getElementById('theme-style').href = './themes/light.css'
        } else if (theme == 'dark'){
            document.getElementById('theme-style').href = './themes/dark.css'
        }
        localStorage.setItem('style', theme);
    }

    /*========================== SCROLL TO TOP =============================*/
    scrollToTopBtn = document.getElementById("scroll-to-top");

    window.onscroll = function(){scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20) {
                scrollToTopBtn.style.display = "block";
        } else {
                scrollToTopBtn.style.display = "none";
        }
    }

    var rootElement = document.documentElement;

    function scrollToTop() {
        rootElement.scrollTo({
            top:0,
            behavior: "smooth"
        });
    }

    scrollToTopBtn.addEventListener("click", scrollToTop);

    //ABOUT
    $("#mypics").owlCarousel({
   
        autoPlay: true, //Set AutoPlay to 3 seconds
   
        items : 1,
        itemsDesktop : false,
        itemsDesktopSmall : [false]
   
    });
   
    var typed = new Typed("#what-i-do", {
        strings: ["Blogger", "Content Creator", "Developer", "Artist"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
        showCursor: false
    })

    /*function searchThePage() {
        // Declare variables
        var input, filter, ul, li, a, i, txtvalue;
        input = document.getElementById("search-box");
        filter = input.value.toUpperCase();
        ul = document.getElementById("blogs");
        li = ul.getElementsByTagName("li");

        // Loop through all the list items, and hide those who don't match the search query
        for (i = 0; i < li.length; i++) {
            a = li[i].getElementsByTagName("a")[0];
            txtvalue = a.textContent || a.innerText;
            if (txtvalue.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
            }
        }
    }

    function search(text){
        if (window.find(text)){
            console.log(window.find(text));
        }
    }*/

})