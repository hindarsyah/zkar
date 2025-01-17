/* eslint-disable react/prop-types */
import CustomCard from "../CustomCard"

export default function CardNativeJs({ title, tags, label, icon }){
    return <CustomCard title={title} tags={tags} color={"bg-gradient-to-l from-amber-600 to-amber-400"} shadowColor={"shadow-amber-600"} label={label} icon={icon} />
}