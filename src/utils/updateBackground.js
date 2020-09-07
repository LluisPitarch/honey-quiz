const updateBackground = (nextIndex) => {
  const img1 = require('../img/img-quiz-1.jpg');
  const img2 = require('../img/img-quiz-2.jpg');
  const img3 = require('../img/img-quiz-3.jpg');
  const img4 = require('../img/img-quiz-4.jpg');
  const img5 = require('../img/img-quiz-5.jpg');
  const img6 = require('../img/img-quiz-6.jpg');
  const img7 = require('../img/img-quiz-7.jpg');
  const img8 = require('../img/img-quiz-8.jpg');

  var imgBg = '';

  switch (nextIndex || 1) {
    case 1:
      imgBg = img1;
      break;
    case 2:
      imgBg = img2;
      break;
    case 3:
      imgBg = img3;
      break;
    case 4:
      imgBg = img4;
      break;
    case 5:
      imgBg = img5;
      break;
    case 6:
      imgBg = img6;
      break;
    case 7:
      imgBg = img7;
      break;
    case 8:
      imgBg = img8;
      break;
    default:
      imgBg = img1;
      break;
  }

  return imgBg;
};

export default updateBackground;
