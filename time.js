// function showTime() {
//     let date = new Date();
//     let hours = date.getHours();
//     let minutes = date.getMinutes();
//     let seconds = date.getSeconds();
//     let time = hours + ':' + minutes + ':' + seconds;
//     document.getElementById('clock').innerHTML = time;
//     setTimeout(showTime, 1000); // update every second
//   }
//   showTime(); 



export class Clock {
    constructor() {
      this.start();
    }
  
    start() {
      this.updateTime();
      this.intervalId = setInterval(() => {
        this.updateTime();
      }, 1000);
    }
  
    updateTime() {
      let date = new Date();
      let hours = this.formatNumber(date.getHours());
      let minutes = this.formatNumber(date.getMinutes());
      let seconds = this.formatNumber(date.getSeconds());
      let time = `${hours}:${minutes}:${seconds}`;
      document.getElementById('clock').innerHTML = time;
    }
  
    formatNumber(num) {
      return num < 10 ? `0${num}` : num;
    }
  
    stop() {
      clearInterval(this.intervalId);
    }
  }
  
  // let clock = new Clock();
  