import React from 'react'

const Cards = () => {
  return (
    <div>
        <section className='card'>
            <div className="container">
                <div className="row">
                <div className="box">
                    <img src="/first-card.avif" alt="" />
                    <h2>Artificial Intelligence</h2>
                    <p>Artificial intelligence (AI) is a set of technologies that enable computers to perform a variety of advanced functions, including the ability to see, understand and translate spoken written language, analyze data, make recommendations and more.</p>
                    <button className='btn'>Read more</button>
                </div>
                <div className="box">
                    <img src="/card -2.avif" alt="" />
                    <h2>Crypto Currency</h2>
                    <p>Cryptocurrency is a type of digital or virtual currency that uses and  the cryptography for security. Unlike traditional money (like dollars or rupees), cryptocurrency operates independently of a central authority like a government or a bank..</p>
                    <button className='btn'>Read more</button>
                </div>
                <div className="box">
                    <img src="/card-3.avif" alt="" />
                    <h2>Forex Trading</h2>
                    <p>Forex trading, also known as foreign exchange or FX trading, is the conversion of one currency into another. FX is one of the most actively traded markets in tcarrying out around $6.6 trillion worth of forex transactions every single day.</p>
                    <button className='btn'>Read more</button>
                </div>
                </div>

                <div className="row">
                <div className="box">
                    <img src="card-4s.avif" alt="" />
                    <h2>Cyber Security</h2>
                    <p>Computer security is the protection of computer software, systems and networks from threats that can lead to unauthorized misdirection of the services they provide..</p>
                    <button  className='btn'>Read more</button>
                </div>
                <div className="box">
                    <img src="/card-5.avif" alt="" />
                    <h2>Block Chain </h2>
                    <p>Blockchain technology is a distributed ledger system that ensures data security, transparency, and the immutability. It’s verify digital transactions..</p>
                    <button className='btn'>Read more</button>
                </div>
                <div id='box-6' className="box">
                    <img src="/card-6.avif" alt="" />
                    <h2 id='box-6'>Cloud Computing</h2>
                    <p>Cloud computing allows businesses and individuals to access and , and cost savings. Popular platforms include Amazon Web Services (AWS), Microsoft Azure, and Google Cloud..</p>
                    <button className='btn'>Read more</button>
                </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Cards