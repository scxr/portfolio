import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/retro.css';
import ProjectCard from './components/ProjectCard';
import ProjectInfo from './components/ProjectInfo';

const projects = [
  {
    id: 'flower-classifier',
    title: 'Flower Classifier',
    description: 'A flower classifier built with Python and PyTorch, using a custom-trained ReLU neural network to classify flowers into one of 102 categories.',
    technologies: ['Python', 'PyTorch', 'Numpy'],
    githubUrl: 'https://github.com/scxr/int2',
    demoUrl: 'https://github.com/scxr/int2/blob/main/main.ipynb',
    infoContent: `# Flower Classifier

## Overview
A flower classifier built with Python and PyTorch, using a custom-trained ReLU neural network to classify flowers into one of 102 categories.

## Features
- Custom-trained ReLU neural network
- PyTorch backend
- Flask backend

## Technical Details
The classifier uses PyTorch for training and evaluation. The model is trained on Flowers102 dataset. A custom-trained and built from scratch ReLU neural network is used to classify flowers into one of 102 categories after custom data loading and processing.

A block of the neural network is shown below:
\`\`\`python
class Block(nn.Module):
    def __init__(self, in_channels, out_channels, stride=1, downsample=None):
        super(Block, self).__init__()
        self.conv1 = nn.Sequential(
            nn.Conv2d(in_channels=in_channels, out_channels=out_channels, kernel_size=3, stride=stride, padding=1, bias=False),
            nn.BatchNorm2d(out_channels),
            nn.ReLU()
        )
        self.conv2 = nn.Sequential(
            nn.Conv2d(in_channels=out_channels, out_channels=out_channels, kernel_size=3, stride=1, padding=1),
            nn.BatchNorm2d(out_channels)
        )
        self.downsample = downsample
        self.relu = nn.ReLU()
        self.out_channels = out_channels
    
    def forward(self, x):
        residual = x
        out = self.conv1(x)
        out = self.conv2(out)
        if self.downsample:
            residual = self.downsample(x)
        out += residual
        out = self.relu(out)
        return out
\`\`\`

And the entire neural network is shown below:
\`\`\`python
class Rn(nn.Module):
    def __init__(self, block, layers, num_classes=102):
        super(Rn, self).__init__()
        self.in_planes = 64
        self.conv1 = nn.Sequential(
            nn.Conv2d(in_channels=3, out_channels=64, kernel_size=7, stride=2, padding=3, bias=False),
            nn.BatchNorm2d(64),
            nn.ReLU()
        )
        self.maxpool = nn.MaxPool2d(kernel_size=3, stride=2, padding=1)
        self.layer0 = self._make_layer(block, 64, layers[0], stride=1)
        self.layer1 = self._make_layer(block, 128, layers[1], stride=2)
        self.layer2 = self._make_layer(block, 256, layers[2], stride=2)
        self.layer3 = self._make_layer(block, 512, layers[3], stride=2)
        self.avgpool = nn.AdaptiveAvgPool2d((1, 1))
        self.fc = nn.Linear(512, num_classes)
    
    def _make_layer(self, block, planes, blocks, stride=1):
        downsample = None
        if stride != 1 or self.in_planes != planes:
            downsample = nn.Sequential(
                nn.Conv2d(in_channels=self.in_planes, out_channels=planes, kernel_size=1, stride=stride, bias=False),
                nn.BatchNorm2d(planes)
            )
        layers = []
        layers.append(block(self.in_planes, planes, stride, downsample))
        self.in_planes = planes
        for i in range(1, blocks):
            layers.append(block(self.in_planes, planes))
        return nn.Sequential(*layers)

    def forward(self, x):
        x = self.conv1(x)
        x = self.maxpool(x)
        x = self.layer0(x)
        x = self.layer1(x)
        x = self.layer2(x)
        x = self.layer3(x)
        x = self.avgpool(x)
        x = x.view(x.size(0),-1)
        x = self.fc(x)
        return x
\`\`\`

## Future Plans
As this was a project for a university module, I did not implement any future plans for this project.`
  },
  {
    id: 'vybe-bot',
    title: 'Vybe Bot',
    description: 'A Telegram bot built with Typescript and Telegraf, using the Telegram API to create a bot that can be used to get information about Solana Tokens/Programs/Wallets.',
    technologies: ['Typescript', 'Telegraf', "Bun"],
    githubUrl: 'https://github.com/scxr/vybebot',
    demoUrl: 'https://t.me/redactedhackathon_bot',
    infoContent: `# Vybe Bot

## Overview
A Telegram bot built with Typescript and Telegraf, using the Telegram API to create a bot that can be used to get information about Solana Tokens/Programs/Wallets from the Vybe Network. This was built as part of the Redacted Hackathon 2025 (https://www.helius.dev/blog/redacted-hackathon).

## Features
- NFT Information for a wallet
- Token information for a wallet 
- Program information 
- Network forensics with ability to search for programs by instruction implementation.


## Technical Details
The bot uses the Vybe Network API to get information about the Solana blockchain. The bot was built using Bun for the runtime with telegraf for the Telegram API.

The entire command list is shown below:
\`\`\`
hello - Just a hello message :)
nft - Get nft balances of a wallet
pnl - Get the pnl of a wallet
token_balances - Get the token balances of a wallet
nft_holders - Get the holders of an NFT
chart - Generate a chart for a token
program_details - Get a general overview of a program
program_tvl - Get the total value locked on a program
program_rankings - Get top 10 programs on solana
program_dau - Get the top 10 daily active users for a program
program_type - Get the category/subcategory and daily active users of a program
program_ts - Time based info for a program
trades - Get the trades for a token with a bunch of filters
transfers - Get the most recent transfers on a token
timeseries - Get a bunch of time based info for a token
ix_names - Find programs that implement a specific instruction
details - Get token details!
holders - Get the top holders of a token
\`\`\`

An example of the bot in action is shown below:

![Vybe Bot](https://imgur.com/HNEEAEe.png)


## Future Plans
- More analytics and metrics
- More information about tokens and programs
- More features!`
  },
  {
    id: 'bubble-maps',
    title: 'Bubble Maps',
    description: 'A telegram bot for crypto bubble maps.',
    technologies: ['Typescript', 'Telegraf', "Bun"],
    githubUrl: 'https://github.com/scxr/bubblemaps/',
    demoUrl: 'https://t.me/rdctdbubblemaps_bot',
    infoContent: `# Bubble Maps

## Overview
A telegram bot for crypto bubble maps.

## What is it 
This bot allows users to create bubble maps for a crypto token, this shows all the top holders of a token and if they have interacted with any other address, to detect users who hold multiple tokens accross multiple wallets.

## Technical Details
The bot uses the Bubblemaps.io API to get data about the holders and then renders a text based representation, it then also has a html page which simply implements the telegram embed page api to display an IFrame of the bubble map.

The main functions for the text based bubble map are shown below:
\`\`\`javascript
function calculateConnections(mapData: MapData) {
    let links = mapData.links
    let nodes = mapData.nodes
    let top5 = mapData.nodes.slice(0, 5)
    let top5Tokens = top5.map(node => node.address)
    let connections: { [key: string]: {address: string, percentage: number, is_contract: boolean | null, is_exchange: boolean | null}[] } = {}
    for (const link of links) {
        let source = nodes[link.source]
        let target = nodes[link.target]
        if (source && target) {
            if (top5Tokens.includes(source.address)) {
                if (connections[source.address] ) {
                    connections[source.address].push({address: target.address, percentage: target.percentage, is_contract: target.is_contract, is_exchange: target.is_exchange})
                } else {
                    connections[source.address] = [{address: target.address, percentage: target.percentage, is_contract: target.is_contract, is_exchange: target.is_exchange}]
                }
            } else if (top5Tokens.includes(target.address)) {
                if (connections[target.address] ) {
                    connections[target.address].push({address: source.address, percentage: source.percentage, is_contract: source.is_contract, is_exchange: source.is_exchange })
                } else {
                    connections[target.address] = [{address: source.address, percentage: source.percentage, is_contract: source.is_contract, is_exchange: source.is_exchange}]
                }
            }
        }
    }
    return connections
}

function buildTop5Holders(mapData: MapData) {
    const connections = calculateConnections(mapData);
    return mapData.nodes.slice(0, 5).map((node, index) => {
        const holderText = \`\${index + 1}. <a href=\"https://solscan.io/address/\${node.address}\"\>\${node.is_contract ? \"📜\": node.is_exchange ? \"🏦\" : \"🥷\"} \${node.address.slice(0, 4)}...\${node.address.slice(-4)}</a> holds <code>\${Number(node.percentage).toFixed(2)}%</code>\`;
        
        const nodeConnections = connections[node.address];

        let connectionsText = '';
        if (nodeConnections && nodeConnections.length > 0) {
            connectionsText = "\n" + nodeConnections
                .map(conn => \`\\t\\t\\t\\t• <a href="https://solscan.io/address/\${conn.address}"> \${conn.is_contract ? "📜": conn.is_exchange ? "🏦" : "🥷"} \${conn.address.slice(0, 4)}...\${conn.address.slice(-4)}</a> <code>\${Number(conn.percentage).toFixed(2)}%</code>\`)
                .join('\n');
        }
        
        return holderText + connectionsText;
    }).join('\n\n');
}
\`\`\`

## Future Plans
- Add more information about the token
- Add more information about the holders
- Add more features!`
  },
  {
    id: 'twitter_on_chain',
    title: 'On-Chain Twitter',
    description: 'A twitter clone built on the Monad-Testnet blockchain.',
    technologies: ["NextJS", "viem", "ElysiaJs", "Envio"],
    githubUrl: 'https://github.com/scxr/monadhackathon-monorepo',
    demoUrl: 'https://github.com/scxr/monadhackathon-monorepo/blob/main/readme.md',
    infoContent: `# Twitter On-Chain

## Overview
This was a project for the Monad Hackathon 2025, I built a social media platform that was entirely on-chain, all interactions between users were on-chain and all data was stored on-chain.

## Technical Details
The project was built using 

Bun (Run time)
Typescript (Language)
Nextjs (Front-end framework with backend calls)
Elysiajs (Back-end framework)
Envio (Contract events indexer)
Solidity (Smart contract code)

For the backend Bun is used along with ElysiaJs for maximum speed and response times, on average (with user caching) we see sub 50ms response times even on complex queries. Envio helps a lot with the speed too, instead of querying directly from the contract which would take a few hundred ms we can just use GQL queries which helps the faster queries.

There is far more detail in the repo, feel free to check it out!

`
  },
  {
    id: 'portfolio',
    title: 'This Website',
    description: 'This website is built with React, Typescript, and Vite.',
    technologies: ["React", "Typescript", "Vite"],
    githubUrl: 'https://github.com/scxr/portfolio',
    demoUrl: 'https://github.com/scxr/portfolio/blob/main/readme.md',
    infoContent: `

## Overview
This website is built with React, Typescript, and Vite. It is a portfolio website that displays my projects and information about me. I also plan to use this for blog posts and other content in the future.


`
  },
  {
    id: "win95_site",
    title: "Windows 95 Emulator Site",
    description: "A website that emulates the Windows 95 interface.",
    technologies: ["NextJS", "CSS"],
    githubUrl: 'https://github.com/scxr/win95',
    demoUrl: 'http://win95-scxr1.vercel.app/',
    infoContent: `

## Overview
This is a website that emulates the Windows 95 interface. It is built with NextJS and CSS.

## Technical Details
This website was built as part of an ARG I was planning on doing but never got around to it. It is built with NextJS and CSS. It has multiple features like a start menu, desktop icons, a task bar and more. The windows are draggable and such, and you are able to open multiple windows at once.

## Features
- Start menu
- Desktop icons
- Task bar
- Multiple windows at once
- Draggable windows
- Shutdown button

## Future Plans
- Add more features
- Add more windows
- Add more icons
- Add more animations
- Add more styles
- Maybe complete the ARG


  `


  }
];

