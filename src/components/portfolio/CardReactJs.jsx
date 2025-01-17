/* eslint-disable react/prop-types */
import CustomCard from "../CustomCard"

export default function CardReactJs({ title, tags, label, icon }){
    return <CustomCard title={title} tags={tags} color={"bg-gradient-to-l from-cyan-800 to-cyan-500"} shadowColor={"shadow-cyan-800"} label={label} icon={icon} />
}