import Container from '@/app/ui/Container'
import React from 'react'

const Banner = () => {
  return (
    <Container>
        <div
  className="embed-responsive embed-responsive-21by9 relative w-full overflow-hidden"
  style={{paddingTop:"42.857143%"}}>
  <iframe
    className="embed-responsive-item absolute bottom-0 left-0 right-0 top-0 h-full w-full"
    src="https://www.youtube.com/embed/vlDzYIIOYmM?enablejsapi=1&amp;origin=https%3A%2F%2Fmdbootstrap.com"
    
    data-gtm-yt-inspected-2340190_699="true"
    id="240632615"></iframe>
</div>
    </Container>
  )
}

export default Banner