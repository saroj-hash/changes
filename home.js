import "bootstrap/dist/css/bootstrap.min.css"
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowDropDownRoundedIcon from '@material-ui/icons/ArrowDropDownRounded';
import Tooltip from '@material-ui/core/Tooltip';
import Badge from 'react-bootstrap/Badge'
import Blogs from "./blogs"
import Footercomp from "./footercomp"
import { Link } from "react-router-dom"
import React, { Fragment, Component } from "react"
import Container from "react-bootstrap/TabContainer"
import wolf8 from "../assets/wolf8.jpg"
export default class Home extends Component {
    state = {
        blogs: false,
        index: 0,
        Quotes: [
            {
                quote: '"If you live among the wolves, you have to act like a wolf."',
                by: "Nikita Khruschev"
            },
            {
                quote: '"Wolves and women are relational by nature, inquiring, possessed of great endurance and strength. They are deeply intuitive, intensely concerned with their young, their mate and their pack. Yet both have been hounded, harassed and falsely imputed to be devouring and devious, overly aggressive, of less value than those who are their detractors."',
                by: "Clarisa Pinkola Estes"
            },
            {
                quote: `"We have enforced a Darwinian process on wolves, turning them into the shy and elusive animals they've become. They didn't have that fear of us 30,000 years ago. We didn't have gunpowder; we had rocks. Wolves would have seen us as lunch, and we were weak and slow and tasty."`,
                by: "W Bruce Cameron"
            },
            {
                quote: `"When I was young, I asked my priest how you could get to Heaven and still protect yourself from all the evil in the world. He told me what God said to his children. You are sheep among wolves. Be wise as serpents, yet innocent as doves."`,
                by: "Casey Affleck"
            },
            {
                quote: `"Fear isn't so difficult to understand. After all, weren't we all frightened as children? Nothing has changed since Little Red Riding Hood faced the big bad wolf. What frightens us today is exactly the same sort of thing that frightened us yesterday. It's just a different wolf. This fright complex is rooted in every individual."`,
                by: "Alfred Hitchcock"
            },
            {
                quote: `"A man might befriend a wolf, even break a wolf, but no man could truly tame a wolf."`,
                by: "George R.R. Martin, A Dance with Dragons"
            },
            {
                quote: `"To run with the wolf was to run in the shadows, the dark ray of life, survival and instinct. A fierceness that was both proud and lonely, a tearing, a howling, a hunger and thirst. Blessed are they who hunger and thirst. A strength that would die fighting, kicking, screaming, that wouldn't stop until the last breath had been wrung from its body. The will to take one's place in the world. To say 'I am here.' To say 'I am."`,
                by: "O. R. Melling"
            },
            {
                quote: ` "Freedom lies in being bold." `,
                by: "Robert Frost"
            },
            // {
            //     quote : ` " The only thing that makes a dream impossible to achieve: the fear of failure."  `,
            //     by    : " Paulo Coelho"
            // },
            // {
            //     qoute : ` " Be brave. Take risks. Nothing can substitute experience."  `,
            //     by    : "Paulo Coelho"
            // },
            //     {
            //         qoute : ` "We are all goanna die. Just the question's how." `,
            //         by    : "Point Break"
            //    },
            //    {
            //         qoute : `"Remember, today is the tomorrow you worried about yesterday."  `,
            //         by    : "Dale Carnegie"
            //    },
            //    {
            //         qoute : `"To err is human; to admit it, superhuman." `,
            //         by    : "Doug Larson"
            //    },
            {
                quote: ` "Haters are just confused admirers because they can't figure out the reason why everyone loves you." `,
                by: "Jeffree Star"
            },
            {
                quote: `"You can't be happy unless you're unhappy sometimes."`,
                by: "Lauren Oliver"
            },
            {
                quote: `"To have great happiness you have to have great pain and unhappiness – otherwise, how would you know when you're happy?"`,
                by: "Leslie Caron"
            },
            {
                quote: ` "Ups and downs. Victories and defeats. Sadness and happiness. That's the best kind of life." `,
                by: " Maxime Lagacé"
            },
            {
                quote: ` "If you want others to be happy, practice compassion. If you want to be happy, practice compassion." `,
                by: "Dalai Lama "
            },
            {
                quote: ` "Wanting to be someone else is a waste of who you are."`,
                by: "Kurt Cobain"
            },
            {
                quote: `"Do what you can, with what you have, where you are." `,
                by: "Theodore Roosevelt"
            },
            {
                quote: ` "The biggest adventure you can ever take is to live the life of your dreams. " `,
                by: "Oprah Winfrey"
            },
            {
                quote: `"Behind every successful person lies a pack of haters." `,
                by: " Eminem"
            },
            {
                quote: ` " Intuition is seeing with the soul. " `,
                by: "Dean Koontz"
            },
            {
                quote: ` " When you reach the end of what you should know, you will be at the beginning of what you should sense. " `,
                by: " Kahlil Gibrán, Sand and Foam"
            },
            {
                quote: ` "Intuition is always right in at least two important ways;
                          It is always in response to something.
                        it always has your best interest at heart. " `,
                by: "Gavin De Becker, The Gift of Fear: Survival Signals That Protect Us "
            },
            {
                quote: ` " At times you have to leave the city of your comfort and go into the wilderness of your intuition. 
                           What you'll discover will be wonderful. What you'll discover is yourself. " `,
                by: "Alan Alda "
            },
            {
                quote: ` "Intuition is like reading a word without having to spell it out. 
                          A child can't do that because it has had so little experience. 
                          A grown-up person knows the word because they've seen it often before. " `,
                by: " Agatha Christie"
            },
            {
                quote: ` " Practice listening to your intuition, your inner voice; ask questions; be curious; see what you see; 
                        hear what you hear; and then act upon what you know to be true. 
                        These intuitive powers were given to your soul at birth." `,
                by: " Clarissa Pinkola Esté "
            },
            {
                quote: ` "Be the change that you wish to see in the world." `,
                by: "Mahatma Gandhi "
            },
            {
                quote: ` " It is never too late to be what you might have been." `,
                by: "George Eliot "
            },

            {
                quote: ` " To the well-organized mind, death is but the next great adventure." `,
                by: "J.K. Rowling "
            },
            {
                quote: ` "Life isn't about finding yourself. Life is about creating yourself. " `,
                by: "George Bernard Shaw "
            },
            {
                quote: ` " Success is not final, failure is not fatal: it is the courage to continue that counts." `,
                by: "Winston S. Churchill "
            },
            {
                quote: ` "And, when you want something, all the universe conspires in helping you to achieve it. " `,
                by: "Paulo Coelho "
            },
            {
                quote: ` "You can't live your life for other people. 
                    You've got to do what's right for you, even if it hurts some people you love. " `,
                by: "Nicholas Sparks "
            },
            {
                quote: ` "I can't give you a sure-fire formula for success,
                 but I can give you a formula for failure: try to please everybody all the time. " `,
                by: " "
            },
            {
                quote: ` " Always do what you are afraid to do." `,
                by: "Ralph Waldo Emerson "
            },
            {
                quote: ` "Pain is inevitable. Suffering is optional. " `,
                by: "Haruki murakami "
            },
            {
                quote: ` "Our lives begin to end the day we become silent about things that matter " `,
                by: " Martin Luther King Jr."
            },
            {
                quote: ` " It is so hard to leave—until you leave. And then it is the easiest goddamned thing in the world." `,
                by: "John Green "
            },
            {
                quote: ` " Do not go where the path may lead, go instead where there is no path and leave a trail." `,
                by: " Ralph Waldo Emerson"
            },
            {
                quote: ` "I can be changed by what happens to me. But I refuse to be reduced by it. " `,
                by: " Maya Angelou"
            },
            {
                quote: ` " None but ourselves can free our minds." `,
                by: " Bob Marley"
            },
            {
                quote: ` " Don't be pushed around by the fears in your mind. Be led by the dreams in your heart." `,
                by: "Roy T. Bennet "
            },
            {
                quote: ` " It's kind of fun to do the impossible" `,
                by: "walt Disney "
            },
            {
                quote: ` "Pain is temporary. Quitting lasts forever " `,
                by: "Lance Armstrong Sally Jenkins "
            },
            {
                quote: ` " It’s only after you’ve stepped outside your comfort zone that you begin to change, grow, and transform." `,
                by: " Roy T. Bennett"
            },
            {
                quote: ` "Take responsibility of your own happiness, never put it in other people’s hands. " `,
                by: "Roy T. Bennett "
            },
            {
                quote: ` "You were born with wings, why prefer to crawl through life? " `,
                by: "Rumi "
            },
            {
                quote: ` " Make improvements, not excuses. Seek respect, not attention." `,
                by: "Roy T. Bennett "
            },
            {
                quote: ` "Better to be strong than pretty and useless. " `,
                by: "  Lilith Saintcrow"
            },
            {
                quote: ` " Follow your heart, listen to your inner voice, stop caring about what others think." `,
                by: " Roy T. Bennett"
            },
            {
                quote: ` " The most common way people give up their power is by thinking they don't have any." `,
                by: "Alice Walker "
            },
            {
                quote: ` " Pursue what catches your heart, not what catches your eyes" `,
                by: "Roy T. Bennett "
            },
            {
                quote: ` "Don’t waste your time in anger, regrets, worries, and grudges. Life is too short to be unhappy. " `,
                by: " Roy T. Bennett"
            },
            {
                quote: ` "Nothing in the world is ever completely wrong. Even a stopped clock is right twice a day. " `,
                by: " Paulo Coelho"
            },
            {
                quote: ` " Lack of direction, not lack of time, is the problem. We all have twenty-four hour days." `,
                by: " Zig Ziglar"
            },
            {
                quote: ` "Be brave to stand for what you believe in even if you stand alone. " `,
                by: "  Roy T. Bennett"
            },
            {
                quote: ` " Try a little harder to be a little better." `,
                by: "Gordon B. Hinckley "
            },
            {
                quote: ` "Do not fear failure but rather fear not trying. " `,
                by: "Roy T. Bennett "
            },
            {
                quote: ` "Anyone can hide. Facing up to things, working through them, that's what makes you strong. " `,
                by: " Sarah Dessen"
            },
            {
                quote: ` "Courage is the most important of all the virtues because without courage, 
                you can't practice any other virtue consistently. " `,
                by: "Maya Angelou"

            },
            {
                quote: ` "Instead of worrying about what you cannot control, shift your energy to what you can create. " `,
                by: " Roy T. Bennet"
            },
            {
                quote: ` " The past is a place of reference, not a place of residence; the past is a place of learning, not a place of living." `,
                by: " Roy T. Bennet"
            },
            {
                quote: ` "Though nobody can go back and make a new beginning... Anyone can start over and make a new ending. " `,
                by: " Chico Xavier"
            },
            {
                quote: ` "If there's a single lesson that life teaches us, it's that wishing doesn't make it so. " `,
                by: "Lev Grossman "
            },
            {
                quote: ` "What a waste my life would be without all the beautiful mistakes I've made. " `,
                by: " Alice Bag"
            }, {
                quote: ` " Get comfortable with being uncomfortable!" `,
                by: " Jillian Michaels"
            },
            {
                quote: ` "In breaking away from the familiar and the expected, 
                you'll be forced and privileged to face greater challenges, learn harder lessons, and really get to know yourself. " `,
                by: " Kelly Cutrone"
            },
            {
                quote: ` " Discipline yourself and others won't need to." `,
                by: " John Wooden"
            },
            {
                quote: ` " You must live life with the full knowledge that your actions will remain. We are creatures of consequence." `,
                by: "Zadie Smith "
            },
            {
                quote: ` " If you build the guts to do something, anything, then you better save enough to face the consequences" `,
                by: " Criss Jami"
            },
            {
                quote: ` " The way of the superior person is threefold; virtuous, 
                          they are free from anxieties; wise they are free from perplexities; and bold they are free from fear." `,
                by: "Confucius "
            },
            {
                quote: ` " Go make your mark on the world. Be a world changer! Live bold for Christ no matter the cost." `,
                by: " Crystal Woodman Miller"
            },
            {
                quote: ` " Weak men cannot handle power. It will either crush them, or they will use it to crush others" `,
                by: " Jocelyn Murray"
            },
            {
                quote: ` "Refuse To Allow Limitations Stop You! " `,
                by: "Jaachynma N.E. Agu "
            },
            {
                quote: ` " Raise A Fear-Free You!
                The 'You' That Has Grown Past Fear of the Unknown, Fear of Failure, Fear of Rejection & Fear of Fear Itself!" `,
                by: "Jaachynma N.E. Agu "
            },
            {
                quote: ` "You have already lost if you are always fearful of losing everything. " `,
                by: " Kamand Kojouri "
            },
            {
                quote: ` " Risk is the clue that our dreams are both real and great." `,
                by: "Craig D. Lounsbrough "
            },
            {
                quote: ` " The most difficult step ever is the first step. It comes with doubts, uncertainties, 
                and all sort of fears. If you defy all odd and take it, your confidence will replicate very fast and you'll become a master!" `,
                by: "Israelmore Ayivor "
            },
            {
                quote: ` "People who run away from challenges are cowards and no coward deserves a reward. " `,
                by: " Israelmore Ayivor"
            },
            {
                quote: ` " When dark situations arise, it is opportunity for you to reveal the leader in you. Rise and deal with them." `,
                by: " Israelmore Ayivor "
            },
            {
                quote: ` "The man who waits to know everything is the man who never does anything. " `,
                by: " Craig D. Lounsbrough"
            },
            {
                quote: ` "Do the big, impossible thing. More heroically: be the big, impossible thing. " `,
                by: " Erica Alex"
            },
            {
                quote: ` "Be as fierce as a lion. Let the world hear you roar. " `,
                by: " Amaka Imani Nkosazana"
            },
            {
                quote: ` " One bold step leads to another! " `,
                by: " Anuranjita Kumar"
            },
            {
                quote: ` "Courage leads you to win battles everyone may lose. " `,
                by: " Israelmore Ayivor "
            },
            {
                quote: ` " No one saves us but ourselves. No one can and no one may. We ourselves must walk the path." `,
                by: "Gautama Buddha "
            },
            {
                quote: ` "Some of the most beautiful things we have in life comes from our mistakes. " `,
                by: "Surgeo Bell "
            },
            {
                quote: ` "None of us knows what might happen even the next minute, yet still we go forward. Because we trust. Because we have Faith. " `,
                by: "Paulo Coelho "
            },
            {
                quote: ` "Count your age by friends, not years. Count your life by smiles, not tears. " `,
                by: " John Lennon"
            },
            {
                quote: ` "The secret of life, though, is to fall seven times and to get up eight times. " `,
                by: "Paulo Coelho "
            },
            {
                quote: ` " In order to rise from its own ashes, a Phoenix first must burn." `,
                by: " Octavia Butle"
            },
            {
                quote: ` " When you make a choice, you change the future." `,
                by: "Deepak Chopra "
            },
            {
                quote: ` "Forgiveness is the way we break the grip that long-held resentments have on our hearts. " `,
                by: "Sharon Salzberg "
            },
            {
                quote: ` " You only live once, but if you do it right, once is enough." `,
                by: " You only live once, but if you do it right, once is enough."
            },
            {
                quote: ` " You only live once, but if you do it right, once is enough." `,
                by: " Chuck Palahniuk"
            },
            {
                quote: ` " Scars have the strange power to remind us that our past is real." `,
                by: "  Cormac McCarthy"
            },
            {
                quote: ` "Real dishes break. That's how you know they're real. " `,
                by: "Marty Rubin "
            },
            {
                quote: ` " The wound is the place where the Light enters you." `,
                by: " Rumi"
            },
            {
                quote: ` "Out of suffering have emerged the strongest souls; the most massive characters are seared with scars " `,
                by: " Kahlil Gibran "
            },
            {
                quote: ` "Scars have the strange power to remind us that our past is real. " `,
                by: "Cormac McCarthy "
            },
            {
                quote: ` " The best people all have some kind of scar." `,
                by: "Kiera Cass "
            },
            {
                quote: ` " Scars are not injuries, Tanner Sack. A scar is a healing. After injury, a scar is what makes you whole." `,
                by: "China Miéville "
            },
            {
                quote: ` "Scars are proof that you struggled, fought, and survived. " `,
                by: " Avijeet Das"
            },
            {
                quote: ` " Turn your scars into stars" `,
                by: " Robert Schuller"
            },
            {
                quote: ` "A Scar is not your healed wound, a scar marks your identity " `,
                by: " Dr.P.S. Jagadeesh Kumar"
            },
            {
                quote: ` " Scars mean you fought. Wrinkles mean you lived. Heartache means you loved." `,
                by: "Matshona Dhliwayo "
            },
            {
                quote: ` "Scars speak more loudly than the sword that caused them " `,
                by: " Paulo Coelho"
            },
            {
                quote: ` "Behind every beautiful thing, there's some kind of pain. " `,
                by: " Bob Dylan"
            },
            {
                quote: ` " Time doesn’t heal emotional pain, you need to learn how to let go" `,
                by: " Roy T. Bennett"
            },
            {
                quote: ` "Pain in this life is not avoidable, but the pain we create avoiding pain is avoidable. " `,
                by: "R.D. Laing "
            },
            {
                quote: ` " Folks are usually about as happy as they make their minds up to be." `,
                by: " Folks are usually about as happy as they make their minds up to be."
            },
            {
                quote: ` "It is better to be hated for what you are than to be loved for what you are not. " `,
                by: "Andre Gide "
            },
            {
                quote: ` "When someone loves you, the way they talk about you is different. You feel safe and comfortable. " `,
                by: " Jess C. Scott"
            },
            {
                quote: ` " Never close your lips to those whom you have already opened your heart." `,
                by: " Charles Dickens "
            },
            {
                quote: ` "To fall in love with someone's thoughts - the most intimate, splendid romance. " `,
                by: "Sanober Khan "
            },



        ]
    }

