import React from 'react'

const Board = () => {
  return (
    <>
      <div className='ludoContainer'>
          <div id='ludoBoard'>
            <div id='red-Board' className='board'>
              <div>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div id='green-path' className='verticalPath'>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
            </div>
            <div id='green-Board' className='board'>
              <div>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
              <div id='red-path' className='horizontalPath'>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
            
            </div>
            <div id="win-Zone"></div>
            <div id='yellow-path' className='horizontalPath'>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
            
            </div>
            <div id='blue-Board' className='board'>
              <div>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div id='blue-path' className='verticalPath'>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
            </div>
            <div id='yellow-Board' className='board'>
              <div>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            

          </div>
      </div>
    </>
  )
}

export default Board