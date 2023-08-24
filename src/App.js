import "./css/styles.css";
import data from "./data/data";
import columns from "./data/columns";
import Table from "./component/DataTable";

export default function App() {
  const clickhandler = (name) => console.log("delete", name);

  return (
    <div className="App">
      <h1>データテーブル表示テスト</h1>
      <Table columns={columns} data={data} click={clickhandler} />
    </div>
  );
}
