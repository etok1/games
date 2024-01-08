const products = [
  {
    img: "https://www.innersloth.com/wp-content/uploads/2023/12/out_on_holiday_FINAL_2023-257x154.png",
    category: "among-us",
    date: "December 24, 2023",
    heading: "🎄 New Year presents",
    info: "This New Year, Among Us players can expect a delightful  array of festive skins to spruce up their Crewmates.  Dive into the holiday spirit by donning  the iconic red suit and hat to transform into a cheerful Santa, ready to spread joy across the spacecraft.",
  },
  {
    img: "https://img.championat.com/s/735x490/news/big/i/i/najden-sposob-kak-igrat-v-brawl-stars-iz-rossii-bez-vpn_16824440711888973803.jpg",
    category: "brawl-stars",
    date: "November 2, 2023",
    heading: "🥇 Team Up for Intense Battles",
    info: "Experience synergy like never before with the arrival of Dynamic Duo Mode in Brawl Stars. Form powerful pairs, strategize with your partner, and dominate the arena with coordinated attacks.",
  },
  {
    img: "https://img.tapimg.net/market/images/54afda87e3214bbec1f77401cd109d83.jpg?imageView2/2/w/1080/h/1080/q/80/format/jpg/interlace/1/ignore-error/1",
    category: "dig-2-china",
    date: "April 5, 2024",
    heading: "🎊 Treasure Caverns",
    info: "Delve into newly discovered caverns, each with its unique set of puzzles, traps, and treasures. Navigate through intricate mazes and use your wit to overcome obstacles.",
  },
  {
    img: "https://www.gematsu.com/wp-content/uploads/2023/09/Among-Us-Map_09-14-23.jpg",
    category: "among-us",
    date: "February 14, 2024",
    heading: "🗺️ New Maps Await Crewmates!",
    info: "Embark on thrilling journeys across fresh landscapes as Among Us unveils a series of new maps, promising exciting tasks, devious impostors, and uncharted territories for crewmates to navigate.",
  },
  {
    img: "https://clan.cloudflare.steamstatic.com/images/33836086/12c05226388297f8cc415a0fef9f14a280e6f3da.png",
    category: "among-us",
    date: "January 23, 2024",
    heading: "📍 New Achievements Unlocked",
    info: "Sharpen your skills and embrace new challenges with the introduction of achievements in Among Us. From masterful deception to completing tasks at warp speed, there's an achievement for every Crewmate.",
  },
  {
    img: "https://static1-br.millenium.gg/articles/5/13/76/5/@/150879-buzz-article_cover_bd-1.jpg",
    category: "brawl-stars",
    date: "January 12, 2024",
    heading: "👻Unleash Chaos with the Mysterious Maverick",
    info: "Meet the newest addition to the Brawl Stars roster – Maverick! This mysterious Brawler brings a set of unpredictable abilities to the arena, changing the dynamics of every match.",
  },
  {
    img: "https://www.innersloth.com/wp-content/uploads/2021/06/screenshot-img14@2x.png",
    category: "dig-2-china",
    date: "February 24, 2024",
    heading: "⛑️New Factions Rise in Underground Wars",
    info: "The underground world of Dig 2 China is about to witness a seismic shift as new factions rise to power. Engage in underground wars, align with powerful allies, and conquer the depths.",
  },
  {
    img: "https://www.innersloth.com/wp-content/uploads/2023/12/out_on_holiday_FINAL_2023-257x154.png",
    category: "dig-2-china",
    date: "February 22, 2024",
    heading: "🛠️Forge Your Ultimate Tools",
    info: "Crafting gets a major overhaul in Dig 2 China's latest update. Master the art of forging as you create powerful tools, uncover rare materials, and customize your digging experience like never before.",
  },
  {
    img: "https://brawlstars.b-cdn.net/wp-content/uploads/2022/05/ocellus-services-02-ruffstarpower-details-copy.jpg",
    category: "brawl-stars",
    date: "March 17 , 2024",
    heading: "🐉 Forge Your Legacy in the Competitive Scene",
    info: "Dive into the world of competitive gaming as Brawl Stars officially embraces eSports. Join tournaments, climb the ranks, and etch your name in Brawl Stars history as a formidable Brawler.",
  },
  {
    img: "https://i.ytimg.com/vi/U16b-uHtBiw/maxresdefault.jpg",
    category: "innersloth",
    date: "January 20, 2024",
    heading: "🥳Cheers to Another Year",
    info: "Innersloth, the creative force behind gaming sensations like Among Us and The Henry Stickmin Collection, recently marked another milestone with a joyous celebration of its birthday. The gaming community joined in the festivities, making it a day to remember for fans worldwide.",
  },
  {
    img: "https://img.artpal.com/872122/1-21-7-13-1-52-24m.jpg",
    category: "innersloth",
    date: "March 9, 2024",
    heading: "❤️ Cross-Platform Integration",
    info: "Innersloth aims to break down barriers by enhancing cross-platform compatibility. Soon, players will seamlessly connect with friends regardless of their gaming platform, fostering a more inclusive and interconnected gaming experience.",
  },
  {
    img: "https://www.lavanguardia.com/andro4all/hero/2020/11/Dig2China.jpg?width=1200",
    category: "dig-2-china",
    date: "April 29, 2024",
    heading: "🌟Unearths Mythical Realms in Latest Expansion",
    info: "Embark on a journey beyond the surface as Dig 2 China unveils a mystical expansion. Delve into mythical realms, uncover ancient treasures, and face new challenges that redefine the art of digging.",
  },
  {
    img: "https://app.yipee.cc/wp-content/uploads/2021/05/0581b9d1cae0764189d9f6247103d5dd.jpg",
    category: "among-us",
    date: "May 30, 2024",
    heading: "🔥Limited-Time Cosmetics and Festivities Await!",
    info: "Step right up to the Brawl Stars Carnival! Enjoy limited-time cosmetics, festive decorations, and mini-games that add a touch of carnival magic to the Brawl Stars universe.",
  },
  {
    img: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/9c3e19160503601.63b594b84d006.jpg",
    category: "fan-art",
    date: "December 31, 2023",
    heading: "🎨 Celebrating Creativity Across Fandoms",
    info: "Dive into the mesmerizing world of fan art as artists from various fandoms showcase their talents. From stunning digital illustrations to handcrafted masterpieces, the Fan Art Extravaganza is a celebration of creativity.",
  },
];

