import {FC, useEffect, useState} from 'react'
import {CardType} from './@types/types'
import {API} from './api/api'
import {Card} from './components/Card'
import {Preloader} from './components/common/Preloader'
import {CardWrapper, Title, Wrapper} from './styles/App.style'

export const App: FC = () => {
    const [items, setItems] = useState<CardType[]>([])
    const [images, setImages] = useState([])

    const loadData = () => {
        API.getItems().then(res => setItems(res))
        API.getImages().then(res => setImages(res))
    }
    useEffect(() => {
        loadData()
    }, [])

    if (items.length === 0 || images.length === 0) return <Preloader/>
    return <Wrapper>
        <Title>Похожие объявления</Title>
        <CardWrapper>
            <Card items={items} images={images}/>
        </CardWrapper>
    </Wrapper>
}

export default App
