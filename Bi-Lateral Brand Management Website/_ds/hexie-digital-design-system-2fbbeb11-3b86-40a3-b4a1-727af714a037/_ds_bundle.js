/* @ds-bundle: {"format":4,"namespace":"HexieDigitalDesignSystem_2fbbeb","components":[{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"IconButton","sourcePath":"components/forms/IconButton.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Accordion","sourcePath":"components/navigation/Accordion.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"Badge","sourcePath":"components/surfaces/Badge.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"Stat","sourcePath":"components/surfaces/Stat.jsx"},{"name":"Tag","sourcePath":"components/surfaces/Tag.jsx"}],"sourceHashes":{"components/feedback/Dialog.jsx":"2400f80b9aee","components/feedback/Tooltip.jsx":"de7049ca434d","components/forms/Button.jsx":"2be0b0a5e48d","components/forms/Checkbox.jsx":"073bd3727792","components/forms/IconButton.jsx":"2ad971804def","components/forms/Input.jsx":"cd3ba44052dc","components/forms/Radio.jsx":"1c2f6016132e","components/forms/Select.jsx":"ca879b5985cc","components/forms/Switch.jsx":"0f8526aefbb3","components/forms/Textarea.jsx":"b0cec03bc93e","components/navigation/Accordion.jsx":"90c0ef614da3","components/navigation/Tabs.jsx":"edacf6673586","components/surfaces/Badge.jsx":"6358897d4ad4","components/surfaces/Card.jsx":"e5fe5971c86b","components/surfaces/Stat.jsx":"d464b997dbd1","components/surfaces/Tag.jsx":"2bd4899b30d0","ui_kits/website/Chrome.jsx":"b8b9cefb0ce9","ui_kits/website/Contact.jsx":"b62913fb486c","ui_kits/website/Home.jsx":"f676e25ada11","ui_kits/website/Insights.jsx":"5b079202abe1","ui_kits/website/Landing.jsx":"d270daf119e3","ui_kits/website/Services.jsx":"8e92223aa024"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.HexieDigitalDesignSystem_2fbbeb = window.HexieDigitalDesignSystem_2fbbeb || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/feedback/Dialog.jsx
try { (() => {
/**
 * Hexie Dialog — centered modal with scrim. Controlled via `open`.
 * Minimal chrome: hairline header rule, generous padding.
 */
function Dialog({
  open,
  onClose,
  title,
  children,
  footer,
  width = 520
}) {
  React.useEffect(() => {
    if (!open) return;
    const onKey = e => e.key === 'Escape' && onClose && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 1000,
      background: 'rgba(20, 22, 26, 0.42)',
      backdropFilter: 'blur(2px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px',
      animation: 'hxFade var(--duration-base) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation(),
    style: {
      width: '100%',
      maxWidth: width,
      background: 'var(--white)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-lg)',
      overflow: 'hidden',
      animation: 'hxPop var(--duration-slow) var(--ease-emphasis)'
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '22px 26px',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-h3)',
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: '-0.01em',
      color: 'var(--text-primary)'
    }
  }, title), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Close",
    onClick: onClose,
    style: {
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      fontSize: '22px',
      lineHeight: 1,
      color: 'var(--text-muted)',
      padding: '4px'
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '26px',
      color: 'var(--text-secondary)',
      fontSize: 'var(--text-base)',
      lineHeight: 'var(--lh-relaxed)'
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: '12px',
      padding: '18px 26px',
      borderTop: '1px solid var(--border-subtle)',
      background: 'var(--paper)'
    }
  }, footer)), /*#__PURE__*/React.createElement("style", null, `
        @keyframes hxFade { from { opacity: 0 } to { opacity: 1 } }
        @keyframes hxPop { from { opacity: 0; transform: translateY(8px) scale(0.98) } to { opacity: 1; transform: none } }
      `));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
/**
 * Hexie Tooltip — hover/focus label. Wraps a single trigger child.
 */
function Tooltip({
  label,
  placement = 'top',
  children
}) {
  const [show, setShow] = React.useState(false);
  const pos = {
    top: {
      bottom: '100%',
      left: '50%',
      transform: 'translateX(-50%) translateY(-8px)'
    },
    bottom: {
      top: '100%',
      left: '50%',
      transform: 'translateX(-50%) translateY(8px)'
    },
    left: {
      right: '100%',
      top: '50%',
      transform: 'translateY(-50%) translateX(-8px)'
    },
    right: {
      left: '100%',
      top: '50%',
      transform: 'translateY(-50%) translateX(8px)'
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex'
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    onFocus: () => setShow(true),
    onBlur: () => setShow(false)
  }, children, /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      zIndex: 900,
      ...pos[placement],
      whiteSpace: 'nowrap',
      background: 'var(--ink-900)',
      color: 'var(--paper)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-xs)',
      fontWeight: 500,
      padding: '6px 10px',
      borderRadius: 'var(--radius-sm)',
      boxShadow: 'var(--shadow-md)',
      opacity: show ? 1 : 0,
      pointerEvents: 'none',
      transition: 'opacity var(--duration-fast) var(--ease-standard)'
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Hexie Button — primary action control.
 * Crisp, near-square, confident. Uses brand indigo for primary,
 * hairline outline for secondary, and quiet ghost for tertiary.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  fullWidth = false,
  iconLeft = null,
  iconRight = null,
  type = 'button',
  onClick,
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '8px 16px',
      fontSize: 'var(--text-sm)',
      gap: '8px'
    },
    md: {
      padding: '12px 22px',
      fontSize: 'var(--text-base)',
      gap: '10px'
    },
    lg: {
      padding: '16px 30px',
      fontSize: 'var(--text-lg)',
      gap: '12px'
    }
  };
  const variants = {
    primary: {
      background: 'var(--brand-primary)',
      color: 'var(--white)',
      border: '1.5px solid var(--brand-primary)'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--text-primary)',
      border: '1.5px solid var(--border-strong)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-primary)',
      border: '1.5px solid transparent'
    },
    accent: {
      background: 'var(--brand-accent)',
      color: 'var(--ink-900)',
      border: '1.5px solid var(--brand-accent)'
    }
  };
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: sizes[size].gap,
    fontFamily: 'var(--font-display)',
    fontWeight: 'var(--fw-semibold)',
    letterSpacing: '-0.005em',
    lineHeight: 1,
    borderRadius: 'var(--control-radius)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    width: fullWidth ? '100%' : 'auto',
    padding: sizes[size].padding,
    fontSize: sizes[size].fontSize,
    transition: 'transform var(--duration-fast) var(--ease-standard), opacity var(--duration-base) var(--ease-standard), background var(--duration-base) var(--ease-standard)',
    ...variants[variant]
  };
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const hoverStyle = !disabled && hover ? variant === 'primary' ? {
    background: 'var(--brand-primary-hover)',
    borderColor: 'var(--brand-primary-hover)'
  } : variant === 'accent' ? {
    background: 'var(--gold-700)',
    borderColor: 'var(--gold-700)'
  } : variant === 'ghost' ? {
    background: 'var(--bg-sunken)'
  } : {
    background: 'var(--ink-900)',
    color: 'var(--white)',
    borderColor: 'var(--ink-900)'
  } : {};
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    style: {
      ...base,
      ...hoverStyle,
      transform: active && !disabled ? 'translateY(1px)' : 'none'
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Hexie Checkbox — crisp square control with brand-indigo fill.
 */
function Checkbox({
  label,
  checked,
  defaultChecked,
  disabled = false,
  onChange,
  id,
  ...rest
}) {
  const inputId = id || React.useId();
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(defaultChecked || false);
  const on = isControlled ? checked : internal;
  const toggle = e => {
    if (disabled) return;
    if (!isControlled) setInternal(e.target.checked);
    onChange && onChange(e);
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-base)',
      color: 'var(--text-primary)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: "checkbox",
    checked: isControlled ? checked : undefined,
    defaultChecked: isControlled ? undefined : defaultChecked,
    disabled: disabled,
    onChange: toggle,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      borderRadius: 'var(--radius-xs)',
      border: `1.5px solid ${on ? 'var(--brand-primary)' : 'var(--border-strong)'}`,
      background: on ? 'var(--brand-primary)' : 'var(--white)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background var(--duration-fast) var(--ease-standard), border-color var(--duration-fast) var(--ease-standard)'
    }
  }, on && /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2.5 6.2L5 8.6L9.6 3.4",
    stroke: "white",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })))), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Hexie IconButton — square, icon-only control for toolbars,
 * close affordances, and compact actions. Expects a single
 * icon node (e.g. a Lucide <i data-lucide> or SVG) as children.
 */
