import Modal from 'react-bootstrap/Modal'
import useRecorder from "./useRecorder";
import { useState } from 'react'
import MessegeList from '../ChatMessege/MessegeList';
function Record({user, name , time,showChat, showLastMessege}) {


    let [audioURL, isRecording, startRecording, stopRecording] = useRecorder();

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    function sendRec(e){
      
      MessegeList[user].push({ name: name, content: audioURL, time: time,messege:false,file:false,audio:true,video:false, typeOfMessege: 'sendAudio'});
     
      showChat(name);
      showLastMessege('audio',name,time);
      setShow(false);
    }


  return (
<div>

    <i id="mic" className="bi bi-mic" onClick={handleShow}></i>


            <Modal show={show} onHide={handleClose} animation={false}>
              <Modal.Header closeButton>
              </Modal.Header>
              <Modal.Body>
              <button className="rec btn btn-success" onClick={startRecording} disabled={isRecording}>
                start recording
              </button>
              <button className="rec btn btn-danger" onClick={stopRecording} disabled={!isRecording}>
                stop recording
              </button>
              </Modal.Body>
              <Modal.Footer>
                <button type="button" className="btn btn-info btn-lg" variant="primary" onClick={sendRec}>
                  send record
                </button>
              </Modal.Footer>
            </Modal>

</div>
  );
}

export default Record;