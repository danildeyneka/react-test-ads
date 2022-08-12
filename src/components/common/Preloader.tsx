import {FC} from 'react'
import preloader from '../../images/preloader.gif'

export const Preloader: FC = () => {

    return <div>
        <img src={preloader} alt="preloader"/>
    </div>
}