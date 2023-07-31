"use client"
import { StateContext } from "context/cards"
import { useContext } from "react";
import useFetch from "hooks";
import Loader from "components/Loader";
import { Card, Pagination } from "components";
import { Order } from "types";
import { Endpoints } from "utils";


export default function Home() {
	const { setCart, cart, order, setOrder, query, page, setPage } = useContext(StateContext);
	const url = Endpoints.getCarts({ order, query, page });

	const { loading, setUrl } = useFetch({
		url: cart.length === 0 ? url : null,
		setState: setCart
	});

	const totalPages: number = 10;

	const changeOrderHandler = (e: React.ChangeEvent<HTMLSelectElement>): void => {
		const newOrder = (e.target as HTMLSelectElement).value as Order;
		setOrder(newOrder);
		setUrl(Endpoints.getCarts({ order: newOrder, query, page }))
	}

	const changePageHandler = (page: number): void => {
		setPage(page);
		setUrl(Endpoints.getCarts({ order, query, page }))
	}
	return (
		<main className={'container'}>
			<div className="d-flex justify-content-between">
				<div>
					<select className="form-select" aria-label="Выберете фильтр">
						<option value="1">Один</option>
						<option value="2">Два</option>
						<option value="3">Три</option>
					</select>
				</div>
				<div>
					<select
						className="form-select" aria-label="Выбор по умолчанию"
						value={order}
						onChange={changeOrderHandler}
					>
						<option value={Order.default}>По умолчанию</option>
						<option value={Order.date}>По дате</option>
						<option value={Order.cheapest}>Дешевле</option>
						<option value={Order.expensive}>Дороже</option>
						<option value={Order.popular}>По популярности</option>
					</select>
				</div>
			</div>
			<div className="row d-flex mt-4">
				{loading ?
					<Loader />
					:
					cart.map(item => (<Card key={item.id} card={item} />))}
			</div>
			<Pagination
				setPage={changePageHandler}
				currentPage={page}
				totalPages={totalPages}
			/>
		</main>
	)
}
