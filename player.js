{
    class AudioPlayer extends HTMLElement {
        constructor() {
            super();

            this.attachShadow({mode: 'open'});
            this.render();
        }

        render () {
            this.shadowRoot.innerHTML = `
            <audio src="audio.mp3" controls></audio>
            `;

            this.audio = this.shadowRoot.querySelector('audio');
        }
    }
    customElements.define('audio-player', AudioPlayer);

}

// 1. Create class for the component and extend HTMLElement
// 2. Create customElements and call in audio-player tag and AudioPlayer class
// 3. Call super into constructor inside the class
// 4. Initialize shadow root with attachShadow and set mode to open which allows it to show on browser
// 5. Render and call in shadow root property
// 6. Inside render, use innerHTML to call in audio code from index.html
// 7. Call render method into constructor
// 8. In render method, grab reference of every element needed to work with
