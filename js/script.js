// إنشاء لينك الرسالة
function generateMessage() {

    const name =
        document.getElementById(
            "personName"
        ).value.trim();

    const phone =
        document.getElementById(
            "phoneNumber"
        ).value.trim();

    const message =
        document.getElementById(
            "messageInput"
        ).value.trim();

    if (!name || !phone || !message) {

        alert(
            "اكتب الاسم والرقم والرسالة 😌"
        );

        return;
    }

    // تحويل Base64
    const encodedName =
        btoa(
            unescape(
                encodeURIComponent(name)
            )
        );

    const encodedPhone =
        btoa(phone);

    const encodedMessage =
        btoa(
            unescape(
                encodeURIComponent(message)
            )
        );

    const url =
        `${window.location.origin}${window.location.pathname}` +
        `?name=${encodedName}` +
        `&phone=${encodedPhone}` +
        `&msg=${encodedMessage}`;

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
        .getElementById(
            "messageScreen"
        )
        .classList.remove(
            "hidden"
        );

    document
        .getElementById(
            "title"
        ).innerHTML =
        `✨ رسالة إلى ${name} ✨`;

    const typing =
        document.getElementById(
            "typing"
        );

    typing.innerHTML = "";

    const chars =
        Array.from(message);

    let i = 0;

    const effect =
        setInterval(() => {

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



// إرسال الرد
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

    const params =
        new URLSearchParams(
            window.location.search
        );

    try {

        const personName =
            decodeURIComponent(
                escape(
                    atob(
                        params.get(
                            "name"
                        )
                    )
                )
            );

        const phone =
            atob(
                params.get(
                    "phone"
                )
            );

        const text =
`💌 وصلك رد جديد من ${personName}

${reply}`;

        const whatsappURL =
`https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

        window.location.href =
            whatsappURL;

    } catch (error) {

        alert(
            "حصل خطأ 😢"
        );
    }
}



// عند فتح الصفحة
window.onload = () => {

    const params =
        new URLSearchParams(
            window.location.search
        );

    try {

        const encodedName =
            params.get("name");

        const encodedMsg =
            params.get("msg");

        if (
            encodedName &&
            encodedMsg
        ) {

            const name =
                decodeURIComponent(
                    escape(
                        atob(
                            encodedName
                        )
                    )
                );

            const msg =
                decodeURIComponent(
                    escape(
                        atob(
                            encodedMsg
                        )
                    )
                );

            showMessage(
                name,
                msg
            );
        }

    } catch (error) {

        console.error(
            "Message decode error:",
            error
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
        (
            15 +
            Math.random() * 25
        ) + "px";

    heart.style.animationDuration =
        (
            4 +
            Math.random() * 4
        ) + "s";

    document.body
        .appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 7000);
}

setInterval(
    createHeart,
    300
);