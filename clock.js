const hourHandElement = document.getElementById("hour");
const minuteHandElement = document.getElementById("minute");
const secondHandElement = document.getElementById("second");

const resetBtnElement = document.getElementById("reset");
const continueBtnElement = document.getElementById("continue");
const stopBtnElement = document.getElementById("stop");

isStopped = true;

currentHourAngle = -90;
currentMinuteAngle = -90;
currentSecondAngle = -90;

seconds = 0;

class Clock {
  constructor() {
    this.render();
  }

  stop() {
    isStopped = true;
  }

  continue() {
    isStopped = false;
  }

  reset() {
    currentHourAngle = -90;
    currentMinuteAngle = -90;
    currentSecondAngle = -90;
    hourHandElement.style.transform = `translateY(-50%) rotate(${currentHourAngle}deg)`;
    minuteHandElement.style.transform = `translateY(-50%) rotate(${currentMinuteAngle}deg)`;
    secondHandElement.style.transform = `translateY(-50%) rotate(${currentSecondAngle}deg)`;
    isStopped = true;
  }

  hourRunner() {
    currentHourAngle += 360 / (60 ** 2 * 12);
    hourHandElement.style.transform = `translateY(-50%) rotate(${currentHourAngle}deg)`;
  }

  minuteRunner() {
    currentMinuteAngle += 360 / 60 ** 2;
    minuteHandElement.style.transform = `translateY(-50%) rotate(${currentMinuteAngle}deg)`;
  }

  secondRunner() {
    currentSecondAngle += 6;
    secondHandElement.style.transform = `translateY(-50%) rotate(${currentSecondAngle}deg)`;
  }

  render() {
    resetBtnElement.addEventListener("click", this.reset);
    stopBtnElement.addEventListener("click", this.stop);
    continueBtnElement.addEventListener("click", this.continue);

    setInterval(() => {
      if (!isStopped) {
        this.hourRunner();
        this.minuteRunner();
        this.secondRunner();
      }
    }, 1000);
  }
}

const clock = new Clock();
