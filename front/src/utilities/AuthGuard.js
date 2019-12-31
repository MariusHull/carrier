export default function guard (fallback) {
    if (!(localStorage.getItem("jwtToken"))) {
        if (fallback) {window.location.pathname = fallback;}
        window.location.pathname = "/";
      }
}
