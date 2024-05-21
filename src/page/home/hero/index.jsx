import { Component, Fragment } from 'react'
import heroImg from "../../../assets/hero/hero img.webp"
import "./Hero.scss"

export default class Hero extends Component {
    render() {
        return (
            <Fragment>
                <section className='hero container'>
                    <div className='hero__boxes-wrapper'>
                        <div className='hero__left-boxes'>
                            <h1 className='hero__left-boxes__title'>Одна цена</h1>
                            <h3 className='hero__left-boxes__text'>При заказе от 3 до 10 товаров</h3>
                            <button className='hero__left-boxes__btn'>
                                <span>Купить</span>
                                <div><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none"><path d="M17.2744 11.9844C17.5725 12.2632 17.5725 12.7329 17.2744 13.0117L10.5118 19.3359C10.2697 19.5623 9.89006 19.5495 9.66372 19.3075C9.43739 19.0655 9.45011 18.6858 9.69213 18.4595L16.0668 12.498L9.69213 6.5366C9.45011 6.31026 9.43739 5.93057 9.66372 5.68854C9.89006 5.44652 10.2697 5.4338 10.5118 5.66013L17.2744 11.9844Z" fill="currentColor"></path><path d="M17.2744 11.9844C17.5725 12.2632 17.5725 12.7329 17.2744 13.0117L10.5118 19.3359C10.2697 19.5623 9.89006 19.5495 9.66372 19.3075C9.43739 19.0655 9.45011 18.6858 9.69213 18.4595L16.0668 12.498L9.69213 6.5366C9.45011 6.31026 9.43739 5.93057 9.66372 5.68854C9.89006 5.44652 10.2697 5.4338 10.5118 5.66013L17.2744 11.9844Z" fill="currentColor"></path></svg></div>
                            </button>
                        </div>
                        <div className='hero__right-boxes'>
                            <img src={heroImg} alt="Hero img" />
                        </div>
                    </div>
                </section>
            </Fragment>
        )
    }
}
