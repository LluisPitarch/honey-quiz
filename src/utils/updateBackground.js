const updateBackground = (nextIndex) => {
  const img1 = require('../img/img-quiz-1.jpg');
  const img2 = require('../img/img-quiz-2.jpg');

  var imgBg = '';

  switch (nextIndex || 1) {
    case 1:
      imgBg = img1;
      break;
    case 2:
      imgBg = img2;
      break;
    default:
      imgBg = img1;
      break;
  }

  return imgBg;
};

export default updateBackground;
