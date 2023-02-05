import React from 'react'
import bucketgirl from '../../Assets/Imgaes/bucketgirl.png'

const LandingPage = () => {
  return (
        <div className="hero bg-base-200 mt-16">
          <div className="hero-content flex-col   lg:flex-row">
            <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-primary">Get Started</button>
            </div>
            <img src={bucketgirl} className="max-w-sm" alt=''/>
          </div>
        </div>
  )
}

export default LandingPage