/*
*есть способы вставить html проще - например gulp/webpack, но данный подход,
*  в будущем приложения позволит изолировать и его логику*/
let template = document.createElement('template')

fetch("./components/my-header/index.html").then(stream => stream.text()).then(e => template.innerHTML=e)
fetch("index.html").then(stream => stream.text()).then(text => define(text))
function define(html) {
	class UserCard extends HTMLElement {
		constructor() {
			super()
			// this.showInfo = true
			this.attachShadow({ mode: 'open' })
			this.shadowRoot.appendChild(template.content.cloneNode(true))
			// this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name')
			// this.shadowRoot.querySelector('img').src = this.getAttribute('avatar')
		}

		// toggleInfo() {
		// 	this.showInfo = !this.showInfo
		//
		// 	const info = this.shadowRoot.querySelector('.info')
		// 	const toggleBtn = this.shadowRoot.querySelector('#toggle-info')
		//
		// 	if (this.showInfo) {
		// 		info.style.display = 'block'
		// 		toggleBtn.innerText = 'Hide Info'
		// 	} else {
		// 		info.style.display = 'none'
		// 		toggleBtn.innerText = 'Show Info'
		// 	}
		// }

		// connectedCallback() {
		// 	this.shadowRoot.querySelector('#toggle-info').addEventListener('click', () => this.toggleInfo())
		// }
		//
		// disconnectedCallback() {
		// 	this.shadowRoot.querySelector('#toggle-info').removeEventListener()
		// }
	}

	customElements.define('my-footer', UserCard)
}
