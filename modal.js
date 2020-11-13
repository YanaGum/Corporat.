function _createModal(options) {
    const modal = document.createElement('div')
    modal.classList.add('modal_')
    modal.insertAdjacentHTML('afterbegin', `
    
    <div class="modal-overlay">
       <div class="modal-window">
         <div class="modal-header">
            <span class="modal-titlle">Authorization</span>
            <span class="modal-close">&times;</span>
        </div>
        <div class="modal-body">
            <p>Do you want to register on the site?</p>
        </div>
        <div class="modal-footer">
           <button>Ok</button>
           <button>Cancel</button>
        </div>
        
       </div>
    </div>
    
    `)
    return modal
}

$.$modal = function (options) {
    const $modal = _createModal(options)

    return {
        open() {},
        close() {},
        destroy() {}
    }
}