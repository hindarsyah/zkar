import Title from '../components/Title'
import iconQuran from '../assets/img/quran.png'
import iconBookshelf from '../assets/img/bookshelf.png'
import iconPrinter from '../assets/img/printer.png'
import iconPortfolio from '../assets/img/portfolio.png'
import iconEcommerce from '../assets/img/ecommerce.png'
import CardNativeJs from '../components/portfolio/CardNativeJs'
import CardFlutter from '../components/portfolio/CardFlutter'
import CardNodeJs from '../components/portfolio/CardNodeJs'
import CardReactJs from '../components/portfolio/CardReactJs'

export default function Portfolio(){

    const portfolioData = [
        {
            title: "Simple Web E-Commerce and Integrated With Rest API",
            tags: ["reactjs", "javascript", "api", "tailwind", "vite"],
            label: "reactjs",
            icon: iconEcommerce
        },
        {
            title: "Simple Web Catatan For Save Your Catatan",
            tags: ["reactjs", "javascript", "api", "tailwind", "vite"],
            label: "reactjs",
            icon:null
        },
        {
            title: "Simple Mobile App Al-Qur'an and Integrated With Rest API",
            tags:["flutter", "dart", "api"],
            label: "flutter",
            icon: iconQuran
        },
        {
            title: "Simple Mobile App Cashier Bluetooth Thermal Printer",
            tags: ["flutter", "dart"],
            label: "flutter",
            icon: iconPrinter
        },
        {
            title: "Simple Web Personal Profile Native Without Responsive - Front End",
            tags: ["html", "css", "javascript"],
            label: "javascript",
            icon: iconPortfolio
        },
        {
            title: "Simple Web Bookshelf Native Without Responsive - Front End",
            tags: ["html", "css", "javascript"],
            label: "javascript",
            icon: iconBookshelf
        },
        {
            title: "Simple Restful API Bookshelf With @Hapi - Back End",
            tags: ["javascript", "nodejs", "@hapi"],
            label: "nodejs",
            icon: iconBookshelf
        },
        {
            title: "Simple Web Personal Profile ReactJS Responsive - Front End",
            tags: ["reactjs", "javascript", "vite", "tailwind"],
            label: "reactjs",
            icon: iconPortfolio
        }
    ]

    return (
        <div className="p-10">
            <Title title={"Portfolio"}/>

            <div className="mt-10 flex flex-col sm:flex-row flex-wrap gap-10 justify-center">

                {
                    portfolioData.map((data, i) => {
                        if(data.label === "javascript"){
                            return <CardNativeJs key={i} title={data.title} tags={data.tags} label={data.label} icon={data.icon} />
                        }else if(data.label === "flutter"){
                            return <CardFlutter key={i} title={data.title} tags={data.tags} label={data.label} icon={data.icon} />
                        }else if(data.label === "nodejs"){
                            return <CardNodeJs key={i} title={data.title} tags={data.tags} label={data.label} icon={data.icon} />
                        }else if(data.label === "reactjs"){
                            return <CardReactJs key={i} title={data.title} tags={data.tags} label={data.label} icon={data.icon} />
                        }
                    })
                }
            </div>
        </div>
    )
}