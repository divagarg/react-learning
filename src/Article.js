import React from 'react';


export default function Article(para) {

    const article = para.article;

    const addItem = function (itemId) {
        para.onAdd(itemId);
    }

    const removeItem = function (itemId) {
        para.onRemove(itemId);
    }

    const reset = function (itemId) {
        para.onReset(itemId);
    }


    return (

        <tr key={article.id}>
            <td>     <img src="./logo192.png" alt="An Item" width="42" height="42" /></td>
            <td>{article.title}</td>
            <td >{article.text}</td>
            <td >{article.price}</td>
            <td >{article.quantity}</td>
            <td >  <button onClick={() => addItem(article.id)}>Add</button></td >
            <td >   <button disabled={article.quantity > 0 ? false : true} onClick={() => removeItem(article.id)}>Remove</button></td >
            <td >   <button disabled={article.quantity > 0 ? false : true} onClick={() => reset(article.id)}>Reset</button></td >
        </tr>

    );

}