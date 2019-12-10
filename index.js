
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
