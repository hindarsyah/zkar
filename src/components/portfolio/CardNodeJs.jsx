/* eslint-disable react/prop-types */
import CustomCard from "../CustomCard"

export default function CardNodeJs({ title, tags, label, icon }){
    return <CustomCard title={title} tags={tags} color={"bg-gradient-to-l from-green-800 to-green-500"} shadowColor={"shadow-green-600"} label={label} icon={icon} />
}