$(document).ready(function(){
    //Menu Toggle Script
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });

    // For highlighting activated tabs
    $("#tab1").click(function () {
        $(".tabs").removeClass("active1");
        $(".tabs").addClass("bg-light"); 
        $("#tab1").addClass("active1");
        $("#tab1").removeClass("bg-light");
    });
    $("#tab2").click(function () {
        $(".tabs").removeClass("active1");
        $(".tabs").addClass("bg-light");
        $("#tab2").addClass("active1");
        $("#tab2").removeClass("bg-light");
    });
    $("#tab3").click(function () {
        $(".tabs").removeClass("active1");
        $(".tabs").addClass("bg-light");
        $("#tab3").addClass("active1");
        $("#tab3").removeClass("bg-light");
    });
})

  function myFunction() {
     //document.getElementById("sample-form").submit();
    
    }
    function formatPhoneNumber(value) {
        if (!value) return value;
        const phoneNumber = value.replace(/[^\d]/g, '');
        const phoneNumberLength = phoneNumber.length;
        if (phoneNumberLength < 4) return phoneNumber;
        if (phoneNumberLength < 7) {
          return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
        }
        return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
          3,
          6
        )}-${phoneNumber.slice(6, 9)}`;
      }

      function phoneNumberFormatter() {
        const inputField = document.getElementById('phone-number');
        const formattedInputValue = formatPhoneNumber(inputField.value);
        inputField.value = formattedInputValue;
      }
     
      
      $('#phone-number').keyup(function(){
        adddashes(this);
      });
      
      function adddashes(el){
        let val = $(el).val().split('-').join('');      //remove all dashes (-)
        if(val.length < 9){
          let finalVal = val.match(/.{1,3}/g).join('-');//add dash (-) after every 3rd char.
          $(el).val(finalVal);
        }
      }
      $("#phone-number").intlTelInput({
        utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/12.0.3/js/utils.js",
        allowDropdown: true
      });
      