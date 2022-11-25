import React, { useEffect } from 'react';
import millify from 'millify'
import { Link } from 'react-router-dom';
import { Card,Row,Col,Input } from 'antd';
import { useGetCryptosQuery } from '../services/cryptoApi';
import { useState } from 'react';

const Cryptocurrencies = (simplified) => {
  // const count=simplified ? 10 : 100
  const {data:cryptosList,isFetching}=useGetCryptosQuery()
  const [cryptos,setCryptos]=useState([])
  const [search,setSearch]=useState('')
  console.log(cryptos)

  useEffect(()=>{
    // setCryptos(cryptosList?.data?.coins)
    const filteredData=cryptosList?.data?.coins.filter((coin)=>coin.name.toLowerCase().includes(search.toLowerCase()))
    setCryptos(filteredData)
  },[cryptosList,search])
  if(isFetching) return "Loading..."

  return (
        <>
        <div className='search-crypto' > 
            <Input placeholder='Search crypto' onChange={(e)=>setSearch(e.target.value)} />
        </div>
          <Row gutter={[32,32]} className='crypto-card-container' >
                {
                  cryptos?.map((currency)=>(
                    <Col xs={24} sm={12} lg={6} className='crypto-card' key={currency.uuid} >
                      <Link to={`/crypto/${currency.uuid}`}  >
                          <Card title={`${currency.rank}.${currency.name}`} 
                            extra={<img className='crypto-image' src={currency.iconUrl} />}
                            hoverable
                          >
                              <p>Price:{millify(currency.price)}</p>
                              <p>Price:{millify(currency.marketCap)}</p>
                              <p>Price:{millify(currency.change)}%</p>
                          </Card>
                      </Link>

                    </Col>
                  ))
                }
          </Row>
        </>
    )
};

export default Cryptocurrencies;
