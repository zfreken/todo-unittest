import { useState } from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';



const defaultItems = [
  {
    name: 'Title A'
  },
  {
    name: 'Title B'
  },
  {
    name: 'Title C'
  }
]

function Todo() {

  const [text, setText] = useState('');
  const [items, setItems] = useState(defaultItems);


  const addItem = () => {
    setItems((prev) => [...prev, { name: text }]);
    setText('');
  }

  return (
    <div>
      <div className="input-group mb-3">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="form-control"
          placeholder="Title giriniz"
        />
        <div className="input-group-append">
          <button className="btn btn-secondary" onClick={addItem}>Ekle</button>
        </div>
      </div>

      {
        items.map((item, index) =>
          (<div className="d-flex justify-content-center" key={index} > {item.name}</div>))
      }
    </div>
  )
}

export default Todo