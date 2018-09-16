import $ from 'jquery';

class ViewDoc {
    constructor() {
        this.rejectToggler = $(".site-main__view--footer__rej");
        this.reject = $(".site-main__view--rej");
        this.rejectOverlay = $(".site-main__view--overlay");
        this.closeReject = $(".site-main__view--overlay, .page-section__pst--overlay");
        this.events();
    }
    
    events() { 
        this.rejectToggler.click(this.addRej.bind(this));
        this.closeReject.click(this.removeRej.bind(this));
    }  
    
    addRej() {
        this.reject.addClass("site-main__view--rej__visible");
        this.rejectOverlay.addClass("site-main__view--overlay__visible");
    }
    
    removeRej() {
        this.reject.removeClass("site-main__view--rej__visible");
        this.rejectOverlay.removeClass("site-main__view--overlay__visible");
    }
}

export default ViewDoc; 