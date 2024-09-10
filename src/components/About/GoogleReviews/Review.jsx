import React from 'react'

const Review = () => {
  const link = 'https://www.google.com/search?q=sequence+dvir+aviram&sca_esv=8eb4cd2463a186df&sca_upv=1&sxsrf=ADLYWIJaHZEDruwhOUZkaEfvTwJmK89Bxg%3A1725979898140&ei=-lzgZs-eCNKPi-gPkpye-Q8&ved=0ahUKEwjPg9-V0LiIAxXSxwIHHRKOJ_8Q4dUDCA8&uact=5&oq=sequence+dvir+aviram&gs_lp=Egxnd3Mtd2l6LXNlcnAiFHNlcXVlbmNlIGR2aXIgYXZpcmFtMgQQIxgnMggQABiABBiiBDIIEAAYgAQYogQyCBAAGIAEGKIEMggQABiABBiiBDIIEAAYgAQYogRIjTBQAFicLHABeAGQAQCYAckBoAHvGaoBBjAuMTkuMbgBA8gBAPgBAZgCFaACtBqoAhTCAgcQIxgnGOoCwgINEC4Y0QMYxwEYJxjqAsICBxAuGCcY6gLCAg0QLhjHARgnGOoCGK8BwgIQEAAYAxi0AhjqAhiPAdgBAcICEBAuGAMYtAIY6gIYjwHYAQHCAgwQIxiABBgTGCcYigXCAgoQABiABBhDGIoFwgILEAAYgAQYsQMYgwHCAhEQLhiABBixAxjRAxiDARjHAcICDhAuGIAEGLEDGNEDGMcBwgIIEAAYgAQYsQPCAg4QLhiABBixAxjHARivAcICBRAAGIAEwgILEC4YgAQYxwEYrwHCAggQABiABBjLAcICBxAAGIAEGA3CAggQABgKGA0YHsICBhAAGA0YHsICCBAAGBYYHhgPwgIIEAAYDRgeGA-YAwu6BgYIARABGAqSBwYxLjE5LjGgB4WUAQ&sclient=gws-wiz-serp#lrd=0x151d4d1bf4dfde31:0x12b3c112cb5952b,1,,,,'
  return (
    <div className='text-black d-flex flex-column text-lg-start text-md-start text-center review-titles-container'>
      <h4>Sequence</h4>
      <h3 className='text-bolder'>Google 9 Reviews</h3>
      <a href={link} className='color-blue text-decoration-none hover-underline-animation text-bolder'>write a review</a>
      </div>
  )
}

export default Review