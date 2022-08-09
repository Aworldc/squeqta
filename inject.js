var dick = 0
document.addEventListener("mousemove", () => {
    if (document.querySelector(".squeqtamenuitem") == null) {
        var x = document.createElement("li")
        x.setAttribute("class", "item squeqtamenuitem")
        var y = document.createElement("label")
        y.innerHTML =
            '<svg class="squeqtaiconything" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentcolor" d="M12 7.1a4.9 4.9 0 1 0 0 9.8A4.9 4.9 0 0 0 12 7ZM8.6 12a3.4 3.4 0 1 1 6.8 0 3.4 3.4 0 0 1-6.8 0Zm0 0"/><path fill="currentcolor" d="M14.7 2a2.8 2.8 0 0 0-5.4 0l-.1.5a1 1 0 0 1-.8.8c-.4.2-.8.2-1.1 0L6.8 3C4.4 1.7 1.7 4.4 3 6.8l.3.5a1.3 1.3 0 0 1-.8 1.9l-.5.1a2.8 2.8 0 0 0 0 5.4l.5.1c.4.1.7.4.8.8.2.4.2.8 0 1.1l-.3.5c-1.3 2.4 1.4 5.1 3.8 3.8l.5-.3a1.3 1.3 0 0 1 1.9.8l.1.5a2.8 2.8 0 0 0 5.4 0l.1-.5c.1-.4.4-.7.8-.8.4-.2.8-.2 1.1 0l.5.3c2.4 1.3 5.1-1.4 3.8-3.8l-.3-.5a1.3 1.3 0 0 1 .8-1.9l.5-.1a2.8 2.8 0 0 0 0-5.4l-.5-.1a1 1 0 0 1-.8-.8c-.2-.4-.2-.8 0-1.1l.3-.5c1.3-2.4-1.4-5.1-3.8-3.8l-.5.3a1.3 1.3 0 0 1-1.9-.8Zm-4 .4c.4-1.2 2.2-1.2 2.6 0l.1.5a2.8 2.8 0 0 0 4 1.7l.5-.2c1.1-.7 2.4.6 1.7 1.7l-.2.5a2.8 2.8 0 0 0 1.7 4l.5.1c1.2.4 1.2 2.2 0 2.6l-.5.1a2.8 2.8 0 0 0-1.7 4l.2.5c.7 1.1-.6 2.4-1.7 1.7l-.5-.2a2.8 2.8 0 0 0-4 1.7l-.1.5c-.4 1.2-2.2 1.2-2.6 0l-.1-.5a2.8 2.8 0 0 0-4-1.7l-.5.2C5 20.3 3.7 19 4.4 18l.2-.5a2.8 2.8 0 0 0-1.7-4l-.5-.1c-1.2-.4-1.2-2.2 0-2.6l.5-.1a2.8 2.8 0 0 0 1.7-4L4.4 6C3.7 5 5 3.7 6 4.4l.5.2a2.8 2.8 0 0 0 4-1.7Zm0 0"/></svg><span>Squeqta</span>'
        x.appendChild(y)
        x.setAttribute("data-key", "squeqta")
        x.setAttribute("data-path", "/squeqta")
        document.querySelector("#menu").querySelector("ul").appendChild(x)
    }
    if (window.location.hash == "#?page=/welcome") {
        if (dick == 0) {
            document.querySelector(".welcome").innerHTML = `
                <h1 class="alw_home-h1">Hello, there!</h1>
                <div class="alw_icon-links">
                    <a class="alw_icon-link" href="https://jacplus.com.au/">
                        <img src="${chrome.runtime.getURL("jac.png")}" class="alw_icon-link-icon">
                    </a>
                </div>
            `
        }
        dick = 1
    } else {
        dick = 0
    }
    if (window.location.hash == "#?page=/squeqta") {
        if (dick == 0) {
            document.querySelector("#title").innerHTML = "<span>Squeqta configuration</span>"
            document.querySelector("#main").innerHTML = `
                <iframe src="chrome-extention://mecopodlefmgmlhdokphkgelaopcdabk/popup.html" frameborder="0"></iframe>
            `
        }
        dick = 1
    } else {
        dick = 0
    }
})

// document.querySelector('[data-key=notices]').addEventListener('click', (e) => {
//     e.preventDefault()
// })
