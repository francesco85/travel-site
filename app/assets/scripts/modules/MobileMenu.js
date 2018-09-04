import $ from 'jquery';

class MobileMenu{
    constructor(){
        this.siteHeader = $('.site-header');
        this.menuIcon = $('.site-header__menu-icon');
        this.menuContent = $(".site-header__menu-content");
        this.events();
    }
    events(){
        //bind cambia l'oggetto di riferimento..impostato a this permetterà al metodo toggleMenu di avere this uguale all'oggetto principale..
        this.menuIcon.click(this.toggleMenu.bind(this));
    }
    
    toggleMenu(){
        //senza il bind infatti il this di toggleMenu si riferirà all'oggetto che inesca l'evento e quindi this sarebbe uguale a menuIcon
        this.menuContent.toggleClass("site-header__menu-content--is-visible");
        this.siteHeader.toggleClass("site-header--is-expanded"); 
        this.menuIcon.toggleClass('site-header__menu-icon--close-x');
    }
}


export default MobileMenu;