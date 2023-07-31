"use client";
import { CartType } from "types"

type Props = {
    card: CartType;
}

export default function Card({ card: item }: Props) {
    return (
        <div className="col-md-5 col-lg-3 col-sm-11 mb-4" >
            <div className="card">
                <div className="card-body">
                    <div className="d-grid  gap-1">
                        <img src={item.image} alt="Картинка карточки" className="img-fluid object-fit-cover" style={{ height: "280px" }} />
                        <strong className="fs-6">{item.title}</strong>
                        <div className="d-flex gap-1 flex-start">
                            <img src={item.seller.image} alt="Маленькая картинка" className="img-fluid" style={{ width: "48px", height: "48px" }} />
                            <div className="grid row">
                                <span className="fs-6 m-0">{item.seller.name}</span>
                                <span className="text-warning">проверено
                                    <img src="./images/icons/check-gold.png" alt="Иконка проверки" className="img-fluid" style={{ width: "14px" }} />
                                </span>
                            </div>
                        </div>
                        <div className="d-grid grid gap-3">
                            <div className="d-flex justify-content-between">
                                <span className="">Редкость:</span>
                                <span className="border border-warning p-1 rounded">{item.rarity}</span>
                            </div>
                            <div className="d-flex justify-content-between">
                                <span className="">Цена:</span>
                                <span className="bg-warning p-1 rounded">от {item.price} ₽</span>
                            </div>
                            <button className="btn rounded bg-warning bg-gradient w-100">Купить</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}