"use client";
import { StateContext } from "context/cards";
import useFetch from "hooks";
import { useContext } from "react";
import { Endpoints, AppRoutes } from "utils";
import Link from "next/link";
import ICON from "./Icons";
import Image from "next/image";

export default function Header() {
    const { searchHistory, setSearchHistory, query, setQuery } = useContext(StateContext);
    const url = Endpoints.getSearchHistory();

    useFetch({
        url: searchHistory.length === 0 ? url : null,
        setState: setSearchHistory
    });
    const filteredSearchHistory = searchHistory.filter(item =>
        query.trim().length > 0 && item.name.toLowerCase().includes(query.toLowerCase()))
    const searchHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const value = (e.target).value as string;
        setQuery(value);

    }
    return (
        <header className="w-100 fixed-top">
            <nav className="navbar navbar-expand-md">
                <div className="container-fluid d-flex gap-2">
                    <Link href={AppRoutes.home} className="navbar-brand">
                        <Image
                            src={"/images/icons/logo.png"}
                            alt=""
                            width={222}
                            height={103}
                        />
                    </Link>
                    <button
                        className="navbar-toggler border-0"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarTogglerDemo03"
                        aria-controls="navbarTogglerDemo03"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between" id="navbarTogglerDemo03">
                        <div className="dropdown d-flex ">
                            <form className="d-flex" role="search" >
                                <div className="input-group border border-radius bg-white">
                                        <button type="button" className="btn border-0 bg-white">
                                            <ICON name="search" class="icon13" color="#FDD446"/>
                                        </button>
                                    <input
                                        type="search"
                                        value={query}
                                        onChange={searchHandler}
                                        className="form-control border-0" placeholder="Поиск..."
                                        data-bs-toggle={'dropdown'}
                                        aria-expanded={false}
                                    />
                                    <ul className="dropdown-menu bg-white" style={{ opacity: filteredSearchHistory.length > 0 ? "1" : "0" }}>
                                        {filteredSearchHistory.map(item => {
                                            return (
                                                <li key={item.id}>
                                                    <button
                                                        key={item.id}
                                                        className="d-flex justify-content-start gap-1 dropdown-item"
                                                        onClick={() => setQuery(item.name)}
                                                    >
                                                        <div className="d-flex justify-content-center">
                                                            <img alt="" src={item.image} className="img-fluid" style={{ width: "24px", height: "24px" }} />
                                                        </div>
                                                        <div>{item.name}</div>
                                                    </button>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>

                            </form>
                        </div>
                        <div className="d-flex justify-content-between gap-2 authButtons">
                            <Link href={AppRoutes.login} className="btn border-warning bg-white">Вход</Link>
                            <Link href={AppRoutes.register} className="btn bg-warning ">Регистрация</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>)
}