const headerPage = document.querySelector("header");
export function ThemeMode () {

    this.createThemeButton = function () {

        let themeButton = document.createElement("button");
        themeButton.innerHTML = "Dark mode";

        themeButton.addEventListener("click", () => {
            document.body.classList.toggle('dark');
            if (document.body.className === 'dark') {
                themeButton.innerHTML = "Light mode";
                themeButton.style.background = "#f1f1f1";
                themeButton.style.color = "#333333"
            }
            else {
                themeButton.innerHTML = "Dark Mode";
                themeButton.style.background = "#333333";
                themeButton.style.color = "#f1f1f1"
            }
        })

        headerPage.append(themeButton);
    }

}