webpackHotUpdate(0,{

/***/ 607:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(75);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactUikitBase = __webpack_require__(155);\n\nvar _reactUikitBase2 = _interopRequireDefault(_reactUikitBase);\n\nvar _ufunc = __webpack_require__(89);\n\nvar _ufunc2 = _interopRequireDefault(_ufunc);\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n\nvar Dialog = function Dialog(props) {\n  // CSS classes\n  var cssClassNames = _reactUikitBase2.default.helpers.cleanClasses(['uk-modal-dialog', props.blank ? 'uk-modal-dialog-blank' : null, props.lightbox ? 'uk-modal-dialog-lightbox' : null]);\n\n  var closeCSSClasses = _reactUikitBase2.default.helpers.cleanClasses(['uk-modal-close uk-close', props.lightbox ? 'uk-close-alt' : null]);\n\n  // Elements\n  var close = _ufunc2.default.maybeIf(_react2.default.createElement('a', {\n    href: '#',\n    className: closeCSSClasses,\n    'data-kitid': props.kitid ? props.kitid : 'close-' + props.kitid,\n    onClick: props.onClose,\n    float: 'right' }))(props.onClose);\n\n  var header = _ufunc2.default.maybeIf(_react2.default.createElement('div', { className: 'uk-modal-header' }, _react2.default.createElement('h2', null, props.header)))(props.header);\n\n  var footer = _ufunc2.default.maybeIf(_react2.default.createElement('div', { className: 'uk-modal-footer' }, props.footer))(props.footer);\n\n  var caption = _ufunc2.default.maybeIf(_react2.default.createElement('div', { className: 'uk-modal-caption' }, props.caption))(props.caption);\n\n  // Return Component\n  return _react2.default.createElement('div', {\n    className: cssClassNames,\n    'data-kitid': props.kitid ? props.kitid : 'dialog-' + props.kitid\n  }, close, header, props.children, caption, footer);\n};\n\nDialog.propTypes = {\n  caption: _react2.default.PropTypes.string,\n  children: _react2.default.PropTypes.any,\n  close: _react2.default.PropTypes.bool,\n  footer: _react2.default.PropTypes.node,\n  header: _react2.default.PropTypes.node,\n  kitid: _react2.default.PropTypes.string,\n  large: _react2.default.PropTypes.bool,\n  lightbox: _react2.default.PropTypes.bool,\n  onClose: _react2.default.PropTypes.func,\n  spinner: _react2.default.PropTypes.bool,\n  type: _react2.default.PropTypes.oneOf(['block', 'alert', 'propmt'])\n};\n\nexports.default = _reactUikitBase2.default.base(Dialog);\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vY29tcG9uZW50cy9yZWFjdC11aWtpdC1tb2RhbC9saWIvZGlhbG9nLmpzP2YxY2YiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUViLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRTtBQUMzQyxPQUFLLEVBQUUsSUFBSTtDQUNaLENBQUMsQ0FBQzs7QUFFSCxJQUFJLE1BQU0sR0FBRyxtQkFBTyxDQUFDLEVBQU8sQ0FBQyxDQUFDOztBQUU5QixJQUFJLE9BQU8sR0FBRyxzQkFBc0IsQ0FBQyxNQUFNLENBQUMsQ0FBQzs7QUFFN0MsSUFBSSxlQUFlLEdBQUcsbUJBQU8sQ0FBQyxHQUFrQixDQUFDLENBQUM7O0FBRWxELElBQUksZ0JBQWdCLEdBQUcsc0JBQXNCLENBQUMsZUFBZSxDQUFDLENBQUM7O0FBRS9ELElBQUksTUFBTSxHQUFHLG1CQUFPLENBQUMsRUFBTyxDQUFDLENBQUM7O0FBRTlCLElBQUksT0FBTyxHQUFHLHNCQUFzQixDQUFDLE1BQU0sQ0FBQyxDQUFDOztBQUU3QyxTQUFTLHNCQUFzQixDQUFDLEdBQUcsRUFBRTtBQUFFLFNBQU8sR0FBRyxJQUFJLEdBQUcsQ0FBQyxVQUFVLEdBQUcsR0FBRyxHQUFHLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDO0NBQUU7O0FBRS9GLElBQUksTUFBTSxHQUFHLFNBQVMsTUFBTSxDQUFDLEtBQUssRUFBRTs7QUFFbEMsTUFBSSxhQUFhLEdBQUcsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxpQkFBaUIsRUFBRSxLQUFLLENBQUMsS0FBSyxHQUFHLHVCQUF1QixHQUFHLElBQUksRUFBRSxLQUFLLENBQUMsUUFBUSxHQUFHLDBCQUEwQixHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7O0FBRXpMLE1BQUksZUFBZSxHQUFHLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsWUFB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S0FBSyxDQUFDLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztDQUNwRSxDQUFDOztBQUVGLE9BQU8sQ0FBQyxPQUFPLEdBQUcsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMiLCJmaWxlIjoiNjA3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcmVhY3RVaWtpdEJhc2UgPSByZXF1aXJlKCdyZWFjdC11aWtpdC1iYXNlJyk7XG5cbnZhciBfcmVhY3RVaWtpdEJhc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3RVaWtpdEJhc2UpO1xuXG52YXIgX3VmdW5jID0gcmVxdWlyZSgndWZ1bmMnKTtcblxudmFyIF91ZnVuYzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91ZnVuYyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBEaWFsb2cgPSBmdW5jdGlvbiBEaWFsb2cocHJvcHMpIHtcbiAgLy8gQ1NTIGNsYXNzZXNcbiAgdmFyIGNzc0NsYXNzTmFtZXMgPSBfcmVhY3RVaWtpdEJhc2UyLmRlZmF1bHQuaGVscGVycy5jbGVhbkNsYXNzZXMoWyd1ay1tb2RhbC1kaWFsb2cnLCBwcm9wcy5ibGFuayA/ICd1ay1tb2RhbC1kaWFsb2ctYmxhbmsnIDogbnVsbCwgcHJvcHMubGlnaHRib3ggPyAndWstbW9kYWwtZGlhbG9nLWxpZ2h0Ym94JyA6IG51bGxdKTtcblxuICB2YXIgY2xvc2VDU1NDbGFzc2VzID0gX3JlYWN0VWlraXRCYXNlMi5kZWZhdWx0LmhlbHBlcnMuY2xlYW5DbGFzc2VzKFsndWstbW9kYWwtY2xvc2UgdWstY2xvc2UnLCBwcm9wcy5saWdodGJveCA/ICd1ay1jbG9zZS1hbHQnIDogbnVsbF0pO1xuXG4gIC8vIEVsZW1lbnRzXG4gIHZhciBjbG9zZSA9IF91ZnVuYzIuZGVmYXVsdC5tYXliZUlmKF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdhJywge1xuICAgIGhyZWY6ICcjJyxcbiAgICBjbGFzc05hbWU6IGNsb3NlQ1NTQ2xhc3NlcyxcbiAgICAnZGF0YS1raXRpZCc6IHByb3BzLmtpdGlkID8gcHJvcHMua2l0aWQgOiAnY2xvc2UtJyArIHByb3BzLmtpdGlkLFxuICAgIG9uQ2xpY2s6IHByb3BzLm9uQ2xvc2UsXG4gICAgZmxvYXQ6ICdyaWdodCcgfSkpKHByb3BzLm9uQ2xvc2UpO1xuXG4gIHZhciBoZWFkZXIgPSBfdWZ1bmMyLmRlZmF1bHQubWF5YmVJZihfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAnZGl2JyxcbiAgICB7IGNsYXNzTmFtZTogJ3VrLW1vZGFsLWhlYWRlcicgfSxcbiAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICdoMicsXG4gICAgICBudWxsLFxuICAgICAgcHJvcHMuaGVhZGVyXG4gICAgKVxuICApKShwcm9wcy5oZWFkZXIpO1xuXG4gIHZhciBmb290ZXIgPSBfdWZ1bmMyLmRlZmF1bHQubWF5YmVJZihfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAnZGl2JyxcbiAgICB7IGNsYXNzTmFtZTogJ3VrLW1vZGFsLWZvb3RlcicgfSxcbiAgICBwcm9wcy5mb290ZXJcbiAgKSkocHJvcHMuZm9vdGVyKTtcblxuICB2YXIgY2FwdGlvbiA9IF91ZnVuYzIuZGVmYXVsdC5tYXliZUlmKF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICdkaXYnLFxuICAgIHsgY2xhc3NOYW1lOiAndWstbW9kYWwtY2FwdGlvbicgfSxcbiAgICBwcm9wcy5jYXB0aW9uXG4gICkpKHByb3BzLmNhcHRpb24pO1xuXG4gIC8vIFJldHVybiBDb21wb25lbnRcbiAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICdkaXYnLFxuICAgIHtcbiAgICAgIGNsYXNzTmFtZTogY3NzQ2xhc3NOYW1lcyxcbiAgICAgICdkYXRhLWtpdGlkJzogcHJvcHMua2l0aWQgPyBwcm9wcy5raXRpZCA6ICdkaWFsb2ctJyArIHByb3BzLmtpdGlkXG4gICAgfSxcbiAgICBjbG9zZSxcbiAgICBoZWFkZXIsXG4gICAgcHJvcHMuY2hpbGRyZW4sXG4gICAgY2FwdGlvbixcbiAgICBmb290ZXJcbiAgKTtcbn07XG5cbkRpYWxvZy5wcm9wVHlwZXMgPSB7XG4gIGNhcHRpb246IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICBjaGlsZHJlbjogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5hbnksXG4gIGNsb3NlOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLmJvb2wsXG4gIGZvb3RlcjogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5ub2RlLFxuICBoZWFkZXI6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMubm9kZSxcbiAga2l0aWQ6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICBsYXJnZTogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5ib29sLFxuICBsaWdodGJveDogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5ib29sLFxuICBvbkNsb3NlOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLmZ1bmMsXG4gIHNwaW5uZXI6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuYm9vbCxcbiAgdHlwZTogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5vbmVPZihbJ2Jsb2NrJywgJ2FsZXJ0JywgJ3Byb3BtdCddKVxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX3JlYWN0VWlraXRCYXNlMi5kZWZhdWx0LmJhc2UoRGlhbG9nKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi9jb21wb25lbnRzL3JlYWN0LXVpa2l0LW1vZGFsL2xpYi9kaWFsb2cuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9");

/***/ }

})