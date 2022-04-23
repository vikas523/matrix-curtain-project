// import "./styles.css";
let width,
  height,
  color = "green",
  wrinkles = "x1.5",
  headRail = "curtain-rail 25mm pole",
  shipping = "express";
const colorLookup = {
  SilverWhite: 3,
  Ivory: 9,
  Cream: 2,
  Beige: 5,
  Brown: 6,
  moka: 7,
  "silver-gray": 8,
  "ocean-gray": 9,
  navy: 10,
  pink: 11,
  purple: 12,
  "dark-brown": 13,
  mint: 14,
  blue: 16,
  chocolate: 17,
  green: 18,
  "warm-gray": 19,
  "cool-gray": 20,
  maple: 21,
};

// create width and height where customer choose their curtain according his/her demand
const widthLookup = [
  {
    start: 1,
    end: 10,
    price: 10,
  },
  {
    start: 11,
    end: 20,
    price: 15,
  },
  {
    start: 21,
    end: 30,
    price: 16,
  },
];

const heightLookup = [
  {
    start: 0,
    end: 10,
    price: 12,
  },
  {
    start: 11,
    end: 20,
    price: 15,
  },
  {
    start: 21,
    end: 30,
    price: 17,
  },
];

const wrinklesLookup = {
  none: 1,
  "x1.5": 4,
  x2: 6,
  "hooks tape": 7,
};

const headRailLookup = {
  none: 1,
  "curtain-rail 25mm pole": 10,
  "curtain-rail 35mm pole": 20,
};

const shippingLookup = {
  genral: 2,
  express: 3,
};

document.getElementById("width").addEventListener("keyup", (e) => {
  width = parseInt(e.target.value, 10);
});

document.getElementById("height").addEventListener("keyup", (e) => {
  height = parseInt(e.target.value, 10);
});

document.getElementById("color").addEventListener("change", (e) => {
  color = e.target.value;
});

document.getElementById("wrinkles").addEventListener("change", (e) => {
  wrinkles = e.target.value;
});

document.getElementById("headRail").addEventListener("change", (e) => {
  headRail = e.target.value;
});

document.getElementById("shipping").addEventListener("change", (e) => {
  shipping = e.target.value;
});

function multiply(color, width, height, wrinkles, headRail, shipping) {
  const cPrice = colorLookup[color];
  const wrinkelPrice = wrinklesLookup[wrinkles];
  const headPrice = headRailLookup[headRail];
  const shipPrice = shippingLookup[shipping];

  const wPrice = widthLookup.reduce(
    (acc, w) => {
      if (width >= w.start && width <= w.end) acc = w.price;
      return acc;
    },
    [0]
  );
  const hPrice = heightLookup.reduce(
    (acc, h) => {
      if (height >= h.start && height <= h.end) acc = h.price;
      return acc;
    },
    [0]
  );
  return cPrice * wPrice * hPrice * wrinkelPrice * headPrice * shipPrice;
}

document.getElementById("submitBtn").addEventListener("click", (e) => {
  // console.log("you choose this", width, height, color,wrinkles,headRail,shipping);
  console.log(`you choose this width is ${width} height is ${height} color is  ${color} wrinkle is ${wrinkles} headRail is ${headRail} and shiping  ${shipping}
  `);

  let total = 0;
  total = multiply(color, width, height, wrinkles, headRail, shipping);

  document.getElementById("total").value = total;
});

// addition
function addition(color, width, height, wrinkles, headRail, shipping) {
  const cPrice = colorLookup[color];
  const wrinkelPrice = wrinklesLookup[wrinkles];
  const headPrice = headRailLookup[headRail];
  const shipPrice = shippingLookup[shipping];

  const wPrice = widthLookup.reduce(
    (acc, w) => {
      if (width >= w.start && width <= w.end) acc = w.price;
      return acc;
    },
    [0]
  );
  const hPrice = heightLookup.reduce(
    (acc, h) => {
      if (height >= h.start && height <= h.end) acc = h.price;
      return acc;
    },
    [0]
  );
  return cPrice + wPrice + hPrice + wrinkelPrice + headPrice + shipPrice;
}

