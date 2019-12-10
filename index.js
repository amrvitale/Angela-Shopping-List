//add, check, uncheck and remove items from shopping list
/*Using DOM manipulation and traversal to dynamically add and remove HTML elements and apply styles.
Linking to an externally hosted library (jQuery) and a locally hosted JavaScript file (index.js). DONE (I THINK)
Linking to your application JavaScript file from the index.html page. DONE
Using this and event delegation*/ //probably this.remove? like with the pet one?
//.submit, .preventDefault, .toggleClass, .closest
//when done, push up to GitHub and publish it on GitHub Pages, then submit link to repo in Thinkful.


// function that creates the HTML structure of the added list item, including check and delete buttons
//inserts value added by user
//note that HTML is copy and pasted for list item, except for value
function buildHtmlList(value) {
    return  `<li>
            <span class="shopping-item">${value}</span>
             <div class="shopping-item-controls">
            <button class="shopping-item-toggle">
            <span class="button-label">check</span>
            </button>
            <button class="shopping-item-delete">
            <span class="button-label">delete</span>
            </button>
            </div>
             </li>`
}

function checkItem(){
    $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
        event.preventDefault();
        $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    })
}

function removeItem() {
    $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
        event.preventDefault();
        $(this).closest('li').remove();
    })
}

function createList() {
    $('#js-shopping-list-form').on('submit', function(event) {
        event.preventDefault();

        let value = $('#shopping-list-entry').val();
        $('.shopping-list').append($(buildHtmlList(value)));
        })
};

$(createList)
$(checkItem)
$(removeItem)
