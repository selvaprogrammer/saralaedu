import { Helmet } from "react-helmet";

interface Props{
title: string
}
export default function MetaTag(props:Props) {
    return (
        <Helmet>
            <title>{props.title}</title>
        </Helmet>
    )
}
