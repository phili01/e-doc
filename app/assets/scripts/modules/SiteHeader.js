import $ from 'jquery';

class SiteHeader {
    constructor() {
        this.user = $(".site-header__content--account__details--name__settings");
        this.userToggler = $(".site-header__content--account__details--name, .site-header__content--account__details--img");
        this.userTogglerIcn = $(".site-header__content--account__details--name h4");
        this.navToggler = $(".site-header__content--nav");
        this.nav = $(".site-main__nav");
        this.navOverLay = $(".wrapper__main--overlay");
        this.navTopSm = $(".site-header__logo--sm");
        this.navClose = $(".wrapper__main--overlay");
        this.events();  
    }
    
    events() {
        this.userToggler.click(this.toggleUserDet.bind(this));
        this.navToggler.click(this.openNav.bind(this));
        this.navClose.click(this.closeNav.bind(this));
    }
    
    toggleUserDet() {
       this.user.toggleClass("site-header__content--account__details--name__settings--visible"); 
        this.userTogglerIcn.toggleClass("icon__rotate");
    }
    
    openNav() {
        this.nav.addClass("site-main__nav--visible"); 
        this.navTopSm.addClass("site-header__logo--sm__hide"); 
        this.navOverLay.addClass("wrapper__main--overlay__visible");
    }
    
    closeNav() {
        this.nav.removeClass("site-main__nav--visible");
        this.navTopSm.removeClass("site-header__logo--sm__hide"); 
        this.navOverLay.removeClass("wrapper__main--overlay__visible");
    }
    
}
 
export default SiteHeader;       