function rgbHex(color) {
  let hex = "";
  if (color.indexOf("rgb") === -1) {
    return color;
  } else if (color.indexOf("rgba") !== -1) {
    hex = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+),\s*(\d+|0\.\d+)\)$/);
  }
  else {
    hex = color.match(/^rgb?\((\d+),\s*(\d+),\s*(\d+)\)$/);
  }

  function hexx(x) {
    return (`0${parseInt(x).toString(16)}`).slice(-2);
  }

  return `#${hexx(hex[1])}${hexx(hex[2])}${hexx(hex[3])}`;
}



