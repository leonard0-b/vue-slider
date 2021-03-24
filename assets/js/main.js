var app = new Vue (
  {
    el: "#root",
    data: {
      index: 0,
      interval: null,
      imgs: [
        "./assets/img/img0.jpg",
        "./assets/img/img1.jpg",
        "./assets/img/img2.jpg",
        "./assets/img/img7.jpg",
        "./assets/img/img10.jpg",
      ],
    },
    methods: {
      next: function() {
        if (this.index < this.imgs.length - 1) {
          this.index++
        } else {
          this.index = 0
        }
      },

      prev: function() {
        if (this.index > 0) {
          this.index--
        } else {
          this.index = this.imgs.length - 1
        }
      },

      anchorSel: function(index) {
        this.index = index;
      },

      start: function() {
       this.interval = setInterval(this.next, 2000);
      },

      stop: function() {
        this.interval = clearInterval(this.interval);
      }
    }
    // created: function(){
    //   setInterval(this.next, 3000);
    // }
})