    generateRandomIndex = () => {
        let value = Math.floor(
            Math.random() * ((this.state.Quotes.length - 1) - 0 + 1) + 0
        )
        this.setState({
            index: value
        })
    }
    componentWillMount = () => {
        this.generateRandomIndex()
    }

    render() {
        if (this.state.blogs) return <Blogs />
        return <Fragment>
            <Container style={{ width: "100%", height: "100%" }}>
                <div style={{ width: "100%", height: "100%", backgroundColor: "black" }}>
                    <Typography component="h2" variant="h2" style={{ color: "orange", fontFamily: "Berlin Sans FB", borderBottom: "1px solid orange" }} className="text-center">
                        WOLFWALKER
                    </Typography>
                    <br /><br />
                    <div className="offset-md-2 col-md-8 offset-md-2">
                        <Typography component="h5" variant="h5" style={{ color: "orange", fontFamily: "Berlin Sans FB" }} className="text-left">
                            Signifies generosity, intuition, idealism, romance, creativity, tolerance and wisdom.
                    <br /><br />
                    Wolfwalkers are ambitious spirits. Solving problems give us pleasure. We defend injustice. We trust our trained instincts and never settle for hearing and believing. We look for evidence. We are empathetic and can read others. We believe in romance, service, and value loyalty. We believe in  creating a harmonious world.
                    </Typography>
                    </div>
                    <br /><br />
                    <img src={wolf8} className="img img-fluid" />
                    <br /><br /><br /><br />
                    <div className="offset-md-2 col-md-8 offset-md-2">
                        <Typography variant="h5" component="h5" style={{ color: "orange", fontFamily: "Berlin Sans FB" }} className="text-left">
                            {this.state.Quotes[this.state.index].quote}
                            <br /><br />
                                -{this.state.Quotes[this.state.index].by}
                        </Typography>
                    </div>
                    <br /><br />

                    <Tooltip title="Go directly to blogs" placement="top" arrow>
                        <IconButton aria-label="down" className="btn btn-block" onClick={() => { this.setState({ blogs: true }) }} component={Link} to="/blogs">
                            <Badge pill variant="danger">
                                <ArrowDropDownRoundedIcon />
                            </Badge>
                        </IconButton>
                    </Tooltip>

                    <br /><br />
                </div>
                <Footercomp />
            </Container>
        </Fragment>
    }
}


















