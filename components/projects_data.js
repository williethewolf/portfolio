export function getLanguages(url) {
  return fetch(`https://api.github.com/repos${url.slice(18)}languages`)
      .then(response => response.json())
      .catch(error => console.log(error))
}

export default [
  {
    name:
      "Steam off",
    thumbnail: "https://github.com/williethewolf/SteamOff/raw/master/ReadMe_Assets/Screenshot%202022-09-06%20170516.png",
    description:
    <div>
      <p>
        How many times have you opened Steam, just to endlessly and aimlessly browse your library just to end up not playing anything at all because you don't have enough time left?
      </p>
      <br />
      <p>
        Take the indecisiveness out of the equation. Shake up you library to come across titles you've forgotten or didn't even know you had. Or just let STEAM Off take that weight off your shoulders and pick a game for you!
      </p> 
      <br />
      <p>
        Kick back, input your Steam Id64, pick random games until you find one you like or straight up open up a surprise.
      </p> 
      <br />
      <p>
        It's time to let off some STEAM©!
      </p>
    </div>,
    url: "https://github.com/williethewolf/SteamOff/",
    languages: getLanguages('https://github.com/williethewolf/SteamOff/')
  },
  {
    name:
      "Plant Parenthood",
    thumbnail: "https://github.com/williethewolf/plant_parenthood/raw/master/main_app/static/imgs/screenshots/signin.png",
    description:
    <div>
    <p>Plant Parenthood is an app that allows Plant Parent to organize, tend, learn, and share their favorite indoor plants.
    learn more in our <a href="https://docs.google.com/presentation/d/e/2PACX-1vSAaqhuh-KtbeN8il7ZPaVLY3Innj-9jPo4eSaOcjkO4ku9dFri1Atp74qm2s4i2xUgy_z2i-uA6nXU/pub?start=false&loop=false&delayms=5000" target="_blank" className="font-bold">slide show.</a>
    </p>
    </div>,
    url: "https://github.com/williethewolf/plant_parenthood/",
    languages: getLanguages("https://github.com/williethewolf/plant_parenthood/")
  },
  {
    name:
      "Kanboard",
    thumbnail: "https://github.com/williethewolf/Kanbas/raw/main/assets/Screenshot%202022-07-27%20004057.png",
    description:
    <p>A minimalistic Kanban based project manager full stack app.</p>,
    url: "https://github.com/williethewolf/kanbas/",
    languages: getLanguages("https://github.com/williethewolf/kanbas/")
  },
  {
    name:
      "Pirates of The Silicon Sea",
    thumbnail: "https://github.com/williethewolf/Pirates-of-the-Silicon-Sea/raw/main/assets/Screenshots/ipad_Screenshot.png",
    description:
    <div>
    <p>A multiplayer naval combat game for 2 players, playing locally, sharing the device.
    </p>
    <br />
    <p> 
      Taking turns, the players attack each other until one of the ship's hull health is 0. Sails work as a buffer against damage with 30% chance of receiving damage. If sail's health reaches 0, all the damage will be absorbed by the hull.
    </p>
    </div>,
    url: "https://github.com/williethewolf/Pirates-of-the-Silicon-Sea/",
    languages: getLanguages("https://github.com/williethewolf/Pirates-of-the-Silicon-Sea/")
  },
  {
    name:
      "Landscaper Tycoon",
    thumbnail: "https://raw.githubusercontent.com/williethewolf/Landscaper-clicker-minigame/main/assets/landscaperscreencap.png",
    description:
    <p>A tycoon type clicker browser mini game.</p>,
    url: "https://github.com/williethewolf/Landscaper-clicker-minigame/",
    languages: getLanguages("https://github.com/williethewolf/Landscaper-clicker-minigame/")
  },
  {
    name:
      "Willie 8A portfolio",
    thumbnail: "https://user-images.githubusercontent.com/74451917/213058037-869510e4-1793-4cc8-8519-e51aef5e6de5.png",
    description:
    <div>
    <p>This website/portfolio developed in React and NextJS</p>
    </div>,
    url: "https://github.com/williethewolf/portfolio/",
    languages: getLanguages("https://github.com/williethewolf/portfolio/")
  },
  
];