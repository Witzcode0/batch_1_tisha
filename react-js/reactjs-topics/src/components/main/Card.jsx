import React, { Component } from 'react'

class Card extends Component {
    constructor(props) {
        super(props)

        this.state = {
            button: {
                padding: "10px",
                borderRadius: "5px",
                margin: "5px",
                color: "white",
                backgroundColor: "black"
            }
        }
    }
    render() {
        return (
            <div>
                <article class="card" aria-label="Song card: Uptown Funk">
                    <div class="art" role="img" aria-label="Album cover placeholder">
                        {/* Replace the src with a real album cover URL if you have one  */}
                        <img src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder" alt="album cover" />
                        <button class="play-btn" title="Play">
                            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"></path></svg>
                        </button>
                    </div>


                    <div class="meta">
                        <div>
                            <div class="title">Uptown Funk</div>
                            <div class="artist">Mark Ronson ft. Bruno Mars</div>
                        </div>


                        <div class="tags" aria-hidden="false">
                            <span class="tag">Album: Uptown Special</span>
                            <span class="tag">Genre: Funk-pop</span>
                        </div>


                        <div class="details">
                            <div class="left">
                                <small>Released</small>
                                <div>November 10, 2014</div>
                            </div>


                            <div class="right">
                                <div class="pill">Duration: 4:30</div>
                                <div class="pill">ID: 5</div>
                            </div>
                        </div>
                    </div>
                </article>
                <button style={this.state.button}>Music</button>
            </div>
        )
    }
}

export default Card;