document.getElementById("submitBtn1").addEventListener("click", (e) => {
  // console.log("you choose this", width, height, color,wrinkles,headRail,shipping);
  console.log(`you choose this width is ${width} height is ${height} color is  ${color} wrinkle is ${wrinkles} headRail is ${headRail} and shiping  ${shipping}
  `);

  let total1 = 0;
  total1 = addition(color, width, height, wrinkles, headRail, shipping);

  document.getElementById("total1").value = total1;
});

// subtraction
function subtraction(color, width, height, wrinkles, headRail, shipping) {
  const cPrice = colorLookup[color];
  const wrinkelPrice = wrinklesLookup[wrinkles];
  const headPrice = headRailLookup[headRail];
  const shipPrice = shippingLookup[shipping];

  const wPrice = widthLookup.reduce(
    (acc, w) => {
      if (width >= w.start && width <= w.end) acc = w.price;
      return acc;
    },
    [0]
  );
  const hPrice = heightLookup.reduce(
    (acc, h) => {
      if (height >= h.start && height <= h.end) acc = h.price;
      return acc;
    },
    [0]
  );
  return cPrice - wPrice - hPrice - wrinkelPrice - headPrice - shipPrice;
}

document.getElementById("submitBtn2").addEventListener("click", (e) => {
  // console.log("you choose this", width, height, color,wrinkles,headRail,shipping);
  console.log(`you choose this width is ${width} height is ${height} color is  ${color} wrinkle is ${wrinkles} headRail is ${headRail} and shiping  ${shipping}
  `);

  let total2 = 0;
  total2 = addition(color, width, height, wrinkles, headRail, shipping);

  document.getElementById("total2").value = total2;
});

const newWidth = [
  18.125, 18.5, 36.75, 55.125, 73.5, 91.75, 110.375, 128.375, 130,
];
const newHeight = [64.875, 65, 94.5, 106.375, 118.25, 130];
const priceMatrix = [
  [25.25, 50.5, 75.75, 101, 126.25, 151.5, 176.75, 202, 202],
  [30.25, 60.5, 90.75, 121, 151.25, 181.5, 211.75, 242, 242],
  [32.75, 65.5, 98.25, 131, 163.75, 196.5, 229.25, 262, 262],
  [35.25, 70.5, 105.75, 141, 176.25, 211.5, 246.75, 282, 282],
  [37.75, 75.5, 113.25, 151, 188.75, 226.5, 264.25, 302, 302],
  [37.75, 75.5, 113.25, 151, 188.75, 226.5, 264.25, 302, 302],
];

// 25.25, 50.5, 75.75, 101, 126.25, 151.5, 176.75, 202, 202
const newWidthElement = document.getElementById("new-width");
const newHeightElement = document.getElementById("new-height");
const newTotalElement = document.getElementById("newTotal");

newWidthElement.addEventListener("change", newPriceCallback);
newHeightElement.addEventListener("change", newPriceCallback);

const state = {
  height: "none",
  width: "none",
};

function newPriceCallback(e) {
  const { value, name } = e.target;
  state[name] = value;
  if (state.height !== "none" && state.width !== "none") {
    newTotalElement.value = priceMatrix[state.height][state.width];
    console.log(
      "🚀 ~ file: index.js ~ line 235 ~ newPriceCallback ~  priceMatrix[state.height][state.width];",
      priceMatrix[state.height][state.width]
    );
  }
}

function addOptions(parentNode, options) {
  for (let i = 0; i < options.length; i++) {
    const option = document.createElement("option");
    option.setAttribute("value", i);
    option.innerText = options[i];
    parentNode.appendChild(option);
  }
}

addOptions(newWidthElement, newWidth);
addOptions(newHeightElement, newHeight);
