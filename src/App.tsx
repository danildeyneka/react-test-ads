import React, {FC, useEffect, useState} from 'react'
import {CardType, ImageType} from './@types/types'
import {API} from './api/api'
import {Card} from './components/Card'
import {Preloader} from './components/common/Preloader'
import {CardWrapper, Title, Wrapper, Footer} from './styles/App.style'

export const App: FC = React.memo(() => {
    const [items, setItems] = useState<CardType[]>([])
    const [images, setImages] = useState<ImageType[]>([])
    const [itemsShowed, setItemsShowed] = useState<CardType[]>([])
    const [itemsCounter, setItemsCounter] = useState<number>(10)
    const [fetching, setFetching] = useState<boolean>(false)
    const [footerText, setFooterText] = useState<'Показать еще' | 'Показаны все карточки'>('Показать еще')
    const [loading, setLoading] = useState<boolean>(false)

    const scrollHandler = (e: any) => {
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 35) {
            setFetching(true)
        }
    }
    const loadData = async () => {
        const fetchedItems = await API.getItems()
        setItems(fetchedItems)
        setItemsShowed(fetchedItems.slice(0, itemsCounter))
        setItemsCounter(10)
        const fetchedImages = await API.getImages()
        setImages(fetchedImages)
    }

    useEffect(() => {
        loadData()
        window.addEventListener('scroll', scrollHandler)
        return () => window.removeEventListener('scroll', scrollHandler)
    }, [])

    useEffect(() => {
        if (fetching) {
            if (itemsCounter - 10 >= items.length) {
                setFooterText('Показаны все карточки')
                setLoading(false)
            }
            else {
                setLoading(true)
                setItemsShowed(items.slice(0, itemsCounter))
                setItemsCounter(prevState => prevState + 10)
                setFetching(false)
            }
        }
    }, [fetching])

    if (itemsShowed.length === 0 || images.length === 0) return <Preloader/>

    return <Wrapper>
        <Title>Похожие объявления</Title>
        <CardWrapper>
            <Card items={itemsShowed} images={images}/>
            {loading && <Preloader/>}
        </CardWrapper>
        <Footer>
            {footerText}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.11707 9.954L12.0711 17.1421L19.0251 9.954" stroke="#00A0AB" strokeWidth="2"
                      strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </Footer>
    </Wrapper>
})

export default App
