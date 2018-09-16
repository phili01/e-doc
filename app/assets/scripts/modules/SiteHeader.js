import $ from 'jquery';

class SiteHeader {
    constructor() {
        this.user = $(".site-header__content--account__details--name__settings");
        this.userToggler = $(".site-header__content--account__details--name, .site-header__content--account__details--img");
        this.userTogglerIcn = $(".site-header__content--account__details--name h4");
        this.events();  
    }
    
    events() {
        this.userToggler.click(this.toggleUserDet.bind(this));
    }
    
    toggleUserDet() {
       this.user.toggleClass("site-header__content--account__details--name__settings--visible"); 
        this.userTogglerIcn.toggleClass("icon__rotate");
    }
    
}
 
export default SiteHeader;       