/** @format */

export default {
    computed: {
        welcomeBanner() {
            return `
 $$$$$\\                                 $$\\                                       
$$  __$$\\                               $$ |                                      
$$ /  \\__| $$$$$$\\  $$$$$$$\\          $$$$$$\\    $$$$$$\\   $$$$$$\\  $$$$$$\\$$$$\\  
$$$$\\      \\____$$\\ $$  __$$\\ $$$$$$\\ \\_$$  _|  $$  __$$\\ $$  __$$\\ $$  _$$  _$$\\ 
$$  _|     $$$$$$$ |$$ |  $$ |\\______|  $$ |    $$$$$$$$ |$$ |  \\__|$$ / $$ / $$ |
$$ |      $$  __$$ |$$ |  $$ |          $$ |$$\\ $$   ____|$$ |      $$ | $$ | $$ |
$$ |      \\$$$$$$$ |$$ |  $$ |          \\$$$$  |\\$$$$$$$\\ $$ |      $$ | $$ | $$ |
\\__|       \\_______|\\__|  \\__|           \\____/  \\_______|\\__|      \\__| \\__| \\__|


To get started, try typing 'help' and hit Enter!

Created by me! @irfancoder (GitHub). 
All rights reserved.
`
        },
        availableCommands() {
            return {
                welcome: this.welcomeBanner,
                whoami: `Hi there, I\'m Irfan! A frontend engineer based in Malaysia. 
Currently working at RunCloud. I\'d like to think I have a good taste for design but, designing UI is freaking tough!

Still working on my personal UI library called Mon UI. Its gonna be lit!`,
                'stack --fe': `Big fan of Vue! Experienced in using Vue with both MVC framework such as (Laravel & AdonisJs) and as standalone SPA (Vue Cli & Vite).
Also very familiar with React ecosystem, much of the concepts can be translated across the JS frameworks`,
                'stack --be': `Experienced in using Laravel and its ecosystem in professional setting. NodeJs for personal and hobby builds!`,
                resume: () => {
                    window.open('https://drive.google.com/file/d/1Jxljp2J2_Sz_ujnkHgJL0RIpEnKIDNQV/view?usp=sharing')
                    return 'Opening the resume.... \n\n*If it fails to open a new tab, copy-paste the link: https://drive.google.com/file/d/1Jxljp2J2_Sz_ujnkHgJL0RIpEnKIDNQV/view?usp=sharing'
                },
                language: `
- JavaScript / Typescript
- PHP
- Rust (soon)`,
                tools: `CSS Framework:
- TailwindCSS
- Sass

Bundler:
- Webpack 4 & 5
- Vite (Rollup) 

NPM Manager:
- Yarn

Version Control:
- Git

IDE:
- VSCode`,
                experience: `Key Highlights:
- Created and currently maintaining (2) private UI libraries for RunCloud projects. 
- Contributed in the revamp development of their panel dashboard into the new design system. Released in 2021.
- Actively involved in the frontend development of workspace & agency feature for RunCloud line of products.
- Conducted user research by interviewing actual users as part of the Design Sprint research team.`,
                location: "From Seremban yo. That's in Negeri Sembilan, Malaysia!",
                speak: 'Fluent Malay & English',
                os: 'Mac for work, Ubuntu for personal',
                pcsetup: 'Ryzen 5 3600 & RTX 2060 Super. Dope combo for its time!',
                github: 'https://github.com/irfancoder',
                linkedin: 'https://www.linkedin.com/in/irfanismail96/',
                email: 'irfan.ismail96@gmail.com',
                'askme --terminal': `The Fan-term is short for 'irfan's terminal' & also a wordplay for, 'phantom'

Is this an actual terminal? Nope. Can it work as a terminal? Hell yes!
On the frontend, this web terminal is built with simple HTML / CSS and a sprinkle of JS (using Vue here!). 

To make it work with the terminal of a hosted server, we will need to setup a websocket on a backend app. Your backend app works as a proxy user, 
which receives command from the client app, process the command and returns the output of executed command.

And the web terminal is good to go! Atm, I don't have any plans to turn the web terminal into a public library, 
but you might be able to convince me otherwise. Do let me know!`,
                'askme --web3': "Yeah, converting to become a Rustacean, to build smart contracts. I'm on NEAR Protocol. Idk why I picked this chain honestly. \nRegardless, a dope community to be in. If you are looking for a smart contract dev / frontend, hook me up!",
                'askme --mon-ui': `The goal of Mon-UI is to be a super flexible UI Kit that can work with any popular CSS frameworks, such as TailwindCSS. 
This library is an antithesis to existing UI frameworks like MUI or AntDesign, which hardly leaves developers any room for styling customization. 

Perfect for developers who wants full control over the styling without worrying about the component's logic`,
                'askme --pastime': 'Watching Youtube. But not the trash content. My favorite ones are personal finance, web & tech development related: Millenial Money gang, Fireship.io, The Primagen, Hussein Nasser ',
                'askme --funfact': 'I still follow One Piece, anime only. The pirate dream still lives!',
                'askme --regret': `I think my biggest regrest is not taking the Computer Science major for my bachelors degree. 
I took programming class in highschool for my International Baccalaureate (IB). 

I love it and my teacher, Mr Castaneda is awesome. But, I got severely burned out to the point, I questioned myself, 

'Am I going to debug code for the rest of my life?'

That did not end well. Took up Mechanical Engineering instead. Oh well, we move on XD`,
                tip: 'Tip: Use the up-down arrow key [↑][↓] to toggle your command history',
                rickroll: () => {
                    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
                    return 'You asked for it, my fren XD'
                },
                spook: () => {
                    alert('Boo!')
                    return 'You have been spooked! Come again.'
                }
            }
        }
    }
}