function IconButton({
  children,
  variant = 'ghost',
  size = 'md',
  disabled = false,
  label,
  onClick,
  ...rest
}) {
  const dims = {
    sm: 32,
    md: 40,
    lg: 48
  };
  const d = dims[size];
  const variants = {
    ghost: {
      background: 'transparent',
      color: 'var(--text-primary)',
      border: '1.5px solid transparent'
    },
    outline: {
      background: 'transparent',
      color: 'var(--text-primary)',
      border: '1.5px solid var(--border-default)'
    },
    solid: {
      background: 'var(--brand-primary)',
      color: 'var(--white)',
      border: '1.5px solid var(--brand-primary)'
    }
  };
  const [hover, setHover] = React.useState(false);
  const hoverStyle = !disabled && hover ? variant === 'solid' ? {
    background: 'var(--brand-primary-hover)',
    borderColor: 'var(--brand-primary-hover)'
  } : {
    background: 'var(--bg-sunken)',
    borderColor: variant === 'outline' ? 'var(--border-strong)' : 'transparent'
  } : {};
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: d,
      height: d,
      borderRadius: 'var(--control-radius)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transition: 'background var(--duration-base) var(--ease-standard), border-color var(--duration-base) var(--ease-standard)',
      ...variants[variant],
      ...hoverStyle
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Hexie Input — text field with optional label, hint, and error.
 * Hairline border, calm focus ring in brand cyan.
 */
function Input({
  label,
  hint,
  error,
  size = 'md',
  disabled = false,
  fullWidth = true,
  id,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || React.useId();
  const sizes = {
    sm: {
      padding: '8px 12px',
      fontSize: 'var(--text-sm)'
    },
    md: {
      padding: '11px 14px',
      fontSize: 'var(--text-base)'
    },
    lg: {
      padding: '14px 16px',
      fontSize: 'var(--text-lg)'
    }
  };
  const borderColor = error ? 'var(--danger)' : focus ? 'var(--brand-secondary)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: fullWidth ? '100%' : 'auto',
      display: 'flex',
      flexDirection: 'column',
      gap: '6px'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--fw-medium)',
      color: 'var(--text-primary)'
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      fontFamily: 'var(--font-body)',
      color: 'var(--text-primary)',
      background: disabled ? 'var(--bg-sunken)' : 'var(--white)',
      border: `1.5px solid ${borderColor}`,
      borderRadius: 'var(--control-radius)',
      outline: 'none',
      boxShadow: focus && !error ? 'var(--shadow-focus)' : 'none',
      transition: 'border-color var(--duration-base) var(--ease-standard), box-shadow var(--duration-base) var(--ease-standard)',
      opacity: disabled ? 0.6 : 1,
      ...sizes[size]
    }
  }, rest)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: error ? 'var(--danger)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Hexie Radio — single-choice control. Compose several with a
 * shared `name`. Uses a filled brand-indigo dot.
 */
function Radio({
  label,
  checked,
  defaultChecked,
  name,
  value,
  disabled = false,
  onChange,
  id,
  ...rest
}) {
  const inputId = id || React.useId();
  const isControlled = checked !== undefined;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-base)',
      color: 'var(--text-primary)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: "radio",
    name: name,
    value: value,
    checked: isControlled ? checked : undefined,
    defaultChecked: isControlled ? undefined : defaultChecked,
    disabled: disabled,
    onChange: onChange,
    className: "hx-radio-input",
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "hx-radio-ring",
    style: {
      width: 20,
      height: 20,
      borderRadius: '50%',
      border: '1.5px solid var(--border-strong)',
      background: 'var(--white)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'border-color var(--duration-fast) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "hx-radio-dot",
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: 'var(--brand-primary)',
      transform: 'scale(0)',
      transition: 'transform var(--duration-fast) var(--ease-standard)'
    }
  }))), label && /*#__PURE__*/React.createElement("span", null, label), /*#__PURE__*/React.createElement("style", null, `
        .hx-radio-input:checked + .hx-radio-ring { border-color: var(--brand-primary); }
        .hx-radio-input:checked + .hx-radio-ring .hx-radio-dot { transform: scale(1); }
      `));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Hexie Select — native select styled to match the field system,
 * with a custom chevron affordance.
 */
function Select({
  label,
  hint,
  error,
  options = [],
  size = 'md',
  disabled = false,
  fullWidth = true,
  placeholder,
  id,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || React.useId();
  const borderColor = error ? 'var(--danger)' : focus ? 'var(--brand-secondary)' : 'var(--border-default)';
  const sizes = {
    sm: {
      padding: '8px 36px 8px 12px',
      fontSize: 'var(--text-sm)'
    },
    md: {
      padding: '11px 40px 11px 14px',
      fontSize: 'var(--text-base)'
    },
    lg: {
      padding: '14px 44px 14px 16px',
      fontSize: 'var(--text-lg)'
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: fullWidth ? '100%' : 'auto',
      display: 'flex',
      flexDirection: 'column',
      gap: '6px'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--fw-medium)',
      color: 'var(--text-primary)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: inputId,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    defaultValue: placeholder ? '' : undefined,
    style: {
      width: '100%',
      appearance: 'none',
      WebkitAppearance: 'none',
      fontFamily: 'var(--font-body)',
      color: 'var(--text-primary)',
      background: disabled ? 'var(--bg-sunken)' : 'var(--white)',
      border: `1.5px solid ${borderColor}`,
      borderRadius: 'var(--control-radius)',
      outline: 'none',
      boxShadow: focus && !error ? 'var(--shadow-focus)' : 'none',
      transition: 'border-color var(--duration-base) var(--ease-standard), box-shadow var(--duration-base) var(--ease-standard)',
      opacity: disabled ? 0.6 : 1,
      cursor: disabled ? 'not-allowed' : 'pointer',
      ...sizes[size]
    }
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), options.map(o => {
    const value = typeof o === 'string' ? o : o.value;
    const text = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: value,
      value: value
    }, text);
  })), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      position: 'absolute',
      right: '14px',
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: 'var(--text-secondary)',
      fontSize: '12px',
      lineHeight: 1
    }
  }, "\u25BE")), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: error ? 'var(--danger)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Hexie Switch — on/off toggle for settings and preferences.
 */
function Switch({
  label,
  checked,
  defaultChecked,
  disabled = false,
  onChange,
  id,
  ...rest
}) {
  const inputId = id || React.useId();
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(defaultChecked || false);
  const on = isControlled ? checked : internal;
  const toggle = e => {
    if (disabled) return;
    if (!isControlled) setInternal(e.target.checked);
    onChange && onChange(e);
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '12px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-base)',
      color: 'var(--text-primary)'
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: "checkbox",
    checked: isControlled ? checked : undefined,
    defaultChecked: isControlled ? undefined : defaultChecked,
    disabled: disabled,
    onChange: toggle,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 26,
      borderRadius: 'var(--radius-pill)',
      background: on ? 'var(--brand-primary)' : 'var(--ink-300)',
      padding: 3,
      display: 'inline-flex',
      alignItems: 'center',
      transition: 'background var(--duration-base) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      borderRadius: '50%',
      background: 'var(--white)',
      boxShadow: 'var(--shadow-xs)',
      transform: on ? 'translateX(18px)' : 'translateX(0)',
      transition: 'transform var(--duration-base) var(--ease-emphasis)'
    }
  })), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Hexie Textarea — multi-line text field, matches Input styling.
 */
