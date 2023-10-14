import styled from "styled-components"

export default function Categories({title, description, logo, color}){

    const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 15rem;
    height: 13rem;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    background-color: #ddd;
    margin: 50px 10px 0px 10px;
    padding: 12px;
    `

    const IconCard = styled.h1`
        font-size: 55px;
    `

    const TitleCard = styled.h3`

    `

    const DescriptionCard = styled.p`
        margin-top: 10px;
        text-align: center;
    `

    return(
        <>
        <Card>
            <IconCard>{logo}</IconCard>
            <TitleCard>{title}</TitleCard>
            <DescriptionCard>{description}</DescriptionCard>
        </Card>
        </>
    )
}

