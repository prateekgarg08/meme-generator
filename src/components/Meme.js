import React, { useState } from 'react'
import memeData from "../memeData"

function Meme() {
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImg: "http://i.imgflip.com/1bij.jpg"
    });
    console.log(meme)
    const [allMemeImages, setAllMemeImages] = useState(memeData)
    function getNewImage() {

        setMeme((prevMeme) => {
            return {
                ...prevMeme,
                randomImg: allMemeImages.data.memes[Math.floor(Math.random() * allMemeImages.data.memes.length)].url
            }
        })
    }
    function handleChange(event) {
        const { name, value } = event.target
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name]: value
            }
        })
    }
    return (
        <div className='flex flex-col items-center'>

            <div className='flex flex-col w-full'>
                <div className='grid w-full grid-cols-2 gap-6'>
                    <input type="text"
                        className='p-2 rounded-lg border border-black grow-1 '
                        placeholder='Top Text'
                        onChange={handleChange}
                        name="topText"
                        value={meme.topText}
                    />
                    <input
                        type="text"
                        className='p-2 rounded-lg border border-black grow-1'
                        placeholder='Bottom Text'
                        onChange={handleChange}
                        name="bottomText"
                        value={meme.bottomText}
                    />
                </div>
                <button onClick={getNewImage} className='mt-5 w-full bg-gradient-to-r from-[#672280] to-[#A626D3] py-3 rounded-lg text-white'>Get a new meme image</button>
            </div>
            <div className='relative'>
                <img src={meme.randomImg} className="mt-6 max-w-full h-auto object-contain" alt="" />
                <h2 className='meme--text top-0 translate-y-[50%]'>{meme.topText}</h2>
                <h2 className='meme--text bottom-0'>{meme.bottomText}</h2>
            </div>
        </div>
    )
}

export default Meme