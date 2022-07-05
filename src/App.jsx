import React from "react";
import ColorfulMessage from "./compornents/ColorfulMessage";

const App = () => {
  const onClickBtn = () => {
    alert();
  };

  return (
    <>
      <div>
        <input placeholder="TODOを入力" type="text" />
        <button>追加</button>
      </div>
      <div>
        <p>未完了のTODO</p>
        <ul>
          <li>ああああ</li>
          <button>完了</button>
          <button>削除</button>
        </ul>
        <ul>
          <li>ああああ</li>
          <button>完了</button>
          <button>削除</button>
        </ul>
      </div>
      <div>
        <p>完了のTODO</p>
        <ul>
          <li>ああああ</li>
          <button>完了</button>
          <button>削除</button>
        </ul>
      </div>
      <div></div>
    </>
  );
};

export default App;
