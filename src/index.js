const onClickAdd = () => {
  // テキストボックスの値を取得し初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // divを生成
  const div = document.createElement("div");
  div.className = "list-row";
  
  // liタグ作成
  const li = document.createElement("li");
  li.innerText = inputText;

  // button（完了）タグ生成
  const completebutton = document.createElement("button")
  completebutton.innerText = "完了";
  completebutton.addEventListener("click", () => {
    alert("完了");
  });

  // button（削除）タグ生成
  const deletebutton = document.createElement("button")
  deletebutton.innerText = "削除";
  deletebutton.addEventListener("click", () => {
    alert("削除");
  });

  // divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completebutton);
  div.appendChild(deletebutton);


  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
.getElementById("add-button")
.addEventListener("click", () => onClickAdd());