const creators = [
  {
    img: "https://www.innersloth.com/wp-content/uploads/2021/07/Forest-206x206.png",
    name: "Forest W.",
    media: {
      twitter: "https://twitter.com/forte_bass",
      star: "",
      twitch: "",
      youtube: "",
      instagram: "",
    },

    info: {
      first:
        "Hello, I’m your friendly neighborhood recluse/programmer! I also handle the business end of things at Innersloth.",
      second:
        "When I’m not programming (basically always), I really enjoy bouldering.",
      third:
        "I don’t post much on the internet, but I’m always open to questions about what we’re doing and how it’s done.",
    },
  },
  {
    img: "https://www.innersloth.com/wp-content/uploads/2021/07/Marcus-206x206.png",
    name: "Marcus B.",
    media: {
      twitter: "https://twitter.com/puffballsunited",
      star: "https://puffballsunited.newgrounds.com/",
      twitch: "https://www.twitch.tv/puffballs_united",
      youtube: "",
      instagram: "",
    },

    info: {
      first:
        "Hello! I’m an artist, animator and game designer here at Innersloth.",
      second:
        "When You might know me as Puffballs United, the creator of Henry Stickmin Series! I worked on Among Us and recently finished the Henry Stickmin Collection. I also worked on Dig2China, and misc cancelled games ;)",
      third:
        "I’ve been wanting to make games since I was 8. Technology grew to the point that it was actually possible for me and not just a dream. I play a lot of games on the side.",
    },
  },
  {
    img: "https://www.innersloth.com/wp-content/uploads/2021/07/Amy-206x206.png",
    name: "Amy L.",
    media: {
      twitter: "https://twitter.com/aemuuu",
      star: "",
      twitch: "",
      youtube: "",
      instagram: "",
    },

    info: {
      first:
        "Heyo there! I’m the other artist here at Innersloth. Also general task-doer for whatever else needs done!",
      second:
        "I worked on Among Us, and am currently working on developing merchandise and future Innersloth games!",
      third:
        "In my free time I enjoy photography, more drawing, taking naps, and hanging out with friends.",
    },
  },
  {
    img: "https://www.innersloth.com/wp-content/uploads/2021/07/Victoria-206x206.png",
    name: "Victoria T.",
    media: {
      twitter: "https://twitter.com/thevtran",
      star: "starctoriatran.com/",
      twitch: "",
      youtube: "",
      instagram: "",
    },

    info: {
      first:
        "Hey! I’m the Community Director at Innersloth and I make chaotic shenanigans happen.",
      second:
        "I’ve worked on games like Unpacking, Boyfriend Dungeon, Dwarf Fortress, Pupperazzi, and more! I love creating kinder, more sustainable community spaces, which I write about on my  star. In my spare time, I help organize Wholesome Games!",
      third:
        "Otherwise I do industry talks, write articles, drink bubble tea, and have a severe lack of interesting facts about myself.",
    },
  },
  {
    img: "https://www.innersloth.com/wp-content/uploads/2021/07/adriel-206x206.png",
    name: "Adriel W.",
    media: {
      twitter: "https://twitter.com/MsMinotaur",
      star: "",
      twitch: "",
      youtube: "",
      instagram: "",
    },

    info: {
      first: "Hiya, I’m lead Unity programmer at Innersloth!",
      second:
        "Before joining Innersloth, I was a programmer on the upcoming game We Are OFK, and worked on a number of other yet-to-be announced indie games. Outside of professional game development, I’ve participated in a ton of game jams, and once even spent an entire year making a new game every week. In addition to all of this, I also run Train Jam – an annual game jam that takes place on a train!",
      third:
        "In my spare time, I like to pet my dog, Jellybean, and my two cats, Phoenix and Mizu.",
    },
  },
  {
    img: "https://www.innersloth.com/wp-content/uploads/2021/08/Garymate_Both_Versions-copyw-206x198.png",
    name: "Gary P.",
    media: {
      twitter: "https://twitter.com/supergarydeluxe",
      star: "",
      twitch: "",
      youtube: "",
      instagram: "",
    },

    info: {
      first: "Hello! I’m one of the Unity Programmers here at Innersloth.",
      second:
        "I’ve been developing games since 2012 and released my first commercial game, Super Daryl Deluxe, in 2018 to a raving horde of a dozen or so fans. When I’m not sleeping I play a lot of games, lift a lot of weights, and take a lot of naps. Send coffee thx.",
    },
  },
  {
    img: "https://www.innersloth.com/wp-content/uploads/2021/08/hannakoamongybutclear-206x206.png",
    name: "Hannako L.",
    media: {
      twitter: "https://twitter.com/thisishannako",
      star: "https://www.thisishannako.com/",
      twitch: "",
      youtube: "",
      instagram: "",
    },

    info: {
      first: "Hello, this is Hannako and I’m an artist at Innersloth!",
      second:
        "I made a lot of merch at Dual Wield Studio and now I make a lot of merch here. I also draw a funny picture for the people. I draw comics when I can and got nominated once. I love pins and fighting wildlife in my yard.",
    },
  },
  {
    img: "https://www.innersloth.com/wp-content/uploads/2021/08/AU_Jake_Avatar_Drawing-206x271.png",
    name: "Jake C.",
    media: {
      twitter: "https://twitter.com/JakeClarkDude",
      star: "",
      twitch: "",
      youtube: "",
      instagram: "",
    },

    info: {
      first: "Jake is a traditionally trained animator from Canada.",
      second:
        "He grew up in the forests of BC where he cultivated a love for both games and nature. He has worked on several animated TV shows, as well as the indie game Cuphead.",
    },
  },
  {
    img: "https://www.innersloth.com/wp-content/uploads/2021/09/image0-2-206x206.png",
    name: "Krys L.",
    media: {
      twitter: "https://twitter.com/pseudomachine",
      star: "",
      twitch: "",
      youtube: "",
      instagram: "",
    },

    info: {
      first: "Howdy! I’m an Associate Producer at Innersloth!",
      second:
        "Once a desk jockey in the wild world of higher education, I’m now vibing in the wilder world of tasks and roadmaps and retrospectives (oh my). I have a degree in psychology, have done localization editing for games, manga, and light novels, and was an artist once upon a time.",
      third:
        "When I’m not stomping around The Skeld, I’m having existential conversations with my cats, cooking, writing, running my static in a certain critically acclaimed MMO, and watching hundreds of hours of hockey. (GO RANGERS! GO BRUINS! YES, I CONTAIN MULTITUDES!)",
    },
  },
  {
    img: "https://www.innersloth.com/wp-content/uploads/2021/10/DrRobotstorflush-206x212.png",
    name: "Mik M.",
    media: {
      twitter: "https://twitter.com/drrobotmik",
      star: "",
      twitch: "",
      youtube: "https://www.youtube.com/c/drrobotmik",
      instagram: "https://www.instagram.com/dr.robotmik/",
    },

    info: {
      first: "Hello, I am a Senior Backend Programmer at Innersloth!",
      second:
        "After completing my training as a chemist, I joined the games industry as a network engineer. Since, I’ve worked on multiplayer games and virtual music experiences. On the side, I develop indie games focused on STEM edutainment.",
      third:
        "Outside of games, I am a street dancer known as Dr. Robotmik, specializing in robot and animation dance. I also break. I love to travel, learn languages, and eat delicious food.",
    },
  },
  {
    img: "https://www.innersloth.com/wp-content/uploads/2021/11/dasd-206x206.png",
    name: "Kristi A.",
    media: {
      twitter: "https://twitter.com/CinderSlays",
      star: "",
      twitch: "",
      youtube: "",
      instagram: "",
    },

    info: {
      first: "Ayooo! I’m the Producer at Innersloth.",
      second:
        "Armed with a degree in Veterinary Medicine, I promptly decided to disappoint my parents by joining the game industry. A few previous titles I’ve worked on include Atomicrops, Bad North, Kingdom Two Crowns, and Star Renegades.",
      third:
        "When I’m not pretending to be an extrovert online, you can find me making spreadsheets for the game I’m currently playing or laying on the floor like a weirdo.",
    },
  },
  {
    img: "https://www.innersloth.com/wp-content/uploads/2023/06/MicrosoftTeams-image-65.png",
    name: "Tony C.",
    media: {
      twitter: "https://twitter.com/tonycoculuzzi",
      star: "",
      twitch: "",
      youtube: "",
      instagram: "",
    },

    info: {
      first: "Hi I’m Tony and I enjoy long walks on.. Oh not that kind of bio?",
      second:
        "I’m a programmer and generalist game developer who likes to dabble in all kinds of tech stuff. While I studied traditional and 3D Animation in school, I’ve been working in games as a programmer for over 10 years now.",
      third:
        "I’ve worked on a few games like Cuphead, Florence, and a lot of others I can’t talk about! When I’m not programming, I enjoy long walks on the bea.. Oh, still not that kind of bio?",
    },
  },
  {
    img: "https://www.innersloth.com/wp-content/uploads/2022/05/MicrosoftTeams-image-56-206x206.png",
    name: "Sarah W.",
    media: {
      twitter: "https://twitter.com/BirbWrangler",
      star: "",
      twitch: "",
      youtube: "",
      instagram: "",
    },

    info: {
      first: "Eyyyy it me.",
      second:
        "I do code stuff. Games I’ve worked on: Just Shapes and Beats, Infernax, and a couple of other projects that I can’t tell you about unless you have top secret clearance but they’re really cool I swear wait where are you going",
      third:
        "I like to spend my free time coming up with way too many game concepts than I could ever feasibly make in my life. And playing automation/logistics games. And petting my birbs.",
    },
  },
  {
    img: "https://www.innersloth.com/wp-content/uploads/2022/05/MicrosoftTeams-image-57-206x206.png",
    name: "Chris “Dors” D.",
    media: {
      twitter: "https://twitter.com/Dorseus",
      star: "",
      twitch: "",
      youtube: "",
      instagram: "",
    },

    info: {
      first: "Hello there! I’m the Community Manager at Innersloth!",
      second:
        "Prior to joining the team, I worked in a helpdesk for hospitals across the US and being a go to problem solver and trainer.",
      third:
        "In my free time I stream, play video games, build models, Gunpla, or will be in my karate or sword classes. Outside of these things, I enjoy chilling with my fiancee and our void cat Darwin.",
    },
  },
  {
    img: "https://www.innersloth.com/wp-content/uploads/2022/05/MicrosoftTeams-image-58-206x184.png",
    name: "Antonio G.",
    media: {
      twitter: "https://twitter.com/CinderSlays",
      star: "",
      twitch: "",
      youtube: "",
      instagram: "",
    },

    info: {
      first: "Hello! Most people know me as Toño or Tony.",
      second:
        "I’m a Unity programmer with experience in game direction and designing. Worked in the past in Pato Box and Remnants of the Rift.",
      third:
        "Fan of many genres of games, roguelikes, JRPG, card games, fighting games, RTS, MMOs and the list could go on and on, currently obsessed with Slay the Spire and Dicey Dungeons.",
    },
  },
  {
    img: "https://www.innersloth.com/wp-content/uploads/2022/09/AmongUs_DaveT-206x206.png",
    name: "Dave T.",
    media: {
      twitter: "https://twitter.com/CinderSlays",
      star: "https://www.davetamayo.com/",
      twitch: "",
      youtube: "",
      instagram: "",
    },

    info: {
      first: "Hello hello! I’m a Game Designer at Innersloth.",
      second:
        "My first career trajectory was the wild world of astrophysics until I was veered off that path by my love of coding. One thing led to another and now I’m a full time game designer. I’ve worked on games for all sorts of platforms, audiences, and goals. When I’m not making games, I like cooking, reading, and hanging out with my dog.",
      third: "",
    },
  },
  {
    img: "https://www.innersloth.com/wp-content/uploads/2022/09/fs-206x206.png",
    name: "Lucy M.",
    media: {
      twitter: "",
      star: "",
      twitch: "",
      youtube: "",
      instagram: "",
    },

    info: {
      first:
        "Hi there! I’m the user interface (UI/UX) crewmate on the team – so I make buttons and organise info. Mmm, buttons.",
      second:
        "In my spare time, I enjoy avant-garde floristry, admiring how geese look, motorcycles and collecting swords. Currently an aspirational dog owner.",
      third: "",
    },
  },
  {
    img: "https://www.innersloth.com/wp-content/uploads/2023/01/MicrosoftTeams-image-32222312323123-1-206x206.png",
    name: "Brad M.  ",
    media: {
      twitter: "",
      star: "",
      twitch: "",
      youtube: "",
      instagram: "",
    },

    info: {
      first: "Hello! I’m a backend programmer at Innersloth!",
      second:
        "My love of programming and gaming started when I would spend time with my grandfather messing around on an old VIC-20. Before joining Innersloth, my programming career dragged me from one side of Canada to the other, and then back again. Like Bilbo Baggins. Only with fewer trolls and more PHP.",
      third:
        "In my spare time I enjoy cooking, going to galleries, museums, and gigs, traveling, making faces at my wife, and being tackled by my dog. Oh, and sometimes I play video games.",
    },
  },
  {
    img: "https://www.innersloth.com/wp-content/uploads/2023/03/AmongusRaquel-206x285.png",
    name: "Raquel L.",
    media: {
      twitter: "",
      star: "",
      twitch: "",
      youtube: "",
      instagram: "",
    },

    info: {
      first:
        "Have something that needs doing? Let’s make it happen. I’m the Studio Manager here at Innersloth.",
      second:
        "Along with a background in business management, I also have extensive experience and education surrounding physical and mental health. My professional mission is to continue to prove that a successful, productive and organized business starts with a happy, healthy and engaged workforce.",
      third:
        "Outside of work I’m a cat mom who loves weightlifting, obsessing over nostalgia, strolling the convention floor and, of course, playing video games.",
    },
  },
  {
    img: "https://www.innersloth.com/wp-content/uploads/2023/04/crewmate_nick-206x206.png",
    name: "Nick S.",
    media: {
      twitter: "",
      star: "",
      twitch: "",
      youtube: "",
      instagram: "",
    },

    info: {
      first:
        "Hi there, I’m Nick, a networked gameplay programmer at Innersloth!",
      second:
        "I love to make stuff: specifically multiplayer indie games, but I’ve worked on all sorts of internet-connected software.",
      third:
        "In my spare time I dabble in art, game design, and programming side projects. I also enjoy adding games to my library, knowing I will never have the time to play them all, but pretending I will. When I do find time to play, I really enjoy the simulation/strategy and deck builder genres.",
    },
  },
  {
    img: "https://www.innersloth.com/wp-content/uploads/2023/05/MicrosoftTeams-image-57-206x206.png",
    name: "Jemma S.",
    media: {
      twitter: "https://twitter.com/bisonfisticuffs",
      star: "https://jemma3.artstation.com/",
      twitch: "",
      youtube: "",
      instagram: "",
    },

    info: {
      first: "Hi, I’m an artist at Innersloth!",
      second:
        "I’ve made art for video and board games, as well as tons of comics. I like drawing weird animals and tormenting my friends with cursed ideas. When not drawing, I read too many books. I have two pet tomato plants, I love them, they are my babies. (I’m going to eat them.)",
      third: "",
    },
  },
  {
    img: "https://www.innersloth.com/wp-content/uploads/2023/05/dsf-206x212.png",
    name: "Luna F.",
    media: {
      twitter: "https://twitter.com/lunafok_",
      star: "",
      twitch: "",
      youtube: "",
      instagram: "",
    },

    info: {
      first:
        "Hello! I’m one of the Networked Gameplay Programmers at Innersloth! I was previously at Silverstring Media, and a lifetime ago I worked on “The Cloud”. I love working on games that make you cry or games that make you want to fight your friends. Maybe I’ll make a game that does both someday!",
      second:
        "In my spare time, I like making things out of wood, making things out of yarn, and teaching people how to play mahjong. I also play a lot of fighting games and mains are Baiken and Akuma.",
      third: "",
    },
  },
  {
    img: "https://www.innersloth.com/wp-content/uploads/2023/05/amongJelly-206x206.png",
    name: "Auren S.",
    media: {
      twitter: "",
      star: "",
      twitch: "",
      youtube: "",
      instagram: "",
    },

    info: {
      first: "I’m Auren, a Unity programmer at Innersloth!",
      second:
        "I’ve been making games for about 15 years, since ye olde tyme of Flash-based web games. I’ve made a bunch of tiny games, but also one bigger one called The Floor is Jelly. I like games that blur the lines between videogame and weirdo visual art experiment.",
      third:
        "In my spare time, you can find me making music or falling off a skateboard.",
    },
  },
  {
    img: "https://www.innersloth.com/wp-content/uploads/2023/05/MicrosoftTeams-image-60-206x206.png",
    name: "Dan T.",
    media: {
      twitter: "https://twitter.com/supardanil",
      star: "",
      twitch: "",
      youtube: "",
      instagram: "https://www.instagram.com/dantan.animation/",
    },

    info: {
      first: "Hey, it’s Dan! I’m a Senior Artist ’round here at Innersloth!",
      second:
        "I’m a lifelong artist and have spent most of my career trying to create things that’ll make people laugh– and I don’t plan on stopping any time soon! My most notable past-work has been on YouTube, making the animated series ‘Cox n Crendor Animated.’",
      third:
        "When I’m not scribbling away, I love to play music and dance the ol’ Lindy Hop! 5, 6, 7, 8!",
    },
  },
  {
    img: "https://www.innersloth.com/wp-content/uploads/2023/09/jadebio-206x206.png",
    name: "Jade L.",
    media: {
      twitter: "https://twitter.com/jalunderscore",
      star: "",
      twitch: "",
      youtube: "",
      instagram: "",
    },

    info: {
      first: "Hi! I’m a Unity programmer at Innersloth.",
      second:
        "I have a background in a lil bit of everything related to game development and most recently made a game called PomoFarm with my spouse.",
      third:
        "Outside of work, I’m known to play and defend the worst video games you can imagine. If a game has a licensed property attached, there’s a good chance I’ve beaten it. I also make some pretty good bagels (for eating) and I gasp in awe whenever I see a duck.",
    },
  },
  {
    img: "https://www.innersloth.com/wp-content/uploads/2023/10/IMG_2351-206x206.png",
    name: "Swati M.",
    media: {
      twitter: "https://twitter.com/makkurataichou",
      star: "https://www.swatimallya.com/",
      twitch: "",
      youtube: "",
      instagram: "",
    },

    info: {
      first: "Hi, I’m Swati! I’m a Unity programmer at Innersloth.",
      second:
        "I like making things that are full of Feelings, just like me! I’m a strong advocate for sharing one’s lived experiences with the world, and I try to do a little bit of that with my games, writing, and art.",
      third:
        "In my spare time you’ll find me tracking down new local fried chicken and boba spots, writing deeply personal songs just for fun, and watching my favorite cartoons over and over again.",
    },
  },
  {
    img: "https://www.innersloth.com/wp-content/uploads/2023/11/jona-barcelo-avatar-206x206.png",
    name: "Jona B.",
    media: {
      twitter: "",
      star: "",
      twitch: "",
      youtube: "",
      instagram: "",
    },

    info: {
      first:
        "Hello! It’s true, your eyes don’t deceive you! I am not a wild bear but am in fact a Technical Producer. I cut my teeth with the likes of Riot Games and Reality Crisis, and am now hanging with the Sloths.",
      second:
        "For work, I sleuth technical blockers and assist the crew with charting the road ahead. For life, I go on daily adventures with the actual wild animals that I call children. For balance, I like to cozy up with a book, poke around game worlds, or spend an afternoon writing words or music. Occasionally, I will write words to music.",
      third: "",
    },
  },
  {
    img: "https://www.innersloth.com/wp-content/uploads/2023/12/Mike_Crewmate_New1-206x206.png",
    name: "Mike B.",
    media: {
      twitter: "",
      star: "",
      twitch: "",
      youtube: "",
      instagram: "",
    },

    info: {
      first: "Hey there! I’m Mike, and I run Player Support at Innersloth.",
      second:
        "I like helping. Before starting to help people play and make games, I was a consultant and teacher helping to make healthcare more accessible for everyone, and I even went back to school to learn how to help other helpers help better. Yeah, I like helping.",
      third:
        "When not helping, I spend my time rolling around with my dogs, painting pictures of stuff in my city, and sometimes even playing video games.",
    },
  },
];