function Textarea({
  label,
  hint,
  error,
  rows = 4,
  disabled = false,
  fullWidth = true,
  id,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || React.useId();
  const borderColor = error ? 'var(--danger)' : focus ? 'var(--brand-secondary)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: fullWidth ? '100%' : 'auto',
      display: 'flex',
      flexDirection: 'column',
      gap: '6px'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--fw-medium)',
      color: 'var(--text-primary)'
    }
  }, label), /*#__PURE__*/React.createElement("textarea", _extends({
    id: inputId,
    rows: rows,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-base)',
      lineHeight: 'var(--lh-normal)',
      color: 'var(--text-primary)',
      background: disabled ? 'var(--bg-sunken)' : 'var(--white)',
      border: `1.5px solid ${borderColor}`,
      borderRadius: 'var(--control-radius)',
      padding: '11px 14px',
      outline: 'none',
      resize: 'vertical',
      boxShadow: focus && !error ? 'var(--shadow-focus)' : 'none',
      transition: 'border-color var(--duration-base) var(--ease-standard), box-shadow var(--duration-base) var(--ease-standard)',
      opacity: disabled ? 0.6 : 1
    }
  }, rest)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: error ? 'var(--danger)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Accordion.jsx
try { (() => {
/**
 * Hexie Accordion — hairline-divided expandable list. Editorial,
 * used for FAQs and layered service detail. `items` = [{id,title,content}].
 */
function Accordion({
  items = [],
  defaultOpen = null,
  allowMultiple = false
}) {
  const [open, setOpen] = React.useState(allowMultiple ? defaultOpen ? [defaultOpen] : [] : defaultOpen);
  const isOpen = id => allowMultiple ? open.includes(id) : open === id;
  const toggle = id => {
    if (allowMultiple) {
      setOpen(o => o.includes(id) ? o.filter(x => x !== id) : [...o, id]);
    } else {
      setOpen(o => o === id ? null : id);
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-default)'
    }
  }, items.map(it => {
    const on = isOpen(it.id);
    return /*#__PURE__*/React.createElement("div", {
      key: it.id,
      style: {
        borderBottom: '1px solid var(--border-default)'
      }
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: () => toggle(it.id),
      style: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '16px',
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        padding: '20px 0',
        textAlign: 'left',
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--text-h4)',
        fontWeight: 'var(--fw-medium)',
        color: 'var(--text-primary)'
      }
    }, /*#__PURE__*/React.createElement("span", null, it.title), /*#__PURE__*/React.createElement("span", {
      "aria-hidden": true,
      style: {
        flexShrink: 0,
        width: 24,
        height: 24,
        position: 'relative',
        transition: 'transform var(--duration-base) var(--ease-emphasis)',
        transform: on ? 'rotate(45deg)' : 'rotate(0deg)',
        color: 'var(--text-secondary)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        top: '11px',
        left: '4px',
        right: '4px',
        height: '1.5px',
        background: 'currentColor'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        left: '11px',
        top: '4px',
        bottom: '4px',
        width: '1.5px',
        background: 'currentColor'
      }
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateRows: on ? '1fr' : '0fr',
        transition: 'grid-template-rows var(--duration-slow) var(--ease-emphasis)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        paddingBottom: '22px',
        maxWidth: '60ch',
        color: 'var(--text-secondary)',
        fontSize: 'var(--text-base)',
        lineHeight: 'var(--lh-relaxed)'
      }
    }, it.content))));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
/**
 * Hexie Tabs — underline-style tab bar (matches the brand's
 * thin-underline link motif). Controlled or uncontrolled.
 */
function Tabs({
  tabs = [],
  value,
  defaultValue,
  onChange
}) {
  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState(defaultValue ?? (tabs[0] && tabs[0].id));
  const active = isControlled ? value : internal;
  const select = id => {
    if (!isControlled) setInternal(id);
    onChange && onChange(id);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '28px',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, tabs.map(t => {
    const on = t.id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: t.id,
      type: "button",
      onClick: () => select(t.id),
      style: {
        position: 'relative',
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        padding: '0 0 14px',
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--text-base)',
        fontWeight: on ? 'var(--fw-semibold)' : 'var(--fw-medium)',
        color: on ? 'var(--text-primary)' : 'var(--text-muted)',
        transition: 'color var(--duration-base) var(--ease-standard)'
      }
    }, t.label, /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: '-1px',
        height: '2px',
        background: 'var(--ink-900)',
        transform: on ? 'scaleX(1)' : 'scaleX(0)',
        transformOrigin: 'left',
        transition: 'transform var(--duration-base) var(--ease-emphasis)'
      }
    }));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Hexie Badge — small status/label pill. Soft tinted background.
 */
function Badge({
  children,
  tone = 'neutral',
  size = 'md',
  ...rest
}) {
  const tones = {
    neutral: {
      bg: 'var(--ink-100)',
      fg: 'var(--ink-700)'
    },
    indigo: {
      bg: 'var(--indigo-100)',
      fg: 'var(--indigo-700)'
    },
    cyan: {
      bg: 'var(--cyan-050)',
      fg: 'var(--cyan-700)'
    },
    gold: {
      bg: 'var(--gold-100)',
      fg: 'var(--gold-700)'
    },
    success: {
      bg: '#e4f2ea',
      fg: 'var(--success)'
    },
    warning: {
      bg: '#faf0d9',
      fg: 'var(--warning)'
    },
    danger: {
      bg: '#f8e5e3',
      fg: 'var(--danger)'
    }
  };
  const sizes = {
    sm: {
      padding: '2px 8px',
      fontSize: '11px'
    },
    md: {
      padding: '4px 10px',
      fontSize: 'var(--text-xs)'
    }
  };
  const t = tones[tone] || tones.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      whiteSpace: 'nowrap',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: '0.01em',
      borderRadius: 'var(--radius-pill)',
      background: t.bg,
      color: t.fg,
      ...sizes[size]
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Badge.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Hexie Card — surface container for grouped content.
 * Crisp corners, hairline border, soft optional shadow.
 * `interactive` adds a subtle lift + border darkening on hover.
 */
function Card({
  children,
  variant = 'default',
  interactive = false,
  padding = 'md',
  as = 'div',
  ...rest
}) {
  const pads = {
    none: 0,
    sm: '16px',
    md: '24px',
    lg: '32px'
  };
  const [hover, setHover] = React.useState(false);
  const variants = {
    default: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      boxShadow: 'var(--shadow-none)'
    },
    raised: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      boxShadow: 'var(--shadow-sm)'
    },
    muted: {
      background: 'var(--surface-muted)',
      border: '1px solid transparent',
      boxShadow: 'var(--shadow-none)'
    },
    outline: {
      background: 'transparent',
      border: '1.5px solid var(--border-strong)',
      boxShadow: 'var(--shadow-none)'
    }
  };
  const Comp = as;
  return /*#__PURE__*/React.createElement(Comp, _extends({
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => interactive && setHover(false),
    style: {
      borderRadius: 'var(--card-radius)',
      padding: pads[padding],
      transition: 'transform var(--duration-base) var(--ease-standard), box-shadow var(--duration-base) var(--ease-standard), border-color var(--duration-base) var(--ease-standard)',
      cursor: interactive ? 'pointer' : 'default',
      ...variants[variant],
      ...(interactive && hover ? {
        transform: 'translateY(-3px)',
        boxShadow: 'var(--shadow-md)',
        borderColor: 'var(--border-default)'
      } : {})
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Stat.jsx
try { (() => {
/**
 * Hexie Stat — big-number metric block. Editorial, oversized
 * grotesque numeral with an eyebrow label and optional note.
 */
function Stat({
  value,
  label,
  note,
  accent = 'ink',
  align = 'left'
}) {
  const accents = {
    ink: 'var(--text-primary)',
    indigo: 'var(--indigo-600)',
    cyan: 'var(--cyan-600)',
    gold: 'var(--gold-700)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      textAlign: align
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "hx-eyebrow",
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-xs)',
      fontWeight: 500,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--text-secondary)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-medium)',
      fontSize: 'var(--text-display-lg)',
      lineHeight: 1,
      letterSpacing: '-0.03em',
      color: accents[accent] || accents.ink
    }
  }, value), note && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)',
      maxWidth: '30ch'
    }
  }, note));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Stat.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Hexie Tag — outlined keyword chip, optionally removable.
 * Quieter and squarer than Badge; used for filters & taxonomy.
 */
