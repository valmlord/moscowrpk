var number = 0;
var maxNumber = $(".test-slider__item").length - 2;
var $element = $(".test-slider__item").find("input, select, textarea");
var btnNext = $('.next-test');
var testTextNum = 6;
var testText = $('.test__img-count');
var $elementRadio = $(".test-slider__item").not('.final, .no-focus').find("input[type='radio']");
var isValid;
var dataBlock;
var activeSlede = [];
for (var i = 0; i < maxNumber; i++) {
    activeSlede[i] = false;
}
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = dd + '.' + mm + '.' + yyyy;
$('.update-date span').text(today);
$element.on('change input', function (e) {
    var value = $(this).val().trim();
    isValid = value !== "";
    btnActive(!isValid);
});

function btnActive(isValid) {
    if (number === 0) {
        btnNext.prop('disabled', isValid);
    } else {
        if (activeSlede[number] === true || isValid === false) {
            btnNext.prop('disabled', false);
        } else {
            btnNext.prop('disabled', true);
        }
    }
}

function convertPhone(phone) {
    return phone[1] + phone[4] + phone[5] + phone[6] + phone[9] + phone[10] + phone[11] + phone[13] + phone[14] + phone[16] + phone[17];
}


function check7Duplicate(phone) {
    let check = false;
    for (i = 1; i < 5; i++) {
        if (phone[i] === phone[i + 1] && phone[i] === phone[i + 2] && phone[i] === phone[i + 3] && phone[i] === phone[i + 4] && phone[i] === phone[i + 5] && phone[i] === phone[i + 6]) {
            check = true;
        }
    }
    return check;
}

function noValidate(form) {
    let noValid = false;
    const phone = convertPhone(form.find('input[name="phone"]').val());
    if (check7Duplicate(phone)) {
        noValid = true;
        form.find('.error').text('Номер не может иметь больше 6 подряд одинаковых цифр');
    }
    if (phone[1] !== '9') {
        noValid = true;
        form.find('.error').text('Номер должен начинаться с 9');
    }

    return noValid;
}

$('[dir="ltr"]').on('click', function () {
    $(this).toggleClass('b24-widget-button-bottom');
});

$('input[name="qw7"]').on('change input', function () {
    $('.test__block__item-3').show();
    $('.test__block__item-2').hide();
    $('#gift-t').text($(this).val().trim());
    $('.gift-img').attr({
        "src": $(this).parents('.lqw-7').find('.qw-7-img').attr('src'),
    });
});
var $barLevel = 100 / (maxNumber);
var $barWidth = $barLevel;

function progress(num) {
    if (num === 0) {
        var testCircle = ".test-circle-" + (num);
        $(testCircle).addClass('test-circle-active');
    } else {
        var testBlock = ".test-block-" + (num - 1);
        var testCircle = ".test-circle-" + (num);
        $(testBlock).addClass('test-block-active');
        $(testCircle).addClass('test-circle-active');
    }
    moneyAnim(".procent", Math.floor($barWidth), "%");
}
progress(0);

function btnClick() {
    btnNext.on('click', next);
    $elementRadio.on('input, change', next);
}
btnClick();

function next() {
    event.preventDefault();
    activeSlede[number] = true;
    ++number;
    setTimeout(function () {
        $(".test-slider__item").hide();
        $(".test-slider__item").eq(number).fadeIn(1000);
    }, 300);
    btnActive(!isValid);
    if (activeSlede[number] === true || number === 2) {
        btnNext.prop('disabled', false);
    } else {
        btnNext.prop('disabled', true);
    }
    if (number === 2) {
        $('.test-slider__item').eq(1).find('input').each(function (index, el) {
            if ($(this).prop('checked')) {
                $('.qw-i-jq').eq(index).show();
            } else {
                $('.qw-i-jq').eq(index).hide();
            }
        });
    }
    if (number === maxNumber) {
        $(".test__btn-block").hide();
        $('#r-1').attr({
            "src": './assets/icons/Devices/iPhone.png',
        });
        $('.test__block').addClass('finalp');
    } else {
        setTimeout(function () {
            $(".test-item__number-furst").text(number + 1);
            $barWidth += $barLevel;
            progress(number);
            animateTop();
        }, 300);
    }
}

