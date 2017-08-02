import $ from 'jquery';

class MobileMenu {
  constructor() {



    this.menuIcon = $(".mobile-menu-icon");
    this.mobileMenuIconOne = $(".mobile-menu-icon-dropdown-one");
    this.mobileMenuIconTwo = $(".mobile-menu-icon-dropdown-Two");
    this.menuContent = $(".mobile-menu");
    this.dropdownMenuContentOne = $(".mobile-drop-nav-one");
    this.dropdownMenuContentTwo = $(".mobile-drop-nav-two");
    this.events();
  }

  events() {
    this.menuIcon.click(this.toggleTheMenu.bind(this));
  }

  toggleTheMenu() {
    this.dropdownMenuContentOne.toggleClass("mobile-drop-nav-one-visible");
    this.dropdownMenuContentTwo.toggleClass("mobile-drop-nav-two-visible");
    this.menuContent.toggleClass("mobile-menu-visible");
    this.menuIcon.toggleClass("mobile-menu-icon-close-x");


  }
}



export default MobileMenu;
