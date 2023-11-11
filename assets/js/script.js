window.addEventListener("scroll", (e) => {
  document.body.style.cssText = `--scrollTop: ${this.scrollY}px`;
});

const initialCoordinates = {
  x: 0,
  y: 0,
};

let moveElement = false;
let deviceType = "";

const events = {
  mouse: {
    down: "mousedown",
    move: "mousemove",
    up: "mouseup",
  },
  touch: {
    down: "touchstart",
    move: "touchmove",
    up: "touchend",
  },
};

const isTouchDevice = () => {
  try {
    document.createEvent("TouchEvent");
    deviceType = "touch";
    return true;
  } catch (e) {
    deviceType = "mouse";
    return false;
  }
};

isTouchDevice();

const handleDrag = (e, draggableElem) => {
  e.preventDefault();
  const clientX = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
  const clientY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;

  if (moveElement) {
    draggableElem.style.top =
      draggableElem.offsetTop - (initialCoordinates.y - clientY) + "px";
    draggableElem.style.left =
      draggableElem.offsetLeft - (initialCoordinates.x - clientX) + "px";
    initialCoordinates.x = clientX;
    initialCoordinates.y = clientY;
  }
};

const stopDrag = () => {
  moveElement = false;
};

const addDraggableListeners = (draggableElem) => {
  draggableElem.addEventListener(events[deviceType].down, (e) => {
    e.preventDefault();
    initialCoordinates.x = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
    initialCoordinates.y = !isTouchDevice() ? e.clientY : e.touches[0].clientY;
    moveElement = true;
  });

  draggableElem.addEventListener(events[deviceType].move, (e) => {
    handleDrag(e, draggableElem);
  });

  draggableElem.addEventListener(events[deviceType].up, stopDrag);
  draggableElem.addEventListener("mouseleave", stopDrag);
};

// Apply the event listeners to your draggable elements
addDraggableListeners(document.getElementById("draggable-elem"));
addDraggableListeners(document.getElementById("draggable-elem2"));
addDraggableListeners(document.getElementById("draggable-elem3"));
addDraggableListeners(document.getElementById("draggable-elem4"));
addDraggableListeners(document.getElementById("draggable-elem5"));
addDraggableListeners(document.getElementById("draggable-elem6"));
