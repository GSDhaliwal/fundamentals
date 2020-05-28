const calculateRectangleArea = function (length, width) {
  if (length >= 0 && width >= 0) {
    let areaRectangle = length * width;
    return areaRectangle;
  } else if (length < 0 || width <  0){
    return "undefined";
  }
};


const calculateTriangleArea = function (base, height){
  if (base >= 0 && height >= 0) {
    let areaTriangle = base * height / 2;
    return areaTriangle;
  } else if (base < 0 || height < 0) {
    return "undefined";
  }
};


const calculateCircleArea = function (radius) {
  if (radius >= 0) {
    let areaCircle = Math.PI * Math.pow(radius, 2);
    return areaCircle;
  } else if (radius < 0) {
    return "undefined";
  }
};