// import {BrowserRouter, Switch, Route, Link, Redirect} from "react-router-dom"
// import React, {Fragment} from "react"
// import "bootstrap/dist/css/bootstrap.min.css"
// import Container from "react-bootstrap/TabContainer"
// import Photo37 from "../assets/photo37.jpg"
// import Photo41 from "../assets/photo41.jpg"
// import Photo44 from "../assets/photo44.jpg"
// import Photo45 from "../assets/photo45.jpg"
// import Photo46 from "../assets/photo46.jpg"
// import Photo47 from "../assets/photo47.jpg"
// import Photo48 from "../assets/photo48.jpg"
// import Photo49 from "../assets/photo49.jpg"
// import Photo50 from "../assets/photo50.jpg"
// import Photo50V from "../assets/photo50.mp4"
// import Photo51 from "../assets/photo51.jpg"
// import Photo52 from "../assets/photo52.jpg"
// import Photo53 from "../assets/photo53.jpg"
// import Photo54 from "../assets/photo54.jpg"
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import ArrowDropDownRoundedIcon from '@material-ui/icons/ArrowDropDownRounded';
// import Tooltip from '@material-ui/core/Tooltip';
// import Badge from 'react-bootstrap/Badge'
// import Blogs from "./blogs"
// import Footercomp from "./footercomp"
// import Row from "react-bootstrap/Row"
// import NotificationsActiveRoundedIcon from '@material-ui/icons/NotificationsActiveRounded';
// import FormControl from "@material-ui/core/FormControl"
// import FormHelperText from "@material-ui/core/FormHelperText"
// import SubscriptionsRoundedIcon from '@material-ui/icons/SubscriptionsRounded';
// import TextField from "@material-ui/core/TextField"
// export default class Comp1 extends React.Component {
//        // {
//             //     url: "url("+ Photo49 +")"
//             // },
//             // {
//             //     url: "url("+ Photo50V +")"
//             // },
//             // {
//             //     url: "url("+ Photo50 + ")"
//             // },
//             // {
//             //     url: "url("+ Photo51 +  ")"
//             // },
//             // {
//             //     url: "url("+ Photo52 +  ")"
//             // },
//             // {
//             //     url: "url("+ Photo53+  ")"
//             // },
//             //  {
//             //     url: "url("+ Photo54+  ")"
//             // },
//         ],
//     }
//     generateRandomIndex = () => {
//         let value = Math.floor(
//             Math.random() * ((this.state.quotes.length - 1) - 0 + 1) + 0
//         )
//         this.setState({
//             index: value
//         })
//     }
//     componentWillMount = () => {
//         this.generateRandomIndex()
//     }


//     render() {
//         
//         return <Fragment>
//             <Row>
//             <div className="container-fluid" style={{ backgroundColor:"black" , height: "100%", width: "100%", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover" }}>
//                 <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
//                 <Typography variant="h4" component="h4" style={{ fontStyle: "italic" , fontFamily:"Monaco" }} className="text-light text-center">
//                     {this.state.quotes[this.state.index].quote}
//                 </Typography>
//                 <br /><br />
//                 <Typography variant="h4" component="h4" style={{ fontStyle: "italic" , fontFamily:"Monaco" }} className="text-light text-center">
//                     -{this.state.quotes[this.state.index].by}
//                 </Typography>
//                 <br /><br /><br /><br />

//                 <br /><br /><br />
//             </div>
//             <br /><br />
//             </Row>
//             {/* <Row style={{width:"100%"}}>
//                 <br /><br />

//             </Row> */}
//             {/* <Footercomp /> */}
//         </Fragment>
//     }

// }
