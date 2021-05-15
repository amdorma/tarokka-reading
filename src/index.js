import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { render } from 'react-dom'
import { useSprings, animated, interpolate } from 'react-spring/web'
import { useGesture } from 'react-use-gesture'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

const tarrokDeck = [
    // Cards from Gale Force Nine Store, in partnership with Wizards of the Coast.
    // Recolored via AI and Photoshop
    'https://github.com/amdorma/tarokka-reading/blob/master/public/images/cards/abjurer.png?raw=true',
    'https://github.com/amdorma/tarokka-reading/blob/master/public/images/cards/anarchist.png?raw=true',
    'https://github.com/amdorma/tarokka-reading/blob/master/public/images/cards/artifact.png?raw=true',
    'https://github.com/amdorma/tarokka-reading/blob/master/public/images/cards/avenger.png?raw=true',
    'https://github.com/amdorma/tarokka-reading/blob/master/public/images/cards/beast.png?raw=true',
    'https://github.com/amdorma/tarokka-reading/blob/master/public/images/cards/beggar.png?raw=true',
    'https://github.com/amdorma/tarokka-reading/blob/master/public/images/cards/berserker.png?raw=true',
    'https://github.com/amdorma/tarokka-reading/blob/master/public/images/cards/bishop.png?raw=true',
    'https://github.com/amdorma/tarokka-reading/blob/master/public/images/cards/broken-one.png?raw=true',
    'https://github.com/amdorma/tarokka-reading/blob/master/public/images/cards/charlatan.png?raw=true',
    'https://github.com/amdorma/tarokka-reading/blob/master/public/images/cards/conjurer.png?raw=true',
    'https://github.com/amdorma/tarokka-reading/blob/master/public/images/cards/darklord.png?raw=true',
    'https://github.com/amdorma/tarokka-reading/blob/master/public/images/cards/dictator.png?raw=true',
    'https://github.com/amdorma/tarokka-reading/blob/master/public/images/cards/diviner.png?raw=true',
    'https://github.com/amdorma/tarokka-reading/blob/master/public/images/cards/donjon.png?raw=true',
    'https://github.com/amdorma/tarokka-reading/blob/master/public/images/cards/druid.png?raw=true',
    'https://github.com/amdorma/tarokka-reading/blob/master/public/images/cards/elementalist.png?raw=true',
    'https://github.com/amdorma/tarokka-reading/blob/master/public/images/cards/enchanter.png?raw=true',
    'https://github.com/amdorma/tarokka-reading/blob/master/public/images/cards/evoker.png?raw=true',
    'https://github.com/amdorma/tarokka-reading/blob/master/public/images/cards/executioner.png?raw=true',
    'https://github.com/amdorma/tarokka-reading/blob/master/public/images/cards/ghost.png?raw=true',
    'https://github.com/amdorma/tarokka-reading/blob/master/public/images/cards/guild-member.png?raw=true',
    'https://github.com/amdorma/tarokka-reading/blob/master/public/images/cards/healer.png?raw=true',
    'https://github.com/amdorma/tarokka-reading/blob/master/public/images/cards/hooded-one.png?raw=true',
    'https://github.com/amdorma/tarokka-reading/blob/master/public/images/cards/horseman.png?raw=true',
    'https://github.com/amdorma/tarokka-reading/blob/master/public/images/cards/illusionist.png?raw=true',
    'https://github.com/amdorma/tarokka-reading/blob/master/public/images/cards/innocent.png?raw=true',
    'https://github.com/amdorma/tarokka-reading/blob/master/public/images/cards/marionette.png?raw=true',
    'https://github.com/amdorma/tarokka-reading/blob/master/public/images/cards/mercenary.png?raw=true',
    'https://github.com/amdorma/tarokka-reading/blob/master/public/images/cards/merchant.png?raw=true',
    'https://github.com/amdorma/tarokka-reading/blob/master/public/images/cards/miser.png?raw=true',
    'https://github.com/amdorma/tarokka-reading/blob/master/public/images/cards/missionary.png?raw=true',
    'https://github.com/amdorma/tarokka-reading/blob/master/public/images/cards/mists.png?raw=true',
    'https://github.com/amdorma/tarokka-reading/blob/master/public/images/cards/monk.png?raw=true',
    'https://github.com/amdorma/tarokka-reading/blob/master/public/images/cards/myrmidon.png?raw=true',
    'https://github.com/amdorma/tarokka-reading/blob/master/public/images/cards/necromancer.png?raw=true',
    'https://github.com/amdorma/tarokka-reading/blob/master/public/images/cards/paladin.png?raw=true',
    'https://github.com/amdorma/tarokka-reading/blob/master/public/images/cards/philanthropist.png?raw=true',
    'https://github.com/amdorma/tarokka-reading/blob/master/public/images/cards/priest.png?raw=true',
    'https://github.com/amdorma/tarokka-reading/blob/master/public/images/cards/raven.png?raw=true',
    'https://github.com/amdorma/tarokka-reading/blob/master/public/images/cards/rogue.png?raw=true',
    'https://github.com/amdorma/tarokka-reading/blob/master/public/images/cards/seer.png?raw=true',
    'https://github.com/amdorma/tarokka-reading/blob/master/public/images/cards/shepherd.png?raw=true',
    'https://github.com/amdorma/tarokka-reading/blob/master/public/images/cards/soldier.png?raw=true',
    'https://github.com/amdorma/tarokka-reading/blob/master/public/images/cards/swashbuckler.png?raw=true',
    'https://github.com/amdorma/tarokka-reading/blob/master/public/images/cards/tax-collector.png?raw=true',
    'https://github.com/amdorma/tarokka-reading/blob/master/public/images/cards/tempter.png?raw=true',
    'https://github.com/amdorma/tarokka-reading/blob/master/public/images/cards/thief.png?raw=true',
    'https://github.com/amdorma/tarokka-reading/blob/master/public/images/cards/torturer.png?raw=true',
    'https://github.com/amdorma/tarokka-reading/blob/master/public/images/cards/trader.png?raw=true',
    'https://github.com/amdorma/tarokka-reading/blob/master/public/images/cards/traitor.png?raw=true',
    'https://github.com/amdorma/tarokka-reading/blob/master/public/images/cards/transmuter.png?raw=true',
    'https://github.com/amdorma/tarokka-reading/blob/master/public/images/cards/warrior.png?raw=true',
    'https://github.com/amdorma/tarokka-reading/blob/master/public/images/cards/wizard.png?raw=true',
]

