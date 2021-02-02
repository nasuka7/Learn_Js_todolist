const onClickAdd = () => {
  // テキストボックスの値を取得し初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

  // 未完了のリストから指定の要素を削除
  const deleteFromIncompleteList = (target) => {
    document.getElementById("incomplete-list").removeChild(target);
  };

  //未完了リストに追加する関数
  const createIncompleteList = (text) => {
      // divを生成
    const div = document.createElement("div");
    div.className = "list-row";
    
    // liタグ作成
    const li = document.createElement("li");
    li.innerText = text;

    // button（完了）タグ生成
    const completebutton = document.createElement("button")
    completebutton.innerText = "完了";
    completebutton.addEventListener("click", () => {
      // 押された完了ボタンの親タグを未完了リストから削除
      deleteFromIncompleteList(completebutton.parentNode);

      // 完了リストに追加する要素
      const addTarget = completebutton.parentNode;

      //ToDo内容テキストを取得
      const text = addTarget.firstElementChild.innerText;

      //divを初期化
      addTarget.textContent = null;

      //liタグ生成
      const li = document.createElement("li");
      li.innerText = text;

      //buttonタグ生成
      const backButton = document.createElement("button");
      backButton.innerText = "戻す"
      backButton.addEventListener("click", () => {
        const deleteTarget = backButton.parentNode;
        document.getElementById("complete-list").removeChild(deleteTarget);

        const text = backButton.parentNode.firstElementChild.innerText;
        createIncompleteList(text);
      });

      //divタグの子要素に各要素を設定
      addTarget.appendChild(li);
      addTarget.appendChild(backButton);

      //完了リストに追加
      document.getElementById("complete-list").appendChild(addTarget);
    });

    // button（削除）タグ生成
    const deletebutton = document.createElement("button")
    deletebutton.innerText = "削除";
    deletebutton.addEventListener("click", () => {
      // 押された削除ボタンの親タグを未完了リストから削除
      deleteFromIncompleteList(deletebutton.parentNode);
    });

    // divタグの子要素に各要素を設定
    div.appendChild(li);
    div.appendChild(completebutton);
    div.appendChild(deletebutton);


    // 未完了リストに追加
    document.getElementById("incomplete-list").appendChild(div);
    }
document
.getElementById("add-button")
.addEventListener("click", () => onClickAdd());