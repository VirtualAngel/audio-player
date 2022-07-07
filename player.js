{
    class AudioPlayer extends HTMLElement {
        playing = false;

        constructor() {
            super();

            this.attachShadow({mode: 'open'});
            this.render();
            this.initializeAudio();
        }

        initializeAudio() {
            this.audioCtx = new AudioContext();

            this.track = this.audioCtx.createMediaElementSource(this.audio);

            this.track
                .connect(this.audioCtx.destination);
        }

       async togglePlay() {
            if (this.audioCtx === 'suspended') {
                this.audioCtx.resume();
            }

            if(this.playing) {
               return this.audio.pause();
            } 
           
            return this.audio.play ();
        }

        render () {
            this.shadowRoot.innerHTML = `
            <audio src="audio.mp3" controls></audio>
            <button class="play-btn" type="button"></button>
            `;

            this.audio = this.shadowRoot.querySelector('audio');
        }
    }
    customElements.define('audio-player', AudioPlayer);

}


            /////* Audio Player JS Steps *////

// 1. Create class for the component and extend HTMLElement
// 2. Create customElements and call in audio-player tag and AudioPlayer class
// 3. Call super into constructor inside the class
// 4. Initialize shadow root with attachShadow and set mode to open which allows it to show on browser
// 5. Render and call in shadow root property
// 6. Inside render, use innerHTML to call in audio code from index.html
// 7. Call render method into constructor
// 8. In render method, grab reference of every element needed to work with
// 9. Initialize the audio API and instantiate AudioContext
    // 9a. Allows for chaining of nodes like for controlling volume, panning audio and anlyzer, etc.
    // 9b. Works in three steps
        // 9i. Step one: create audio source by calling createMediaElementSource and passing the audio element off of the reference
        // 9ii. Step two: attach nodes (later)
        // 9iii. Step three: connect to the context destination by placing initializeAudio in the constructor

// 10. To play/pause, add a toggle button in the render method using html
    // 10a. To toggle the play state, create a new toggle method.
        // 10i. First, check if the contact status is suspended with if statement
        // 10ii. Then, resume it
    // 10b. Turn togglePlay into an async method for wait
    // 10c. Create new property to check is audio is playing above constructor
        // 10i. If playing, call the pause method
    








    