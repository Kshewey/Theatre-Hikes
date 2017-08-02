import $ from 'jquery';

class MobileDropMenuOne {
  constructor() {




    this.menuIcon  = $(".mobile-menu-icon-dropdown-one");
    this.menuContent = $(".mobile-drop-nav-one");
    this.events();
  }

  events() {
    this.menuIcon.click(this.toggleTheMenu.bind(this));
  }

  toggleTheMenu() {
    this.menuContent.toggleClass("mobile-drop-nav-one-visible");
    this.menuIcon.toggleClass("mobile-menu-icon-dropdown-one-invert");


  }
}



export default MobileDropMenuOne;
