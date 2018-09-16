import $ from 'jquery';

class SiteNav {
    constructor() {
        this.msgOptToggler = $(".site-main__nav--items__msg");
        this.docOptToggler = $(".site-main__nav--items__doc");
        this.msgOpt = $(".site-main__nav--items__msg--opt");
        this.docOpt = $(".site-main__nav--items__doc--opt");
        this.msgTitleOpt = $(".site-main__mymemo--msg__title--icon");
        this.msgTitle = $(".site-main__mymemo--msg__title");
        this.msgTitleExp = $(".site-main__mymemo--msg__title--content");
        this.events();
    }
    
    events() {
        this.msgOptToggler.click(this.toggleMsgOpt.bind(this));
        this.docOptToggler.click(this.toggleDocOpt.bind(this));
        this.msgTitle.mouseenter(this.openMsgTitleOpt.bind(this));
        this.msgTitle.mouseleave(this.closeMsgTitleOpt.bind(this));
    }
     
    toggleMsgOpt() { 
        this.msgOpt.toggleClass("site-main__nav--items__msg--opt__visible");   
    }
    
    toggleDocOpt() {
        this.docOpt.toggleClass("site-main__nav--items__doc--opt__visible");
    }
    
    openMsgTitleOpt() {
//        this.msgTitleOpt.addClass("site-main__mymemo--msg__title--icon__visible"); 
    }
    closeMsgTitleOpt() {
//        this.msgTitleOpt.removeClass("site-main__mymemo--msg__title--icon__visible"); 
    }
}

export default SiteNav;