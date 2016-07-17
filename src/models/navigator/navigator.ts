export interface Navigator {
// main content to render
  children: any,
  // sidebar content to render
  sidebar: any,

  // boolean if sidebar should be docked
  docked: boolean,

  // boolean if sidebar should slide open
  open: boolean,

  // boolean if transitions should be disabled
  transitions: boolean,

  // Place the sidebar on the right
  pullRight: boolean,

  // Enable/Disable sidebar shadow
  shadow: boolean,

  // distance we have to drag the sidebar to toggle open state
  dragToggleDistance: number,

  // callback called when the overlay is clicked
  onSetOpen: Function
}

/*
Default 
  docked: false,
  open: false,
  transitions: true,
  touch: true,
  touchHandleWidth: 20,
  pullRight: false,
  shadow: true,
  dragToggleDistance: 30,
  onSetOpen: () => {},
  styles: {},


*/