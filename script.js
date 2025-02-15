document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".eligibility-item");
    let index = 0;

    function showNextItem() {
        items.forEach(item => {
            item.style.opacity = "0";
            item.style.transform = "scale(0.9)";
        });

        items[index].style.opacity = "1";
        items[index].style.transform = "scale(1)";
        index = (index + 1) % items.length;

        setTimeout(showNextItem, 2000); // Change item every 2 seconds
    }

    showNextItem();

    // Set current year in footer
    document.getElementById("current-year").textContent = new Date().getFullYear();

    // Form validation and submission
    document.getElementById("application-form").addEventListener("submit", function (e) {
        e.preventDefault();
        
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const country = document.getElementById("country").value.trim();

        if (name && email && phone && country) {
            console.log("Form submitted:", { name, email, phone, country });
            alert("Thank you for your application! We will contact you soon.");
            this.reset();
        } else {
            alert("Please fill in all fields.");
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
});

// Google Analytics
(function () {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID";
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() {
        dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "G-F6FP6SFP6T");
})();

// Facebook Pixel
(function (f, b, e, v, n, t, s) {
    if (f.fbq) return;
    n = f.fbq = function () {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = !0;
    n.version = "2.0";
    n.queue = [];
    t = b.createElement(e);
    t.async = !0;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
})(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");

fbq("init", "PIXEL_ID");    // here my facebook account is to new to generate pixel id so i have not added it
fbq("track", "PageView");