function Tag({
  children,
  onRemove,
  active = false,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-xs)',
      letterSpacing: '0.02em',
      padding: '5px 10px',
      borderRadius: 'var(--radius-sm)',
      border: `1px solid ${active ? 'var(--brand-primary)' : 'var(--border-default)'}`,
      background: active ? 'var(--indigo-050)' : 'transparent',
      color: active ? 'var(--indigo-700)' : 'var(--text-secondary)'
    }
  }, rest), children, onRemove && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Remove",
    onClick: onRemove,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      padding: 0,
      color: hover ? 'var(--text-primary)' : 'var(--text-muted)',
      fontSize: '13px',
      lineHeight: 1
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Tag.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Chrome.jsx
try { (() => {
/* Hexie website — shared chrome: NavBar, Footer, Placeholder image tile.
   Exports to window for the other screen scripts. */
const HX = window.HexieDigitalDesignSystem_2fbbeb;
function Logo({
  inverse = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/hexie-mark.png",
    alt: "Hexie",
    style: {
      width: 26,
      height: 26,
      objectFit: 'contain'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 19,
      letterSpacing: '-0.02em',
      color: inverse ? 'var(--paper)' : 'var(--text-primary)'
    }
  }, "Hexie", /*#__PURE__*/React.createElement("span", {
    style: {
      color: inverse ? 'rgba(244,243,239,.6)' : 'var(--text-secondary)',
      fontWeight: 400
    }
  }, " Digital")));
}
function NavBar({
  current,
  onNavigate
}) {
  const items = [{
    id: 'home',
    label: 'Home'
  }, {
    id: 'services',
    label: 'What we do'
  }, {
    id: 'insights',
    label: 'Insights'
  }, {
    id: 'contact',
    label: 'Contact'
  }];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'rgba(244,243,239,0.82)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '16px 40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      cursor: 'pointer'
    },
    onClick: () => onNavigate('home')
  }, /*#__PURE__*/React.createElement(Logo, null)), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 32
    }
  }, items.map(it => /*#__PURE__*/React.createElement("button", {
    key: it.id,
    onClick: () => onNavigate(it.id),
    style: {
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      padding: '4px 0',
      fontFamily: 'var(--font-display)',
      fontSize: 15,
      fontWeight: current === it.id ? 600 : 500,
      color: current === it.id ? 'var(--text-primary)' : 'var(--text-secondary)',
      borderBottom: current === it.id ? '1.5px solid var(--ink-900)' : '1.5px solid transparent'
    }
  }, it.label)), /*#__PURE__*/React.createElement(HX.Button, {
    size: "sm",
    onClick: () => onNavigate('contact')
  }, "Let's talk"))));
}

