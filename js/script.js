const myNumber = "201114539675";

function generateMessage(){

    const name =
    document.getElementById(
        "personName"
    ).value.trim();

    const message =
    document.getElementById(
        "messageInput"
    ).value.trim();

    if(!name || !message){

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

function showMessage(
    name,
    message
){

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
    document
    .getElementById(
        "typing"
    );

    typing.innerHTML = "";

    let i = 0;

    const effect =
    setInterval(()=>{

        typing.innerHTML +=
        message[i] === "\n"
        ? "<br>"
        : message[i];

        i++;

        if(i >= message.length){

            clearInterval(
                effect
            );
        }

    },40);
}

function sendReply(){

    const reply =
    document
    .getElementById(
        "reply"
    )
    .value.trim();

    if(!reply){

        alert(
            "اكتبي رد الأول 😌"
        );

        return;
    }

    const text =
`💌 وصلك رد جديد:

${reply}`;

    const whatsappURL =
`https://wa.me/${myNumber}?text=${encodeURIComponent(text)}`;

    window.open(
        whatsappURL,
        "_blank"
    );
}

window.onload = ()=>{

    const params =
    new URLSearchParams(
        window.location.search
    );

    const name =
    params.get("name");

    const msg =
    params.get("msg");

    if(name && msg){

        showMessage(
            name,
            msg
        );
    }
};

function createHeart(){

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
    Math.random()*25)
    + "px";

    heart.style.animationDuration =
    (4 +
    Math.random()*4)
    + "s";

    document.body
    .appendChild(
        heart
    );

    setTimeout(()=>{

        heart.remove();

    },7000);
}

setInterval(
    createHeart,
    300
);