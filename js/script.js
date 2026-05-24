const myNumber = "201114539675";

// إنشاء لينك الرسالة
function generateMessage() {

    const name =
        document.getElementById(
            "personName"
        ).value.trim();

    const message =
        document.getElementById(
            "messageInput"
        ).value.trim();

    if (!name || !message) {

        alert(
            "اكتب الاسم والرسالة 😌"
        );

        return;
    }

    const url =
        `${window.location.origin}${window.location.pathname}` +
        `?name=${encodeURIComponent(name)}` +
        `&msg=${encodeURIComponent(message)}`;

    navigator.clipboard
        .writeText(url);

    alert(
        "تم نسخ الرابط 😈\nابعت اللينك على واتساب"
    );
}


// عرض الرسالة
function showMessage(name, message) {

    document
        .getElementById("setup")
        .classList.add("hidden");

    document
        .getElementById("messageScreen")
        .classList.remove("hidden");

    document
        .getElementById("title")
        .innerHTML =
        `✨ رسالة إلى ${name} ✨`;

    const typing =
        document.getElementById("typing");

    typing.innerHTML = "";

    // يحافظ على العربي والإيموجيز صح
    const chars = Array.from(message);

    let i = 0;

    const effect = setInterval(() => {

        if (i < chars.length) {

            typing.innerHTML +=
                chars[i] === "\n"
                    ? "<br>"
                    : chars[i];

            i++;

        } else {

            clearInterval(effect);
        }

    }, 35);
}

// إرسال الرد على واتساب
function sendReply() {

    const reply =
        document
            .getElementById(
                "reply"
            )
            .value.trim();

    if (!reply) {

        alert(
            "اكتبي رد الأول 😌"
        );

        return;
    }

    // اسم الشخص من اللينك
    const personName =
        new URLSearchParams(
            window.location.search
        ).get("name") || "شخص";

    const text =
`💌 وصلك رد جديد من ${personName}

${reply}`;

    const whatsappURL =
`https://api.whatsapp.com/send?phone=${myNumber}&text=${encodeURIComponent(text)}`;

    // يفتح الواتساب مباشرة
    window.location.href =
        whatsappURL;
}


// لما الصفحة تفتح
window.onload = () => {

    const params =
        new URLSearchParams(
            window.location.search
        );

    const name =
        params.get("name");

    const msg =
        params.get("msg");

    // لو فيه رسالة في اللينك
    if (name && msg) {

        showMessage(
            name,
            msg
        );
    }
};


// القلوب
function createHeart() {

    const heart =
        document
            .createElement("div");

    heart.innerHTML =
        "❤️";

    heart.classList.add(
        "heart"
    );

    heart.style.left =
        Math.random() *
        100 + "vw";

    heart.style.fontSize =
        (15 +
            Math.random() * 25)
        + "px";

    heart.style.animationDuration =
        (4 +
            Math.random() * 4)
        + "s";

    document.body
        .appendChild(
            heart
        );

    setTimeout(() => {

        heart.remove();

    }, 7000);
}

setInterval(
    createHeart,
    300
);