/* Editorial placeholder tile — duotone block standing in for photography. */
function Placeholder({
  label = 'Image',
  tone = 'evergreen',
  height = '100%',
  aspect
}) {
  const tones = {
    evergreen: 'linear-gradient(135deg, #1c463d, #0e2a25)',
    indigo: 'linear-gradient(135deg, #3551a3, #23346a)',
    cyan: 'linear-gradient(135deg, #009ab9, #00728a)',
    slate: 'linear-gradient(135deg, #4a5560, #2b323a)',
    gold: 'linear-gradient(135deg, #e5b422, #b98d16)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height,
      aspectRatio: aspect || 'auto',
      background: tones[tone] || tones.slate,
      borderRadius: 'var(--radius-sm)',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'flex-end',
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,.72)'
    }
  }, label));
}
function Footer({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--ink-900)',
      color: 'var(--paper)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '72px 40px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr 1fr 1fr',
      gap: 40,
      marginBottom: 56
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Logo, {
    inverse: true
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 16,
      maxWidth: '34ch',
      color: 'rgba(244,243,239,.62)',
      fontSize: 15,
      lineHeight: 1.6
    }
  }, "A bridge between markets \u2014 helping companies grow across Canada, the United States, and Asia.")), [{
    h: 'Company',
    items: ['What we do', 'Who we are', 'Insights', 'Careers']
  }, {
    h: 'Services',
    items: ['Market entry', 'Compliance', 'Investor matching', 'Asia sourcing']
  }, {
    h: 'Offices',
    items: ['Toronto', 'Vancouver', 'Singapore', 'Shenzhen']
  }].map(col => /*#__PURE__*/React.createElement("div", {
    key: col.h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'rgba(244,243,239,.5)',
      marginBottom: 16
    }
  }, col.h), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, col.items.map(i => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      fontSize: 15,
      color: 'rgba(244,243,239,.82)',
      cursor: 'pointer'
    }
  }, i)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: 24,
      borderTop: '1px solid rgba(244,243,239,.14)',
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'rgba(244,243,239,.5)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Hexie Digital Inc."), /*#__PURE__*/React.createElement("span", null, "Toronto \u2194 Singapore"))));
}
Object.assign(window, {
  HxLogo: Logo,
  HxNavBar: NavBar,
  HxFooter: Footer,
  HxPlaceholder: Placeholder
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Contact.jsx
try { (() => {
/* Hexie website — Contact screen with a working (fake) inquiry form. */
function Contact() {
  const HX = window.HexieDigitalDesignSystem_2fbbeb;
  const [sent, setSent] = React.useState(false);
  const [form, setForm] = React.useState({
    name: '',
    email: '',
    company: '',
    market: '',
    message: ''
  });
  const set = k => e => setForm(f => ({
    ...f,
    [k]: e.target.value
  }));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '72px 40px 96px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 80,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 26,
      height: 6,
      background: 'var(--gold-500)',
      borderRadius: 2
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'var(--text-secondary)'
    }
  }, "Contact")), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'clamp(40px,5.5vw,72px)',
      lineHeight: 1.02,
      letterSpacing: '-.03em',
      maxWidth: '14ch'
    }
  }, "Let's talk about your next market."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 24,
      maxWidth: '42ch',
      fontSize: 18,
      lineHeight: 1.6,
      color: 'var(--text-secondary)'
    }
  }, "Tell us where you want to grow. A Hexie advisor will reply within one business day \u2014 in English, French, or Mandarin."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 48,
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, [['Toronto', '181 Bay Street, ON', '+1 (416) 000-0000'], ['Singapore', '9 Raffles Place', '+65 0000 0000']].map(([c, a, p]) => /*#__PURE__*/React.createElement("div", {
    key: c,
    style: {
      borderTop: '1px solid var(--border-default)',
      paddingTop: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 18
    }
  }, c), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      color: 'var(--text-secondary)',
      marginTop: 4
    }
  }, a), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      color: 'var(--text-muted)',
      marginTop: 4
    }
  }, p))))), /*#__PURE__*/React.createElement(HX.Card, {
    variant: "raised",
    padding: "lg"
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '40px 8px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: '50%',
      background: 'var(--indigo-050)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 20px'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "check",
    style: {
      color: 'var(--brand-primary)'
    }
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 10px',
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 24
    }
  }, "Thank you, ", form.name || 'friend', "."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 24px',
      color: 'var(--text-secondary)',
      fontSize: 16
    }
  }, "Your inquiry is on its way. We'll be in touch within one business day."), /*#__PURE__*/React.createElement(HX.Button, {
    variant: "secondary",
    onClick: () => {
      setSent(false);
      setForm({
        name: '',
        email: '',
        company: '',
        market: '',
        message: ''
      });
    }
  }, "Send another")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(HX.Input, {
    label: "Full name",
    value: form.name,
    onChange: set('name'),
    placeholder: "Jordan Alavi",
    required: true
  }), /*#__PURE__*/React.createElement(HX.Input, {
    label: "Work email",
    type: "email",
    value: form.email,
    onChange: set('email'),
    placeholder: "you@company.com",
    required: true
  })), /*#__PURE__*/React.createElement(HX.Input, {
    label: "Company",
    value: form.company,
    onChange: set('company'),
    placeholder: "Meridian Foods Ltd."
  }), /*#__PURE__*/React.createElement(HX.Select, {
    label: "Where do you want to grow?",
    placeholder: "Choose a direction",
    value: form.market,
    onChange: set('market'),
    options: ['Enter the Canadian market', 'Raise capital in Canada', 'Find a Canadian partner', 'Source manufacturing in Asia']
  }), /*#__PURE__*/React.createElement(HX.Textarea, {
    label: "How can we help?",
    rows: 4,
    value: form.message,
    onChange: set('message'),
    placeholder: "Tell us about your goals and timeline\u2026"
  }), /*#__PURE__*/React.createElement(HX.Checkbox, {
    label: "Send me the monthly Hexie market briefing"
  }), /*#__PURE__*/React.createElement(HX.Button, {
    type: "submit",
    size: "lg",
    fullWidth: true
  }, "Send inquiry")))));
}
window.HxContact = Contact;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
/* Hexie website — Home screen. */
function Home({
  onNavigate
}) {
  const HX = window.HexieDigitalDesignSystem_2fbbeb;
  const {
    Placeholder
  } = {
    Placeholder: window.HxPlaceholder
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '80px 40px 64px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 26,
      height: 6,
      background: 'var(--gold-500)',
      borderRadius: 2
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'var(--text-secondary)'
    }
  }, "Cross-border growth consultancy")), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'clamp(44px, 7vw, 92px)',
      lineHeight: 1.02,
      letterSpacing: '-0.03em',
      maxWidth: '15ch'
    }
  }, "We help companies", /*#__PURE__*/React.createElement("br", null), "belong in new markets."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 56,
      marginTop: 44,
      alignItems: 'flex-end',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: '46ch',
      fontSize: 19,
      lineHeight: 1.6,
      color: 'var(--text-secondary)',
      margin: 0
    }
  }, "Hexie Digital guides overseas companies into Canada \u2014 through regulation, capital, and partnerships \u2014 and connects North American firms with trusted manufacturers across Asia."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(HX.Button, {
    size: "lg",
    onClick: () => onNavigate('contact')
  }, "Book a consultation"), /*#__PURE__*/React.createElement(HX.Button, {
    size: "lg",
    variant: "secondary",
    onClick: () => onNavigate('services')
  }, "What we do")))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 40px 8px'
    }
  }, /*#__PURE__*/React.createElement(Placeholder, {
    label: "Skyline \u2014 Toronto harbourfront",
    tone: "evergreen",
    height: "360px"
  })), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--field-cyan)',
      color: 'var(--ink-900)',
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '64px 40px',
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 32
    }
  }, [['120+', 'Market entries'], ['14', 'Sectors served'], ['3', 'Continents'], ['9 mo', 'Avg. time to market']].map(([v, l]) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 56,
      letterSpacing: '-.03em',
      lineHeight: 1
    }
  }, v), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: 'rgba(20,22,26,.62)',
      marginTop: 10
    }
  }, l))))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '88px 40px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'var(--text-secondary)',
      marginBottom: 12
    }
  }, "What we do"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 40px',
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 40,
      letterSpacing: '-.02em',
      maxWidth: '18ch'
    }
  }, "Four ways we move you across the border.")), [{
    n: '01',
    t: 'Market entry strategy',
    d: 'A staged roadmap into Canada — sequenced, costed, and de-risked at every gate.',
    field: 'var(--indigo-900)',
    fg: 'var(--paper)',
    items: ['Opportunity sizing', 'Go-to-market plan', 'Entity & tax setup']
  }, {
    n: '02',
    t: 'Regulatory & compliance',
    d: 'Navigation across federal and provincial regimes, in English and French.',
    field: 'var(--field-indigo)',
    fg: '#fff',
    items: ['Licensing & permits', 'Bilingual filings', 'Standards & labelling']
  }, {
    n: '03',
    t: 'Investor & partner matching',
    d: 'Warm introductions to vetted, sector-relevant capital and partners.',
    field: 'var(--field-cyan)',
    fg: 'var(--ink-900)',
    items: ['Investor readiness', 'Partner shortlists', 'Deal support']
  }, {
    n: '04',
    t: 'Asia sourcing',
    d: 'Manufacturing partners across Asia, quality-audited and contract-ready.',
    field: 'var(--field-gold)',
    fg: 'var(--ink-900)',
    items: ['Supplier discovery', 'Factory audits', 'Logistics & QC']
  }].map(s => /*#__PURE__*/React.createElement("section", {
    key: s.n,
    style: {
      background: s.field,
      color: s.fg
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '48px 40px',
      display: 'grid',
      gridTemplateColumns: '120px 1.4fr 1fr',
      gap: 32,
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 48,
      letterSpacing: '-.03em',
      opacity: .85
    }
  }, s.n), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 10px',
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 30,
      letterSpacing: '-.02em'
    }
  }, s.t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 17,
      lineHeight: 1.55,
      maxWidth: '40ch',
      opacity: .88
    }
  }, s.d)), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      fontSize: 15
    }
  }, s.items.map(i => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      opacity: .9,
      borderTop: '1px solid currentColor',
      paddingTop: 8
    }
  }, i)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '88px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'var(--text-secondary)',
      marginBottom: 12
    }
  }, "Insights"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 34,
      letterSpacing: '-.02em'
    }
  }, "From the field")), /*#__PURE__*/React.createElement("span", {
    onClick: () => onNavigate('insights'),
    className: "hx-link-underline",
    style: {
      cursor: 'pointer'
    }
  }, "All insights")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24
    }
  }, [{
    cat: 'Regulation',
    tone: 'indigo',
    t: 'What CUSMA means for first-time exporters to Canada'
  }, {
    cat: 'Sourcing',
    tone: 'cyan',
    t: 'Auditing a factory you have never visited'
  }, {
    cat: 'Capital',
    tone: 'slate',
    t: 'How Canadian VCs read an overseas founder'
  }].map(a => /*#__PURE__*/React.createElement("div", {
    key: a.t,
    style: {
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Placeholder, {
    label: a.cat,
    tone: a.tone,
    aspect: "4 / 3",
    height: "auto"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      letterSpacing: '.06em',
      color: 'var(--text-secondary)',
      margin: '16px 0 8px',
      borderBottom: '1px solid var(--border-default)',
      paddingBottom: 8,
      display: 'inline-block'
    }
  }, a.cat), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-serif)',
      fontWeight: 400,
      fontSize: 23,
      lineHeight: 1.2,
      letterSpacing: '-.01em'
    }
  }, a.t))))));
}
window.HxHome = Home;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Insights.jsx
try { (() => {
/* Hexie website — Insights index (editorial article grid with filters). */
function Insights({
  onNavigate
}) {
  const HX = window.HexieDigitalDesignSystem_2fbbeb;
  const Placeholder = window.HxPlaceholder;
  const [filter, setFilter] = React.useState('all');
  const cats = [{
    id: 'all',
    label: 'All'
  }, {
    id: 'regulation',
    label: 'Regulation'
  }, {
    id: 'sourcing',
    label: 'Sourcing'
  }, {
    id: 'capital',
    label: 'Capital'
  }, {
    id: 'culture',
    label: 'Culture'
  }];
  const articles = [{
    cat: 'regulation',
    label: 'Regulation',
    tone: 'indigo',
    t: 'What CUSMA means for first-time exporters to Canada',
    a: 'Mei Lin Chen',
    d: 'Jun 18, 2026',
    big: true
  }, {
    cat: 'sourcing',
    label: 'Sourcing',
    tone: 'cyan',
    t: 'Auditing a factory you have never visited',
    a: 'David Okonkwo',
    d: 'Jun 04, 2026'
  }, {
    cat: 'capital',
    label: 'Capital',
    tone: 'slate',
    t: 'How Canadian VCs read an overseas founder',
    a: 'Priya Nair',
    d: 'May 27, 2026'
  }, {
    cat: 'culture',
    label: 'Culture',
    tone: 'gold',
    t: 'Guanxi, trust, and the Canadian handshake',
    a: 'Mei Lin Chen',
    d: 'May 12, 2026'
  }, {
    cat: 'regulation',
    label: 'Regulation',
    tone: 'evergreen',
    t: 'Bilingual labelling: a field guide',
    a: 'Jean-Marc Roy',
    d: 'Apr 30, 2026'
  }, {
    cat: 'sourcing',
    label: 'Sourcing',
    tone: 'indigo',
    t: 'Nearshoring vs. Asia: a cost model that holds up',
    a: 'David Okonkwo',
    d: 'Apr 15, 2026'
  }];
  const shown = filter === 'all' ? articles : articles.filter(a => a.cat === filter);
  const feature = shown.find(a => a.big) || shown[0];
  const rest = shown.filter(a => a !== feature);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '72px 40px 96px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 26,
      height: 6,
      background: 'var(--gold-500)',
      borderRadius: 2
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'var(--text-secondary)'
    }
  }, "Insights")), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '0 0 40px',
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'clamp(48px,8vw,104px)',
      lineHeight: .98,
      letterSpacing: '-.03em'
    }
  }, "MOMENTUM"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginBottom: 40,
      flexWrap: 'wrap'
    }
  }, cats.map(c => /*#__PURE__*/React.createElement(HX.Tag, {
    key: c.id,
    active: filter === c.id,
    onClick: () => setFilter(c.id),
    style: {
      cursor: 'pointer'
    }
  }, c.label))), feature && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.3fr 1fr',
      gap: 40,
      alignItems: 'center',
      paddingBottom: 48,
      marginBottom: 48,
      borderBottom: '1px solid var(--border-default)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Placeholder, {
    label: feature.label,
    tone: feature.tone,
    aspect: "16 / 10",
    height: "auto"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--text-secondary)',
      marginBottom: 16,
      borderBottom: '1px solid var(--border-default)',
      paddingBottom: 8,
      display: 'inline-block'
    }
  }, feature.label), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 20px',
      fontFamily: 'var(--font-serif)',
      fontWeight: 400,
      fontSize: 'clamp(30px,3.5vw,46px)',
      lineHeight: 1.08,
      letterSpacing: '-.01em'
    }
  }, feature.t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--text-muted)'
    }
  }, feature.a, " \xB7 ", feature.d))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 32,
      rowGap: 48
    }
  }, rest.map(a => /*#__PURE__*/React.createElement("div", {
    key: a.t,
    style: {
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Placeholder, {
    label: a.label,
    tone: a.tone,
    aspect: "4 / 3",
    height: "auto"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--text-secondary)',
      margin: '16px 0 10px',
      borderBottom: '1px solid var(--border-default)',
      paddingBottom: 8,
      display: 'inline-block'
    }
  }, a.label), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 12px',
      fontFamily: 'var(--font-serif)',
      fontWeight: 400,
      fontSize: 24,
      lineHeight: 1.18,
      letterSpacing: '-.01em'
    }
  }, a.t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, a.a, " \xB7 ", a.d)))));
}
window.HxInsights = Insights;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Insights.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Landing.jsx
try { (() => {
/* Hexie Digital — full marketing landing page.
   Composes design-system primitives + shared chrome (Chrome.jsx).
   Sections: hero, services, strengths, clients, case studies, team, CTA. */

const HXL = window.HexieDigitalDesignSystem_2fbbeb;
const Placeholder = window.HxPlaceholder;
function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - 72;
  window.scrollTo({
    top: y,
    behavior: 'smooth'
  });
}

/* ---- Shared bits ---- */
function Eyebrow({
  children,
  tone = 'default'
}) {
  const col = tone === 'inverse' ? 'rgba(244,243,239,.72)' : 'var(--text-secondary)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 26,
      height: 6,
      background: 'var(--gold-500)',
      borderRadius: 2
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: col
    }
  }, children));
}
const wrap = {
  maxWidth: 'var(--container-max)',
  margin: '0 auto',
  padding: '0 40px'
};