// These two are just helpers, they curate spring data, values that are later being interpolated into css
const to = i => ({ x: 0, y: i * 4, scale: 1, rot: -5 + Math.random() * 10, delay: i * 400 })
const from = i => ({ x: 1120, rot: 0, scale: 2.5, y: -11000, zIndex: '0' })
// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r, s) => `perspective(1800px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`

/**
 * Returns an array of five random items from the specified array.
 * (Randomize array element order in-place. Using Durstenfeld shuffle algorithm.)
 */
function Select5Cards(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[array[i], array[j]] = [array[j], array[i]]
    }
    return array.splice(0, 5)
}

function Deck() {
    const cards = Select5Cards(tarrokDeck)
    const [gone] = useState(() => new Set()) // The set flags all the cards that are flicked out
    const [props, set] = useSprings(cards.length, i => ({ ...to(i), from: from(i) })) // Create a bunch of springs using the helpers above
    // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
    const bind = useGesture(({ args: [index], down, delta: [xDelta, yDelta], distance, direction: [xDir, yDir], velocity }) => {
        const trigger = velocity > 1 // If you flick hard enough it should trigger the card to fly out
        const leftOrRight = xDir < 0 ? -1 : 1 // Direction should either point left or right
        if (!down && trigger) gone.add(index) // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
        set(i => {
            if (index !== i) return // We're only interested in changing spring-data for the current spring
            const isGone = gone.has(index)
            const x = isGone ? (20 + window.innerWidth) * xDir : down ? xDelta : 0 // When a card is gone it flys out left or right, otherwise goes back to zero
            const y = isGone ? (20 + window.innerWidth) * yDir : down ? yDelta : 0 // When a card is gone it flys out up or down, otherwise goes back to zero
            const rot = xDelta / 10 + (isGone ? leftOrRight * 20 * velocity : 0) // How much the card tilts, flicking it harder makes it rotate faster
            const scale = down ? 1.3 : 1 // Active cards lift up a bit (slight enlargement / zoom in)
            const zIndex = down ? 1 : 0 // Active cards should be on top (have a higher z-index)
            return { x, y, rot, scale, delay: undefined, config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 }, zIndex }
        })
        if (!down && gone.size === cards.length) setTimeout(() => gone.clear() || set(i => to(i)), 600)
    })
    // Now we're just mapping the animated values to our view, that's it.
    return props.map(({ x, y, rot, scale, zIndex }, i) => (
        <animated.div
            key={i}
            style={{
                transform: interpolate([x, y], (x, y) => `translate3d(${x + (window.innerWidth / 100) * i - window.innerWidth / 100}px,${y}px,0)`),
                zIndex
            }}>
            {
                // This is the card itself, we're binding our gesture to it (and injecting its index so we know which is which)
            }
            <animated.div {...bind(i)} style={{ transform: interpolate([rot, scale], trans), backgroundImage: `url(${cards[i]})` }} />
        </animated.div>
    ))
}

render(<Deck />, document.getElementById('root'))


const element = <h1>Tarokka Reading</h1>;
ReactDOM.render(element, document.getElementById('head'));
