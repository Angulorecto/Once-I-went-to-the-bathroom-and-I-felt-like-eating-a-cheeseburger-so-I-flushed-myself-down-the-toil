function getCookie(name) {
    const cookieArray = document.cookie.split('; ');
    for (const cookie of cookieArray) {
        const [cookieName, cookieValue] = cookie.split('=');
        if (cookieName === name) {
            return decodeURIComponent(cookieValue);
        }
    }
    return null; // Cookie not found
}

const bannedCookie = getCookie('banned');

if (bannedCookie) {
    // Perform actions based on the value of the cookie
    if (bannedCookie === 'true') {
        window.href = "banned.html";
    }
}
