import $ from 'jquery';

class MobileDropMenuTwo {
  constructor() {




    this.menuIcon  = $(".mobile-menu-icon-dropdown-two");
    this.menuContent = $(".mobile-drop-nav-two");
    this.events();
  }

  events() {
    this.menuIcon.click(this.toggleTheMenu.bind(this));
  }

  toggleTheMenu() {
    this.menuContent.toggleClass("mobile-drop-nav-two-visible");
    this.menuIcon.toggleClass("mobile-menu-icon-dropdown-two-invert");


  }
}



export default MobileDropMenuTwo;
