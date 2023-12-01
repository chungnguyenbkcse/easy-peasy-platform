//#region imports
import useTop from "../hooks/useTop";
import {useLocation, useParams} from "react-router-dom";
import Panel from "../components/Panel";
import ExerciseSet from "../components/exercise/ExerciseSet";
import Cheatsheet from "../components/Cheatsheet";
import Breadcrumbs from "../components/Breadcrumbs";
import Reading from "../components/exercise/Reading";
import axios from "axios";

// Just for a template;
import RelationshipsImg from "../assets/images/vocabulary/realtionships.jpg";
import Recommended from "../components/Recommended";
import {useEffect, useState} from "react";
//#endregion
//TODO: Here I will probably implement API request for data base where I get all content for cheetsheet md, exercises, instructions, etc based on path of URL and then send it to the Exercise component.

function ExercisePage() {
    const [set, setSet] = useState(null);
    const {pathname} = useLocation();
    // let setName = pathname.charAt(1).toUpperCase() + pathname.slice(2);

    useTop();
    useEffect(() => {
        const setTitle = decodeURIComponent(pathname.split('/')[2]);
        const getExerciseSet = async () => {
            try {
                // const {data} = await axios.get(`/exercise${pathname}`);
                const {data} = await axios.get(`/exercise/${setTitle}`);
                console.log(data)
                setSet(data);
            } catch (error) {
                throw new Error('There is no such an exercise set');
            }
        };
        getExerciseSet();
    }, [pathname]);


    const {topic} = useParams();
    //TODO: to be fetched from API/server and depending on a section type it will render a body conditionally

    //Grammar section
    const data2 = [
       { section: "grammar" },
       // DROPDOWN
       {
         instruction:
           "Choose the correct or most appropriate future forms to complete the sentences below.",
         title: "Will / be going to / present continuous for future",
         type: "dropdown",
         questions: [
           {
             question: "I *** visit my grandmother tomorrow.",
             options: [
               { text: "will", isCorrect: false },
               { text: "am going to", isCorrect: true },
               { text: "am visiting", isCorrect: false },
             ],
           },
           {
             question:
               "They have tickets for the concert. They *** attend it tonight.",
             options: [
               { text: "will", isCorrect: false },
               { text: "are going to", isCorrect: true },
               { text: "are attending", isCorrect: false },
             ],
           },
           {
             question: "I think it *** rain later, so don't forget your umbrella.",
             options: [
               { text: "will", isCorrect: true },
               { text: "is going to", isCorrect: false },
               { text: "is raining", isCorrect: false },
             ],
           },
           {
             question: "She *** fly to Paris next week for a business meeting.",
             options: [
               { text: "will", isCorrect: false },
               { text: "is going to", isCorrect: true },
               { text: "is flying", isCorrect: false },
             ],
           },
           {
             question:
               "We *** have a picnic at the park on Saturday if the weather is nice.",
             options: [
               { text: "will", isCorrect: false },
               { text: "are going to", isCorrect: true },
               { text: "are having", isCorrect: false },
             ],
           },
         ],
       },
       // FIll-IN
       {
         instruction:
           "Fill in the gaps with a correct or most appropriate future forms using a word in prompts to complete the sentences below.",
         title: "Will / be going to / present continuous for future",
         type: "fill-in",
         questions: [
           {
             question: "I *** my grandmother tomorrow. (visit)",
             isCorrect: "am going to visit",
           },
           {
             question: "This year I *** to Italy (go).",
             isCorrect: "am going to go",
           },
           {
             question: "Maybe we *** a new car next year. (buy)",
             isCorrect: "will buy",
           },
           {
             question: "I think current Presindent *** reelected once again. (be)",
             isCorrect: "will be",
           },
           {
             question:
               "Tomorrow morning John *** to Madrid for a business trip. (fly)",
             isCorrect: "is flying",
           },
         ],
       },
       // DRAG-&-DROP
       {
         instruction:
           "Drag an option of future tense and drop it into a fitting sentence to complete it.",
         title: "Will / be going to / present continuous for future",
         type: "drag-&-drop",
         questions: [
           {
             question: "I *** my grandmother tomorrow.",
             isCorrect: "am going to visit",
           },
           {
             question: "This year I *** to Italy.",
             isCorrect: "am going to go",
           },
           {
             question: "Maybe we *** a new car next year.",
             isCorrect: "will buy",
           },
           {
             question: "I think current Presindent *** reelected once again.",
             isCorrect: "will be",
           },
           {
             question: "Tomorrow morning John *** to Madrid for a business trip.",
             isCorrect: "is flying",
           },
         ],
       },
     ];
    const cheatsheet = {
        topic: "Future Tenses",
        level: "B1",
        content: `
      <article>
         <p class="text-base text-orange-500 bg-stone-50 dark:bg-[#484848] shadow-inner p-3 mb-5 rounded-lg">What tenses should I use to talk about future? Future simple or be going to or, maybe, present continuous will be enough? All! But it depends what you wanna say! Let break it down and see the difference.</p>
         
         <h5 class="text-2xl font-bold text-indigo-400 mb-3">Predictions</h5>
         <h6 class="text-xl font-bold ">Will</h6>
         <p class="mb-3">We use <strong>will</strong> when we are trying to predict what will happen in the future. It is still only our subjective opinion or feeling:</p>
         <div class="mb-5 shadow-inner bg-stone-50 dark:bg-[#484848] px-3 py-2 rounded-md">
            <p>I think you <strong>will</strong> learn English fast.</p>
            <p>I suppose she <strong>will</strong> be late today.</p>
            <p>I am sure we <strong>will</strong> win the match!</p>
         </div>
         <p class="mb-3">As it is shown in the previous examples, we often use the verbs such as <strong>think, believe, guess, suppose, reckon</strong> with <strong>will</strong> to predict about the future. This is only hypothetical and subjective opinion. As well we can use some adverbs of possibility with <strong>will</strong> such as <strong>maybe, perphaps, possibly</strong>:
         </p>
         <div class="mb-5 shadow-inner bg-stone-50 dark:bg-[#484848] px-3 py-2 rounded-md">
            <p><strong>Maybe</strong> she <strong>will</strong> show up at the party.</p>
            <p><strong>Perhaps</strong>, people <strong>will</strong> switch from fuel cars to electic cars ultimitaly.</p>
         </div>

         <h6 class="text-xl font-bold ">Be going to</h6>
         <p class="mb-3">We can also use <strong>be going to</strong> for expressing our predictions but there is one big difference between <strong>will</strong> and <strong>be going to</strong>. With <strong>be going to</strong> we are predicting the event based on a <span class="bg-stone-100 dark:bg-[#484848] px-2 py-1 text-orange-600 shadow-inner rounded-md">specific and obvious evidence</span>. When we can physically see it is going to happen. For instance, we can see the dark clouds in the sky. So, based on that we can predict that it is going to rain. It is not hypothetical but highly possible:</p>
         <div class="mb-5 shadow-inner bg-stone-50 dark:bg-[#484848] px-3 py-2 rounded-md">
            <p><span class="text-orange-600">Look at those dark clouds.</span> It <strong>is going to</strong> rain soon.</p>
            <p>What the heck! <span class="text-orange-600">You are driving like a maniac!</span> Slow down, or we <strong>are going to</strong> crash!</p>
         </div>

         
         <h5 class="text-2xl font-bold text-indigo-400 mb-3">Decisions and intensions</h5>
         <h6 class="text-xl font-bold ">Will</h6>
         <p class=" mb-3">We use <strong>will</strong> when we are making instant decisions. It happens at the moment of speaking when, for example, somebody asks us something and we answer immediately:</p>
         <div class="mb-5 shadow-inner bg-stone-50 dark:bg-[#484848] px-3 py-2 rounded-md">
            <p>- Can you help me with this heavy bags? - Yeah, sure. I <strong>will</strong> help you.</p>
            <p>- Could you open the window? It's extremly hot here. - Yeah, sure. I <strong>will</strong> open it.</p>
            <p>- We are running out of water? - No worries. I <strong>will</strong> buy water when I am in the city center.</p>
         </div>

         <h6 class="text-xl font-bold ">Be going to</h6>
         <p class="mb-3">We use <strong>be going to</strong> to talk about already planned events. It is more about our <span class="bg-stone-100 dark:bg-[#484848] px-2 py-1 text-orange-600 shadow-inner rounded-md">intensions and plans</span>. So, the difference is that these plans are not instant, they have already been taken in the past:</p>
         <div class="mb-5 shadow-inner bg-stone-50 dark:bg-[#484848] px-3 py-2 rounded-md">
            <p>- Why are you learning Spanish so intensively these days? - I <strong>am going to</strong> take an exam this year.</p>
            <p>I am really looking forward to this weekend. We <strong>are going to</strong> to watch the newest "Spiderman" at the movies!</p>
         </div>
         
         <h5 class="text-2xl font-bold text-indigo-400 mb-3">Arrangements or Plans</h5>
         <h6 class="text-xl font-bold ">Present Continuous</h6>
         <p class="mb-3">We use <strong>present continuous</strong> to talk about our arrangements, plans and future events that are planned. These future events are often scheduled with <span class="bg-stone-100 dark:bg-[#484848] px-2 py-1 text-orange-600 shadow-inner rounded-md">a specific time and a place</span>:</p>
         <div class="mb-5 shadow-inner bg-stone-50 dark:bg-[#484848] px-3 py-2 rounded-md">
            <p>We <strong>are meeting</strong> our clients <span class="text-orange-600">at 10 am tomorrow in my office</span>. Don't be late!</p>
            <p>I can't meet this week. We <strong>are flying</strong> to Madrid <span class="text-orange-600">the day after tomorrow</span>.</p>
            <p>I <strong>am arriving</strong> <span class="text-orange-600">on Sunday at 6 pm</span>.</p>
         </div>

         <h6 class="text-xl font-bold">Be going to</h6>
         <p class="mb-3">We can also use <strong>be going to</strong> for arrangements and future events but there is one crucial difference: when we use <strong>be going to</strong>, we stress our intension, we mean "I am planning to do this or that. Maybe, it is not in my schedule yet but I am plannig to do it". So, here we focus on our<span class="bg-stone-100 dark:bg-[#484848] px-2 py-1 text-orange-600 shadow-inner rounded-md">intension</span>:</p>

         <div class="mb-5 shadow-inner bg-stone-50 dark:bg-[#484848] px-3 py-2 rounded-md">
            <p>I <strong>am going to</strong> meet with Jessica tonight.</p>
            <p>Tomorrow my wife <strong>is going to</strong> meet with her parents.</p>
         </div>

      </article>
      `,
    };

    //Vocabulary section
    //TODO: consider how to fetch images for flashcards. I think of databases in a buffer format...
    const data3 = [
        {section: "vocabulary"},
        {
            instruction:
                "Recall a proper word or phrase according to the definition on the card. When ready, flip a card and check your answer",
            title: "Words and phrases about relationships",
            type: "flash-card",
            questions: [
                {
                    question: 'the same as "stay in contact"',
                    example: 'It\'s hard to ... with someone who doesn\'t want to be found',
                    isCorrect: "keep in touch",
                    cardImage: RelationshipsImg,
                },
                {
                    question: 'the same as "stop being in contact"',
                    example: 'Unfortunately, we ... right after college graduation',
                    isCorrect: "lose touch",
                    cardImage: RelationshipsImg,
                },
                {
                    question: 'the same as "stay in contact"',
                    example: 'It\'s hard to ... with someone who doesn\'t want to be found',
                    isCorrect: "keep in touch",
                    cardImage: RelationshipsImg,
                },
                {
                    question: 'the same as "stay in contact"',
                    example: 'It\'s hard to ... with someone who doesn\'t want to be found',
                    isCorrect: "keep in touch",
                    cardImage: RelationshipsImg,
                },
            ],
        },
        {
            instruction:
                "Fill in the gaps with the words in the box below. When it is necessary, change the form according to a tense.",
            title: "Words and phrases about relationships",
            type: "fill-box",
            words: [
                {
                    word: 'keep in touch',
                    correctPlace: 3,
                    correctForm: 'keep in touch',
                },
                {
                    word: 'lose touch',
                    correctPlace: 2,
                    correctForm: 'lose touch',
                },
                {
                    word: 'get to know',
                    correctPlace: 4,
                    correctForm: 'get to know',
                },
                {
                    word: 'acquaintance',
                    correctPlace: 5,
                    correctForm: 'acquaintances',
                },
                {
                    word: 'bestie',
                    correctPlace: 1,
                    correctForm: 'besties',
                },
            ],
            text: 'In a quaint town, Sarah and Lisa were old ***. They shared secrets, adventures, and countless memories during their school years. However, life had its way of changing things, and after high school, they both moved to different cities, causing them to slowly ***.\n' +
                '\n' +
                'One day, Sarah stumbled upon Lisa\'s social media profile. She saw Lisa\'s post about moving back to their hometown. Excited and eager to reconnect, Sarah sent her a message, saying, "It\'s been ages since we\'ve talked! Let\'s *** and catch up."\n' +
                '\n' +
                'Lisa replied warmly, "I\'ve missed you too! I\'m back in town for good. We definitely need to *** each other again." They decided to meet up at a local café, where they reminisced about old times and shared stories about their lives in different cities. They realized they weren\'t just ***; they were best friends who had been apart for too long.\n' +
                '\n'
        },
        {
            instruction:
                "Choose the appropriate word from the multiple options a, b, c, d.",
            title: "Words and phrases about relationships",
            type: "multiple-choice",
            questions: [
                {
                    question: "I met my *** at a conference last year, and we've been good friends ever since.",
                    options: [
                        {text: "bestie", isCorrect: true},
                        {text: "acquaintance", isCorrect: false},
                        {text: "get to know", isCorrect: false},
                        {text: "lose touch", isCorrect: false},
                    ],
                },
                {
                    question:
                        "After graduating, I *** with most of my classmates from high school.",
                    options: [
                        {text: "bestie", isCorrect: false},
                        {text: "acquaintance", isCorrect: false},
                        {text: "got to know", isCorrect: false},
                        {text: "lost touch", isCorrect: true},
                    ],
                },
                {
                    question: "I want to *** my new neighbors better, so I invited them for dinner.",
                    options: [
                        {text: "bestie", isCorrect: false},
                        {text: "acquaintance", isCorrect: false},
                        {text: "get to know", isCorrect: true},
                        {text: "lose touch", isCorrect: false},
                    ],
                },
                {
                    question: "Sarah and I were *** in college, but we haven't seen each other for years.",
                    options: [
                        {text: "besties", isCorrect: true},
                        {text: "acquaintance", isCorrect: false},
                        {text: "get to know", isCorrect: false},
                        {text: "lose touch", isCorrect: false},
                    ],
                },
                {
                    question:
                        "It's essential to *** with your friends, even if you live far away from each other.",
                    options: [
                        {text: "bestie", isCorrect: false},
                        {text: "acquaintance", isCorrect: false},
                        {text: "get to know", isCorrect: false},
                        {text: "keep in touch", isCorrect: true},
                    ],
                },
            ],
        },
        {
            instruction:
                "Fill in missing letters to complete a word or a phrase.",
            title: "Words and phrases about relationships",
            type: "fill-in-letter",
            words: [
                "bestie",
                "acquaintance",
                "get to know",
                "lose touch",
                "keep in touch",
            ],
        },
    ];

    //Reading section
    const data = [
        { section: "reading" },
        // DROPDOWN
        {
            instruction:
                "Choose the correct or most appropriate future forms to complete the sentences below.",
            title: "Will / be going to / present continuous for future",
            type: "dropdown",
            questions: [
                {
                    question: "I *** visit my grandmother tomorrow.",
                    options: [
                        { text: "will", isCorrect: false },
                        { text: "am going to", isCorrect: true },
                        { text: "am visiting", isCorrect: false },
                    ],
                },
                {
                    question:
                        "They have tickets for the concert. They *** attend it tonight.",
                    options: [
                        { text: "will", isCorrect: false },
                        { text: "are going to", isCorrect: true },
                        { text: "are attending", isCorrect: false },
                    ],
                },
                {
                    question: "I think it *** rain later, so don't forget your umbrella.",
                    options: [
                        { text: "will", isCorrect: true },
                        { text: "is going to", isCorrect: false },
                        { text: "is raining", isCorrect: false },
                    ],
                },
                {
                    question: "She *** fly to Paris next week for a business meeting.",
                    options: [
                        { text: "will", isCorrect: false },
                        { text: "is going to", isCorrect: true },
                        { text: "is flying", isCorrect: false },
                    ],
                },
                {
                    question:
                        "We *** have a picnic at the park on Saturday if the weather is nice.",
                    options: [
                        { text: "will", isCorrect: false },
                        { text: "are going to", isCorrect: true },
                        { text: "are having", isCorrect: false },
                    ],
                },
            ],
        },
        // FIll-IN
        {
            instruction:
                "Fill in the gaps with a correct or most appropriate future forms using a word in prompts to complete the sentences below.",
            title: "Will / be going to / present continuous for future",
            type: "fill-in",
            questions: [
                {
                    question: "I *** my grandmother tomorrow. (visit)",
                    isCorrect: "am going to visit",
                },
                {
                    question: "This year I *** to Italy (go).",
                    isCorrect: "am going to go",
                },
                {
                    question: "Maybe we *** a new car next year. (buy)",
                    isCorrect: "will buy",
                },
                {
                    question: "I think current Presindent *** reelected once again. (be)",
                    isCorrect: "will be",
                },
                {
                    question:
                        "Tomorrow morning John *** to Madrid for a business trip. (fly)",
                    isCorrect: "is flying",
                },
            ],
        },
        // DRAG-&-DROP
        {
            instruction:
                "Drag an option of future tense and drop it into a fitting sentence to complete it.",
            title: "Will / be going to / present continuous for future",
            type: "drag-&-drop",
            questions: [
                {
                    question: "I *** my grandmother tomorrow.",
                    isCorrect: "am going to visit",
                },
                {
                    question: "This year I *** to Italy.",
                    isCorrect: "am going to go",
                },
                {
                    question: "Maybe we *** a new car next year.",
                    isCorrect: "will buy",
                },
                {
                    question: "I think current Presindent *** reelected once again.",
                    isCorrect: "will be",
                },
                {
                    question: "Tomorrow morning John *** to Madrid for a business trip.",
                    isCorrect: "is flying",
                },
            ],
        },
    ];

    const text =  <>
        {/*<h3 className='text-3xl mb-3'>Building and Maintaining Relationships</h3>*/}

        <h4 className='text-2xl mb-1'>Making Friends</h4>
        <p className='mb-3'>Hi there! Let me tell you about my friend, Sarah. We first met at work. Sarah was a <strong>colleague</strong>, and we started as <strong>acquaintances</strong>. We would say a quick "hello" in the office, but we didn't really know each other well. One day, we decided to grab lunch together, and that's when we started to get to know each other better. Soon, Sarah became my <strong>bestie</strong>, someone I could share everything with. It's amazing how friendships can grow from being colleagues to best friends.</p>

        <h4 className='text-2xl mb-1'>Keeping in Touch</h4>
        <p className='mb-3'>Life can get busy, and sometimes we <strong>lose touch with</strong> our friends. But it's essential to <strong>keep in touch</strong> to maintain a strong relationship. Even when Sarah and I changed jobs, we made a promise to keep in touch. We would regularly send messages, call each other, and make plans to <strong>hang out</strong>. It's important to make an effort to stay connected, especially when life gets busy.</p>

        <h4 className='text-2xl mb-1'>Unexpected Meetings</h4>
        <p className='mb-3'>One day, I <strong>bumped into</strong> Sarah at the supermarket. It was such a pleasant surprise! We hadn't seen each other for a while, and it was great to <strong>catch up</strong>. We decided to get together for coffee, and it felt like no time had passed since our last meeting. Sometimes, these unexpected <strong>encounters</strong> can bring back the joy of friendship.</p>

        <h4 className='text-2xl mb-1'>Friendship Forever</h4>
        <p className='mb-3'>In conclusion, building and maintaining relationships takes effort, but it's worth it. Whether it's getting to know someone at work, keeping in touch through messages and calls, or bumping into a friend unexpectedly, these experiences contribute to strong and lasting friendships. So, don't forget to <strong>reach out to</strong> your friends, make plans to hang out, and cherish the moments you spend together. After all, friends are there to support each other through thick and thin.</p>
    </>

    const {section} = data[0];

    //FIXME Do I actually need here conditional rendering? Only one thing which changes is min-h...
    let content;
    switch (section) {
        case "grammar":
            content = (
                <Panel className="bg-white flex flex-col lg:flex-row justify-between min-h-[850px] !p-0">
                    <ExerciseSet data={data}/>
                    <Cheatsheet
                        topic={cheatsheet.topic}
                        level={cheatsheet.level}
                        content={cheatsheet.content}
                    />
                </Panel>
            );
            break;
        case "vocabulary":
            content = (
                <Panel className="bg-white flex flex-col lg:flex-row justify-between !p-0">
                    <ExerciseSet data={data}/>
                    <Cheatsheet
                        topic={cheatsheet.topic}
                        level={cheatsheet.level}
                        content={cheatsheet.content}/>
                </Panel>
            );
            break;
        case 'reading':
            content = (
                <Panel className="bg-white flex flex-col lg:flex-row justify-between !p-0">
                    <Reading text={text} title='Building and Maintaining Relationships' bgImage={RelationshipsImg} level='A2'/>
                </Panel>
            )
            break;
        default:
            throw new Error("There is no such an exercise section");
    }

    return (
        <div className="my-24 container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl text-center font-bold text-orange-500 drop-shadow mb-6 md:mb-8">
                {topic}
            </h1>
            <Breadcrumbs/>
            {content}
            <Recommended/>
        </div>
    );
}

export default ExercisePage;
