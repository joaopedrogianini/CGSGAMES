class MobileNavbar{
    constructor(mobileMenu, navList){
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll();
        this.activeClass = "active";
    }

   handleClick(){
    console.log(this);
    this.navList.classList.toggle(this.activeClass);
   }




    addClickEvent(){
        this.mobileMenu.addEventListener ("click", this.handleClick );
    }

    init(){
  if (this.mobileMenu){
    this.addClickEvent();
  }
  return this;
    }
}

const MobileNavbar = new MobileNavbar(
".mobile-menu",
".nav-list",
".nav-list li",
);