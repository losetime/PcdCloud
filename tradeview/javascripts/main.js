var _PROTOCOL = "http:";
var _HOST = 'pcd.wanzhantong.cn';
var _DOMAIN = _PROTOCOL + '//' + _HOST;
var _SERVER = _DOMAIN + "/mobile/"; //域名
var _API = _DOMAIN + "/api/";
var socket_api = '';
if (localStorage.getItem('socketPort')) {
    socket_api = _DOMAIN + ':' + localStorage.getItem('socketPort');
	console.log(socket_api)
} else {
    $.ajax({
        url: _DOMAIN + '/api/env.json',
        type: 'get',
        success: function (res) {
            localStorage.setItem('socketPort', res.socket_io_port);
            socket_api = _DOMAIN + ':' + res.socket_io_port;
        }
    });
	console.log(socket_api)
}
if (window.location.pathname != '/mobile/leverList.html') {
    localStorage.setItem('leverStatus', '');
}
if (window.location.pathname != '/mobile/LeveragedDeals.html') {
    localStorage.setItem('htmlStatus', '');
}
$('input').blur(function () {
    setTimeout(function () {
        document.body.scrollTop = document.body.scrollHeight;
    }, 300);
})
$('select').change(function () {
    setTimeout(function () {
        document.body.scrollTop = document.body.scrollHeight;
    }, 300);
})
$('.header .back').click(function () {
    // alert(-1);
    history.back();
})
function get_user() {
    return $.cookie("token") || 0;
}

function set_user(token) {
    var days = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 7;
    $.cookie("token", token, {
        expires: days,
        path: "/"
    });
}

function get_user_login() {
    // return get_user() || (location.href = _SERVER + "login.html");
}
//layer提示层
function layer_msg(content) {

    if (content == "") {
        content = "请刷新重试"
    }
    layer.msg(content)
    // layer.open({
    //     content: content
    //     ,skin: 'msg'
    //     ,time: 2 //2秒后自动关闭
    // });
}

//layer提示层
function layer_loading(content) {
    if (content == "") {
        content = "加载中"
    }
    layer.load(2);
}

function layer_close() {
    layer.closeAll()
}
// 询问提示框
function layer_confirm2(con, data, callback) {
    // var con = con || '确定要删除吗？'
    // var btnText = data.text || '确定'
    // var titles = data.title || ''
    // layer.confirm(con, {
    //     title: titles
    // }, function (index) {
    //     layer.close(index);
    //     callback && callback();
    // })
    layer.open({
        type: 1,
        title: '<img class="modal-logo" src="images/modal-logo.png" alt="">',
        skin: 'loads-btn btn-text',
        area: ['70%', 'auto'],
        content: con,
        btn: ['取消', '确认'],
        btn2: function (index) {
            layer.close(index);
            callback && callback();

        }
    });
    // layer.open({
    //     title:titles,
    //     content: con
    //     ,btn: [btnText, '取消']
    //     ,yes: function(index){
    //       layer.close(index);
    //       callback&&callback();
    //     }
    //   });
}

function layer_confirm(con, callback) {
    var con = con || '确定要删除吗？';
    layer.open({
        type: 1,
        title: '<img class="modal-logo" src="images/modal-logo.png" alt="">',
        skin: 'loads-btn btn-text',
        area: ['70%', 'auto'],
        content: con,
        btn: ['取消', '确认'],
        btn2: function (index) {
            layer.close(index);
            callback && callback();

        }
    });
}
/***
 * 获取url中所有参数
 * 返回参数键值对 对象
 */
function get_all_params() {
    var url = location.href;
    var nameValue;
    var paraString = url.substring(url.indexOf("?") + 1, url.length).split("&");
    var paraObj = {};
    for (var i = 0; nameValue = paraString[i]; i++) {
        var name = nameValue.substring(0, nameValue.indexOf("=")).toLowerCase();
        var value = nameValue.substring(nameValue.indexOf("=") + 1, nameValue.length);
        if (value.indexOf("#") > -1) {
            value = value.split("#")[0];
        }
        paraObj[name] = decodeURI(value);
    }
    return paraObj;
}

/**获取url中字段的值
 * name : 字段名
 * */
function get_param(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(r[2]);
    }
    return null;
}
// 获取不需token的数据
function initData(params, callback) {
    // layer_loading();
    url = _API + params.url;
    type = params.type || 'get';
    data = params.data || [];
    $.ajax({
        url,
        type,
        data,
        success: function (res) {
            layer_close();
            if (res.type == 'ok') {
                callback && callback(res.message)
            } else {
                layer_msg(res.message)
            }
        }
    })
}
// 获取不需token的数据
function initDatas(params, callback) {
    // layer_loading();
    url = 'https://www.beauglobal.com/api/' + params.url;
    type = params.type || 'get';
    data = params.data || [];
    $.ajax({
        url,
        type,
        data,
        success: function (res) {
            layer_close();
            if (res.type == 'ok') {
                callback && callback(res)
            } else {
                layer_msg(res.message)
            }
        }
    })
}

