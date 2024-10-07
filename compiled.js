"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * 
 * 
 * By Rakhmadi (c) 2021
 * Under the MIT License.
 * 
 * 
 */

var dataTbThemeClass = {
  'bootstrap': {
    layout: 'table_layout_fixed',
    select: 'form-select shadow-none',
    searchControl: 'form-control shadow-none',
    columnsHeader: 'columns tablesorter-header',
    paginationParent: 'pagination'
  },
  'bulma': {
    select: '',
    selectParent: 'select',
    searchControl: 'input',
    columnsHeader: 'tablesorter-header',
    button: 'button',
    paginationParent: 'pagination is-centered',
    paginationPervious: 'pagination-previous',
    paginationNext: 'pagination-next'
  }
};
var RdataTB = /*#__PURE__*/function () {
  function RdataTB(IdTable) {
    var Options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      RenderJSON: null,
      ShowSearch: true,
      ShowSelect: true,
      ShowPaginate: true,
      ShowDownload: true,
      theme: 'bootstrap',
      SelectionNumber: [5, 10, 20, 50],
      HideColumn: [],
      ShowHighlight: false,
      fixedTable: false,
      sortAnimate: true,
      ShowTfoot: true,
      ExcludeColumnExport: [],
      classList: {}
    };
    _classCallCheck(this, RdataTB);
    _defineProperty(this, "TableElement", void 0);
    // Element Table ById
    _defineProperty(this, "HeaderDataTable", []);
    // header table to array
    _defineProperty(this, "RowDataTable", []);
    // get Table to json
    _defineProperty(this, "DataTable", []);
    _defineProperty(this, "DataSorted", []);
    _defineProperty(this, "DataToRender", []);
    _defineProperty(this, "PageSize", 5);
    _defineProperty(this, "Assc", false);
    _defineProperty(this, "DataSearch", []);
    _defineProperty(this, "i", 0);
    _defineProperty(this, "COntrolDataArr", []);
    _defineProperty(this, "DataTableRaw", []);
    _defineProperty(this, "searchValue", '');
    _defineProperty(this, "Options", void 0);
    _defineProperty(this, "ListHiding", []);
    _defineProperty(this, "SelectionNumber", [5, 10, 20, 50]);
    _defineProperty(this, "SelectElementString", '');
    _defineProperty(this, "timeSort", void 0);
    _defineProperty(this, "ShowHighlight", false);
    _defineProperty(this, "listTypeDate", []);
    _defineProperty(this, "PageNow", 1);
    _defineProperty(this, "totalPages", void 0);
    _defineProperty(this, "ExcludeColumnExport", []);
    _defineProperty(this, "classList", {});
    this.classList = _objectSpread(_objectSpread({}, dataTbThemeClass[Options.theme]), Options.classList);
    this.TableElement = document.getElementById(IdTable);
    this.Options = Options;
    this.detectTyped();
    this.StyleS();
    this.ConvertToJson();
    this.paginateRender();
    this.Control();
    this.search();
    this.RenderToHTML();
    this.PaginateUpdate();
    if (Options.RenderJSON != null && Options.hasOwnProperty('RenderJSON')) {
      this.JSONinit(Options.RenderJSON);
    }
    if (!Options.ShowSelect && Options.hasOwnProperty('ShowSelect')) {
      var _document$getElementB;
      (_document$getElementB = document.getElementById('data-tb-select')) === null || _document$getElementB === void 0 || _document$getElementB.remove();
    }
    this.ShowHighlight = Options === null || Options === void 0 ? void 0 : Options.ShowHighlight;
    if (Options.fixedTable && Options.hasOwnProperty('fixedTable')) {
      var _this$TableElement;
      (_this$TableElement = this.TableElement) === null || _this$TableElement === void 0 || _this$TableElement.classList.add("table_layout_fixed");
    } else {
      var _this$TableElement2;
      (_this$TableElement2 = this.TableElement) === null || _this$TableElement2 === void 0 || _this$TableElement2.classList.remove("table_layout_fixed");
    }
    if (!Options.ShowSearch && Options.hasOwnProperty('ShowSearch')) {
      var _document$getElementB2;
      (_document$getElementB2 = document.getElementById('SearchControl')) === null || _document$getElementB2 === void 0 || _document$getElementB2.remove();
    }
    if (Options.HideColumn != null && Options.hasOwnProperty('HideColumn')) {
      this.ListHiding = Options.HideColumn;
      this.DoHide();
    }
    if (Options.SelectionNumber != null && Options.hasOwnProperty('SelectionNumber')) {
      this.SelectionNumber = Options.SelectionNumber;
      this.ChangeSelect();
    }
    this.totalPages = this.Divide().length;
  }
  return _createClass(RdataTB, [{
    key: "detectTyped",
    value: function detectTyped() {
      var _this$TableElement3;
      var getHead = (_this$TableElement3 = this.TableElement) === null || _this$TableElement3 === void 0 ? void 0 : _this$TableElement3.getElementsByTagName('th');
      for (var z = 0; z < getHead.length; z++) {
        if (getHead[z].attributes['type-date']) {
          this.listTypeDate.push({
            HeaderIndex: z,
            dateVal: true
          });
        }
      }
    }
  }, {
    key: "StyleS",
    value: function StyleS() {
      var style = document.createElement('style');
      style.innerHTML = "\n        .table_layout_fixed { \n            table-layout:fixed;\n        }\n        table > thead{\n            -webkit-user-select: none;  \n            -moz-user-select: none;    \n            -ms-user-select: none;      \n            user-select: none;\n        }\n        .pagination a {\n          color: black;\n          float: left;\n          padding: 8px 12px;\n          text-decoration: none;\n          transition: background-color .3s;\n          font-size:12px;\n        }\n        .tablesorter-header-asc::after {\n            content: '\\2191';\n            top: calc(50% - 0.75em);\n            float: right;\n        }\n        .tablesorter-header-desc::after {\n            content: '\\2193';\n            top: calc(50% - 0.75em);\n            float: right;\n        }\n        .pagination a:hover:not(.active) {background-color: #ddd;}\n        .blink_me {\n            animation: blinker 1s;\n          }\n          @keyframes blinker {\n            50% {\n              opacity: .5;\n            }\n          } \n          ";
      document.getElementsByTagName('head')[0].appendChild(style);
    }
  }, {
    key: "ChangeSelect",
    value: function ChangeSelect() {
      this.SelectElementString = '';
      for (var x = 0; x < this.SelectionNumber.length; x++) {
        this.SelectElementString += "<option value=\"".concat(this.SelectionNumber[x], "\">").concat(this.SelectionNumber[x], "</option>");
      }
      var ElSelect = document.getElementById("data-tb-select");
      if (ElSelect) {
        ElSelect.innerHTML = this.SelectElementString;
      }
      return this.SelectElementString;
    }
  }, {
    key: "Control",
    value: function Control() {
      var _this$classList$selec,
        _this$classList$selec2,
        _this$classList$selec3,
        _this = this;
      var span1 = document.createElement('span');
      span1.innerHTML = "\n        <table id=\"C\" border=\"0\" style=\"width:100%;margin-bottom:12px;\">\n        <tr>\n          <td style=\"width:100%;\">\n             <div class=\"".concat((_this$classList$selec = this.classList.selectParent) !== null && _this$classList$selec !== void 0 ? _this$classList$selec : '', "\" style=\"float:left;\">\n                <select id=\"data-tb-select\" class=\"").concat((_this$classList$selec2 = this.classList.select) !== null && _this$classList$selec2 !== void 0 ? _this$classList$selec2 : '', "\" style=\"margin-inline-start:10px;\">\n                    <option value=\"5\">5</option>\n                    <option value=\"10\">10</option>\n                    <option value=\"20\">20</option>\n                    <option value=\"50\">50</option>\n                </select>\n                ").concat(this.Options.ShowDownload === true ? "<select\n                        id=\"data-tb-select-download\"\n                        class=\"".concat((_this$classList$selec3 = this.classList.select) !== null && _this$classList$selec3 !== void 0 ? _this$classList$selec3 : '', "\"\n                        style=\"margin-inline-start:10px;\"\n                    >\n                        <option value=\"\">Download</option>\n                        <option>CSV</option>\n                        <option>XLSX</option>\n                    </select>") : "", "\n                    \n             </div>\n             \n             <input id=\"SearchControl\" class=\"").concat(this.classList.searchControl, "\" placeholder=\"Search\" type=\"text\" style=\"width:30%;margin-left:10px\">\n          </td>\n        </tr>\n      </table>\n        ");
      span1.className = 'Selc';
      this.TableElement.parentNode.insertBefore(span1, this.TableElement);
      this.TableElement.style.width = '100%';
      var ChangeV = function ChangeV(params) {
        _this.PageSize = params;
        _this.i = 0;
        _this.RenderToHTML();
      };
      var selectEl = document.getElementById('data-tb-select');
      selectEl === null || selectEl === void 0 || selectEl.addEventListener('change', function () {
        ChangeV(this.value);
      });
      document.getElementById('x__NEXT__X').onclick = function () {
        _this.nextItem();
        _this.highlight(_this.searchValue);
        _this.DoHide();
      };
      document.getElementById('x__PREV__X').onclick = function () {
        _this.prevItem();
        _this.highlight(_this.searchValue);
        _this.DoHide();
      };
      var downloadEl = document.getElementById('data-tb-select-download');
      downloadEl.onchange = function () {
        if (downloadEl.value === 'CSV') {
          _this.DownloadCSV();
        }
        if (downloadEl.value === 'XLSX') {
          _this.DownloadCSV();
        }
        downloadEl.value = '';
      };
    }
  }, {
    key: "nextItem",
    value: function nextItem() {
      this.i = this.i + 1; // increase i by one
      this.i = this.i % this.Divide().length; // if we've gone too high, start from `0` again
      this.COntrolDataArr = this.Divide()[this.i]; // give us back the item of where we are now
      this.RenderToHTML(this.COntrolDataArr);
      this.PageNow = this.i + 1;
    }
  }, {
    key: "prevItem",
    value: function prevItem() {
      if (this.i === 0) {
        // i would become 0
        this.i = this.Divide().length; // so put it at the other end of the array
      }
      this.i = this.i - 1; // decrease by one
      this.PageNow = this.i + 1;
      this.COntrolDataArr = this.Divide()[this.i]; // give us back the item of where we are now
      this.RenderToHTML(this.COntrolDataArr);
    }
  }, {
    key: "paginateRender",
    value: function paginateRender() {
      var _this$classList$pagin, _this$classList$butto, _this$classList$butto2, _this$classList$pagin2;
      var k = "<div class=\"".concat(this.classList.paginationParent, " ").concat((_this$classList$pagin = this.classList.paginationPervious) !== null && _this$classList$pagin !== void 0 ? _this$classList$pagin : '', "\" id=\"pgN\">\n            <a\n                class=\"").concat((_this$classList$butto = this.classList.button) !== null && _this$classList$butto !== void 0 ? _this$classList$butto : '', "\"\n                id=\"x__PREV__X\"\n                style=\"cursor:pointer;user-select: none;\"\n            >\n                &laquo;\n            </a>\n            <div id=\"PF\"></div>\n            <a\n                class=\"").concat((_this$classList$butto2 = this.classList.button) !== null && _this$classList$butto2 !== void 0 ? _this$classList$butto2 : '', " ").concat((_this$classList$pagin2 = this.classList.paginationNext) !== null && _this$classList$pagin2 !== void 0 ? _this$classList$pagin2 : '', "\"\n                id=\"x__NEXT__X\"\n                style=\"cursor:pointer;user-select: none;\"\n            >\n                &raquo;\n            </a>\n        </div>");
      var span = document.createElement('span');
      span.innerHTML = k;
      span.className = 'asterisk';
      this.TableElement.parentNode.insertBefore(span, this.TableElement.nextSibling);
    }
  }, {
    key: "PaginateUpdate",
    value: function PaginateUpdate() {
      if (document.getElementById('PF') != null) {
        document.getElementById('PF').innerHTML = "\n            <a style=\"\">Page ".concat(this.i + 1, " to ").concat(this.Divide().length, " of ").concat(this.DataTable === undefined ? 0 : this.DataTable.length, " Entries</a>");
      }
    }
  }, {
    key: "search",
    value: function search() {
      var _document$getElementB3,
        _this2 = this;
      this.DataSearch = this.DataTable;
      (_document$getElementB3 = document.getElementById('SearchControl')) === null || _document$getElementB3 === void 0 || _document$getElementB3.addEventListener('input', function (evt) {
        _this2.searchValue = evt.target.value;
        _this2.DataTable = _this2.DataSearch.filter(function (element) {
          for (var index = 0; index < _this2.HeaderDataTable.length; index++) {
            var fg = element[_this2.HeaderDataTable[index]].toString().toLowerCase().includes(evt.target.value.toLowerCase());
            if (fg) {
              return fg;
            }
          }
        });
        _this2.RenderToHTML();
        _this2.i = 0;
        _this2.PaginateUpdate();
        _this2.highlight(evt.target.value);
      });
    }
  }, {
    key: "ConvertToJson",
    value: function ConvertToJson() {
      var _this$TableElement4,
        _this$TableElement5,
        _this3 = this;
      //get Header
      var getHead = (_this$TableElement4 = this.TableElement) === null || _this$TableElement4 === void 0 ? void 0 : _this$TableElement4.getElementsByTagName('th');
      for (var v = 0; v < getHead.length; v++) {
        var _this$HeaderDataTable;
        (_this$HeaderDataTable = this.HeaderDataTable) === null || _this$HeaderDataTable === void 0 || _this$HeaderDataTable.push(getHead[v].textContent);
      }
      //get row data
      var getbody = (_this$TableElement5 = this.TableElement) === null || _this$TableElement5 === void 0 ? void 0 : _this$TableElement5.getElementsByTagName('tbody');
      for (var row = 0; row < (getbody[0] === undefined ? 0 : getbody[0].rows.length); row++) {
        var cellsD = [];
        for (var cellsIndex = 0; cellsIndex < getbody[0].rows[row].cells.length; cellsIndex++) {
          cellsD.push(getbody[0].rows[row].cells[cellsIndex].innerHTML);
        }
        this.RowDataTable.push(cellsD);
      }
      // to key value Json
      this.DataTable = this.RowDataTable.reduce(function (akumulasi, e) {
        akumulasi.push(_this3.HeaderDataTable.reduce(function (x, y, i) {
          x[y] = e[i];
          return x;
        }, {}));
        return akumulasi;
      }, []);
      this.DataTableRaw = this.DataTable;
      return this.DataTable;
    }
  }, {
    key: "Divide",
    value: function Divide() {
      var gh = [];
      var h = typeof this.PageSize === "string" ? parseInt(this.PageSize) : this.PageSize;
      for (var i = 0; i < (this.DataTable === undefined ? 0 : this.DataTable.length); i += h) {
        gh.push(this.DataTable.slice(i, i + h));
      }
      return gh;
    }
  }, {
    key: "RenderToHTML",
    value: function RenderToHTML() {
      var _this4 = this;
      var SlecTloaf = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      //clear 
      this.TableElement.innerHTML = '';
      // check if is sorted
      var CheckIFSorted = this.DataSorted == null || this.DataSorted === [] ? this.Divide()[0] : this.Divide()[0];
      this.DataToRender = CheckIFSorted;
      // HeaderDataTable To Element
      var header = '';
      var footer = '';
      for (var I = 0; I < this.HeaderDataTable.length; I++) {
        header += "<th style=\"cursor: pointer;\" id=\"".concat(this.HeaderDataTable[I], "_header\" class=\"").concat(this.classList.columnsHeader, "\">").concat(this.HeaderDataTable[I], "</th>\n");
        footer += "<th style=\"cursor: pointer;\" id=\"".concat(this.HeaderDataTable[I], "_footer\" class=\"").concat(this.classList.columnsHeader, "\">").concat(this.HeaderDataTable[I], "</th>\n");
      }
      // RowDataTable To Element
      var ifUndefinded = this.DataToRender === undefined ? 0 : this.DataToRender.length;
      var row = '';
      if (SlecTloaf === null) {
        for (var ___row = 0; ___row < ifUndefinded; ___row++) {
          var ToCell = '';
          for (var ___cell = 0; ___cell < this.HeaderDataTable.length; ___cell++) {
            ToCell += "<td class=\"".concat(this.HeaderDataTable[___cell], "__row\">").concat(this.DataToRender[___row][this.HeaderDataTable[___cell]], "</td>\n");
          }
          row += "<tr>".concat(ToCell, "</tr>\n");
        }
      } else {
        for (var _row = 0; _row < SlecTloaf.length; _row++) {
          var _ToCell = '';
          for (var _cell = 0; _cell < this.HeaderDataTable.length; _cell++) {
            _ToCell += "<td class=\"".concat(this.HeaderDataTable[_cell], "__row\">").concat(SlecTloaf[_row][this.HeaderDataTable[_cell]], "</td>\n");
          }
          row += "<tr>".concat(_ToCell, "</tr>\n");
        }
        this.DataToRender = SlecTloaf;
      }

      // ====
      var ToEl = "<thead><tr>".concat(header, "</tr></thead><tbody>").concat(row, "</tbody>");
      if (this.Options.ShowTfoot) {
        ToEl += "<tfoot>".concat(footer, "</tfoot>");
      }
      this.TableElement.innerHTML = ToEl;
      var _loop = function _loop(n) {
        var cv = document.getElementById("".concat(_this4.HeaderDataTable[n], "_header"));
        document.getElementById("".concat(_this4.HeaderDataTable[n], "_header")).style.opacity = '100%';
        cv.onclick = function () {
          _this4.sort(_this4.HeaderDataTable[n]);
          var GetElsHeaderList = document.getElementById("".concat(_this4.HeaderDataTable[n], "_header"));
          document.getElementById("".concat(_this4.HeaderDataTable[n], "_header")).style.opacity = '60%';
          if (_this4.Assc) {
            GetElsHeaderList.classList.remove('tablesorter-header-asc');
            GetElsHeaderList.classList.add('tablesorter-header-desc');
          } else {
            GetElsHeaderList.classList.remove('tablesorter-header-desc');
            GetElsHeaderList.classList.add('tablesorter-header-asc');
          }
          //animate
          if (_this4.Options.sortAnimate) {
            var s = document.getElementsByClassName("".concat(_this4.HeaderDataTable[n], "__row"));
            var _loop2 = function _loop2(NN) {
              setTimeout(function () {
                return s[NN].classList.add('blink_me');
              }, 21 * NN);
            };
            for (var NN = 0; NN < s.length; NN++) {
              _loop2(NN);
            }
          }
        };
      };
      for (var n = 0; n < this.HeaderDataTable.length; n++) {
        _loop(n);
      }
      this.PaginateUpdate();
      this.DoHide();
    }
    /**
     * 
     * @param column name column to sort
     * @returns show data shorted
     */
  }, {
    key: "sort",
    value: function sort(column) {
      var t0 = performance.now();
      function naturalCompare(a, b) {
        var ax = [];
        var bx = [];
        a.toString().replace(/(^\$|,)/g, '').replace(/(\d+)|(\D+)/g, function (_, $1, $2) {
          ax.push([$1 || Infinity, $2 || ""]);
        });
        b.toString().replace(/(^\$|,)/g, '').replace(/(\d+)|(\D+)/g, function (_, $1, $2) {
          bx.push([$1 || Infinity, $2 || ""]);
        });
        for (var index = 0; ax.length && bx.length; index++) {
          var an = ax.shift();
          var bn = bx.shift();
          var nn = an[0] - bn[0] || an[1].localeCompare(bn[1]);
          if (nn) return nn;
        }
        return ax.length - bx.length;
      }
      var IndexHead = this.HeaderDataTable.indexOf(column);
      var listDated = this.listTypeDate.find(function (x) {
        return x.HeaderIndex === IndexHead;
      });
      var isDate = (listDated === null || listDated === void 0 ? void 0 : listDated.HeaderIndex) === IndexHead;
      var data = this.DataTable;
      if (this.Assc) {
        this.Assc = !this.Assc;
        if (!isDate) {
          data.sort(function (a, b) {
            return naturalCompare(a[column], b[column]);
          });
        } else {
          data.sort(function (a, b) {
            return Date.parse(a[column]) - Date.parse(b[column]);
          });
        }
      } else {
        this.Assc = !this.Assc;
        if (!isDate) {
          data.sort(function (a, b) {
            return naturalCompare(b[column], a[column]);
          });
        } else {
          data.sort(function (a, b) {
            return Date.parse(b[column]) - Date.parse(a[column]);
          });
        }
      }
      this.DataSorted = data;
      this.i = 0;
      this.RenderToHTML();
      var t1 = performance.now();
      this.timeSort = Math.round((t1 - t0) / 1000 * 10000) / 10000;
      return this.DataSorted;
    }
  }, {
    key: "MExcludeColumnExport",
    value: function MExcludeColumnExport() {
      var DataTable = JSON.parse(JSON.stringify(this.DataTable));
      var exlude = this.Options.ExcludeColumnExport;
      var head = _toConsumableArray(this.HeaderDataTable);
      for (var x = 0; x < exlude.length; x++) {
        var indexHead = head.indexOf(exlude[x]);
        if (indexHead > -1) {
          head.splice(indexHead, 1);
        }
      }
      for (var _x = 0; _x < DataTable.length; _x++) {
        for (var n = 0; n < exlude.length; n++) {
          delete DataTable[_x][exlude[n]];
        }
      }
      return {
        "header": head,
        "data": DataTable
      };
    }

    /**
     * 
     * @param filename filename to download default is Export
     * 
     */
  }, {
    key: "DownloadCSV",
    value: function DownloadCSV() {
      var filename = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Export';
      var data = this.MExcludeColumnExport();
      var str = '';
      var hed = data.header.toString();
      str = hed + '\r\n';
      for (var i = 0; i < data.data.length; i++) {
        var line = '';
        for (var index in data.data[i]) {
          if (line != '') line += ',';
          line += data.data[i][index];
        }
        str += line + '\r\n';
      }
      var element = document.createElement('a');
      element.href = 'data:text/csv;charset=utf-8,' + encodeURIComponent(str);
      element.target = '_blank';
      element.download = filename + '.csv';
      element.click();
    }

    /**
     * 
     * @param filename filename to download default is Export
     * 
     */
  }, {
    key: "DownloadEXCEL",
    value: function DownloadEXCEL() {
      var filename = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Export';
      var data = this.MExcludeColumnExport();
      var str = '';
      var hed = data.header.toString();
      str = hed + '\r\n';
      for (var i = 0; i < data.data.length; i++) {
        var line = '';
        for (var index in data.data[i]) {
          if (line != '') line += ',';
          line += data.data[i][index];
        }
        str += line + '\r\n';
      }
      var element = document.createElement('a');
      element.href = 'data:text/xlsx;charset=utf-8,' + encodeURIComponent(str);
      element.target = '_blank';
      element.download = filename + '.xlsx';
      element.click();
    }

    /**
     * 
     * @param filename filename to download default is Export
     * 
     */
  }, {
    key: "DownloadJSON",
    value: function DownloadJSON() {
      var filename = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Export';
      var data = this.MExcludeColumnExport();
      var element = document.createElement('a');
      element.href = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(data.data));
      element.target = '_blank';
      element.download = filename + '.json';
      element.click();
    }

    /**
     * 
     * @param text for highlighting text in table
     * 
     */
  }, {
    key: "highlight",
    value: function highlight(text) {
      if (this.ShowHighlight) {
        var _this$TableElement6;
        var getbody = (_this$TableElement6 = this.TableElement) === null || _this$TableElement6 === void 0 ? void 0 : _this$TableElement6.getElementsByTagName('tbody');
        for (var row = 0; row < getbody[0].rows.length; row++) {
          for (var cellsIndex = 0; cellsIndex < getbody[0].rows[row].cells.length; cellsIndex++) {
            var innerHTML = getbody[0].rows[row].cells[cellsIndex].innerHTML;
            var index = innerHTML.indexOf(text);
            if (index >= 0) {
              innerHTML = innerHTML.substring(0, index) + "<span style='background-color: yellow;'>" + innerHTML.substring(index, index + text.length) + "</span>" + innerHTML.substring(index + text.length);
              getbody[0].rows[row].cells[cellsIndex].innerHTML = innerHTML;
              getbody[0].rows[row].cells[cellsIndex].classList.add("".concat(this.HeaderDataTable[cellsIndex].replace(/\s/g, '_'), "__row"));
            }
          }
        }
      }
    }

    /**
     * 
     * @param PayLoad you json data to table 
     * 
     */
  }, {
    key: "JSONinit",
    value: function JSONinit() {
      var PayLoad = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      this.HeaderDataTable = [];
      for (var key in PayLoad[0]) {
        this.HeaderDataTable.push(key);
      }
      this.DataTable = PayLoad;
      this.DataSearch = PayLoad;
      this.RenderToHTML();
    }
  }, {
    key: "HideCol",
    value: function HideCol(column) {
      var Classes = document.getElementsByClassName("".concat(column, "__row"));
      for (var O = 0; O < Classes.length; O++) {
        Classes[O].style.display = "none";
      }
      var ColmnHeader = document.getElementById("".concat(column, "_header"));
      var ColmnFotter = document.getElementById("".concat(column, "_footer"));
      if (ColmnHeader) {
        ColmnHeader.style.display = "none";
        if (ColmnFotter) {
          ColmnFotter.style.display = "none";
        }
      }
    }
  }, {
    key: "ShowCol",
    value: function ShowCol(column) {
      var Classes = document.getElementsByClassName("".concat(column, "__row"));
      for (var O = 0; O < Classes.length; O++) {
        Classes[O].style.display = "";
      }
      var ColmnHeader = document.getElementById("".concat(column, "_header"));
      var ColmnFotter = document.getElementById("".concat(column, "_footer"));
      if (ColmnHeader) {
        ColmnHeader.style.display = "";
        if (ColmnFotter) {
          ColmnFotter.style.display = "";
        }
      }
    }
  }, {
    key: "DoHide",
    value: function DoHide() {
      var GetHeadArr = this.HeaderDataTable;
      var ListOftrutc = [];
      for (var T = 0; T < this.HeaderDataTable.length; T++) {
        ListOftrutc.push(true);
      }
      for (var O = 0; O < this.ListHiding.length; O++) {
        var Index = GetHeadArr.indexOf(this.ListHiding[O]);
        if (Index > -1) {
          ListOftrutc[Index] = false;
        }
      }
      var IndexTrue = [];
      var IndexFalse = [];
      for (var U = 0; U < ListOftrutc.length; U++) {
        if (ListOftrutc[U]) {
          IndexTrue.push(U);
        }
        if (!ListOftrutc[U]) {
          IndexFalse.push(U);
        }
      }
      for (var V = 0; V < IndexTrue.length; V++) {
        this.ShowCol(GetHeadArr[IndexTrue[V]]);
      }
      for (var F = 0; F < IndexFalse.length; F++) {
        this.HideCol(GetHeadArr[IndexFalse[F]]);
      }
    }
  }]);
}();
