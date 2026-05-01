 // function testScope() {
        //     aVariable = "This is local";
        //     console.log(localVariable);
        // }
        // testScope();
        // console.log(aVariable);
        // (function() {
        //     var localVariable = "This is local";
        //     console.log(localVariable);
        // })();
        
        `use strict`;
        (function() {
            var myPs = document.querySelectorAll('p');
            for (var i = 0; i < myPs.length; i++) {
                myPs[i].style.color = `red`;
            }
            console.log(1);

            // const cheese = "yummy";
            // console.log(cheese);
            // const.log(cheese);

        })();
        // console.log(myPs);