/* ---- Landing-specific nav (anchor scrolling) ---- */
function LandingNav() {
  const items = [{
    id: 'services',
    label: 'What we do'
  }, {
    id: 'strengths',
    label: 'Why Hexie'
  }, {
    id: 'work',
    label: 'Our work'
  }, {
    id: 'team',
    label: 'Team'
  }];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'rgba(244,243,239,0.82)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '16px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      cursor: 'pointer'
    },
    onClick: () => window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, /*#__PURE__*/React.createElement(window.HxLogo, null)), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 30
    }
  }, items.map(it => /*#__PURE__*/React.createElement("button", {
    key: it.id,
    onClick: () => scrollToId(it.id),
    style: {
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      padding: '4px 0',
      fontFamily: 'var(--font-display)',
      fontSize: 15,
      fontWeight: 500,
      color: 'var(--text-secondary)'
    }
  }, it.label)), /*#__PURE__*/React.createElement(HXL.Button, {
    size: "sm",
    onClick: () => scrollToId('contact')
  }, "Let's talk"))));
}

/* ---- Hero ---- */
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      padding: '84px 40px 64px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Cross-border growth consultancy"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'clamp(44px,7vw,96px)',
      lineHeight: 1.0,
      letterSpacing: '-0.03em',
      maxWidth: '15ch'
    }
  }, "We help companies belong in new markets."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 56,
      marginTop: 40,
      alignItems: 'flex-end',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: '48ch',
      fontSize: 19,
      lineHeight: 1.6,
      color: 'var(--text-secondary)',
      margin: 0
    }
  }, "Hexie Digital guides overseas companies into Canada \u2014 through regulation, capital, and partnership \u2014 and connects Canadian and American firms with trusted manufacturers across Asia. One senior team, on the ground on both sides of the ocean."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(HXL.Button, {
    size: "lg",
    onClick: () => scrollToId('contact')
  }, "Book a consultation"), /*#__PURE__*/React.createElement(HXL.Button, {
    size: "lg",
    variant: "secondary",
    onClick: () => scrollToId('work')
  }, "See our work"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 56
    }
  }, /*#__PURE__*/React.createElement(Placeholder, {
    label: "Toronto \u2194 Singapore \u2014 where we work",
    tone: "indigo",
    height: "340px"
  })));
}

