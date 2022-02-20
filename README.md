## Inspiration

Our team’s vision is to bring climate change advocacy to the world of cryptocurrencies, Web3, and NFTs.

Earth has already hit the threshold where irreversible climate damage has been done. At the same time, we are excited to see how decentralized technologies impact the world for good! Currently, these two visions collide. Crypto transactions are simply unsustainable, emission heavy, and expensive. We would like to bridge these visions with CryptoCarbon! Our software makes it easy to understand how to combat climate change while still pursuing normalizing decentralized cryptocurrencies.

We acknowledge this will be a life-long process. Hopefully, this will be the gateway for many newcomers who are willing to join the fight against climate change and decentralized technology stigmas!

## What it does

CryptoCarbon is a web application that educates users, who are entering the ‘crypto’ world, on how their carbon footprint is changing, and how to offset it! Users will be provided with statistics that will help them put into perspective the gravity of their carbon emissions, and be given the opportunity to partner with projects who combat climate change.

## How we built it

Our web application was built using **React.js**. To make a multi-page application, we utilized **react-router-dom**. To publish to the web, we used **Terraform** to make our site with scalable. All pages of the site were first designed using **Figma** and **Canva**, before translating it to React. We utilized an open API and created our own JSON to estimate the average KgCO2 released to the air per transaction.

## Challenges we ran into

Unfortunately, the API we were planning to use didn’t allow HTTP requests. By now we were too far along into the application to pivot majorly, given our tech stack. We resorted to finding data and an equation to calculate the carbon footprint per transaction (given a value). This proved to be way too complicated since a lot of factors contribute to crypto emissions such as difficulty of hash puzzle, efficiency of algorithms to solve the puzzle, hardware used to mine, electricity cost, location, etc. By now we were very discouraged, but after some more research we found out it wasn’t too difficult to estimate the cost per transaction. We used this to calculate the amount of emissions different cryptocurrencies give-out.

## Accomplishments that we're proud of

Our team was very dynamically determined and intellectually flexible. Frankly, our initial plan wasn’t close to our final product. However, regardless of how much we pivoted from idea to idea, we never compromised our mission, to bridge reducing climate change and normalizing decentralized tech.  
  
It’s also VERY cool how 4 people from completely different backgrounds came together to build a web application with a common vision, __3 of which have never attended a hackathon before__!

## What we learned  

The team was able to gain new skills and experiences from each other since we all had different strong points whether research, programming, app creation, etc. The team learned that when there are collaborative efforts there is more creativity involved in any project. Although most of the team members never attended a hackathon ( 3/4 ) we still managed to get through with great resoluteness.  

## What's next for Crypto Carbon

Eventually, we would like to implement a more in-depth function to calculate the carbon footprint, given the amount and location of a transaction. These can further be used to calculate the money needed to offset that carbon footprint.

Once we have an accurate calculator, we would love to implement a chrome extension or a service that links with CoinBase to track the user’s carbon footprint from crypto transactions. The chrome extension would show small stats/graphs/tables to contextualize the emissions and offsets, and it would have the option of automatically donating to offset projects so the user doesn't have to think about it.