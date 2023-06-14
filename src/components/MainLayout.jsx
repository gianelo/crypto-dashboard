import { useEffect, useState } from 'react'
const COINRANKING_API_URL = 'https://api.coinranking.com/v2/coins'
const OPTIONS_FOR_REQUEST = {
  headers: {
    'Content-Type': 'application/json',
    'x-access-token': 'coinranking782d41f72e74f83a77ef7443ec3e52a2b021d2289371cce9'
  }
}
export function MainLayout () {
  const [coins, setCoins] = useState([])

  useEffect(() => {
    fetch(COINRANKING_API_URL, OPTIONS_FOR_REQUEST)
      .then(res => res.json())
      .then(data => {
        const { coins } = data.data
        console.log(coins)
        setCoins(coins)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <section className='main-layout'>
      <h1>All Coins</h1>
      <button className='update-button'>Update</button>
      <table className='cryptoTable'>
        <thead className='cryptoTable-head'>
          <tr>
            <th>Coin</th>
            <th>Price</th>
            <th>Market Cap</th>
          </tr>
        </thead>
        <tbody className='cryptoTable-body'>
          {
            coins.map((coin) => {
              return (
                <tr className='cryptoTable-bodyRow' key={coin.uuid}>
                  <td>{coin.name}</td>
                  <td>{Number(coin.price).toLocaleString('en-US')}</td>
                  <td>{Number(coin.marketCap).toLocaleString('en-US')}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </section>
  )
}
