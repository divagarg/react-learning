import React from 'react';
import { useState, useEffect } from 'react';
import Article from "./Article";
import { useLocation } from 'react-router-dom';

export default function Articles(para) {

    const location = useLocation();

    const userName = location.state == null ? "" : location.state.name;
    
    const items = [
        {
            "id": 1,
            "title": "Cheese",
            "text": "Aged",
            "price": 8,
            "quantity": 0
        },
        {
            "id": 2,
            "title": "Bread",
            "text": "Brown",
            "price": 4,
            "quantity": 0
        },

        {
            "id": 3,
            "title": "Ham",
            "text": "Fresh",
            "price": 10,
            "quantity": 0
        }
    ];

    const findTotalArticles = function () {

        // console.log(articles);
    }

    const [articles, setItems] = useState(items);

    const [sorting, setSorting] = useState({ field: 'article', ascending: false })

    const applySorting = function (key, ascending) {
        setSorting({ key: key, ascending: ascending });
    }

    useEffect(() => {

        const data = [...articles].sort(
            (p1, p2) => {
                const nameA = p1.title.toUpperCase();
                const nameB = p2.title.toUpperCase();

                if (sorting.ascending) {
                    if (nameA < nameB) {
                        return -1;
                    }
                    if (nameA > nameB) {
                        return 1;
                    }
                } else {
                    if (nameA > nameB) {
                        return -1;
                    }
                    if (nameA < nameB) {
                        return 1;
                    }
                }

                return 0;
            });

        setItems(data);
    }, [sorting]);

    const addItem = function (itemId) {
        const newItems = articles.map((item) =>
            item.id == itemId ? { ...item, "quantity": item.quantity + 1 } : item
        );
        setItems(newItems);
    }

    const removeItem = function (itemId) {
        const newItems = articles.map((item) =>
            item.id == itemId ? { ...item, "quantity": item.quantity - 1 } : item
        );
        setItems(newItems);
    }

    const reset = function (itemId) {
        const newItems = articles.map((item) =>
            item.id == itemId ? { ...item, "quantity": 0 } : item
        );
        setItems(newItems);
    }


    // return (
    //     <div className="main-content">
    //         <h1></h1>
    //         <table>
    //             <thead>
    //                 <tr>
    //                     <th><a href="#">Food</a></th>
    //                     <th>Information</th>
    //                     <th>Price</th>
    //                     <th>Quantity</th>
    //                 </tr>
    //             </thead>
    //             {articles.map((article, key) =>
    //                 <tbody>
    //                     <tr key={article.id}>
    //                         <td>{article.title}</td>
    //                         <td >{article.text}</td>
    //                         <td >{article.price}</td>
    //                         <td >{article.quantity}</td>
    //                         <td >  <button onClick={() => addItem(article.id)}>Add</button></td >
    //                         <td >   <button disabled={article.quantity > 0 ? false : true} onClick={() => removeItem(article.id)}>Remove</button></td >
    //                         <td >   <button disabled={article.quantity > 0 ? false : true} onClick={() => reset(article.id)}>Reset</button></td >
    //                     </tr>
    //                 </tbody>)
    //             }
    //         </table>
    //     </div>
    // );

    return (
        <div>
            <div><span>{userName}</span></div>
            <div className="main-content">

                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th onClick={() => applySorting('article', !sorting.ascending)}>Article</th>
                            <th>Detail</th>
                            <th>Price</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>
                    {
                        articles.map((article, key) =>
                            <tbody key={article.id}>
                                <Article article={article} onAdd={addItem} onRemove={removeItem} onReset={reset} />
                            </tbody>
                        )
                    }
                </table>
            </div>
        </div>
    );
}