function moneyAnim(selector, new_money, simbol) {
    var numb_start = 0;
    $({
        numberValue: numb_start
    }).animate({
        numberValue: new_money
    }, {
        duration: 560,
        easing: "linear",
        step: function (val) {
            $(selector).text(Math.ceil(val) + simbol);
        }
    });
}

var nForm = false;
$(function () {
    'use strict';
    $('#test form').on('submit', function (e) {
        e.preventDefault();
        if (noValidate($(this))) {
            return;
        }
        var $that = $(this);
        var fd = new FormData(this);
        var constr = [];
        $that.find('.btn').attr({
            'disabled': 'true'
        });
        $('input[name="qw2"]').each(function (index, el) {
            if ($(this).prop('checked')) {
                constr.push($(this).val().trim());
            }
        });
        var constr2 = constr.join(' , ');
        fd.append('qw2', constr2);
        new URL(window.location.href).searchParams.forEach(function (value, key) {
            fd.append(key, value);
        });
    });
});
/* var closeMod = false;
$(document).mouseleave(function (event) {
    event = event || window.event;
    if (event.clientY < 0 || event.clientY < 3) {
        if (!closeMod && !nForm) {
            var top = $('.test__content').offset().top;
            $('body,html').animate({
                scrollTop: top
            }, 1000);
            closeMod = true;
        }
    }
}); */

function simulate(element, eventName) {
    var options = extend(defaultOptions, arguments[2] || {});
    var oEvent, eventType = null;
    for (var name in eventMatchers) {
        if (eventMatchers[name].test(eventName)) {
            eventType = name;
            break;
        }
    }
    if (!eventType) throw new SyntaxError('Only HTMLEvents and MouseEvents interfaces are supported');
    if (document.createEvent) {
        oEvent = document.createEvent(eventType);
        if (eventType == 'HTMLEvents') {
            oEvent.initEvent(eventName, options.bubbles, options.cancelable);
        } else {
            oEvent.initMouseEvent(eventName, options.bubbles, options.cancelable, document.defaultView, options.button, options.pointerX, options.pointerY, options.pointerX, options.pointerY, options.ctrlKey, options.altKey, options.shiftKey, options.metaKey, options.button, element);
        }
        element.dispatchEvent(oEvent);
    } else {
        options.clientX = options.pointerX;
        options.clientY = options.pointerY;
        var evt = document.createEventObject();
        oEvent = extend(evt, options);
        element.fireEvent('on' + eventName, oEvent);
    }
    return element;
}

function extend(destination, source) {
    for (var property in source) destination[property] = source[property];
    return destination;
}
var eventMatchers = {
    'HTMLEvents': /^(?:load|unload|abort|error|select|change|submit|reset|focus|blur|resize|scroll)$/,
    'MouseEvents': /^(?:click|dblclick|mouse(?:down|up|over|move|out))$/
};

var
    defaultOptions = {
        pointerX: 0,
        pointerY: 0,
        button: 0,
        ctrlKey: false,
        altKey: false,
        shiftKey: false,
        metaKey: false,
        bubbles: true,
        cancelable: true
    };


