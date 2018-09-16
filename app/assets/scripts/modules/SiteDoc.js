import $ from 'jquery';

class SiteDoc {
    constructor() {
        this.filter = $(".site-main__mymemo--filter__title--opt");
        this.filterSrch = $(".form__edoc");
        this.filterToggler = $(".site-main__mymemo--filter__title");
        this.filterClose = $(".site-main__mymemo--filter__opt--close");
        this.filterOpen = $(".site-main__mymemo--filter__opt--open");
        this.filterHolder = $(".site-main__mymemo--filter");
        this.msgTop = $(".site-main__mymemo--msg__maintitle");
        this.filterIcn = $(".site-main__mymemo--msg__maintitle--filter");
        this.fwdToggler = $(".site-main__mymemo--msg__btn--share, .site-main__mymemo--msg__title--icon__share");
        this.fwd = $(".site-main__mymemo--fwd"); 
        this.overlayClose = $(".site-main__content--overlay, .site-main__mymemo--fwd__user, .site-main__mymemo--status__details--item__last");
        this.overlay = $(".site-main__content--overlay");
        this.progressToggler  = $(".site-main__mymemo--msg__footer--memo");
        this.progress = $(".site-main__mymemo--status");
        this.events();
    }
    
    events() {
        this.fwdToggler.click(this.toggleFwd.bind(this));
        this.overlayClose.click(this.removeOverlay.bind(this));
        this.filterToggler.click(this.toggleFilter.bind(this));
        this.filterClose.click(this.closeFilter.bind(this));
        this.filterOpen.click(this.closeFilter.bind(this));
        this.filterIcn.click(this.openFilter.bind(this));
        this.progressToggler.click(this.toggleProgress.bind(this));  
    }  
   
    toggleFwd() {
        this.fwd.toggleClass("site-main__mymemo--fwd__visible");
        this.overlay.toggleClass("site-main__content--overlay__visible");
    }
    
    toggleFilter() {
        this.filter.toggleClass("site-main__mymemo--filter__title--opt__visible"); 
        this.filterToggler.toggleClass("icon__rotate");
    }
    
    closeFilter() {
        this.filterClose.toggleClass("site-main__mymemo--filter__opt--close__hide");
        this.filterOpen.toggleClass("site-main__mymemo--filter__opt--open__visible");
        this.filterSrch.toggleClass("form__edoc--hide");
        this.filterHolder.toggleClass("site-main__mymemo--filter__hide");
        this.msgTop.toggleClass("site-main__mymemo--msg__maintitle--mintop");
        this.filterIcn.toggleClass("site-main__mymemo--msg__maintitle--filter__visible");
    }
    
    openFilter() {
        this.filterOpen.toggleClass("site-main__mymemo--filter__opt--open__visible"); 
        this.filterClose.toggleClass("site-main__mymemo--filter__opt--close__hide");
        this.filterSrch.toggleClass("form__edoc--hide");
        this.filterHolder.toggleClass("site-main__mymemo--filter__hide");
        this.msgTop.toggleClass("site-main__mymemo--msg__maintitle--mintop");
        this.filterIcn.toggleClass("site-main__mymemo--msg__maintitle--filter__visible");
    }
    
    toggleProgress() { 
        this.progress.toggleClass("site-main__mymemo--status__visible"); 
        this.overlay.toggleClass("site-main__content--overlay__visible");
    }
    
    removeOverlay() {
        this.fwd.removeClass("site-main__mymemo--fwd__visible"); 
        this.progress.removeClass("site-main__mymemo--status__visible");
        this.overlay.removeClass("site-main__content--overlay__visible");
    }
}

export default SiteDoc;