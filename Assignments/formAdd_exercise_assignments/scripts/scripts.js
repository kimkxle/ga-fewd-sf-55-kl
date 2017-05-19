//on document ready - only execute code when DO< is ready
//listen for click add button
//stop the form submission
//get value of to do input
//create new item add
//add new item to bottom list
//clear text from to do list


//on document ready
$('document').ready(function() {
  console.log('Code is ready!');

//listen for click add button
  $('#add-todo').click(function(event) {
    console.log('click');
    // Stop default behaviour of form submission
    event.preventDefault();

    // get value of todo input
    var newToDoItem = $('#new-todo');

    //read value of new 
    var newToDo = newToDoItem.val();

    //clear value of previous entered to do
    newToDoItem.val('');

    console.log('New Todo is: ' + newToDo);

    //create list item with todo value and append to do list
    //var newElement = '<li><label><input type='checkbox'><span>'+ newToDo +'</span></label></li>
    // $('#todos').append(newElement); 


    //alternate approach using clone
    //find and clone html template already present on the page
    //'<li id="template"><label><input type="checkbox">

    var newElement = $('#template').clone();
    //remove the template id
    newElement.attr('id','');
    //find the span instead the new clone and replace text with new to do value
    newElement.find('span').text(newToDo);
    //append the new element to the to do list
    newElement.appendTo('#todos');

    //on click clear button parent on default
    //find all checked items
    //$(#todos : checked).each(function())
    //for all found items 
    //remove them using function remove()
    })

    $('#clear-todo').click(function(event) {
      event.preventDefault();
      $('#todos :checked').each(function() {
        $(this).closest('li').remove();
      });
  });

});