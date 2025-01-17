/* eslint-disable react/prop-types */
import CustomCard from "../CustomCard"

export default function CardFlutter({ title, tags, label, icon }){
    return <CustomCard title={title} tags={tags} color={"bg-gradient-to-l from-cyan-600 to-cyan-300"} shadowColor={"shadow-cyan-600"} label={label} icon={icon} />
}