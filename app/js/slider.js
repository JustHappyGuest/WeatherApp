class ThreeSomeSlider{
    constructor(slider){
        this.slider = slider;
        this.sliderInner = slider.firstElementChild;
        this.sliderItems = this.sliderInner.children;

        this.step = 0;




        this.calculateOffset = (num) => {
            return num >= this.sliderItems.length ? num - this.sliderItems.length : num;
        }

        this.reloadOffset = (step) => {
            for(let i = 0; i < this.sliderItems.length; i++){
                this.sliderItems[i].style.left = this.sliderItems[i].offsetWidth * this.calculateOffset(i+step)+"px";
            }
        }
        window.onload = () => {
            this.reloadOffset(this.step);
            this.sliderInner.style.height = document.querySelector(".slider-inner_item-active").offsetHeight + 120 + "px";
        }
        window.onresize = () => {
            this.reloadOffset(this.step);
            this.sliderInner.style.height = document.querySelector(".slider-inner_item-active").offsetHeight + 120 + "px";
        }

        this.drowActiveItem = (direction) => {
            let activeItem = document.querySelector(".slider-inner_item-active");

            if(direction){
                if(activeItem.previousElementSibling !== null){
                    activeItem.previousElementSibling.classList.add("slider-inner_item-active");
                }else{
                    this.sliderInner.lastElementChild.classList.add("slider-inner_item-active");
                }
            }else{
                if(activeItem.nextElementSibling !== null){
                    activeItem.nextElementSibling.classList.add("slider-inner_item-active");
                }else{
                    this.sliderInner.firstElementChild.classList.add("slider-inner_item-active");
                }
            }


            activeItem.classList.remove("slider-inner_item-active")

        }


    }
    next(){


        if(this.step >= this.sliderItems.length - 1){
            this.step = 0
        }else {
            this.step++;
        }

        this.reloadOffset(this.step);
        this.drowActiveItem(true);
    }
    previous(){
        if(this.step <= 0){
            this.step = this.sliderItems.length - 1;
        }else {
            this.step--;
        }

        this.reloadOffset(this.step);
        this.drowActiveItem(false);
    }
}

let classSlider = document.querySelector(".slider");
let controlsNext = document.querySelector(".slider-controls_next")
let controlsPrevious = document.querySelector(".slider-controls_previous")

let threeSomeSlider = new ThreeSomeSlider(classSlider);

controlsNext.onclick = () => {
    threeSomeSlider.next();
};

controlsPrevious.onclick = () => {
    threeSomeSlider.previous();
}







