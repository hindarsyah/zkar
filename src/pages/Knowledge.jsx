import Title from '../components/Title'
import iconJs from '../assets/img/javascript.png'
import iconDart from '../assets/img/dart.png'
import iconFlutter from '../assets/img/flutter.png'
import iconReactJs from '../assets/img/react.png'
import Card from '../components/Card'

const items = {
    javascript: ["Fundamental Javascript and OOP in Javascript", "Integrated with API in Javascript", "Callback, promise, async await and error handling"],
    dart: ["Fundamental Dart and OOP in Dart", "Integrated with Rest API in Dart", "Callback, promise, async await and error handling"],
    reactJs: ["Fundamental ReactJS", "Make project with Vite", "Simple component", "Stateless component & Stateful component", "Dynamic component with props", "Lifecycle component", "Integrated with API", "React Router", "React-Hook", "Redux", "Make simple Personal Portfolio Website - Front End", "Make simple Movie Search, integrated with API - Front End"],
    flutter: ["Fundamental Flutter", "Stateless & Stateful", "Visible & Invisible Widget", "Animated", "Transition", "Responsive & Adaptive", "State Management", "HTTP Request", "Widget Lifecycle", "Application Lifecycle", "Local Storage", "Make simple Mobile App - Al Qur'an and Integrated With Rest API", "Make simple Mobile App - Chasier Bluetooth Printer"]
}

export default function Knowledge(){
    const { javascript, dart, reactJs, flutter } = items
    return (
        <div>
            <div className="my-10 mx-5 flex flex-col gap-10">
                <Title title={"Knowledge"}/>
                <div className="flex gap-5 flex-col my-10 md:gap-20">
                    <h1 className="text-2xl lg:text-3xl font-extrabold uppercase text-cyan-800 dark:text-cyan-50 border-l-4 border-slate-400 pl-2 whitespace-nowrap"><span className="text-3xl md:text-5xl text-cyan-950 dark:text-cyan-500">What</span> I Know ?</h1>
                    <div className="flex flex-col md:flex-row flex-wrap items-center gap-5 justify-center">
                        <Card title={"Javascript Programming"} icon={ iconJs } id={"my_modal_js"} func={ ()=>window.my_modal_js.showModal() } items={ javascript } />
                        <Card title={"Dart Programming"} icon={ iconDart } id={"my_modal_dart"} func={ ()=>window.my_modal_dart.showModal() } items={ dart } />
                        <Card title={"React Js"} icon={ iconReactJs } id={"my_modal_reactjs"} func={ ()=>window.my_modal_reactjs.showModal() } items={ reactJs } />
                        <Card title={"Flutter"} icon={ iconFlutter } id={"my_modal_flutter"} func={ ()=>window.my_modal_flutter.showModal() } items={ flutter } />
                    </div>
                </div>
            </div>
        </div>
    )
}