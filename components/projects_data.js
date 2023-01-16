export default [
  {
    name:
      "Steam off",
    thumbnail: "https://github.com/williethewolf/SteamOff/raw/master/ReadMe_Assets/Screenshot%202022-09-06%20170516.png",
    description:
    <p>How many times have you opened Steam, just to endlessly and aimlessly browse your library just to end up not playing anything at all because you don't have enough time left?

      Take the indecisiveness out of the equation. Shake up you library to come across titles you've forgotten or didn't even know you had. Or just let STEAM Off take that weight off your shoulders and pick a game for you!
      
      Kick back, input your Steam Id64, pick random games until you find one you like or straight up open up a surprise.
      
      It's time to let off some STEAM©!</p>,
    url: "https://github.com/williethewolf/SteamOff/",
    get languageAPI(){this.url.slice(18)}
  },
  {
    name:
      "Plant Parenthood",
    thumbnail: "https://github.com/williethewolf/plant_parenthood/raw/master/main_app/static/imgs/screenshots/signin.png",
    description:
    <p>Plant Parenthood is an app that allows Plant Parent to organize, tend, learn, and share their favorite indoor plants.
    learn more in our <a href="https://docs.google.com/presentation/d/1w9EXJ40Zl0EQq0UZT1XZ10TUgkHsbPInjGRPclx0slQ">slide show.</a></p>,
    url: "https://github.com/williethewolf/plant_parenthood/",
    get languageAPI(){fetch(`https://api.github.com/repos${this.url.slice(18)}languages`)
                      .then(response => response.json())
                      
                      }
  },
  {
    name:
      "Kanboard",
    thumbnail: "https://github.com/williethewolf/Kanbas/raw/main/assets/Screenshot%202022-07-27%20004057.png",
    description:
    <p>A minimalistic Kanban based project manager full stack app.</p>,
    url: "https://github.com/williethewolf/kanbas/",
    get languageAPI(){fetch(`https://api.github.com/repos${this.url.slice(18)}languages`)
                      .then(response => response.json())
                      }
  },
  {
    name:
      "Pirates of The Silicon Sea",
    thumbnail: "https://github.com/williethewolf/Pirates-of-the-Silicon-Sea/raw/main/assets/Screenshots/ipad_Screenshot.png",
    description:
    <p>A multiplayer naval combat game for 2 players, playing locally, sharing the device. 
      Taking turns, the players attack each other until one of the ship's hull health is 0. Sails work as a buffer against damage with 30% chance of receiving damage. If sail's health reaches 0, all the damage will be absorbed by the hull.</p>,
    url: "https://github.com/williethewolf/Pirates-of-the-Silicon-Sea/",
    get languageAPI(){fetch(`https://api.github.com/repos${this.url.slice(18)}languages`)
                      .then(response => response.json())
                      }
  },
  {
    name:
      "Landscaper Tycoon",
    thumbnail: "https://raw.githubusercontent.com/williethewolf/Landscaper-clicker-minigame/main/assets/landscaperscreencap.png",
    description:
    <p>A tycoon type clicker browser mini game.</p>,
    url: "https://github.com/williethewolf/Landscaper-clicker-minigame/",
    get languageAPI(){fetch(`https://api.github.com/repos${this.url.slice(18)}languages`)
                      .then(response => response.json())
                      }
  },
  
];