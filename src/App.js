import "./styles.css";
import React, { useState, useEffect } from "react";

export default function App() {
  const [entryPrice, setEntryPrice] = useState(0);
  const [entryMoney, setEntryMoney] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [salePrice, setSalePrice] = useState(0);
  const [saleAmount, setSaleAmount] = useState(0);
  const [balance, setBalance] = useState(0);
  const [pesitos, setPesitos] = useState(150);

  const calculateQuantity = () => {
    if (entryPrice && entryMoney) {
      const newQuantity = entryMoney / entryPrice;
      setQuantity(newQuantity);
    }
  };

  const calculateSaleAmount = () => {
    if (salePrice && quantity) {
      const newSaleAmount = quantity * salePrice;
      setSaleAmount(newSaleAmount);
    }
  };

  const calculateBalance = () => {
    if ((saleAmount, entryPrice, entryMoney)) {
      const newBalance = saleAmount - entryMoney;
      setBalance(newBalance);
    }
  };

  useEffect(calculateQuantity, [entryMoney, entryPrice]);
  useEffect(calculateSaleAmount, [salePrice, quantity]);
  useEffect(calculateBalance, [saleAmount, entryPrice, entryMoney]);

  return (
    <div className="App">
      <h1 className="AppTitle">Calculadora interactiva de cripto-stonks</h1>
      <p className="AppDescription">
        Averiguá tus stonks con la estúpida calculadora de{" "}
        <a
          href="https://twitter.com/andreuscafe"
          target="_blank"
          rel="noreferrer"
        >
          @andreuscafe
        </a>
        . Btw, todos los valores están en USD porque así está el país.
        <details className="bokeSummary">
          <summary>
            Explicame no ves que soy de boca?
            {/* <button className="bokeButton">
              <img src="https://icongr.am/clarity/alert.svg?size=128&color=currentColor" />
              Soy de boca explicame mejor
            </button> */}
          </summary>
          <p>
            Dios mío, al pedo el wording en los inputs. Escuchá: Primero pones
            el precio al que estaba tu cripto cuando compraste (o el precio
            objetivo al que pensas comprar). Luego pones cuánta guita compraste
            de esa cripto. Abajo podes ver el número exacto de cripto que
            compraste. <br />
            <br /> Por ejemplo, si cuando costaba 10usd compraste la suma de
            20usd, deberías ver que tenes 2 monedas, porque 20/10 = 2. ¿Estamos?
            <br />
            <br /> Bien, luego de eso escribís a cuánto pensas vender tus
            criptos. Generalmente vas a preferir que este valor sea mayor que el
            precio de entrada. Luego de eso, vas aver el monto de salida, es
            decir la guita con la que te vas luego de tu transacción.
            <br />
            <br />
            Finalmente, abajo está el balance, que es la diferencia real entre
            lo que vos invertiste inicialmente (tus 20usd) y la guita que
            ganaste o perdiste.
            <br />
            <br />
            Por si te interesa también, abajo podes ver cuánto va a ser esa
            plata en tu moneda local (pesos argentinos por ejemplo).
          </p>
        </details>
      </p>

      <label>
        <span>¿A cuánto estaba la cripto cuando compraste?</span>
        <input
          type="number"
          onChange={(e) => {
            setEntryPrice(+e.target.value);
          }}
          defaultValue={entryPrice}
        />
      </label>
      <label>
        <span>¿Y cuántas lechugas metiste en eso?</span>
        <input
          type="number"
          onChange={(e) => {
            setEntryMoney(+e.target.value);
          }}
          defaultValue={entryMoney}
        />
      </label>
      <label>
        <span>Entonces tenes esta cantidad de criptos:</span>
        <input type="number" readOnly value={quantity.toFixed(6)} disabled />
      </label>
      <label>
        <span>¿A cuánto pensas vender?</span>
        <input
          type="number"
          onChange={(e) => {
            setSalePrice(+e.target.value);
          }}
          defaultValue={salePrice}
        />
      </label>
      <label>
        <span>Monto a la salida</span>
        <input type="number" readOnly disabled value={saleAmount.toFixed(6)} />
      </label>

      <div className="balanceWrapper">
        <span className="label">Balance:</span>
        <span className={`balance ${balance > 0 ? "good" : "bad"}`}>
          {balance.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
          })}
          {" USD"}
        </span>
        <span className={`pesos ${balance > 0 ? "good" : "bad"}`}>
          Que con el USD a{" "}
          <input
            type="number"
            className="pesoInput"
            onChange={(e) => setPesitos(+e.target.value)}
            defaultValue={pesitos}
          />{" "}
          crocantes sería...
        </span>
        <span className={`balance peso ${balance > 0 ? "good" : "bad"}`}>
          {(balance * pesitos).toLocaleString("en-US", {
            style: "currency",
            currency: "ARS"
          })}
        </span>
        <span>Resultado final:</span>
        {balance > 0 ? (
          <img
            className="image"
            alt="Stonks"
            src="https://miro.medium.com/max/724/0*BfXeheBVJq4vgNTx"
          />
        ) : (
          <img
            className="image"
            alt="Not stonks"
            src="https://static1-es.millenium.gg/articles/3/29/15/3/@/133783-stonks-article_image_t-2.jpg"
          />
        )}
      </div>
    </div>
  );
}