/* ---- Services ---- */
function Services() {
  const services = [{
    n: '01',
    t: 'Market entry strategy',
    d: 'A staged, costed roadmap into Canada — validated market by market and de-risked at every gate.',
    tags: ['Opportunity sizing', 'Go-to-market', 'Entity & tax setup']
  }, {
    n: '02',
    t: 'Regulatory & compliance',
    d: 'Federal and provincial navigation, in English and French, so your filings clear the first time.',
    tags: ['Licensing & permits', 'Bilingual filings', 'Standards & labelling']
  }, {
    n: '03',
    t: 'Investor & partner matching',
    d: 'Warm, vetted introductions to capital and strategic partners across our Canadian and Asian networks.',
    tags: ['Investor readiness', 'Partner shortlists', 'Deal support']
  }, {
    n: '04',
    t: 'Asia sourcing',
    d: 'For North American firms — manufacturing partners across Asia, quality-audited and contract-ready.',
    tags: ['Supplier discovery', 'Factory audits', 'Logistics & QC']
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "services",
    style: {
      ...wrap,
      padding: '88px 40px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "What we do"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 44px',
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'clamp(32px,4.5vw,52px)',
      letterSpacing: '-.02em',
      maxWidth: '20ch'
    }
  }, "One partner across the whole journey."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 24
    }
  }, services.map(s => /*#__PURE__*/React.createElement(HXL.Card, {
    key: s.n,
    variant: "default",
    interactive: true,
    padding: "lg"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 40,
      letterSpacing: '-.03em',
      color: 'var(--text-muted)',
      marginBottom: 16
    }
  }, s.n), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 10px',
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 24,
      letterSpacing: '-.01em'
    }
  }, s.t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 20px',
      fontSize: 16,
      lineHeight: 1.55,
      color: 'var(--text-secondary)',
      maxWidth: '42ch'
    }
  }, s.d), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8
    }
  }, s.tags.map(t => /*#__PURE__*/React.createElement(HXL.Tag, {
    key: t
  }, t)))))));
}

/* ---- Strengths ---- */
function Strengths() {
  const points = [['Two-sided, on the ground', 'Senior advisors in Toronto and across Asia — not a referral desk. We are in the room on both sides of the deal.'], ['Multilingual by default', 'Every engagement runs in English, French, and Mandarin. Bilingual filings are standard, not an add-on.'], ['Regulatory depth', 'A decade navigating CFIA, Health Canada, ISED, and provincial regimes. We map the rules before you commit.'], ['Culturally fluent', 'We translate more than language — norms, expectations, and trust — so partners meet as equals.']];
  return /*#__PURE__*/React.createElement("section", {
    id: "strengths",
    style: {
      background: 'var(--bg-sunken)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      padding: '88px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '0.9fr 1.1fr',
      gap: 64,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Why Hexie"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'clamp(32px,4vw,48px)',
      letterSpacing: '-.02em',
      maxWidth: '14ch'
    }
  }, "A bridge, not a broker."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 20,
      maxWidth: '38ch',
      fontSize: 17,
      lineHeight: 1.6,
      color: 'var(--text-secondary)'
    }
  }, "Expansion rarely fails on the idea. It fails in the gaps \u2014 between regulators, investors, and partners who do not yet trust you. We close those gaps.")), /*#__PURE__*/React.createElement("div", null, points.map(([t, d], i) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'grid',
      gridTemplateColumns: '28px 1fr',
      gap: 20,
      padding: '24px 0',
      borderTop: '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      color: 'var(--gold-700)'
    }
  }, `0${i + 1}`), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 6px',
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 20
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 15,
      lineHeight: 1.55,
      color: 'var(--text-secondary)',
      maxWidth: '52ch'
    }
  }, d))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--field-cyan)',
      color: 'var(--ink-900)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      padding: '56px 40px',
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 32
    }
  }, [['120+', 'Market entries'], ['14', 'Sectors served'], ['$2.4B', 'Capital connected'], ['9 mo', 'Avg. time to market']].map(([v, l]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      borderTop: '1px solid rgba(20,22,26,.22)',
      paddingTop: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 56,
      letterSpacing: '-.03em',
      lineHeight: 1
    }
  }, v), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: 'rgba(20,22,26,.62)',
      marginTop: 10
    }
  }, l))))));
}

/* ---- Clients ---- */
function Clients() {
  const clients = ['Meridian Foods', 'Kaisho Nutrition', 'Northwind Cleantech', 'Sakura Mobility', 'Volta Medical', 'Rideau Robotics', 'Chang & Lowe', 'Boreal Beverages'];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      padding: '80px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      flexWrap: 'wrap',
      gap: 16,
      marginBottom: 36
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Clients"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'clamp(28px,3.5vw,40px)',
      letterSpacing: '-.02em'
    }
  }, "Teams expanding across borders.")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: '30ch',
      fontSize: 14,
      color: 'var(--text-muted)',
      fontFamily: 'var(--font-mono)'
    }
  }, "Illustrative \u2014 client names shown for demonstration.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden'
    }
  }, clients.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: c,
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: 108,
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 19,
      letterSpacing: '-.01em',
      color: 'var(--ink-700)',
      borderRight: i % 4 !== 3 ? '1px solid var(--border-default)' : 'none',
      borderBottom: i < 4 ? '1px solid var(--border-default)' : 'none'
    }
  }, c))));
}

/* ---- Case studies ---- */
function CaseStudies() {
  const cases = [{
    tone: 'indigo',
    sector: 'Functional foods',
    region: 'Japan → Canada',
    title: 'A Tokyo nutrition brand reaches Canadian shelves in seven months.',
    metric: '7 mo',
    metricLabel: 'to first retail order',
    body: 'Bilingual CFIA labelling, a Québec-ready launch, and a national distributor introduction — sequenced end to end.'
  }, {
    tone: 'cyan',
    sector: 'Hardware',
    region: 'Canada → Shenzhen',
    title: 'A Vancouver hardware startup finds a factory it can trust.',
    metric: '−38%',
    metricLabel: 'unit cost vs. nearshore',
    body: 'Three audited Shenzhen suppliers, a signed manufacturing agreement, and an on-the-ground QC cadence.'
  }, {
    tone: 'gold',
    sector: 'Medtech',
    region: 'Germany → Canada',
    title: 'A German medtech firm raises its first Canadian round.',
    metric: '$14M',
    metricLabel: 'Series A closed',
    body: 'Investor-ready in eight weeks, then warm introductions to three sector funds and a strategic partner.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "work",
    style: {
      background: 'var(--ink-900)',
      color: 'var(--paper)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      padding: '88px 40px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "inverse"
  }, "Selected work"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 48px',
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'clamp(32px,4.5vw,52px)',
      letterSpacing: '-.02em',
      maxWidth: '18ch'
    }
  }, "Crossings that stuck."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 0
    }
  }, cases.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: c.title,
    style: {
      display: 'grid',
      gridTemplateColumns: '0.9fr 1.2fr 0.6fr',
      gap: 40,
      alignItems: 'center',
      padding: '36px 0',
      borderTop: '1px solid rgba(244,243,239,.16)'
    }
  }, /*#__PURE__*/React.createElement(Placeholder, {
    label: `${c.sector} · ${c.region}`,
    tone: c.tone,
    aspect: "4 / 3",
    height: "auto"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(HXL.Badge, {
    tone: c.tone === 'gold' ? 'gold' : c.tone
  }, c.sector), /*#__PURE__*/React.createElement(HXL.Badge, {
    tone: "neutral"
  }, c.region)), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 14px',
      fontFamily: 'var(--font-serif)',
      fontWeight: 400,
      fontSize: 'clamp(24px,2.6vw,34px)',
      lineHeight: 1.14,
      letterSpacing: '-.01em'
    }
  }, c.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 16,
      lineHeight: 1.6,
      color: 'rgba(244,243,239,.72)',
      maxWidth: '46ch'
    }
  }, c.body)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 56,
      letterSpacing: '-.03em',
      lineHeight: 1,
      color: 'var(--gold-500)'
    }
  }, c.metric), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: 'rgba(244,243,239,.6)',
      marginTop: 10
    }
  }, c.metricLabel)))))));
}

