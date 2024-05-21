import { Component, Fragment } from 'react';
import "./Products.scss";
import axios from 'axios';

const API_URL = "https://dummyjson.com";

export default class Products extends Component {
    constructor() {
        super();
        this.state = {
            data: null,
            offset: 1,
            categories: null,
            loading: false,
            categoryValue: "/products"
        };
    }

    componentDidMount() {
        this.setState({ loading: true });
        axios
            .get(`${API_URL}${this.state.categoryValue}?limit=${this.state.offset * 12}`)
            .then(response => this.setState({ data: response.data.products }))
            .catch(error => console.error(error))
            .finally(() => this.setState({ loading: false }));

        axios
            .get(`${API_URL}/products/categories`)
            .then(response => this.setState({ categories: response.data }))
            .catch(error => console.error(error));
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.offset !== prevState.offset || this.state.categoryValue !== prevState.categoryValue) {
            this.setState({ loading: true });
            axios
                .get(`${API_URL}${this.state.categoryValue}?limit=${this.state.offset * 12}`)
                .then(response => this.setState({ data: response.data.products }))
                .catch(error => console.error(error))
                .finally(() => this.setState({ loading: false }));
        }
        if (this.state.categoryValue !== prevState.categoryValue) {
            this.setState({offset:1})
        }
    }

    render() {
        const products = this.state.data?.map((product) => {
            return (
                <div key={product.id} className='product__card'>
                    <div className='products__img-wrapper'>
                        <img src={product.images[0]} alt={product.title} />
                    </div>
                    <div className='products__info-wrapper'>
                        <h3 className='products__title'>{product.title + " " + product.description}</h3>
                        <div className='products__info-wrapper__rating-boxes'>
                            <div>
                                <svg fill="#cc290a" width={16} height={16} viewBox="0 0 32 32">
                                    <path d="M15.092 2.969a1 1 0 011.816 0l3.372 7.31a1 1 0 00.79.574l7.994.947a1 1 0 01.561 1.728l-5.91 5.465a1 1 0 00-.302.93l1.57 7.895a1 1 0 01-1.47 1.067l-7.024-3.932a1 1 0 00-.977 0l-7.025 3.932a1 1 0 01-1.469-1.067l1.569-7.896a1 1 0 00-.302-.929l-5.91-5.465a1 1 0 01.561-1.728l7.994-.947a1 1 0 00.79-.575l3.372-7.31z"></path>
                                </svg>
                                <p>{product.rating}</p>
                            </div>
                            <p>{product.stock + " " + "купили"}</p>
                        </div>
                        <span className='products__price'>{product.price} UZS</span>
                    </div>
                </div>
            );
        });

        const categories = this.state.categories?.map((category) => (
            <li key={category}>
                <data
                    style={{
                        color: this.state.categoryValue === `/products/category/${category}` ? "#000" : "#A0A0AB",
                        borderBottom: this.state.categoryValue === `/products/category/${category}` ? "2px solid #000" : "2px solid transparent"
                    }}
                    onClick={(e) => this.setState({ categoryValue: e.target.value })} value={`/products/category/${category}`}>
                    {category.charAt(0).toUpperCase() + category.slice(1).toLowerCase()}
                </data>
            </li>
        ));

        return (
            <Fragment>
                <section className='products container'>
                    <div className='products__categories'>
                        <ul className='products__list'>
                            <li><data
                            style={{
                                color: this.state.categoryValue === `/products` ? "#000" : "#A0A0AB",
                                borderBottom: this.state.categoryValue === `/products` ? "2px solid #000" : "2px solid transparent"
                            }}
                             onClick={(e) => this.setState({ categoryValue: e.target.value })} value="/products">All</data></li>
                            {categories}
                        </ul>
                    </div>
                    <div className='products__cards'>
                        {products}
                    </div>
                    <button
                        disabled={this.state.loading}
                        onClick={() => this.setState({ offset: this.state.offset + 1 })}
                        className='products__btn'
                    >
                        Показать ещё
                    </button>
                </section>
            </Fragment>
        );
    }
}
