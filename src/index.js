
// 获取脚本配置
const { openConsoleUi, sleepTime } = hamibot.env;

// 等待开启无障碍权限
auto.waitFor();
// 将设备保持常亮
device.keepScreenDim();

const deivceFileSavePath = files.getSdcardPath();
const savePath = files.getSdcardPath() + '/Pictures/hamibot_save_image/';
const _packageName = 'com.taobao.taobao';
files.create(savePath);
const zybBase64 = 'data:image/jpeg;base64,/9j/4QCORXhpZgAATU0AKgAAAAgABQEAAAMAAAABADMAAAEBAAMAAAABACYAAIdpAAQAAAABAAAASgESAAMAAAABAAAAAAEyAAIAAAABAAAAAAAAAAAAAZIIAAQAAAABAAAAAAAAAAAAAwEAAAMAAAABADMAAAEBAAMAAAABACYAAAEyAAIAAAABAAAAAAAAAAD/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wgARCAAmADMDASIAAhEBAxEB/8QAGgAAAgMBAQAAAAAAAAAAAAAAAAUBAwQCBv/EABkBAAMBAQEAAAAAAAAAAAAAAAIDBAUBAP/aAAwDAQACEAMQAAABcc2MsPfWbNDT03leHcrarNRTxc9887YWa0MkdURhatYQXaLC0DiikENtpBnOgDD/xAAgEAACAwABBAMAAAAAAAAAAAABAgADESEEEhMiFCMx/9oACAEBAAEFAjtrGoiV0s0+Jw9LLAhgpbOmPvbWcobtnlXLveVVgCzqMeg/aTzpDgtFEvfx1n9Xh2jDQk7wJ1TakvrCubOO/wBVbjY50ijR/8QAHxEAAQQCAgMAAAAAAAAAAAAAAAECAxESEyEiMUFR/9oACAEDAQE/AVk1riSzvvg39bLd8J29j0NZk4xQu6EQTyZqf//EAB0RAAIBBQEBAAAAAAAAAAAAAAECAAQQERIxISL/2gAIAQIBAT8BcOfoRGyPTN2JxYclRujeSnVmOWs3Yexbf//EAB8QAAICAgEFAAAAAAAAAAAAAAAQASERMRIgQVFhcf/aAAgBAQAGPwKZe+jHko0qLsmCFJss9qFnu4X1ZfE2f//EAB8QAAICAgMAAwAAAAAAAAAAAAABESExQRBhgVFxkf/aAAgBAQABPyEiUSbWEN7SO5Q8htIdcUtnnohWxNv+C6IQgaBCrRE3vhQVPY8JchTmsqQ0szzGPYqBgNNiQ+T0nEh+wqFMfo5heZREN5H/2gAMAwEAAgADAAAAEPscznFKvA3oPv/EABgRAQEBAQEAAAAAAAAAAAAAAAEAESEx/9oACAEDAQE/EM0eROXIRp7DdmwS4+JhHyChDUWXEdfb/8QAGBEBAQEBAQAAAAAAAAAAAAAAAQARITH/2gAIAQIBAT8Q3vGZOE5KFz2aMhzNGyhZcou+7jYOX//EABwQAQADAQADAQAAAAAAAAAAAAEAESExQVFhsf/aAAgBAQABPxAWWy8+EpDk1CDLj9rIg2ytaIcGNCCMlA7gVSDsCWb2FwqqtXmFTUnmdgtaZCox0VPh0ufFwU4NB8jFKmVRZxAYMw2urHaSqf2Yn3EGAb9IJFRFAtvRHuGHEORAXOHqDutDxUsFGhyZewa557cFv22+YZoMf//Z';
const closeBase64 = 'data:image/jpeg;base64,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';
var zybImg = images.fromBase64(zybBase64);
var closeImg = images.fromBase64(closeBase64);

function errorHamibot() {
    zybImg?.recycle();
    closeImg?.recycle();
    hamibot.exit();
}

// 返回文件全路径
function getFile(fileName) {
    return savePath + fileName;
}