/* ---- Team ---- */
function Team() {
  const people = [{
    name: 'Mei-Lin Chen',
    role: 'Managing Partner',
    loc: 'Toronto',
    g: 'linear-gradient(135deg,#3551a3,#009ab9)'
  }, {
    name: 'Jean-Marc Roy',
    role: 'Regulatory & Compliance',
    loc: 'Montréal',
    g: 'linear-gradient(135deg,#1b2a54,#3551a3)'
  }, {
    name: 'Priya Nair',
    role: 'Capital & Investors',
    loc: 'Toronto',
    g: 'linear-gradient(135deg,#009ab9,#46c0d8)'
  }, {
    name: 'David Okonkwo',
    role: 'Head of Asia Sourcing',
    loc: 'Singapore',
    g: 'linear-gradient(135deg,#b98d16,#e5b422)'
  }, {
    name: 'Sofia Alvarez',
    role: 'Market Entry Lead',
    loc: 'Vancouver',
    g: 'linear-gradient(135deg,#263c78,#4763bd)'
  }, {
    name: 'Kenji Watanabe',
    role: 'Partnerships, East Asia',
    loc: 'Tokyo',
    g: 'linear-gradient(135deg,#00728a,#009ab9)'
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "team",
    style: {
      ...wrap,
      padding: '88px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      flexWrap: 'wrap',
      gap: 16,
      marginBottom: 44
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Team"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'clamp(32px,4.5vw,52px)',
      letterSpacing: '-.02em',
      maxWidth: '16ch'
    }
  }, "The people who make the introductions.")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: '32ch',
      fontSize: 17,
      lineHeight: 1.6,
      color: 'var(--text-secondary)'
    }
  }, "Small, senior teams \u2014 the same advisors from first call to first year in market.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 28,
      rowGap: 40
    }
  }, people.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.name
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      aspectRatio: '1 / 1',
      borderRadius: 'var(--radius-md)',
      background: p.g
    }
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '16px 0 4px',
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 20
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      color: 'var(--text-secondary)'
    }
  }, p.role), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginTop: 6
    }
  }, p.loc)))));
}

/* ---- CTA ---- */
function CTA() {
  return /*#__PURE__*/React.createElement("section", {
    id: "contact",
    style: {
      background: 'var(--field-indigo)',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      padding: '96px 40px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 auto 28px',
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'clamp(34px,5vw,64px)',
      letterSpacing: '-.02em',
      maxWidth: '18ch',
      lineHeight: 1.04
    }
  }, "Let's talk about your next market."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 auto 36px',
      maxWidth: '44ch',
      fontSize: 18,
      lineHeight: 1.6,
      color: 'rgba(255,255,255,.82)'
    }
  }, "Tell us where you want to grow. A Hexie advisor will reply within one business day \u2014 in English, French, or Mandarin."), /*#__PURE__*/React.createElement(HXL.Button, {
    size: "lg",
    variant: "accent",
    onClick: () => scrollToId('contact')
  }, "Book a consultation")));
}
function Landing() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(LandingNav, null), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Services, null), /*#__PURE__*/React.createElement(Strengths, null), /*#__PURE__*/React.createElement(Clients, null), /*#__PURE__*/React.createElement(CaseStudies, null), /*#__PURE__*/React.createElement(Team, null), /*#__PURE__*/React.createElement(CTA, null)), /*#__PURE__*/React.createElement(window.HxFooter, {
    onNavigate: () => {}
  }));
}
window.HxLanding = Landing;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Landing.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Services.jsx
try { (() => {
/* Hexie website — Services / What we do screen. */
function Services({
  onNavigate
}) {
  const HX = window.HexieDigitalDesignSystem_2fbbeb;
  const services = [{
    n: '01',
    t: 'Market entry strategy',
    d: 'We turn ambition into a sequenced, costed roadmap into Canada — validated market by market, gate by gate.',
    tags: ['Opportunity sizing', 'Go-to-market', 'Entity & tax setup', 'Pricing & positioning']
  }, {
    n: '02',
    t: 'Regulatory & compliance',
    d: 'We navigate federal and provincial regimes so your product, filings, and labels clear the first time.',
    tags: ['Licensing & permits', 'Bilingual filings', 'Standards & labelling', 'Data & privacy']
  }, {
    n: '03',
    t: 'Investor & partner matching',
    d: 'We open our Canadian and Asian networks — warm, vetted, and relevant to your sector and stage.',
    tags: ['Investor readiness', 'Partner shortlists', 'Deal support', 'Board introductions']
  }, {
    n: '04',
    t: 'Asia sourcing',
    d: 'For North American firms, we find and qualify manufacturing partners across Asia — audited and contract-ready.',
    tags: ['Supplier discovery', 'Factory audits', 'Logistics & QC', 'Contract negotiation']
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '72px 40px 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 26,
      height: 6,
      background: 'var(--gold-500)',
      borderRadius: 2
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'var(--text-secondary)'
    }
  }, "What we do")), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'clamp(40px,6vw,76px)',
      lineHeight: 1.03,
      letterSpacing: '-.03em',
      maxWidth: '16ch'
    }
  }, "One partner across the whole journey."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 28,
      maxWidth: '52ch',
      fontSize: 19,
      lineHeight: 1.6,
      color: 'var(--text-secondary)'
    }
  }, "Expansion rarely fails on the idea. It fails in the gaps \u2014 between regulators, investors, and partners who do not yet trust you. We close those gaps.")), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 40px 40px'
    }
  }, services.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.n,
    style: {
      display: 'grid',
      gridTemplateColumns: '140px 1fr 1fr',
      gap: 40,
      padding: '40px 0',
      borderTop: '1px solid var(--border-default)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 40,
      letterSpacing: '-.03em',
      color: 'var(--text-muted)'
    }
  }, s.n), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 12px',
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 30,
      letterSpacing: '-.02em'
    }
  }, s.t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 17,
      lineHeight: 1.6,
      color: 'var(--text-secondary)',
      maxWidth: '44ch'
    }
  }, s.d)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8,
      alignContent: 'start'
    }
  }, s.tags.map(t => /*#__PURE__*/React.createElement(HX.Tag, {
    key: t
  }, t)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--bg-sunken)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '80px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'var(--text-secondary)',
      marginBottom: 12
    }
  }, "How we work"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 44px',
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 34,
      letterSpacing: '-.02em'
    }
  }, "A calm, four-phase engagement."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 20
    }
  }, [['Discover', 'We learn your business, market, and risk appetite.'], ['Map', 'We chart the regulatory, capital, and partner terrain.'], ['Bridge', 'We make introductions and prepare every filing.'], ['Grow', 'We stay on as advisors through your first year in market.']].map(([t, d], i) => /*#__PURE__*/React.createElement(HX.Card, {
    key: t,
    variant: "default",
    padding: "lg"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--brand-primary)',
      marginBottom: 14
    }
  }, `0${i + 1}`), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 8px',
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 20
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 15,
      lineHeight: 1.55,
      color: 'var(--text-secondary)'
    }
  }, d)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '88px 40px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 auto 24px',
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'clamp(32px,4.5vw,56px)',
      letterSpacing: '-.02em',
      maxWidth: '18ch'
    }
  }, "Ready to cross the border?"), /*#__PURE__*/React.createElement(HX.Button, {
    size: "lg",
    onClick: () => onNavigate('contact')
  }, "Book a consultation")));
}
window.HxServices = Services;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Services.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Tag = __ds_scope.Tag;

})();
