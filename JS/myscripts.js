// // Listen for click on the document
// document.addEventListener('click', function (event) {
  
//   //Bail if our clicked element doesn't have the class
//   if (!event.target.classList.contains('accordion-toggle')) return;
  
//   // Get the target content
//   var content = document.querySelector(event.target.hash);
//   if (!content) return;
  
//   // Prevent default link behavior
//   event.preventDefault();
  
//   // If the content is already expanded, collapse it and quit
//   if (content.classList.contains('accordionOpen')) {
//     content.classList.remove('accordionOpen');
//     return;
//   }
  
//   // Get all open accordion content, loop through it, and close it
//   var accordions = document.querySelectorAll('.accordion-content.accordionOpen');
//   for (var i = 0; i < accordions.length; i++) {
//     accordions[i].classList.remove('accordionOpen');
//   }
  
//   // Toggle our content
//   content.classList.toggle('accordionOpen');


// document.getElementsByTagName("html")[0].className += " js";
// })



  const accordian = document.querySelector('.accordian');
        const items = accordian.querySelectorAll('li');
        const questions = accordian.querySelectorAll('.question');

        function toggleaccordian(){
            const thisitem = this.parentNode;

            items.forEach(item => {
                if (thisitem == item) {
                    thisitem.classList.toggle('open');
                    return;
                }
                item.classList.remove('open');

            });
   
        }



        questions.forEach(question => question.addEventListener('click', toggleaccordian));


    