function initDataToken(params, callback) {
    // layer_loading();
    var url = _API + params.url;
    var type = params.type || 'get';
    var data = params.data || [];
    var token = get_user_login();
    $.ajax({
        url,
        type,
        data,
        beforeSend: function beforeSend(request) {
            request.setRequestHeader('Authorization', token)
        },
        success: function (res) {
            layer_close();
            if (res.type == 'ok') {
                callback && callback(res.message)
            } else {
                layer_msg(res.message)
                if (res.type == '997') {
                    setTimeout(() => {
                        location.href = _SERVER + 'adding.html';
                    }, 1500);
                }
                if (res.type == '998') {
                    setTimeout(() => {
                        location.href = _SERVER + 'authentication.html';
                    }, 1500);
                }
                if (res.type == '999') {
                    location.href = _SERVER + 'login.html'
                }


            }
        }
    })
}

function initDataToken01(params, callback) {
    // layer_loading();
    var url = _API + params.url;
    var type = params.type || 'get';
    var data = params.data || [];
    var token = get_user_login();
    $.ajax({
        url,
        type,
        data,
        beforeSend: function beforeSend(request) {
            request.setRequestHeader('Authorization', token)
        },
        success: function (res) {
            layer_close();
            if (res.type == 'ok') {
                callback && callback(res)
            } else {
                callback && callback(res)
                layer_msg(res.message)
                if (res.type == '997') {
                    setTimeout(() => {
                        location.href = 'adding.html';
                    }, 1500);
                }
                if (res.type == '998') {
                    setTimeout(() => {
                        location.href = 'authentication.html';
                    }, 1500);
                }
                if (res.type == '999') {
                    location.href = 'login.html'
                }


            }
        }
    })
}
// 返回数据结构单层
function initDataTokens(params, callback) {
    // layer_loading();
    var url = _API + params.url;
    var type = params.type || 'get';
    var data = params.data || [];
    var token = get_user_login();
    $.ajax({
        url,
        type,
        data,
        beforeSend: function beforeSend(request) {
            request.setRequestHeader('Authorization', token)
        },
        success: function (res) {
            layer_close();
            if (res.type != 'ok') {
                layer_msg(res.message)
            }
            if (res.type == '997') {
                setTimeout(() => {
                    location.href = 'adding.html';
                }, 1500);
            } else if (res.type == '998') {
                setTimeout(() => {
                    location.href = 'authentication.html';
                }, 1500);
            } else if (res.type == '999') {
                location.href = 'login.html'
            } else {
                return callback && callback(res)
            }
        }
    })
}

function setlocal_storage(str, data) {
    localStorage.setItem(str, JSON.stringify(data));
}

function getlocal_storage(str) {
    return JSON.parse(localStorage.getItem(str));
}
//时间戳转换时间
function timestampToTime(timestamp) {
    var date = new Date(timestamp * 1000); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
    var Y = date.getFullYear() + '-';
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    var D = date.getDate() > 10 ? date.getDate() + ' ' : ('0' + date.getDate()) + ' ';
    var h = date.getHours() > 10 ? date.getHours() + ':' : ('0' + date.getHours()) + ':';
    var m = date.getMinutes() > 10 ? date.getMinutes() + ':' : ('0' + date.getMinutes()) + ':';
    var s = date.getSeconds() > 10 ? date.getSeconds() : ('0' + date.getSeconds());
    return Y + M + D + h + m + s;
}

function iTofixed(num, fractionDigits) {
    num = num.toString();
    return num.substring(0, num.indexOf(".") + fractionDigits);
}
document.addEventListener('plusready', function () {
    plus.navigator.setStatusBarBackground("#FFFFFF");
    // plus.navigator.setStatusBarColor("#000000");
    plus.navigator.setStatusBarStyle('dark')
}, false);
// document.addEventListener('plusready', function () {
//     var webview = plus.webview.currentWebview()
//     plus.key.addEventListener('backbutton', function () {
//         webview.canBack(function (e) {
// 
//             console.log(document.referrer.indexOf('login.html'));
//             if (e.canBack && (document.referrer.indexOf('login.html') == -1)) {
//                 console.log(e, webview, 123);
//                 console.log('hbuilder_2');
//                 webview.back()
//             } else {
//                 // webview.close() //hide,quit
//                 // plus.runtime.quit()
//                 // 首页返回键处理
//                 // 处理逻辑：1秒内，连续两次按返回键，则退出应用；
//                 var first = null
//                 plus.key.addEventListener(
//                     'backbutton',
//                     function () {
//                         // 首次按键，提示‘再按一次退出应用’
//                         // 首次按键，提示‘再按一次退出应用’
//                         if (!first) {
//                             first = new Date().getTime()
//                             //            plus.nativeUI.toast('再按一次退出应用'); // 此处可以用自定义提示
//                             setTimeout(function () {
//                                 first = null
//                             }, 1000)
//                         } else {
//                             if (new Date().getTime() - first < 1500) {
//                                 layer_confirm2('确定要退出吗？', { text: '确定', cannel: '取消' }, function () {
//                                     plus.runtime.quit();
//                                 })
// 
//                             }
//                         }
//                     },
//                     false
//                 )
//             }
//         })
//     })
// })