// 获取一个随机sleepTime值
function getRandomSleepTime() {
    return Number(sleepTime) * 1000 + random(100, 1000);
}

// 随机休眠
function randomSleep() {
    sleep(getRandomSleepTime())
}

// 存在 UiSelector 就点击
function existsClick(uiSelector) {
    if (uiSelector.exists()) {
        uiSelector.findOne().click();
        randomSleep();
    }
}

// 存在 UiSelector 就随机点击屏幕上的任意一点，比findClick更合适
function existsRandomClick(uiSelector) {
    if (uiSelector.exists()) {
        boundsClick(uiSelector);
    }
}

// TODO 点击并不是很精确
function boundsClick(uiSelector) {
    console.log("bounds-left:", uiSelector.bounds().left);
    console.log("bounds-right:", uiSelector.bounds().right);
    console.log("bounds-top:", uiSelector.bounds().top);
    console.log("bounds-bottom:", uiSelector.bounds().bottom);
    var randomX = random(uiSelector.bounds().left, uiSelector.bounds().right);
    var randomY = random(uiSelector.bounds().top, uiSelector.bounds().bottom);
    console.log("x=", randomX, "y=", randomY);
    click(randomX, randomY);
    randomSleep();
}

// 消除影响操作的蒙板
function closeMask() {
    do {
        console.log("检测是否有升级提示");
        existsClick(id("update_imageview_cancel_v2"));
        console.log("检测是否出现蒙板");
        // existsClick(className("android.widget.Image").text("O1CN01M10BU41S29N4be8lb_!!6000000002188-2-tps-72-72"));
        // existsClick(className("android.view.View").depth(14).text("立即收下"));
        // existsClick(className("android.widget.Image").text("O1CN012bguEC1LCV0hTQ7qe_!!6000000001263-2-tps-60-60.png_"));
        // existsClick(className("android.view.View").depth(14).textContains("立即领"));
        // existsClick(className("android.view.View").depth(12).text("点击领取"));
        if (closeImg) {
            let result = images.findImage(captureScreen(), closeImg, {
                threshold: 0.8
            });
            console.log(result);
            if (result) {
                click(result.x, result.y);
            }
        }
        sleep(1000);
    } while (1)
}


// ***************************执行脚本***************************

// 自动录屏授权
let t = threads.start(function () {
    text('立即开始').waitFor();
    text('立即开始').findOne().click();
});
if (!requestScreenCapture(true)) {
    toastLog('没有授予 Hamibot 屏幕截图权限');
    errorHamibot();
} else {
    t.interrupt();
}

// 是否打开控制台
if (openConsoleUi) {
    console.show();
    sleep(500);
    // 修改控制台位置
    console.setPosition(0, 50);
    // 修改控制台大小
    console.setSize(device.width, device.height / 4);
}


app.launch(_packageName);
// 等待应用被打开
waitForPackage(_packageName);
console.log("run taobao success.");
randomSleep();
threads.start(closeMask);

let qd = desc("签到").findOne(getRandomSleepTime());
if (qd == null) {
    console.log("启动后未在首页");
    errorHamibot();
};
console.log("点击签到");
boundsClick(qd);
console.log("进入天天签到领现金页面");
text("去提现").waitFor();
let takeNow = text("立即领现金").findOne(getRandomSleepTime());
if (takeNow) {
    boundsClick(takeNow);
    existsRandomClick(text("立即收下"));
}
if (zybImg) {
    // images.save(captureScreen(), getFile('1.jpg'), 'jpg', 50);
    let result = images.findImage(captureScreen(), zybImg, {
        threshold: 0.8
    });
    console.log(result);
    if (result) {
        click(result.x, result.y);
    }
}

if (openConsoleUi) {
    // console.hide();
}
// 解除屏幕常亮
device.cancelKeepingAwake();
// 震动
device.vibrate(300);
console.log("运行结束");
errorHamibot();

// 左上右下
// 120.128.192.209
// {942,392}