const MainContent = () => {
  return (
    <div className="retro-container">
      <header>
        <h1 className="retro-title retro-glitch">DEVELOPER PORTFOLIO</h1>
        <nav className="retro-nav">
          <a href="#about">ABOUT</a>
          <a href="#projects">PROJECTS</a>
          <a href="#contact">CONTACT</a>
        </nav>
      </header>

      <main className="retro-scroll">
        <section id="about" style={{ marginBottom: '4rem' }}>
          <h2 className="retro-title">ABOUT ME</h2>
          <div className="retro-card">
            <p>
              Welcome to my portfolio! I am Charlie, a software developer from the UK with an interest in data engineering, backend development and web3 technology. I am currently working as a freelance web3 developer and participating in relevant hackathons to this field. I have a BEng in Computer Science achieving a 2:1. I am proficient in Python, JavaScript, TypeScript, SQL, NoSQL, and have experience with Java, Cpp, and GoLang. I am familiar with the following libraries and frameworks:
            </p>
            <ul>
              <li>Python: Pandas, NumPy, Matplotlib, PyTorch, Flask, FastAPI</li>
              <li>JS & TS: React, Nextjs, ExpressJs, ElysiaJS, web3js, solana/web3js, viem, ethers, telegraf, discord.js</li>
              <li>Databases: MongoDB, Redis, SQLite</li>
            </ul>
            
            
          </div>
        </section>

        <section id="projects">
          <h2 className="retro-title">PROJECTS</h2>
          <div className="retro-grid">
            {projects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </section>

        <section id="contact" style={{ marginTop: '4rem' }}>
          <h2 className="retro-title">CONTACT</h2>
          <div className="retro-card">
            <p>Feel free to reach out to me through any of these channels:</p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
              <button className="retro-button" onClick={() => window.location.href = 'mailto:cswilson326@gmail.com'}>EMAIL</button>
              <button className="retro-button" onClick={() => window.location.href = 'https://github.com/scxr'}>GITHUB</button>
              <button className="retro-button" onClick={() => window.location.href = 'https://www.linkedin.com/in/charlie-scxr/'}>LINKEDIN</button>
            </div>
          </div>
        </section>
      </main>

      <footer style={{ textAlign: 'center', marginTop: '4rem', padding: '2rem' }}>
        <p>© 2024 RETRO PORTFOLIO | MADE WITH ❤️ AND PIXELS</p>
      </footer>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/project/:id" element={<ProjectInfo projects={projects} />} />
      </Routes>
    </Router>
  );
};

export default App;
