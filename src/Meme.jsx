import React, { useState,useEffect } from 'react'

const Meme = () => {
 
  const [meme, setMeme] = useState({topText: "",
  bottomText:"",
  randomImage :"http://i.imgflip.com/1bij.jpg"
})

const [allMemeImages, setAllMemeImages] = useState([]);


useEffect(()=>{

   fetch("https://api.imgflip.com/get_memes")
   .then(res=> res.json())
   .then(data=> setAllMemeImages(data.data.memes) )
},[])




//console.log(allMemeImages)

  const handleClick =()=>{
    
       
      
      const randomNumber = Math.floor(Math.random() * allMemeImages.length)
       const  url = allMemeImages[randomNumber].url
       //console.log(url);
       setMeme((prev)=> ({...prev, randomImage:url}) )
      
      
         }


         const handleChange = (event)=>{

          const{name,value} =event.target

          setMeme(prevstate=>({
            ...prevstate,
            [name]:value
          }))

         }
       
   
  return (
    <main> 
      < div className='form'>
       
       
        <input className='form-input' placeholder="Top text" type="text" name="topText" value={meme.topText}  onChange={handleChange} />
        
        
        <input className='form-input' placeholder='Bottom text' name="bottomText" type="text"  value={meme.bottomText}  onChange={handleChange} />
      
         <button className='form-button' onClick={handleClick} >Get a new meme image 🖼</button>
      
      
      </div>
      <div className='image'>
       
      <img src={meme.randomImage} id='meme-image' className='meme--image' alt="" /> 
        <h1 className='text top'>{meme.topText}</h1>
        <h1 className='text bottom'>{meme.bottomText}</h1>
      </div> 
    </main>
  )
}
 
export default Meme
