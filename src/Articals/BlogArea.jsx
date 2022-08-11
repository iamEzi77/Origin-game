import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "./blog.css"
import { BlogData } from './BlogData'
import { useState } from 'react'
const BlogArea = () => {
  const [readMore, setReadMore] = useState(false)
  return (
    <>
      <section className="blog-area ">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8">
              <div className="section-title title-style-three text-center ">
                <h2>Latest News <span>Articles</span></h2>
                <p>Latest new about the games from all over the world all news about new released games and updates of the games </p>
              </div>
            </div>
          </div>
          < div className="row gx-5">
            {BlogData.map((data) => {
              return (
                <>
                  <div className="col-lg-4 col-md-6">
                    <div className="blog-post blog-style-two ">
                      <div className="blog-thumb ">
                        <a to="/#"><img src={data.img} key={data.id} alt="" /></a>
                      </div>
                      <div className="blog-post-content">
                        <h4><a to="/#">{data.name}</a></h4>
                        <div className="blog-meta">
                          <ul>
                            <li><i>{data.icon1}</i>July 4, 2022</li>
                            <li><i className='sh'>{data.icon2}</i><a to="/#">Shooter</a></li>
                          </ul>
                        </div>
                        <p>{data.info} [...]</p>
                        <button onClick={()=>setReadMore(!readMore)}>{readMore?"Read more":"Show Less"}</button>
                      </div>
                    </div>
                  </div>
                </>
              )
            })}


          </div>
        </div>
      </section>
    </>
  )
}

export default BlogArea
