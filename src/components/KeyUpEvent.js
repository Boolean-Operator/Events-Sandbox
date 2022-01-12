import * as React from 'react';

function KeyUpEvent() {

  const handleKeyUp = (evt) => {
    console.log(evt.keyCode);
    if(evt.keyCode === 13) {
      alert("Are you sure you want to submit this form?");
    }
  }
  return(
    <div>
      <h3> Try typing here:</h3>
      <textarea onKeyUp={handleKeyUp} />
    </div>

  )
}

export default KeyUpEvent;