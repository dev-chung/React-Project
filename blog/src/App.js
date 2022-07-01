import React, { useState } from 'react';
import './App.css';

function App() {
  //State 장점: 데이터가 변경 되어도 새로고침되지 않고 재렌더링되어 반영
  //ES6 destructuring
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '새해복 많이 받으세요', '한 해의 마지막']);
  let [날짜, 날짜변경] = useState(['2월 27일', '1월 1일', '12월 31일',])
  let [좋아요, 좋아요변경] = useState(0);

  function 제목바꾸기() {
    var newArray = [...글제목]; //Deep copy
    newArray[0] = '여자 코트 추천';
    글제목변경(newArray);
  }
  return (
    <div className="App">
      <div className='black-nav'>
        <div>개발 Blog</div>
      </div>
      <div className='list'>
        <button onClick={제목바꾸기}>버튼</button>
        <h4>{글제목[0]} <span onClick={() => { 좋아요변경(좋아요 + 1) }}>💜</span> {좋아요} </h4>
        <p>{날짜[0]}</p>
        <hr />
      </div>
      <div className='list'>
        <h4>{글제목[1]}</h4>
        <p>{날짜[1]}</p>
        <hr />
      </div>
      <div className='list'>
        <h4>{글제목[2]}</h4>
        <p>{날짜[2]}</p>
        <hr />
      </div>

      <Modal title={글제목[0]} date={날짜[0]} />

    </div>
  );
}

//컴포넌트
function Modal(props) {
  return (
    <div className='modal'>
      <h2> {props.title} </h2>
      <p>{props.date}</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
