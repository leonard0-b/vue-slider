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
      // creo funzione per scorrere avanti al click della freccia destra
      next: function() {
        // se l'index dell'array è minore della lunghezza dell'array - 1
        if (this.index < this.imgs.length - 1) {
          // continua a scorrere
          this.index++
        } else {
          // altrimenti index = 0 per tornare alla prima
          this.index = 0
        }
      },
      // creo funzione per scorrere indietro al click della freccia sinistra
      prev: function() {
        // se l'index dell'array è maggiore di 0
        if (this.index > 0) {
          // allora continua a decrescere
          this.index--
        } else {
          // altrimenti se l'index è uguale a lungheza array - 1 torna all'ultima
          this.index = this.imgs.length - 1
        }
      },
      // selzione delle ancore
      anchorSel: function(index) {
        this.index = index;
      },
      // faccio partire l'interval per lo side a 2sec
      start: function() {
       this.interval = setInterval(this.next, 2000);
      },
      // al click stoppo
      stop: function() {
        this.interval = clearInterval(this.interval);
      }
    }
    // created: function(){
    //   setInterval(this.next, 3000);
    // }
})
