class PauseMenu {
    constructor({onComplete}) {
        this.onComplete = onComplete;
    }

    createElement() {
        this.element = document.createElement("div");
        this.element.classList.add("PauseMenu");
        this.element.innerHTML = (`
            <h2>Pause Menu<h2>
        `)
    }

    init(container) {
        this.createElement();
        this.keyboardMenu = new this.keyboardMenu({

        })
        this.keyboardMenu.init(this.element);
    }
}