! function (factory) {
    "function" == typeof define && define.amd ? define(["jquery"], factory) : factory("object" == typeof exports ? require("jquery") : jQuery);
}(function ($) {
    var caretTimeoutId, ua = navigator.userAgent,
        iPhone = /iphone/i.test(ua),
        chrome = /chrome/i.test(ua),
        android = /android/i.test(ua);
    $.mask = {
        definitions: {
            "9": "[0-9]",
            a: "[A-Za-z]",
            "*": "[A-Za-z0-9]"
        },
        autoclear: !0,
        dataName: "rawMaskFn",
        placeholder: "_"
    }, $.fn.extend({
        caret: function (begin, end) {
            var range;
            if (0 !== this.length && !this.is(":hidden")) return "number" == typeof begin ? (end = "number" == typeof end ? end : begin, this.each(function () {
                this.setSelectionRange ? this.setSelectionRange(begin, end) : this.createTextRange && (range = this.createTextRange(), range.collapse(!0), range.moveEnd("character", end), range.moveStart("character", begin), range.select());
            })) : (this[0].setSelectionRange ? (begin = this[0].selectionStart, end = this[0].selectionEnd) : document.selection && document.selection.createRange && (range = document.selection.createRange(), begin = 0 - range.duplicate().moveStart("character", -1e5), end = begin + range.text.length), {
                begin: begin,
                end: end
            });
        },
        unmask: function () {
            return this.trigger("unmask");
        },
        mask: function (mask, settings) {
            var input, defs, tests, partialPosition, firstNonMaskPos, lastRequiredNonMaskPos, len, oldVal;
            if (!mask && this.length > 0) {
                input = $(this[0]);
                var fn = input.data($.mask.dataName);
                return fn ? fn() : void 0;
            }
            return settings = $.extend({
                autoclear: $.mask.autoclear,
                placeholder: $.mask.placeholder,
                completed: null
            }, settings), defs = $.mask.definitions, tests = [], partialPosition = len = mask.length, firstNonMaskPos = null, $.each(mask.split(""), function (i, c) {
                "?" == c ? (len--, partialPosition = i) : defs[c] ? (tests.push(new RegExp(defs[c])), null === firstNonMaskPos && (firstNonMaskPos = tests.length - 1), partialPosition > i && (lastRequiredNonMaskPos = tests.length - 1)) : tests.push(null);
            }), this.trigger("unmask").each(function () {
                function tryFireCompleted() {
                    if (settings.completed) {
                        for (var i = firstNonMaskPos; lastRequiredNonMaskPos >= i; i++)
                            if (tests[i] && buffer[i] === getPlaceholder(i)) return;
                        settings.completed.call(input);
                    }
                }

                function getPlaceholder(i) {
                    return settings.placeholder.charAt(i < settings.placeholder.length ? i : 0);
                }

                function seekNext(pos) {
                    for (; ++pos < len && !tests[pos];);
                    return pos;
                }

                function seekPrev(pos) {
                    for (; --pos >= 0 && !tests[pos];);
                    return pos;
                }

                function shiftL(begin, end) {
                    var i, j;
                    if (!(0 > begin)) {
                        for (i = begin, j = seekNext(end); len > i; i++)
                            if (tests[i]) {
                                if (!(len > j && tests[i].test(buffer[j]))) break;
                                buffer[i] = buffer[j], buffer[j] = getPlaceholder(j), j = seekNext(j);
                            }
                        writeBuffer(), input.caret(Math.max(firstNonMaskPos, begin));
                    }
                }

                function shiftR(pos) {
                    var i, c, j, t;
                    for (i = pos, c = getPlaceholder(pos); len > i; i++)
                        if (tests[i]) {
                            if (j = seekNext(i), t = buffer[i], buffer[i] = c, !(len > j && tests[j].test(t))) break;
                            c = t;
                        }
                }

                function androidInputEvent() {
                    var curVal = input.val(),
                        pos = input.caret();
                    if (oldVal && oldVal.length && oldVal.length > curVal.length) {
                        for (checkVal(!0); pos.begin > 0 && !tests[pos.begin - 1];) pos.begin--;
                        if (0 === pos.begin)
                            for (; pos.begin < firstNonMaskPos && !tests[pos.begin];) pos.begin++;
                        input.caret(pos.begin, pos.begin);
                    } else {
                        for (checkVal(!0); pos.begin < len && !tests[pos.begin];) pos.begin++;
                        input.caret(pos.begin, pos.begin);
                    }
                    tryFireCompleted();
                }

                function blurEvent() {
                    checkVal(), input.val() != focusText && input.change();
                }

                function keydownEvent(e) {
                    if (!input.prop("readonly")) {
                        var pos, begin, end, k = e.which || e.keyCode;
                        oldVal = input.val(), 8 === k || 46 === k || iPhone && 127 === k ? (pos = input.caret(), begin = pos.begin, end = pos.end, end - begin === 0 && (begin = 46 !== k ? seekPrev(begin) : end = seekNext(begin - 1), end = 46 === k ? seekNext(end) : end), clearBuffer(begin, end), shiftL(begin, end - 1), e.preventDefault()) : 13 === k ? blurEvent.call(this, e) : 27 === k && (input.val(focusText), input.caret(0, checkVal()), e.preventDefault());
                    }
                }

                function keypressEvent(e) {
                    if (!input.prop("readonly")) {
                        var p, c, next, k = e.which || e.keyCode,
                            pos = input.caret();
                        if (!(e.ctrlKey || e.altKey || e.metaKey || 32 > k) && k && 13 !== k) {
                            if (pos.end - pos.begin !== 0 && (clearBuffer(pos.begin, pos.end), shiftL(pos.begin, pos.end - 1)), p = seekNext(pos.begin - 1), len > p && (c = String.fromCharCode(k), tests[p].test(c))) {
                                if (shiftR(p), buffer[p] = c, writeBuffer(), next = seekNext(p), android) {
                                    var proxy = function () {
                                        $.proxy($.fn.caret, input, next)();
                                    };
                                    setTimeout(proxy, 0);
                                } else input.caret(next);
                                pos.begin <= lastRequiredNonMaskPos && tryFireCompleted();
                            }
                            e.preventDefault();
                        }
                    }
                }

                function clearBuffer(start, end) {
                    var i;
                    for (i = start; end > i && len > i; i++) tests[i] && (buffer[i] = getPlaceholder(i));
                }

                function writeBuffer() {
                    input.val(buffer.join(""));
                }

                function checkVal(allow) {
                    var i, c, pos, test = input.val(),
                        lastMatch = -1;
                    for (i = 0, pos = 0; len > i; i++)
                        if (tests[i]) {
                            for (buffer[i] = getPlaceholder(i); pos++ < test.length;)
                                if (c = test.charAt(pos - 1), tests[i].test(c)) {
                                    buffer[i] = c, lastMatch = i;
                                    break;
                                }
                            if (pos > test.length) {
                                clearBuffer(i + 1, len);
                                break;
                            }
                        } else buffer[i] === test.charAt(pos) && pos++, partialPosition > i && (lastMatch = i);
                    return allow ? writeBuffer() : partialPosition > lastMatch + 1 ? settings.autoclear || buffer.join("") === defaultBuffer ? (input.val() && input.val(""), clearBuffer(0, len)) : writeBuffer() : (writeBuffer(), input.val(input.val().substring(0, lastMatch + 1))), partialPosition ? i : firstNonMaskPos;
                }

                var input = $(this),
                    buffer = $.map(mask.split(""), function (c, i) {
                        return "?" != c ? defs[c] ? getPlaceholder(i) : c : void 0;
                    }),
                    defaultBuffer = buffer.join(""),
                    focusText = input.val();
                input.data($.mask.dataName, function () {
                    return $.map(buffer, function (c, i) {
                        return tests[i] && c != getPlaceholder(i) ? c : null;
                    }).join("");
                }), input.one("unmask", function () {
                    input.off(".mask").removeData($.mask.dataName);
                }).on("focus.mask", function () {
                    if (!input.prop("readonly")) {
                        clearTimeout(caretTimeoutId);
                        var pos;
                        focusText = input.val(), pos = checkVal(), caretTimeoutId = setTimeout(function () {
                            input.get(0) === document.activeElement && (writeBuffer(), pos == mask.replace("?", "").length ? input.caret(0, pos) : input.caret(pos));
                        }, 10);
                    }
                }).on("blur.mask", blurEvent).on("keydown.mask", keydownEvent).on("keypress.mask", keypressEvent).on("input.mask paste.mask", function () {
                    input.prop("readonly") || setTimeout(function () {
                        var pos = checkVal(!0);
                        input.caret(pos), tryFireCompleted();
                    }, 0);
                }), chrome && android && input.off("input.mask").on("input.mask", androidInputEvent), checkVal();
            });
        }
    });
});